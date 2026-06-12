/**
 * Generates an OTP, saves/upserts it to the Prisma database, and emails it.
 * Errors bubble up directly to your async handler middleware.
 *
 * @param userEmail - Destination email address
 */
export declare function sendOTP(identifier: string): Promise<void>;
/**
 * Fetches the stored OTP, validates it, and deletes it upon a successful match.
 * Errors bubble up directly to your async handler middleware.
 *
 * @param userEmail - The user's email address
 * @param inputOtp - The OTP code inputted by the user
 */ 
//# sourceMappingURL=otp.d.ts.map