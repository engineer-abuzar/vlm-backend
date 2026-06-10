
import type{ Request, Response, NextFunction } from 'express';
import { prisma } from '../../config/prisma.ts';
import type{ CreateStudentProfileDTO } from '../../types/student.dto.ts';
import { Role } from '../../../generated/prisma/client.ts';

export const createStudentProfile = async (
  req: Request<{}, {}, CreateStudentProfileDTO>,
  res: Response,
  next: NextFunction
): Promise<void> => {
    const { userId, fullName, nickname, class: className, board, schoolName, city, state } = req.body;

    // 1. Strict Validation: Check required fields
    if (!userId || !fullName) {
      res.status(400).json({ error: 'userId and fullName are required fields.' });
      return;
    }

    // 2. Fetch the target user to verify they exist and match the STUDENT role
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: { studentProfile: true }
    });

    if (!user) {
      res.status(404).json({ error: 'User not found.' });
      return;
    }

    if (user.role !== Role.STUDENT) {
      res.status(400).json({ error: 'The specified user does not have a STUDENT role.' });
      return;
    }

    if (user.studentProfile) {
      res.status(409).json({ error: 'A student profile already exists for this user.' });
      return;
    }

    // 3. Create the profile inside a database transaction block for safety
    const newProfile = await prisma.studentProfile.create({
      data: {
        userId,
        fullName,
        nickname,
        class: className,
        board,
        schoolName,
        city,
        state
      },
      include: {
        user: {
          select: {
            id: true,
            email: true,
            mobile: true,
            role: true
          }
        }
      }
    });

    res.status(201).json({
      message: 'Student profile created successfully.',
      data: newProfile
    });

  
};
export const getStudentProfile = async (
  req: Request<{}, {}, CreateStudentProfileDTO>,
  res: Response,
  next: NextFunction
): Promise<void> => {
    const { userId } = req.query;

    // 1. Strict Validation: Check required fields
    if (!userId) {
      res.status(400).json({ error: 'userId is required fields.' });
      return;
    }

    // 2. Fetch the target user to verify they exist and match the STUDENT role
    const user = await prisma.studentProfile.findMany()

    // if (!user) {
    //   res.status(404).json({ error: 'User not found.' });
    //   return;
    // }

    // if (user.role !== Role.STUDENT) {
    //   res.status(400).json({ error: 'The specified user does not have a STUDENT role.' });
    //   return;
    // }

   
      res.status(200).json({ message: 'User Profile Fetched.' ,User:user});
      return;
    

   
};
export const updateStudentProfile = async (
  req: Request<{}, {}, CreateStudentProfileDTO>,
  res: Response,
  next: NextFunction
): Promise<void> => {
    const { userId,fullName,nickname,className,board,schoolName,city,state } = req.body;

    // 1. Strict Validation: Check required fields
    if (!userId) {
      res.status(400).json({ error: 'userId is required fields.' });
      return;
    }

    // 2. Fetch the target user to verify they exist and match the STUDENT role
    const user = await prisma.studentProfile.update({
      where: { userId: userId },
    data:{fullName:fullName,nickname:nickname,className:className,board:board,schoolName:schoolName,city:city,state:state},
    });

    if (!user) {
      res.status(404).json({ error: 'User not found.' });
      return;
    }

    

   
      res.status(200).json({ message: 'User Profile Updated.' ,User:user});
      return;
    

   
};