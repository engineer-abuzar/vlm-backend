import express from "express";
import asyncHandler from "express-async-handler";
import { getPlans, getPlanById } from "./plans.controller.ts";

const plansRouter = express.Router();
plansRouter.get("/", asyncHandler(getPlans));
plansRouter.get("/:id", asyncHandler(getPlanById));

export default plansRouter;
