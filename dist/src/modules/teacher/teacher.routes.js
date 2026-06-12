import express from 'express';
import asyncHandler from 'express-async-handler';
import { createTeacherProfile, getTeacherProfile, updateTeacherProfile, uploadProfilePhoto, uploadDocument, uploadDemoVideo, submitForVerification, getVerificationStatus, updateAvailability, getTimeSlots, saveTimeSlots, getTeacherDashboard, getNotifications, markNotificationRead, getAvailableTeachers, assignDoubt, getTeacherDoubts, getTeacherSessions, createSession, endSession, acceptSessionRequest, declineSessionRequest, getSessionChat, } from "./teacher.controller.js";
import { authenticate } from "../../middleware/authenticate.js";
import { upload } from "../../middleware/upload.js";
const teacherRouter = express.Router();
teacherRouter.use(authenticate);
// ── Profile ────────────────────────────────────────────────────
teacherRouter.post('/profile', asyncHandler(createTeacherProfile));
teacherRouter.get('/profile', asyncHandler(getTeacherProfile));
teacherRouter.patch('/profile', asyncHandler(updateTeacherProfile));
// ── File Uploads ───────────────────────────────────────────────
teacherRouter.post('/profile/photo', upload.single('photo'), asyncHandler(uploadProfilePhoto));
teacherRouter.post('/documents', upload.single('document'), asyncHandler(uploadDocument));
teacherRouter.post('/demo-video', upload.single('video'), asyncHandler(uploadDemoVideo));
// ── Onboarding Submission ──────────────────────────────────────
teacherRouter.post('/submit-for-verification', asyncHandler(submitForVerification));
teacherRouter.get('/verification-status', asyncHandler(getVerificationStatus));
// ── Dashboard ──────────────────────────────────────────────────
teacherRouter.get('/dashboard', asyncHandler(getTeacherDashboard));
// ── Availability ───────────────────────────────────────────────
teacherRouter.patch('/availability', asyncHandler(updateAvailability));
// ── Time Slots ─────────────────────────────────────────────────
teacherRouter.get('/time-slots', asyncHandler(getTimeSlots));
teacherRouter.post('/time-slots', asyncHandler(saveTimeSlots));
// ── Notifications ──────────────────────────────────────────────
teacherRouter.get('/notifications', asyncHandler(getNotifications));
teacherRouter.patch('/notifications/:id/read', asyncHandler(markNotificationRead));
// ── Teacher Discovery (for students) ──────────────────────────
teacherRouter.get('/available', asyncHandler(getAvailableTeachers));
// ── Doubts ─────────────────────────────────────────────────────
teacherRouter.get('/doubts', asyncHandler(getTeacherDoubts));
teacherRouter.post('/assign-doubt', asyncHandler(assignDoubt));
// ── Sessions ───────────────────────────────────────────────────
teacherRouter.get('/sessions', asyncHandler(getTeacherSessions));
teacherRouter.post('/session', asyncHandler(createSession));
teacherRouter.patch('/session/:sessionId/end', asyncHandler(endSession));
teacherRouter.post('/session/:sessionId/accept', asyncHandler(acceptSessionRequest));
teacherRouter.post('/session/:sessionId/decline', asyncHandler(declineSessionRequest));
// ── Session Chat ───────────────────────────────────────────────
teacherRouter.get('/chat/:chatId', asyncHandler(getSessionChat));
export default teacherRouter;
//# sourceMappingURL=teacher.routes.js.map