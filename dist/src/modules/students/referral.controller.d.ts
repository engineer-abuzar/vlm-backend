import type { Response } from 'express';
import type { AuthRequest } from '../../middleware/authenticate.ts';
/**
 * GET /student/referral
 * Get (or auto-create) referral codes + stats for the current user.
 * Matches the ReferEarn.tsx mock shape.
 */
export declare const getReferralData: (req: AuthRequest, res: Response) => Promise<void>;
/**
 * GET /student/referral/history
 * Matches the ReferralHistory.tsx screen.
 */
export declare const getReferralHistory: (req: AuthRequest, res: Response) => Promise<void>;
/**
 * POST /student/referral/apply
 * Apply a referral code when a new user registers.
 */
export declare const applyReferralCode: (req: AuthRequest, res: Response) => Promise<void>;
//# sourceMappingURL=referral.controller.d.ts.map