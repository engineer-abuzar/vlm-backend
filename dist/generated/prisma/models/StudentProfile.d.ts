import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.ts";
/**
 * Model StudentProfile
 *
 */
export type StudentProfileModel = runtime.Types.Result.DefaultSelection<Prisma.$StudentProfilePayload>;
export type AggregateStudentProfile = {
    _count: StudentProfileCountAggregateOutputType | null;
    _min: StudentProfileMinAggregateOutputType | null;
    _max: StudentProfileMaxAggregateOutputType | null;
};
export type StudentProfileMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    planId: string | null;
    fullName: string | null;
    nickname: string | null;
    className: string | null;
    board: string | null;
    schoolName: string | null;
    city: string | null;
    state: string | null;
};
export type StudentProfileMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    planId: string | null;
    fullName: string | null;
    nickname: string | null;
    className: string | null;
    board: string | null;
    schoolName: string | null;
    city: string | null;
    state: string | null;
};
export type StudentProfileCountAggregateOutputType = {
    id: number;
    userId: number;
    planId: number;
    fullName: number;
    nickname: number;
    className: number;
    board: number;
    schoolName: number;
    city: number;
    state: number;
    _all: number;
};
export type StudentProfileMinAggregateInputType = {
    id?: true;
    userId?: true;
    planId?: true;
    fullName?: true;
    nickname?: true;
    className?: true;
    board?: true;
    schoolName?: true;
    city?: true;
    state?: true;
};
export type StudentProfileMaxAggregateInputType = {
    id?: true;
    userId?: true;
    planId?: true;
    fullName?: true;
    nickname?: true;
    className?: true;
    board?: true;
    schoolName?: true;
    city?: true;
    state?: true;
};
export type StudentProfileCountAggregateInputType = {
    id?: true;
    userId?: true;
    planId?: true;
    fullName?: true;
    nickname?: true;
    className?: true;
    board?: true;
    schoolName?: true;
    city?: true;
    state?: true;
    _all?: true;
};
export type StudentProfileAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which StudentProfile to aggregate.
     */
    where?: Prisma.StudentProfileWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of StudentProfiles to fetch.
     */
    orderBy?: Prisma.StudentProfileOrderByWithRelationInput | Prisma.StudentProfileOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.StudentProfileWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` StudentProfiles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` StudentProfiles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned StudentProfiles
    **/
    _count?: true | StudentProfileCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: StudentProfileMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: StudentProfileMaxAggregateInputType;
};
export type GetStudentProfileAggregateType<T extends StudentProfileAggregateArgs> = {
    [P in keyof T & keyof AggregateStudentProfile]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateStudentProfile[P]> : Prisma.GetScalarType<T[P], AggregateStudentProfile[P]>;
};
export type StudentProfileGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StudentProfileWhereInput;
    orderBy?: Prisma.StudentProfileOrderByWithAggregationInput | Prisma.StudentProfileOrderByWithAggregationInput[];
    by: Prisma.StudentProfileScalarFieldEnum[] | Prisma.StudentProfileScalarFieldEnum;
    having?: Prisma.StudentProfileScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: StudentProfileCountAggregateInputType | true;
    _min?: StudentProfileMinAggregateInputType;
    _max?: StudentProfileMaxAggregateInputType;
};
export type StudentProfileGroupByOutputType = {
    id: string;
    userId: string;
    planId: string | null;
    fullName: string;
    nickname: string | null;
    className: string | null;
    board: string | null;
    schoolName: string | null;
    city: string | null;
    state: string | null;
    _count: StudentProfileCountAggregateOutputType | null;
    _min: StudentProfileMinAggregateOutputType | null;
    _max: StudentProfileMaxAggregateOutputType | null;
};
export type GetStudentProfileGroupByPayload<T extends StudentProfileGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<StudentProfileGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof StudentProfileGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], StudentProfileGroupByOutputType[P]> : Prisma.GetScalarType<T[P], StudentProfileGroupByOutputType[P]>;
}>>;
export type StudentProfileWhereInput = {
    AND?: Prisma.StudentProfileWhereInput | Prisma.StudentProfileWhereInput[];
    OR?: Prisma.StudentProfileWhereInput[];
    NOT?: Prisma.StudentProfileWhereInput | Prisma.StudentProfileWhereInput[];
    id?: Prisma.StringFilter<"StudentProfile"> | string;
    userId?: Prisma.StringFilter<"StudentProfile"> | string;
    planId?: Prisma.StringNullableFilter<"StudentProfile"> | string | null;
    fullName?: Prisma.StringFilter<"StudentProfile"> | string;
    nickname?: Prisma.StringNullableFilter<"StudentProfile"> | string | null;
    className?: Prisma.StringNullableFilter<"StudentProfile"> | string | null;
    board?: Prisma.StringNullableFilter<"StudentProfile"> | string | null;
    schoolName?: Prisma.StringNullableFilter<"StudentProfile"> | string | null;
    city?: Prisma.StringNullableFilter<"StudentProfile"> | string | null;
    state?: Prisma.StringNullableFilter<"StudentProfile"> | string | null;
    plan?: Prisma.XOR<Prisma.PlanNullableScalarRelationFilter, Prisma.PlanWhereInput> | null;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    sessions?: Prisma.SessionListRelationFilter;
    doubts?: Prisma.DoubtListRelationFilter;
    chats?: Prisma.ChatListRelationFilter;
    payments?: Prisma.PaymentListRelationFilter;
    subscription?: Prisma.XOR<Prisma.SubscriptionNullableScalarRelationFilter, Prisma.SubscriptionWhereInput> | null;
    feedbacks?: Prisma.FeedbackListRelationFilter;
    mcqAttempts?: Prisma.McqAttemptListRelationFilter;
};
export type StudentProfileOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    planId?: Prisma.SortOrderInput | Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    nickname?: Prisma.SortOrderInput | Prisma.SortOrder;
    className?: Prisma.SortOrderInput | Prisma.SortOrder;
    board?: Prisma.SortOrderInput | Prisma.SortOrder;
    schoolName?: Prisma.SortOrderInput | Prisma.SortOrder;
    city?: Prisma.SortOrderInput | Prisma.SortOrder;
    state?: Prisma.SortOrderInput | Prisma.SortOrder;
    plan?: Prisma.PlanOrderByWithRelationInput;
    user?: Prisma.UserOrderByWithRelationInput;
    sessions?: Prisma.SessionOrderByRelationAggregateInput;
    doubts?: Prisma.DoubtOrderByRelationAggregateInput;
    chats?: Prisma.ChatOrderByRelationAggregateInput;
    payments?: Prisma.PaymentOrderByRelationAggregateInput;
    subscription?: Prisma.SubscriptionOrderByWithRelationInput;
    feedbacks?: Prisma.FeedbackOrderByRelationAggregateInput;
    mcqAttempts?: Prisma.McqAttemptOrderByRelationAggregateInput;
};
export type StudentProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    userId?: string;
    AND?: Prisma.StudentProfileWhereInput | Prisma.StudentProfileWhereInput[];
    OR?: Prisma.StudentProfileWhereInput[];
    NOT?: Prisma.StudentProfileWhereInput | Prisma.StudentProfileWhereInput[];
    planId?: Prisma.StringNullableFilter<"StudentProfile"> | string | null;
    fullName?: Prisma.StringFilter<"StudentProfile"> | string;
    nickname?: Prisma.StringNullableFilter<"StudentProfile"> | string | null;
    className?: Prisma.StringNullableFilter<"StudentProfile"> | string | null;
    board?: Prisma.StringNullableFilter<"StudentProfile"> | string | null;
    schoolName?: Prisma.StringNullableFilter<"StudentProfile"> | string | null;
    city?: Prisma.StringNullableFilter<"StudentProfile"> | string | null;
    state?: Prisma.StringNullableFilter<"StudentProfile"> | string | null;
    plan?: Prisma.XOR<Prisma.PlanNullableScalarRelationFilter, Prisma.PlanWhereInput> | null;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    sessions?: Prisma.SessionListRelationFilter;
    doubts?: Prisma.DoubtListRelationFilter;
    chats?: Prisma.ChatListRelationFilter;
    payments?: Prisma.PaymentListRelationFilter;
    subscription?: Prisma.XOR<Prisma.SubscriptionNullableScalarRelationFilter, Prisma.SubscriptionWhereInput> | null;
    feedbacks?: Prisma.FeedbackListRelationFilter;
    mcqAttempts?: Prisma.McqAttemptListRelationFilter;
}, "id" | "userId">;
export type StudentProfileOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    planId?: Prisma.SortOrderInput | Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    nickname?: Prisma.SortOrderInput | Prisma.SortOrder;
    className?: Prisma.SortOrderInput | Prisma.SortOrder;
    board?: Prisma.SortOrderInput | Prisma.SortOrder;
    schoolName?: Prisma.SortOrderInput | Prisma.SortOrder;
    city?: Prisma.SortOrderInput | Prisma.SortOrder;
    state?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.StudentProfileCountOrderByAggregateInput;
    _max?: Prisma.StudentProfileMaxOrderByAggregateInput;
    _min?: Prisma.StudentProfileMinOrderByAggregateInput;
};
export type StudentProfileScalarWhereWithAggregatesInput = {
    AND?: Prisma.StudentProfileScalarWhereWithAggregatesInput | Prisma.StudentProfileScalarWhereWithAggregatesInput[];
    OR?: Prisma.StudentProfileScalarWhereWithAggregatesInput[];
    NOT?: Prisma.StudentProfileScalarWhereWithAggregatesInput | Prisma.StudentProfileScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"StudentProfile"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"StudentProfile"> | string;
    planId?: Prisma.StringNullableWithAggregatesFilter<"StudentProfile"> | string | null;
    fullName?: Prisma.StringWithAggregatesFilter<"StudentProfile"> | string;
    nickname?: Prisma.StringNullableWithAggregatesFilter<"StudentProfile"> | string | null;
    className?: Prisma.StringNullableWithAggregatesFilter<"StudentProfile"> | string | null;
    board?: Prisma.StringNullableWithAggregatesFilter<"StudentProfile"> | string | null;
    schoolName?: Prisma.StringNullableWithAggregatesFilter<"StudentProfile"> | string | null;
    city?: Prisma.StringNullableWithAggregatesFilter<"StudentProfile"> | string | null;
    state?: Prisma.StringNullableWithAggregatesFilter<"StudentProfile"> | string | null;
};
export type StudentProfileCreateInput = {
    id?: string;
    fullName: string;
    nickname?: string | null;
    className?: string | null;
    board?: string | null;
    schoolName?: string | null;
    city?: string | null;
    state?: string | null;
    plan?: Prisma.PlanCreateNestedOneWithoutStudentProfilesInput;
    user: Prisma.UserCreateNestedOneWithoutStudentProfileInput;
    sessions?: Prisma.SessionCreateNestedManyWithoutStudentInput;
    doubts?: Prisma.DoubtCreateNestedManyWithoutStudentInput;
    chats?: Prisma.ChatCreateNestedManyWithoutStudentInput;
    payments?: Prisma.PaymentCreateNestedManyWithoutStudentInput;
    subscription?: Prisma.SubscriptionCreateNestedOneWithoutStudentInput;
    feedbacks?: Prisma.FeedbackCreateNestedManyWithoutStudentInput;
    mcqAttempts?: Prisma.McqAttemptCreateNestedManyWithoutStudentInput;
};
export type StudentProfileUncheckedCreateInput = {
    id?: string;
    userId: string;
    planId?: string | null;
    fullName: string;
    nickname?: string | null;
    className?: string | null;
    board?: string | null;
    schoolName?: string | null;
    city?: string | null;
    state?: string | null;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutStudentInput;
    doubts?: Prisma.DoubtUncheckedCreateNestedManyWithoutStudentInput;
    chats?: Prisma.ChatUncheckedCreateNestedManyWithoutStudentInput;
    payments?: Prisma.PaymentUncheckedCreateNestedManyWithoutStudentInput;
    subscription?: Prisma.SubscriptionUncheckedCreateNestedOneWithoutStudentInput;
    feedbacks?: Prisma.FeedbackUncheckedCreateNestedManyWithoutStudentInput;
    mcqAttempts?: Prisma.McqAttemptUncheckedCreateNestedManyWithoutStudentInput;
};
export type StudentProfileUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    nickname?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    className?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    board?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    schoolName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    plan?: Prisma.PlanUpdateOneWithoutStudentProfilesNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutStudentProfileNestedInput;
    sessions?: Prisma.SessionUpdateManyWithoutStudentNestedInput;
    doubts?: Prisma.DoubtUpdateManyWithoutStudentNestedInput;
    chats?: Prisma.ChatUpdateManyWithoutStudentNestedInput;
    payments?: Prisma.PaymentUpdateManyWithoutStudentNestedInput;
    subscription?: Prisma.SubscriptionUpdateOneWithoutStudentNestedInput;
    feedbacks?: Prisma.FeedbackUpdateManyWithoutStudentNestedInput;
    mcqAttempts?: Prisma.McqAttemptUpdateManyWithoutStudentNestedInput;
};
export type StudentProfileUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    planId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    nickname?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    className?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    board?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    schoolName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutStudentNestedInput;
    doubts?: Prisma.DoubtUncheckedUpdateManyWithoutStudentNestedInput;
    chats?: Prisma.ChatUncheckedUpdateManyWithoutStudentNestedInput;
    payments?: Prisma.PaymentUncheckedUpdateManyWithoutStudentNestedInput;
    subscription?: Prisma.SubscriptionUncheckedUpdateOneWithoutStudentNestedInput;
    feedbacks?: Prisma.FeedbackUncheckedUpdateManyWithoutStudentNestedInput;
    mcqAttempts?: Prisma.McqAttemptUncheckedUpdateManyWithoutStudentNestedInput;
};
export type StudentProfileCreateManyInput = {
    id?: string;
    userId: string;
    planId?: string | null;
    fullName: string;
    nickname?: string | null;
    className?: string | null;
    board?: string | null;
    schoolName?: string | null;
    city?: string | null;
    state?: string | null;
};
export type StudentProfileUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    nickname?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    className?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    board?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    schoolName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type StudentProfileUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    planId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    nickname?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    className?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    board?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    schoolName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type StudentProfileNullableScalarRelationFilter = {
    is?: Prisma.StudentProfileWhereInput | null;
    isNot?: Prisma.StudentProfileWhereInput | null;
};
export type StudentProfileListRelationFilter = {
    every?: Prisma.StudentProfileWhereInput;
    some?: Prisma.StudentProfileWhereInput;
    none?: Prisma.StudentProfileWhereInput;
};
export type StudentProfileOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type StudentProfileCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    planId?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    nickname?: Prisma.SortOrder;
    className?: Prisma.SortOrder;
    board?: Prisma.SortOrder;
    schoolName?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    state?: Prisma.SortOrder;
};
export type StudentProfileMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    planId?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    nickname?: Prisma.SortOrder;
    className?: Prisma.SortOrder;
    board?: Prisma.SortOrder;
    schoolName?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    state?: Prisma.SortOrder;
};
export type StudentProfileMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    planId?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    nickname?: Prisma.SortOrder;
    className?: Prisma.SortOrder;
    board?: Prisma.SortOrder;
    schoolName?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    state?: Prisma.SortOrder;
};
export type StudentProfileScalarRelationFilter = {
    is?: Prisma.StudentProfileWhereInput;
    isNot?: Prisma.StudentProfileWhereInput;
};
export type StudentProfileCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.StudentProfileCreateWithoutUserInput, Prisma.StudentProfileUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.StudentProfileCreateOrConnectWithoutUserInput;
    connect?: Prisma.StudentProfileWhereUniqueInput;
};
export type StudentProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.StudentProfileCreateWithoutUserInput, Prisma.StudentProfileUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.StudentProfileCreateOrConnectWithoutUserInput;
    connect?: Prisma.StudentProfileWhereUniqueInput;
};
export type StudentProfileUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.StudentProfileCreateWithoutUserInput, Prisma.StudentProfileUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.StudentProfileCreateOrConnectWithoutUserInput;
    upsert?: Prisma.StudentProfileUpsertWithoutUserInput;
    disconnect?: Prisma.StudentProfileWhereInput | boolean;
    delete?: Prisma.StudentProfileWhereInput | boolean;
    connect?: Prisma.StudentProfileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.StudentProfileUpdateToOneWithWhereWithoutUserInput, Prisma.StudentProfileUpdateWithoutUserInput>, Prisma.StudentProfileUncheckedUpdateWithoutUserInput>;
};
export type StudentProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.StudentProfileCreateWithoutUserInput, Prisma.StudentProfileUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.StudentProfileCreateOrConnectWithoutUserInput;
    upsert?: Prisma.StudentProfileUpsertWithoutUserInput;
    disconnect?: Prisma.StudentProfileWhereInput | boolean;
    delete?: Prisma.StudentProfileWhereInput | boolean;
    connect?: Prisma.StudentProfileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.StudentProfileUpdateToOneWithWhereWithoutUserInput, Prisma.StudentProfileUpdateWithoutUserInput>, Prisma.StudentProfileUncheckedUpdateWithoutUserInput>;
};
export type StudentProfileCreateNestedManyWithoutPlanInput = {
    create?: Prisma.XOR<Prisma.StudentProfileCreateWithoutPlanInput, Prisma.StudentProfileUncheckedCreateWithoutPlanInput> | Prisma.StudentProfileCreateWithoutPlanInput[] | Prisma.StudentProfileUncheckedCreateWithoutPlanInput[];
    connectOrCreate?: Prisma.StudentProfileCreateOrConnectWithoutPlanInput | Prisma.StudentProfileCreateOrConnectWithoutPlanInput[];
    createMany?: Prisma.StudentProfileCreateManyPlanInputEnvelope;
    connect?: Prisma.StudentProfileWhereUniqueInput | Prisma.StudentProfileWhereUniqueInput[];
};
export type StudentProfileUncheckedCreateNestedManyWithoutPlanInput = {
    create?: Prisma.XOR<Prisma.StudentProfileCreateWithoutPlanInput, Prisma.StudentProfileUncheckedCreateWithoutPlanInput> | Prisma.StudentProfileCreateWithoutPlanInput[] | Prisma.StudentProfileUncheckedCreateWithoutPlanInput[];
    connectOrCreate?: Prisma.StudentProfileCreateOrConnectWithoutPlanInput | Prisma.StudentProfileCreateOrConnectWithoutPlanInput[];
    createMany?: Prisma.StudentProfileCreateManyPlanInputEnvelope;
    connect?: Prisma.StudentProfileWhereUniqueInput | Prisma.StudentProfileWhereUniqueInput[];
};
export type StudentProfileUpdateManyWithoutPlanNestedInput = {
    create?: Prisma.XOR<Prisma.StudentProfileCreateWithoutPlanInput, Prisma.StudentProfileUncheckedCreateWithoutPlanInput> | Prisma.StudentProfileCreateWithoutPlanInput[] | Prisma.StudentProfileUncheckedCreateWithoutPlanInput[];
    connectOrCreate?: Prisma.StudentProfileCreateOrConnectWithoutPlanInput | Prisma.StudentProfileCreateOrConnectWithoutPlanInput[];
    upsert?: Prisma.StudentProfileUpsertWithWhereUniqueWithoutPlanInput | Prisma.StudentProfileUpsertWithWhereUniqueWithoutPlanInput[];
    createMany?: Prisma.StudentProfileCreateManyPlanInputEnvelope;
    set?: Prisma.StudentProfileWhereUniqueInput | Prisma.StudentProfileWhereUniqueInput[];
    disconnect?: Prisma.StudentProfileWhereUniqueInput | Prisma.StudentProfileWhereUniqueInput[];
    delete?: Prisma.StudentProfileWhereUniqueInput | Prisma.StudentProfileWhereUniqueInput[];
    connect?: Prisma.StudentProfileWhereUniqueInput | Prisma.StudentProfileWhereUniqueInput[];
    update?: Prisma.StudentProfileUpdateWithWhereUniqueWithoutPlanInput | Prisma.StudentProfileUpdateWithWhereUniqueWithoutPlanInput[];
    updateMany?: Prisma.StudentProfileUpdateManyWithWhereWithoutPlanInput | Prisma.StudentProfileUpdateManyWithWhereWithoutPlanInput[];
    deleteMany?: Prisma.StudentProfileScalarWhereInput | Prisma.StudentProfileScalarWhereInput[];
};
export type StudentProfileUncheckedUpdateManyWithoutPlanNestedInput = {
    create?: Prisma.XOR<Prisma.StudentProfileCreateWithoutPlanInput, Prisma.StudentProfileUncheckedCreateWithoutPlanInput> | Prisma.StudentProfileCreateWithoutPlanInput[] | Prisma.StudentProfileUncheckedCreateWithoutPlanInput[];
    connectOrCreate?: Prisma.StudentProfileCreateOrConnectWithoutPlanInput | Prisma.StudentProfileCreateOrConnectWithoutPlanInput[];
    upsert?: Prisma.StudentProfileUpsertWithWhereUniqueWithoutPlanInput | Prisma.StudentProfileUpsertWithWhereUniqueWithoutPlanInput[];
    createMany?: Prisma.StudentProfileCreateManyPlanInputEnvelope;
    set?: Prisma.StudentProfileWhereUniqueInput | Prisma.StudentProfileWhereUniqueInput[];
    disconnect?: Prisma.StudentProfileWhereUniqueInput | Prisma.StudentProfileWhereUniqueInput[];
    delete?: Prisma.StudentProfileWhereUniqueInput | Prisma.StudentProfileWhereUniqueInput[];
    connect?: Prisma.StudentProfileWhereUniqueInput | Prisma.StudentProfileWhereUniqueInput[];
    update?: Prisma.StudentProfileUpdateWithWhereUniqueWithoutPlanInput | Prisma.StudentProfileUpdateWithWhereUniqueWithoutPlanInput[];
    updateMany?: Prisma.StudentProfileUpdateManyWithWhereWithoutPlanInput | Prisma.StudentProfileUpdateManyWithWhereWithoutPlanInput[];
    deleteMany?: Prisma.StudentProfileScalarWhereInput | Prisma.StudentProfileScalarWhereInput[];
};
export type StudentProfileCreateNestedOneWithoutDoubtsInput = {
    create?: Prisma.XOR<Prisma.StudentProfileCreateWithoutDoubtsInput, Prisma.StudentProfileUncheckedCreateWithoutDoubtsInput>;
    connectOrCreate?: Prisma.StudentProfileCreateOrConnectWithoutDoubtsInput;
    connect?: Prisma.StudentProfileWhereUniqueInput;
};
export type StudentProfileUpdateOneRequiredWithoutDoubtsNestedInput = {
    create?: Prisma.XOR<Prisma.StudentProfileCreateWithoutDoubtsInput, Prisma.StudentProfileUncheckedCreateWithoutDoubtsInput>;
    connectOrCreate?: Prisma.StudentProfileCreateOrConnectWithoutDoubtsInput;
    upsert?: Prisma.StudentProfileUpsertWithoutDoubtsInput;
    connect?: Prisma.StudentProfileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.StudentProfileUpdateToOneWithWhereWithoutDoubtsInput, Prisma.StudentProfileUpdateWithoutDoubtsInput>, Prisma.StudentProfileUncheckedUpdateWithoutDoubtsInput>;
};
export type StudentProfileCreateNestedOneWithoutChatsInput = {
    create?: Prisma.XOR<Prisma.StudentProfileCreateWithoutChatsInput, Prisma.StudentProfileUncheckedCreateWithoutChatsInput>;
    connectOrCreate?: Prisma.StudentProfileCreateOrConnectWithoutChatsInput;
    connect?: Prisma.StudentProfileWhereUniqueInput;
};
export type StudentProfileUpdateOneRequiredWithoutChatsNestedInput = {
    create?: Prisma.XOR<Prisma.StudentProfileCreateWithoutChatsInput, Prisma.StudentProfileUncheckedCreateWithoutChatsInput>;
    connectOrCreate?: Prisma.StudentProfileCreateOrConnectWithoutChatsInput;
    upsert?: Prisma.StudentProfileUpsertWithoutChatsInput;
    connect?: Prisma.StudentProfileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.StudentProfileUpdateToOneWithWhereWithoutChatsInput, Prisma.StudentProfileUpdateWithoutChatsInput>, Prisma.StudentProfileUncheckedUpdateWithoutChatsInput>;
};
export type StudentProfileCreateNestedOneWithoutPaymentsInput = {
    create?: Prisma.XOR<Prisma.StudentProfileCreateWithoutPaymentsInput, Prisma.StudentProfileUncheckedCreateWithoutPaymentsInput>;
    connectOrCreate?: Prisma.StudentProfileCreateOrConnectWithoutPaymentsInput;
    connect?: Prisma.StudentProfileWhereUniqueInput;
};
export type StudentProfileUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: Prisma.XOR<Prisma.StudentProfileCreateWithoutPaymentsInput, Prisma.StudentProfileUncheckedCreateWithoutPaymentsInput>;
    connectOrCreate?: Prisma.StudentProfileCreateOrConnectWithoutPaymentsInput;
    upsert?: Prisma.StudentProfileUpsertWithoutPaymentsInput;
    connect?: Prisma.StudentProfileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.StudentProfileUpdateToOneWithWhereWithoutPaymentsInput, Prisma.StudentProfileUpdateWithoutPaymentsInput>, Prisma.StudentProfileUncheckedUpdateWithoutPaymentsInput>;
};
export type StudentProfileCreateNestedOneWithoutSubscriptionInput = {
    create?: Prisma.XOR<Prisma.StudentProfileCreateWithoutSubscriptionInput, Prisma.StudentProfileUncheckedCreateWithoutSubscriptionInput>;
    connectOrCreate?: Prisma.StudentProfileCreateOrConnectWithoutSubscriptionInput;
    connect?: Prisma.StudentProfileWhereUniqueInput;
};
export type StudentProfileUpdateOneRequiredWithoutSubscriptionNestedInput = {
    create?: Prisma.XOR<Prisma.StudentProfileCreateWithoutSubscriptionInput, Prisma.StudentProfileUncheckedCreateWithoutSubscriptionInput>;
    connectOrCreate?: Prisma.StudentProfileCreateOrConnectWithoutSubscriptionInput;
    upsert?: Prisma.StudentProfileUpsertWithoutSubscriptionInput;
    connect?: Prisma.StudentProfileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.StudentProfileUpdateToOneWithWhereWithoutSubscriptionInput, Prisma.StudentProfileUpdateWithoutSubscriptionInput>, Prisma.StudentProfileUncheckedUpdateWithoutSubscriptionInput>;
};
export type StudentProfileCreateNestedOneWithoutFeedbacksInput = {
    create?: Prisma.XOR<Prisma.StudentProfileCreateWithoutFeedbacksInput, Prisma.StudentProfileUncheckedCreateWithoutFeedbacksInput>;
    connectOrCreate?: Prisma.StudentProfileCreateOrConnectWithoutFeedbacksInput;
    connect?: Prisma.StudentProfileWhereUniqueInput;
};
export type StudentProfileUpdateOneRequiredWithoutFeedbacksNestedInput = {
    create?: Prisma.XOR<Prisma.StudentProfileCreateWithoutFeedbacksInput, Prisma.StudentProfileUncheckedCreateWithoutFeedbacksInput>;
    connectOrCreate?: Prisma.StudentProfileCreateOrConnectWithoutFeedbacksInput;
    upsert?: Prisma.StudentProfileUpsertWithoutFeedbacksInput;
    connect?: Prisma.StudentProfileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.StudentProfileUpdateToOneWithWhereWithoutFeedbacksInput, Prisma.StudentProfileUpdateWithoutFeedbacksInput>, Prisma.StudentProfileUncheckedUpdateWithoutFeedbacksInput>;
};
export type StudentProfileCreateNestedOneWithoutSessionsInput = {
    create?: Prisma.XOR<Prisma.StudentProfileCreateWithoutSessionsInput, Prisma.StudentProfileUncheckedCreateWithoutSessionsInput>;
    connectOrCreate?: Prisma.StudentProfileCreateOrConnectWithoutSessionsInput;
    connect?: Prisma.StudentProfileWhereUniqueInput;
};
export type StudentProfileUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: Prisma.XOR<Prisma.StudentProfileCreateWithoutSessionsInput, Prisma.StudentProfileUncheckedCreateWithoutSessionsInput>;
    connectOrCreate?: Prisma.StudentProfileCreateOrConnectWithoutSessionsInput;
    upsert?: Prisma.StudentProfileUpsertWithoutSessionsInput;
    connect?: Prisma.StudentProfileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.StudentProfileUpdateToOneWithWhereWithoutSessionsInput, Prisma.StudentProfileUpdateWithoutSessionsInput>, Prisma.StudentProfileUncheckedUpdateWithoutSessionsInput>;
};
export type StudentProfileCreateNestedOneWithoutMcqAttemptsInput = {
    create?: Prisma.XOR<Prisma.StudentProfileCreateWithoutMcqAttemptsInput, Prisma.StudentProfileUncheckedCreateWithoutMcqAttemptsInput>;
    connectOrCreate?: Prisma.StudentProfileCreateOrConnectWithoutMcqAttemptsInput;
    connect?: Prisma.StudentProfileWhereUniqueInput;
};
export type StudentProfileUpdateOneRequiredWithoutMcqAttemptsNestedInput = {
    create?: Prisma.XOR<Prisma.StudentProfileCreateWithoutMcqAttemptsInput, Prisma.StudentProfileUncheckedCreateWithoutMcqAttemptsInput>;
    connectOrCreate?: Prisma.StudentProfileCreateOrConnectWithoutMcqAttemptsInput;
    upsert?: Prisma.StudentProfileUpsertWithoutMcqAttemptsInput;
    connect?: Prisma.StudentProfileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.StudentProfileUpdateToOneWithWhereWithoutMcqAttemptsInput, Prisma.StudentProfileUpdateWithoutMcqAttemptsInput>, Prisma.StudentProfileUncheckedUpdateWithoutMcqAttemptsInput>;
};
export type StudentProfileCreateWithoutUserInput = {
    id?: string;
    fullName: string;
    nickname?: string | null;
    className?: string | null;
    board?: string | null;
    schoolName?: string | null;
    city?: string | null;
    state?: string | null;
    plan?: Prisma.PlanCreateNestedOneWithoutStudentProfilesInput;
    sessions?: Prisma.SessionCreateNestedManyWithoutStudentInput;
    doubts?: Prisma.DoubtCreateNestedManyWithoutStudentInput;
    chats?: Prisma.ChatCreateNestedManyWithoutStudentInput;
    payments?: Prisma.PaymentCreateNestedManyWithoutStudentInput;
    subscription?: Prisma.SubscriptionCreateNestedOneWithoutStudentInput;
    feedbacks?: Prisma.FeedbackCreateNestedManyWithoutStudentInput;
    mcqAttempts?: Prisma.McqAttemptCreateNestedManyWithoutStudentInput;
};
export type StudentProfileUncheckedCreateWithoutUserInput = {
    id?: string;
    planId?: string | null;
    fullName: string;
    nickname?: string | null;
    className?: string | null;
    board?: string | null;
    schoolName?: string | null;
    city?: string | null;
    state?: string | null;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutStudentInput;
    doubts?: Prisma.DoubtUncheckedCreateNestedManyWithoutStudentInput;
    chats?: Prisma.ChatUncheckedCreateNestedManyWithoutStudentInput;
    payments?: Prisma.PaymentUncheckedCreateNestedManyWithoutStudentInput;
    subscription?: Prisma.SubscriptionUncheckedCreateNestedOneWithoutStudentInput;
    feedbacks?: Prisma.FeedbackUncheckedCreateNestedManyWithoutStudentInput;
    mcqAttempts?: Prisma.McqAttemptUncheckedCreateNestedManyWithoutStudentInput;
};
export type StudentProfileCreateOrConnectWithoutUserInput = {
    where: Prisma.StudentProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.StudentProfileCreateWithoutUserInput, Prisma.StudentProfileUncheckedCreateWithoutUserInput>;
};
export type StudentProfileUpsertWithoutUserInput = {
    update: Prisma.XOR<Prisma.StudentProfileUpdateWithoutUserInput, Prisma.StudentProfileUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.StudentProfileCreateWithoutUserInput, Prisma.StudentProfileUncheckedCreateWithoutUserInput>;
    where?: Prisma.StudentProfileWhereInput;
};
export type StudentProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: Prisma.StudentProfileWhereInput;
    data: Prisma.XOR<Prisma.StudentProfileUpdateWithoutUserInput, Prisma.StudentProfileUncheckedUpdateWithoutUserInput>;
};
export type StudentProfileUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    nickname?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    className?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    board?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    schoolName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    plan?: Prisma.PlanUpdateOneWithoutStudentProfilesNestedInput;
    sessions?: Prisma.SessionUpdateManyWithoutStudentNestedInput;
    doubts?: Prisma.DoubtUpdateManyWithoutStudentNestedInput;
    chats?: Prisma.ChatUpdateManyWithoutStudentNestedInput;
    payments?: Prisma.PaymentUpdateManyWithoutStudentNestedInput;
    subscription?: Prisma.SubscriptionUpdateOneWithoutStudentNestedInput;
    feedbacks?: Prisma.FeedbackUpdateManyWithoutStudentNestedInput;
    mcqAttempts?: Prisma.McqAttemptUpdateManyWithoutStudentNestedInput;
};
export type StudentProfileUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    planId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    nickname?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    className?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    board?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    schoolName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutStudentNestedInput;
    doubts?: Prisma.DoubtUncheckedUpdateManyWithoutStudentNestedInput;
    chats?: Prisma.ChatUncheckedUpdateManyWithoutStudentNestedInput;
    payments?: Prisma.PaymentUncheckedUpdateManyWithoutStudentNestedInput;
    subscription?: Prisma.SubscriptionUncheckedUpdateOneWithoutStudentNestedInput;
    feedbacks?: Prisma.FeedbackUncheckedUpdateManyWithoutStudentNestedInput;
    mcqAttempts?: Prisma.McqAttemptUncheckedUpdateManyWithoutStudentNestedInput;
};
export type StudentProfileCreateWithoutPlanInput = {
    id?: string;
    fullName: string;
    nickname?: string | null;
    className?: string | null;
    board?: string | null;
    schoolName?: string | null;
    city?: string | null;
    state?: string | null;
    user: Prisma.UserCreateNestedOneWithoutStudentProfileInput;
    sessions?: Prisma.SessionCreateNestedManyWithoutStudentInput;
    doubts?: Prisma.DoubtCreateNestedManyWithoutStudentInput;
    chats?: Prisma.ChatCreateNestedManyWithoutStudentInput;
    payments?: Prisma.PaymentCreateNestedManyWithoutStudentInput;
    subscription?: Prisma.SubscriptionCreateNestedOneWithoutStudentInput;
    feedbacks?: Prisma.FeedbackCreateNestedManyWithoutStudentInput;
    mcqAttempts?: Prisma.McqAttemptCreateNestedManyWithoutStudentInput;
};
export type StudentProfileUncheckedCreateWithoutPlanInput = {
    id?: string;
    userId: string;
    fullName: string;
    nickname?: string | null;
    className?: string | null;
    board?: string | null;
    schoolName?: string | null;
    city?: string | null;
    state?: string | null;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutStudentInput;
    doubts?: Prisma.DoubtUncheckedCreateNestedManyWithoutStudentInput;
    chats?: Prisma.ChatUncheckedCreateNestedManyWithoutStudentInput;
    payments?: Prisma.PaymentUncheckedCreateNestedManyWithoutStudentInput;
    subscription?: Prisma.SubscriptionUncheckedCreateNestedOneWithoutStudentInput;
    feedbacks?: Prisma.FeedbackUncheckedCreateNestedManyWithoutStudentInput;
    mcqAttempts?: Prisma.McqAttemptUncheckedCreateNestedManyWithoutStudentInput;
};
export type StudentProfileCreateOrConnectWithoutPlanInput = {
    where: Prisma.StudentProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.StudentProfileCreateWithoutPlanInput, Prisma.StudentProfileUncheckedCreateWithoutPlanInput>;
};
export type StudentProfileCreateManyPlanInputEnvelope = {
    data: Prisma.StudentProfileCreateManyPlanInput | Prisma.StudentProfileCreateManyPlanInput[];
    skipDuplicates?: boolean;
};
export type StudentProfileUpsertWithWhereUniqueWithoutPlanInput = {
    where: Prisma.StudentProfileWhereUniqueInput;
    update: Prisma.XOR<Prisma.StudentProfileUpdateWithoutPlanInput, Prisma.StudentProfileUncheckedUpdateWithoutPlanInput>;
    create: Prisma.XOR<Prisma.StudentProfileCreateWithoutPlanInput, Prisma.StudentProfileUncheckedCreateWithoutPlanInput>;
};
export type StudentProfileUpdateWithWhereUniqueWithoutPlanInput = {
    where: Prisma.StudentProfileWhereUniqueInput;
    data: Prisma.XOR<Prisma.StudentProfileUpdateWithoutPlanInput, Prisma.StudentProfileUncheckedUpdateWithoutPlanInput>;
};
export type StudentProfileUpdateManyWithWhereWithoutPlanInput = {
    where: Prisma.StudentProfileScalarWhereInput;
    data: Prisma.XOR<Prisma.StudentProfileUpdateManyMutationInput, Prisma.StudentProfileUncheckedUpdateManyWithoutPlanInput>;
};
export type StudentProfileScalarWhereInput = {
    AND?: Prisma.StudentProfileScalarWhereInput | Prisma.StudentProfileScalarWhereInput[];
    OR?: Prisma.StudentProfileScalarWhereInput[];
    NOT?: Prisma.StudentProfileScalarWhereInput | Prisma.StudentProfileScalarWhereInput[];
    id?: Prisma.StringFilter<"StudentProfile"> | string;
    userId?: Prisma.StringFilter<"StudentProfile"> | string;
    planId?: Prisma.StringNullableFilter<"StudentProfile"> | string | null;
    fullName?: Prisma.StringFilter<"StudentProfile"> | string;
    nickname?: Prisma.StringNullableFilter<"StudentProfile"> | string | null;
    className?: Prisma.StringNullableFilter<"StudentProfile"> | string | null;
    board?: Prisma.StringNullableFilter<"StudentProfile"> | string | null;
    schoolName?: Prisma.StringNullableFilter<"StudentProfile"> | string | null;
    city?: Prisma.StringNullableFilter<"StudentProfile"> | string | null;
    state?: Prisma.StringNullableFilter<"StudentProfile"> | string | null;
};
export type StudentProfileCreateWithoutDoubtsInput = {
    id?: string;
    fullName: string;
    nickname?: string | null;
    className?: string | null;
    board?: string | null;
    schoolName?: string | null;
    city?: string | null;
    state?: string | null;
    plan?: Prisma.PlanCreateNestedOneWithoutStudentProfilesInput;
    user: Prisma.UserCreateNestedOneWithoutStudentProfileInput;
    sessions?: Prisma.SessionCreateNestedManyWithoutStudentInput;
    chats?: Prisma.ChatCreateNestedManyWithoutStudentInput;
    payments?: Prisma.PaymentCreateNestedManyWithoutStudentInput;
    subscription?: Prisma.SubscriptionCreateNestedOneWithoutStudentInput;
    feedbacks?: Prisma.FeedbackCreateNestedManyWithoutStudentInput;
    mcqAttempts?: Prisma.McqAttemptCreateNestedManyWithoutStudentInput;
};
export type StudentProfileUncheckedCreateWithoutDoubtsInput = {
    id?: string;
    userId: string;
    planId?: string | null;
    fullName: string;
    nickname?: string | null;
    className?: string | null;
    board?: string | null;
    schoolName?: string | null;
    city?: string | null;
    state?: string | null;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutStudentInput;
    chats?: Prisma.ChatUncheckedCreateNestedManyWithoutStudentInput;
    payments?: Prisma.PaymentUncheckedCreateNestedManyWithoutStudentInput;
    subscription?: Prisma.SubscriptionUncheckedCreateNestedOneWithoutStudentInput;
    feedbacks?: Prisma.FeedbackUncheckedCreateNestedManyWithoutStudentInput;
    mcqAttempts?: Prisma.McqAttemptUncheckedCreateNestedManyWithoutStudentInput;
};
export type StudentProfileCreateOrConnectWithoutDoubtsInput = {
    where: Prisma.StudentProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.StudentProfileCreateWithoutDoubtsInput, Prisma.StudentProfileUncheckedCreateWithoutDoubtsInput>;
};
export type StudentProfileUpsertWithoutDoubtsInput = {
    update: Prisma.XOR<Prisma.StudentProfileUpdateWithoutDoubtsInput, Prisma.StudentProfileUncheckedUpdateWithoutDoubtsInput>;
    create: Prisma.XOR<Prisma.StudentProfileCreateWithoutDoubtsInput, Prisma.StudentProfileUncheckedCreateWithoutDoubtsInput>;
    where?: Prisma.StudentProfileWhereInput;
};
export type StudentProfileUpdateToOneWithWhereWithoutDoubtsInput = {
    where?: Prisma.StudentProfileWhereInput;
    data: Prisma.XOR<Prisma.StudentProfileUpdateWithoutDoubtsInput, Prisma.StudentProfileUncheckedUpdateWithoutDoubtsInput>;
};
export type StudentProfileUpdateWithoutDoubtsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    nickname?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    className?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    board?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    schoolName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    plan?: Prisma.PlanUpdateOneWithoutStudentProfilesNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutStudentProfileNestedInput;
    sessions?: Prisma.SessionUpdateManyWithoutStudentNestedInput;
    chats?: Prisma.ChatUpdateManyWithoutStudentNestedInput;
    payments?: Prisma.PaymentUpdateManyWithoutStudentNestedInput;
    subscription?: Prisma.SubscriptionUpdateOneWithoutStudentNestedInput;
    feedbacks?: Prisma.FeedbackUpdateManyWithoutStudentNestedInput;
    mcqAttempts?: Prisma.McqAttemptUpdateManyWithoutStudentNestedInput;
};
export type StudentProfileUncheckedUpdateWithoutDoubtsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    planId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    nickname?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    className?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    board?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    schoolName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutStudentNestedInput;
    chats?: Prisma.ChatUncheckedUpdateManyWithoutStudentNestedInput;
    payments?: Prisma.PaymentUncheckedUpdateManyWithoutStudentNestedInput;
    subscription?: Prisma.SubscriptionUncheckedUpdateOneWithoutStudentNestedInput;
    feedbacks?: Prisma.FeedbackUncheckedUpdateManyWithoutStudentNestedInput;
    mcqAttempts?: Prisma.McqAttemptUncheckedUpdateManyWithoutStudentNestedInput;
};
export type StudentProfileCreateWithoutChatsInput = {
    id?: string;
    fullName: string;
    nickname?: string | null;
    className?: string | null;
    board?: string | null;
    schoolName?: string | null;
    city?: string | null;
    state?: string | null;
    plan?: Prisma.PlanCreateNestedOneWithoutStudentProfilesInput;
    user: Prisma.UserCreateNestedOneWithoutStudentProfileInput;
    sessions?: Prisma.SessionCreateNestedManyWithoutStudentInput;
    doubts?: Prisma.DoubtCreateNestedManyWithoutStudentInput;
    payments?: Prisma.PaymentCreateNestedManyWithoutStudentInput;
    subscription?: Prisma.SubscriptionCreateNestedOneWithoutStudentInput;
    feedbacks?: Prisma.FeedbackCreateNestedManyWithoutStudentInput;
    mcqAttempts?: Prisma.McqAttemptCreateNestedManyWithoutStudentInput;
};
export type StudentProfileUncheckedCreateWithoutChatsInput = {
    id?: string;
    userId: string;
    planId?: string | null;
    fullName: string;
    nickname?: string | null;
    className?: string | null;
    board?: string | null;
    schoolName?: string | null;
    city?: string | null;
    state?: string | null;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutStudentInput;
    doubts?: Prisma.DoubtUncheckedCreateNestedManyWithoutStudentInput;
    payments?: Prisma.PaymentUncheckedCreateNestedManyWithoutStudentInput;
    subscription?: Prisma.SubscriptionUncheckedCreateNestedOneWithoutStudentInput;
    feedbacks?: Prisma.FeedbackUncheckedCreateNestedManyWithoutStudentInput;
    mcqAttempts?: Prisma.McqAttemptUncheckedCreateNestedManyWithoutStudentInput;
};
export type StudentProfileCreateOrConnectWithoutChatsInput = {
    where: Prisma.StudentProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.StudentProfileCreateWithoutChatsInput, Prisma.StudentProfileUncheckedCreateWithoutChatsInput>;
};
export type StudentProfileUpsertWithoutChatsInput = {
    update: Prisma.XOR<Prisma.StudentProfileUpdateWithoutChatsInput, Prisma.StudentProfileUncheckedUpdateWithoutChatsInput>;
    create: Prisma.XOR<Prisma.StudentProfileCreateWithoutChatsInput, Prisma.StudentProfileUncheckedCreateWithoutChatsInput>;
    where?: Prisma.StudentProfileWhereInput;
};
export type StudentProfileUpdateToOneWithWhereWithoutChatsInput = {
    where?: Prisma.StudentProfileWhereInput;
    data: Prisma.XOR<Prisma.StudentProfileUpdateWithoutChatsInput, Prisma.StudentProfileUncheckedUpdateWithoutChatsInput>;
};
export type StudentProfileUpdateWithoutChatsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    nickname?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    className?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    board?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    schoolName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    plan?: Prisma.PlanUpdateOneWithoutStudentProfilesNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutStudentProfileNestedInput;
    sessions?: Prisma.SessionUpdateManyWithoutStudentNestedInput;
    doubts?: Prisma.DoubtUpdateManyWithoutStudentNestedInput;
    payments?: Prisma.PaymentUpdateManyWithoutStudentNestedInput;
    subscription?: Prisma.SubscriptionUpdateOneWithoutStudentNestedInput;
    feedbacks?: Prisma.FeedbackUpdateManyWithoutStudentNestedInput;
    mcqAttempts?: Prisma.McqAttemptUpdateManyWithoutStudentNestedInput;
};
export type StudentProfileUncheckedUpdateWithoutChatsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    planId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    nickname?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    className?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    board?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    schoolName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutStudentNestedInput;
    doubts?: Prisma.DoubtUncheckedUpdateManyWithoutStudentNestedInput;
    payments?: Prisma.PaymentUncheckedUpdateManyWithoutStudentNestedInput;
    subscription?: Prisma.SubscriptionUncheckedUpdateOneWithoutStudentNestedInput;
    feedbacks?: Prisma.FeedbackUncheckedUpdateManyWithoutStudentNestedInput;
    mcqAttempts?: Prisma.McqAttemptUncheckedUpdateManyWithoutStudentNestedInput;
};
export type StudentProfileCreateWithoutPaymentsInput = {
    id?: string;
    fullName: string;
    nickname?: string | null;
    className?: string | null;
    board?: string | null;
    schoolName?: string | null;
    city?: string | null;
    state?: string | null;
    plan?: Prisma.PlanCreateNestedOneWithoutStudentProfilesInput;
    user: Prisma.UserCreateNestedOneWithoutStudentProfileInput;
    sessions?: Prisma.SessionCreateNestedManyWithoutStudentInput;
    doubts?: Prisma.DoubtCreateNestedManyWithoutStudentInput;
    chats?: Prisma.ChatCreateNestedManyWithoutStudentInput;
    subscription?: Prisma.SubscriptionCreateNestedOneWithoutStudentInput;
    feedbacks?: Prisma.FeedbackCreateNestedManyWithoutStudentInput;
    mcqAttempts?: Prisma.McqAttemptCreateNestedManyWithoutStudentInput;
};
export type StudentProfileUncheckedCreateWithoutPaymentsInput = {
    id?: string;
    userId: string;
    planId?: string | null;
    fullName: string;
    nickname?: string | null;
    className?: string | null;
    board?: string | null;
    schoolName?: string | null;
    city?: string | null;
    state?: string | null;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutStudentInput;
    doubts?: Prisma.DoubtUncheckedCreateNestedManyWithoutStudentInput;
    chats?: Prisma.ChatUncheckedCreateNestedManyWithoutStudentInput;
    subscription?: Prisma.SubscriptionUncheckedCreateNestedOneWithoutStudentInput;
    feedbacks?: Prisma.FeedbackUncheckedCreateNestedManyWithoutStudentInput;
    mcqAttempts?: Prisma.McqAttemptUncheckedCreateNestedManyWithoutStudentInput;
};
export type StudentProfileCreateOrConnectWithoutPaymentsInput = {
    where: Prisma.StudentProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.StudentProfileCreateWithoutPaymentsInput, Prisma.StudentProfileUncheckedCreateWithoutPaymentsInput>;
};
export type StudentProfileUpsertWithoutPaymentsInput = {
    update: Prisma.XOR<Prisma.StudentProfileUpdateWithoutPaymentsInput, Prisma.StudentProfileUncheckedUpdateWithoutPaymentsInput>;
    create: Prisma.XOR<Prisma.StudentProfileCreateWithoutPaymentsInput, Prisma.StudentProfileUncheckedCreateWithoutPaymentsInput>;
    where?: Prisma.StudentProfileWhereInput;
};
export type StudentProfileUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: Prisma.StudentProfileWhereInput;
    data: Prisma.XOR<Prisma.StudentProfileUpdateWithoutPaymentsInput, Prisma.StudentProfileUncheckedUpdateWithoutPaymentsInput>;
};
export type StudentProfileUpdateWithoutPaymentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    nickname?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    className?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    board?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    schoolName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    plan?: Prisma.PlanUpdateOneWithoutStudentProfilesNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutStudentProfileNestedInput;
    sessions?: Prisma.SessionUpdateManyWithoutStudentNestedInput;
    doubts?: Prisma.DoubtUpdateManyWithoutStudentNestedInput;
    chats?: Prisma.ChatUpdateManyWithoutStudentNestedInput;
    subscription?: Prisma.SubscriptionUpdateOneWithoutStudentNestedInput;
    feedbacks?: Prisma.FeedbackUpdateManyWithoutStudentNestedInput;
    mcqAttempts?: Prisma.McqAttemptUpdateManyWithoutStudentNestedInput;
};
export type StudentProfileUncheckedUpdateWithoutPaymentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    planId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    nickname?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    className?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    board?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    schoolName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutStudentNestedInput;
    doubts?: Prisma.DoubtUncheckedUpdateManyWithoutStudentNestedInput;
    chats?: Prisma.ChatUncheckedUpdateManyWithoutStudentNestedInput;
    subscription?: Prisma.SubscriptionUncheckedUpdateOneWithoutStudentNestedInput;
    feedbacks?: Prisma.FeedbackUncheckedUpdateManyWithoutStudentNestedInput;
    mcqAttempts?: Prisma.McqAttemptUncheckedUpdateManyWithoutStudentNestedInput;
};
export type StudentProfileCreateWithoutSubscriptionInput = {
    id?: string;
    fullName: string;
    nickname?: string | null;
    className?: string | null;
    board?: string | null;
    schoolName?: string | null;
    city?: string | null;
    state?: string | null;
    plan?: Prisma.PlanCreateNestedOneWithoutStudentProfilesInput;
    user: Prisma.UserCreateNestedOneWithoutStudentProfileInput;
    sessions?: Prisma.SessionCreateNestedManyWithoutStudentInput;
    doubts?: Prisma.DoubtCreateNestedManyWithoutStudentInput;
    chats?: Prisma.ChatCreateNestedManyWithoutStudentInput;
    payments?: Prisma.PaymentCreateNestedManyWithoutStudentInput;
    feedbacks?: Prisma.FeedbackCreateNestedManyWithoutStudentInput;
    mcqAttempts?: Prisma.McqAttemptCreateNestedManyWithoutStudentInput;
};
export type StudentProfileUncheckedCreateWithoutSubscriptionInput = {
    id?: string;
    userId: string;
    planId?: string | null;
    fullName: string;
    nickname?: string | null;
    className?: string | null;
    board?: string | null;
    schoolName?: string | null;
    city?: string | null;
    state?: string | null;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutStudentInput;
    doubts?: Prisma.DoubtUncheckedCreateNestedManyWithoutStudentInput;
    chats?: Prisma.ChatUncheckedCreateNestedManyWithoutStudentInput;
    payments?: Prisma.PaymentUncheckedCreateNestedManyWithoutStudentInput;
    feedbacks?: Prisma.FeedbackUncheckedCreateNestedManyWithoutStudentInput;
    mcqAttempts?: Prisma.McqAttemptUncheckedCreateNestedManyWithoutStudentInput;
};
export type StudentProfileCreateOrConnectWithoutSubscriptionInput = {
    where: Prisma.StudentProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.StudentProfileCreateWithoutSubscriptionInput, Prisma.StudentProfileUncheckedCreateWithoutSubscriptionInput>;
};
export type StudentProfileUpsertWithoutSubscriptionInput = {
    update: Prisma.XOR<Prisma.StudentProfileUpdateWithoutSubscriptionInput, Prisma.StudentProfileUncheckedUpdateWithoutSubscriptionInput>;
    create: Prisma.XOR<Prisma.StudentProfileCreateWithoutSubscriptionInput, Prisma.StudentProfileUncheckedCreateWithoutSubscriptionInput>;
    where?: Prisma.StudentProfileWhereInput;
};
export type StudentProfileUpdateToOneWithWhereWithoutSubscriptionInput = {
    where?: Prisma.StudentProfileWhereInput;
    data: Prisma.XOR<Prisma.StudentProfileUpdateWithoutSubscriptionInput, Prisma.StudentProfileUncheckedUpdateWithoutSubscriptionInput>;
};
export type StudentProfileUpdateWithoutSubscriptionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    nickname?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    className?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    board?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    schoolName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    plan?: Prisma.PlanUpdateOneWithoutStudentProfilesNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutStudentProfileNestedInput;
    sessions?: Prisma.SessionUpdateManyWithoutStudentNestedInput;
    doubts?: Prisma.DoubtUpdateManyWithoutStudentNestedInput;
    chats?: Prisma.ChatUpdateManyWithoutStudentNestedInput;
    payments?: Prisma.PaymentUpdateManyWithoutStudentNestedInput;
    feedbacks?: Prisma.FeedbackUpdateManyWithoutStudentNestedInput;
    mcqAttempts?: Prisma.McqAttemptUpdateManyWithoutStudentNestedInput;
};
export type StudentProfileUncheckedUpdateWithoutSubscriptionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    planId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    nickname?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    className?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    board?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    schoolName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutStudentNestedInput;
    doubts?: Prisma.DoubtUncheckedUpdateManyWithoutStudentNestedInput;
    chats?: Prisma.ChatUncheckedUpdateManyWithoutStudentNestedInput;
    payments?: Prisma.PaymentUncheckedUpdateManyWithoutStudentNestedInput;
    feedbacks?: Prisma.FeedbackUncheckedUpdateManyWithoutStudentNestedInput;
    mcqAttempts?: Prisma.McqAttemptUncheckedUpdateManyWithoutStudentNestedInput;
};
export type StudentProfileCreateWithoutFeedbacksInput = {
    id?: string;
    fullName: string;
    nickname?: string | null;
    className?: string | null;
    board?: string | null;
    schoolName?: string | null;
    city?: string | null;
    state?: string | null;
    plan?: Prisma.PlanCreateNestedOneWithoutStudentProfilesInput;
    user: Prisma.UserCreateNestedOneWithoutStudentProfileInput;
    sessions?: Prisma.SessionCreateNestedManyWithoutStudentInput;
    doubts?: Prisma.DoubtCreateNestedManyWithoutStudentInput;
    chats?: Prisma.ChatCreateNestedManyWithoutStudentInput;
    payments?: Prisma.PaymentCreateNestedManyWithoutStudentInput;
    subscription?: Prisma.SubscriptionCreateNestedOneWithoutStudentInput;
    mcqAttempts?: Prisma.McqAttemptCreateNestedManyWithoutStudentInput;
};
export type StudentProfileUncheckedCreateWithoutFeedbacksInput = {
    id?: string;
    userId: string;
    planId?: string | null;
    fullName: string;
    nickname?: string | null;
    className?: string | null;
    board?: string | null;
    schoolName?: string | null;
    city?: string | null;
    state?: string | null;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutStudentInput;
    doubts?: Prisma.DoubtUncheckedCreateNestedManyWithoutStudentInput;
    chats?: Prisma.ChatUncheckedCreateNestedManyWithoutStudentInput;
    payments?: Prisma.PaymentUncheckedCreateNestedManyWithoutStudentInput;
    subscription?: Prisma.SubscriptionUncheckedCreateNestedOneWithoutStudentInput;
    mcqAttempts?: Prisma.McqAttemptUncheckedCreateNestedManyWithoutStudentInput;
};
export type StudentProfileCreateOrConnectWithoutFeedbacksInput = {
    where: Prisma.StudentProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.StudentProfileCreateWithoutFeedbacksInput, Prisma.StudentProfileUncheckedCreateWithoutFeedbacksInput>;
};
export type StudentProfileUpsertWithoutFeedbacksInput = {
    update: Prisma.XOR<Prisma.StudentProfileUpdateWithoutFeedbacksInput, Prisma.StudentProfileUncheckedUpdateWithoutFeedbacksInput>;
    create: Prisma.XOR<Prisma.StudentProfileCreateWithoutFeedbacksInput, Prisma.StudentProfileUncheckedCreateWithoutFeedbacksInput>;
    where?: Prisma.StudentProfileWhereInput;
};
export type StudentProfileUpdateToOneWithWhereWithoutFeedbacksInput = {
    where?: Prisma.StudentProfileWhereInput;
    data: Prisma.XOR<Prisma.StudentProfileUpdateWithoutFeedbacksInput, Prisma.StudentProfileUncheckedUpdateWithoutFeedbacksInput>;
};
export type StudentProfileUpdateWithoutFeedbacksInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    nickname?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    className?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    board?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    schoolName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    plan?: Prisma.PlanUpdateOneWithoutStudentProfilesNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutStudentProfileNestedInput;
    sessions?: Prisma.SessionUpdateManyWithoutStudentNestedInput;
    doubts?: Prisma.DoubtUpdateManyWithoutStudentNestedInput;
    chats?: Prisma.ChatUpdateManyWithoutStudentNestedInput;
    payments?: Prisma.PaymentUpdateManyWithoutStudentNestedInput;
    subscription?: Prisma.SubscriptionUpdateOneWithoutStudentNestedInput;
    mcqAttempts?: Prisma.McqAttemptUpdateManyWithoutStudentNestedInput;
};
export type StudentProfileUncheckedUpdateWithoutFeedbacksInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    planId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    nickname?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    className?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    board?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    schoolName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutStudentNestedInput;
    doubts?: Prisma.DoubtUncheckedUpdateManyWithoutStudentNestedInput;
    chats?: Prisma.ChatUncheckedUpdateManyWithoutStudentNestedInput;
    payments?: Prisma.PaymentUncheckedUpdateManyWithoutStudentNestedInput;
    subscription?: Prisma.SubscriptionUncheckedUpdateOneWithoutStudentNestedInput;
    mcqAttempts?: Prisma.McqAttemptUncheckedUpdateManyWithoutStudentNestedInput;
};
export type StudentProfileCreateWithoutSessionsInput = {
    id?: string;
    fullName: string;
    nickname?: string | null;
    className?: string | null;
    board?: string | null;
    schoolName?: string | null;
    city?: string | null;
    state?: string | null;
    plan?: Prisma.PlanCreateNestedOneWithoutStudentProfilesInput;
    user: Prisma.UserCreateNestedOneWithoutStudentProfileInput;
    doubts?: Prisma.DoubtCreateNestedManyWithoutStudentInput;
    chats?: Prisma.ChatCreateNestedManyWithoutStudentInput;
    payments?: Prisma.PaymentCreateNestedManyWithoutStudentInput;
    subscription?: Prisma.SubscriptionCreateNestedOneWithoutStudentInput;
    feedbacks?: Prisma.FeedbackCreateNestedManyWithoutStudentInput;
    mcqAttempts?: Prisma.McqAttemptCreateNestedManyWithoutStudentInput;
};
export type StudentProfileUncheckedCreateWithoutSessionsInput = {
    id?: string;
    userId: string;
    planId?: string | null;
    fullName: string;
    nickname?: string | null;
    className?: string | null;
    board?: string | null;
    schoolName?: string | null;
    city?: string | null;
    state?: string | null;
    doubts?: Prisma.DoubtUncheckedCreateNestedManyWithoutStudentInput;
    chats?: Prisma.ChatUncheckedCreateNestedManyWithoutStudentInput;
    payments?: Prisma.PaymentUncheckedCreateNestedManyWithoutStudentInput;
    subscription?: Prisma.SubscriptionUncheckedCreateNestedOneWithoutStudentInput;
    feedbacks?: Prisma.FeedbackUncheckedCreateNestedManyWithoutStudentInput;
    mcqAttempts?: Prisma.McqAttemptUncheckedCreateNestedManyWithoutStudentInput;
};
export type StudentProfileCreateOrConnectWithoutSessionsInput = {
    where: Prisma.StudentProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.StudentProfileCreateWithoutSessionsInput, Prisma.StudentProfileUncheckedCreateWithoutSessionsInput>;
};
export type StudentProfileUpsertWithoutSessionsInput = {
    update: Prisma.XOR<Prisma.StudentProfileUpdateWithoutSessionsInput, Prisma.StudentProfileUncheckedUpdateWithoutSessionsInput>;
    create: Prisma.XOR<Prisma.StudentProfileCreateWithoutSessionsInput, Prisma.StudentProfileUncheckedCreateWithoutSessionsInput>;
    where?: Prisma.StudentProfileWhereInput;
};
export type StudentProfileUpdateToOneWithWhereWithoutSessionsInput = {
    where?: Prisma.StudentProfileWhereInput;
    data: Prisma.XOR<Prisma.StudentProfileUpdateWithoutSessionsInput, Prisma.StudentProfileUncheckedUpdateWithoutSessionsInput>;
};
export type StudentProfileUpdateWithoutSessionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    nickname?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    className?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    board?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    schoolName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    plan?: Prisma.PlanUpdateOneWithoutStudentProfilesNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutStudentProfileNestedInput;
    doubts?: Prisma.DoubtUpdateManyWithoutStudentNestedInput;
    chats?: Prisma.ChatUpdateManyWithoutStudentNestedInput;
    payments?: Prisma.PaymentUpdateManyWithoutStudentNestedInput;
    subscription?: Prisma.SubscriptionUpdateOneWithoutStudentNestedInput;
    feedbacks?: Prisma.FeedbackUpdateManyWithoutStudentNestedInput;
    mcqAttempts?: Prisma.McqAttemptUpdateManyWithoutStudentNestedInput;
};
export type StudentProfileUncheckedUpdateWithoutSessionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    planId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    nickname?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    className?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    board?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    schoolName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    doubts?: Prisma.DoubtUncheckedUpdateManyWithoutStudentNestedInput;
    chats?: Prisma.ChatUncheckedUpdateManyWithoutStudentNestedInput;
    payments?: Prisma.PaymentUncheckedUpdateManyWithoutStudentNestedInput;
    subscription?: Prisma.SubscriptionUncheckedUpdateOneWithoutStudentNestedInput;
    feedbacks?: Prisma.FeedbackUncheckedUpdateManyWithoutStudentNestedInput;
    mcqAttempts?: Prisma.McqAttemptUncheckedUpdateManyWithoutStudentNestedInput;
};
export type StudentProfileCreateWithoutMcqAttemptsInput = {
    id?: string;
    fullName: string;
    nickname?: string | null;
    className?: string | null;
    board?: string | null;
    schoolName?: string | null;
    city?: string | null;
    state?: string | null;
    plan?: Prisma.PlanCreateNestedOneWithoutStudentProfilesInput;
    user: Prisma.UserCreateNestedOneWithoutStudentProfileInput;
    sessions?: Prisma.SessionCreateNestedManyWithoutStudentInput;
    doubts?: Prisma.DoubtCreateNestedManyWithoutStudentInput;
    chats?: Prisma.ChatCreateNestedManyWithoutStudentInput;
    payments?: Prisma.PaymentCreateNestedManyWithoutStudentInput;
    subscription?: Prisma.SubscriptionCreateNestedOneWithoutStudentInput;
    feedbacks?: Prisma.FeedbackCreateNestedManyWithoutStudentInput;
};
export type StudentProfileUncheckedCreateWithoutMcqAttemptsInput = {
    id?: string;
    userId: string;
    planId?: string | null;
    fullName: string;
    nickname?: string | null;
    className?: string | null;
    board?: string | null;
    schoolName?: string | null;
    city?: string | null;
    state?: string | null;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutStudentInput;
    doubts?: Prisma.DoubtUncheckedCreateNestedManyWithoutStudentInput;
    chats?: Prisma.ChatUncheckedCreateNestedManyWithoutStudentInput;
    payments?: Prisma.PaymentUncheckedCreateNestedManyWithoutStudentInput;
    subscription?: Prisma.SubscriptionUncheckedCreateNestedOneWithoutStudentInput;
    feedbacks?: Prisma.FeedbackUncheckedCreateNestedManyWithoutStudentInput;
};
export type StudentProfileCreateOrConnectWithoutMcqAttemptsInput = {
    where: Prisma.StudentProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.StudentProfileCreateWithoutMcqAttemptsInput, Prisma.StudentProfileUncheckedCreateWithoutMcqAttemptsInput>;
};
export type StudentProfileUpsertWithoutMcqAttemptsInput = {
    update: Prisma.XOR<Prisma.StudentProfileUpdateWithoutMcqAttemptsInput, Prisma.StudentProfileUncheckedUpdateWithoutMcqAttemptsInput>;
    create: Prisma.XOR<Prisma.StudentProfileCreateWithoutMcqAttemptsInput, Prisma.StudentProfileUncheckedCreateWithoutMcqAttemptsInput>;
    where?: Prisma.StudentProfileWhereInput;
};
export type StudentProfileUpdateToOneWithWhereWithoutMcqAttemptsInput = {
    where?: Prisma.StudentProfileWhereInput;
    data: Prisma.XOR<Prisma.StudentProfileUpdateWithoutMcqAttemptsInput, Prisma.StudentProfileUncheckedUpdateWithoutMcqAttemptsInput>;
};
export type StudentProfileUpdateWithoutMcqAttemptsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    nickname?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    className?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    board?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    schoolName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    plan?: Prisma.PlanUpdateOneWithoutStudentProfilesNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutStudentProfileNestedInput;
    sessions?: Prisma.SessionUpdateManyWithoutStudentNestedInput;
    doubts?: Prisma.DoubtUpdateManyWithoutStudentNestedInput;
    chats?: Prisma.ChatUpdateManyWithoutStudentNestedInput;
    payments?: Prisma.PaymentUpdateManyWithoutStudentNestedInput;
    subscription?: Prisma.SubscriptionUpdateOneWithoutStudentNestedInput;
    feedbacks?: Prisma.FeedbackUpdateManyWithoutStudentNestedInput;
};
export type StudentProfileUncheckedUpdateWithoutMcqAttemptsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    planId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    nickname?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    className?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    board?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    schoolName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutStudentNestedInput;
    doubts?: Prisma.DoubtUncheckedUpdateManyWithoutStudentNestedInput;
    chats?: Prisma.ChatUncheckedUpdateManyWithoutStudentNestedInput;
    payments?: Prisma.PaymentUncheckedUpdateManyWithoutStudentNestedInput;
    subscription?: Prisma.SubscriptionUncheckedUpdateOneWithoutStudentNestedInput;
    feedbacks?: Prisma.FeedbackUncheckedUpdateManyWithoutStudentNestedInput;
};
export type StudentProfileCreateManyPlanInput = {
    id?: string;
    userId: string;
    fullName: string;
    nickname?: string | null;
    className?: string | null;
    board?: string | null;
    schoolName?: string | null;
    city?: string | null;
    state?: string | null;
};
export type StudentProfileUpdateWithoutPlanInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    nickname?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    className?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    board?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    schoolName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    user?: Prisma.UserUpdateOneRequiredWithoutStudentProfileNestedInput;
    sessions?: Prisma.SessionUpdateManyWithoutStudentNestedInput;
    doubts?: Prisma.DoubtUpdateManyWithoutStudentNestedInput;
    chats?: Prisma.ChatUpdateManyWithoutStudentNestedInput;
    payments?: Prisma.PaymentUpdateManyWithoutStudentNestedInput;
    subscription?: Prisma.SubscriptionUpdateOneWithoutStudentNestedInput;
    feedbacks?: Prisma.FeedbackUpdateManyWithoutStudentNestedInput;
    mcqAttempts?: Prisma.McqAttemptUpdateManyWithoutStudentNestedInput;
};
export type StudentProfileUncheckedUpdateWithoutPlanInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    nickname?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    className?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    board?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    schoolName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutStudentNestedInput;
    doubts?: Prisma.DoubtUncheckedUpdateManyWithoutStudentNestedInput;
    chats?: Prisma.ChatUncheckedUpdateManyWithoutStudentNestedInput;
    payments?: Prisma.PaymentUncheckedUpdateManyWithoutStudentNestedInput;
    subscription?: Prisma.SubscriptionUncheckedUpdateOneWithoutStudentNestedInput;
    feedbacks?: Prisma.FeedbackUncheckedUpdateManyWithoutStudentNestedInput;
    mcqAttempts?: Prisma.McqAttemptUncheckedUpdateManyWithoutStudentNestedInput;
};
export type StudentProfileUncheckedUpdateManyWithoutPlanInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    nickname?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    className?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    board?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    schoolName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
/**
 * Count Type StudentProfileCountOutputType
 */
