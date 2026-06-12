import { prisma } from "../../config/prisma.js";
/**
 * GET /student/mcq/daily
 * Returns today's MCQ questions for the student (up to 5).
 * If no MCQ questions exist in DB, returns placeholder data.
 */
export const getDailyMcq = async (req, res) => {
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
    // Get today's start
    const todayStart = new Date();
    todayStart.setHours(0, 0, 0, 0);
    // Questions attempted today
    const attempted = await prisma.mcqAttempt.findMany({
        where: {
            studentId: studentProfile.id,
            createdAt: { gte: todayStart },
        },
        include: { question: true },
    });
    // Fetch 5 random questions not yet attempted today
    const attemptedIds = attempted.map((a) => a.questionId);
    const questions = await prisma.mcqQuestion.findMany({
        where: { id: { notIn: attemptedIds } },
        take: 5,
        orderBy: { createdAt: 'desc' },
    });
    res.status(200).json({
        questions,
        attempted: attempted.length,
        total: 5,
        completedToday: attempted,
    });
};
/**
 * POST /student/mcq/attempt
 * Submit an MCQ answer.
 */
export const submitMcqAttempt = async (req, res) => {
    const userId = req.user?.userId;
    if (!userId) {
        res.status(401).json({ message: 'Unauthorized' });
        return;
    }
    const { questionId, selectedOpt } = req.body;
    if (!questionId || !selectedOpt) {
        res.status(400).json({ message: 'questionId and selectedOpt are required' });
        return;
    }
    const studentProfile = await prisma.studentProfile.findUnique({ where: { userId } });
    if (!studentProfile) {
        res.status(404).json({ message: 'Student profile not found' });
        return;
    }
    const question = await prisma.mcqQuestion.findUnique({ where: { id: questionId } });
    if (!question) {
        res.status(404).json({ message: 'Question not found' });
        return;
    }
    const isCorrect = question.answer === selectedOpt;
    const attempt = await prisma.mcqAttempt.create({
        data: {
            studentId: studentProfile.id,
            questionId,
            selectedOpt,
            isCorrect,
        },
    });
    // Award points for correct answer
    if (isCorrect) {
        await prisma.wallet.upsert({
            where: { userId },
            create: { userId, balance: 10 },
            update: { balance: { increment: 10 } },
        });
    }
    res.status(201).json({
        attempt,
        isCorrect,
        correctAnswer: question.answer,
        pointsEarned: isCorrect ? 10 : 0,
    });
};
/**
 * POST /admin/mcq/questions
 * Admin creates an MCQ question.
 */
export const createMcqQuestion = async (req, res) => {
    const { subjectId, chapterId, question, options, answer, difficulty } = req.body;
    if (!question || !options || !answer) {
        res.status(400).json({ message: 'question, options and answer are required' });
        return;
    }
    const mcq = await prisma.mcqQuestion.create({
        data: { subjectId, chapterId, question, options, answer, difficulty },
    });
    res.status(201).json({ message: 'MCQ question created', data: mcq });
};
/**
 * GET /admin/mcq/questions
 * Get all MCQ questions.
 */
export const getAllMcqQuestions = async (_req, res) => {
    const questions = await prisma.mcqQuestion.findMany({
        include: { subject: true },
        orderBy: { createdAt: 'desc' },
    });
    res.status(200).json({ questions });
};
//# sourceMappingURL=mcq.controller.js.map