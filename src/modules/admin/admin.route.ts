import express from 'express';
import asyncHandler from 'express-async-handler';
import { createPlan, getPlans } from './admin.controller.ts';
import {
  createSubject,
  getAllSubjects,
  createChapter,
  deleteSubject,
} from './subject.controller.ts';
import { createMcqQuestion, getAllMcqQuestions } from '../students/mcq.controller.ts';
import { authenticate, authorize } from '../../middleware/authenticate.ts';

const adminRouter = express.Router();

// All admin routes require authentication
// For production, add authorize('ADMIN') back
const adminGuard = [authenticate];

// ── Plans ─────────────────────────────────────────────────────
adminRouter.post('/plans', ...adminGuard, asyncHandler(createPlan));
adminRouter.get('/plans', ...adminGuard, asyncHandler(getPlans));

// ── Subjects ──────────────────────────────────────────────────
adminRouter.post('/subjects', ...adminGuard, asyncHandler(createSubject));
adminRouter.get('/subjects', ...adminGuard, asyncHandler(getAllSubjects));
adminRouter.delete('/subjects/:id', ...adminGuard, asyncHandler(deleteSubject));

// ── Chapters ──────────────────────────────────────────────────
adminRouter.post('/subjects/:subjectId/chapters', ...adminGuard, asyncHandler(createChapter));

// ── MCQ Questions ─────────────────────────────────────────────
adminRouter.post('/mcq/questions', ...adminGuard, asyncHandler(createMcqQuestion));
adminRouter.get('/mcq/questions', ...adminGuard, asyncHandler(getAllMcqQuestions));

export default adminRouter;