export type StudentProfileCountOutputType = {
    sessions: number;
    doubts: number;
    chats: number;
    payments: number;
    feedbacks: number;
    mcqAttempts: number;
};
export type StudentProfileCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    sessions?: boolean | StudentProfileCountOutputTypeCountSessionsArgs;
    doubts?: boolean | StudentProfileCountOutputTypeCountDoubtsArgs;
    chats?: boolean | StudentProfileCountOutputTypeCountChatsArgs;
    payments?: boolean | StudentProfileCountOutputTypeCountPaymentsArgs;
    feedbacks?: boolean | StudentProfileCountOutputTypeCountFeedbacksArgs;
    mcqAttempts?: boolean | StudentProfileCountOutputTypeCountMcqAttemptsArgs;
};
/**
 * StudentProfileCountOutputType without action
 */
export type StudentProfileCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfileCountOutputType
     */
    select?: Prisma.StudentProfileCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * StudentProfileCountOutputType without action
 */
export type StudentProfileCountOutputTypeCountSessionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SessionWhereInput;
};
/**
 * StudentProfileCountOutputType without action
 */
export type StudentProfileCountOutputTypeCountDoubtsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DoubtWhereInput;
};
/**
 * StudentProfileCountOutputType without action
 */
export type StudentProfileCountOutputTypeCountChatsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ChatWhereInput;
};
/**
 * StudentProfileCountOutputType without action
 */
