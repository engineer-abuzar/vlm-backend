import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.ts";
import type * as Prisma from "../internal/prismaNamespace.ts";
/**
 * Model User
 *
 */
export type UserModel = runtime.Types.Result.DefaultSelection<Prisma.$UserPayload>;
export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    mobile: string | null;
    password: string | null;
    role: $Enums.Role | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    mobile: string | null;
    password: string | null;
    role: $Enums.Role | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    mobile: number;
    password: number;
    role: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    mobile?: true;
    password?: true;
    role?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    mobile?: true;
    password?: true;
    role?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    mobile?: true;
    password?: true;
    role?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type UserAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: Prisma.UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType;
};
export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUser[P]> : Prisma.GetScalarType<T[P], AggregateUser[P]>;
};
export type UserGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithAggregationInput | Prisma.UserOrderByWithAggregationInput[];
    by: Prisma.UserScalarFieldEnum[] | Prisma.UserScalarFieldEnum;
    having?: Prisma.UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type UserGroupByOutputType = {
    id: string;
    email: string | null;
    mobile: string | null;
    password: string | null;
    role: $Enums.Role;
    createdAt: Date;
    updatedAt: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]>;
}>>;
export type UserWhereInput = {
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    id?: Prisma.StringFilter<"User"> | string;
    email?: Prisma.StringNullableFilter<"User"> | string | null;
    mobile?: Prisma.StringNullableFilter<"User"> | string | null;
    password?: Prisma.StringNullableFilter<"User"> | string | null;
    role?: Prisma.EnumRoleFilter<"User"> | $Enums.Role;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    studentProfile?: Prisma.XOR<Prisma.StudentProfileNullableScalarRelationFilter, Prisma.StudentProfileWhereInput> | null;
    teacherProfile?: Prisma.XOR<Prisma.TeacherProfileNullableScalarRelationFilter, Prisma.TeacherProfileWhereInput> | null;
    parentProfile?: Prisma.XOR<Prisma.ParentProfileNullableScalarRelationFilter, Prisma.ParentProfileWhereInput> | null;
    wallet?: Prisma.XOR<Prisma.WalletNullableScalarRelationFilter, Prisma.WalletWhereInput> | null;
    supportTickets?: Prisma.SupportTicketListRelationFilter;
    referralsGiven?: Prisma.ReferralListRelationFilter;
    referralsReceived?: Prisma.ReferralListRelationFilter;
};
export type UserOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    mobile?: Prisma.SortOrderInput | Prisma.SortOrder;
    password?: Prisma.SortOrderInput | Prisma.SortOrder;
    role?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    studentProfile?: Prisma.StudentProfileOrderByWithRelationInput;
    teacherProfile?: Prisma.TeacherProfileOrderByWithRelationInput;
    parentProfile?: Prisma.ParentProfileOrderByWithRelationInput;
    wallet?: Prisma.WalletOrderByWithRelationInput;
    supportTickets?: Prisma.SupportTicketOrderByRelationAggregateInput;
    referralsGiven?: Prisma.ReferralOrderByRelationAggregateInput;
    referralsReceived?: Prisma.ReferralOrderByRelationAggregateInput;
};
export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    email?: string;
    mobile?: string;
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    password?: Prisma.StringNullableFilter<"User"> | string | null;
    role?: Prisma.EnumRoleFilter<"User"> | $Enums.Role;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    studentProfile?: Prisma.XOR<Prisma.StudentProfileNullableScalarRelationFilter, Prisma.StudentProfileWhereInput> | null;
    teacherProfile?: Prisma.XOR<Prisma.TeacherProfileNullableScalarRelationFilter, Prisma.TeacherProfileWhereInput> | null;
    parentProfile?: Prisma.XOR<Prisma.ParentProfileNullableScalarRelationFilter, Prisma.ParentProfileWhereInput> | null;
    wallet?: Prisma.XOR<Prisma.WalletNullableScalarRelationFilter, Prisma.WalletWhereInput> | null;
    supportTickets?: Prisma.SupportTicketListRelationFilter;
    referralsGiven?: Prisma.ReferralListRelationFilter;
    referralsReceived?: Prisma.ReferralListRelationFilter;
}, "id" | "email" | "mobile">;
export type UserOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    mobile?: Prisma.SortOrderInput | Prisma.SortOrder;
    password?: Prisma.SortOrderInput | Prisma.SortOrder;
    role?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.UserCountOrderByAggregateInput;
    _max?: Prisma.UserMaxOrderByAggregateInput;
    _min?: Prisma.UserMinOrderByAggregateInput;
};
export type UserScalarWhereWithAggregatesInput = {
    AND?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    OR?: Prisma.UserScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"User"> | string;
    email?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    mobile?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    password?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    role?: Prisma.EnumRoleWithAggregatesFilter<"User"> | $Enums.Role;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
};
export type UserCreateInput = {
    id?: string;
    email?: string | null;
    mobile?: string | null;
    password?: string | null;
    role: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    studentProfile?: Prisma.StudentProfileCreateNestedOneWithoutUserInput;
    teacherProfile?: Prisma.TeacherProfileCreateNestedOneWithoutUserInput;
    parentProfile?: Prisma.ParentProfileCreateNestedOneWithoutUserInput;
    wallet?: Prisma.WalletCreateNestedOneWithoutUserInput;
    supportTickets?: Prisma.SupportTicketCreateNestedManyWithoutUserInput;
    referralsGiven?: Prisma.ReferralCreateNestedManyWithoutReferrerInput;
    referralsReceived?: Prisma.ReferralCreateNestedManyWithoutRefereeInput;
};
export type UserUncheckedCreateInput = {
    id?: string;
    email?: string | null;
    mobile?: string | null;
    password?: string | null;
    role: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    studentProfile?: Prisma.StudentProfileUncheckedCreateNestedOneWithoutUserInput;
    teacherProfile?: Prisma.TeacherProfileUncheckedCreateNestedOneWithoutUserInput;
    parentProfile?: Prisma.ParentProfileUncheckedCreateNestedOneWithoutUserInput;
    wallet?: Prisma.WalletUncheckedCreateNestedOneWithoutUserInput;
    supportTickets?: Prisma.SupportTicketUncheckedCreateNestedManyWithoutUserInput;
    referralsGiven?: Prisma.ReferralUncheckedCreateNestedManyWithoutReferrerInput;
    referralsReceived?: Prisma.ReferralUncheckedCreateNestedManyWithoutRefereeInput;
};
export type UserUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mobile?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    studentProfile?: Prisma.StudentProfileUpdateOneWithoutUserNestedInput;
    teacherProfile?: Prisma.TeacherProfileUpdateOneWithoutUserNestedInput;
    parentProfile?: Prisma.ParentProfileUpdateOneWithoutUserNestedInput;
    wallet?: Prisma.WalletUpdateOneWithoutUserNestedInput;
    supportTickets?: Prisma.SupportTicketUpdateManyWithoutUserNestedInput;
    referralsGiven?: Prisma.ReferralUpdateManyWithoutReferrerNestedInput;
    referralsReceived?: Prisma.ReferralUpdateManyWithoutRefereeNestedInput;
};
export type UserUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mobile?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    studentProfile?: Prisma.StudentProfileUncheckedUpdateOneWithoutUserNestedInput;
    teacherProfile?: Prisma.TeacherProfileUncheckedUpdateOneWithoutUserNestedInput;
    parentProfile?: Prisma.ParentProfileUncheckedUpdateOneWithoutUserNestedInput;
    wallet?: Prisma.WalletUncheckedUpdateOneWithoutUserNestedInput;
    supportTickets?: Prisma.SupportTicketUncheckedUpdateManyWithoutUserNestedInput;
    referralsGiven?: Prisma.ReferralUncheckedUpdateManyWithoutReferrerNestedInput;
    referralsReceived?: Prisma.ReferralUncheckedUpdateManyWithoutRefereeNestedInput;
};
export type UserCreateManyInput = {
    id?: string;
    email?: string | null;
    mobile?: string | null;
    password?: string | null;
    role: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type UserUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mobile?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mobile?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    mobile?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    mobile?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    mobile?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserScalarRelationFilter = {
    is?: Prisma.UserWhereInput;
    isNot?: Prisma.UserWhereInput;
};
export type UserNullableScalarRelationFilter = {
    is?: Prisma.UserWhereInput | null;
    isNot?: Prisma.UserWhereInput | null;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role;
};
export type UserCreateNestedOneWithoutStudentProfileInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutStudentProfileInput, Prisma.UserUncheckedCreateWithoutStudentProfileInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutStudentProfileInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutStudentProfileNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutStudentProfileInput, Prisma.UserUncheckedCreateWithoutStudentProfileInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutStudentProfileInput;
    upsert?: Prisma.UserUpsertWithoutStudentProfileInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutStudentProfileInput, Prisma.UserUpdateWithoutStudentProfileInput>, Prisma.UserUncheckedUpdateWithoutStudentProfileInput>;
};
export type UserCreateNestedOneWithoutTeacherProfileInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutTeacherProfileInput, Prisma.UserUncheckedCreateWithoutTeacherProfileInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutTeacherProfileInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutTeacherProfileNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutTeacherProfileInput, Prisma.UserUncheckedCreateWithoutTeacherProfileInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutTeacherProfileInput;
    upsert?: Prisma.UserUpsertWithoutTeacherProfileInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutTeacherProfileInput, Prisma.UserUpdateWithoutTeacherProfileInput>, Prisma.UserUncheckedUpdateWithoutTeacherProfileInput>;
};
export type UserCreateNestedOneWithoutParentProfileInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutParentProfileInput, Prisma.UserUncheckedCreateWithoutParentProfileInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutParentProfileInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutParentProfileNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutParentProfileInput, Prisma.UserUncheckedCreateWithoutParentProfileInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutParentProfileInput;
    upsert?: Prisma.UserUpsertWithoutParentProfileInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutParentProfileInput, Prisma.UserUpdateWithoutParentProfileInput>, Prisma.UserUncheckedUpdateWithoutParentProfileInput>;
};
export type UserCreateNestedOneWithoutWalletInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutWalletInput, Prisma.UserUncheckedCreateWithoutWalletInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutWalletInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutWalletNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutWalletInput, Prisma.UserUncheckedCreateWithoutWalletInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutWalletInput;
    upsert?: Prisma.UserUpsertWithoutWalletInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutWalletInput, Prisma.UserUpdateWithoutWalletInput>, Prisma.UserUncheckedUpdateWithoutWalletInput>;
};
export type UserCreateNestedOneWithoutSupportTicketsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutSupportTicketsInput, Prisma.UserUncheckedCreateWithoutSupportTicketsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutSupportTicketsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutSupportTicketsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutSupportTicketsInput, Prisma.UserUncheckedCreateWithoutSupportTicketsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutSupportTicketsInput;
    upsert?: Prisma.UserUpsertWithoutSupportTicketsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutSupportTicketsInput, Prisma.UserUpdateWithoutSupportTicketsInput>, Prisma.UserUncheckedUpdateWithoutSupportTicketsInput>;
};
export type UserCreateNestedOneWithoutReferralsGivenInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutReferralsGivenInput, Prisma.UserUncheckedCreateWithoutReferralsGivenInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutReferralsGivenInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserCreateNestedOneWithoutReferralsReceivedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutReferralsReceivedInput, Prisma.UserUncheckedCreateWithoutReferralsReceivedInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutReferralsReceivedInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutReferralsGivenNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutReferralsGivenInput, Prisma.UserUncheckedCreateWithoutReferralsGivenInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutReferralsGivenInput;
    upsert?: Prisma.UserUpsertWithoutReferralsGivenInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutReferralsGivenInput, Prisma.UserUpdateWithoutReferralsGivenInput>, Prisma.UserUncheckedUpdateWithoutReferralsGivenInput>;
};
export type UserUpdateOneWithoutReferralsReceivedNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutReferralsReceivedInput, Prisma.UserUncheckedCreateWithoutReferralsReceivedInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutReferralsReceivedInput;
    upsert?: Prisma.UserUpsertWithoutReferralsReceivedInput;
    disconnect?: Prisma.UserWhereInput | boolean;
    delete?: Prisma.UserWhereInput | boolean;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutReferralsReceivedInput, Prisma.UserUpdateWithoutReferralsReceivedInput>, Prisma.UserUncheckedUpdateWithoutReferralsReceivedInput>;
};
export type UserCreateWithoutStudentProfileInput = {
    id?: string;
    email?: string | null;
    mobile?: string | null;
    password?: string | null;
    role: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    teacherProfile?: Prisma.TeacherProfileCreateNestedOneWithoutUserInput;
    parentProfile?: Prisma.ParentProfileCreateNestedOneWithoutUserInput;
    wallet?: Prisma.WalletCreateNestedOneWithoutUserInput;
    supportTickets?: Prisma.SupportTicketCreateNestedManyWithoutUserInput;
    referralsGiven?: Prisma.ReferralCreateNestedManyWithoutReferrerInput;
    referralsReceived?: Prisma.ReferralCreateNestedManyWithoutRefereeInput;
};
export type UserUncheckedCreateWithoutStudentProfileInput = {
    id?: string;
    email?: string | null;
    mobile?: string | null;
    password?: string | null;
    role: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    teacherProfile?: Prisma.TeacherProfileUncheckedCreateNestedOneWithoutUserInput;
    parentProfile?: Prisma.ParentProfileUncheckedCreateNestedOneWithoutUserInput;
    wallet?: Prisma.WalletUncheckedCreateNestedOneWithoutUserInput;
    supportTickets?: Prisma.SupportTicketUncheckedCreateNestedManyWithoutUserInput;
    referralsGiven?: Prisma.ReferralUncheckedCreateNestedManyWithoutReferrerInput;
    referralsReceived?: Prisma.ReferralUncheckedCreateNestedManyWithoutRefereeInput;
};
export type UserCreateOrConnectWithoutStudentProfileInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutStudentProfileInput, Prisma.UserUncheckedCreateWithoutStudentProfileInput>;
};
export type UserUpsertWithoutStudentProfileInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutStudentProfileInput, Prisma.UserUncheckedUpdateWithoutStudentProfileInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutStudentProfileInput, Prisma.UserUncheckedCreateWithoutStudentProfileInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutStudentProfileInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutStudentProfileInput, Prisma.UserUncheckedUpdateWithoutStudentProfileInput>;
};
export type UserUpdateWithoutStudentProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mobile?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    teacherProfile?: Prisma.TeacherProfileUpdateOneWithoutUserNestedInput;
    parentProfile?: Prisma.ParentProfileUpdateOneWithoutUserNestedInput;
    wallet?: Prisma.WalletUpdateOneWithoutUserNestedInput;
    supportTickets?: Prisma.SupportTicketUpdateManyWithoutUserNestedInput;
    referralsGiven?: Prisma.ReferralUpdateManyWithoutReferrerNestedInput;
    referralsReceived?: Prisma.ReferralUpdateManyWithoutRefereeNestedInput;
};
export type UserUncheckedUpdateWithoutStudentProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mobile?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    teacherProfile?: Prisma.TeacherProfileUncheckedUpdateOneWithoutUserNestedInput;
    parentProfile?: Prisma.ParentProfileUncheckedUpdateOneWithoutUserNestedInput;
    wallet?: Prisma.WalletUncheckedUpdateOneWithoutUserNestedInput;
    supportTickets?: Prisma.SupportTicketUncheckedUpdateManyWithoutUserNestedInput;
    referralsGiven?: Prisma.ReferralUncheckedUpdateManyWithoutReferrerNestedInput;
    referralsReceived?: Prisma.ReferralUncheckedUpdateManyWithoutRefereeNestedInput;
};
export type UserCreateWithoutTeacherProfileInput = {
    id?: string;
    email?: string | null;
    mobile?: string | null;
    password?: string | null;
    role: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    studentProfile?: Prisma.StudentProfileCreateNestedOneWithoutUserInput;
    parentProfile?: Prisma.ParentProfileCreateNestedOneWithoutUserInput;
    wallet?: Prisma.WalletCreateNestedOneWithoutUserInput;
    supportTickets?: Prisma.SupportTicketCreateNestedManyWithoutUserInput;
    referralsGiven?: Prisma.ReferralCreateNestedManyWithoutReferrerInput;
    referralsReceived?: Prisma.ReferralCreateNestedManyWithoutRefereeInput;
};
export type UserUncheckedCreateWithoutTeacherProfileInput = {
    id?: string;
    email?: string | null;
    mobile?: string | null;
    password?: string | null;
    role: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    studentProfile?: Prisma.StudentProfileUncheckedCreateNestedOneWithoutUserInput;
    parentProfile?: Prisma.ParentProfileUncheckedCreateNestedOneWithoutUserInput;
    wallet?: Prisma.WalletUncheckedCreateNestedOneWithoutUserInput;
    supportTickets?: Prisma.SupportTicketUncheckedCreateNestedManyWithoutUserInput;
    referralsGiven?: Prisma.ReferralUncheckedCreateNestedManyWithoutReferrerInput;
    referralsReceived?: Prisma.ReferralUncheckedCreateNestedManyWithoutRefereeInput;
};
export type UserCreateOrConnectWithoutTeacherProfileInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutTeacherProfileInput, Prisma.UserUncheckedCreateWithoutTeacherProfileInput>;
};
export type UserUpsertWithoutTeacherProfileInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutTeacherProfileInput, Prisma.UserUncheckedUpdateWithoutTeacherProfileInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutTeacherProfileInput, Prisma.UserUncheckedCreateWithoutTeacherProfileInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutTeacherProfileInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutTeacherProfileInput, Prisma.UserUncheckedUpdateWithoutTeacherProfileInput>;
};
export type UserUpdateWithoutTeacherProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mobile?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    studentProfile?: Prisma.StudentProfileUpdateOneWithoutUserNestedInput;
    parentProfile?: Prisma.ParentProfileUpdateOneWithoutUserNestedInput;
    wallet?: Prisma.WalletUpdateOneWithoutUserNestedInput;
    supportTickets?: Prisma.SupportTicketUpdateManyWithoutUserNestedInput;
    referralsGiven?: Prisma.ReferralUpdateManyWithoutReferrerNestedInput;
    referralsReceived?: Prisma.ReferralUpdateManyWithoutRefereeNestedInput;
};
export type UserUncheckedUpdateWithoutTeacherProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mobile?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    studentProfile?: Prisma.StudentProfileUncheckedUpdateOneWithoutUserNestedInput;
    parentProfile?: Prisma.ParentProfileUncheckedUpdateOneWithoutUserNestedInput;
    wallet?: Prisma.WalletUncheckedUpdateOneWithoutUserNestedInput;
    supportTickets?: Prisma.SupportTicketUncheckedUpdateManyWithoutUserNestedInput;
    referralsGiven?: Prisma.ReferralUncheckedUpdateManyWithoutReferrerNestedInput;
    referralsReceived?: Prisma.ReferralUncheckedUpdateManyWithoutRefereeNestedInput;
};
export type UserCreateWithoutParentProfileInput = {
    id?: string;
    email?: string | null;
    mobile?: string | null;
    password?: string | null;
    role: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    studentProfile?: Prisma.StudentProfileCreateNestedOneWithoutUserInput;
    teacherProfile?: Prisma.TeacherProfileCreateNestedOneWithoutUserInput;
    wallet?: Prisma.WalletCreateNestedOneWithoutUserInput;
    supportTickets?: Prisma.SupportTicketCreateNestedManyWithoutUserInput;
    referralsGiven?: Prisma.ReferralCreateNestedManyWithoutReferrerInput;
    referralsReceived?: Prisma.ReferralCreateNestedManyWithoutRefereeInput;
};
export type UserUncheckedCreateWithoutParentProfileInput = {
    id?: string;
    email?: string | null;
    mobile?: string | null;
    password?: string | null;
    role: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    studentProfile?: Prisma.StudentProfileUncheckedCreateNestedOneWithoutUserInput;
    teacherProfile?: Prisma.TeacherProfileUncheckedCreateNestedOneWithoutUserInput;
    wallet?: Prisma.WalletUncheckedCreateNestedOneWithoutUserInput;
    supportTickets?: Prisma.SupportTicketUncheckedCreateNestedManyWithoutUserInput;
    referralsGiven?: Prisma.ReferralUncheckedCreateNestedManyWithoutReferrerInput;
    referralsReceived?: Prisma.ReferralUncheckedCreateNestedManyWithoutRefereeInput;
};
export type UserCreateOrConnectWithoutParentProfileInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutParentProfileInput, Prisma.UserUncheckedCreateWithoutParentProfileInput>;
};
export type UserUpsertWithoutParentProfileInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutParentProfileInput, Prisma.UserUncheckedUpdateWithoutParentProfileInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutParentProfileInput, Prisma.UserUncheckedCreateWithoutParentProfileInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutParentProfileInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutParentProfileInput, Prisma.UserUncheckedUpdateWithoutParentProfileInput>;
};
export type UserUpdateWithoutParentProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mobile?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    studentProfile?: Prisma.StudentProfileUpdateOneWithoutUserNestedInput;
    teacherProfile?: Prisma.TeacherProfileUpdateOneWithoutUserNestedInput;
    wallet?: Prisma.WalletUpdateOneWithoutUserNestedInput;
    supportTickets?: Prisma.SupportTicketUpdateManyWithoutUserNestedInput;
    referralsGiven?: Prisma.ReferralUpdateManyWithoutReferrerNestedInput;
    referralsReceived?: Prisma.ReferralUpdateManyWithoutRefereeNestedInput;
};
export type UserUncheckedUpdateWithoutParentProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mobile?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    studentProfile?: Prisma.StudentProfileUncheckedUpdateOneWithoutUserNestedInput;
    teacherProfile?: Prisma.TeacherProfileUncheckedUpdateOneWithoutUserNestedInput;
    wallet?: Prisma.WalletUncheckedUpdateOneWithoutUserNestedInput;
    supportTickets?: Prisma.SupportTicketUncheckedUpdateManyWithoutUserNestedInput;
    referralsGiven?: Prisma.ReferralUncheckedUpdateManyWithoutReferrerNestedInput;
    referralsReceived?: Prisma.ReferralUncheckedUpdateManyWithoutRefereeNestedInput;
};
export type UserCreateWithoutWalletInput = {
    id?: string;
    email?: string | null;
    mobile?: string | null;
    password?: string | null;
    role: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    studentProfile?: Prisma.StudentProfileCreateNestedOneWithoutUserInput;
    teacherProfile?: Prisma.TeacherProfileCreateNestedOneWithoutUserInput;
    parentProfile?: Prisma.ParentProfileCreateNestedOneWithoutUserInput;
    supportTickets?: Prisma.SupportTicketCreateNestedManyWithoutUserInput;
    referralsGiven?: Prisma.ReferralCreateNestedManyWithoutReferrerInput;
    referralsReceived?: Prisma.ReferralCreateNestedManyWithoutRefereeInput;
};
export type UserUncheckedCreateWithoutWalletInput = {
    id?: string;
    email?: string | null;
    mobile?: string | null;
    password?: string | null;
    role: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    studentProfile?: Prisma.StudentProfileUncheckedCreateNestedOneWithoutUserInput;
    teacherProfile?: Prisma.TeacherProfileUncheckedCreateNestedOneWithoutUserInput;
    parentProfile?: Prisma.ParentProfileUncheckedCreateNestedOneWithoutUserInput;
    supportTickets?: Prisma.SupportTicketUncheckedCreateNestedManyWithoutUserInput;
    referralsGiven?: Prisma.ReferralUncheckedCreateNestedManyWithoutReferrerInput;
    referralsReceived?: Prisma.ReferralUncheckedCreateNestedManyWithoutRefereeInput;
};
export type UserCreateOrConnectWithoutWalletInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutWalletInput, Prisma.UserUncheckedCreateWithoutWalletInput>;
};
export type UserUpsertWithoutWalletInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutWalletInput, Prisma.UserUncheckedUpdateWithoutWalletInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutWalletInput, Prisma.UserUncheckedCreateWithoutWalletInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutWalletInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutWalletInput, Prisma.UserUncheckedUpdateWithoutWalletInput>;
};
export type UserUpdateWithoutWalletInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mobile?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    studentProfile?: Prisma.StudentProfileUpdateOneWithoutUserNestedInput;
    teacherProfile?: Prisma.TeacherProfileUpdateOneWithoutUserNestedInput;
    parentProfile?: Prisma.ParentProfileUpdateOneWithoutUserNestedInput;
    supportTickets?: Prisma.SupportTicketUpdateManyWithoutUserNestedInput;
    referralsGiven?: Prisma.ReferralUpdateManyWithoutReferrerNestedInput;
    referralsReceived?: Prisma.ReferralUpdateManyWithoutRefereeNestedInput;
};
export type UserUncheckedUpdateWithoutWalletInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mobile?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    studentProfile?: Prisma.StudentProfileUncheckedUpdateOneWithoutUserNestedInput;
    teacherProfile?: Prisma.TeacherProfileUncheckedUpdateOneWithoutUserNestedInput;
    parentProfile?: Prisma.ParentProfileUncheckedUpdateOneWithoutUserNestedInput;
    supportTickets?: Prisma.SupportTicketUncheckedUpdateManyWithoutUserNestedInput;
    referralsGiven?: Prisma.ReferralUncheckedUpdateManyWithoutReferrerNestedInput;
    referralsReceived?: Prisma.ReferralUncheckedUpdateManyWithoutRefereeNestedInput;
};
export type UserCreateWithoutSupportTicketsInput = {
    id?: string;
    email?: string | null;
    mobile?: string | null;
    password?: string | null;
    role: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    studentProfile?: Prisma.StudentProfileCreateNestedOneWithoutUserInput;
    teacherProfile?: Prisma.TeacherProfileCreateNestedOneWithoutUserInput;
    parentProfile?: Prisma.ParentProfileCreateNestedOneWithoutUserInput;
    wallet?: Prisma.WalletCreateNestedOneWithoutUserInput;
    referralsGiven?: Prisma.ReferralCreateNestedManyWithoutReferrerInput;
    referralsReceived?: Prisma.ReferralCreateNestedManyWithoutRefereeInput;
};
export type UserUncheckedCreateWithoutSupportTicketsInput = {
    id?: string;
    email?: string | null;
    mobile?: string | null;
    password?: string | null;
    role: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    studentProfile?: Prisma.StudentProfileUncheckedCreateNestedOneWithoutUserInput;
    teacherProfile?: Prisma.TeacherProfileUncheckedCreateNestedOneWithoutUserInput;
    parentProfile?: Prisma.ParentProfileUncheckedCreateNestedOneWithoutUserInput;
    wallet?: Prisma.WalletUncheckedCreateNestedOneWithoutUserInput;
    referralsGiven?: Prisma.ReferralUncheckedCreateNestedManyWithoutReferrerInput;
    referralsReceived?: Prisma.ReferralUncheckedCreateNestedManyWithoutRefereeInput;
};
export type UserCreateOrConnectWithoutSupportTicketsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutSupportTicketsInput, Prisma.UserUncheckedCreateWithoutSupportTicketsInput>;
};
export type UserUpsertWithoutSupportTicketsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutSupportTicketsInput, Prisma.UserUncheckedUpdateWithoutSupportTicketsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutSupportTicketsInput, Prisma.UserUncheckedCreateWithoutSupportTicketsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutSupportTicketsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutSupportTicketsInput, Prisma.UserUncheckedUpdateWithoutSupportTicketsInput>;
};
export type UserUpdateWithoutSupportTicketsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mobile?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    studentProfile?: Prisma.StudentProfileUpdateOneWithoutUserNestedInput;
    teacherProfile?: Prisma.TeacherProfileUpdateOneWithoutUserNestedInput;
    parentProfile?: Prisma.ParentProfileUpdateOneWithoutUserNestedInput;
    wallet?: Prisma.WalletUpdateOneWithoutUserNestedInput;
    referralsGiven?: Prisma.ReferralUpdateManyWithoutReferrerNestedInput;
    referralsReceived?: Prisma.ReferralUpdateManyWithoutRefereeNestedInput;
};
export type UserUncheckedUpdateWithoutSupportTicketsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mobile?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    studentProfile?: Prisma.StudentProfileUncheckedUpdateOneWithoutUserNestedInput;
    teacherProfile?: Prisma.TeacherProfileUncheckedUpdateOneWithoutUserNestedInput;
    parentProfile?: Prisma.ParentProfileUncheckedUpdateOneWithoutUserNestedInput;
    wallet?: Prisma.WalletUncheckedUpdateOneWithoutUserNestedInput;
    referralsGiven?: Prisma.ReferralUncheckedUpdateManyWithoutReferrerNestedInput;
    referralsReceived?: Prisma.ReferralUncheckedUpdateManyWithoutRefereeNestedInput;
};
export type UserCreateWithoutReferralsGivenInput = {
    id?: string;
    email?: string | null;
    mobile?: string | null;
    password?: string | null;
    role: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    studentProfile?: Prisma.StudentProfileCreateNestedOneWithoutUserInput;
    teacherProfile?: Prisma.TeacherProfileCreateNestedOneWithoutUserInput;
    parentProfile?: Prisma.ParentProfileCreateNestedOneWithoutUserInput;
    wallet?: Prisma.WalletCreateNestedOneWithoutUserInput;
    supportTickets?: Prisma.SupportTicketCreateNestedManyWithoutUserInput;
    referralsReceived?: Prisma.ReferralCreateNestedManyWithoutRefereeInput;
};
export type UserUncheckedCreateWithoutReferralsGivenInput = {
    id?: string;
    email?: string | null;
    mobile?: string | null;
    password?: string | null;
    role: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    studentProfile?: Prisma.StudentProfileUncheckedCreateNestedOneWithoutUserInput;
    teacherProfile?: Prisma.TeacherProfileUncheckedCreateNestedOneWithoutUserInput;
    parentProfile?: Prisma.ParentProfileUncheckedCreateNestedOneWithoutUserInput;
    wallet?: Prisma.WalletUncheckedCreateNestedOneWithoutUserInput;
    supportTickets?: Prisma.SupportTicketUncheckedCreateNestedManyWithoutUserInput;
    referralsReceived?: Prisma.ReferralUncheckedCreateNestedManyWithoutRefereeInput;
};
export type UserCreateOrConnectWithoutReferralsGivenInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutReferralsGivenInput, Prisma.UserUncheckedCreateWithoutReferralsGivenInput>;
};
export type UserCreateWithoutReferralsReceivedInput = {
    id?: string;
    email?: string | null;
    mobile?: string | null;
    password?: string | null;
    role: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    studentProfile?: Prisma.StudentProfileCreateNestedOneWithoutUserInput;
    teacherProfile?: Prisma.TeacherProfileCreateNestedOneWithoutUserInput;
    parentProfile?: Prisma.ParentProfileCreateNestedOneWithoutUserInput;
    wallet?: Prisma.WalletCreateNestedOneWithoutUserInput;
    supportTickets?: Prisma.SupportTicketCreateNestedManyWithoutUserInput;
    referralsGiven?: Prisma.ReferralCreateNestedManyWithoutReferrerInput;
};
export type UserUncheckedCreateWithoutReferralsReceivedInput = {
    id?: string;
    email?: string | null;
    mobile?: string | null;
    password?: string | null;
    role: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    studentProfile?: Prisma.StudentProfileUncheckedCreateNestedOneWithoutUserInput;
    teacherProfile?: Prisma.TeacherProfileUncheckedCreateNestedOneWithoutUserInput;
    parentProfile?: Prisma.ParentProfileUncheckedCreateNestedOneWithoutUserInput;
    wallet?: Prisma.WalletUncheckedCreateNestedOneWithoutUserInput;
    supportTickets?: Prisma.SupportTicketUncheckedCreateNestedManyWithoutUserInput;
    referralsGiven?: Prisma.ReferralUncheckedCreateNestedManyWithoutReferrerInput;
};
export type UserCreateOrConnectWithoutReferralsReceivedInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutReferralsReceivedInput, Prisma.UserUncheckedCreateWithoutReferralsReceivedInput>;
};
export type UserUpsertWithoutReferralsGivenInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutReferralsGivenInput, Prisma.UserUncheckedUpdateWithoutReferralsGivenInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutReferralsGivenInput, Prisma.UserUncheckedCreateWithoutReferralsGivenInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutReferralsGivenInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutReferralsGivenInput, Prisma.UserUncheckedUpdateWithoutReferralsGivenInput>;
};
export type UserUpdateWithoutReferralsGivenInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mobile?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    studentProfile?: Prisma.StudentProfileUpdateOneWithoutUserNestedInput;
    teacherProfile?: Prisma.TeacherProfileUpdateOneWithoutUserNestedInput;
    parentProfile?: Prisma.ParentProfileUpdateOneWithoutUserNestedInput;
    wallet?: Prisma.WalletUpdateOneWithoutUserNestedInput;
    supportTickets?: Prisma.SupportTicketUpdateManyWithoutUserNestedInput;
    referralsReceived?: Prisma.ReferralUpdateManyWithoutRefereeNestedInput;
};
export type UserUncheckedUpdateWithoutReferralsGivenInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mobile?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    studentProfile?: Prisma.StudentProfileUncheckedUpdateOneWithoutUserNestedInput;
    teacherProfile?: Prisma.TeacherProfileUncheckedUpdateOneWithoutUserNestedInput;
    parentProfile?: Prisma.ParentProfileUncheckedUpdateOneWithoutUserNestedInput;
    wallet?: Prisma.WalletUncheckedUpdateOneWithoutUserNestedInput;
    supportTickets?: Prisma.SupportTicketUncheckedUpdateManyWithoutUserNestedInput;
    referralsReceived?: Prisma.ReferralUncheckedUpdateManyWithoutRefereeNestedInput;
};
export type UserUpsertWithoutReferralsReceivedInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutReferralsReceivedInput, Prisma.UserUncheckedUpdateWithoutReferralsReceivedInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutReferralsReceivedInput, Prisma.UserUncheckedCreateWithoutReferralsReceivedInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutReferralsReceivedInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutReferralsReceivedInput, Prisma.UserUncheckedUpdateWithoutReferralsReceivedInput>;
};
export type UserUpdateWithoutReferralsReceivedInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mobile?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    studentProfile?: Prisma.StudentProfileUpdateOneWithoutUserNestedInput;
    teacherProfile?: Prisma.TeacherProfileUpdateOneWithoutUserNestedInput;
    parentProfile?: Prisma.ParentProfileUpdateOneWithoutUserNestedInput;
    wallet?: Prisma.WalletUpdateOneWithoutUserNestedInput;
    supportTickets?: Prisma.SupportTicketUpdateManyWithoutUserNestedInput;
    referralsGiven?: Prisma.ReferralUpdateManyWithoutReferrerNestedInput;
};
export type UserUncheckedUpdateWithoutReferralsReceivedInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mobile?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    studentProfile?: Prisma.StudentProfileUncheckedUpdateOneWithoutUserNestedInput;
    teacherProfile?: Prisma.TeacherProfileUncheckedUpdateOneWithoutUserNestedInput;
    parentProfile?: Prisma.ParentProfileUncheckedUpdateOneWithoutUserNestedInput;
    wallet?: Prisma.WalletUncheckedUpdateOneWithoutUserNestedInput;
    supportTickets?: Prisma.SupportTicketUncheckedUpdateManyWithoutUserNestedInput;
    referralsGiven?: Prisma.ReferralUncheckedUpdateManyWithoutReferrerNestedInput;
};
/**
 * Count Type UserCountOutputType
 */
