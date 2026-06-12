import type { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

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
export const authenticate = (req: AuthRequest, res: Response, next: NextFunction): void => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    res.status(401).json({ message: 'Unauthorized: No token provided' });
    return;
  }

  const token = authHeader.split(' ')[1];
  const secret = process.env.JWT_SECRET || 'your_jwt_secret';

  try {
    const decoded = jwt.verify(token, secret) as any;
    req.user = {
      userId: decoded.userId,
      email: decoded.email,
      mobile: decoded.mobile,
      role: decoded.role,
    };
    next();
  } catch {
    res.status(401).json({ message: 'Unauthorized: Invalid or expired token' });
  }
};

/**
 * Role-based authorization middleware factory.
 * Usage: authorize('ADMIN') or authorize('STUDENT', 'TEACHER')
 */
export const authorize = (...roles: string[]) => {
  return (req: AuthRequest, res: Response, next: NextFunction): void => {
    if (!req.user) {
      res.status(401).json({ message: 'Unauthorized' });
      return;
    }
    if (!roles.includes(req.user.role)) {
      res.status(403).json({ message: 'Forbidden: Insufficient permissions' });
      return;
    }
    next();
  };
};