export type StudentProfileCountOutputTypeCountPaymentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PaymentWhereInput;
};
/**
 * StudentProfileCountOutputType without action
 */
export type StudentProfileCountOutputTypeCountFeedbacksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FeedbackWhereInput;
};
/**
 * StudentProfileCountOutputType without action
 */
export type StudentProfileCountOutputTypeCountMcqAttemptsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.McqAttemptWhereInput;
};
export type StudentProfileSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    planId?: boolean;
    fullName?: boolean;
    nickname?: boolean;
    className?: boolean;
    board?: boolean;
    schoolName?: boolean;
    city?: boolean;
    state?: boolean;
    plan?: boolean | Prisma.StudentProfile$planArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    sessions?: boolean | Prisma.StudentProfile$sessionsArgs<ExtArgs>;
    doubts?: boolean | Prisma.StudentProfile$doubtsArgs<ExtArgs>;
    chats?: boolean | Prisma.StudentProfile$chatsArgs<ExtArgs>;
    payments?: boolean | Prisma.StudentProfile$paymentsArgs<ExtArgs>;
    subscription?: boolean | Prisma.StudentProfile$subscriptionArgs<ExtArgs>;
    feedbacks?: boolean | Prisma.StudentProfile$feedbacksArgs<ExtArgs>;
    mcqAttempts?: boolean | Prisma.StudentProfile$mcqAttemptsArgs<ExtArgs>;
    _count?: boolean | Prisma.StudentProfileCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["studentProfile"]>;
