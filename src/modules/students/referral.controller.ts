import type { Response } from 'express';
import { prisma } from '../../config/prisma.ts';
import type { AuthRequest } from '../../middleware/authenticate.ts';
import crypto from 'crypto';

const STUDENT_REFERRAL_POINTS = 100;
const TEACHER_REFERRAL_POINTS = 500;

/**
 * GET /student/referral
 * Get (or auto-create) referral codes + stats for the current user.
 * Matches the ReferEarn.tsx mock shape.
 */
export const getReferralData = async (
  req: AuthRequest,
  res: Response
): Promise<void> => {
  const userId = req.user?.userId;

  if (!userId) {
    res.status(401).json({ message: 'Unauthorized' });
    return;
  }

  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) {
    res.status(404).json({ message: 'User not found' });
    return;
  }

  const baseUrl = process.env.CLIENT_URL || 'https://vlm.academy';

  // Auto-create referral codes if they don't exist
  let studentRef = await prisma.referral.findFirst({
    where: { referrerId: userId, type: 'STUDENT' },
  });

  if (!studentRef) {
    const code = `STU-${crypto.randomBytes(4).toString('hex').toUpperCase()}`;
    studentRef = await prisma.referral.create({
      data: { referrerId: userId, type: 'STUDENT', code, status: 'PENDING' },
    });
  }

  let teacherRef = await prisma.referral.findFirst({
    where: { referrerId: userId, type: 'TEACHER' },
  });

  if (!teacherRef) {
    const code = `TCH-${crypto.randomBytes(4).toString('hex').toUpperCase()}`;
    teacherRef = await prisma.referral.create({
      data: { referrerId: userId, type: 'TEACHER', code, status: 'PENDING' },
    });
  }

  // Count completed referrals
  const studentReferrals = await prisma.referral.count({
    where: { referrerId: userId, type: 'STUDENT', status: 'COMPLETED' },
  });
  const teacherReferrals = await prisma.referral.count({
    where: { referrerId: userId, type: 'TEACHER', status: 'COMPLETED' },
  });

  res.status(200).json({
    studentRef: `${baseUrl}/ref/${studentRef.code}`,
    teacherRef: `${baseUrl}/ref/${teacherRef.code}`,
    studentRefCode: studentRef.code,
    teacherRefCode: teacherRef.code,
    studentPoints: STUDENT_REFERRAL_POINTS,
    teacherPoints: TEACHER_REFERRAL_POINTS,
    studentReferralsDone: studentReferrals,
    teacherReferralsDone: teacherReferrals,
  });
};

/**
 * GET /student/referral/history
 * Matches the ReferralHistory.tsx screen.
 */
export const getReferralHistory = async (
  req: AuthRequest,
  res: Response
): Promise<void> => {
  const userId = req.user?.userId;

  if (!userId) {
    res.status(401).json({ message: 'Unauthorized' });
    return;
  }

  const referrals = await prisma.referral.findMany({
    where: { referrerId: userId, status: { not: 'PENDING' } },
    include: {
      referee: {
        select: { id: true, email: true, mobile: true, role: true },
      },
    },
    orderBy: { createdAt: 'desc' },
  });

  res.status(200).json({ referrals });
};

/**
 * POST /student/referral/apply
 * Apply a referral code when a new user registers.
 */
export const applyReferralCode = async (
  req: AuthRequest,
  res: Response
): Promise<void> => {
  const newUserId = req.user?.userId;
  const { code } = req.body;

  if (!newUserId || !code) {
    res.status(400).json({ message: 'newUserId and code are required' });
    return;
  }

  const referral = await prisma.referral.findUnique({ where: { code } });

  if (!referral) {
    res.status(404).json({ message: 'Invalid referral code' });
    return;
  }

  if (referral.referrerId === newUserId) {
    res.status(400).json({ message: 'You cannot use your own referral code' });
    return;
  }

  if (referral.status === 'COMPLETED' || referral.status === 'REWARDED') {
    res.status(400).json({ message: 'Referral code already used' });
    return;
  }

  const points =
    referral.type === 'TEACHER' ? TEACHER_REFERRAL_POINTS : STUDENT_REFERRAL_POINTS;

  // Update referral record
  await prisma.referral.update({
    where: { code },
    data: { refereeId: newUserId, status: 'COMPLETED', pointsGiven: points },
  });

  // Credit referrer's wallet
  await prisma.wallet.upsert({
    where: { userId: referral.referrerId },
    create: { userId: referral.referrerId, balance: points },
    update: { balance: { increment: points } },
  });

  res.status(200).json({
    message: `Referral applied! ${referral.referrerId} earned ${points} points.`,
    points,
  });
};
