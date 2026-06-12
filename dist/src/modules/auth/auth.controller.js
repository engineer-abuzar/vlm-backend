import generateToken from "../../utils/jwt.js";
import { prisma } from "../../config/prisma.js";
import { sendOTP } from "../../services/otp.js";
// ── POST /auth/sent-otp ─────────────────────────────────────
export const sentOtp = async (req, res) => {
    const { phone, email, role } = req.body;
    if (!phone && !email) {
        res.status(400).json({ message: 'Either phone or email must be provided' });
        return;
    }
    // Find or create user
    let user = await prisma.user.findFirst({
        where: {
            OR: [
                email ? { email } : undefined,
                phone ? { mobile: phone } : undefined,
            ].filter(Boolean),
        },
    });
    if (!user) {
        const roleUpper = String(role || 'STUDENT').toUpperCase();
        user = await prisma.user.create({
            data: {
                email: email || null,
                mobile: phone || null,
                role: roleUpper,
            },
        });
    }
    const identifier = user.email || user.mobile || '';
    await sendOTP(identifier);
    res.json({ message: `OTP sent to ${user.email ? 'registered email' : 'registered phone'}` });
};
// ── POST /auth/otp/verify  (also aliased to /verify-otp) ────
export const verifyOTP = async (req, res) => {
    // Frontend sends { phone, otp }  OR  { identifier, otp }
    const { phone, identifier: rawIdentifier, otp: inputOtp } = req.body;
    const identifier = rawIdentifier || phone;
    if (!identifier || !inputOtp) {
        res.status(400).json({ message: 'identifier/phone and otp are required' });
        return;
    }
    const record = await prisma.oTP.findUnique({ where: { identifier } });
    if (!record) {
        res.status(400).json({ message: 'No verification request found' });
        return;
    }
    if (inputOtp !== record.otp) {
        // Dev bypass: in development, allow "000000" as master OTP
        const isDev = process.env.NODE_ENV === 'development';
        const isMasterOtp = isDev && inputOtp === '000000';
        if (!isMasterOtp) {
            res.status(400).json({ message: 'Invalid verification code' });
            return;
        }
    }
    if (new Date() > record.expiresAt) {
        await prisma.oTP.delete({ where: { identifier } });
        res.status(400).json({ message: 'Verification code has expired' });
        return;
    }
    await prisma.oTP.delete({ where: { identifier } });
    const user = await prisma.user.findFirst({
        where: {
            OR: [{ email: identifier }, { mobile: identifier }],
        },
        include: {
            studentProfile: true,
            parentProfile: true,
            teacherProfile: true,
            wallet: true,
        },
    });
    if (!user) {
        res.status(404).json({ message: 'User not found' });
        return;
    }
    // Determine isNewUser: no profile exists yet
    const isNewUser = !user.studentProfile && !user.teacherProfile && !user.parentProfile;
    const token = generateToken({
        userId: user.id,
        email: user.email,
        mobile: user.mobile,
        role: user.role,
    });
    res.status(200).json({
        message: 'OTP verified successfully',
        token,
        isNewUser,
        user: {
            id: user.id,
            email: user.email,
            mobile: user.mobile,
            role: user.role,
            studentProfile: user.studentProfile,
            parentProfile: user.parentProfile,
            teacherProfile: user.teacherProfile,
        },
    });
};
// ── POST /auth/role ─────────────────────────────────────────
export const selectRole = async (req, res) => {
    const userId = req.user?.userId;
    const { role } = req.body;
    if (!userId) {
        res.status(401).json({ message: 'Unauthorized' });
        return;
    }
    if (!role) {
        res.status(400).json({ message: 'role is required' });
        return;
    }
    const updatedUser = await prisma.user.update({
        where: { id: userId },
        data: { role: String(role).toUpperCase() },
    });
    const token = generateToken({
        userId: updatedUser.id,
        email: updatedUser.email,
        mobile: updatedUser.mobile,
        role: updatedUser.role,
    });
    res.json({ message: 'Role updated', token, user: updatedUser });
};
// ── GET /auth/me ────────────────────────────────────────────
export const getCurrentUser = async (req, res) => {
    const userId = req.user?.userId;
    if (!userId) {
        res.status(401).json({ message: 'Unauthorized' });
        return;
    }
    const user = await prisma.user.findUnique({
        where: { id: userId },
        include: {
            studentProfile: { include: { plan: true, subscription: true } },
            teacherProfile: true,
            parentProfile: true,
            wallet: true,
        },
    });
    if (!user) {
        res.status(404).json({ message: 'User not found' });
        return;
    }
    res.status(200).json({ user });
};
// ── POST /auth/logout ───────────────────────────────────────
export const logout = (_req, res) => {
    res.clearCookie('token');
    res.status(200).json({ message: 'Logged out successfully' });
};
// ── GET /auth/google ────────────────────────────────────────
export const googleAuthUrl = (_req, res) => {
    // Placeholder — integrate actual Google OAuth when needed
    const clientId = process.env.GOOGLE_CLIENT_ID || '';
    const redirectUri = process.env.GOOGLE_REDIRECT_URI || `${process.env.CLIENT_URL}/auth/google/callback`;
    const url = `https://accounts.google.com/o/oauth2/v2/auth` +
        `?client_id=${clientId}` +
        `&redirect_uri=${encodeURIComponent(redirectUri)}` +
        `&response_type=code` +
        `&scope=openid%20email%20profile`;
    res.json({ url });
};
// ── POST /auth/register ─────────────────────────────────────
export const Register = async (req, res) => {
    const { mobile, email, role } = req.body;
    const existingUser = await prisma.user.findFirst({
        where: {
            OR: [
                email ? { email } : undefined,
                mobile ? { mobile } : undefined,
            ].filter(Boolean),
        },
    });
    if (existingUser) {
        res.status(400).json({ message: 'User already exists' });
        return;
    }
    const roleUpper = String(role || 'STUDENT').toUpperCase();
    const user = await prisma.user.create({
        data: {
            email: email || null,
            mobile: mobile || null,
            role: roleUpper,
        },
    });
    res.status(201).json({ message: 'User registered successfully', user });
};
//# sourceMappingURL=auth.controller.js.map