import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.ts";
/**
 * Model McqAttempt
 *
 */
export type McqAttemptModel = runtime.Types.Result.DefaultSelection<Prisma.$McqAttemptPayload>;
export type AggregateMcqAttempt = {
    _count: McqAttemptCountAggregateOutputType | null;
    _min: McqAttemptMinAggregateOutputType | null;
    _max: McqAttemptMaxAggregateOutputType | null;
};
export type McqAttemptMinAggregateOutputType = {
    id: string | null;
    studentId: string | null;
    questionId: string | null;
    selectedOpt: string | null;
    isCorrect: boolean | null;
    createdAt: Date | null;
};
export type McqAttemptMaxAggregateOutputType = {
    id: string | null;
    studentId: string | null;
    questionId: string | null;
    selectedOpt: string | null;
    isCorrect: boolean | null;
    createdAt: Date | null;
};
export type McqAttemptCountAggregateOutputType = {
    id: number;
    studentId: number;
    questionId: number;
    selectedOpt: number;
    isCorrect: number;
    createdAt: number;
    _all: number;
};
export type McqAttemptMinAggregateInputType = {
    id?: true;
    studentId?: true;
    questionId?: true;
    selectedOpt?: true;
    isCorrect?: true;
    createdAt?: true;
};
export type McqAttemptMaxAggregateInputType = {
    id?: true;
    studentId?: true;
    questionId?: true;
    selectedOpt?: true;
    isCorrect?: true;
    createdAt?: true;
};
export type McqAttemptCountAggregateInputType = {
    id?: true;
    studentId?: true;
    questionId?: true;
    selectedOpt?: true;
    isCorrect?: true;
    createdAt?: true;
    _all?: true;
};
export type McqAttemptAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which McqAttempt to aggregate.
     */
    where?: Prisma.McqAttemptWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of McqAttempts to fetch.
     */
    orderBy?: Prisma.McqAttemptOrderByWithRelationInput | Prisma.McqAttemptOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.McqAttemptWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` McqAttempts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` McqAttempts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned McqAttempts
    **/
    _count?: true | McqAttemptCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: McqAttemptMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: McqAttemptMaxAggregateInputType;
};
export type GetMcqAttemptAggregateType<T extends McqAttemptAggregateArgs> = {
    [P in keyof T & keyof AggregateMcqAttempt]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMcqAttempt[P]> : Prisma.GetScalarType<T[P], AggregateMcqAttempt[P]>;
};
export type McqAttemptGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.McqAttemptWhereInput;
    orderBy?: Prisma.McqAttemptOrderByWithAggregationInput | Prisma.McqAttemptOrderByWithAggregationInput[];
    by: Prisma.McqAttemptScalarFieldEnum[] | Prisma.McqAttemptScalarFieldEnum;
    having?: Prisma.McqAttemptScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: McqAttemptCountAggregateInputType | true;
    _min?: McqAttemptMinAggregateInputType;
    _max?: McqAttemptMaxAggregateInputType;
};
export type McqAttemptGroupByOutputType = {
    id: string;
    studentId: string;
    questionId: string;
    selectedOpt: string;
    isCorrect: boolean;
    createdAt: Date;
    _count: McqAttemptCountAggregateOutputType | null;
    _min: McqAttemptMinAggregateOutputType | null;
    _max: McqAttemptMaxAggregateOutputType | null;
};
export type GetMcqAttemptGroupByPayload<T extends McqAttemptGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<McqAttemptGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof McqAttemptGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], McqAttemptGroupByOutputType[P]> : Prisma.GetScalarType<T[P], McqAttemptGroupByOutputType[P]>;
}>>;
export type McqAttemptWhereInput = {
    AND?: Prisma.McqAttemptWhereInput | Prisma.McqAttemptWhereInput[];
    OR?: Prisma.McqAttemptWhereInput[];
    NOT?: Prisma.McqAttemptWhereInput | Prisma.McqAttemptWhereInput[];
    id?: Prisma.StringFilter<"McqAttempt"> | string;
    studentId?: Prisma.StringFilter<"McqAttempt"> | string;
    questionId?: Prisma.StringFilter<"McqAttempt"> | string;
    selectedOpt?: Prisma.StringFilter<"McqAttempt"> | string;
    isCorrect?: Prisma.BoolFilter<"McqAttempt"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"McqAttempt"> | Date | string;
    student?: Prisma.XOR<Prisma.StudentProfileScalarRelationFilter, Prisma.StudentProfileWhereInput>;
    question?: Prisma.XOR<Prisma.McqQuestionScalarRelationFilter, Prisma.McqQuestionWhereInput>;
};
export type McqAttemptOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    questionId?: Prisma.SortOrder;
    selectedOpt?: Prisma.SortOrder;
    isCorrect?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    student?: Prisma.StudentProfileOrderByWithRelationInput;
    question?: Prisma.McqQuestionOrderByWithRelationInput;
};
export type McqAttemptWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.McqAttemptWhereInput | Prisma.McqAttemptWhereInput[];
    OR?: Prisma.McqAttemptWhereInput[];
    NOT?: Prisma.McqAttemptWhereInput | Prisma.McqAttemptWhereInput[];
    studentId?: Prisma.StringFilter<"McqAttempt"> | string;
    questionId?: Prisma.StringFilter<"McqAttempt"> | string;
    selectedOpt?: Prisma.StringFilter<"McqAttempt"> | string;
    isCorrect?: Prisma.BoolFilter<"McqAttempt"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"McqAttempt"> | Date | string;
    student?: Prisma.XOR<Prisma.StudentProfileScalarRelationFilter, Prisma.StudentProfileWhereInput>;
    question?: Prisma.XOR<Prisma.McqQuestionScalarRelationFilter, Prisma.McqQuestionWhereInput>;
}, "id">;
export type McqAttemptOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    questionId?: Prisma.SortOrder;
    selectedOpt?: Prisma.SortOrder;
    isCorrect?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.McqAttemptCountOrderByAggregateInput;
    _max?: Prisma.McqAttemptMaxOrderByAggregateInput;
    _min?: Prisma.McqAttemptMinOrderByAggregateInput;
};
export type McqAttemptScalarWhereWithAggregatesInput = {
    AND?: Prisma.McqAttemptScalarWhereWithAggregatesInput | Prisma.McqAttemptScalarWhereWithAggregatesInput[];
    OR?: Prisma.McqAttemptScalarWhereWithAggregatesInput[];
    NOT?: Prisma.McqAttemptScalarWhereWithAggregatesInput | Prisma.McqAttemptScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"McqAttempt"> | string;
    studentId?: Prisma.StringWithAggregatesFilter<"McqAttempt"> | string;
    questionId?: Prisma.StringWithAggregatesFilter<"McqAttempt"> | string;
    selectedOpt?: Prisma.StringWithAggregatesFilter<"McqAttempt"> | string;
    isCorrect?: Prisma.BoolWithAggregatesFilter<"McqAttempt"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"McqAttempt"> | Date | string;
};
export type McqAttemptCreateInput = {
    id?: string;
    selectedOpt: string;
    isCorrect: boolean;
    createdAt?: Date | string;
    student: Prisma.StudentProfileCreateNestedOneWithoutMcqAttemptsInput;
    question: Prisma.McqQuestionCreateNestedOneWithoutAttemptsInput;
};
export type McqAttemptUncheckedCreateInput = {
    id?: string;
    studentId: string;
    questionId: string;
    selectedOpt: string;
    isCorrect: boolean;
    createdAt?: Date | string;
};
export type McqAttemptUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    selectedOpt?: Prisma.StringFieldUpdateOperationsInput | string;
    isCorrect?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    student?: Prisma.StudentProfileUpdateOneRequiredWithoutMcqAttemptsNestedInput;
    question?: Prisma.McqQuestionUpdateOneRequiredWithoutAttemptsNestedInput;
};
export type McqAttemptUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    questionId?: Prisma.StringFieldUpdateOperationsInput | string;
    selectedOpt?: Prisma.StringFieldUpdateOperationsInput | string;
    isCorrect?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type McqAttemptCreateManyInput = {
    id?: string;
    studentId: string;
    questionId: string;
    selectedOpt: string;
    isCorrect: boolean;
    createdAt?: Date | string;
};
export type McqAttemptUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    selectedOpt?: Prisma.StringFieldUpdateOperationsInput | string;
    isCorrect?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type McqAttemptUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    questionId?: Prisma.StringFieldUpdateOperationsInput | string;
    selectedOpt?: Prisma.StringFieldUpdateOperationsInput | string;
    isCorrect?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type McqAttemptListRelationFilter = {
    every?: Prisma.McqAttemptWhereInput;
    some?: Prisma.McqAttemptWhereInput;
    none?: Prisma.McqAttemptWhereInput;
};
export type McqAttemptOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type McqAttemptCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    questionId?: Prisma.SortOrder;
    selectedOpt?: Prisma.SortOrder;
    isCorrect?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type McqAttemptMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    questionId?: Prisma.SortOrder;
    selectedOpt?: Prisma.SortOrder;
    isCorrect?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type McqAttemptMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    questionId?: Prisma.SortOrder;
    selectedOpt?: Prisma.SortOrder;
    isCorrect?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type McqAttemptCreateNestedManyWithoutStudentInput = {
    create?: Prisma.XOR<Prisma.McqAttemptCreateWithoutStudentInput, Prisma.McqAttemptUncheckedCreateWithoutStudentInput> | Prisma.McqAttemptCreateWithoutStudentInput[] | Prisma.McqAttemptUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.McqAttemptCreateOrConnectWithoutStudentInput | Prisma.McqAttemptCreateOrConnectWithoutStudentInput[];
    createMany?: Prisma.McqAttemptCreateManyStudentInputEnvelope;
    connect?: Prisma.McqAttemptWhereUniqueInput | Prisma.McqAttemptWhereUniqueInput[];
};
export type McqAttemptUncheckedCreateNestedManyWithoutStudentInput = {
    create?: Prisma.XOR<Prisma.McqAttemptCreateWithoutStudentInput, Prisma.McqAttemptUncheckedCreateWithoutStudentInput> | Prisma.McqAttemptCreateWithoutStudentInput[] | Prisma.McqAttemptUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.McqAttemptCreateOrConnectWithoutStudentInput | Prisma.McqAttemptCreateOrConnectWithoutStudentInput[];
    createMany?: Prisma.McqAttemptCreateManyStudentInputEnvelope;
    connect?: Prisma.McqAttemptWhereUniqueInput | Prisma.McqAttemptWhereUniqueInput[];
};
export type McqAttemptUpdateManyWithoutStudentNestedInput = {
    create?: Prisma.XOR<Prisma.McqAttemptCreateWithoutStudentInput, Prisma.McqAttemptUncheckedCreateWithoutStudentInput> | Prisma.McqAttemptCreateWithoutStudentInput[] | Prisma.McqAttemptUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.McqAttemptCreateOrConnectWithoutStudentInput | Prisma.McqAttemptCreateOrConnectWithoutStudentInput[];
    upsert?: Prisma.McqAttemptUpsertWithWhereUniqueWithoutStudentInput | Prisma.McqAttemptUpsertWithWhereUniqueWithoutStudentInput[];
    createMany?: Prisma.McqAttemptCreateManyStudentInputEnvelope;
    set?: Prisma.McqAttemptWhereUniqueInput | Prisma.McqAttemptWhereUniqueInput[];
    disconnect?: Prisma.McqAttemptWhereUniqueInput | Prisma.McqAttemptWhereUniqueInput[];
    delete?: Prisma.McqAttemptWhereUniqueInput | Prisma.McqAttemptWhereUniqueInput[];
    connect?: Prisma.McqAttemptWhereUniqueInput | Prisma.McqAttemptWhereUniqueInput[];
    update?: Prisma.McqAttemptUpdateWithWhereUniqueWithoutStudentInput | Prisma.McqAttemptUpdateWithWhereUniqueWithoutStudentInput[];
    updateMany?: Prisma.McqAttemptUpdateManyWithWhereWithoutStudentInput | Prisma.McqAttemptUpdateManyWithWhereWithoutStudentInput[];
    deleteMany?: Prisma.McqAttemptScalarWhereInput | Prisma.McqAttemptScalarWhereInput[];
};
export type McqAttemptUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: Prisma.XOR<Prisma.McqAttemptCreateWithoutStudentInput, Prisma.McqAttemptUncheckedCreateWithoutStudentInput> | Prisma.McqAttemptCreateWithoutStudentInput[] | Prisma.McqAttemptUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.McqAttemptCreateOrConnectWithoutStudentInput | Prisma.McqAttemptCreateOrConnectWithoutStudentInput[];
    upsert?: Prisma.McqAttemptUpsertWithWhereUniqueWithoutStudentInput | Prisma.McqAttemptUpsertWithWhereUniqueWithoutStudentInput[];
    createMany?: Prisma.McqAttemptCreateManyStudentInputEnvelope;
    set?: Prisma.McqAttemptWhereUniqueInput | Prisma.McqAttemptWhereUniqueInput[];
    disconnect?: Prisma.McqAttemptWhereUniqueInput | Prisma.McqAttemptWhereUniqueInput[];
    delete?: Prisma.McqAttemptWhereUniqueInput | Prisma.McqAttemptWhereUniqueInput[];
    connect?: Prisma.McqAttemptWhereUniqueInput | Prisma.McqAttemptWhereUniqueInput[];
    update?: Prisma.McqAttemptUpdateWithWhereUniqueWithoutStudentInput | Prisma.McqAttemptUpdateWithWhereUniqueWithoutStudentInput[];
    updateMany?: Prisma.McqAttemptUpdateManyWithWhereWithoutStudentInput | Prisma.McqAttemptUpdateManyWithWhereWithoutStudentInput[];
    deleteMany?: Prisma.McqAttemptScalarWhereInput | Prisma.McqAttemptScalarWhereInput[];
};
export type McqAttemptCreateNestedManyWithoutQuestionInput = {
    create?: Prisma.XOR<Prisma.McqAttemptCreateWithoutQuestionInput, Prisma.McqAttemptUncheckedCreateWithoutQuestionInput> | Prisma.McqAttemptCreateWithoutQuestionInput[] | Prisma.McqAttemptUncheckedCreateWithoutQuestionInput[];
    connectOrCreate?: Prisma.McqAttemptCreateOrConnectWithoutQuestionInput | Prisma.McqAttemptCreateOrConnectWithoutQuestionInput[];
    createMany?: Prisma.McqAttemptCreateManyQuestionInputEnvelope;
    connect?: Prisma.McqAttemptWhereUniqueInput | Prisma.McqAttemptWhereUniqueInput[];
};
export type McqAttemptUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: Prisma.XOR<Prisma.McqAttemptCreateWithoutQuestionInput, Prisma.McqAttemptUncheckedCreateWithoutQuestionInput> | Prisma.McqAttemptCreateWithoutQuestionInput[] | Prisma.McqAttemptUncheckedCreateWithoutQuestionInput[];
    connectOrCreate?: Prisma.McqAttemptCreateOrConnectWithoutQuestionInput | Prisma.McqAttemptCreateOrConnectWithoutQuestionInput[];
    createMany?: Prisma.McqAttemptCreateManyQuestionInputEnvelope;
    connect?: Prisma.McqAttemptWhereUniqueInput | Prisma.McqAttemptWhereUniqueInput[];
};
export type McqAttemptUpdateManyWithoutQuestionNestedInput = {
    create?: Prisma.XOR<Prisma.McqAttemptCreateWithoutQuestionInput, Prisma.McqAttemptUncheckedCreateWithoutQuestionInput> | Prisma.McqAttemptCreateWithoutQuestionInput[] | Prisma.McqAttemptUncheckedCreateWithoutQuestionInput[];
    connectOrCreate?: Prisma.McqAttemptCreateOrConnectWithoutQuestionInput | Prisma.McqAttemptCreateOrConnectWithoutQuestionInput[];
    upsert?: Prisma.McqAttemptUpsertWithWhereUniqueWithoutQuestionInput | Prisma.McqAttemptUpsertWithWhereUniqueWithoutQuestionInput[];
    createMany?: Prisma.McqAttemptCreateManyQuestionInputEnvelope;
    set?: Prisma.McqAttemptWhereUniqueInput | Prisma.McqAttemptWhereUniqueInput[];
    disconnect?: Prisma.McqAttemptWhereUniqueInput | Prisma.McqAttemptWhereUniqueInput[];
    delete?: Prisma.McqAttemptWhereUniqueInput | Prisma.McqAttemptWhereUniqueInput[];
    connect?: Prisma.McqAttemptWhereUniqueInput | Prisma.McqAttemptWhereUniqueInput[];
    update?: Prisma.McqAttemptUpdateWithWhereUniqueWithoutQuestionInput | Prisma.McqAttemptUpdateWithWhereUniqueWithoutQuestionInput[];
    updateMany?: Prisma.McqAttemptUpdateManyWithWhereWithoutQuestionInput | Prisma.McqAttemptUpdateManyWithWhereWithoutQuestionInput[];
    deleteMany?: Prisma.McqAttemptScalarWhereInput | Prisma.McqAttemptScalarWhereInput[];
};
export type McqAttemptUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: Prisma.XOR<Prisma.McqAttemptCreateWithoutQuestionInput, Prisma.McqAttemptUncheckedCreateWithoutQuestionInput> | Prisma.McqAttemptCreateWithoutQuestionInput[] | Prisma.McqAttemptUncheckedCreateWithoutQuestionInput[];
    connectOrCreate?: Prisma.McqAttemptCreateOrConnectWithoutQuestionInput | Prisma.McqAttemptCreateOrConnectWithoutQuestionInput[];
    upsert?: Prisma.McqAttemptUpsertWithWhereUniqueWithoutQuestionInput | Prisma.McqAttemptUpsertWithWhereUniqueWithoutQuestionInput[];
    createMany?: Prisma.McqAttemptCreateManyQuestionInputEnvelope;
    set?: Prisma.McqAttemptWhereUniqueInput | Prisma.McqAttemptWhereUniqueInput[];
    disconnect?: Prisma.McqAttemptWhereUniqueInput | Prisma.McqAttemptWhereUniqueInput[];
    delete?: Prisma.McqAttemptWhereUniqueInput | Prisma.McqAttemptWhereUniqueInput[];
    connect?: Prisma.McqAttemptWhereUniqueInput | Prisma.McqAttemptWhereUniqueInput[];
    update?: Prisma.McqAttemptUpdateWithWhereUniqueWithoutQuestionInput | Prisma.McqAttemptUpdateWithWhereUniqueWithoutQuestionInput[];
    updateMany?: Prisma.McqAttemptUpdateManyWithWhereWithoutQuestionInput | Prisma.McqAttemptUpdateManyWithWhereWithoutQuestionInput[];
    deleteMany?: Prisma.McqAttemptScalarWhereInput | Prisma.McqAttemptScalarWhereInput[];
};
export type McqAttemptCreateWithoutStudentInput = {
    id?: string;
    selectedOpt: string;
    isCorrect: boolean;
    createdAt?: Date | string;
    question: Prisma.McqQuestionCreateNestedOneWithoutAttemptsInput;
};
export type McqAttemptUncheckedCreateWithoutStudentInput = {
    id?: string;
    questionId: string;
    selectedOpt: string;
    isCorrect: boolean;
    createdAt?: Date | string;
};
export type McqAttemptCreateOrConnectWithoutStudentInput = {
    where: Prisma.McqAttemptWhereUniqueInput;
    create: Prisma.XOR<Prisma.McqAttemptCreateWithoutStudentInput, Prisma.McqAttemptUncheckedCreateWithoutStudentInput>;
};
export type McqAttemptCreateManyStudentInputEnvelope = {
    data: Prisma.McqAttemptCreateManyStudentInput | Prisma.McqAttemptCreateManyStudentInput[];
    skipDuplicates?: boolean;
};
export type McqAttemptUpsertWithWhereUniqueWithoutStudentInput = {
    where: Prisma.McqAttemptWhereUniqueInput;
    update: Prisma.XOR<Prisma.McqAttemptUpdateWithoutStudentInput, Prisma.McqAttemptUncheckedUpdateWithoutStudentInput>;
    create: Prisma.XOR<Prisma.McqAttemptCreateWithoutStudentInput, Prisma.McqAttemptUncheckedCreateWithoutStudentInput>;
};
export type McqAttemptUpdateWithWhereUniqueWithoutStudentInput = {
    where: Prisma.McqAttemptWhereUniqueInput;
    data: Prisma.XOR<Prisma.McqAttemptUpdateWithoutStudentInput, Prisma.McqAttemptUncheckedUpdateWithoutStudentInput>;
};
export type McqAttemptUpdateManyWithWhereWithoutStudentInput = {
    where: Prisma.McqAttemptScalarWhereInput;
    data: Prisma.XOR<Prisma.McqAttemptUpdateManyMutationInput, Prisma.McqAttemptUncheckedUpdateManyWithoutStudentInput>;
};
export type McqAttemptScalarWhereInput = {
    AND?: Prisma.McqAttemptScalarWhereInput | Prisma.McqAttemptScalarWhereInput[];
    OR?: Prisma.McqAttemptScalarWhereInput[];
    NOT?: Prisma.McqAttemptScalarWhereInput | Prisma.McqAttemptScalarWhereInput[];
    id?: Prisma.StringFilter<"McqAttempt"> | string;
    studentId?: Prisma.StringFilter<"McqAttempt"> | string;
    questionId?: Prisma.StringFilter<"McqAttempt"> | string;
    selectedOpt?: Prisma.StringFilter<"McqAttempt"> | string;
    isCorrect?: Prisma.BoolFilter<"McqAttempt"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"McqAttempt"> | Date | string;
};
export type McqAttemptCreateWithoutQuestionInput = {
    id?: string;
    selectedOpt: string;
    isCorrect: boolean;
    createdAt?: Date | string;
    student: Prisma.StudentProfileCreateNestedOneWithoutMcqAttemptsInput;
};
export type McqAttemptUncheckedCreateWithoutQuestionInput = {
    id?: string;
    studentId: string;
    selectedOpt: string;
    isCorrect: boolean;
    createdAt?: Date | string;
};
export type McqAttemptCreateOrConnectWithoutQuestionInput = {
    where: Prisma.McqAttemptWhereUniqueInput;
    create: Prisma.XOR<Prisma.McqAttemptCreateWithoutQuestionInput, Prisma.McqAttemptUncheckedCreateWithoutQuestionInput>;
};
export type McqAttemptCreateManyQuestionInputEnvelope = {
    data: Prisma.McqAttemptCreateManyQuestionInput | Prisma.McqAttemptCreateManyQuestionInput[];
    skipDuplicates?: boolean;
};
export type McqAttemptUpsertWithWhereUniqueWithoutQuestionInput = {
    where: Prisma.McqAttemptWhereUniqueInput;
    update: Prisma.XOR<Prisma.McqAttemptUpdateWithoutQuestionInput, Prisma.McqAttemptUncheckedUpdateWithoutQuestionInput>;
    create: Prisma.XOR<Prisma.McqAttemptCreateWithoutQuestionInput, Prisma.McqAttemptUncheckedCreateWithoutQuestionInput>;
};
export type McqAttemptUpdateWithWhereUniqueWithoutQuestionInput = {
    where: Prisma.McqAttemptWhereUniqueInput;
    data: Prisma.XOR<Prisma.McqAttemptUpdateWithoutQuestionInput, Prisma.McqAttemptUncheckedUpdateWithoutQuestionInput>;
};
export type McqAttemptUpdateManyWithWhereWithoutQuestionInput = {
    where: Prisma.McqAttemptScalarWhereInput;
    data: Prisma.XOR<Prisma.McqAttemptUpdateManyMutationInput, Prisma.McqAttemptUncheckedUpdateManyWithoutQuestionInput>;
};
export type McqAttemptCreateManyStudentInput = {
    id?: string;
    questionId: string;
    selectedOpt: string;
    isCorrect: boolean;
    createdAt?: Date | string;
};
export type McqAttemptUpdateWithoutStudentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    selectedOpt?: Prisma.StringFieldUpdateOperationsInput | string;
    isCorrect?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    question?: Prisma.McqQuestionUpdateOneRequiredWithoutAttemptsNestedInput;
};
export type McqAttemptUncheckedUpdateWithoutStudentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    questionId?: Prisma.StringFieldUpdateOperationsInput | string;
    selectedOpt?: Prisma.StringFieldUpdateOperationsInput | string;
    isCorrect?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type McqAttemptUncheckedUpdateManyWithoutStudentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    questionId?: Prisma.StringFieldUpdateOperationsInput | string;
    selectedOpt?: Prisma.StringFieldUpdateOperationsInput | string;
    isCorrect?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type McqAttemptCreateManyQuestionInput = {
    id?: string;
    studentId: string;
    selectedOpt: string;
    isCorrect: boolean;
    createdAt?: Date | string;
};
export type McqAttemptUpdateWithoutQuestionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    selectedOpt?: Prisma.StringFieldUpdateOperationsInput | string;
    isCorrect?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    student?: Prisma.StudentProfileUpdateOneRequiredWithoutMcqAttemptsNestedInput;
};
export type McqAttemptUncheckedUpdateWithoutQuestionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    selectedOpt?: Prisma.StringFieldUpdateOperationsInput | string;
    isCorrect?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type McqAttemptUncheckedUpdateManyWithoutQuestionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    selectedOpt?: Prisma.StringFieldUpdateOperationsInput | string;
    isCorrect?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type McqAttemptSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    studentId?: boolean;
    questionId?: boolean;
    selectedOpt?: boolean;
    isCorrect?: boolean;
    createdAt?: boolean;
    student?: boolean | Prisma.StudentProfileDefaultArgs<ExtArgs>;
    question?: boolean | Prisma.McqQuestionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["mcqAttempt"]>;
