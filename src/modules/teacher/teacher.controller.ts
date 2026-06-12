import type { Response } from 'express';
import { prisma } from '../../config/prisma.ts';
import type { AuthRequest } from '../../middleware/authenticate.ts';
import { uploadToCloudinary } from '../../services/upload.ts';

// ── HELPERS ──────────────────────────────────────────────────
const requireTeacherProfile = async (userId: string) => {
  const profile = await prisma.teacherProfile.findUnique({ where: { userId } });
  if (!profile) throw Object.assign(new Error('Teacher profile not found'), { statusCode: 404 });
  return profile;
};

// ── POST /teacher/profile ─────────────────────────────────────
export const createTeacherProfile = async (req: AuthRequest, res: Response): Promise<void> => {
  const userId = req.user?.userId;
  if (!userId) { res.status(401).json({ error: 'Unauthorized' }); return; }

  const user = await prisma.user.findUnique({ where: { id: userId }, include: { teacherProfile: true } });
  if (!user) { res.status(404).json({ error: 'User not found' }); return; }
  if (user.role !== 'TEACHER') { res.status(400).json({ error: 'User is not a teacher' }); return; }
  if (user.teacherProfile) { res.status(409).json({ error: 'Teacher profile already exists' }); return; }

  const { fullName, qualification, experience } = req.body;
  if (!fullName) { res.status(400).json({ error: 'fullName is required' }); return; }

  const profile = await prisma.teacherProfile.create({
    data: { userId, fullName, qualification, experience: experience ? parseInt(experience) : null },
    include: { user: { select: { id: true, email: true, mobile: true, role: true } } },
  });

  await prisma.wallet.upsert({ where: { userId }, create: { userId, balance: 0 }, update: {} });

  res.status(201).json({ message: 'Teacher profile created', data: profile });
};

// ── GET /teacher/profile ──────────────────────────────────────
export const getTeacherProfile = async (req: AuthRequest, res: Response): Promise<void> => {
  const userId = req.user?.userId;
  if (!userId) { res.status(401).json({ error: 'Unauthorized' }); return; }

  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { id: true, email: true, mobile: true, role: true, teacherProfile: true },
  });

  if (!user) { res.status(404).json({ error: 'User not found' }); return; }

  if (!user.teacherProfile) {
    res.status(200).json({
      data: {
        user: {
          id: user.id,
          email: user.email,
          mobile: user.mobile,
          role: user.role,
        },
      },
    });
    return;
  }

  const profile = await prisma.teacherProfile.findUnique({
    where: { userId },
    include: { user: { select: { id: true, email: true, mobile: true, role: true } } },
  });

  res.status(200).json({ data: profile });
};