export type StudentProfileSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    planId?: boolean;
    fullName?: boolean;
    nickname?: boolean;
    className?: boolean;
    board?: boolean;
    schoolName?: boolean;
    city?: boolean;
    state?: boolean;
    plan?: boolean | Prisma.StudentProfile$planArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["studentProfile"]>;
export type StudentProfileSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    planId?: boolean;
    fullName?: boolean;
    nickname?: boolean;
    className?: boolean;
    board?: boolean;
    schoolName?: boolean;
    city?: boolean;
    state?: boolean;
    plan?: boolean | Prisma.StudentProfile$planArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["studentProfile"]>;
export type StudentProfileSelectScalar = {
    id?: boolean;
    userId?: boolean;
    planId?: boolean;
    fullName?: boolean;
    nickname?: boolean;
    className?: boolean;
    board?: boolean;
    schoolName?: boolean;
    city?: boolean;
    state?: boolean;
};
export type StudentProfileOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "planId" | "fullName" | "nickname" | "className" | "board" | "schoolName" | "city" | "state", ExtArgs["result"]["studentProfile"]>;
export type StudentProfileInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    plan?: boolean | Prisma.StudentProfile$planArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    sessions?: boolean | Prisma.StudentProfile$sessionsArgs<ExtArgs>;
    doubts?: boolean | Prisma.StudentProfile$doubtsArgs<ExtArgs>;
    chats?: boolean | Prisma.StudentProfile$chatsArgs<ExtArgs>;
    payments?: boolean | Prisma.StudentProfile$paymentsArgs<ExtArgs>;
    subscription?: boolean | Prisma.StudentProfile$subscriptionArgs<ExtArgs>;
    feedbacks?: boolean | Prisma.StudentProfile$feedbacksArgs<ExtArgs>;
    mcqAttempts?: boolean | Prisma.StudentProfile$mcqAttemptsArgs<ExtArgs>;
    _count?: boolean | Prisma.StudentProfileCountOutputTypeDefaultArgs<ExtArgs>;
};
export type StudentProfileIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    plan?: boolean | Prisma.StudentProfile$planArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type StudentProfileIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    plan?: boolean | Prisma.StudentProfile$planArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $StudentProfilePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "StudentProfile";
    objects: {
        plan: Prisma.$PlanPayload<ExtArgs> | null;
        user: Prisma.$UserPayload<ExtArgs>;
        sessions: Prisma.$SessionPayload<ExtArgs>[];
        doubts: Prisma.$DoubtPayload<ExtArgs>[];
        chats: Prisma.$ChatPayload<ExtArgs>[];
        payments: Prisma.$PaymentPayload<ExtArgs>[];
        subscription: Prisma.$SubscriptionPayload<ExtArgs> | null;
        feedbacks: Prisma.$FeedbackPayload<ExtArgs>[];
        mcqAttempts: Prisma.$McqAttemptPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        planId: string | null;
        fullName: string;
        nickname: string | null;
        className: string | null;
        board: string | null;
        schoolName: string | null;
        city: string | null;
        state: string | null;
    }, ExtArgs["result"]["studentProfile"]>;
    composites: {};
};
export type StudentProfileGetPayload<S extends boolean | null | undefined | StudentProfileDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$StudentProfilePayload, S>;
export type StudentProfileCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<StudentProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: StudentProfileCountAggregateInputType | true;
};
export interface StudentProfileDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['StudentProfile'];
        meta: {
            name: 'StudentProfile';
        };
    };
    /**
     * Find zero or one StudentProfile that matches the filter.
     * @param {StudentProfileFindUniqueArgs} args - Arguments to find a StudentProfile
     * @example
     * // Get one StudentProfile
     * const studentProfile = await prisma.studentProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentProfileFindUniqueArgs>(args: Prisma.SelectSubset<T, StudentProfileFindUniqueArgs<ExtArgs>>): Prisma.Prisma__StudentProfileClient<runtime.Types.Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one StudentProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentProfileFindUniqueOrThrowArgs} args - Arguments to find a StudentProfile
     * @example
     * // Get one StudentProfile
     * const studentProfile = await prisma.studentProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentProfileFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, StudentProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__StudentProfileClient<runtime.Types.Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first StudentProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentProfileFindFirstArgs} args - Arguments to find a StudentProfile
     * @example
     * // Get one StudentProfile
     * const studentProfile = await prisma.studentProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentProfileFindFirstArgs>(args?: Prisma.SelectSubset<T, StudentProfileFindFirstArgs<ExtArgs>>): Prisma.Prisma__StudentProfileClient<runtime.Types.Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first StudentProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentProfileFindFirstOrThrowArgs} args - Arguments to find a StudentProfile
     * @example
     * // Get one StudentProfile
     * const studentProfile = await prisma.studentProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentProfileFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, StudentProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__StudentProfileClient<runtime.Types.Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more StudentProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StudentProfiles
     * const studentProfiles = await prisma.studentProfile.findMany()
     *
     * // Get first 10 StudentProfiles
     * const studentProfiles = await prisma.studentProfile.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const studentProfileWithIdOnly = await prisma.studentProfile.findMany({ select: { id: true } })
     *
     */
    findMany<T extends StudentProfileFindManyArgs>(args?: Prisma.SelectSubset<T, StudentProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a StudentProfile.
     * @param {StudentProfileCreateArgs} args - Arguments to create a StudentProfile.
     * @example
     * // Create one StudentProfile
     * const StudentProfile = await prisma.studentProfile.create({
     *   data: {
     *     // ... data to create a StudentProfile
     *   }
     * })
     *
     */
    create<T extends StudentProfileCreateArgs>(args: Prisma.SelectSubset<T, StudentProfileCreateArgs<ExtArgs>>): Prisma.Prisma__StudentProfileClient<runtime.Types.Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many StudentProfiles.
     * @param {StudentProfileCreateManyArgs} args - Arguments to create many StudentProfiles.
     * @example
     * // Create many StudentProfiles
     * const studentProfile = await prisma.studentProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends StudentProfileCreateManyArgs>(args?: Prisma.SelectSubset<T, StudentProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many StudentProfiles and returns the data saved in the database.
     * @param {StudentProfileCreateManyAndReturnArgs} args - Arguments to create many StudentProfiles.
     * @example
     * // Create many StudentProfiles
     * const studentProfile = await prisma.studentProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many StudentProfiles and only return the `id`
     * const studentProfileWithIdOnly = await prisma.studentProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends StudentProfileCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, StudentProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a StudentProfile.
     * @param {StudentProfileDeleteArgs} args - Arguments to delete one StudentProfile.
     * @example
     * // Delete one StudentProfile
     * const StudentProfile = await prisma.studentProfile.delete({
     *   where: {
     *     // ... filter to delete one StudentProfile
     *   }
     * })
     *
     */
    delete<T extends StudentProfileDeleteArgs>(args: Prisma.SelectSubset<T, StudentProfileDeleteArgs<ExtArgs>>): Prisma.Prisma__StudentProfileClient<runtime.Types.Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one StudentProfile.
     * @param {StudentProfileUpdateArgs} args - Arguments to update one StudentProfile.
     * @example
     * // Update one StudentProfile
     * const studentProfile = await prisma.studentProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends StudentProfileUpdateArgs>(args: Prisma.SelectSubset<T, StudentProfileUpdateArgs<ExtArgs>>): Prisma.Prisma__StudentProfileClient<runtime.Types.Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more StudentProfiles.
     * @param {StudentProfileDeleteManyArgs} args - Arguments to filter StudentProfiles to delete.
     * @example
     * // Delete a few StudentProfiles
     * const { count } = await prisma.studentProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends StudentProfileDeleteManyArgs>(args?: Prisma.SelectSubset<T, StudentProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more StudentProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StudentProfiles
     * const studentProfile = await prisma.studentProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends StudentProfileUpdateManyArgs>(args: Prisma.SelectSubset<T, StudentProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more StudentProfiles and returns the data updated in the database.
     * @param {StudentProfileUpdateManyAndReturnArgs} args - Arguments to update many StudentProfiles.
     * @example
     * // Update many StudentProfiles
     * const studentProfile = await prisma.studentProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more StudentProfiles and only return the `id`
     * const studentProfileWithIdOnly = await prisma.studentProfile.updateManyAndReturn({
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
    updateManyAndReturn<T extends StudentProfileUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, StudentProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one StudentProfile.
     * @param {StudentProfileUpsertArgs} args - Arguments to update or create a StudentProfile.
     * @example
     * // Update or create a StudentProfile
     * const studentProfile = await prisma.studentProfile.upsert({
     *   create: {
     *     // ... data to create a StudentProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StudentProfile we want to update
     *   }
     * })
     */
    upsert<T extends StudentProfileUpsertArgs>(args: Prisma.SelectSubset<T, StudentProfileUpsertArgs<ExtArgs>>): Prisma.Prisma__StudentProfileClient<runtime.Types.Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of StudentProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentProfileCountArgs} args - Arguments to filter StudentProfiles to count.
     * @example
     * // Count the number of StudentProfiles
     * const count = await prisma.studentProfile.count({
     *   where: {
     *     // ... the filter for the StudentProfiles we want to count
     *   }
     * })
    **/
    count<T extends StudentProfileCountArgs>(args?: Prisma.Subset<T, StudentProfileCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], StudentProfileCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a StudentProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudentProfileAggregateArgs>(args: Prisma.Subset<T, StudentProfileAggregateArgs>): Prisma.PrismaPromise<GetStudentProfileAggregateType<T>>;
    /**
     * Group by StudentProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentProfileGroupByArgs} args - Group by arguments.
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
    groupBy<T extends StudentProfileGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: StudentProfileGroupByArgs['orderBy'];
    } : {
        orderBy?: StudentProfileGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, StudentProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the StudentProfile model
     */
    readonly fields: StudentProfileFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for StudentProfile.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__StudentProfileClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    plan<T extends Prisma.StudentProfile$planArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.StudentProfile$planArgs<ExtArgs>>): Prisma.Prisma__PlanClient<runtime.Types.Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    sessions<T extends Prisma.StudentProfile$sessionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.StudentProfile$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    doubts<T extends Prisma.StudentProfile$doubtsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.StudentProfile$doubtsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DoubtPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    chats<T extends Prisma.StudentProfile$chatsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.StudentProfile$chatsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    payments<T extends Prisma.StudentProfile$paymentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.StudentProfile$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    subscription<T extends Prisma.StudentProfile$subscriptionArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.StudentProfile$subscriptionArgs<ExtArgs>>): Prisma.Prisma__SubscriptionClient<runtime.Types.Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    feedbacks<T extends Prisma.StudentProfile$feedbacksArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.StudentProfile$feedbacksArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    mcqAttempts<T extends Prisma.StudentProfile$mcqAttemptsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.StudentProfile$mcqAttemptsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$McqAttemptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the StudentProfile model
 */
export interface StudentProfileFieldRefs {
    readonly id: Prisma.FieldRef<"StudentProfile", 'String'>;
    readonly userId: Prisma.FieldRef<"StudentProfile", 'String'>;
    readonly planId: Prisma.FieldRef<"StudentProfile", 'String'>;
    readonly fullName: Prisma.FieldRef<"StudentProfile", 'String'>;
    readonly nickname: Prisma.FieldRef<"StudentProfile", 'String'>;
    readonly className: Prisma.FieldRef<"StudentProfile", 'String'>;
    readonly board: Prisma.FieldRef<"StudentProfile", 'String'>;
    readonly schoolName: Prisma.FieldRef<"StudentProfile", 'String'>;
    readonly city: Prisma.FieldRef<"StudentProfile", 'String'>;
    readonly state: Prisma.FieldRef<"StudentProfile", 'String'>;
}
/**
 * StudentProfile findUnique
 */
export type StudentProfileFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which StudentProfile to fetch.
     */
    where: Prisma.StudentProfileWhereUniqueInput;
};
/**
 * StudentProfile findUniqueOrThrow
 */
export type StudentProfileFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which StudentProfile to fetch.
     */
    where: Prisma.StudentProfileWhereUniqueInput;
};
/**
 * StudentProfile findFirst
 */
export type StudentProfileFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which StudentProfile to fetch.
     */
    where?: Prisma.StudentProfileWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of StudentProfiles to fetch.
     */
    orderBy?: Prisma.StudentProfileOrderByWithRelationInput | Prisma.StudentProfileOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for StudentProfiles.
     */
    cursor?: Prisma.StudentProfileWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` StudentProfiles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` StudentProfiles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of StudentProfiles.
     */
    distinct?: Prisma.StudentProfileScalarFieldEnum | Prisma.StudentProfileScalarFieldEnum[];
};
/**
 * StudentProfile findFirstOrThrow
 */
