import type { Request, Response, NextFunction } from 'express';
export interface AuthRequest extends Request {
    user?: {
        userId: string;
        email?: string;
        mobile?: string;
        role: string;
    };
}
/**
 * JWT authentication middleware.
 * Reads Bearer token from Authorization header, verifies it, attaches decoded payload to req.user.
 */
export declare const authenticate: (req: AuthRequest, res: Response, next: NextFunction) => void;
/**
 * Role-based authorization middleware factory.
 * Usage: authorize('ADMIN') or authorize('STUDENT', 'TEACHER')
 */
export declare const authorize: (...roles: string[]) => (req: AuthRequest, res: Response, next: NextFunction) => void;
//# sourceMappingURL=authenticate.d.ts.map