export type McqAttemptSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    studentId?: boolean;
    questionId?: boolean;
    selectedOpt?: boolean;
    isCorrect?: boolean;
    createdAt?: boolean;
    student?: boolean | Prisma.StudentProfileDefaultArgs<ExtArgs>;
    question?: boolean | Prisma.McqQuestionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["mcqAttempt"]>;
export type McqAttemptSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    studentId?: boolean;
    questionId?: boolean;
    selectedOpt?: boolean;
    isCorrect?: boolean;
    createdAt?: boolean;
    student?: boolean | Prisma.StudentProfileDefaultArgs<ExtArgs>;
    question?: boolean | Prisma.McqQuestionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["mcqAttempt"]>;
export type McqAttemptSelectScalar = {
    id?: boolean;
    studentId?: boolean;
    questionId?: boolean;
    selectedOpt?: boolean;
    isCorrect?: boolean;
    createdAt?: boolean;
};
export type McqAttemptOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "studentId" | "questionId" | "selectedOpt" | "isCorrect" | "createdAt", ExtArgs["result"]["mcqAttempt"]>;
export type McqAttemptInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    student?: boolean | Prisma.StudentProfileDefaultArgs<ExtArgs>;
    question?: boolean | Prisma.McqQuestionDefaultArgs<ExtArgs>;
};
export type McqAttemptIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    student?: boolean | Prisma.StudentProfileDefaultArgs<ExtArgs>;
    question?: boolean | Prisma.McqQuestionDefaultArgs<ExtArgs>;
};
export type McqAttemptIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    student?: boolean | Prisma.StudentProfileDefaultArgs<ExtArgs>;
    question?: boolean | Prisma.McqQuestionDefaultArgs<ExtArgs>;
};
export type $McqAttemptPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "McqAttempt";
    objects: {
        student: Prisma.$StudentProfilePayload<ExtArgs>;
        question: Prisma.$McqQuestionPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        studentId: string;
        questionId: string;
        selectedOpt: string;
        isCorrect: boolean;
        createdAt: Date;
    }, ExtArgs["result"]["mcqAttempt"]>;
    composites: {};
};
export type McqAttemptGetPayload<S extends boolean | null | undefined | McqAttemptDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$McqAttemptPayload, S>;
export type McqAttemptCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<McqAttemptFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: McqAttemptCountAggregateInputType | true;
};
export interface McqAttemptDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['McqAttempt'];
        meta: {
            name: 'McqAttempt';
        };
    };
    /**
     * Find zero or one McqAttempt that matches the filter.
     * @param {McqAttemptFindUniqueArgs} args - Arguments to find a McqAttempt
     * @example
     * // Get one McqAttempt
     * const mcqAttempt = await prisma.mcqAttempt.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends McqAttemptFindUniqueArgs>(args: Prisma.SelectSubset<T, McqAttemptFindUniqueArgs<ExtArgs>>): Prisma.Prisma__McqAttemptClient<runtime.Types.Result.GetResult<Prisma.$McqAttemptPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one McqAttempt that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {McqAttemptFindUniqueOrThrowArgs} args - Arguments to find a McqAttempt
     * @example
     * // Get one McqAttempt
     * const mcqAttempt = await prisma.mcqAttempt.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends McqAttemptFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, McqAttemptFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__McqAttemptClient<runtime.Types.Result.GetResult<Prisma.$McqAttemptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first McqAttempt that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {McqAttemptFindFirstArgs} args - Arguments to find a McqAttempt
     * @example
     * // Get one McqAttempt
     * const mcqAttempt = await prisma.mcqAttempt.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends McqAttemptFindFirstArgs>(args?: Prisma.SelectSubset<T, McqAttemptFindFirstArgs<ExtArgs>>): Prisma.Prisma__McqAttemptClient<runtime.Types.Result.GetResult<Prisma.$McqAttemptPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first McqAttempt that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {McqAttemptFindFirstOrThrowArgs} args - Arguments to find a McqAttempt
     * @example
     * // Get one McqAttempt
     * const mcqAttempt = await prisma.mcqAttempt.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends McqAttemptFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, McqAttemptFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__McqAttemptClient<runtime.Types.Result.GetResult<Prisma.$McqAttemptPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more McqAttempts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {McqAttemptFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all McqAttempts
     * const mcqAttempts = await prisma.mcqAttempt.findMany()
     *
     * // Get first 10 McqAttempts
     * const mcqAttempts = await prisma.mcqAttempt.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const mcqAttemptWithIdOnly = await prisma.mcqAttempt.findMany({ select: { id: true } })
     *
     */
    findMany<T extends McqAttemptFindManyArgs>(args?: Prisma.SelectSubset<T, McqAttemptFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$McqAttemptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a McqAttempt.
     * @param {McqAttemptCreateArgs} args - Arguments to create a McqAttempt.
     * @example
     * // Create one McqAttempt
     * const McqAttempt = await prisma.mcqAttempt.create({
     *   data: {
     *     // ... data to create a McqAttempt
     *   }
     * })
     *
     */
    create<T extends McqAttemptCreateArgs>(args: Prisma.SelectSubset<T, McqAttemptCreateArgs<ExtArgs>>): Prisma.Prisma__McqAttemptClient<runtime.Types.Result.GetResult<Prisma.$McqAttemptPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many McqAttempts.
     * @param {McqAttemptCreateManyArgs} args - Arguments to create many McqAttempts.
     * @example
     * // Create many McqAttempts
     * const mcqAttempt = await prisma.mcqAttempt.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends McqAttemptCreateManyArgs>(args?: Prisma.SelectSubset<T, McqAttemptCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many McqAttempts and returns the data saved in the database.
     * @param {McqAttemptCreateManyAndReturnArgs} args - Arguments to create many McqAttempts.
     * @example
     * // Create many McqAttempts
     * const mcqAttempt = await prisma.mcqAttempt.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many McqAttempts and only return the `id`
     * const mcqAttemptWithIdOnly = await prisma.mcqAttempt.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends McqAttemptCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, McqAttemptCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$McqAttemptPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a McqAttempt.
     * @param {McqAttemptDeleteArgs} args - Arguments to delete one McqAttempt.
     * @example
     * // Delete one McqAttempt
     * const McqAttempt = await prisma.mcqAttempt.delete({
     *   where: {
     *     // ... filter to delete one McqAttempt
     *   }
     * })
     *
     */
    delete<T extends McqAttemptDeleteArgs>(args: Prisma.SelectSubset<T, McqAttemptDeleteArgs<ExtArgs>>): Prisma.Prisma__McqAttemptClient<runtime.Types.Result.GetResult<Prisma.$McqAttemptPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one McqAttempt.
     * @param {McqAttemptUpdateArgs} args - Arguments to update one McqAttempt.
     * @example
     * // Update one McqAttempt
     * const mcqAttempt = await prisma.mcqAttempt.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends McqAttemptUpdateArgs>(args: Prisma.SelectSubset<T, McqAttemptUpdateArgs<ExtArgs>>): Prisma.Prisma__McqAttemptClient<runtime.Types.Result.GetResult<Prisma.$McqAttemptPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more McqAttempts.
     * @param {McqAttemptDeleteManyArgs} args - Arguments to filter McqAttempts to delete.
     * @example
     * // Delete a few McqAttempts
     * const { count } = await prisma.mcqAttempt.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends McqAttemptDeleteManyArgs>(args?: Prisma.SelectSubset<T, McqAttemptDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more McqAttempts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {McqAttemptUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many McqAttempts
     * const mcqAttempt = await prisma.mcqAttempt.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends McqAttemptUpdateManyArgs>(args: Prisma.SelectSubset<T, McqAttemptUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more McqAttempts and returns the data updated in the database.
     * @param {McqAttemptUpdateManyAndReturnArgs} args - Arguments to update many McqAttempts.
     * @example
     * // Update many McqAttempts
     * const mcqAttempt = await prisma.mcqAttempt.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more McqAttempts and only return the `id`
     * const mcqAttemptWithIdOnly = await prisma.mcqAttempt.updateManyAndReturn({
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
    updateManyAndReturn<T extends McqAttemptUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, McqAttemptUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$McqAttemptPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one McqAttempt.
     * @param {McqAttemptUpsertArgs} args - Arguments to update or create a McqAttempt.
     * @example
     * // Update or create a McqAttempt
     * const mcqAttempt = await prisma.mcqAttempt.upsert({
     *   create: {
     *     // ... data to create a McqAttempt
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the McqAttempt we want to update
     *   }
     * })
     */
    upsert<T extends McqAttemptUpsertArgs>(args: Prisma.SelectSubset<T, McqAttemptUpsertArgs<ExtArgs>>): Prisma.Prisma__McqAttemptClient<runtime.Types.Result.GetResult<Prisma.$McqAttemptPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of McqAttempts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {McqAttemptCountArgs} args - Arguments to filter McqAttempts to count.
     * @example
     * // Count the number of McqAttempts
     * const count = await prisma.mcqAttempt.count({
     *   where: {
     *     // ... the filter for the McqAttempts we want to count
     *   }
     * })
    **/
    count<T extends McqAttemptCountArgs>(args?: Prisma.Subset<T, McqAttemptCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], McqAttemptCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a McqAttempt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {McqAttemptAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends McqAttemptAggregateArgs>(args: Prisma.Subset<T, McqAttemptAggregateArgs>): Prisma.PrismaPromise<GetMcqAttemptAggregateType<T>>;
    /**
     * Group by McqAttempt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {McqAttemptGroupByArgs} args - Group by arguments.
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
    groupBy<T extends McqAttemptGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: McqAttemptGroupByArgs['orderBy'];
    } : {
        orderBy?: McqAttemptGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, McqAttemptGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMcqAttemptGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the McqAttempt model
     */
    readonly fields: McqAttemptFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for McqAttempt.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__McqAttemptClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    student<T extends Prisma.StudentProfileDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.StudentProfileDefaultArgs<ExtArgs>>): Prisma.Prisma__StudentProfileClient<runtime.Types.Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    question<T extends Prisma.McqQuestionDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.McqQuestionDefaultArgs<ExtArgs>>): Prisma.Prisma__McqQuestionClient<runtime.Types.Result.GetResult<Prisma.$McqQuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the McqAttempt model
 */
export interface McqAttemptFieldRefs {
    readonly id: Prisma.FieldRef<"McqAttempt", 'String'>;
    readonly studentId: Prisma.FieldRef<"McqAttempt", 'String'>;
    readonly questionId: Prisma.FieldRef<"McqAttempt", 'String'>;
    readonly selectedOpt: Prisma.FieldRef<"McqAttempt", 'String'>;
    readonly isCorrect: Prisma.FieldRef<"McqAttempt", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"McqAttempt", 'DateTime'>;
}
/**
 * McqAttempt findUnique
 */
export type McqAttemptFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which McqAttempt to fetch.
     */
    where: Prisma.McqAttemptWhereUniqueInput;
};
/**
 * McqAttempt findUniqueOrThrow
 */
export type McqAttemptFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which McqAttempt to fetch.
     */
    where: Prisma.McqAttemptWhereUniqueInput;
};
/**
 * McqAttempt findFirst
 */
export type McqAttemptFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which McqAttempt to fetch.
     */
    where?: Prisma.McqAttemptWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of McqAttempts to fetch.
     */
    orderBy?: Prisma.McqAttemptOrderByWithRelationInput | Prisma.McqAttemptOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for McqAttempts.
     */
    cursor?: Prisma.McqAttemptWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` McqAttempts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` McqAttempts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of McqAttempts.
     */
    distinct?: Prisma.McqAttemptScalarFieldEnum | Prisma.McqAttemptScalarFieldEnum[];
};
/**
 * McqAttempt findFirstOrThrow
 */
export type McqAttemptFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which McqAttempt to fetch.
     */
    where?: Prisma.McqAttemptWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of McqAttempts to fetch.
     */
    orderBy?: Prisma.McqAttemptOrderByWithRelationInput | Prisma.McqAttemptOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for McqAttempts.
     */
    cursor?: Prisma.McqAttemptWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` McqAttempts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` McqAttempts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of McqAttempts.
     */
    distinct?: Prisma.McqAttemptScalarFieldEnum | Prisma.McqAttemptScalarFieldEnum[];
};
/**
 * McqAttempt findMany
 */
export type McqAttemptFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which McqAttempts to fetch.
     */
    where?: Prisma.McqAttemptWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of McqAttempts to fetch.
     */
    orderBy?: Prisma.McqAttemptOrderByWithRelationInput | Prisma.McqAttemptOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing McqAttempts.
     */
    cursor?: Prisma.McqAttemptWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` McqAttempts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` McqAttempts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of McqAttempts.
     */
    distinct?: Prisma.McqAttemptScalarFieldEnum | Prisma.McqAttemptScalarFieldEnum[];
};
/**
 * McqAttempt create
 */
export type McqAttemptCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a McqAttempt.
     */
    data: Prisma.XOR<Prisma.McqAttemptCreateInput, Prisma.McqAttemptUncheckedCreateInput>;
};
/**
 * McqAttempt createMany
 */