export type StudentProfileFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which StudentProfile to fetch.
     */
    where?: Prisma.StudentProfileWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of StudentProfiles to fetch.
     */
    orderBy?: Prisma.StudentProfileOrderByWithRelationInput | Prisma.StudentProfileOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for StudentProfiles.
     */
    cursor?: Prisma.StudentProfileWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` StudentProfiles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` StudentProfiles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of StudentProfiles.
     */
    distinct?: Prisma.StudentProfileScalarFieldEnum | Prisma.StudentProfileScalarFieldEnum[];
};
/**
 * StudentProfile findMany
 */
export type StudentProfileFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which StudentProfiles to fetch.
     */
    where?: Prisma.StudentProfileWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of StudentProfiles to fetch.
     */
    orderBy?: Prisma.StudentProfileOrderByWithRelationInput | Prisma.StudentProfileOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing StudentProfiles.
     */
    cursor?: Prisma.StudentProfileWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` StudentProfiles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` StudentProfiles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of StudentProfiles.
     */
    distinct?: Prisma.StudentProfileScalarFieldEnum | Prisma.StudentProfileScalarFieldEnum[];
};
/**
 * StudentProfile create
 */
export type StudentProfileCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a StudentProfile.
     */
    data: Prisma.XOR<Prisma.StudentProfileCreateInput, Prisma.StudentProfileUncheckedCreateInput>;
};
/**
 * StudentProfile createMany
 */
