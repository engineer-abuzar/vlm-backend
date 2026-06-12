import { prisma } from "../../config/prisma.js";
// ── GET /subscriptions/me ─────────────────────────────────────
export const getMySubscription = async (req, res) => {
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
    const subscription = await prisma.subscription.findUnique({
        where: { studentId: studentProfile.id },
        include: { plan: true, payment: true },
    });
    res.status(200).json({ subscription });
};
// Legacy: GET /subscriptions/student/:studentId
export const getStudentSubscription = getMySubscription;
// ── POST /subscriptions/trial ─────────────────────────────────
export const activateTrial = async (req, res) => {
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
    // Check if trial already activated
    const existing = await prisma.subscription.findUnique({
        where: { studentId: studentProfile.id },
    });
    if (existing) {
        res.status(409).json({ message: 'Subscription already exists', subscription: existing });
        return;
    }
    // Find a trial plan (first plan or use provided planId)
    const { planId } = req.body;
    let plan = planId
        ? await prisma.plan.findUnique({ where: { id: planId } })
        : await prisma.plan.findFirst({ orderBy: { price: 'asc' } });
    if (!plan) {
        res.status(404).json({ message: 'No plan found. Ask admin to create plans first.' });
        return;
    }
    const startDate = new Date();
    const endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + 3); // 3-day trial
    const subscription = await prisma.subscription.create({
        data: {
            studentId: studentProfile.id,
            planId: plan.id,
            startDate,
            endDate,
            status: 'ACTIVE',
        },
        include: { plan: true },
    });
    // Update student planId
    await prisma.studentProfile.update({
        where: { id: studentProfile.id },
        data: { planId: plan.id },
    });
    res.status(201).json({
        message: 'Trial activated successfully',
        subscription,
        trialEnds: endDate,
    });
};
// ── DELETE /subscriptions/cancel ──────────────────────────────
export const cancelSubscription = async (req, res) => {
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
    const subscription = await prisma.subscription.findUnique({
        where: { studentId: studentProfile.id },
    });
    if (!subscription) {
        res.status(404).json({ message: 'No active subscription found' });
        return;
    }
    const updated = await prisma.subscription.update({
        where: { studentId: studentProfile.id },
        data: { status: 'CANCELLED' },
    });
    res.status(200).json({ message: 'Subscription cancelled', subscription: updated });
};
//# sourceMappingURL=subscriptions.controller.js.map