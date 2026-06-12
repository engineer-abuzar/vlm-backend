import type { Response } from 'express';
import type { AuthRequest } from '../../middleware/authenticate.ts';
export declare const createStudentProfile: (req: AuthRequest, res: Response) => Promise<void>;
export declare const getStudentProfile: (req: AuthRequest, res: Response) => Promise<void>;
export declare const updateStudentProfile: (req: AuthRequest, res: Response) => Promise<void>;
//# sourceMappingURL=student.controller.d.ts.map