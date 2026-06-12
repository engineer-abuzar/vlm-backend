import type { Response } from 'express';
import type { AuthRequest } from '../../middleware/authenticate.ts';
export declare const getMySubscription: (req: AuthRequest, res: Response) => Promise<void>;
export declare const getStudentSubscription: (req: AuthRequest, res: Response) => Promise<void>;
export declare const activateTrial: (req: AuthRequest, res: Response) => Promise<void>;
export declare const cancelSubscription: (req: AuthRequest, res: Response) => Promise<void>;
//# sourceMappingURL=subscriptions.controller.d.ts.map