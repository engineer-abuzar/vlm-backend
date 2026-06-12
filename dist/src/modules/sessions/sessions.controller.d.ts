import type { Response } from 'express';
import type { AuthRequest } from '../../middleware/authenticate.ts';
export declare const getMySessions: (req: AuthRequest, res: Response) => Promise<void>;
export declare const getStudentSessions: (req: AuthRequest, res: Response) => Promise<void>;
export declare const getSessionById: (req: AuthRequest, res: Response) => Promise<void>;
export declare const createFeedback: (req: AuthRequest, res: Response) => Promise<void>;
//# sourceMappingURL=sessions.controller.d.ts.map