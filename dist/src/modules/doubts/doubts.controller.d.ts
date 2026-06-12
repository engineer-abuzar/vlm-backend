import type { Response } from 'express';
import type { AuthRequest } from '../../middleware/authenticate.ts';
export declare const createDoubt: (req: AuthRequest, res: Response) => Promise<void>;
export declare const getMyDoubts: (req: AuthRequest, res: Response) => Promise<void>;
export declare const getDoubtById: (req: AuthRequest, res: Response) => Promise<void>;
export declare const resolveDoubt: (req: AuthRequest, res: Response) => Promise<void>;
export declare const addDoubtMessage: (req: AuthRequest, res: Response) => Promise<void>;
//# sourceMappingURL=doubts.controller.d.ts.map