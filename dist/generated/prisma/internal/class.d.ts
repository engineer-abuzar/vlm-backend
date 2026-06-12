import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "./prismaNamespace.ts";
export type LogOptions<ClientOptions extends Prisma.PrismaClientOptions> = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never;
export interface PrismaClientConstructor {
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
    new <Options extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions, LogOpts extends LogOptions<Options> = LogOptions<Options>, OmitOpts extends Prisma.PrismaClientOptions['omit'] = Options extends {
        omit: infer U;
    } ? U : Prisma.PrismaClientOptions['omit'], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs>(options: Prisma.Subset<Options, Prisma.PrismaClientOptions>): PrismaClient<LogOpts, OmitOpts, ExtArgs>;
}
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
export interface PrismaClient<in LogOpts extends Prisma.LogLevel = never, in out OmitOpts extends Prisma.PrismaClientOptions['omit'] = undefined, in out ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['other'];
    };
    $on<V extends LogOpts>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;
    /**
     * Connect with the database
     */
    $connect(): runtime.Types.Utils.JsPromise<void>;
    /**
     * Disconnect from the database
     */
    $disconnect(): runtime.Types.Utils.JsPromise<void>;
    /**
       * Executes a prepared raw query and returns the number of affected rows.
       * @example
       * ```
       * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
       * ```
       *
       * Read more in our [docs](https://pris.ly/d/raw-queries).
       */
    $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;
    /**
     * Executes a raw query and returns the number of affected rows.
     * Susceptible to SQL injections, see documentation.
     * @example
     * ```
     * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;
    /**
     * Performs a prepared raw query and returns the `SELECT` data.
     * @example
     * ```
     * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;
    /**
     * Performs a raw query and returns the `SELECT` data.
     * Susceptible to SQL injections, see documentation.
     * @example
     * ```
     * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;
    /**
     * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
     * @example
     * ```
     * const [george, bob, alice] = await prisma.$transaction([
     *   prisma.user.create({ data: { name: 'George' } }),
     *   prisma.user.create({ data: { name: 'Bob' } }),
     *   prisma.user.create({ data: { name: 'Alice' } }),
     * ])
     * ```
     *
     * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
     */
    $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;
    $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => runtime.Types.Utils.JsPromise<R>, options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<R>;
    $extends: runtime.Types.Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<OmitOpts>, ExtArgs, runtime.Types.Utils.Call<Prisma.TypeMapCb<OmitOpts>, {
        extArgs: ExtArgs;
    }>>;
    /**
 * `prisma.oTP`: Exposes CRUD operations for the **OTP** model.
  * Example usage:
  * ```ts
  * // Fetch zero or more OTPS
  * const oTPS = await prisma.oTP.findMany()
  * ```
  */
    get oTP(): Prisma.OTPDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.subjects`: Exposes CRUD operations for the **Subjects** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Subjects
      * const subjects = await prisma.subjects.findMany()
      * ```
      */
    get subjects(): Prisma.SubjectsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.chapters`: Exposes CRUD operations for the **Chapters** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Chapters
      * const chapters = await prisma.chapters.findMany()
      * ```
      */
    get chapters(): Prisma.ChaptersDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.user`: Exposes CRUD operations for the **User** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Users
      * const users = await prisma.user.findMany()
      * ```
      */
    get user(): Prisma.UserDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.plan`: Exposes CRUD operations for the **Plan** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Plans
      * const plans = await prisma.plan.findMany()
      * ```
      */
    get plan(): Prisma.PlanDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.studentProfile`: Exposes CRUD operations for the **StudentProfile** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more StudentProfiles
      * const studentProfiles = await prisma.studentProfile.findMany()
      * ```
      */
    get studentProfile(): Prisma.StudentProfileDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.teacherProfile`: Exposes CRUD operations for the **TeacherProfile** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more TeacherProfiles
      * const teacherProfiles = await prisma.teacherProfile.findMany()
      * ```
      */
    get teacherProfile(): Prisma.TeacherProfileDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.parentProfile`: Exposes CRUD operations for the **ParentProfile** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ParentProfiles
      * const parentProfiles = await prisma.parentProfile.findMany()
      * ```
      */
    get parentProfile(): Prisma.ParentProfileDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.wallet`: Exposes CRUD operations for the **Wallet** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Wallets
      * const wallets = await prisma.wallet.findMany()
      * ```
      */
    get wallet(): Prisma.WalletDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.doubt`: Exposes CRUD operations for the **Doubt** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Doubts
      * const doubts = await prisma.doubt.findMany()
      * ```
      */
    get doubt(): Prisma.DoubtDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.chat`: Exposes CRUD operations for the **Chat** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Chats
      * const chats = await prisma.chat.findMany()
      * ```
      */
    get chat(): Prisma.ChatDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.message`: Exposes CRUD operations for the **Message** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Messages
      * const messages = await prisma.message.findMany()
      * ```
      */
    get message(): Prisma.MessageDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Payments
      * const payments = await prisma.payment.findMany()
      * ```
      */
    get payment(): Prisma.PaymentDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.subscription`: Exposes CRUD operations for the **Subscription** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Subscriptions
      * const subscriptions = await prisma.subscription.findMany()
      * ```
      */
    get subscription(): Prisma.SubscriptionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.feedback`: Exposes CRUD operations for the **Feedback** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Feedbacks
      * const feedbacks = await prisma.feedback.findMany()
      * ```
      */
    get feedback(): Prisma.FeedbackDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.supportTicket`: Exposes CRUD operations for the **SupportTicket** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more SupportTickets
      * const supportTickets = await prisma.supportTicket.findMany()
      * ```
      */
    get supportTicket(): Prisma.SupportTicketDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.session`: Exposes CRUD operations for the **Session** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Sessions
      * const sessions = await prisma.session.findMany()
      * ```
      */
    get session(): Prisma.SessionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.referral`: Exposes CRUD operations for the **Referral** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Referrals
      * const referrals = await prisma.referral.findMany()
      * ```
      */
    get referral(): Prisma.ReferralDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.mcqQuestion`: Exposes CRUD operations for the **McqQuestion** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more McqQuestions
      * const mcqQuestions = await prisma.mcqQuestion.findMany()
      * ```
      */
    get mcqQuestion(): Prisma.McqQuestionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.mcqAttempt`: Exposes CRUD operations for the **McqAttempt** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more McqAttempts
      * const mcqAttempts = await prisma.mcqAttempt.findMany()
      * ```
      */
    get mcqAttempt(): Prisma.McqAttemptDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.teacherTimeSlot`: Exposes CRUD operations for the **TeacherTimeSlot** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more TeacherTimeSlots
      * const teacherTimeSlots = await prisma.teacherTimeSlot.findMany()
      * ```
      */
    get teacherTimeSlot(): Prisma.TeacherTimeSlotDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.teacherNotification`: Exposes CRUD operations for the **TeacherNotification** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more TeacherNotifications
      * const teacherNotifications = await prisma.teacherNotification.findMany()
      * ```
      */
    get teacherNotification(): Prisma.TeacherNotificationDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
}
export declare function getPrismaClientClass(): PrismaClientConstructor;
//# sourceMappingURL=class.d.ts.map