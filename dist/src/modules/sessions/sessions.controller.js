import { prisma } from "../../config/prisma.js";
// ── GET /sessions/me ──────────────────────────────────────────
export const getMySessions = async (req, res) => {
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
    const { type, status, page = '1', limit = '20' } = req.query;
    const skip = (parseInt(String(page)) - 1) * parseInt(String(limit));
    const where = { studentId: studentProfile.id };
    if (type)
        where.type = String(type).toUpperCase();
    if (status)
        where.status = String(status).toUpperCase();
    const [sessions, total] = await Promise.all([
        prisma.session.findMany({
            where,
            include: { teacher: true, feedback: true },
            orderBy: { createdAt: 'desc' },
            skip,
            take: parseInt(String(limit)),
        }),
        prisma.session.count({ where }),
    ]);
    res.status(200).json({ sessions, total, page: parseInt(String(page)), limit: parseInt(String(limit)) });
};
// Legacy route alias
export const getStudentSessions = getMySessions;
// ── GET /sessions/:id ─────────────────────────────────────────
export const getSessionById = async (req, res) => {
    const id = String(req.params.id);
    const session = await prisma.session.findUnique({
        where: { id },
        include: { student: true, teacher: true, feedback: true },
    });
    if (!session) {
        res.status(404).json({ message: 'Session not found' });
        return;
    }
    res.status(200).json({ session });
};
// ── POST /sessions/feedback ───────────────────────────────────
export const createFeedback = async (req, res) => {
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
    const { sessionId, doubtId, rating, comment } = req.body;
    if (!rating) {
        res.status(400).json({ error: 'rating is required' });
        return;
    }
    if (rating < 1 || rating > 5) {
        res.status(400).json({ error: 'rating must be 1-5' });
        return;
    }
    // Prevent duplicate feedback
    if (sessionId) {
        const existing = await prisma.feedback.findUnique({ where: { sessionId } });
        if (existing) {
            res.status(409).json({ message: 'Feedback already submitted for this session' });
            return;
        }
    }
    const feedback = await prisma.feedback.create({
        data: {
            sessionId: sessionId || null,
            doubtId: doubtId || null,
            studentId: studentProfile.id,
            rating: parseInt(rating),
            comment: comment || null,
        },
    });
    // Update teacher rating average if session feedback
    if (sessionId) {
        const session = await prisma.session.findUnique({
            where: { id: sessionId },
            select: { teacherId: true },
        });
        if (session?.teacherId) {
            const allFeedback = await prisma.feedback.findMany({
                where: {
                    session: { teacherId: session.teacherId },
                    rating: { not: undefined },
                },
                select: { rating: true },
            });
            if (allFeedback.length > 0) {
                const avg = allFeedback.reduce((sum, f) => sum + f.rating, 0) / allFeedback.length;
                await prisma.teacherProfile.update({
                    where: { id: session.teacherId },
                    data: { rating: parseFloat(avg.toFixed(2)) },
                });
            }
        }
    }
    res.status(201).json({ message: 'Feedback submitted', feedback });
};
//# sourceMappingURL=sessions.controller.js.map