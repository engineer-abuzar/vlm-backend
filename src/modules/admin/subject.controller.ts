import type { Request, Response } from 'express';
import { prisma } from '../../config/prisma.ts';

// ── POST /admin/subjects ──────────────────────────────────────
export const createSubject = async (req: Request, res: Response): Promise<void> => {
  const { name, class: className, code } = req.body;

  if (!name || !className || !code) {
    res.status(400).json({ error: 'name, class, and code are required' });
    return;
  }

  const existing = await prisma.subjects.findUnique({ where: { code } });
  if (existing) {
    res.status(409).json({ error: 'Subject code already exists' });
    return;
  }

  const subject = await prisma.subjects.create({
    data: { name, class: className, code },
  });

  res.status(201).json({ message: 'Subject created', data: subject });
};

// ── GET /admin/subjects ───────────────────────────────────────
export const getAllSubjects = async (_req: Request, res: Response): Promise<void> => {
  const subjects = await prisma.subjects.findMany({
    include: { chapters: true },
    orderBy: { name: 'asc' },
  });
  res.status(200).json({ data: subjects });
};

// ── POST /admin/subjects/:subjectId/chapters ──────────────────
export const createChapter = async (req: Request, res: Response): Promise<void> => {
  const subjectId = String(req.params.subjectId);
  const { name } = req.body;

  if (!name) {
    res.status(400).json({ error: 'name is required' });
    return;
  }

  const subject = await prisma.subjects.findUnique({ where: { id: subjectId } });
  if (!subject) {
    res.status(404).json({ error: 'Subject not found' });
    return;
  }

  const chapter = await prisma.chapters.create({
    data: { name, subjectId },
  });

  res.status(201).json({ message: 'Chapter created', data: chapter });
};

// ── DELETE /admin/subjects/:id ────────────────────────────────
export const deleteSubject = async (req: Request, res: Response): Promise<void> => {
  const id = String(req.params.id);

  await prisma.subjects.delete({ where: { id } });

  res.status(200).json({ message: 'Subject deleted' });
};