export type StudentProfileCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many StudentProfiles.
     */
    data: Prisma.StudentProfileCreateManyInput | Prisma.StudentProfileCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * StudentProfile createManyAndReturn
 */
export type StudentProfileCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: Prisma.StudentProfileSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: Prisma.StudentProfileOmit<ExtArgs> | null;
    /**
     * The data used to create many StudentProfiles.
     */
    data: Prisma.StudentProfileCreateManyInput | Prisma.StudentProfileCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.StudentProfileIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * StudentProfile update
 */
export type StudentProfileUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a StudentProfile.
     */
    data: Prisma.XOR<Prisma.StudentProfileUpdateInput, Prisma.StudentProfileUncheckedUpdateInput>;
    /**
     * Choose, which StudentProfile to update.
     */
    where: Prisma.StudentProfileWhereUniqueInput;
};
/**
 * StudentProfile updateMany
 */
export type StudentProfileUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update StudentProfiles.
     */
    data: Prisma.XOR<Prisma.StudentProfileUpdateManyMutationInput, Prisma.StudentProfileUncheckedUpdateManyInput>;
    /**
     * Filter which StudentProfiles to update
     */
    where?: Prisma.StudentProfileWhereInput;
    /**
     * Limit how many StudentProfiles to update.
     */
    limit?: number;
};
/**
 * StudentProfile updateManyAndReturn
 */
