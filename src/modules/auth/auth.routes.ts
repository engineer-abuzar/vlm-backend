import express from "express";
import asyncHandler from "express-async-handler";
import { sentOtp,Register, verifyOTP } from "./auth.controller.ts";
import { otpLimiter } from "./auth.middleware.ts";


const authRouter = express.Router();
authRouter.post("/sent-otp", otpLimiter, asyncHandler(sentOtp));
authRouter.post("/register", asyncHandler(Register));
authRouter.post("/verify-otp", asyncHandler(verifyOTP));

export default authRouter;