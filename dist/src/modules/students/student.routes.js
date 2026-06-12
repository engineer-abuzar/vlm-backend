import express from 'express';
import asyncHandler from 'express-async-handler';
import { createStudentProfile, getStudentProfile, updateStudentProfile, } from "./student.controller.js";
import { getStudentDashboard, getStudentStats } from "./dashboard.controller.js";
import { getReferralData, getReferralHistory, applyReferralCode, } from "./referral.controller.js";
import { getDailyMcq, submitMcqAttempt } from "./mcq.controller.js";
import { authenticate } from "../../middleware/authenticate.js";
const studentRouter = express.Router();
// All routes protected
studentRouter.use(authenticate);
// ── Profile ──────────────────────────────────────────────────
studentRouter.post('/profile', asyncHandler(createStudentProfile));
studentRouter.get('/profile', asyncHandler(getStudentProfile));
studentRouter.patch('/profile', asyncHandler(updateStudentProfile));
// ── Dashboard ────────────────────────────────────────────────
studentRouter.get('/dashboard', asyncHandler(getStudentDashboard));
studentRouter.get('/dashboard/stats', asyncHandler(getStudentStats));
// ── Referral ─────────────────────────────────────────────────
studentRouter.get('/referral', asyncHandler(getReferralData));
studentRouter.get('/referral/history', asyncHandler(getReferralHistory));
studentRouter.post('/referral/apply', asyncHandler(applyReferralCode));
// ── MCQ / Daily Tasks ────────────────────────────────────────
studentRouter.get('/mcq/daily', asyncHandler(getDailyMcq));
studentRouter.post('/mcq/attempt', asyncHandler(submitMcqAttempt));
export default studentRouter;
//# sourceMappingURL=student.routes.js.map