export type StudentProfileUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: Prisma.StudentProfileSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: Prisma.StudentProfileOmit<ExtArgs> | null;
    /**
     * The data used to update StudentProfiles.
     */
    data: Prisma.XOR<Prisma.StudentProfileUpdateManyMutationInput, Prisma.StudentProfileUncheckedUpdateManyInput>;
    /**
     * Filter which StudentProfiles to update
     */
    where?: Prisma.StudentProfileWhereInput;
    /**
     * Limit how many StudentProfiles to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.StudentProfileIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * StudentProfile upsert
 */
export type StudentProfileUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the StudentProfile to update in case it exists.
     */
    where: Prisma.StudentProfileWhereUniqueInput;
    /**
     * In case the StudentProfile found by the `where` argument doesn't exist, create a new StudentProfile with this data.
     */
    create: Prisma.XOR<Prisma.StudentProfileCreateInput, Prisma.StudentProfileUncheckedCreateInput>;
    /**
     * In case the StudentProfile was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.StudentProfileUpdateInput, Prisma.StudentProfileUncheckedUpdateInput>;
};
/**
 * StudentProfile delete
 */
export type StudentProfileDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which StudentProfile to delete.
     */
    where: Prisma.StudentProfileWhereUniqueInput;
};
/**
 * StudentProfile deleteMany
 */
