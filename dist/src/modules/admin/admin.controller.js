import { prisma } from "../../config/prisma.js";
export const createPlan = async (req, res) => {
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
};
export const getPlans = async (req, res) => {
    const plans = await prisma.plan.findMany();
    res.status(200).json({ message: 'Plans found', data: plans });
};
//# sourceMappingURL=admin.controller.js.map