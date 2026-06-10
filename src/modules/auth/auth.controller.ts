import type { Request, Response } from 'express';
import generateToken from '../../utils/jwt.ts';
import { prisma } from "../../config/prisma.ts";
import { sendOTP } from '../../services/otp.ts';


interface SentOtpRequest extends Request {
}

interface SentOtpResponse extends Response {
}

interface RegisterRequest extends Request {
}
interface RegisterResponse extends Response {
}


const sentOtp = async (req: SentOtpRequest, res: SentOtpResponse) => {
    const { phone, email, role } = req.body;
    let user = await prisma.user.findFirst({
        where: {
            OR: [{ email: email },
            { mobile: phone }
            ]
        }
    });
    if (!user) {
        if (email) {
        // Handle email registration
       user= await prisma.user.create({
            data: {
                email: email,
                role: role,
            }
        })
        console.log("User Created with email")

    }
    else if (phone) {
        // Handle phone registration
       user= await prisma.user.create({
            data: {
                mobile: phone,
                role: String(role).toUpperCase() as any
            }
        })
        console.log("User Created with phone")

    }
    else {
        res.status(400).send("Either phone or email must be provided");
        return;
    }
    }

    await sendOTP(user.email || user.mobile || " "); // Send OTP to either email or mobile
   if(user.email)

    { console.log("otp sent on email")
        return res.json({ message: `OTP sent to registered email` })
}
     console.log("otp sent on phone")

   res.json({ message: `OTP sent to registered phone` })
}

export async function verifyOTP(req: Request, res: Response): Promise<void> {
    // 1. Fetch the OTP record from the database
    // console.log("verify is working")
    const { identifier, otp: inputOtp } = req.body;
    const record = await prisma.oTP.findUnique({
        where: { identifier: identifier },
    });

    if (!record) {
        throw new Error('No verification request found for this email');
    }

    // 2. Validate input OTP against stored database OTP
    if (inputOtp !== record.otp) {
        throw new Error('Invalid verification code');
    }

    // 3. Verify expiration timeline
    const now = new Date();
    if (now > record.expiresAt) {
        // Optional clean up: delete expired code immediately
        await prisma.oTP.delete({ where: { identifier: identifier } });
        throw new Error('Verification code has expired');
    }

    // 4. Clean up: Delete the used OTP code so it can never be reused malicious players
    await prisma.oTP.delete({
        where: { identifier: identifier },
    });
    const token = generateToken({ email: identifier });
    res.cookie('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });
    res.status(200).json({ message: 'OTP verified successfully' });
}

const Register = async (req: RegisterRequest, res: RegisterResponse): Promise<void> => {
    const { mobile, email, role } = req.body;
    console.log("Received registration request:", { mobile, email, role });
    const existingUser = await prisma.user.findFirst({
        where: {
            OR:[
            email && { email },
            mobile && { mobile }
        ].filter(Boolean)
        }
    })
    if (existingUser) {
        res.status(400).send("User already exists");
        return;
    }
    if (email) {
        // Handle email registration
        await prisma.user.create({
            data: {
                email: email,
                role: role,
            }
        })
        res.status(201).send("User registered with email");

    }
    else if (mobile) {
        // Handle phone registration
        await prisma.user.create({
            data: {
                mobile: mobile,
                role: String(role).toUpperCase() as any
            }
        })
        res.status(201).send("User registered with phone");
    }
    else {
        res.status(400).send("Either phone or email must be provided");
        return;
    }
}

export { sentOtp, Register };