export type UserCountOutputType = {
    supportTickets: number;
    referralsGiven: number;
    referralsReceived: number;
};
export type UserCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    supportTickets?: boolean | UserCountOutputTypeCountSupportTicketsArgs;
    referralsGiven?: boolean | UserCountOutputTypeCountReferralsGivenArgs;
    referralsReceived?: boolean | UserCountOutputTypeCountReferralsReceivedArgs;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: Prisma.UserCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountSupportTicketsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SupportTicketWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountReferralsGivenArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReferralWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountReferralsReceivedArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReferralWhereInput;
};
export type UserSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    mobile?: boolean;
    password?: boolean;
    role?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    studentProfile?: boolean | Prisma.User$studentProfileArgs<ExtArgs>;
    teacherProfile?: boolean | Prisma.User$teacherProfileArgs<ExtArgs>;
    parentProfile?: boolean | Prisma.User$parentProfileArgs<ExtArgs>;
    wallet?: boolean | Prisma.User$walletArgs<ExtArgs>;
    supportTickets?: boolean | Prisma.User$supportTicketsArgs<ExtArgs>;
    referralsGiven?: boolean | Prisma.User$referralsGivenArgs<ExtArgs>;
    referralsReceived?: boolean | Prisma.User$referralsReceivedArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user"]>;
