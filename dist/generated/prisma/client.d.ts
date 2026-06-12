import * as runtime from "@prisma/client/runtime/client";
import * as $Class from "./internal/class.ts";
import * as Prisma from "./internal/prismaNamespace.ts";
export * as $Enums from './enums.ts';
export * from "./enums.ts";
/**
 * ## Prisma Client
 *
 * Type-safe database client for TypeScript
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more OTPS
 * const oTPS = await prisma.oTP.findMany()
 * ```
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export declare const PrismaClient: $Class.PrismaClientConstructor;
export type PrismaClient<LogOpts extends Prisma.LogLevel = never, OmitOpts extends Prisma.PrismaClientOptions["omit"] = Prisma.PrismaClientOptions["omit"], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = $Class.PrismaClient<LogOpts, OmitOpts, ExtArgs>;
export { Prisma };
/**
 * Model OTP
 *
 */
export type OTP = Prisma.OTPModel;
/**
 * Model Subjects
 *
 */
export type Subjects = Prisma.SubjectsModel;
/**
 * Model Chapters
 *
 */
export type Chapters = Prisma.ChaptersModel;
/**
 * Model User
 *
 */
export type User = Prisma.UserModel;
/**
 * Model Plan
 *
 */
export type Plan = Prisma.PlanModel;
/**
 * Model StudentProfile
 *
 */
export type StudentProfile = Prisma.StudentProfileModel;
/**
 * Model TeacherProfile
 *
 */
export type TeacherProfile = Prisma.TeacherProfileModel;
/**
 * Model ParentProfile
 *
 */
export type ParentProfile = Prisma.ParentProfileModel;
/**
 * Model Wallet
 *
 */
export type Wallet = Prisma.WalletModel;
/**
 * Model Doubt
 *
 */
export type Doubt = Prisma.DoubtModel;
/**
 * Model Chat
 *
 */
export type Chat = Prisma.ChatModel;
/**
 * Model Message
 *
 */
export type Message = Prisma.MessageModel;
/**
 * Model Payment
 *
 */
export type Payment = Prisma.PaymentModel;
/**
 * Model Subscription
 *
 */
export type Subscription = Prisma.SubscriptionModel;
/**
 * Model Feedback
 *
 */
export type Feedback = Prisma.FeedbackModel;
/**
 * Model SupportTicket
 *
 */
export type SupportTicket = Prisma.SupportTicketModel;
/**
 * Model Session
 *
 */
export type Session = Prisma.SessionModel;
/**
 * Model Referral
 *
 */
export type Referral = Prisma.ReferralModel;
/**
 * Model McqQuestion
 *
 */
export type McqQuestion = Prisma.McqQuestionModel;
/**
 * Model McqAttempt
 *
 */
export type McqAttempt = Prisma.McqAttemptModel;
/**
 * Model TeacherTimeSlot
 *
 */
export type TeacherTimeSlot = Prisma.TeacherTimeSlotModel;
/**
 * Model TeacherNotification
 *
 */
export type TeacherNotification = Prisma.TeacherNotificationModel;
//# sourceMappingURL=client.d.ts.map