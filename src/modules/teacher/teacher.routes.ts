import express from 'express';
import asyncHandler from 'express-async-handler';
import {
  createTeacherProfile,
  getTeacherProfile,
  updateTeacherProfile,
  getAvailableTeachers,
  assignDoubt,
  getTeacherDoubts,
  getTeacherSessions,
  createSession,
  endSession,
} from './teacher.controller.ts';
import { authenticate } from '../../middleware/authenticate.ts';

const teacherRouter = express.Router();

teacherRouter.use(authenticate);

// ── Profile ───────────────────────────────────────────────────
teacherRouter.post('/profile', asyncHandler(createTeacherProfile));
teacherRouter.get('/profile', asyncHandler(getTeacherProfile));
teacherRouter.patch('/profile', asyncHandler(updateTeacherProfile));

// ── Discovery (public-ish — students browse teachers) ─────────
teacherRouter.get('/available', asyncHandler(getAvailableTeachers));

// ── Doubts ────────────────────────────────────────────────────
teacherRouter.get('/doubts', asyncHandler(getTeacherDoubts));
teacherRouter.post('/assign-doubt', asyncHandler(assignDoubt));

// ── Sessions ──────────────────────────────────────────────────
teacherRouter.get('/sessions', asyncHandler(getTeacherSessions));
teacherRouter.post('/session', asyncHandler(createSession));
teacherRouter.patch('/session/:sessionId/end', asyncHandler(endSession));

export default teacherRouter;