// ── PATCH /teacher/profile ─ Step 1: Basic Details ────────────
export const updateTeacherProfile = async (req: AuthRequest, res: Response): Promise<void> => {
  const userId = req.user?.userId;
  if (!userId) { res.status(401).json({ error: 'Unauthorized' }); return; }

  const user = await prisma.user.findUnique({ where: { id: userId }, include: { teacherProfile: true } });
  if (!user) { res.status(404).json({ error: 'User not found' }); return; }
  if (user.role !== 'TEACHER') { res.status(400).json({ error: 'User is not a teacher' }); return; }

  const {
    fullName,
    gender,
    dob,
    address,
    city,
    state,
    pincode,
    qualification,
    highestQualification,
    instituteName,
    passingYear,
    teachingCertification,
    hasBEd,
    experience,
    experienceMonths,
    teachingMode,
    experienceType,
    experienceSummary,
    subjects,
    classes,
    boards,
    languages,
    availabilityStatus,
  } = req.body;

  const data: any = {};
  if (fullName !== undefined) data.fullName = fullName;
  if (gender !== undefined) data.gender = gender;
  if (dob !== undefined) data.dob = new Date(dob);
  if (address !== undefined) data.address = address;
  if (city !== undefined) data.city = city;
  if (state !== undefined) data.state = state;
  if (pincode !== undefined) data.pincode = pincode;
  if (qualification !== undefined) data.qualification = qualification;
  if (highestQualification !== undefined) data.highestQualification = highestQualification;
  if (instituteName !== undefined) data.instituteName = instituteName;
  if (passingYear !== undefined) data.passingYear = parseInt(passingYear);
  if (teachingCertification !== undefined) data.teachingCertification = teachingCertification;
  if (hasBEd !== undefined) data.hasBEd = Boolean(hasBEd);
  if (experience !== undefined) data.experience = parseInt(experience);
  if (experienceMonths !== undefined) data.experienceMonths = parseInt(experienceMonths);
  if (teachingMode !== undefined) data.teachingMode = teachingMode;
  if (experienceType !== undefined) data.experienceType = experienceType;
  if (experienceSummary !== undefined) data.experienceSummary = experienceSummary;
  if (subjects !== undefined) data.subjects = Array.isArray(subjects) ? subjects : [subjects];
  if (classes !== undefined) data.classes = Array.isArray(classes) ? classes : [classes];
  if (boards !== undefined) data.boards = Array.isArray(boards) ? boards : [boards];
  if (languages !== undefined) data.languages = Array.isArray(languages) ? languages : [languages];
  if (availabilityStatus !== undefined) data.availabilityStatus = availabilityStatus;

  if (user.teacherProfile) {
    const profile = await prisma.teacherProfile.update({ where: { userId }, data });
    res.status(200).json({ message: 'Profile updated', data: profile });
    return;
  }

  if (!data.fullName) {
    res.status(400).json({ error: 'fullName is required to create a teacher profile' });
    return;
  }

  const profile = await prisma.teacherProfile.create({
    data: {
      userId,
      fullName: data.fullName,
      gender: data.gender ?? null,
      dob: data.dob ?? null,
      address: data.address ?? null,
      city: data.city ?? null,
      state: data.state ?? null,
      pincode: data.pincode ?? null,
      qualification: data.qualification ?? null,
      highestQualification: data.highestQualification ?? null,
      instituteName: data.instituteName ?? null,
      passingYear: data.passingYear ?? null,
      teachingCertification: data.teachingCertification ?? null,
      hasBEd: data.hasBEd ?? false,
      experience: data.experience ?? null,
      experienceMonths: data.experienceMonths ?? null,
      teachingMode: data.teachingMode ?? null,
      experienceType: data.experienceType ?? null,
      experienceSummary: data.experienceSummary ?? null,
      subjects: data.subjects ?? [],
      classes: data.classes ?? [],
      boards: data.boards ?? [],
      languages: data.languages ?? [],
    },
  });

  await prisma.wallet.upsert({ where: { userId }, create: { userId, balance: 0 }, update: {} });

  res.status(201).json({ message: 'Teacher profile created', data: profile });
};

// ── POST /teacher/profile/photo ── Upload profile photo ───────
export const uploadProfilePhoto = async (req: AuthRequest, res: Response): Promise<void> => {
  const userId = req.user?.userId;
  if (!userId) { res.status(401).json({ error: 'Unauthorized' }); return; }

  const file = req.file;
  if (!file) { res.status(400).json({ error: 'No file uploaded' }); return; }

  const url = await uploadToCloudinary(file.buffer, 'teacher/photos');

  await prisma.teacherProfile.update({ where: { userId }, data: { profilePhoto: url } });
  res.status(200).json({ message: 'Profile photo uploaded', url });
};

// ── POST /teacher/documents ── Upload verification documents ──
export const uploadDocument = async (req: AuthRequest, res: Response): Promise<void> => {
  const userId = req.user?.userId;
  if (!userId) { res.status(401).json({ error: 'Unauthorized' }); return; }

  const { documentType } = req.body; // "aadhaar" | "qualification" | "experience"
  const file = req.file;
  if (!file) { res.status(400).json({ error: 'No file uploaded' }); return; }
  if (!documentType) { res.status(400).json({ error: 'documentType is required' }); return; }

  const url = await uploadToCloudinary(file.buffer, `teacher/documents/${documentType}`);

  const fieldMap: Record<string, string> = {
    aadhaar: 'aadhaarUrl',
    qualification: 'qualificationDocUrl',
    experience: 'experienceDocUrl',
  };

  const field = fieldMap[documentType];
  if (!field) { res.status(400).json({ error: 'Invalid documentType' }); return; }

  await prisma.teacherProfile.update({ where: { userId }, data: { [field]: url } });
  res.status(200).json({ message: `${documentType} document uploaded`, url, documentType });
};

// ── POST /teacher/demo-video ── Upload demo video ─────────────
export const uploadDemoVideo = async (req: AuthRequest, res: Response): Promise<void> => {
  const userId = req.user?.userId;
  if (!userId) { res.status(401).json({ error: 'Unauthorized' }); return; }

  const file = req.file;
  if (!file) { res.status(400).json({ error: 'No file uploaded' }); return; }

  const url = await uploadToCloudinary(file.buffer, 'teacher/demo-videos');
  await prisma.teacherProfile.update({ where: { userId }, data: { demoVideoUrl: url } });

  res.status(200).json({ message: 'Demo video uploaded', url });
};

