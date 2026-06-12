import type { Response } from 'express';
import type { AuthRequest } from '../../middleware/authenticate.ts';
export declare const createOrder: (req: AuthRequest, res: Response) => Promise<void>;
export declare const verifyPayment: (req: AuthRequest, res: Response) => Promise<void>;
export declare const getPaymentHistory: (req: AuthRequest, res: Response) => Promise<void>;
//# sourceMappingURL=payments.controller.d.ts.map