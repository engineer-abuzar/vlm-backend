import { prisma } from "../../config/prisma.js";
import { uploadToCloudinary } from "../../services/upload.js";
// ── POST /doubts ──────────────────────────────────────────────
export const createDoubt = async (req, res) => {
    const userId = req.user?.userId;
    if (!userId) {
        res.status(401).json({ message: 'Unauthorized' });
        return;
    }
    const studentProfile = await prisma.studentProfile.findUnique({ where: { userId } });
    if (!studentProfile) {
        res.status(404).json({ message: 'Student profile not found' });
        return;
    }
    const { subjectId, chapterId, text, sessionType } = req.body;
    const files = req.files;
    // Upload attached images to Cloudinary
    const images = [];
    if (files && files.length > 0) {
        for (const file of files) {
            const url = await uploadToCloudinary(file.buffer, 'doubts');
            images.push(url);
        }
    }
    // Also accept pre-uploaded URLs in body
    const bodyImages = Array.isArray(req.body.images) ? req.body.images : [];
    const allImages = [...images, ...bodyImages];
    const doubt = await prisma.doubt.create({
        data: {
            studentId: studentProfile.id,
            subjectId: subjectId || null,
            chapterId: chapterId || null,
            text: text || null,
            images: allImages,
        },
        include: { student: true, subject: true, chapter: true },
    });
    res.status(201).json({ message: 'Doubt submitted', doubt });
};
// ── GET /doubts/me ────────────────────────────────────────────
export const getMyDoubts = async (req, res) => {
    const userId = req.user?.userId;
    if (!userId) {
        res.status(401).json({ message: 'Unauthorized' });
        return;
    }
    const studentProfile = await prisma.studentProfile.findUnique({ where: { userId } });
    if (!studentProfile) {
        res.status(404).json({ message: 'Student profile not found' });
        return;
    }
    const { status, page = '1', limit = '20' } = req.query;
    const skip = (parseInt(String(page)) - 1) * parseInt(String(limit));
    const where = { studentId: studentProfile.id };
    if (status)
        where.status = String(status).toUpperCase();
    const [doubts, total] = await Promise.all([
        prisma.doubt.findMany({
            where,
            include: { subject: true, chapter: true, teacher: true, messages: { take: 1, orderBy: { createdAt: 'desc' } } },
            orderBy: { createdAt: 'desc' },
            skip,
            take: parseInt(String(limit)),
        }),
        prisma.doubt.count({ where }),
    ]);
    res.status(200).json({ doubts, total, page: parseInt(String(page)), limit: parseInt(String(limit)) });
};
// ── GET /doubts/:id ───────────────────────────────────────────
export const getDoubtById = async (req, res) => {
    const id = String(req.params.id);
    const doubt = await prisma.doubt.findUnique({
        where: { id },
        include: { student: true, subject: true, chapter: true, teacher: true, messages: true },
    });
    if (!doubt) {
        res.status(404).json({ message: 'Doubt not found' });
        return;
    }
    res.status(200).json({ doubt });
};
// ── PATCH /doubts/:id/resolve ─────────────────────────────────
export const resolveDoubt = async (req, res) => {
    const id = String(req.params.id);
    const doubt = await prisma.doubt.update({
        where: { id },
        data: { status: 'RESOLVED' },
    });
    res.status(200).json({ message: 'Doubt resolved', doubt });
};
// ── POST /doubts/:doubtId/messages ────────────────────────────
export const addDoubtMessage = async (req, res) => {
    const doubtId = String(req.params.doubtId);
    const userId = req.user?.userId;
    if (!userId) {
        res.status(401).json({ message: 'Unauthorized' });
        return;
    }
    const { content } = req.body;
    if (!content) {
        res.status(400).json({ error: 'content is required' });
        return;
    }
    const message = await prisma.message.create({
        data: {
            doubtId,
            senderId: userId,
            senderType: req.user.role,
            content,
            images: [],
        },
    });
    // Update doubt status to ASSIGNED if teacher is replying
    if (req.user?.role === 'TEACHER') {
        await prisma.doubt.update({ where: { id: doubtId }, data: { status: 'ASSIGNED' } });
    }
    res.status(201).json({ message });
};
//# sourceMappingURL=doubts.controller.js.map