export type UserSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    mobile?: boolean;
    password?: boolean;
    role?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    mobile?: boolean;
    password?: boolean;
    role?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectScalar = {
    id?: boolean;
    email?: boolean;
    mobile?: boolean;
    password?: boolean;
    role?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type UserOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "email" | "mobile" | "password" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>;
export type UserInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    studentProfile?: boolean | Prisma.User$studentProfileArgs<ExtArgs>;
    teacherProfile?: boolean | Prisma.User$teacherProfileArgs<ExtArgs>;
    parentProfile?: boolean | Prisma.User$parentProfileArgs<ExtArgs>;
    wallet?: boolean | Prisma.User$walletArgs<ExtArgs>;
    supportTickets?: boolean | Prisma.User$supportTicketsArgs<ExtArgs>;
    referralsGiven?: boolean | Prisma.User$referralsGivenArgs<ExtArgs>;
    referralsReceived?: boolean | Prisma.User$referralsReceivedArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
};
export type UserIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type UserIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $UserPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "User";
    objects: {
        studentProfile: Prisma.$StudentProfilePayload<ExtArgs> | null;
        teacherProfile: Prisma.$TeacherProfilePayload<ExtArgs> | null;
        parentProfile: Prisma.$ParentProfilePayload<ExtArgs> | null;
        wallet: Prisma.$WalletPayload<ExtArgs> | null;
        supportTickets: Prisma.$SupportTicketPayload<ExtArgs>[];
        referralsGiven: Prisma.$ReferralPayload<ExtArgs>[];
        referralsReceived: Prisma.$ReferralPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        email: string | null;
        mobile: string | null;
        password: string | null;
        role: $Enums.Role;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["user"]>;
    composites: {};
};
export type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UserPayload, S>;
export type UserCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true;
};
export interface UserDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['User'];
        meta: {
            name: 'User';
        };
    };
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: Prisma.SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: Prisma.SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     */
    findMany<T extends UserFindManyArgs>(args?: Prisma.SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     */
    create<T extends UserCreateArgs>(args: Prisma.SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UserCreateManyArgs>(args?: Prisma.SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     */
    delete<T extends UserDeleteArgs>(args: Prisma.SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends UserUpdateArgs>(args: Prisma.SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: Prisma.SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends UserUpdateManyArgs>(args: Prisma.SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: Prisma.SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(args?: Prisma.Subset<T, UserCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UserCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Prisma.Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>;
    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends UserGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UserGroupByArgs['orderBy'];
    } : {
        orderBy?: UserGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the User model
     */
    readonly fields: UserFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for User.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__UserClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    studentProfile<T extends Prisma.User$studentProfileArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$studentProfileArgs<ExtArgs>>): Prisma.Prisma__StudentProfileClient<runtime.Types.Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    teacherProfile<T extends Prisma.User$teacherProfileArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$teacherProfileArgs<ExtArgs>>): Prisma.Prisma__TeacherProfileClient<runtime.Types.Result.GetResult<Prisma.$TeacherProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    parentProfile<T extends Prisma.User$parentProfileArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$parentProfileArgs<ExtArgs>>): Prisma.Prisma__ParentProfileClient<runtime.Types.Result.GetResult<Prisma.$ParentProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    wallet<T extends Prisma.User$walletArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$walletArgs<ExtArgs>>): Prisma.Prisma__WalletClient<runtime.Types.Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    supportTickets<T extends Prisma.User$supportTicketsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$supportTicketsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SupportTicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    referralsGiven<T extends Prisma.User$referralsGivenArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$referralsGivenArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    referralsReceived<T extends Prisma.User$referralsReceivedArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$referralsReceivedArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the User model
 */
export interface UserFieldRefs {
    readonly id: Prisma.FieldRef<"User", 'String'>;
    readonly email: Prisma.FieldRef<"User", 'String'>;
    readonly mobile: Prisma.FieldRef<"User", 'String'>;
    readonly password: Prisma.FieldRef<"User", 'String'>;
    readonly role: Prisma.FieldRef<"User", 'Role'>;
    readonly createdAt: Prisma.FieldRef<"User", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"User", 'DateTime'>;
}
/**
 * User findUnique
 */
export type UserFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: Prisma.UserWhereUniqueInput;
};
/**
 * User findUniqueOrThrow
 */
export type UserFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: Prisma.UserWhereUniqueInput;
};
/**
 * User findFirst
 */
export type UserFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: Prisma.UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: Prisma.UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
/**
 * User findFirstOrThrow
 */
export type UserFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: Prisma.UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: Prisma.UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
/**
 * User findMany
 */
export type UserFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which Users to fetch.
     */
    where?: Prisma.UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Users.
     */
    cursor?: Prisma.UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
/**
 * User create
 */
export type UserCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * The data needed to create a User.
     */
    data: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
};
/**
 * User createMany
 */
