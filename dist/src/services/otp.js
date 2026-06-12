import nodemailer from 'nodemailer';
import crypto from 'crypto';
import { prisma } from "../config/prisma.js"; // Or import your existing global prisma instance
import twilio from 'twilio';
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});
const twilioClient = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
function generateOTP() {
    return crypto.randomInt(100000, 999999).toString();
}
/**
 * Generates an OTP, saves/upserts it to the Prisma database, and emails it.
 * Errors bubble up directly to your async handler middleware.
 *
 * @param userEmail - Destination email address
 */
export async function sendOTP(identifier) {
    const otp = generateOTP();
    const expiresAt = new Date(Date.now() + 5 * 60 * 1000); // 5 minutes validity
    const isEmail = identifier.includes('@');
    console.log(identifier);
    if (isEmail) {
        {
            const mailOptions = {
                from: `"Your App Name" <${process.env.EMAIL_USER}>`,
                to: identifier,
                subject: 'Your One-Time Password (OTP)',
                text: `Your OTP is ${otp}. It is valid for 5 minutes.`,
                html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
        <h2 style="color: #333; text-align: center;">Verify Your Account</h2>
        <p style="font-size: 16px; color: #555;">Hello,</p>
        <p style="font-size: 16px; color: #555;">Use the following One-Time Password (OTP) to complete your verification. This code is valid for <b>5 minutes</b>.</p>
        <div style="text-align: center; margin: 30px 0;">
          <span style="font-size: 32px; font-weight: bold; letter-spacing: 5px; color: #007bff; background-color: #f8f9fa; padding: 10px 20px; border-radius: 4px; border: 1px dashed #007bff;">
            ${otp}
          </span>
        </div>
        <p style="font-size: 12px; color: #999; text-align: center; margin-top: 30px;">
          If you didn't request this code, you can safely ignore this email.
        </p>
      </div>
    `,
            };
            // 2. Save to DB. If a record for this email exists, update it. If not, create a new one.
            // 1. Send the email first
            await transporter.sendMail(mailOptions);
        }
    }
    else {
        // --- Mobile/SMS Logic ---
        await twilioClient.messages.create({
            body: `Your VLM verification code is ${otp}. Valid for 5 minutes.`,
            from: process.env.TWILIO_PHONE_NUMBER,
            to: identifier, // E.g., +919876543210
        });
    }
    await prisma.oTP.upsert({
        where: { identifier: identifier },
        update: { otp: otp, expiresAt },
        create: { identifier: identifier, otp: otp, expiresAt },
    });
}
/**
 * Fetches the stored OTP, validates it, and deletes it upon a successful match.
 * Errors bubble up directly to your async handler middleware.
 *
 * @param userEmail - The user's email address
 * @param inputOtp - The OTP code inputted by the user
 */ 
//# sourceMappingURL=otp.js.map