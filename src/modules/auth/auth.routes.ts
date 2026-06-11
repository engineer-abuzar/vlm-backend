import express from 'express';
import asyncHandler from 'express-async-handler';
import {
  sentOtp,
  Register,
  verifyOTP,
  getCurrentUser,
  logout,
  selectRole,
  googleAuthUrl,
} from './auth.controller.ts';
import { otpLimiter } from './auth.middleware.ts';
import { authenticate } from '../../middleware/authenticate.ts';

const authRouter = express.Router();

// OTP flow
authRouter.post('/sent-otp', otpLimiter, asyncHandler(sentOtp));
authRouter.post('/verify-otp', asyncHandler(verifyOTP));        // legacy
authRouter.post('/otp/verify', asyncHandler(verifyOTP));        // frontend uses this

// Registration
authRouter.post('/register', asyncHandler(Register));

// Role selection (after OTP verify, before profile)
authRouter.post('/role', authenticate, asyncHandler(selectRole));

// Current user
authRouter.get('/me', authenticate, asyncHandler(getCurrentUser));

// Logout
authRouter.post('/logout', authenticate, asyncHandler(logout));

// Google OAuth redirect URL
authRouter.get('/google', asyncHandler(googleAuthUrl));

export default authRouter;
