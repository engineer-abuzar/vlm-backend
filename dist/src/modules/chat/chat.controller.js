import { prisma } from "../../config/prisma.js";
import { uploadToCloudinary } from "../../services/upload.js";
/**
 * POST /chat
 * Create or retrieve existing chat between a student and teacher.
 */
export const createOrGetChat = async (req, res, next) => {
    const { studentId, teacherId } = req.body;
    if (!studentId) {
        res.status(400).json({ error: 'studentId is required' });
        return;
    }
    // Find existing chat
    let chat = await prisma.chat.findFirst({
        where: { studentId, teacherId: teacherId || null },
        include: {
            student: true,
            teacher: true,
            messages: { orderBy: { createdAt: 'asc' } },
        },
    });
    if (!chat) {
        chat = await prisma.chat.create({
            data: { studentId, teacherId },
            include: {
                student: true,
                teacher: true,
                messages: { orderBy: { createdAt: 'asc' } },
            },
        });
    }
    res.status(200).json({ chat });
};
/**
 * GET /chat/student/:studentId
 * Get all chats for a student.
 */
export const getStudentChats = async (req, res, next) => {
    const studentId = String(req.params.studentId);
    const chats = await prisma.chat.findMany({
        where: { studentId },
        include: {
            teacher: true,
            messages: {
                orderBy: { createdAt: 'desc' },
                take: 1, // last message preview
            },
        },
        orderBy: { updatedAt: 'desc' },
    });
    res.status(200).json({ chats });
};
/**
 * GET /chat/:chatId/messages
 * Get paginated messages for a chat.
 */
export const getChatMessages = async (req, res, next) => {
    const chatId = String(req.params.chatId);
    const page = parseInt(req.query.page || '1');
    const limit = parseInt(req.query.limit || '50');
    const skip = (page - 1) * limit;
    const messages = await prisma.message.findMany({
        where: { chatId },
        orderBy: { createdAt: 'asc' },
        skip,
        take: limit,
    });
    const total = await prisma.message.count({ where: { chatId } });
    res.status(200).json({ messages, total, page, limit });
};
/**
 * POST /chat/:chatId/messages
 * Send a message in a chat (REST fallback; real-time via socket).
 */
export const sendMessage = async (req, res, next) => {
    const chatId = String(req.params.chatId);
    const { senderId, senderType, content } = req.body;
    const files = req.files;
    if (!senderId || !senderType || !content) {
        res.status(400).json({ error: 'senderId, senderType, and content are required' });
        return;
    }
    // Upload images if any
    const imageUrls = [];
    if (files && files.length > 0) {
        for (const file of files) {
            const url = await uploadToCloudinary(file.buffer, 'chat');
            imageUrls.push(url);
        }
    }
    const message = await prisma.message.create({
        data: {
            chatId,
            senderId,
            senderType,
            content,
            images: imageUrls,
        },
    });
    // Update chat updatedAt
    await prisma.chat.update({
        where: { id: chatId },
        data: { updatedAt: new Date() },
    });
    res.status(201).json({ message });
};
/**
 * PATCH /chat/messages/:messageId/read
 * Mark a message as read.
 */
export const markMessageRead = async (req, res, next) => {
    const messageId = String(req.params.messageId);
    const message = await prisma.message.update({
        where: { id: messageId },
        data: { readAt: new Date() },
    });
    res.status(200).json({ message });
};
//# sourceMappingURL=chat.controller.js.map