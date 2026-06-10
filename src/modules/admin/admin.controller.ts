import { prisma } from "../../config/prisma.ts";
import type { Request, Response } from 'express';

export const createPlan =
  async (req: Request, res: Response) => {
    const plan = await prisma.plan.create({
      data: {
        name: req.body.name,
        price: req.body.price,
        duration: req.body.duration,
        credits: req.body.credits,
        humanChatCredits: req.body.humanChatCredits,
        audioVideoMinutes: req.body.audioVideoMinutes,
        liveClassAcess: req.body.liveClassAcess,
      },
    });

    res.status(201).json({
      success: true,
      message: "Plan created successfully",
      data: plan,
    });
  }

  export const getPlans=async (req:Request,res:Response)=>{
    const plans=await prisma.plan.findMany()
    if(!plans)
         res.status(404).json({error:"Plans not found"})
    res.status(200).json({message:"Plans Found ",data:plans})
  }