export type UserCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * User createManyAndReturn
 */
export type UserCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * The data used to create many Users.
     */
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * User update
 */
export type UserUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * The data needed to update a User.
     */
    data: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
    /**
     * Choose, which User to update.
     */
    where: Prisma.UserWhereUniqueInput;
};
/**
 * User updateMany
 */
export type UserUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: Prisma.UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
};
/**
 * User updateManyAndReturn
 */
export type UserUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * The data used to update Users.
     */
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: Prisma.UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
};
/**
 * User upsert
 */
export type UserUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: Prisma.UserWhereUniqueInput;
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
};
/**
 * User delete
 */
export type UserDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter which User to delete.
     */
    where: Prisma.UserWhereUniqueInput;
};
/**
 * User deleteMany
 */
export type UserDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: Prisma.UserWhereInput;
    /**
     * Limit how many Users to delete.
     */
    limit?: number;
};
/**
 * User.studentProfile
 */
export type User$studentProfileArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: Prisma.StudentProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: Prisma.StudentProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.StudentProfileInclude<ExtArgs> | null;
    where?: Prisma.StudentProfileWhereInput;
};
/**
 * User.teacherProfile
 */
export type User$teacherProfileArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherProfile
     */
    select?: Prisma.TeacherProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TeacherProfile
     */
    omit?: Prisma.TeacherProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TeacherProfileInclude<ExtArgs> | null;
    where?: Prisma.TeacherProfileWhereInput;
};
/**
 * User.parentProfile
 */