export type StudentProfileDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which StudentProfiles to delete
     */
    where?: Prisma.StudentProfileWhereInput;
    /**
     * Limit how many StudentProfiles to delete.
     */
    limit?: number;
};
/**
 * StudentProfile.plan
 */
export type StudentProfile$planArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: Prisma.PlanSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Plan
     */
    omit?: Prisma.PlanOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PlanInclude<ExtArgs> | null;
    where?: Prisma.PlanWhereInput;
};
/**
 * StudentProfile.sessions
 */
export type StudentProfile$sessionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: Prisma.SessionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Session
     */
    omit?: Prisma.SessionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SessionInclude<ExtArgs> | null;
    where?: Prisma.SessionWhereInput;
    orderBy?: Prisma.SessionOrderByWithRelationInput | Prisma.SessionOrderByWithRelationInput[];
    cursor?: Prisma.SessionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SessionScalarFieldEnum | Prisma.SessionScalarFieldEnum[];
};
/**
 * StudentProfile.doubts
 */
export type StudentProfile$doubtsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doubt
     */
    select?: Prisma.DoubtSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Doubt
     */
    omit?: Prisma.DoubtOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DoubtInclude<ExtArgs> | null;
    where?: Prisma.DoubtWhereInput;
    orderBy?: Prisma.DoubtOrderByWithRelationInput | Prisma.DoubtOrderByWithRelationInput[];
    cursor?: Prisma.DoubtWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DoubtScalarFieldEnum | Prisma.DoubtScalarFieldEnum[];
};
/**
 * StudentProfile.chats
 */
export type StudentProfile$chatsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: Prisma.ChatSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Chat
     */
    omit?: Prisma.ChatOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ChatInclude<ExtArgs> | null;
    where?: Prisma.ChatWhereInput;
    orderBy?: Prisma.ChatOrderByWithRelationInput | Prisma.ChatOrderByWithRelationInput[];
    cursor?: Prisma.ChatWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ChatScalarFieldEnum | Prisma.ChatScalarFieldEnum[];
};
/**
 * StudentProfile.payments
 */
export type StudentProfile$paymentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: Prisma.PaymentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Payment
     */
    omit?: Prisma.PaymentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PaymentInclude<ExtArgs> | null;
    where?: Prisma.PaymentWhereInput;
    orderBy?: Prisma.PaymentOrderByWithRelationInput | Prisma.PaymentOrderByWithRelationInput[];
    cursor?: Prisma.PaymentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PaymentScalarFieldEnum | Prisma.PaymentScalarFieldEnum[];
};
/**
 * StudentProfile.subscription
 */
export type StudentProfile$subscriptionArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: Prisma.SubscriptionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Subscription
     */
    omit?: Prisma.SubscriptionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SubscriptionInclude<ExtArgs> | null;
    where?: Prisma.SubscriptionWhereInput;
};
/**
 * StudentProfile.feedbacks
 */
export type StudentProfile$feedbacksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: Prisma.FeedbackSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Feedback
     */
    omit?: Prisma.FeedbackOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FeedbackInclude<ExtArgs> | null;
    where?: Prisma.FeedbackWhereInput;
    orderBy?: Prisma.FeedbackOrderByWithRelationInput | Prisma.FeedbackOrderByWithRelationInput[];
    cursor?: Prisma.FeedbackWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FeedbackScalarFieldEnum | Prisma.FeedbackScalarFieldEnum[];
};
/**
 * StudentProfile.mcqAttempts
 */
export type StudentProfile$mcqAttemptsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the McqAttempt
     */
    select?: Prisma.McqAttemptSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the McqAttempt
     */
    omit?: Prisma.McqAttemptOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.McqAttemptInclude<ExtArgs> | null;
    where?: Prisma.McqAttemptWhereInput;
    orderBy?: Prisma.McqAttemptOrderByWithRelationInput | Prisma.McqAttemptOrderByWithRelationInput[];
    cursor?: Prisma.McqAttemptWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.McqAttemptScalarFieldEnum | Prisma.McqAttemptScalarFieldEnum[];
};
/**
 * StudentProfile without action
 */
export type StudentProfileDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
//# sourceMappingURL=StudentProfile.d.ts.map