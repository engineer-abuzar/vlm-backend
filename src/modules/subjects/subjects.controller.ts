import type { Request, Response, NextFunction } from 'express';
import { prisma } from '../../config/prisma.ts';

/**
 * GET /subjects
 * Get all subjects, optionally filtered by class.
 */
export const getSubjects = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { className } = req.query;

  const subjects = await prisma.subjects.findMany({
    where: className ? { class: String(className) } : undefined,
    include: { chapters: true },
    orderBy: { name: 'asc' },
  });

  res.status(200).json({ subjects });
};

/**
 * GET /subjects/:subjectId/chapters
 * Get chapters for a specific subject.
 */
export const getChaptersBySubject = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const subjectId = String(req.params.subjectId);

  const subject = await prisma.subjects.findUnique({
    where: { id: subjectId },
    include: { chapters: true },
  });

  if (!subject) {
    res.status(404).json({ error: 'Subject not found' });
    return;
  }

  res.status(200).json({ chapters: subject.chapters });
};
