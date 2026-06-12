import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.ts';
export type * from './prismaNamespace.ts';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly OTP: "OTP";
    readonly Subjects: "Subjects";
    readonly Chapters: "Chapters";
    readonly User: "User";
    readonly Plan: "Plan";
    readonly StudentProfile: "StudentProfile";
    readonly TeacherProfile: "TeacherProfile";
    readonly ParentProfile: "ParentProfile";
    readonly Wallet: "Wallet";
    readonly Doubt: "Doubt";
    readonly Chat: "Chat";
    readonly Message: "Message";
    readonly Payment: "Payment";
    readonly Subscription: "Subscription";
    readonly Feedback: "Feedback";
    readonly SupportTicket: "SupportTicket";
    readonly Session: "Session";
    readonly Referral: "Referral";
    readonly McqQuestion: "McqQuestion";
    readonly McqAttempt: "McqAttempt";
    readonly TeacherTimeSlot: "TeacherTimeSlot";
    readonly TeacherNotification: "TeacherNotification";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const OTPScalarFieldEnum: {
    readonly id: "id";
    readonly identifier: "identifier";
    readonly otp: "otp";
    readonly expiresAt: "expiresAt";
    readonly verified: "verified";
};
export type OTPScalarFieldEnum = (typeof OTPScalarFieldEnum)[keyof typeof OTPScalarFieldEnum];
export declare const SubjectsScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly class: "class";
    readonly code: "code";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type SubjectsScalarFieldEnum = (typeof SubjectsScalarFieldEnum)[keyof typeof SubjectsScalarFieldEnum];
