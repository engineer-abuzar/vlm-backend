import Razorpay from 'razorpay';
import crypto from 'crypto';
import { prisma } from "../../config/prisma.js";
const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID || '',
    key_secret: process.env.RAZORPAY_KEY_SECRET || '',
});
// ── POST /payments/create-order ───────────────────────────────
export const createOrder = async (req, res) => {
    const userId = req.user?.userId;
    if (!userId) {
        res.status(401).json({ error: 'Unauthorized' });
        return;
    }
    const { planId } = req.body;
    if (!planId) {
        res.status(400).json({ error: 'planId is required' });
        return;
    }
    const studentProfile = await prisma.studentProfile.findUnique({ where: { userId } });
    if (!studentProfile) {
        res.status(404).json({ error: 'Student profile not found' });
        return;
    }
    const plan = await prisma.plan.findUnique({ where: { id: planId } });
    if (!plan) {
        res.status(404).json({ error: 'Plan not found' });
        return;
    }
    // Amount in paise
    const amountPaise = Math.round(plan.price * 100);
    const razorpayOrder = await razorpay.orders.create({
        amount: amountPaise,
        currency: 'INR',
        receipt: `vlm_${studentProfile.id}_${Date.now()}`,
    });
    const payment = await prisma.payment.create({
        data: {
            studentId: studentProfile.id,
            planId,
            amount: plan.price,
            currency: 'INR',
            razorpayOrderId: razorpayOrder.id,
            status: 'PENDING',
        },
    });
    res.status(201).json({
        success: true,
        message: 'Order created',
        data: {
            orderId: razorpayOrder.id,
            amount: amountPaise,
            currency: 'INR',
            paymentId: payment.id,
            planName: plan.name,
            keyId: process.env.RAZORPAY_KEY_ID,
        },
    });
};
// ── POST /payments/verify ─────────────────────────────────────
export const verifyPayment = async (req, res) => {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, paymentId } = req.body;
    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature || !paymentId) {
        res.status(400).json({ error: 'Missing payment verification fields' });
        return;
    }
    // HMAC SHA256 verification
    const expectedSig = crypto
        .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET || '')
        .update(`${razorpay_order_id}|${razorpay_payment_id}`)
        .digest('hex');
    if (expectedSig !== razorpay_signature) {
        await prisma.payment.update({ where: { id: paymentId }, data: { status: 'FAILED' } });
        res.status(400).json({ error: 'Payment verification failed: invalid signature' });
        return;
    }
    const payment = await prisma.payment.update({
        where: { id: paymentId },
        data: { razorpayPaymentId: razorpay_payment_id, status: 'SUCCESS' },
    });
    const plan = await prisma.plan.findUnique({ where: { id: payment.planId } });
    const durationDays = parseDurationToDays(plan?.duration || '30');
    const startDate = new Date();
    const endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + durationDays);
    const subscription = await prisma.subscription.upsert({
        where: { studentId: payment.studentId },
        create: { studentId: payment.studentId, planId: payment.planId, paymentId: payment.id, startDate, endDate, status: 'ACTIVE' },
        update: { planId: payment.planId, paymentId: payment.id, startDate, endDate, status: 'ACTIVE' },
    });
    // Update student planId
    await prisma.studentProfile.update({
        where: { id: payment.studentId },
        data: { planId: payment.planId },
    });
    res.status(200).json({
        success: true,
        message: 'Payment verified and subscription activated',
        data: { payment, subscription },
    });
};
// ── GET /payments/history ─────────────────────────────────────
export const getPaymentHistory = async (req, res) => {
    const userId = req.user?.userId;
    if (!userId) {
        res.status(401).json({ error: 'Unauthorized' });
        return;
    }
    const studentProfile = await prisma.studentProfile.findUnique({ where: { userId } });
    if (!studentProfile) {
        res.status(404).json({ error: 'Student profile not found' });
        return;
    }
    const payments = await prisma.payment.findMany({
        where: { studentId: studentProfile.id },
        include: { plan: true },
        orderBy: { createdAt: 'desc' },
    });
    res.status(200).json({ payments });
};
// ── Helper ────────────────────────────────────────────────────
function parseDurationToDays(duration) {
    const lower = duration.toLowerCase();
    if (lower.includes('year'))
        return 365;
    if (lower.includes('quarter') || lower.includes('3 month'))
        return 90;
    if (lower.includes('month')) {
        const m = lower.match(/(\d+)/);
        return m ? parseInt(m[1]) * 30 : 30;
    }
    if (lower.includes('day')) {
        const d = lower.match(/(\d+)/);
        return d ? parseInt(d[1]) : 3;
    }
    return 30;
}
//# sourceMappingURL=payments.controller.js.map