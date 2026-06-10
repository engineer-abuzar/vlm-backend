import jwt from 'jsonwebtoken';
const jwtSecret = process.env.JWT_SECRET || 'your_jwt_secret';
const jwtExpiresIn = '1h';

export default function generateToken(payload: object): string {
  return jwt.sign(payload, jwtSecret, { expiresIn: jwtExpiresIn });
}