// ── POST /teacher/submit-for-verification ─────────────────────
export const submitForVerification = async (req: AuthRequest, res: Response): Promise<void> => {
  const userId = req.user?.userId;
  if (!userId) { res.status(401).json({ error: 'Unauthorized' }); return; }

  const profile = await prisma.teacherProfile.findUnique({ where: { userId } });
  if (!profile) { res.status(404).json({ error: 'Teacher profile not found' }); return; }

  if (profile.verificationStatus !== 'DRAFT') {
    res.status(409).json({ error: `Application already ${profile.verificationStatus.toLowerCase()}` });
    return;
  }

  const updated = await prisma.teacherProfile.update({
    where: { userId },
    data: { verificationStatus: 'SUBMITTED' },
  });

  res.status(200).json({ message: 'Application submitted for verification', data: updated });
};

// ── GET /teacher/verification-status ──────────────────────────
export const getVerificationStatus = async (req: AuthRequest, res: Response): Promise<void> => {
  const userId = req.user?.userId;
  if (!userId) { res.status(401).json({ error: 'Unauthorized' }); return; }

  const profile = await prisma.teacherProfile.findUnique({
    where: { userId },
    select: {
      verificationStatus: true,
      rejectionReason: true,
      reapplicationDate: true,
      interviewDate: true,
      interviewLink: true,
      fullName: true,
      profilePhoto: true,
    },
  });

  if (!profile) { res.status(404).json({ error: 'Profile not found' }); return; }

  const steps = [
    { id: 'draft', title: 'Draft', description: 'Profile in Draft', status: 'pending' },
    { id: 'submitted', title: 'Submitted', description: 'Verification Submitted', status: 'pending' },
    { id: 'interview_scheduled', title: 'Interview Scheduled', description: 'Interview Scheduled', status: 'pending' },
    { id: 'under_review', title: 'Under Review', description: 'Application Under Review (Estimated 2-3 days)', status: 'pending' },
    { id: 'approved', title: 'Approved', description: 'Verification Approved – Start Teaching Soon', status: 'pending' },
  ];

  const statusOrder = ['DRAFT', 'SUBMITTED', 'INTERVIEW_SCHEDULED', 'UNDER_REVIEW', 'APPROVED'];
  const currentIdx = statusOrder.indexOf(profile.verificationStatus);

  const enrichedSteps = steps.map((step, idx) => ({
    ...step,
    status: idx < currentIdx ? 'completed' : idx === currentIdx ? 'active' : 'pending',
  }));

  res.status(200).json({
    verificationStatus: profile.verificationStatus,
    rejectionReason: profile.rejectionReason,
    reapplicationDate: profile.reapplicationDate,
    interviewDate: profile.interviewDate,
    interviewLink: profile.interviewLink,
    teacherName: profile.fullName,
    profilePhoto: profile.profilePhoto,
    steps: enrichedSteps,
  });
};

// ── PATCH /teacher/availability ───────────────────────────────
export const updateAvailability = async (req: AuthRequest, res: Response): Promise<void> => {
  const userId = req.user?.userId;
  if (!userId) { res.status(401).json({ error: 'Unauthorized' }); return; }

  const { status } = req.body;
  const allowed = ['online', 'offline', 'busy'];
  if (!allowed.includes(status)) {
    res.status(400).json({ error: `status must be one of: ${allowed.join(', ')}` }); return;
  }

  const profile = await prisma.teacherProfile.update({
    where: { userId },
    data: { availabilityStatus: status },
    select: { id: true, availabilityStatus: true, fullName: true },
  });

  res.status(200).json({ message: 'Availability updated', data: profile });
};

// ── GET/POST /teacher/time-slots ──────────────────────────────
export const getTimeSlots = async (req: AuthRequest, res: Response): Promise<void> => {
  const userId = req.user?.userId;
  if (!userId) { res.status(401).json({ error: 'Unauthorized' }); return; }

  const profile = await requireTeacherProfile(userId);
  const { day } = req.query;

  const where: any = { teacherId: profile.id, isActive: true };
  if (day) where.dayOfWeek = String(day).toUpperCase();

  const slots = await prisma.teacherTimeSlot.findMany({ where, orderBy: { startTime: 'asc' } });
  res.status(200).json({ slots });
};

