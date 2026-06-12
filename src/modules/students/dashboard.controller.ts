import type { Request, Response } from 'express';
import { prisma } from '../../config/prisma.ts';
import type { AuthRequest } from '../../middleware/authenticate.ts';

/**
 * GET /student/dashboard
 * Returns all data needed by the StudentDashboard screen:
 *  - user name, rank, reward points
 *  - MCQ progress (completed vs total for today)
 *  - upcoming live class
 *  - subscription status
 *  - short live sessions (teacher list)
 */
export const getStudentDashboard = async (
  req: AuthRequest,
  res: Response
): Promise<void> => {
  const userId = req.user?.userId;

  if (!userId) {
    res.status(401).json({ message: 'Unauthorized' });
    return;
  }

  // Fetch student profile with plan and subscription
  const studentProfile = await prisma.studentProfile.findUnique({
    where: { userId },
    include: {
      plan: true,
      subscription: {
        include: { plan: true },
      },
    },
  });

  if (!studentProfile) {
    res.status(404).json({ message: 'Student profile not found' });
    return;
  }

  // Leaderboard rank (based on session count — simple approximation)
  const allStudents = await prisma.studentProfile.findMany({
    include: { sessions: true },
    orderBy: { sessions: { _count: 'desc' } },
  });

  const rankIndex = allStudents.findIndex((s) => s.userId === userId);
  const rank = rankIndex >= 0 ? `#${rankIndex + 1}` : '#--';

  // Wallet / reward points
  const wallet = await prisma.wallet.findUnique({ where: { userId } });
  const rewardPoints = wallet ? wallet.balance : 0;

  // MCQ count today — real data from McqAttempt table
  const todayStart = new Date();
  todayStart.setHours(0, 0, 0, 0);

  const mcqCompleted = await prisma.mcqAttempt.count({
    where: {
      studentId: studentProfile.id,
      createdAt: { gte: todayStart },
    },
  });
  const mcqTotal = 5;

  // Upcoming live class — nearest PENDING session with a teacher
  const upcomingSession = await prisma.session.findFirst({
    where: {
      studentId: studentProfile.id,
      status: 'PENDING',
      type: 'VIDEO',
    },
    include: { teacher: true },
    orderBy: { createdAt: 'asc' },
  });

  const liveClass = upcomingSession
    ? {
        topic: 'Live Class',
        time: upcomingSession.startedAt
          ? new Date(upcomingSession.startedAt).toLocaleTimeString('en-IN', {
              hour: '2-digit',
              minute: '2-digit',
            }) + ' IST'
          : 'TBD',
        teacher: upcomingSession.teacher?.fullName ?? 'Your Teacher',
        sessionId: upcomingSession.id,
        timer: '00:00:00',
      }
    : {
        topic: 'No upcoming class',
        time: '--',
        teacher: '--',
        sessionId: null,
        timer: '00:00:00',
      };

  // Short live sessions — available teachers
  const availableTeachers = await prisma.teacherProfile.findMany({
    take: 5,
    orderBy: { rating: 'desc' },
    include: { user: { select: { email: true } } },
  });

  res.status(200).json({
    user: {
      name: studentProfile.fullName?.split(' ')[0] ?? 'Student',
      fullName: studentProfile.fullName,
      rank,
      points: String(Math.round(rewardPoints)),
    },
    mcq: { completed: mcqCompleted, total: mcqTotal },
    liveClass,
    subscription: studentProfile.subscription ?? null,
    plan: studentProfile.plan ?? null,
    shortLiveSessions: availableTeachers.map((t) => ({
      id: t.id,
      tutor: t.fullName,
      rating: t.rating.toFixed(1),
      viewers: '0',
      topic: 'Available Now',
      rate: '10',
      desc: t.qualification ?? 'Expert Teacher',
    })),
  });
};

/**
 * GET /student/dashboard/stats
 * Returns quick stats for widget display.
 */
export const getStudentStats = async (
  req: AuthRequest,
  res: Response
): Promise<void> => {
  const userId = req.user?.userId;

  if (!userId) {
    res.status(401).json({ message: 'Unauthorized' });
    return;
  }

  const studentProfile = await prisma.studentProfile.findUnique({
    where: { userId },
  });

  if (!studentProfile) {
    res.status(404).json({ message: 'Student profile not found' });
    return;
  }

  const totalSessions = await prisma.session.count({
    where: { studentId: studentProfile.id },
  });

  const totalDoubts = await prisma.doubt.count({
    where: { studentId: studentProfile.id },
  });

  const resolvedDoubts = await prisma.doubt.count({
    where: { studentId: studentProfile.id, status: 'RESOLVED' },
  });

  const wallet = await prisma.wallet.findUnique({ where: { userId } });

  res.status(200).json({
    totalSessions,
    totalDoubts,
    resolvedDoubts,
    rewardPoints: wallet?.balance ?? 0,
  });
};
