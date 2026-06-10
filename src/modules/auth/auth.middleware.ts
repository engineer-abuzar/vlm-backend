import rateLimit from "express-rate-limit";

export const otpLimiter = rateLimit({
    windowMs: 5 * 60 * 1000,
    max: 20,
    message: "Too many OTP requests"
});