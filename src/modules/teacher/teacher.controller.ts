import type { Response } from 'express';
import { prisma } from '../../config/prisma.ts';
import type { AuthRequest } from '../../middleware/authenticate.ts';

// ── POST /teacher/profile ─────────────────────────────────────
export const createTeacherProfile = async (req: AuthRequest, res: Response): Promise<void> => {
  const userId = req.user?.userId;
  if (!userId) { res.status(401).json({ error: 'Unauthorized' }); return; }

  const { fullName, qualification, experience } = req.body;
  if (!fullName) { res.status(400).json({ error: 'fullName is required' }); return; }

  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: { teacherProfile: true },
  });

  if (!user) { res.status(404).json({ error: 'User not found' }); return; }
  if (user.role !== 'TEACHER') { res.status(400).json({ error: 'User is not a teacher' }); return; }
  if (user.teacherProfile) { res.status(409).json({ error: 'Teacher profile already exists' }); return; }

  const profile = await prisma.teacherProfile.create({
    data: { userId, fullName, qualification, experience: experience ? parseInt(experience) : null },
    include: { user: { select: { id: true, email: true, mobile: true, role: true } } },
  });

  // Create wallet
  await prisma.wallet.upsert({
    where: { userId },
    create: { userId, balance: 0 },
    update: {},
  });

  res.status(201).json({ message: 'Teacher profile created', data: profile });
};

// ── GET /teacher/profile ──────────────────────────────────────
export const getTeacherProfile = async (req: AuthRequest, res: Response): Promise<void> => {
  const userId = req.user?.userId;
  if (!userId) { res.status(401).json({ error: 'Unauthorized' }); return; }

  const profile = await prisma.teacherProfile.findUnique({
    where: { userId },
    include: { user: { select: { id: true, email: true, mobile: true, role: true } } },
  });

  if (!profile) { res.status(404).json({ error: 'Teacher profile not found' }); return; }
  res.status(200).json({ data: profile });
};

// ── GET /teacher/available ────────────────────────────────────
export const getAvailableTeachers = async (req: AuthRequest, res: Response): Promise<void> => {
  const { subject, page = '1', limit = '10' } = req.query;
  const skip = (parseInt(String(page)) - 1) * parseInt(String(limit));

  const teachers = await prisma.teacherProfile.findMany({
    include: { user: { select: { id: true, email: true, mobile: true } } },
    orderBy: { rating: 'desc' },
    skip,
    take: parseInt(String(limit)),
  });

  res.status(200).json({ teachers });
};

// ── POST /teacher/assign-doubt ────────────────────────────────
export const assignDoubt = async (req: AuthRequest, res: Response): Promise<void> => {
  const { doubtId, teacherId } = req.body;
  if (!doubtId || !teacherId) {
    res.status(400).json({ error: 'doubtId and teacherId are required' }); return;
  }

  const doubt = await prisma.doubt.update({
    where: { id: doubtId },
    data: { assignedTo: teacherId, status: 'ASSIGNED' },
    include: { teacher: true, student: true, subject: true },
  });

  res.status(200).json({ message: 'Doubt assigned', data: doubt });
};

// ── GET /teacher/doubts ───────────────────────────────────────
export const getTeacherDoubts = async (req: AuthRequest, res: Response): Promise<void> => {
  const userId = req.user?.userId;
  if (!userId) { res.status(401).json({ error: 'Unauthorized' }); return; }

  const teacherProfile = await prisma.teacherProfile.findUnique({ where: { userId } });
  if (!teacherProfile) { res.status(404).json({ error: 'Teacher profile not found' }); return; }

  const { status } = req.query;
  const where: any = { assignedTo: teacherProfile.id };
  if (status) where.status = String(status).toUpperCase();

  const doubts = await prisma.doubt.findMany({
    where,
    include: { student: true, subject: true, chapter: true, messages: { take: 1, orderBy: { createdAt: 'desc' } } },
    orderBy: { createdAt: 'desc' },
  });

  res.status(200).json({ doubts });
};

// ── GET /teacher/sessions ─────────────────────────────────────
export const getTeacherSessions = async (req: AuthRequest, res: Response): Promise<void> => {
  const userId = req.user?.userId;
  if (!userId) { res.status(401).json({ error: 'Unauthorized' }); return; }

  const teacherProfile = await prisma.teacherProfile.findUnique({ where: { userId } });
  if (!teacherProfile) { res.status(404).json({ error: 'Teacher profile not found' }); return; }

  const sessions = await prisma.session.findMany({
    where: { teacherId: teacherProfile.id },
    include: { student: true, feedback: true },
    orderBy: { createdAt: 'desc' },
  });

  res.status(200).json({ sessions });
};

// ── POST /teacher/session ─────────────────────────────────────
export const createSession = async (req: AuthRequest, res: Response): Promise<void> => {
  const userId = req.user?.userId;
  if (!userId) { res.status(401).json({ error: 'Unauthorized' }); return; }

  const { studentId, type } = req.body;
  if (!studentId || !type) {
    res.status(400).json({ error: 'studentId and type are required' }); return;
  }

  const validTypes = ['CHAT', 'AUDIO', 'VIDEO'];
  if (!validTypes.includes(String(type).toUpperCase())) {
    res.status(400).json({ error: `type must be one of: ${validTypes.join(', ')}` }); return;
  }

  const teacherProfile = await prisma.teacherProfile.findUnique({ where: { userId } });
  if (!teacherProfile) { res.status(404).json({ error: 'Teacher profile not found' }); return; }

  const session = await prisma.session.create({
    data: {
      studentId,
      teacherId: teacherProfile.id,
      type: String(type).toUpperCase() as any,
      status: 'ACTIVE',
      startedAt: new Date(),
    },
    include: { student: true, teacher: true },
  });

  res.status(201).json({ message: 'Session created', data: session });
};

// ── PATCH /teacher/session/:sessionId/end ─────────────────────
export const endSession = async (req: AuthRequest, res: Response): Promise<void> => {
  const sessionId = String(req.params.sessionId);

  const session = await prisma.session.update({
    where: { id: sessionId },
    data: { status: 'COMPLETED', endedAt: new Date() },
  });

  res.status(200).json({ message: 'Session ended', data: session });
};

// ── PATCH /teacher/profile ────────────────────────────────────
export const updateTeacherProfile = async (req: AuthRequest, res: Response): Promise<void> => {
  const userId = req.user?.userId;
  if (!userId) { res.status(401).json({ error: 'Unauthorized' }); return; }

  const { fullName, qualification, experience } = req.body;

  const profile = await prisma.teacherProfile.update({
    where: { userId },
    data: {
      ...(fullName && { fullName }),
      ...(qualification !== undefined && { qualification }),
      ...(experience !== undefined && { experience: parseInt(experience) }),
    },
  });

  res.status(200).json({ message: 'Profile updated', data: profile });
};
