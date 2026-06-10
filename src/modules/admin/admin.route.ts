import express from "express";
import asyncHandler from "express-async-handler";
import { createPlan, getPlans } from "./admin.controller.ts";


const adminRouter = express.Router();
adminRouter.post('/plan',asyncHandler(createPlan))
adminRouter.get('/plan',asyncHandler(getPlans))



export default adminRouter;