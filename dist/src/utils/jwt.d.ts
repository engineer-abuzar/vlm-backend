/** Short-lived access token (7 days to avoid constant re-login for mobile) */
export default function generateToken(payload: object): string;
/** Verify and decode a token */
export declare function verifyToken(token: string): any;
//# sourceMappingURL=jwt.d.ts.map