export type User$parentProfileArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParentProfile
     */
    select?: Prisma.ParentProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ParentProfile
     */
    omit?: Prisma.ParentProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ParentProfileInclude<ExtArgs> | null;
    where?: Prisma.ParentProfileWhereInput;
};
/**
 * User.wallet
 */
export type User$walletArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: Prisma.WalletSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Wallet
     */
    omit?: Prisma.WalletOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.WalletInclude<ExtArgs> | null;
    where?: Prisma.WalletWhereInput;
};
/**
 * User.supportTickets
 */
export type User$supportTicketsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportTicket
     */
    select?: Prisma.SupportTicketSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SupportTicket
     */
    omit?: Prisma.SupportTicketOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupportTicketInclude<ExtArgs> | null;
    where?: Prisma.SupportTicketWhereInput;
    orderBy?: Prisma.SupportTicketOrderByWithRelationInput | Prisma.SupportTicketOrderByWithRelationInput[];
    cursor?: Prisma.SupportTicketWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SupportTicketScalarFieldEnum | Prisma.SupportTicketScalarFieldEnum[];
};
/**
 * User.referralsGiven
 */
export type User$referralsGivenArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: Prisma.ReferralSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Referral
     */
    omit?: Prisma.ReferralOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ReferralInclude<ExtArgs> | null;
    where?: Prisma.ReferralWhereInput;
    orderBy?: Prisma.ReferralOrderByWithRelationInput | Prisma.ReferralOrderByWithRelationInput[];
    cursor?: Prisma.ReferralWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ReferralScalarFieldEnum | Prisma.ReferralScalarFieldEnum[];
};
/**
 * User.referralsReceived
 */
export type User$referralsReceivedArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: Prisma.ReferralSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Referral
     */
    omit?: Prisma.ReferralOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ReferralInclude<ExtArgs> | null;
    where?: Prisma.ReferralWhereInput;
    orderBy?: Prisma.ReferralOrderByWithRelationInput | Prisma.ReferralOrderByWithRelationInput[];
    cursor?: Prisma.ReferralWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ReferralScalarFieldEnum | Prisma.ReferralScalarFieldEnum[];
};
/**
 * User without action
 */
export type UserDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
};
//# sourceMappingURL=User.d.ts.map