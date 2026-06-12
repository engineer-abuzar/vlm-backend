import { prisma } from "../../config/prisma.js";
export const getPlans = async (req, res, next) => {
    const plans = await prisma.plan.findMany();
    res.status(200).json({ plans });
};
export const getPlanById = async (req, res, next) => {
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
//# sourceMappingURL=plans.controller.js.map