export declare const ChaptersScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly subjectId: "subjectId";
};
export type ChaptersScalarFieldEnum = (typeof ChaptersScalarFieldEnum)[keyof typeof ChaptersScalarFieldEnum];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly email: "email";
    readonly mobile: "mobile";
    readonly password: "password";
    readonly role: "role";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const PlanScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly price: "price";
    readonly duration: "duration";
    readonly credits: "credits";
    readonly humanChatCredits: "humanChatCredits";
    readonly audioVideoMinutes: "audioVideoMinutes";
    readonly liveClassAcess: "liveClassAcess";
};
export type PlanScalarFieldEnum = (typeof PlanScalarFieldEnum)[keyof typeof PlanScalarFieldEnum];
export declare const StudentProfileScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly planId: "planId";
    readonly fullName: "fullName";
    readonly nickname: "nickname";
    readonly className: "className";
    readonly board: "board";
    readonly schoolName: "schoolName";
    readonly city: "city";
    readonly state: "state";
};
export type StudentProfileScalarFieldEnum = (typeof StudentProfileScalarFieldEnum)[keyof typeof StudentProfileScalarFieldEnum];
export declare const TeacherProfileScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly fullName: "fullName";
    readonly gender: "gender";
    readonly dob: "dob";
    readonly address: "address";
    readonly city: "city";
    readonly state: "state";
    readonly pincode: "pincode";
    readonly profilePhoto: "profilePhoto";
    readonly qualification: "qualification";
    readonly highestQualification: "highestQualification";
    readonly instituteName: "instituteName";
    readonly passingYear: "passingYear";
    readonly teachingCertification: "teachingCertification";
    readonly hasBEd: "hasBEd";
    readonly experience: "experience";
    readonly experienceMonths: "experienceMonths";
    readonly teachingMode: "teachingMode";
    readonly experienceType: "experienceType";
    readonly resumeUrl: "resumeUrl";
    readonly experienceSummary: "experienceSummary";
    readonly subjects: "subjects";
    readonly classes: "classes";
    readonly boards: "boards";
    readonly languages: "languages";
    readonly aadhaarUrl: "aadhaarUrl";
    readonly qualificationDocUrl: "qualificationDocUrl";
    readonly experienceDocUrl: "experienceDocUrl";
    readonly demoVideoUrl: "demoVideoUrl";
    readonly verificationStatus: "verificationStatus";
    readonly rejectionReason: "rejectionReason";
    readonly reapplicationDate: "reapplicationDate";
    readonly availabilityStatus: "availabilityStatus";
    readonly interviewDate: "interviewDate";
    readonly interviewLink: "interviewLink";
    readonly rating: "rating";
};
export type TeacherProfileScalarFieldEnum = (typeof TeacherProfileScalarFieldEnum)[keyof typeof TeacherProfileScalarFieldEnum];
export declare const ParentProfileScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly fullName: "fullName";
};
export type ParentProfileScalarFieldEnum = (typeof ParentProfileScalarFieldEnum)[keyof typeof ParentProfileScalarFieldEnum];
export declare const WalletScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly balance: "balance";
};
export type WalletScalarFieldEnum = (typeof WalletScalarFieldEnum)[keyof typeof WalletScalarFieldEnum];
export declare const DoubtScalarFieldEnum: {
    readonly id: "id";
    readonly studentId: "studentId";
    readonly subjectId: "subjectId";
    readonly chapterId: "chapterId";
    readonly text: "text";
    readonly images: "images";
    readonly status: "status";
    readonly assignedTo: "assignedTo";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type DoubtScalarFieldEnum = (typeof DoubtScalarFieldEnum)[keyof typeof DoubtScalarFieldEnum];
export declare const ChatScalarFieldEnum: {
    readonly id: "id";
    readonly studentId: "studentId";
    readonly teacherId: "teacherId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ChatScalarFieldEnum = (typeof ChatScalarFieldEnum)[keyof typeof ChatScalarFieldEnum];
export declare const MessageScalarFieldEnum: {
    readonly id: "id";
    readonly chatId: "chatId";
    readonly doubtId: "doubtId";
    readonly senderId: "senderId";
    readonly senderType: "senderType";
    readonly content: "content";
    readonly images: "images";
    readonly readAt: "readAt";
    readonly createdAt: "createdAt";
};
export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum];
export declare const PaymentScalarFieldEnum: {
    readonly id: "id";
    readonly studentId: "studentId";
    readonly planId: "planId";
    readonly amount: "amount";
    readonly currency: "currency";
    readonly razorpayOrderId: "razorpayOrderId";
    readonly razorpayPaymentId: "razorpayPaymentId";
    readonly status: "status";
    readonly createdAt: "createdAt";
};
export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum];
export declare const SubscriptionScalarFieldEnum: {
    readonly id: "id";
    readonly studentId: "studentId";
    readonly planId: "planId";
    readonly paymentId: "paymentId";
    readonly startDate: "startDate";
    readonly endDate: "endDate";
    readonly status: "status";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type SubscriptionScalarFieldEnum = (typeof SubscriptionScalarFieldEnum)[keyof typeof SubscriptionScalarFieldEnum];
export declare const FeedbackScalarFieldEnum: {
    readonly id: "id";
    readonly sessionId: "sessionId";
    readonly doubtId: "doubtId";
    readonly studentId: "studentId";
    readonly rating: "rating";
    readonly comment: "comment";
    readonly createdAt: "createdAt";
};
export type FeedbackScalarFieldEnum = (typeof FeedbackScalarFieldEnum)[keyof typeof FeedbackScalarFieldEnum];
export declare const SupportTicketScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly subject: "subject";
    readonly description: "description";
    readonly status: "status";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type SupportTicketScalarFieldEnum = (typeof SupportTicketScalarFieldEnum)[keyof typeof SupportTicketScalarFieldEnum];
export declare const SessionScalarFieldEnum: {
    readonly id: "id";
    readonly studentId: "studentId";
    readonly teacherId: "teacherId";
    readonly type: "type";
    readonly status: "status";
    readonly startedAt: "startedAt";
    readonly endedAt: "endedAt";
    readonly createdAt: "createdAt";
};
export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum];
export declare const ReferralScalarFieldEnum: {
    readonly id: "id";
    readonly referrerId: "referrerId";
    readonly refereeId: "refereeId";
    readonly type: "type";
    readonly code: "code";
    readonly status: "status";
    readonly pointsGiven: "pointsGiven";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ReferralScalarFieldEnum = (typeof ReferralScalarFieldEnum)[keyof typeof ReferralScalarFieldEnum];
export declare const McqQuestionScalarFieldEnum: {
    readonly id: "id";
    readonly subjectId: "subjectId";
    readonly chapterId: "chapterId";
    readonly question: "question";
    readonly options: "options";
    readonly answer: "answer";
    readonly difficulty: "difficulty";
    readonly createdAt: "createdAt";
};
export type McqQuestionScalarFieldEnum = (typeof McqQuestionScalarFieldEnum)[keyof typeof McqQuestionScalarFieldEnum];
export declare const McqAttemptScalarFieldEnum: {
    readonly id: "id";
    readonly studentId: "studentId";
    readonly questionId: "questionId";
    readonly selectedOpt: "selectedOpt";
    readonly isCorrect: "isCorrect";
    readonly createdAt: "createdAt";
};
export type McqAttemptScalarFieldEnum = (typeof McqAttemptScalarFieldEnum)[keyof typeof McqAttemptScalarFieldEnum];
export declare const TeacherTimeSlotScalarFieldEnum: {
    readonly id: "id";
    readonly teacherId: "teacherId";
    readonly dayOfWeek: "dayOfWeek";
    readonly subject: "subject";
    readonly startTime: "startTime";
    readonly endTime: "endTime";
    readonly isActive: "isActive";
    readonly repeatWeekly: "repeatWeekly";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type TeacherTimeSlotScalarFieldEnum = (typeof TeacherTimeSlotScalarFieldEnum)[keyof typeof TeacherTimeSlotScalarFieldEnum];
export declare const TeacherNotificationScalarFieldEnum: {
    readonly id: "id";
    readonly teacherId: "teacherId";
    readonly type: "type";
    readonly title: "title";
    readonly message: "message";
    readonly isRead: "isRead";
    readonly createdAt: "createdAt";
};
export type TeacherNotificationScalarFieldEnum = (typeof TeacherNotificationScalarFieldEnum)[keyof typeof TeacherNotificationScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map