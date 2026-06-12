import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models.ts";
import { type PrismaClient } from "./class.ts";
export type * from '../models.ts';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
/**
 * Prisma Errors
 */
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
/**
 * Re-export of sql-template-tag
 */
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
/**
 * Decimal.js
 */
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
/**
* Extensions
*/
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
/**
 * Prisma Client JS version: 7.8.0
 * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
 */
export declare const prismaVersion: PrismaVersion;
/**
 * Utility Types
 */
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
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
export declare const DbNull: runtime.DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: runtime.JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
/**
 * From T, pick a set of properties whose keys are in the union K
 */
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
/**
 * Subset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
 */
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
/**
 * SelectSubset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
 * Additionally, it validates, if both select and include are present. If the case, it errors.
 */
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
/**
 * Subset + Intersection
 * @desc From `T` pick properties that exist in `U` and intersect `K`
 */
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
/**
 * XOR is needed to have a real mutually exclusive union type
 * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
 */
export type XOR<T, U> = T extends object ? U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U : T;
/**
 * Is T a Record?
 */
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
/**
 * If it's T[], return T
 */
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
/**
 * From ts-toolbelt
 */
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
/** Helper Types for "Merge" **/
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
/** End Helper Types for "Merge" **/
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
/**
 * Convert tuple to union
 */
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
/**
 * Like `Pick`, but additionally can also accept an array of keys
 */
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
/**
 * Exclude all keys with underscores
 */
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
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
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "oTP" | "subjects" | "chapters" | "user" | "plan" | "studentProfile" | "teacherProfile" | "parentProfile" | "wallet" | "doubt" | "chat" | "message" | "payment" | "subscription" | "feedback" | "supportTicket" | "session" | "referral" | "mcqQuestion" | "mcqAttempt" | "teacherTimeSlot" | "teacherNotification";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        OTP: {
            payload: Prisma.$OTPPayload<ExtArgs>;
            fields: Prisma.OTPFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.OTPFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OTPPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.OTPFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OTPPayload>;
                };
                findFirst: {
                    args: Prisma.OTPFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OTPPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.OTPFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OTPPayload>;
                };
                findMany: {
                    args: Prisma.OTPFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OTPPayload>[];
                };
                create: {
                    args: Prisma.OTPCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OTPPayload>;
                };
                createMany: {
                    args: Prisma.OTPCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.OTPCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OTPPayload>[];
                };
                delete: {
                    args: Prisma.OTPDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OTPPayload>;
                };
                update: {
                    args: Prisma.OTPUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OTPPayload>;
                };
                deleteMany: {
                    args: Prisma.OTPDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.OTPUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.OTPUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OTPPayload>[];
                };
                upsert: {
                    args: Prisma.OTPUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OTPPayload>;
                };
                aggregate: {
                    args: Prisma.OTPAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateOTP>;
                };
                groupBy: {
                    args: Prisma.OTPGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OTPGroupByOutputType>[];
                };
                count: {
                    args: Prisma.OTPCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OTPCountAggregateOutputType> | number;
                };
            };
        };
        Subjects: {
            payload: Prisma.$SubjectsPayload<ExtArgs>;
            fields: Prisma.SubjectsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SubjectsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubjectsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SubjectsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubjectsPayload>;
                };
                findFirst: {
                    args: Prisma.SubjectsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubjectsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SubjectsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubjectsPayload>;
                };
                findMany: {
                    args: Prisma.SubjectsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubjectsPayload>[];
                };
                create: {
                    args: Prisma.SubjectsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubjectsPayload>;
                };
                createMany: {
                    args: Prisma.SubjectsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SubjectsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubjectsPayload>[];
                };
                delete: {
                    args: Prisma.SubjectsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubjectsPayload>;
                };
                update: {
                    args: Prisma.SubjectsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubjectsPayload>;
                };
                deleteMany: {
                    args: Prisma.SubjectsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SubjectsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SubjectsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubjectsPayload>[];
                };
                upsert: {
                    args: Prisma.SubjectsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubjectsPayload>;
                };
                aggregate: {
                    args: Prisma.SubjectsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSubjects>;
                };
                groupBy: {
                    args: Prisma.SubjectsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SubjectsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SubjectsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SubjectsCountAggregateOutputType> | number;
                };
            };
        };
        Chapters: {
            payload: Prisma.$ChaptersPayload<ExtArgs>;
            fields: Prisma.ChaptersFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ChaptersFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChaptersPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ChaptersFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChaptersPayload>;
                };
                findFirst: {
                    args: Prisma.ChaptersFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChaptersPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ChaptersFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChaptersPayload>;
                };
                findMany: {
                    args: Prisma.ChaptersFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChaptersPayload>[];
                };
                create: {
                    args: Prisma.ChaptersCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChaptersPayload>;
                };
                createMany: {
                    args: Prisma.ChaptersCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ChaptersCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChaptersPayload>[];
                };
                delete: {
                    args: Prisma.ChaptersDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChaptersPayload>;
                };
                update: {
                    args: Prisma.ChaptersUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChaptersPayload>;
                };
                deleteMany: {
                    args: Prisma.ChaptersDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ChaptersUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ChaptersUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChaptersPayload>[];
                };
                upsert: {
                    args: Prisma.ChaptersUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChaptersPayload>;
                };
                aggregate: {
                    args: Prisma.ChaptersAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateChapters>;
                };
                groupBy: {
                    args: Prisma.ChaptersGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ChaptersGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ChaptersCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ChaptersCountAggregateOutputType> | number;
                };
            };
        };
        User: {
            payload: Prisma.$UserPayload<ExtArgs>;
            fields: Prisma.UserFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UserFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findFirst: {
                    args: Prisma.UserFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findMany: {
                    args: Prisma.UserFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                create: {
                    args: Prisma.UserCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                createMany: {
                    args: Prisma.UserCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                delete: {
                    args: Prisma.UserDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                update: {
                    args: Prisma.UserUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                deleteMany: {
                    args: Prisma.UserDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UserUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                upsert: {
                    args: Prisma.UserUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                aggregate: {
                    args: Prisma.UserAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUser>;
                };
                groupBy: {
                    args: Prisma.UserGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UserCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserCountAggregateOutputType> | number;
                };
            };
        };
        Plan: {
            payload: Prisma.$PlanPayload<ExtArgs>;
            fields: Prisma.PlanFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PlanFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlanPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PlanFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlanPayload>;
                };
                findFirst: {
                    args: Prisma.PlanFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlanPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PlanFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlanPayload>;
                };
                findMany: {
                    args: Prisma.PlanFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlanPayload>[];
                };
                create: {
                    args: Prisma.PlanCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlanPayload>;
                };
                createMany: {
                    args: Prisma.PlanCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PlanCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlanPayload>[];
                };
                delete: {
                    args: Prisma.PlanDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlanPayload>;
                };
                update: {
                    args: Prisma.PlanUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlanPayload>;
                };
                deleteMany: {
                    args: Prisma.PlanDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PlanUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PlanUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlanPayload>[];
                };
                upsert: {
                    args: Prisma.PlanUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlanPayload>;
                };
                aggregate: {
                    args: Prisma.PlanAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePlan>;
                };
                groupBy: {
                    args: Prisma.PlanGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PlanGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PlanCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PlanCountAggregateOutputType> | number;
                };
            };
        };
        StudentProfile: {
            payload: Prisma.$StudentProfilePayload<ExtArgs>;
            fields: Prisma.StudentProfileFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.StudentProfileFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentProfilePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.StudentProfileFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentProfilePayload>;
                };
                findFirst: {
                    args: Prisma.StudentProfileFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentProfilePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.StudentProfileFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentProfilePayload>;
                };
                findMany: {
                    args: Prisma.StudentProfileFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentProfilePayload>[];
                };
                create: {
                    args: Prisma.StudentProfileCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentProfilePayload>;
                };
                createMany: {
                    args: Prisma.StudentProfileCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.StudentProfileCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentProfilePayload>[];
                };
                delete: {
                    args: Prisma.StudentProfileDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentProfilePayload>;
                };
                update: {
                    args: Prisma.StudentProfileUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentProfilePayload>;
                };
                deleteMany: {
                    args: Prisma.StudentProfileDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.StudentProfileUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.StudentProfileUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentProfilePayload>[];
                };
                upsert: {
                    args: Prisma.StudentProfileUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentProfilePayload>;
                };
                aggregate: {
                    args: Prisma.StudentProfileAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateStudentProfile>;
                };
                groupBy: {
                    args: Prisma.StudentProfileGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.StudentProfileGroupByOutputType>[];
                };
                count: {
                    args: Prisma.StudentProfileCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.StudentProfileCountAggregateOutputType> | number;
                };
            };
        };
        TeacherProfile: {
            payload: Prisma.$TeacherProfilePayload<ExtArgs>;
            fields: Prisma.TeacherProfileFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.TeacherProfileFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeacherProfilePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.TeacherProfileFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeacherProfilePayload>;
                };
                findFirst: {
                    args: Prisma.TeacherProfileFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeacherProfilePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.TeacherProfileFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeacherProfilePayload>;
                };
                findMany: {
                    args: Prisma.TeacherProfileFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeacherProfilePayload>[];
                };
                create: {
                    args: Prisma.TeacherProfileCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeacherProfilePayload>;
                };
                createMany: {
                    args: Prisma.TeacherProfileCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.TeacherProfileCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeacherProfilePayload>[];
                };
                delete: {
                    args: Prisma.TeacherProfileDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeacherProfilePayload>;
                };
                update: {
                    args: Prisma.TeacherProfileUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeacherProfilePayload>;
                };
                deleteMany: {
                    args: Prisma.TeacherProfileDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.TeacherProfileUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.TeacherProfileUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeacherProfilePayload>[];
                };
                upsert: {
                    args: Prisma.TeacherProfileUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeacherProfilePayload>;
                };
                aggregate: {
                    args: Prisma.TeacherProfileAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTeacherProfile>;
                };
                groupBy: {
                    args: Prisma.TeacherProfileGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TeacherProfileGroupByOutputType>[];
                };
                count: {
                    args: Prisma.TeacherProfileCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TeacherProfileCountAggregateOutputType> | number;
                };
            };
        };
        ParentProfile: {
            payload: Prisma.$ParentProfilePayload<ExtArgs>;
            fields: Prisma.ParentProfileFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ParentProfileFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParentProfilePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ParentProfileFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParentProfilePayload>;
                };
                findFirst: {
                    args: Prisma.ParentProfileFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParentProfilePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ParentProfileFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParentProfilePayload>;
                };
                findMany: {
                    args: Prisma.ParentProfileFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParentProfilePayload>[];
                };
                create: {
                    args: Prisma.ParentProfileCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParentProfilePayload>;
                };
                createMany: {
                    args: Prisma.ParentProfileCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ParentProfileCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParentProfilePayload>[];
                };
                delete: {
                    args: Prisma.ParentProfileDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParentProfilePayload>;
                };
                update: {
                    args: Prisma.ParentProfileUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParentProfilePayload>;
                };
                deleteMany: {
                    args: Prisma.ParentProfileDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ParentProfileUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ParentProfileUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParentProfilePayload>[];
                };
                upsert: {
                    args: Prisma.ParentProfileUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParentProfilePayload>;
                };
                aggregate: {
                    args: Prisma.ParentProfileAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateParentProfile>;
                };
                groupBy: {
                    args: Prisma.ParentProfileGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ParentProfileGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ParentProfileCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ParentProfileCountAggregateOutputType> | number;
                };
            };
        };
        Wallet: {
            payload: Prisma.$WalletPayload<ExtArgs>;
            fields: Prisma.WalletFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.WalletFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WalletPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.WalletFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WalletPayload>;
                };
                findFirst: {
                    args: Prisma.WalletFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WalletPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.WalletFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WalletPayload>;
                };
                findMany: {
                    args: Prisma.WalletFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WalletPayload>[];
                };
                create: {
                    args: Prisma.WalletCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WalletPayload>;
                };
                createMany: {
                    args: Prisma.WalletCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.WalletCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WalletPayload>[];
                };
                delete: {
                    args: Prisma.WalletDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WalletPayload>;
                };
                update: {
                    args: Prisma.WalletUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WalletPayload>;
                };
                deleteMany: {
                    args: Prisma.WalletDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.WalletUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.WalletUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WalletPayload>[];
                };
                upsert: {
                    args: Prisma.WalletUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WalletPayload>;
                };
                aggregate: {
                    args: Prisma.WalletAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateWallet>;
                };
                groupBy: {
                    args: Prisma.WalletGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.WalletGroupByOutputType>[];
                };
                count: {
                    args: Prisma.WalletCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.WalletCountAggregateOutputType> | number;
                };
            };
        };
        Doubt: {
            payload: Prisma.$DoubtPayload<ExtArgs>;
            fields: Prisma.DoubtFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.DoubtFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoubtPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.DoubtFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoubtPayload>;
                };
                findFirst: {
                    args: Prisma.DoubtFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoubtPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.DoubtFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoubtPayload>;
                };
                findMany: {
                    args: Prisma.DoubtFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoubtPayload>[];
                };
                create: {
                    args: Prisma.DoubtCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoubtPayload>;
                };
                createMany: {
                    args: Prisma.DoubtCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.DoubtCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoubtPayload>[];
                };
                delete: {
                    args: Prisma.DoubtDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoubtPayload>;
                };
                update: {
                    args: Prisma.DoubtUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoubtPayload>;
                };
                deleteMany: {
                    args: Prisma.DoubtDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.DoubtUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.DoubtUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoubtPayload>[];
                };
                upsert: {
                    args: Prisma.DoubtUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoubtPayload>;
                };
                aggregate: {
                    args: Prisma.DoubtAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDoubt>;
                };
                groupBy: {
                    args: Prisma.DoubtGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DoubtGroupByOutputType>[];
                };
                count: {
                    args: Prisma.DoubtCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DoubtCountAggregateOutputType> | number;
                };
            };
        };
        Chat: {
            payload: Prisma.$ChatPayload<ExtArgs>;
            fields: Prisma.ChatFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ChatFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChatPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ChatFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChatPayload>;
                };
                findFirst: {
                    args: Prisma.ChatFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChatPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ChatFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChatPayload>;
                };
                findMany: {
                    args: Prisma.ChatFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChatPayload>[];
                };
                create: {
                    args: Prisma.ChatCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChatPayload>;
                };
                createMany: {
                    args: Prisma.ChatCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ChatCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChatPayload>[];
                };
                delete: {
                    args: Prisma.ChatDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChatPayload>;
                };
                update: {
                    args: Prisma.ChatUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChatPayload>;
                };
                deleteMany: {
                    args: Prisma.ChatDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ChatUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ChatUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChatPayload>[];
                };
                upsert: {
                    args: Prisma.ChatUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChatPayload>;
                };
                aggregate: {
                    args: Prisma.ChatAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateChat>;
                };
                groupBy: {
                    args: Prisma.ChatGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ChatGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ChatCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ChatCountAggregateOutputType> | number;
                };
            };
        };
        Message: {
            payload: Prisma.$MessagePayload<ExtArgs>;
            fields: Prisma.MessageFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.MessageFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessagePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessagePayload>;
                };
                findFirst: {
                    args: Prisma.MessageFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessagePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessagePayload>;
                };
                findMany: {
                    args: Prisma.MessageFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessagePayload>[];
                };
                create: {
                    args: Prisma.MessageCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessagePayload>;
                };
                createMany: {
                    args: Prisma.MessageCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.MessageCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessagePayload>[];
                };
                delete: {
                    args: Prisma.MessageDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessagePayload>;
                };
                update: {
                    args: Prisma.MessageUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessagePayload>;
                };
                deleteMany: {
                    args: Prisma.MessageDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.MessageUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.MessageUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessagePayload>[];
                };
                upsert: {
                    args: Prisma.MessageUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessagePayload>;
                };
                aggregate: {
                    args: Prisma.MessageAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMessage>;
                };
                groupBy: {
                    args: Prisma.MessageGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MessageGroupByOutputType>[];
                };
                count: {
                    args: Prisma.MessageCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MessageCountAggregateOutputType> | number;
                };
            };
        };
        Payment: {
            payload: Prisma.$PaymentPayload<ExtArgs>;
            fields: Prisma.PaymentFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PaymentFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentPayload>;
                };
                findFirst: {
                    args: Prisma.PaymentFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentPayload>;
                };
                findMany: {
                    args: Prisma.PaymentFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentPayload>[];
                };
                create: {
                    args: Prisma.PaymentCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentPayload>;
                };
                createMany: {
                    args: Prisma.PaymentCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentPayload>[];
                };
                delete: {
                    args: Prisma.PaymentDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentPayload>;
                };
                update: {
                    args: Prisma.PaymentUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentPayload>;
                };
                deleteMany: {
                    args: Prisma.PaymentDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PaymentUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PaymentUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentPayload>[];
                };
                upsert: {
                    args: Prisma.PaymentUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentPayload>;
                };
                aggregate: {
                    args: Prisma.PaymentAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePayment>;
                };
                groupBy: {
                    args: Prisma.PaymentGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PaymentGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PaymentCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PaymentCountAggregateOutputType> | number;
                };
            };
        };
        Subscription: {
            payload: Prisma.$SubscriptionPayload<ExtArgs>;
            fields: Prisma.SubscriptionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SubscriptionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SubscriptionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubscriptionPayload>;
                };
                findFirst: {
                    args: Prisma.SubscriptionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SubscriptionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubscriptionPayload>;
                };
                findMany: {
                    args: Prisma.SubscriptionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubscriptionPayload>[];
                };
                create: {
                    args: Prisma.SubscriptionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubscriptionPayload>;
                };
                createMany: {
                    args: Prisma.SubscriptionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SubscriptionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubscriptionPayload>[];
                };
                delete: {
                    args: Prisma.SubscriptionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubscriptionPayload>;
                };
                update: {
                    args: Prisma.SubscriptionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubscriptionPayload>;
                };
                deleteMany: {
                    args: Prisma.SubscriptionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SubscriptionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SubscriptionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubscriptionPayload>[];
                };
                upsert: {
                    args: Prisma.SubscriptionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubscriptionPayload>;
                };
                aggregate: {
                    args: Prisma.SubscriptionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSubscription>;
                };
                groupBy: {
                    args: Prisma.SubscriptionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SubscriptionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SubscriptionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SubscriptionCountAggregateOutputType> | number;
                };
            };
        };
        Feedback: {
            payload: Prisma.$FeedbackPayload<ExtArgs>;
            fields: Prisma.FeedbackFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.FeedbackFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeedbackPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.FeedbackFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeedbackPayload>;
                };
                findFirst: {
                    args: Prisma.FeedbackFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeedbackPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.FeedbackFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeedbackPayload>;
                };
                findMany: {
                    args: Prisma.FeedbackFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeedbackPayload>[];
                };
                create: {
                    args: Prisma.FeedbackCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeedbackPayload>;
                };
                createMany: {
                    args: Prisma.FeedbackCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.FeedbackCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeedbackPayload>[];
                };
                delete: {
                    args: Prisma.FeedbackDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeedbackPayload>;
                };
                update: {
                    args: Prisma.FeedbackUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeedbackPayload>;
                };
                deleteMany: {
                    args: Prisma.FeedbackDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.FeedbackUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.FeedbackUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeedbackPayload>[];
                };
                upsert: {
                    args: Prisma.FeedbackUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeedbackPayload>;
                };
                aggregate: {
                    args: Prisma.FeedbackAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateFeedback>;
                };
                groupBy: {
                    args: Prisma.FeedbackGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FeedbackGroupByOutputType>[];
                };
                count: {
                    args: Prisma.FeedbackCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FeedbackCountAggregateOutputType> | number;
                };
            };
        };
        SupportTicket: {
            payload: Prisma.$SupportTicketPayload<ExtArgs>;
            fields: Prisma.SupportTicketFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SupportTicketFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupportTicketPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SupportTicketFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupportTicketPayload>;
                };
                findFirst: {
                    args: Prisma.SupportTicketFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupportTicketPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SupportTicketFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupportTicketPayload>;
                };
                findMany: {
                    args: Prisma.SupportTicketFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupportTicketPayload>[];
                };
                create: {
                    args: Prisma.SupportTicketCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupportTicketPayload>;
                };
                createMany: {
                    args: Prisma.SupportTicketCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SupportTicketCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupportTicketPayload>[];
                };
                delete: {
                    args: Prisma.SupportTicketDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupportTicketPayload>;
                };
                update: {
                    args: Prisma.SupportTicketUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupportTicketPayload>;
                };
                deleteMany: {
                    args: Prisma.SupportTicketDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SupportTicketUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SupportTicketUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupportTicketPayload>[];
                };
                upsert: {
                    args: Prisma.SupportTicketUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupportTicketPayload>;
                };
                aggregate: {
                    args: Prisma.SupportTicketAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSupportTicket>;
                };
                groupBy: {
                    args: Prisma.SupportTicketGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SupportTicketGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SupportTicketCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SupportTicketCountAggregateOutputType> | number;
                };
            };
        };
        Session: {
            payload: Prisma.$SessionPayload<ExtArgs>;
            fields: Prisma.SessionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SessionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>;
                };
                findFirst: {
                    args: Prisma.SessionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>;
                };
                findMany: {
                    args: Prisma.SessionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>[];
                };
                create: {
                    args: Prisma.SessionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>;
                };
                createMany: {
                    args: Prisma.SessionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>[];
                };
                delete: {
                    args: Prisma.SessionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>;
                };
                update: {
                    args: Prisma.SessionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>;
                };
                deleteMany: {
                    args: Prisma.SessionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SessionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>[];
                };
                upsert: {
                    args: Prisma.SessionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>;
                };
                aggregate: {
                    args: Prisma.SessionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSession>;
                };
                groupBy: {
                    args: Prisma.SessionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SessionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SessionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SessionCountAggregateOutputType> | number;
                };
            };
        };
        Referral: {
            payload: Prisma.$ReferralPayload<ExtArgs>;
            fields: Prisma.ReferralFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ReferralFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReferralPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ReferralFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReferralPayload>;
                };
                findFirst: {
                    args: Prisma.ReferralFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReferralPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ReferralFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReferralPayload>;
                };
                findMany: {
                    args: Prisma.ReferralFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReferralPayload>[];
                };
                create: {
                    args: Prisma.ReferralCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReferralPayload>;
                };
                createMany: {
                    args: Prisma.ReferralCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ReferralCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReferralPayload>[];
                };
                delete: {
                    args: Prisma.ReferralDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReferralPayload>;
                };
                update: {
                    args: Prisma.ReferralUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReferralPayload>;
                };
                deleteMany: {
                    args: Prisma.ReferralDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ReferralUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ReferralUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReferralPayload>[];
                };
                upsert: {
                    args: Prisma.ReferralUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReferralPayload>;
                };
                aggregate: {
                    args: Prisma.ReferralAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateReferral>;
                };
                groupBy: {
                    args: Prisma.ReferralGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ReferralGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ReferralCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ReferralCountAggregateOutputType> | number;
                };
            };
        };
        McqQuestion: {
            payload: Prisma.$McqQuestionPayload<ExtArgs>;
            fields: Prisma.McqQuestionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.McqQuestionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$McqQuestionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.McqQuestionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$McqQuestionPayload>;
                };
                findFirst: {
                    args: Prisma.McqQuestionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$McqQuestionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.McqQuestionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$McqQuestionPayload>;
                };
                findMany: {
                    args: Prisma.McqQuestionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$McqQuestionPayload>[];
                };
                create: {
                    args: Prisma.McqQuestionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$McqQuestionPayload>;
                };
                createMany: {
                    args: Prisma.McqQuestionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.McqQuestionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$McqQuestionPayload>[];
                };
                delete: {
                    args: Prisma.McqQuestionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$McqQuestionPayload>;
                };
                update: {
                    args: Prisma.McqQuestionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$McqQuestionPayload>;
                };
                deleteMany: {
                    args: Prisma.McqQuestionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.McqQuestionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.McqQuestionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$McqQuestionPayload>[];
                };
                upsert: {
                    args: Prisma.McqQuestionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$McqQuestionPayload>;
                };
                aggregate: {
                    args: Prisma.McqQuestionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMcqQuestion>;
                };
                groupBy: {
                    args: Prisma.McqQuestionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.McqQuestionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.McqQuestionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.McqQuestionCountAggregateOutputType> | number;
                };
            };
        };
        McqAttempt: {
            payload: Prisma.$McqAttemptPayload<ExtArgs>;
            fields: Prisma.McqAttemptFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.McqAttemptFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$McqAttemptPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.McqAttemptFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$McqAttemptPayload>;
                };
                findFirst: {
                    args: Prisma.McqAttemptFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$McqAttemptPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.McqAttemptFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$McqAttemptPayload>;
                };
                findMany: {
                    args: Prisma.McqAttemptFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$McqAttemptPayload>[];
                };
                create: {
                    args: Prisma.McqAttemptCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$McqAttemptPayload>;
                };
                createMany: {
                    args: Prisma.McqAttemptCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.McqAttemptCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$McqAttemptPayload>[];
                };
                delete: {
                    args: Prisma.McqAttemptDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$McqAttemptPayload>;
                };
                update: {
                    args: Prisma.McqAttemptUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$McqAttemptPayload>;
                };
                deleteMany: {
                    args: Prisma.McqAttemptDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.McqAttemptUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.McqAttemptUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$McqAttemptPayload>[];
                };
                upsert: {
                    args: Prisma.McqAttemptUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$McqAttemptPayload>;
                };
                aggregate: {
                    args: Prisma.McqAttemptAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMcqAttempt>;
                };
                groupBy: {
                    args: Prisma.McqAttemptGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.McqAttemptGroupByOutputType>[];
                };
                count: {
                    args: Prisma.McqAttemptCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.McqAttemptCountAggregateOutputType> | number;
                };
            };
        };
        TeacherTimeSlot: {
            payload: Prisma.$TeacherTimeSlotPayload<ExtArgs>;
            fields: Prisma.TeacherTimeSlotFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.TeacherTimeSlotFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeacherTimeSlotPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.TeacherTimeSlotFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeacherTimeSlotPayload>;
                };
                findFirst: {
                    args: Prisma.TeacherTimeSlotFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeacherTimeSlotPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.TeacherTimeSlotFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeacherTimeSlotPayload>;
                };
                findMany: {
                    args: Prisma.TeacherTimeSlotFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeacherTimeSlotPayload>[];
                };
                create: {
                    args: Prisma.TeacherTimeSlotCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeacherTimeSlotPayload>;
                };
                createMany: {
                    args: Prisma.TeacherTimeSlotCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.TeacherTimeSlotCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeacherTimeSlotPayload>[];
                };
                delete: {
                    args: Prisma.TeacherTimeSlotDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeacherTimeSlotPayload>;
                };
                update: {
                    args: Prisma.TeacherTimeSlotUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeacherTimeSlotPayload>;
                };
                deleteMany: {
                    args: Prisma.TeacherTimeSlotDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.TeacherTimeSlotUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.TeacherTimeSlotUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeacherTimeSlotPayload>[];
                };
                upsert: {
                    args: Prisma.TeacherTimeSlotUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeacherTimeSlotPayload>;
                };
                aggregate: {
                    args: Prisma.TeacherTimeSlotAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTeacherTimeSlot>;
                };
                groupBy: {
                    args: Prisma.TeacherTimeSlotGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TeacherTimeSlotGroupByOutputType>[];
                };
                count: {
                    args: Prisma.TeacherTimeSlotCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TeacherTimeSlotCountAggregateOutputType> | number;
                };
            };
        };
        TeacherNotification: {
            payload: Prisma.$TeacherNotificationPayload<ExtArgs>;
            fields: Prisma.TeacherNotificationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.TeacherNotificationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeacherNotificationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.TeacherNotificationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeacherNotificationPayload>;
                };
                findFirst: {
                    args: Prisma.TeacherNotificationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeacherNotificationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.TeacherNotificationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeacherNotificationPayload>;
                };
                findMany: {
                    args: Prisma.TeacherNotificationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeacherNotificationPayload>[];
                };
                create: {
                    args: Prisma.TeacherNotificationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeacherNotificationPayload>;
                };
                createMany: {
                    args: Prisma.TeacherNotificationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.TeacherNotificationCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeacherNotificationPayload>[];
                };
                delete: {
                    args: Prisma.TeacherNotificationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeacherNotificationPayload>;
                };
                update: {
                    args: Prisma.TeacherNotificationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeacherNotificationPayload>;
                };
                deleteMany: {
                    args: Prisma.TeacherNotificationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.TeacherNotificationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.TeacherNotificationUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeacherNotificationPayload>[];
                };
                upsert: {
                    args: Prisma.TeacherNotificationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeacherNotificationPayload>;
                };
                aggregate: {
                    args: Prisma.TeacherNotificationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTeacherNotification>;
                };
                groupBy: {
                    args: Prisma.TeacherNotificationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TeacherNotificationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.TeacherNotificationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TeacherNotificationCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
/**
 * Enums
 */
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
/**
 * Field references
 */
/**
 * Reference to a field of type 'String'
 */
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
/**
 * Reference to a field of type 'String[]'
 */
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
/**
 * Reference to a field of type 'DateTime'
 */
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
/**
 * Reference to a field of type 'DateTime[]'
 */
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
/**
 * Reference to a field of type 'Boolean'
 */
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
/**
 * Reference to a field of type 'Role'
 */
export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>;
/**
 * Reference to a field of type 'Role[]'
 */
export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>;
/**
 * Reference to a field of type 'Float'
 */
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
/**
 * Reference to a field of type 'Float[]'
 */
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
/**
 * Reference to a field of type 'Int'
 */
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
/**
 * Reference to a field of type 'Int[]'
 */
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
/**
 * Reference to a field of type 'DoubtStatus'
 */
export type EnumDoubtStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DoubtStatus'>;
/**
 * Reference to a field of type 'DoubtStatus[]'
 */
export type ListEnumDoubtStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DoubtStatus[]'>;
/**
 * Reference to a field of type 'PaymentStatus'
 */
export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>;
/**
 * Reference to a field of type 'PaymentStatus[]'
 */
export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>;
/**
 * Reference to a field of type 'SubscriptionStatus'
 */
export type EnumSubscriptionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionStatus'>;
/**
 * Reference to a field of type 'SubscriptionStatus[]'
 */
export type ListEnumSubscriptionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionStatus[]'>;
/**
 * Reference to a field of type 'TicketStatus'
 */
export type EnumTicketStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TicketStatus'>;
/**
 * Reference to a field of type 'TicketStatus[]'
 */
export type ListEnumTicketStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TicketStatus[]'>;
/**
 * Reference to a field of type 'SessionType'
 */
export type EnumSessionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SessionType'>;
/**
 * Reference to a field of type 'SessionType[]'
 */
export type ListEnumSessionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SessionType[]'>;
/**
 * Reference to a field of type 'SessionStatus'
 */
export type EnumSessionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SessionStatus'>;
/**
 * Reference to a field of type 'SessionStatus[]'
 */
export type ListEnumSessionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SessionStatus[]'>;
/**
 * Reference to a field of type 'ReferralType'
 */
export type EnumReferralTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReferralType'>;
/**
 * Reference to a field of type 'ReferralType[]'
 */
export type ListEnumReferralTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReferralType[]'>;
/**
 * Reference to a field of type 'ReferralStatus'
 */
export type EnumReferralStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReferralStatus'>;
/**
 * Reference to a field of type 'ReferralStatus[]'
 */
export type ListEnumReferralStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReferralStatus[]'>;
/**
 * Reference to a field of type 'McqDifficulty'
 */
export type EnumMcqDifficultyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'McqDifficulty'>;
/**
 * Reference to a field of type 'McqDifficulty[]'
 */
export type ListEnumMcqDifficultyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'McqDifficulty[]'>;
/**
 * Batch Payload for updateMany & deleteMany & createMany
 */
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export type PrismaClientOptions = ({
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-pg`.
     */
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
} | {
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl: string;
    adapter?: never;
}) & {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     *
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     *
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    /**
     * Global configuration for omitting model fields by default.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: GlobalOmitConfig;
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[];
    /**
     * Optional maximum size for the query plan cache. If not provided, a default size will be used.
     * A value of `0` can be used to disable the cache entirely. A higher cache size can improve
     * performance for applications that execute a large number of unique queries, while a smaller
     * cache size can reduce memory usage.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   queryPlanCacheMaxSize: 100,
     * })
     * ```
     */
    queryPlanCacheMaxSize?: number;
};
export type GlobalOmitConfig = {
    oTP?: Prisma.OTPOmit;
    subjects?: Prisma.SubjectsOmit;
    chapters?: Prisma.ChaptersOmit;
    user?: Prisma.UserOmit;
    plan?: Prisma.PlanOmit;
    studentProfile?: Prisma.StudentProfileOmit;
    teacherProfile?: Prisma.TeacherProfileOmit;
    parentProfile?: Prisma.ParentProfileOmit;
    wallet?: Prisma.WalletOmit;
    doubt?: Prisma.DoubtOmit;
    chat?: Prisma.ChatOmit;
    message?: Prisma.MessageOmit;
    payment?: Prisma.PaymentOmit;
    subscription?: Prisma.SubscriptionOmit;
    feedback?: Prisma.FeedbackOmit;
    supportTicket?: Prisma.SupportTicketOmit;
    session?: Prisma.SessionOmit;
    referral?: Prisma.ReferralOmit;
    mcqQuestion?: Prisma.McqQuestionOmit;
    mcqAttempt?: Prisma.McqAttemptOmit;
    teacherTimeSlot?: Prisma.TeacherTimeSlotOmit;
    teacherNotification?: Prisma.TeacherNotificationOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
/**
 * `PrismaClient` proxy available in interactive transactions.
 */
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
//# sourceMappingURL=prismaNamespace.d.ts.map