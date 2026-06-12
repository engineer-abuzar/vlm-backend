import type { Response } from 'express';
import type { AuthRequest } from '../../middleware/authenticate.ts';
/**
 * GET /student/mcq/daily
 * Returns today's MCQ questions for the student (up to 5).
 * If no MCQ questions exist in DB, returns placeholder data.
 */
export declare const getDailyMcq: (req: AuthRequest, res: Response) => Promise<void>;
/**
 * POST /student/mcq/attempt
 * Submit an MCQ answer.
 */
export declare const submitMcqAttempt: (req: AuthRequest, res: Response) => Promise<void>;
/**
 * POST /admin/mcq/questions
 * Admin creates an MCQ question.
 */
export declare const createMcqQuestion: (req: AuthRequest, res: Response) => Promise<void>;
/**
 * GET /admin/mcq/questions
 * Get all MCQ questions.
 */
export declare const getAllMcqQuestions: (_req: AuthRequest, res: Response) => Promise<void>;
//# sourceMappingURL=mcq.controller.d.ts.map