export type McqAttemptCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many McqAttempts.
     */
    data: Prisma.McqAttemptCreateManyInput | Prisma.McqAttemptCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * McqAttempt createManyAndReturn
 */
export type McqAttemptCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the McqAttempt
     */
    select?: Prisma.McqAttemptSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the McqAttempt
     */
    omit?: Prisma.McqAttemptOmit<ExtArgs> | null;
    /**
     * The data used to create many McqAttempts.
     */
    data: Prisma.McqAttemptCreateManyInput | Prisma.McqAttemptCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.McqAttemptIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * McqAttempt update
 */
export type McqAttemptUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a McqAttempt.
     */
    data: Prisma.XOR<Prisma.McqAttemptUpdateInput, Prisma.McqAttemptUncheckedUpdateInput>;
    /**
     * Choose, which McqAttempt to update.
     */
    where: Prisma.McqAttemptWhereUniqueInput;
};
/**
 * McqAttempt updateMany
 */
export type McqAttemptUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update McqAttempts.
     */
    data: Prisma.XOR<Prisma.McqAttemptUpdateManyMutationInput, Prisma.McqAttemptUncheckedUpdateManyInput>;
    /**
     * Filter which McqAttempts to update
     */
    where?: Prisma.McqAttemptWhereInput;
    /**
     * Limit how many McqAttempts to update.
     */
    limit?: number;
};
/**
 * McqAttempt updateManyAndReturn
 */
