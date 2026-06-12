import type { Request, Response } from 'express';
import type { AuthRequest } from '../../middleware/authenticate.ts';
export declare const sentOtp: (req: Request, res: Response) => Promise<void>;
export declare const verifyOTP: (req: Request, res: Response) => Promise<void>;
export declare const selectRole: (req: AuthRequest, res: Response) => Promise<void>;
export declare const getCurrentUser: (req: AuthRequest, res: Response) => Promise<void>;
export declare const logout: (_req: Request, res: Response) => void;
export declare const googleAuthUrl: (_req: Request, res: Response) => void;
export declare const Register: (req: Request, res: Response) => Promise<void>;
//# sourceMappingURL=auth.controller.d.ts.map