export const saveTimeSlots = async (req: AuthRequest, res: Response): Promise<void> => {
  const userId = req.user?.userId;
  if (!userId) { res.status(401).json({ error: 'Unauthorized' }); return; }

  const profile = await requireTeacherProfile(userId);
  const { slots, repeatWeekly } = req.body;

  if (!Array.isArray(slots) || slots.length === 0) {
    res.status(400).json({ error: 'slots array is required' }); return;
  }

  // Replace all existing slots with new set
  await prisma.teacherTimeSlot.deleteMany({ where: { teacherId: profile.id } });

  const created = await prisma.teacherTimeSlot.createMany({
    data: slots.map((s: any) => ({
      teacherId: profile.id,
      dayOfWeek: s.dayOfWeek,
      subject: s.subject,
      startTime: s.startTime,
      endTime: s.endTime,
      repeatWeekly: repeatWeekly ?? true,
    })),
  });

  res.status(201).json({ message: 'Time slots saved', count: created.count });
};

// ── GET /teacher/dashboard ────────────────────────────────────
export const getTeacherDashboard = async (req: AuthRequest, res: Response): Promise<void> => {
  const userId = req.user?.userId;
  if (!userId) { res.status(401).json({ error: 'Unauthorized' }); return; }

  const profile = await prisma.teacherProfile.findUnique({
    where: { userId },
    include: { user: { select: { id: true, email: true, mobile: true } } },
  });
  if (!profile) { res.status(404).json({ error: 'Teacher profile not found' }); return; }

  const wallet = await prisma.wallet.findUnique({ where: { userId } });

  // Sessions stats
  const totalSessions = await prisma.session.count({ where: { teacherId: profile.id } });
  const todayStart = new Date(); todayStart.setHours(0, 0, 0, 0);
  const todaySessions = await prisma.session.count({
    where: { teacherId: profile.id, createdAt: { gte: todayStart } },
  });

  // Upcoming sessions (PENDING/ACTIVE)
  const upcomingSessions = await prisma.session.findMany({
    where: { teacherId: profile.id, status: { in: ['PENDING', 'ACTIVE'] } },
    include: { student: true },
    orderBy: { createdAt: 'asc' },
    take: 3,
  });

  // Recent reviews/feedback
  const recentFeedback = await prisma.feedback.findMany({
    where: { session: { teacherId: profile.id } },
    include: { student: true },
    orderBy: { createdAt: 'desc' },
    take: 5,
  });

  // Notifications
  const notifications = await prisma.teacherNotification.findMany({
    where: { teacherId: profile.id },
    orderBy: { createdAt: 'desc' },
    take: 5,
  });

  // Unread notifications count
  const unreadCount = await prisma.teacherNotification.count({
    where: { teacherId: profile.id, isRead: false },
  });

  res.status(200).json({
    teacher: {
      name: profile.fullName,
      profilePhoto: profile.profilePhoto,
      rating: profile.rating,
      availabilityStatus: profile.availabilityStatus,
      verificationStatus: profile.verificationStatus,
    },
    stats: {
      walletBalance: wallet?.balance ?? 0,
      totalSessions,
      todaySessions,
      rating: profile.rating,
      totalPoints: Math.round((wallet?.balance ?? 0) * 10),
      missedRequests: 0,
    },
    upcomingClasses: upcomingSessions.map(s => ({
      id: s.id,
      student: s.student?.fullName ?? 'Student',
      type: s.type,
      status: s.status,
      startedAt: s.startedAt,
    })),
    recentReviews: recentFeedback.map(f => ({
      id: f.id,
      rating: f.rating,
      comment: f.comment,
      student: f.student?.fullName ?? 'Student',
      createdAt: f.createdAt,
    })),
    notifications: notifications.map(n => ({
      id: n.id,
      type: n.type,
      title: n.title,
      message: n.message,
      isRead: n.isRead,
      createdAt: n.createdAt,
    })),
    unreadNotifications: unreadCount,
  });
};

// ── GET /teacher/notifications ────────────────────────────────
export const getNotifications = async (req: AuthRequest, res: Response): Promise<void> => {
  const userId = req.user?.userId;
  if (!userId) { res.status(401).json({ error: 'Unauthorized' }); return; }

  const profile = await requireTeacherProfile(userId);
  const notifications = await prisma.teacherNotification.findMany({
    where: { teacherId: profile.id },
    orderBy: { createdAt: 'desc' },
    take: 20,
  });

  res.status(200).json({ notifications });
};

// ── PATCH /teacher/notifications/:id/read ─────────────────────
export const markNotificationRead = async (req: AuthRequest, res: Response): Promise<void> => {
  const id = String(req.params.id);
  await prisma.teacherNotification.update({ where: { id }, data: { isRead: true } });
  res.status(200).json({ message: 'Notification marked as read' });
};

