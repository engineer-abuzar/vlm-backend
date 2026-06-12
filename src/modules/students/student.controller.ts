import type { Response } from 'express';
import { prisma } from '../../config/prisma.ts';
import type { AuthRequest } from '../../middleware/authenticate.ts';
import { Role } from '../../../generated/prisma/client.ts';

// ── POST /student/profile ─────────────────────────────────────
export const createStudentProfile = async (
  req: AuthRequest,
  res: Response
): Promise<void> => {
  const userId = req.user?.userId;

  if (!userId) {
    res.status(401).json({ error: 'Unauthorized' });
    return;
  }

  const { fullName, nickname, className, board, schoolName, city, state } = req.body;

  if (!fullName) {
    res.status(400).json({ error: 'fullName is required' });
    return;
  }

  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: { studentProfile: true },
  });

  if (!user) {
    res.status(404).json({ error: 'User not found' });
    return;
  }

  if (user.role !== Role.STUDENT) {
    res.status(400).json({ error: 'User does not have a STUDENT role' });
    return;
  }

  if (user.studentProfile) {
    res.status(409).json({ error: 'Student profile already exists' });
    return;
  }

  const newProfile = await prisma.studentProfile.create({
    data: {
      userId,
      fullName,
      nickname,
      className,
      board,
      schoolName,
      city,
      state,
    },
    include: {
      user: { select: { id: true, email: true, mobile: true, role: true } },
    },
  });

  // Create wallet if it doesn't exist
  await prisma.wallet.upsert({
    where: { userId },
    create: { userId, balance: 0 },
    update: {},
  });

  res.status(201).json({
    message: 'Student profile created successfully',
    data: newProfile,
  });
};

// ── GET /student/profile ──────────────────────────────────────
export const getStudentProfile = async (
  req: AuthRequest,
  res: Response
): Promise<void> => {
  const userId = req.user?.userId;

  if (!userId) {
    res.status(401).json({ error: 'Unauthorized' });
    return;
  }

  const profile = await prisma.studentProfile.findUnique({
    where: { userId },
    include: {
      user: { select: { id: true, email: true, mobile: true, role: true } },
      plan: true,
      subscription: { include: { plan: true } },
    },
  });

  if (!profile) {
    res.status(404).json({ error: 'Student profile not found' });
    return;
  }

  res.status(200).json({ message: 'Profile fetched', data: profile });
};

// ── PATCH /student/profile ────────────────────────────────────
export const updateStudentProfile = async (
  req: AuthRequest,
  res: Response
): Promise<void> => {
  const userId = req.user?.userId;

  if (!userId) {
    res.status(401).json({ error: 'Unauthorized' });
    return;
  }

  const { fullName, nickname, className, board, schoolName, city, state } = req.body;

  const updated = await prisma.studentProfile.update({
    where: { userId },
    data: {
      ...(fullName && { fullName }),
      ...(nickname !== undefined && { nickname }),
      ...(className !== undefined && { className }),
      ...(board !== undefined && { board }),
      ...(schoolName !== undefined && { schoolName }),
      ...(city !== undefined && { city }),
      ...(state !== undefined && { state }),
    },
    include: {
      user: { select: { id: true, email: true, mobile: true, role: true } },
      plan: true,
    },
  });

  res.status(200).json({ message: 'Profile updated', data: updated });
};
