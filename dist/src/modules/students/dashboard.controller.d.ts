import type { Response } from 'express';
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
export declare const getStudentDashboard: (req: AuthRequest, res: Response) => Promise<void>;
/**
 * GET /student/dashboard/stats
 * Returns quick stats for widget display.
 */
export declare const getStudentStats: (req: AuthRequest, res: Response) => Promise<void>;
//# sourceMappingURL=dashboard.controller.d.ts.map