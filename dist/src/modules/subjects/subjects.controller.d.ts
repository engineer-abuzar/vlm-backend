import type { Request, Response, NextFunction } from 'express';
/**
 * GET /subjects
 * Get all subjects, optionally filtered by class.
 */
export declare const getSubjects: (req: Request, res: Response, next: NextFunction) => Promise<void>;
/**
 * GET /subjects/:subjectId/chapters
 * Get chapters for a specific subject.
 */
export declare const getChaptersBySubject: (req: Request, res: Response, next: NextFunction) => Promise<void>;
//# sourceMappingURL=subjects.controller.d.ts.map