export type McqAttemptUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the McqAttempt
     */
    select?: Prisma.McqAttemptSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the McqAttempt
     */
    omit?: Prisma.McqAttemptOmit<ExtArgs> | null;
    /**
     * The data used to update McqAttempts.
     */
    data: Prisma.XOR<Prisma.McqAttemptUpdateManyMutationInput, Prisma.McqAttemptUncheckedUpdateManyInput>;
    /**
     * Filter which McqAttempts to update
     */
    where?: Prisma.McqAttemptWhereInput;
    /**
     * Limit how many McqAttempts to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.McqAttemptIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * McqAttempt upsert
 */
export type McqAttemptUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the McqAttempt to update in case it exists.
     */
    where: Prisma.McqAttemptWhereUniqueInput;
    /**
     * In case the McqAttempt found by the `where` argument doesn't exist, create a new McqAttempt with this data.
     */
    create: Prisma.XOR<Prisma.McqAttemptCreateInput, Prisma.McqAttemptUncheckedCreateInput>;
    /**
     * In case the McqAttempt was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.McqAttemptUpdateInput, Prisma.McqAttemptUncheckedUpdateInput>;
};
/**
 * McqAttempt delete
 */
export type McqAttemptDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which McqAttempt to delete.
     */
    where: Prisma.McqAttemptWhereUniqueInput;
};
/**
 * McqAttempt deleteMany
 */
export type McqAttemptDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which McqAttempts to delete
     */
    where?: Prisma.McqAttemptWhereInput;
    /**
     * Limit how many McqAttempts to delete.
     */
    limit?: number;
};
/**
 * McqAttempt without action
 */
export type McqAttemptDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
//# sourceMappingURL=McqAttempt.d.ts.map