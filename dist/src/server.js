import { createServer } from 'http';
import { Server as SocketIOServer } from 'socket.io';
import 'dotenv/config';
import app from "./app.js";
const PORT = process.env.PORT || 5000;
const httpServer = createServer(app);
// ── Socket.io Setup ──────────────────────────────────────────
const io = new SocketIOServer(httpServer, {
    cors: {
        origin: process.env.CLIENT_URL || '*',
        credentials: true,
    },
});
// Track online users: userId → socketId
const onlineUsers = new Map();
io.on('connection', (socket) => {
    console.log(`[Socket] Connected: ${socket.id}`);
    // Register user as online
    socket.on('user:online', (userId) => {
        onlineUsers.set(userId, socket.id);
        socket.join(`user:${userId}`);
        console.log(`[Socket] User online: ${userId}`);
    });
    // Join a chat room
    socket.on('chat:join', (chatId) => {
        socket.join(`chat:${chatId}`);
        console.log(`[Socket] ${socket.id} joined chat:${chatId}`);
    });
    // Leave a chat room
    socket.on('chat:leave', (chatId) => {
        socket.leave(`chat:${chatId}`);
    });
    // New text message in a chat
    socket.on('chat:message', async (data) => {
        try {
            // Dynamically import prisma to avoid circular dep issues
            const { prisma } = await import("./config/prisma.js");
            const message = await prisma.message.create({
                data: {
                    chatId: data.chatId,
                    senderId: data.senderId,
                    senderType: data.senderType,
                    content: data.content,
                    images: data.images || [],
                },
            });
            // Update chat timestamp
            await prisma.chat.update({
                where: { id: data.chatId },
                data: { updatedAt: new Date() },
            });
            // Broadcast to everyone in the chat room (including sender)
            io.to(`chat:${data.chatId}`).emit('chat:message', message);
        }
        catch (err) {
            console.error('[Socket] chat:message error', err);
            socket.emit('chat:error', { error: 'Failed to send message' });
        }
    });
    // Mark message as read
    socket.on('chat:read', async (data) => {
        try {
            const { prisma } = await import("./config/prisma.js");
            const updated = await prisma.message.update({
                where: { id: data.messageId },
                data: { readAt: new Date() },
            });
            io.to(`chat:${data.chatId}`).emit('chat:read', updated);
        }
        catch (err) {
            console.error('[Socket] chat:read error', err);
        }
    });
    // Typing indicator
    socket.on('chat:typing', (data) => {
        socket.to(`chat:${data.chatId}`).emit('chat:typing', data);
    });
    socket.on('disconnect', () => {
        // Clean up online users map
        for (const [userId, sId] of onlineUsers.entries()) {
            if (sId === socket.id) {
                onlineUsers.delete(userId);
                break;
            }
        }
        console.log(`[Socket] Disconnected: ${socket.id}`);
    });
});
// Attach io instance to app for use in controllers if needed
app.set('io', io);
httpServer.listen(PORT, () => {
    console.log(`[Server] Running on port ${PORT}`);
});
//# sourceMappingURL=server.js.map