export declare const Role: {
    readonly STUDENT: "STUDENT";
    readonly TEACHER: "TEACHER";
    readonly PARENT: "PARENT";
    readonly ADMIN: "ADMIN";
};
export type Role = (typeof Role)[keyof typeof Role];
export declare const SessionType: {
    readonly CHAT: "CHAT";
    readonly AUDIO: "AUDIO";
    readonly VIDEO: "VIDEO";
};
export type SessionType = (typeof SessionType)[keyof typeof SessionType];
export declare const SessionStatus: {
    readonly PENDING: "PENDING";
    readonly ACTIVE: "ACTIVE";
    readonly COMPLETED: "COMPLETED";
    readonly CANCELLED: "CANCELLED";
};
export type SessionStatus = (typeof SessionStatus)[keyof typeof SessionStatus];
export declare const DoubtStatus: {
    readonly PENDING: "PENDING";
    readonly ASSIGNED: "ASSIGNED";
    readonly RESOLVED: "RESOLVED";
    readonly CLOSED: "CLOSED";
};
export type DoubtStatus = (typeof DoubtStatus)[keyof typeof DoubtStatus];
export declare const PaymentStatus: {
    readonly PENDING: "PENDING";
    readonly SUCCESS: "SUCCESS";
    readonly FAILED: "FAILED";
};
export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus];
export declare const SubscriptionStatus: {
    readonly ACTIVE: "ACTIVE";
    readonly EXPIRED: "EXPIRED";
    readonly CANCELLED: "CANCELLED";
};
export type SubscriptionStatus = (typeof SubscriptionStatus)[keyof typeof SubscriptionStatus];
export declare const TicketStatus: {
    readonly OPEN: "OPEN";
    readonly IN_PROGRESS: "IN_PROGRESS";
    readonly RESOLVED: "RESOLVED";
    readonly CLOSED: "CLOSED";
};
export type TicketStatus = (typeof TicketStatus)[keyof typeof TicketStatus];
export declare const ReferralType: {
    readonly STUDENT: "STUDENT";
    readonly TEACHER: "TEACHER";
};
export type ReferralType = (typeof ReferralType)[keyof typeof ReferralType];
export declare const ReferralStatus: {
    readonly PENDING: "PENDING";
    readonly COMPLETED: "COMPLETED";
    readonly REWARDED: "REWARDED";
};
export type ReferralStatus = (typeof ReferralStatus)[keyof typeof ReferralStatus];
export declare const McqDifficulty: {
    readonly EASY: "EASY";
    readonly MEDIUM: "MEDIUM";
    readonly HARD: "HARD";
};
export type McqDifficulty = (typeof McqDifficulty)[keyof typeof McqDifficulty];
//# sourceMappingURL=enums.d.ts.map