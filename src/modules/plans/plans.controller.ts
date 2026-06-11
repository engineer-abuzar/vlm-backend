import type { Request, Response, NextFunction } from 'express';
import { prisma } from '../../config/prisma.ts';

export const getPlans = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const plans = await prisma.plan.findMany();
  res.status(200).json({ plans });
};

export const getPlanById = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const id = String(req.params.id);
  const plan = await prisma.plan.findUnique({
    where: { id }
  });
  if (!plan) {
    res.status(404).json({ message: 'Plan not found' });
    return;
  }
  res.status(200).json({ plan });
};
