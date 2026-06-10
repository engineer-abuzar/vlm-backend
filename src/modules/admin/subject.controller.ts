import { prisma } from "../../config/prisma.ts";
import type { Request, Response } from 'express';

export const addSubject =async(req:Request,res: Response)=>{
    console.log(req.body)
}