import jwt from 'jsonwebtoken';
const jwtSecret = process.env.JWT_SECRET || 'your_jwt_secret';
/** Short-lived access token (7 days to avoid constant re-login for mobile) */
export default function generateToken(payload) {
    return jwt.sign(payload, jwtSecret, { expiresIn: '7d' });
}
/** Verify and decode a token */
export function verifyToken(token) {
    return jwt.verify(token, jwtSecret);
}
//# sourceMappingURL=jwt.js.map