// ── GET /teacher/available ────────────────────────────────────
export const getAvailableTeachers = async (req: AuthRequest, res: Response): Promise<void> => {
  const { page = '1', limit = '10' } = req.query;
  const skip = (parseInt(String(page)) - 1) * parseInt(String(limit));

  const teachers = await prisma.teacherProfile.findMany({
    where: { verificationStatus: 'APPROVED', availabilityStatus: 'online' },
    include: { user: { select: { id: true, email: true, mobile: true } } },
    orderBy: { rating: 'desc' },
    skip,
    take: parseInt(String(limit)),
  });

  // Also return teachers regardless of status for development
  if (teachers.length === 0) {
    const allTeachers = await prisma.teacherProfile.findMany({
      include: { user: { select: { id: true, email: true, mobile: true } } },
      orderBy: { rating: 'desc' },
      skip,
      take: parseInt(String(limit)),
    });
    res.status(200).json({ teachers: allTeachers });
    return;
  }

  res.status(200).json({ teachers });
};

// ── POST /teacher/assign-doubt ────────────────────────────────
export const assignDoubt = async (req: AuthRequest, res: Response): Promise<void> => {
  const { doubtId, teacherId } = req.body;
  if (!doubtId || !teacherId) { res.status(400).json({ error: 'doubtId and teacherId are required' }); return; }

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

  const profile = await requireTeacherProfile(userId);
  const { status } = req.query;
  const where: any = { assignedTo: profile.id };
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

  const profile = await requireTeacherProfile(userId);
  const { status, type } = req.query;
  const where: any = { teacherId: profile.id };
  if (status) where.status = String(status).toUpperCase();
  if (type) where.type = String(type).toUpperCase();

  const sessions = await prisma.session.findMany({
    where,
    include: { student: true, feedback: true },
    orderBy: { createdAt: 'desc' },
  });

  res.status(200).json({ sessions });
};

// ── POST /teacher/session ─────────────────────────────────────
export const createSession = async (req: AuthRequest, res: Response): Promise<void> => {
  const userId = req.user?.userId;
  if (!userId) { res.status(401).json({ error: 'Unauthorized' }); return; }

  const profile = await requireTeacherProfile(userId);
  const { studentId, type } = req.body;

  if (!studentId || !type) { res.status(400).json({ error: 'studentId and type are required' }); return; }

  const validTypes = ['CHAT', 'AUDIO', 'VIDEO'];
  if (!validTypes.includes(String(type).toUpperCase())) {
    res.status(400).json({ error: `type must be: ${validTypes.join(', ')}` }); return;
  }

  const session = await prisma.session.create({
    data: { studentId, teacherId: profile.id, type: String(type).toUpperCase() as any, status: 'ACTIVE', startedAt: new Date() },
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

// ── POST /teacher/session/:sessionId/accept-request ───────────
export const acceptSessionRequest = async (req: AuthRequest, res: Response): Promise<void> => {
  const userId = req.user?.userId;
  if (!userId) { res.status(401).json({ error: 'Unauthorized' }); return; }

  const sessionId = String(req.params.sessionId);
  const session = await prisma.session.update({
    where: { id: sessionId },
    data: { status: 'ACTIVE', startedAt: new Date() },
    include: { student: true },
  });

  res.status(200).json({ message: 'Session accepted', data: session });
};

// ── POST /teacher/session/:sessionId/decline-request ──────────
export const declineSessionRequest = async (req: AuthRequest, res: Response): Promise<void> => {
  const sessionId = String(req.params.sessionId);
  const session = await prisma.session.update({
    where: { id: sessionId },
    data: { status: 'CANCELLED' },
  });

  res.status(200).json({ message: 'Session declined', data: session });
};

// ── GET /teacher/chat/:chatId ─────────────────────────────────
export const getSessionChat = async (req: AuthRequest, res: Response): Promise<void> => {
  const chatId = String(req.params.chatId);
  const page = parseInt((req.query.page as string) || '1');
  const limit = parseInt((req.query.limit as string) || '50');

  const messages = await prisma.message.findMany({
    where: { chatId },
    orderBy: { createdAt: 'asc' },
    skip: (page - 1) * limit,
    take: limit,
  });

  const chat = await prisma.chat.findUnique({
    where: { id: chatId },
    include: { student: true, teacher: true },
  });

  res.status(200).json({ chat, messages, page, limit });
};
