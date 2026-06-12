import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.ts";
import type * as Prisma from "../internal/prismaNamespace.ts";
/**
 * Model Doubt
 *
 */
export type DoubtModel = runtime.Types.Result.DefaultSelection<Prisma.$DoubtPayload>;
export type AggregateDoubt = {
    _count: DoubtCountAggregateOutputType | null;
    _min: DoubtMinAggregateOutputType | null;
    _max: DoubtMaxAggregateOutputType | null;
};
export type DoubtMinAggregateOutputType = {
    id: string | null;
    studentId: string | null;
    subjectId: string | null;
    chapterId: string | null;
    text: string | null;
    status: $Enums.DoubtStatus | null;
    assignedTo: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type DoubtMaxAggregateOutputType = {
    id: string | null;
    studentId: string | null;
    subjectId: string | null;
    chapterId: string | null;
    text: string | null;
    status: $Enums.DoubtStatus | null;
    assignedTo: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type DoubtCountAggregateOutputType = {
    id: number;
    studentId: number;
    subjectId: number;
    chapterId: number;
    text: number;
    images: number;
    status: number;
    assignedTo: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type DoubtMinAggregateInputType = {
    id?: true;
    studentId?: true;
    subjectId?: true;
    chapterId?: true;
    text?: true;
    status?: true;
    assignedTo?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type DoubtMaxAggregateInputType = {
    id?: true;
    studentId?: true;
    subjectId?: true;
    chapterId?: true;
    text?: true;
    status?: true;
    assignedTo?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type DoubtCountAggregateInputType = {
    id?: true;
    studentId?: true;
    subjectId?: true;
    chapterId?: true;
    text?: true;
    images?: true;
    status?: true;
    assignedTo?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type DoubtAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Doubt to aggregate.
     */
    where?: Prisma.DoubtWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Doubts to fetch.
     */
    orderBy?: Prisma.DoubtOrderByWithRelationInput | Prisma.DoubtOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.DoubtWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Doubts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Doubts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Doubts
    **/
    _count?: true | DoubtCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: DoubtMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: DoubtMaxAggregateInputType;
};
export type GetDoubtAggregateType<T extends DoubtAggregateArgs> = {
    [P in keyof T & keyof AggregateDoubt]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDoubt[P]> : Prisma.GetScalarType<T[P], AggregateDoubt[P]>;
};
export type DoubtGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DoubtWhereInput;
    orderBy?: Prisma.DoubtOrderByWithAggregationInput | Prisma.DoubtOrderByWithAggregationInput[];
    by: Prisma.DoubtScalarFieldEnum[] | Prisma.DoubtScalarFieldEnum;
    having?: Prisma.DoubtScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DoubtCountAggregateInputType | true;
    _min?: DoubtMinAggregateInputType;
    _max?: DoubtMaxAggregateInputType;
};
export type DoubtGroupByOutputType = {
    id: string;
    studentId: string;
    subjectId: string | null;
    chapterId: string | null;
    text: string | null;
    images: string[];
    status: $Enums.DoubtStatus;
    assignedTo: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: DoubtCountAggregateOutputType | null;
    _min: DoubtMinAggregateOutputType | null;
    _max: DoubtMaxAggregateOutputType | null;
};
export type GetDoubtGroupByPayload<T extends DoubtGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DoubtGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DoubtGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DoubtGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DoubtGroupByOutputType[P]>;
}>>;
export type DoubtWhereInput = {
    AND?: Prisma.DoubtWhereInput | Prisma.DoubtWhereInput[];
    OR?: Prisma.DoubtWhereInput[];
    NOT?: Prisma.DoubtWhereInput | Prisma.DoubtWhereInput[];
    id?: Prisma.StringFilter<"Doubt"> | string;
    studentId?: Prisma.StringFilter<"Doubt"> | string;
    subjectId?: Prisma.StringNullableFilter<"Doubt"> | string | null;
    chapterId?: Prisma.StringNullableFilter<"Doubt"> | string | null;
    text?: Prisma.StringNullableFilter<"Doubt"> | string | null;
    images?: Prisma.StringNullableListFilter<"Doubt">;
    status?: Prisma.EnumDoubtStatusFilter<"Doubt"> | $Enums.DoubtStatus;
    assignedTo?: Prisma.StringNullableFilter<"Doubt"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Doubt"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Doubt"> | Date | string;
    student?: Prisma.XOR<Prisma.StudentProfileScalarRelationFilter, Prisma.StudentProfileWhereInput>;
    subject?: Prisma.XOR<Prisma.SubjectsNullableScalarRelationFilter, Prisma.SubjectsWhereInput> | null;
    chapter?: Prisma.XOR<Prisma.ChaptersNullableScalarRelationFilter, Prisma.ChaptersWhereInput> | null;
    teacher?: Prisma.XOR<Prisma.TeacherProfileNullableScalarRelationFilter, Prisma.TeacherProfileWhereInput> | null;
    messages?: Prisma.MessageListRelationFilter;
    feedback?: Prisma.XOR<Prisma.FeedbackNullableScalarRelationFilter, Prisma.FeedbackWhereInput> | null;
};
export type DoubtOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    subjectId?: Prisma.SortOrderInput | Prisma.SortOrder;
    chapterId?: Prisma.SortOrderInput | Prisma.SortOrder;
    text?: Prisma.SortOrderInput | Prisma.SortOrder;
    images?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    assignedTo?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    student?: Prisma.StudentProfileOrderByWithRelationInput;
    subject?: Prisma.SubjectsOrderByWithRelationInput;
    chapter?: Prisma.ChaptersOrderByWithRelationInput;
    teacher?: Prisma.TeacherProfileOrderByWithRelationInput;
    messages?: Prisma.MessageOrderByRelationAggregateInput;
    feedback?: Prisma.FeedbackOrderByWithRelationInput;
};
export type DoubtWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.DoubtWhereInput | Prisma.DoubtWhereInput[];
    OR?: Prisma.DoubtWhereInput[];
    NOT?: Prisma.DoubtWhereInput | Prisma.DoubtWhereInput[];
    studentId?: Prisma.StringFilter<"Doubt"> | string;
    subjectId?: Prisma.StringNullableFilter<"Doubt"> | string | null;
    chapterId?: Prisma.StringNullableFilter<"Doubt"> | string | null;
    text?: Prisma.StringNullableFilter<"Doubt"> | string | null;
    images?: Prisma.StringNullableListFilter<"Doubt">;
    status?: Prisma.EnumDoubtStatusFilter<"Doubt"> | $Enums.DoubtStatus;
    assignedTo?: Prisma.StringNullableFilter<"Doubt"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Doubt"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Doubt"> | Date | string;
    student?: Prisma.XOR<Prisma.StudentProfileScalarRelationFilter, Prisma.StudentProfileWhereInput>;
    subject?: Prisma.XOR<Prisma.SubjectsNullableScalarRelationFilter, Prisma.SubjectsWhereInput> | null;
    chapter?: Prisma.XOR<Prisma.ChaptersNullableScalarRelationFilter, Prisma.ChaptersWhereInput> | null;
    teacher?: Prisma.XOR<Prisma.TeacherProfileNullableScalarRelationFilter, Prisma.TeacherProfileWhereInput> | null;
    messages?: Prisma.MessageListRelationFilter;
    feedback?: Prisma.XOR<Prisma.FeedbackNullableScalarRelationFilter, Prisma.FeedbackWhereInput> | null;
}, "id">;
export type DoubtOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    subjectId?: Prisma.SortOrderInput | Prisma.SortOrder;
    chapterId?: Prisma.SortOrderInput | Prisma.SortOrder;
    text?: Prisma.SortOrderInput | Prisma.SortOrder;
    images?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    assignedTo?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.DoubtCountOrderByAggregateInput;
    _max?: Prisma.DoubtMaxOrderByAggregateInput;
    _min?: Prisma.DoubtMinOrderByAggregateInput;
};
export type DoubtScalarWhereWithAggregatesInput = {
    AND?: Prisma.DoubtScalarWhereWithAggregatesInput | Prisma.DoubtScalarWhereWithAggregatesInput[];
    OR?: Prisma.DoubtScalarWhereWithAggregatesInput[];
    NOT?: Prisma.DoubtScalarWhereWithAggregatesInput | Prisma.DoubtScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Doubt"> | string;
    studentId?: Prisma.StringWithAggregatesFilter<"Doubt"> | string;
    subjectId?: Prisma.StringNullableWithAggregatesFilter<"Doubt"> | string | null;
    chapterId?: Prisma.StringNullableWithAggregatesFilter<"Doubt"> | string | null;
    text?: Prisma.StringNullableWithAggregatesFilter<"Doubt"> | string | null;
    images?: Prisma.StringNullableListFilter<"Doubt">;
    status?: Prisma.EnumDoubtStatusWithAggregatesFilter<"Doubt"> | $Enums.DoubtStatus;
    assignedTo?: Prisma.StringNullableWithAggregatesFilter<"Doubt"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Doubt"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Doubt"> | Date | string;
};
export type DoubtCreateInput = {
    id?: string;
    text?: string | null;
    images?: Prisma.DoubtCreateimagesInput | string[];
    status?: $Enums.DoubtStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    student: Prisma.StudentProfileCreateNestedOneWithoutDoubtsInput;
    subject?: Prisma.SubjectsCreateNestedOneWithoutDoubtsInput;
    chapter?: Prisma.ChaptersCreateNestedOneWithoutDoubtsInput;
    teacher?: Prisma.TeacherProfileCreateNestedOneWithoutDoubtsInput;
    messages?: Prisma.MessageCreateNestedManyWithoutDoubtInput;
    feedback?: Prisma.FeedbackCreateNestedOneWithoutDoubtInput;
};
export type DoubtUncheckedCreateInput = {
    id?: string;
    studentId: string;
    subjectId?: string | null;
    chapterId?: string | null;
    text?: string | null;
    images?: Prisma.DoubtCreateimagesInput | string[];
    status?: $Enums.DoubtStatus;
    assignedTo?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    messages?: Prisma.MessageUncheckedCreateNestedManyWithoutDoubtInput;
    feedback?: Prisma.FeedbackUncheckedCreateNestedOneWithoutDoubtInput;
};
export type DoubtUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    text?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    images?: Prisma.DoubtUpdateimagesInput | string[];
    status?: Prisma.EnumDoubtStatusFieldUpdateOperationsInput | $Enums.DoubtStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    student?: Prisma.StudentProfileUpdateOneRequiredWithoutDoubtsNestedInput;
    subject?: Prisma.SubjectsUpdateOneWithoutDoubtsNestedInput;
    chapter?: Prisma.ChaptersUpdateOneWithoutDoubtsNestedInput;
    teacher?: Prisma.TeacherProfileUpdateOneWithoutDoubtsNestedInput;
    messages?: Prisma.MessageUpdateManyWithoutDoubtNestedInput;
    feedback?: Prisma.FeedbackUpdateOneWithoutDoubtNestedInput;
};
export type DoubtUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    subjectId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    chapterId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    text?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    images?: Prisma.DoubtUpdateimagesInput | string[];
    status?: Prisma.EnumDoubtStatusFieldUpdateOperationsInput | $Enums.DoubtStatus;
    assignedTo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    messages?: Prisma.MessageUncheckedUpdateManyWithoutDoubtNestedInput;
    feedback?: Prisma.FeedbackUncheckedUpdateOneWithoutDoubtNestedInput;
};
export type DoubtCreateManyInput = {
    id?: string;
    studentId: string;
    subjectId?: string | null;
    chapterId?: string | null;
    text?: string | null;
    images?: Prisma.DoubtCreateimagesInput | string[];
    status?: $Enums.DoubtStatus;
    assignedTo?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DoubtUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    text?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    images?: Prisma.DoubtUpdateimagesInput | string[];
    status?: Prisma.EnumDoubtStatusFieldUpdateOperationsInput | $Enums.DoubtStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DoubtUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    subjectId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    chapterId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    text?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    images?: Prisma.DoubtUpdateimagesInput | string[];
    status?: Prisma.EnumDoubtStatusFieldUpdateOperationsInput | $Enums.DoubtStatus;
    assignedTo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DoubtListRelationFilter = {
    every?: Prisma.DoubtWhereInput;
    some?: Prisma.DoubtWhereInput;
    none?: Prisma.DoubtWhereInput;
};
export type DoubtOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type DoubtCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    subjectId?: Prisma.SortOrder;
    chapterId?: Prisma.SortOrder;
    text?: Prisma.SortOrder;
    images?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    assignedTo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type DoubtMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    subjectId?: Prisma.SortOrder;
    chapterId?: Prisma.SortOrder;
    text?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    assignedTo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type DoubtMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    subjectId?: Prisma.SortOrder;
    chapterId?: Prisma.SortOrder;
    text?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    assignedTo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type DoubtNullableScalarRelationFilter = {
    is?: Prisma.DoubtWhereInput | null;
    isNot?: Prisma.DoubtWhereInput | null;
};
export type DoubtCreateNestedManyWithoutSubjectInput = {
    create?: Prisma.XOR<Prisma.DoubtCreateWithoutSubjectInput, Prisma.DoubtUncheckedCreateWithoutSubjectInput> | Prisma.DoubtCreateWithoutSubjectInput[] | Prisma.DoubtUncheckedCreateWithoutSubjectInput[];
    connectOrCreate?: Prisma.DoubtCreateOrConnectWithoutSubjectInput | Prisma.DoubtCreateOrConnectWithoutSubjectInput[];
    createMany?: Prisma.DoubtCreateManySubjectInputEnvelope;
    connect?: Prisma.DoubtWhereUniqueInput | Prisma.DoubtWhereUniqueInput[];
};
export type DoubtUncheckedCreateNestedManyWithoutSubjectInput = {
    create?: Prisma.XOR<Prisma.DoubtCreateWithoutSubjectInput, Prisma.DoubtUncheckedCreateWithoutSubjectInput> | Prisma.DoubtCreateWithoutSubjectInput[] | Prisma.DoubtUncheckedCreateWithoutSubjectInput[];
    connectOrCreate?: Prisma.DoubtCreateOrConnectWithoutSubjectInput | Prisma.DoubtCreateOrConnectWithoutSubjectInput[];
    createMany?: Prisma.DoubtCreateManySubjectInputEnvelope;
    connect?: Prisma.DoubtWhereUniqueInput | Prisma.DoubtWhereUniqueInput[];
};
export type DoubtUpdateManyWithoutSubjectNestedInput = {
    create?: Prisma.XOR<Prisma.DoubtCreateWithoutSubjectInput, Prisma.DoubtUncheckedCreateWithoutSubjectInput> | Prisma.DoubtCreateWithoutSubjectInput[] | Prisma.DoubtUncheckedCreateWithoutSubjectInput[];
    connectOrCreate?: Prisma.DoubtCreateOrConnectWithoutSubjectInput | Prisma.DoubtCreateOrConnectWithoutSubjectInput[];
    upsert?: Prisma.DoubtUpsertWithWhereUniqueWithoutSubjectInput | Prisma.DoubtUpsertWithWhereUniqueWithoutSubjectInput[];
    createMany?: Prisma.DoubtCreateManySubjectInputEnvelope;
    set?: Prisma.DoubtWhereUniqueInput | Prisma.DoubtWhereUniqueInput[];
    disconnect?: Prisma.DoubtWhereUniqueInput | Prisma.DoubtWhereUniqueInput[];
    delete?: Prisma.DoubtWhereUniqueInput | Prisma.DoubtWhereUniqueInput[];
    connect?: Prisma.DoubtWhereUniqueInput | Prisma.DoubtWhereUniqueInput[];
    update?: Prisma.DoubtUpdateWithWhereUniqueWithoutSubjectInput | Prisma.DoubtUpdateWithWhereUniqueWithoutSubjectInput[];
    updateMany?: Prisma.DoubtUpdateManyWithWhereWithoutSubjectInput | Prisma.DoubtUpdateManyWithWhereWithoutSubjectInput[];
    deleteMany?: Prisma.DoubtScalarWhereInput | Prisma.DoubtScalarWhereInput[];
};
export type DoubtUncheckedUpdateManyWithoutSubjectNestedInput = {
    create?: Prisma.XOR<Prisma.DoubtCreateWithoutSubjectInput, Prisma.DoubtUncheckedCreateWithoutSubjectInput> | Prisma.DoubtCreateWithoutSubjectInput[] | Prisma.DoubtUncheckedCreateWithoutSubjectInput[];
    connectOrCreate?: Prisma.DoubtCreateOrConnectWithoutSubjectInput | Prisma.DoubtCreateOrConnectWithoutSubjectInput[];
    upsert?: Prisma.DoubtUpsertWithWhereUniqueWithoutSubjectInput | Prisma.DoubtUpsertWithWhereUniqueWithoutSubjectInput[];
    createMany?: Prisma.DoubtCreateManySubjectInputEnvelope;
    set?: Prisma.DoubtWhereUniqueInput | Prisma.DoubtWhereUniqueInput[];
    disconnect?: Prisma.DoubtWhereUniqueInput | Prisma.DoubtWhereUniqueInput[];
    delete?: Prisma.DoubtWhereUniqueInput | Prisma.DoubtWhereUniqueInput[];
    connect?: Prisma.DoubtWhereUniqueInput | Prisma.DoubtWhereUniqueInput[];
    update?: Prisma.DoubtUpdateWithWhereUniqueWithoutSubjectInput | Prisma.DoubtUpdateWithWhereUniqueWithoutSubjectInput[];
    updateMany?: Prisma.DoubtUpdateManyWithWhereWithoutSubjectInput | Prisma.DoubtUpdateManyWithWhereWithoutSubjectInput[];
    deleteMany?: Prisma.DoubtScalarWhereInput | Prisma.DoubtScalarWhereInput[];
};
export type DoubtCreateNestedManyWithoutChapterInput = {
    create?: Prisma.XOR<Prisma.DoubtCreateWithoutChapterInput, Prisma.DoubtUncheckedCreateWithoutChapterInput> | Prisma.DoubtCreateWithoutChapterInput[] | Prisma.DoubtUncheckedCreateWithoutChapterInput[];
    connectOrCreate?: Prisma.DoubtCreateOrConnectWithoutChapterInput | Prisma.DoubtCreateOrConnectWithoutChapterInput[];
    createMany?: Prisma.DoubtCreateManyChapterInputEnvelope;
    connect?: Prisma.DoubtWhereUniqueInput | Prisma.DoubtWhereUniqueInput[];
};
export type DoubtUncheckedCreateNestedManyWithoutChapterInput = {
    create?: Prisma.XOR<Prisma.DoubtCreateWithoutChapterInput, Prisma.DoubtUncheckedCreateWithoutChapterInput> | Prisma.DoubtCreateWithoutChapterInput[] | Prisma.DoubtUncheckedCreateWithoutChapterInput[];
    connectOrCreate?: Prisma.DoubtCreateOrConnectWithoutChapterInput | Prisma.DoubtCreateOrConnectWithoutChapterInput[];
    createMany?: Prisma.DoubtCreateManyChapterInputEnvelope;
    connect?: Prisma.DoubtWhereUniqueInput | Prisma.DoubtWhereUniqueInput[];
};
export type DoubtUpdateManyWithoutChapterNestedInput = {
    create?: Prisma.XOR<Prisma.DoubtCreateWithoutChapterInput, Prisma.DoubtUncheckedCreateWithoutChapterInput> | Prisma.DoubtCreateWithoutChapterInput[] | Prisma.DoubtUncheckedCreateWithoutChapterInput[];
    connectOrCreate?: Prisma.DoubtCreateOrConnectWithoutChapterInput | Prisma.DoubtCreateOrConnectWithoutChapterInput[];
    upsert?: Prisma.DoubtUpsertWithWhereUniqueWithoutChapterInput | Prisma.DoubtUpsertWithWhereUniqueWithoutChapterInput[];
    createMany?: Prisma.DoubtCreateManyChapterInputEnvelope;
    set?: Prisma.DoubtWhereUniqueInput | Prisma.DoubtWhereUniqueInput[];
    disconnect?: Prisma.DoubtWhereUniqueInput | Prisma.DoubtWhereUniqueInput[];
    delete?: Prisma.DoubtWhereUniqueInput | Prisma.DoubtWhereUniqueInput[];
    connect?: Prisma.DoubtWhereUniqueInput | Prisma.DoubtWhereUniqueInput[];
    update?: Prisma.DoubtUpdateWithWhereUniqueWithoutChapterInput | Prisma.DoubtUpdateWithWhereUniqueWithoutChapterInput[];
    updateMany?: Prisma.DoubtUpdateManyWithWhereWithoutChapterInput | Prisma.DoubtUpdateManyWithWhereWithoutChapterInput[];
    deleteMany?: Prisma.DoubtScalarWhereInput | Prisma.DoubtScalarWhereInput[];
};
export type DoubtUncheckedUpdateManyWithoutChapterNestedInput = {
    create?: Prisma.XOR<Prisma.DoubtCreateWithoutChapterInput, Prisma.DoubtUncheckedCreateWithoutChapterInput> | Prisma.DoubtCreateWithoutChapterInput[] | Prisma.DoubtUncheckedCreateWithoutChapterInput[];
    connectOrCreate?: Prisma.DoubtCreateOrConnectWithoutChapterInput | Prisma.DoubtCreateOrConnectWithoutChapterInput[];
    upsert?: Prisma.DoubtUpsertWithWhereUniqueWithoutChapterInput | Prisma.DoubtUpsertWithWhereUniqueWithoutChapterInput[];
    createMany?: Prisma.DoubtCreateManyChapterInputEnvelope;
    set?: Prisma.DoubtWhereUniqueInput | Prisma.DoubtWhereUniqueInput[];
    disconnect?: Prisma.DoubtWhereUniqueInput | Prisma.DoubtWhereUniqueInput[];
    delete?: Prisma.DoubtWhereUniqueInput | Prisma.DoubtWhereUniqueInput[];
    connect?: Prisma.DoubtWhereUniqueInput | Prisma.DoubtWhereUniqueInput[];
    update?: Prisma.DoubtUpdateWithWhereUniqueWithoutChapterInput | Prisma.DoubtUpdateWithWhereUniqueWithoutChapterInput[];
    updateMany?: Prisma.DoubtUpdateManyWithWhereWithoutChapterInput | Prisma.DoubtUpdateManyWithWhereWithoutChapterInput[];
    deleteMany?: Prisma.DoubtScalarWhereInput | Prisma.DoubtScalarWhereInput[];
};
export type DoubtCreateNestedManyWithoutStudentInput = {
    create?: Prisma.XOR<Prisma.DoubtCreateWithoutStudentInput, Prisma.DoubtUncheckedCreateWithoutStudentInput> | Prisma.DoubtCreateWithoutStudentInput[] | Prisma.DoubtUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.DoubtCreateOrConnectWithoutStudentInput | Prisma.DoubtCreateOrConnectWithoutStudentInput[];
    createMany?: Prisma.DoubtCreateManyStudentInputEnvelope;
    connect?: Prisma.DoubtWhereUniqueInput | Prisma.DoubtWhereUniqueInput[];
};
export type DoubtUncheckedCreateNestedManyWithoutStudentInput = {
    create?: Prisma.XOR<Prisma.DoubtCreateWithoutStudentInput, Prisma.DoubtUncheckedCreateWithoutStudentInput> | Prisma.DoubtCreateWithoutStudentInput[] | Prisma.DoubtUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.DoubtCreateOrConnectWithoutStudentInput | Prisma.DoubtCreateOrConnectWithoutStudentInput[];
    createMany?: Prisma.DoubtCreateManyStudentInputEnvelope;
    connect?: Prisma.DoubtWhereUniqueInput | Prisma.DoubtWhereUniqueInput[];
};
export type DoubtUpdateManyWithoutStudentNestedInput = {
    create?: Prisma.XOR<Prisma.DoubtCreateWithoutStudentInput, Prisma.DoubtUncheckedCreateWithoutStudentInput> | Prisma.DoubtCreateWithoutStudentInput[] | Prisma.DoubtUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.DoubtCreateOrConnectWithoutStudentInput | Prisma.DoubtCreateOrConnectWithoutStudentInput[];
    upsert?: Prisma.DoubtUpsertWithWhereUniqueWithoutStudentInput | Prisma.DoubtUpsertWithWhereUniqueWithoutStudentInput[];
    createMany?: Prisma.DoubtCreateManyStudentInputEnvelope;
    set?: Prisma.DoubtWhereUniqueInput | Prisma.DoubtWhereUniqueInput[];
    disconnect?: Prisma.DoubtWhereUniqueInput | Prisma.DoubtWhereUniqueInput[];
    delete?: Prisma.DoubtWhereUniqueInput | Prisma.DoubtWhereUniqueInput[];
    connect?: Prisma.DoubtWhereUniqueInput | Prisma.DoubtWhereUniqueInput[];
    update?: Prisma.DoubtUpdateWithWhereUniqueWithoutStudentInput | Prisma.DoubtUpdateWithWhereUniqueWithoutStudentInput[];
    updateMany?: Prisma.DoubtUpdateManyWithWhereWithoutStudentInput | Prisma.DoubtUpdateManyWithWhereWithoutStudentInput[];
    deleteMany?: Prisma.DoubtScalarWhereInput | Prisma.DoubtScalarWhereInput[];
};
export type DoubtUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: Prisma.XOR<Prisma.DoubtCreateWithoutStudentInput, Prisma.DoubtUncheckedCreateWithoutStudentInput> | Prisma.DoubtCreateWithoutStudentInput[] | Prisma.DoubtUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.DoubtCreateOrConnectWithoutStudentInput | Prisma.DoubtCreateOrConnectWithoutStudentInput[];
    upsert?: Prisma.DoubtUpsertWithWhereUniqueWithoutStudentInput | Prisma.DoubtUpsertWithWhereUniqueWithoutStudentInput[];
    createMany?: Prisma.DoubtCreateManyStudentInputEnvelope;
    set?: Prisma.DoubtWhereUniqueInput | Prisma.DoubtWhereUniqueInput[];
    disconnect?: Prisma.DoubtWhereUniqueInput | Prisma.DoubtWhereUniqueInput[];
    delete?: Prisma.DoubtWhereUniqueInput | Prisma.DoubtWhereUniqueInput[];
    connect?: Prisma.DoubtWhereUniqueInput | Prisma.DoubtWhereUniqueInput[];
    update?: Prisma.DoubtUpdateWithWhereUniqueWithoutStudentInput | Prisma.DoubtUpdateWithWhereUniqueWithoutStudentInput[];
    updateMany?: Prisma.DoubtUpdateManyWithWhereWithoutStudentInput | Prisma.DoubtUpdateManyWithWhereWithoutStudentInput[];
    deleteMany?: Prisma.DoubtScalarWhereInput | Prisma.DoubtScalarWhereInput[];
};
export type DoubtCreateNestedManyWithoutTeacherInput = {
    create?: Prisma.XOR<Prisma.DoubtCreateWithoutTeacherInput, Prisma.DoubtUncheckedCreateWithoutTeacherInput> | Prisma.DoubtCreateWithoutTeacherInput[] | Prisma.DoubtUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: Prisma.DoubtCreateOrConnectWithoutTeacherInput | Prisma.DoubtCreateOrConnectWithoutTeacherInput[];
    createMany?: Prisma.DoubtCreateManyTeacherInputEnvelope;
    connect?: Prisma.DoubtWhereUniqueInput | Prisma.DoubtWhereUniqueInput[];
};
export type DoubtUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: Prisma.XOR<Prisma.DoubtCreateWithoutTeacherInput, Prisma.DoubtUncheckedCreateWithoutTeacherInput> | Prisma.DoubtCreateWithoutTeacherInput[] | Prisma.DoubtUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: Prisma.DoubtCreateOrConnectWithoutTeacherInput | Prisma.DoubtCreateOrConnectWithoutTeacherInput[];
    createMany?: Prisma.DoubtCreateManyTeacherInputEnvelope;
    connect?: Prisma.DoubtWhereUniqueInput | Prisma.DoubtWhereUniqueInput[];
};
export type DoubtUpdateManyWithoutTeacherNestedInput = {
    create?: Prisma.XOR<Prisma.DoubtCreateWithoutTeacherInput, Prisma.DoubtUncheckedCreateWithoutTeacherInput> | Prisma.DoubtCreateWithoutTeacherInput[] | Prisma.DoubtUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: Prisma.DoubtCreateOrConnectWithoutTeacherInput | Prisma.DoubtCreateOrConnectWithoutTeacherInput[];
    upsert?: Prisma.DoubtUpsertWithWhereUniqueWithoutTeacherInput | Prisma.DoubtUpsertWithWhereUniqueWithoutTeacherInput[];
    createMany?: Prisma.DoubtCreateManyTeacherInputEnvelope;
    set?: Prisma.DoubtWhereUniqueInput | Prisma.DoubtWhereUniqueInput[];
    disconnect?: Prisma.DoubtWhereUniqueInput | Prisma.DoubtWhereUniqueInput[];
    delete?: Prisma.DoubtWhereUniqueInput | Prisma.DoubtWhereUniqueInput[];
    connect?: Prisma.DoubtWhereUniqueInput | Prisma.DoubtWhereUniqueInput[];
    update?: Prisma.DoubtUpdateWithWhereUniqueWithoutTeacherInput | Prisma.DoubtUpdateWithWhereUniqueWithoutTeacherInput[];
    updateMany?: Prisma.DoubtUpdateManyWithWhereWithoutTeacherInput | Prisma.DoubtUpdateManyWithWhereWithoutTeacherInput[];
    deleteMany?: Prisma.DoubtScalarWhereInput | Prisma.DoubtScalarWhereInput[];
};
export type DoubtUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: Prisma.XOR<Prisma.DoubtCreateWithoutTeacherInput, Prisma.DoubtUncheckedCreateWithoutTeacherInput> | Prisma.DoubtCreateWithoutTeacherInput[] | Prisma.DoubtUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: Prisma.DoubtCreateOrConnectWithoutTeacherInput | Prisma.DoubtCreateOrConnectWithoutTeacherInput[];
    upsert?: Prisma.DoubtUpsertWithWhereUniqueWithoutTeacherInput | Prisma.DoubtUpsertWithWhereUniqueWithoutTeacherInput[];
    createMany?: Prisma.DoubtCreateManyTeacherInputEnvelope;
    set?: Prisma.DoubtWhereUniqueInput | Prisma.DoubtWhereUniqueInput[];
    disconnect?: Prisma.DoubtWhereUniqueInput | Prisma.DoubtWhereUniqueInput[];
    delete?: Prisma.DoubtWhereUniqueInput | Prisma.DoubtWhereUniqueInput[];
    connect?: Prisma.DoubtWhereUniqueInput | Prisma.DoubtWhereUniqueInput[];
    update?: Prisma.DoubtUpdateWithWhereUniqueWithoutTeacherInput | Prisma.DoubtUpdateWithWhereUniqueWithoutTeacherInput[];
    updateMany?: Prisma.DoubtUpdateManyWithWhereWithoutTeacherInput | Prisma.DoubtUpdateManyWithWhereWithoutTeacherInput[];
    deleteMany?: Prisma.DoubtScalarWhereInput | Prisma.DoubtScalarWhereInput[];
};
export type DoubtCreateimagesInput = {
    set: string[];
};
export type DoubtUpdateimagesInput = {
    set?: string[];
    push?: string | string[];
};
export type EnumDoubtStatusFieldUpdateOperationsInput = {
    set?: $Enums.DoubtStatus;
};
export type DoubtCreateNestedOneWithoutMessagesInput = {
    create?: Prisma.XOR<Prisma.DoubtCreateWithoutMessagesInput, Prisma.DoubtUncheckedCreateWithoutMessagesInput>;
    connectOrCreate?: Prisma.DoubtCreateOrConnectWithoutMessagesInput;
    connect?: Prisma.DoubtWhereUniqueInput;
};
export type DoubtUpdateOneWithoutMessagesNestedInput = {
    create?: Prisma.XOR<Prisma.DoubtCreateWithoutMessagesInput, Prisma.DoubtUncheckedCreateWithoutMessagesInput>;
    connectOrCreate?: Prisma.DoubtCreateOrConnectWithoutMessagesInput;
    upsert?: Prisma.DoubtUpsertWithoutMessagesInput;
    disconnect?: Prisma.DoubtWhereInput | boolean;
    delete?: Prisma.DoubtWhereInput | boolean;
    connect?: Prisma.DoubtWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.DoubtUpdateToOneWithWhereWithoutMessagesInput, Prisma.DoubtUpdateWithoutMessagesInput>, Prisma.DoubtUncheckedUpdateWithoutMessagesInput>;
};
export type DoubtCreateNestedOneWithoutFeedbackInput = {
    create?: Prisma.XOR<Prisma.DoubtCreateWithoutFeedbackInput, Prisma.DoubtUncheckedCreateWithoutFeedbackInput>;
    connectOrCreate?: Prisma.DoubtCreateOrConnectWithoutFeedbackInput;
    connect?: Prisma.DoubtWhereUniqueInput;
};
export type DoubtUpdateOneWithoutFeedbackNestedInput = {
    create?: Prisma.XOR<Prisma.DoubtCreateWithoutFeedbackInput, Prisma.DoubtUncheckedCreateWithoutFeedbackInput>;
    connectOrCreate?: Prisma.DoubtCreateOrConnectWithoutFeedbackInput;
    upsert?: Prisma.DoubtUpsertWithoutFeedbackInput;
    disconnect?: Prisma.DoubtWhereInput | boolean;
    delete?: Prisma.DoubtWhereInput | boolean;
    connect?: Prisma.DoubtWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.DoubtUpdateToOneWithWhereWithoutFeedbackInput, Prisma.DoubtUpdateWithoutFeedbackInput>, Prisma.DoubtUncheckedUpdateWithoutFeedbackInput>;
};
export type DoubtCreateWithoutSubjectInput = {
    id?: string;
    text?: string | null;
    images?: Prisma.DoubtCreateimagesInput | string[];
    status?: $Enums.DoubtStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    student: Prisma.StudentProfileCreateNestedOneWithoutDoubtsInput;
    chapter?: Prisma.ChaptersCreateNestedOneWithoutDoubtsInput;
    teacher?: Prisma.TeacherProfileCreateNestedOneWithoutDoubtsInput;
    messages?: Prisma.MessageCreateNestedManyWithoutDoubtInput;
    feedback?: Prisma.FeedbackCreateNestedOneWithoutDoubtInput;
};
export type DoubtUncheckedCreateWithoutSubjectInput = {
    id?: string;
    studentId: string;
    chapterId?: string | null;
    text?: string | null;
    images?: Prisma.DoubtCreateimagesInput | string[];
    status?: $Enums.DoubtStatus;
    assignedTo?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    messages?: Prisma.MessageUncheckedCreateNestedManyWithoutDoubtInput;
    feedback?: Prisma.FeedbackUncheckedCreateNestedOneWithoutDoubtInput;
};
export type DoubtCreateOrConnectWithoutSubjectInput = {
    where: Prisma.DoubtWhereUniqueInput;
    create: Prisma.XOR<Prisma.DoubtCreateWithoutSubjectInput, Prisma.DoubtUncheckedCreateWithoutSubjectInput>;
};
export type DoubtCreateManySubjectInputEnvelope = {
    data: Prisma.DoubtCreateManySubjectInput | Prisma.DoubtCreateManySubjectInput[];
    skipDuplicates?: boolean;
};
export type DoubtUpsertWithWhereUniqueWithoutSubjectInput = {
    where: Prisma.DoubtWhereUniqueInput;
    update: Prisma.XOR<Prisma.DoubtUpdateWithoutSubjectInput, Prisma.DoubtUncheckedUpdateWithoutSubjectInput>;
    create: Prisma.XOR<Prisma.DoubtCreateWithoutSubjectInput, Prisma.DoubtUncheckedCreateWithoutSubjectInput>;
};
export type DoubtUpdateWithWhereUniqueWithoutSubjectInput = {
    where: Prisma.DoubtWhereUniqueInput;
    data: Prisma.XOR<Prisma.DoubtUpdateWithoutSubjectInput, Prisma.DoubtUncheckedUpdateWithoutSubjectInput>;
};
export type DoubtUpdateManyWithWhereWithoutSubjectInput = {
    where: Prisma.DoubtScalarWhereInput;
    data: Prisma.XOR<Prisma.DoubtUpdateManyMutationInput, Prisma.DoubtUncheckedUpdateManyWithoutSubjectInput>;
};
export type DoubtScalarWhereInput = {
    AND?: Prisma.DoubtScalarWhereInput | Prisma.DoubtScalarWhereInput[];
    OR?: Prisma.DoubtScalarWhereInput[];
    NOT?: Prisma.DoubtScalarWhereInput | Prisma.DoubtScalarWhereInput[];
    id?: Prisma.StringFilter<"Doubt"> | string;
    studentId?: Prisma.StringFilter<"Doubt"> | string;
    subjectId?: Prisma.StringNullableFilter<"Doubt"> | string | null;
    chapterId?: Prisma.StringNullableFilter<"Doubt"> | string | null;
    text?: Prisma.StringNullableFilter<"Doubt"> | string | null;
    images?: Prisma.StringNullableListFilter<"Doubt">;
    status?: Prisma.EnumDoubtStatusFilter<"Doubt"> | $Enums.DoubtStatus;
    assignedTo?: Prisma.StringNullableFilter<"Doubt"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Doubt"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Doubt"> | Date | string;
};
export type DoubtCreateWithoutChapterInput = {
    id?: string;
    text?: string | null;
    images?: Prisma.DoubtCreateimagesInput | string[];
    status?: $Enums.DoubtStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    student: Prisma.StudentProfileCreateNestedOneWithoutDoubtsInput;
    subject?: Prisma.SubjectsCreateNestedOneWithoutDoubtsInput;
    teacher?: Prisma.TeacherProfileCreateNestedOneWithoutDoubtsInput;
    messages?: Prisma.MessageCreateNestedManyWithoutDoubtInput;
    feedback?: Prisma.FeedbackCreateNestedOneWithoutDoubtInput;
};
export type DoubtUncheckedCreateWithoutChapterInput = {
    id?: string;
    studentId: string;
    subjectId?: string | null;
    text?: string | null;
    images?: Prisma.DoubtCreateimagesInput | string[];
    status?: $Enums.DoubtStatus;
    assignedTo?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    messages?: Prisma.MessageUncheckedCreateNestedManyWithoutDoubtInput;
    feedback?: Prisma.FeedbackUncheckedCreateNestedOneWithoutDoubtInput;
};
export type DoubtCreateOrConnectWithoutChapterInput = {
    where: Prisma.DoubtWhereUniqueInput;
    create: Prisma.XOR<Prisma.DoubtCreateWithoutChapterInput, Prisma.DoubtUncheckedCreateWithoutChapterInput>;
};
export type DoubtCreateManyChapterInputEnvelope = {
    data: Prisma.DoubtCreateManyChapterInput | Prisma.DoubtCreateManyChapterInput[];
    skipDuplicates?: boolean;
};
export type DoubtUpsertWithWhereUniqueWithoutChapterInput = {
    where: Prisma.DoubtWhereUniqueInput;
    update: Prisma.XOR<Prisma.DoubtUpdateWithoutChapterInput, Prisma.DoubtUncheckedUpdateWithoutChapterInput>;
    create: Prisma.XOR<Prisma.DoubtCreateWithoutChapterInput, Prisma.DoubtUncheckedCreateWithoutChapterInput>;
};
export type DoubtUpdateWithWhereUniqueWithoutChapterInput = {
    where: Prisma.DoubtWhereUniqueInput;
    data: Prisma.XOR<Prisma.DoubtUpdateWithoutChapterInput, Prisma.DoubtUncheckedUpdateWithoutChapterInput>;
};
export type DoubtUpdateManyWithWhereWithoutChapterInput = {
    where: Prisma.DoubtScalarWhereInput;
    data: Prisma.XOR<Prisma.DoubtUpdateManyMutationInput, Prisma.DoubtUncheckedUpdateManyWithoutChapterInput>;
};
export type DoubtCreateWithoutStudentInput = {
    id?: string;
    text?: string | null;
    images?: Prisma.DoubtCreateimagesInput | string[];
    status?: $Enums.DoubtStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    subject?: Prisma.SubjectsCreateNestedOneWithoutDoubtsInput;
    chapter?: Prisma.ChaptersCreateNestedOneWithoutDoubtsInput;
    teacher?: Prisma.TeacherProfileCreateNestedOneWithoutDoubtsInput;
    messages?: Prisma.MessageCreateNestedManyWithoutDoubtInput;
    feedback?: Prisma.FeedbackCreateNestedOneWithoutDoubtInput;
};
export type DoubtUncheckedCreateWithoutStudentInput = {
    id?: string;
    subjectId?: string | null;
    chapterId?: string | null;
    text?: string | null;
    images?: Prisma.DoubtCreateimagesInput | string[];
    status?: $Enums.DoubtStatus;
    assignedTo?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    messages?: Prisma.MessageUncheckedCreateNestedManyWithoutDoubtInput;
    feedback?: Prisma.FeedbackUncheckedCreateNestedOneWithoutDoubtInput;
};
export type DoubtCreateOrConnectWithoutStudentInput = {
    where: Prisma.DoubtWhereUniqueInput;
    create: Prisma.XOR<Prisma.DoubtCreateWithoutStudentInput, Prisma.DoubtUncheckedCreateWithoutStudentInput>;
};
export type DoubtCreateManyStudentInputEnvelope = {
    data: Prisma.DoubtCreateManyStudentInput | Prisma.DoubtCreateManyStudentInput[];
    skipDuplicates?: boolean;
};
export type DoubtUpsertWithWhereUniqueWithoutStudentInput = {
    where: Prisma.DoubtWhereUniqueInput;
    update: Prisma.XOR<Prisma.DoubtUpdateWithoutStudentInput, Prisma.DoubtUncheckedUpdateWithoutStudentInput>;
    create: Prisma.XOR<Prisma.DoubtCreateWithoutStudentInput, Prisma.DoubtUncheckedCreateWithoutStudentInput>;
};
export type DoubtUpdateWithWhereUniqueWithoutStudentInput = {
    where: Prisma.DoubtWhereUniqueInput;
    data: Prisma.XOR<Prisma.DoubtUpdateWithoutStudentInput, Prisma.DoubtUncheckedUpdateWithoutStudentInput>;
};
export type DoubtUpdateManyWithWhereWithoutStudentInput = {
    where: Prisma.DoubtScalarWhereInput;
    data: Prisma.XOR<Prisma.DoubtUpdateManyMutationInput, Prisma.DoubtUncheckedUpdateManyWithoutStudentInput>;
};
export type DoubtCreateWithoutTeacherInput = {
    id?: string;
    text?: string | null;
    images?: Prisma.DoubtCreateimagesInput | string[];
    status?: $Enums.DoubtStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    student: Prisma.StudentProfileCreateNestedOneWithoutDoubtsInput;
    subject?: Prisma.SubjectsCreateNestedOneWithoutDoubtsInput;
    chapter?: Prisma.ChaptersCreateNestedOneWithoutDoubtsInput;
    messages?: Prisma.MessageCreateNestedManyWithoutDoubtInput;
    feedback?: Prisma.FeedbackCreateNestedOneWithoutDoubtInput;
};
export type DoubtUncheckedCreateWithoutTeacherInput = {
    id?: string;
    studentId: string;
    subjectId?: string | null;
    chapterId?: string | null;
    text?: string | null;
    images?: Prisma.DoubtCreateimagesInput | string[];
    status?: $Enums.DoubtStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    messages?: Prisma.MessageUncheckedCreateNestedManyWithoutDoubtInput;
    feedback?: Prisma.FeedbackUncheckedCreateNestedOneWithoutDoubtInput;
};
export type DoubtCreateOrConnectWithoutTeacherInput = {
    where: Prisma.DoubtWhereUniqueInput;
    create: Prisma.XOR<Prisma.DoubtCreateWithoutTeacherInput, Prisma.DoubtUncheckedCreateWithoutTeacherInput>;
};
export type DoubtCreateManyTeacherInputEnvelope = {
    data: Prisma.DoubtCreateManyTeacherInput | Prisma.DoubtCreateManyTeacherInput[];
    skipDuplicates?: boolean;
};
export type DoubtUpsertWithWhereUniqueWithoutTeacherInput = {
    where: Prisma.DoubtWhereUniqueInput;
    update: Prisma.XOR<Prisma.DoubtUpdateWithoutTeacherInput, Prisma.DoubtUncheckedUpdateWithoutTeacherInput>;
    create: Prisma.XOR<Prisma.DoubtCreateWithoutTeacherInput, Prisma.DoubtUncheckedCreateWithoutTeacherInput>;
};
export type DoubtUpdateWithWhereUniqueWithoutTeacherInput = {
    where: Prisma.DoubtWhereUniqueInput;
    data: Prisma.XOR<Prisma.DoubtUpdateWithoutTeacherInput, Prisma.DoubtUncheckedUpdateWithoutTeacherInput>;
};
export type DoubtUpdateManyWithWhereWithoutTeacherInput = {
    where: Prisma.DoubtScalarWhereInput;
    data: Prisma.XOR<Prisma.DoubtUpdateManyMutationInput, Prisma.DoubtUncheckedUpdateManyWithoutTeacherInput>;
};
export type DoubtCreateWithoutMessagesInput = {
    id?: string;
    text?: string | null;
    images?: Prisma.DoubtCreateimagesInput | string[];
    status?: $Enums.DoubtStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    student: Prisma.StudentProfileCreateNestedOneWithoutDoubtsInput;
    subject?: Prisma.SubjectsCreateNestedOneWithoutDoubtsInput;
    chapter?: Prisma.ChaptersCreateNestedOneWithoutDoubtsInput;
    teacher?: Prisma.TeacherProfileCreateNestedOneWithoutDoubtsInput;
    feedback?: Prisma.FeedbackCreateNestedOneWithoutDoubtInput;
};
export type DoubtUncheckedCreateWithoutMessagesInput = {
    id?: string;
    studentId: string;
    subjectId?: string | null;
    chapterId?: string | null;
    text?: string | null;
    images?: Prisma.DoubtCreateimagesInput | string[];
    status?: $Enums.DoubtStatus;
    assignedTo?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    feedback?: Prisma.FeedbackUncheckedCreateNestedOneWithoutDoubtInput;
};
export type DoubtCreateOrConnectWithoutMessagesInput = {
    where: Prisma.DoubtWhereUniqueInput;
    create: Prisma.XOR<Prisma.DoubtCreateWithoutMessagesInput, Prisma.DoubtUncheckedCreateWithoutMessagesInput>;
};
export type DoubtUpsertWithoutMessagesInput = {
    update: Prisma.XOR<Prisma.DoubtUpdateWithoutMessagesInput, Prisma.DoubtUncheckedUpdateWithoutMessagesInput>;
    create: Prisma.XOR<Prisma.DoubtCreateWithoutMessagesInput, Prisma.DoubtUncheckedCreateWithoutMessagesInput>;
    where?: Prisma.DoubtWhereInput;
};
export type DoubtUpdateToOneWithWhereWithoutMessagesInput = {
    where?: Prisma.DoubtWhereInput;
    data: Prisma.XOR<Prisma.DoubtUpdateWithoutMessagesInput, Prisma.DoubtUncheckedUpdateWithoutMessagesInput>;
};
export type DoubtUpdateWithoutMessagesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    text?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    images?: Prisma.DoubtUpdateimagesInput | string[];
    status?: Prisma.EnumDoubtStatusFieldUpdateOperationsInput | $Enums.DoubtStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    student?: Prisma.StudentProfileUpdateOneRequiredWithoutDoubtsNestedInput;
    subject?: Prisma.SubjectsUpdateOneWithoutDoubtsNestedInput;
    chapter?: Prisma.ChaptersUpdateOneWithoutDoubtsNestedInput;
    teacher?: Prisma.TeacherProfileUpdateOneWithoutDoubtsNestedInput;
    feedback?: Prisma.FeedbackUpdateOneWithoutDoubtNestedInput;
};
export type DoubtUncheckedUpdateWithoutMessagesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    subjectId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    chapterId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    text?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    images?: Prisma.DoubtUpdateimagesInput | string[];
    status?: Prisma.EnumDoubtStatusFieldUpdateOperationsInput | $Enums.DoubtStatus;
    assignedTo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    feedback?: Prisma.FeedbackUncheckedUpdateOneWithoutDoubtNestedInput;
};
export type DoubtCreateWithoutFeedbackInput = {
    id?: string;
    text?: string | null;
    images?: Prisma.DoubtCreateimagesInput | string[];
    status?: $Enums.DoubtStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    student: Prisma.StudentProfileCreateNestedOneWithoutDoubtsInput;
    subject?: Prisma.SubjectsCreateNestedOneWithoutDoubtsInput;
    chapter?: Prisma.ChaptersCreateNestedOneWithoutDoubtsInput;
    teacher?: Prisma.TeacherProfileCreateNestedOneWithoutDoubtsInput;
    messages?: Prisma.MessageCreateNestedManyWithoutDoubtInput;
};
export type DoubtUncheckedCreateWithoutFeedbackInput = {
    id?: string;
    studentId: string;
    subjectId?: string | null;
    chapterId?: string | null;
    text?: string | null;
    images?: Prisma.DoubtCreateimagesInput | string[];
    status?: $Enums.DoubtStatus;
    assignedTo?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    messages?: Prisma.MessageUncheckedCreateNestedManyWithoutDoubtInput;
};
export type DoubtCreateOrConnectWithoutFeedbackInput = {
    where: Prisma.DoubtWhereUniqueInput;
    create: Prisma.XOR<Prisma.DoubtCreateWithoutFeedbackInput, Prisma.DoubtUncheckedCreateWithoutFeedbackInput>;
};
export type DoubtUpsertWithoutFeedbackInput = {
    update: Prisma.XOR<Prisma.DoubtUpdateWithoutFeedbackInput, Prisma.DoubtUncheckedUpdateWithoutFeedbackInput>;
    create: Prisma.XOR<Prisma.DoubtCreateWithoutFeedbackInput, Prisma.DoubtUncheckedCreateWithoutFeedbackInput>;
    where?: Prisma.DoubtWhereInput;
};
export type DoubtUpdateToOneWithWhereWithoutFeedbackInput = {
    where?: Prisma.DoubtWhereInput;
    data: Prisma.XOR<Prisma.DoubtUpdateWithoutFeedbackInput, Prisma.DoubtUncheckedUpdateWithoutFeedbackInput>;
};
export type DoubtUpdateWithoutFeedbackInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    text?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    images?: Prisma.DoubtUpdateimagesInput | string[];
    status?: Prisma.EnumDoubtStatusFieldUpdateOperationsInput | $Enums.DoubtStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    student?: Prisma.StudentProfileUpdateOneRequiredWithoutDoubtsNestedInput;
    subject?: Prisma.SubjectsUpdateOneWithoutDoubtsNestedInput;
    chapter?: Prisma.ChaptersUpdateOneWithoutDoubtsNestedInput;
    teacher?: Prisma.TeacherProfileUpdateOneWithoutDoubtsNestedInput;
    messages?: Prisma.MessageUpdateManyWithoutDoubtNestedInput;
};
export type DoubtUncheckedUpdateWithoutFeedbackInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    subjectId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    chapterId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    text?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    images?: Prisma.DoubtUpdateimagesInput | string[];
    status?: Prisma.EnumDoubtStatusFieldUpdateOperationsInput | $Enums.DoubtStatus;
    assignedTo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    messages?: Prisma.MessageUncheckedUpdateManyWithoutDoubtNestedInput;
};
export type DoubtCreateManySubjectInput = {
    id?: string;
    studentId: string;
    chapterId?: string | null;
    text?: string | null;
    images?: Prisma.DoubtCreateimagesInput | string[];
    status?: $Enums.DoubtStatus;
    assignedTo?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DoubtUpdateWithoutSubjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    text?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    images?: Prisma.DoubtUpdateimagesInput | string[];
    status?: Prisma.EnumDoubtStatusFieldUpdateOperationsInput | $Enums.DoubtStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    student?: Prisma.StudentProfileUpdateOneRequiredWithoutDoubtsNestedInput;
    chapter?: Prisma.ChaptersUpdateOneWithoutDoubtsNestedInput;
    teacher?: Prisma.TeacherProfileUpdateOneWithoutDoubtsNestedInput;
    messages?: Prisma.MessageUpdateManyWithoutDoubtNestedInput;
    feedback?: Prisma.FeedbackUpdateOneWithoutDoubtNestedInput;
};
export type DoubtUncheckedUpdateWithoutSubjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    chapterId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    text?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    images?: Prisma.DoubtUpdateimagesInput | string[];
    status?: Prisma.EnumDoubtStatusFieldUpdateOperationsInput | $Enums.DoubtStatus;
    assignedTo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    messages?: Prisma.MessageUncheckedUpdateManyWithoutDoubtNestedInput;
    feedback?: Prisma.FeedbackUncheckedUpdateOneWithoutDoubtNestedInput;
};
export type DoubtUncheckedUpdateManyWithoutSubjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    chapterId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    text?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    images?: Prisma.DoubtUpdateimagesInput | string[];
    status?: Prisma.EnumDoubtStatusFieldUpdateOperationsInput | $Enums.DoubtStatus;
    assignedTo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DoubtCreateManyChapterInput = {
    id?: string;
    studentId: string;
    subjectId?: string | null;
    text?: string | null;
    images?: Prisma.DoubtCreateimagesInput | string[];
    status?: $Enums.DoubtStatus;
    assignedTo?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DoubtUpdateWithoutChapterInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    text?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    images?: Prisma.DoubtUpdateimagesInput | string[];
    status?: Prisma.EnumDoubtStatusFieldUpdateOperationsInput | $Enums.DoubtStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    student?: Prisma.StudentProfileUpdateOneRequiredWithoutDoubtsNestedInput;
    subject?: Prisma.SubjectsUpdateOneWithoutDoubtsNestedInput;
    teacher?: Prisma.TeacherProfileUpdateOneWithoutDoubtsNestedInput;
    messages?: Prisma.MessageUpdateManyWithoutDoubtNestedInput;
    feedback?: Prisma.FeedbackUpdateOneWithoutDoubtNestedInput;
};
export type DoubtUncheckedUpdateWithoutChapterInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    subjectId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    text?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    images?: Prisma.DoubtUpdateimagesInput | string[];
    status?: Prisma.EnumDoubtStatusFieldUpdateOperationsInput | $Enums.DoubtStatus;
    assignedTo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    messages?: Prisma.MessageUncheckedUpdateManyWithoutDoubtNestedInput;
    feedback?: Prisma.FeedbackUncheckedUpdateOneWithoutDoubtNestedInput;
};
export type DoubtUncheckedUpdateManyWithoutChapterInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    subjectId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    text?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    images?: Prisma.DoubtUpdateimagesInput | string[];
    status?: Prisma.EnumDoubtStatusFieldUpdateOperationsInput | $Enums.DoubtStatus;
    assignedTo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DoubtCreateManyStudentInput = {
    id?: string;
    subjectId?: string | null;
    chapterId?: string | null;
    text?: string | null;
    images?: Prisma.DoubtCreateimagesInput | string[];
    status?: $Enums.DoubtStatus;
    assignedTo?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DoubtUpdateWithoutStudentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    text?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    images?: Prisma.DoubtUpdateimagesInput | string[];
    status?: Prisma.EnumDoubtStatusFieldUpdateOperationsInput | $Enums.DoubtStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    subject?: Prisma.SubjectsUpdateOneWithoutDoubtsNestedInput;
    chapter?: Prisma.ChaptersUpdateOneWithoutDoubtsNestedInput;
    teacher?: Prisma.TeacherProfileUpdateOneWithoutDoubtsNestedInput;
    messages?: Prisma.MessageUpdateManyWithoutDoubtNestedInput;
    feedback?: Prisma.FeedbackUpdateOneWithoutDoubtNestedInput;
};
export type DoubtUncheckedUpdateWithoutStudentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    subjectId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    chapterId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    text?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    images?: Prisma.DoubtUpdateimagesInput | string[];
    status?: Prisma.EnumDoubtStatusFieldUpdateOperationsInput | $Enums.DoubtStatus;
    assignedTo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    messages?: Prisma.MessageUncheckedUpdateManyWithoutDoubtNestedInput;
    feedback?: Prisma.FeedbackUncheckedUpdateOneWithoutDoubtNestedInput;
};
export type DoubtUncheckedUpdateManyWithoutStudentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    subjectId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    chapterId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    text?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    images?: Prisma.DoubtUpdateimagesInput | string[];
    status?: Prisma.EnumDoubtStatusFieldUpdateOperationsInput | $Enums.DoubtStatus;
    assignedTo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DoubtCreateManyTeacherInput = {
    id?: string;
    studentId: string;
    subjectId?: string | null;
    chapterId?: string | null;
    text?: string | null;
    images?: Prisma.DoubtCreateimagesInput | string[];
    status?: $Enums.DoubtStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DoubtUpdateWithoutTeacherInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    text?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    images?: Prisma.DoubtUpdateimagesInput | string[];
    status?: Prisma.EnumDoubtStatusFieldUpdateOperationsInput | $Enums.DoubtStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    student?: Prisma.StudentProfileUpdateOneRequiredWithoutDoubtsNestedInput;
    subject?: Prisma.SubjectsUpdateOneWithoutDoubtsNestedInput;
    chapter?: Prisma.ChaptersUpdateOneWithoutDoubtsNestedInput;
    messages?: Prisma.MessageUpdateManyWithoutDoubtNestedInput;
    feedback?: Prisma.FeedbackUpdateOneWithoutDoubtNestedInput;
};
export type DoubtUncheckedUpdateWithoutTeacherInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    subjectId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    chapterId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    text?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    images?: Prisma.DoubtUpdateimagesInput | string[];
    status?: Prisma.EnumDoubtStatusFieldUpdateOperationsInput | $Enums.DoubtStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    messages?: Prisma.MessageUncheckedUpdateManyWithoutDoubtNestedInput;
    feedback?: Prisma.FeedbackUncheckedUpdateOneWithoutDoubtNestedInput;
};
export type DoubtUncheckedUpdateManyWithoutTeacherInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    subjectId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    chapterId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    text?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    images?: Prisma.DoubtUpdateimagesInput | string[];
    status?: Prisma.EnumDoubtStatusFieldUpdateOperationsInput | $Enums.DoubtStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type DoubtCountOutputType
 */
export type DoubtCountOutputType = {
    messages: number;
};
export type DoubtCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    messages?: boolean | DoubtCountOutputTypeCountMessagesArgs;
};
/**
 * DoubtCountOutputType without action
 */
export type DoubtCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoubtCountOutputType
     */
    select?: Prisma.DoubtCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * DoubtCountOutputType without action
 */
export type DoubtCountOutputTypeCountMessagesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MessageWhereInput;
};
export type DoubtSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    studentId?: boolean;
    subjectId?: boolean;
    chapterId?: boolean;
    text?: boolean;
    images?: boolean;
    status?: boolean;
    assignedTo?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    student?: boolean | Prisma.StudentProfileDefaultArgs<ExtArgs>;
    subject?: boolean | Prisma.Doubt$subjectArgs<ExtArgs>;
    chapter?: boolean | Prisma.Doubt$chapterArgs<ExtArgs>;
    teacher?: boolean | Prisma.Doubt$teacherArgs<ExtArgs>;
    messages?: boolean | Prisma.Doubt$messagesArgs<ExtArgs>;
    feedback?: boolean | Prisma.Doubt$feedbackArgs<ExtArgs>;
    _count?: boolean | Prisma.DoubtCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["doubt"]>;
export type DoubtSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    studentId?: boolean;
    subjectId?: boolean;
    chapterId?: boolean;
    text?: boolean;
    images?: boolean;
    status?: boolean;
    assignedTo?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    student?: boolean | Prisma.StudentProfileDefaultArgs<ExtArgs>;
    subject?: boolean | Prisma.Doubt$subjectArgs<ExtArgs>;
    chapter?: boolean | Prisma.Doubt$chapterArgs<ExtArgs>;
    teacher?: boolean | Prisma.Doubt$teacherArgs<ExtArgs>;
}, ExtArgs["result"]["doubt"]>;
export type DoubtSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    studentId?: boolean;
    subjectId?: boolean;
    chapterId?: boolean;
    text?: boolean;
    images?: boolean;
    status?: boolean;
    assignedTo?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    student?: boolean | Prisma.StudentProfileDefaultArgs<ExtArgs>;
    subject?: boolean | Prisma.Doubt$subjectArgs<ExtArgs>;
    chapter?: boolean | Prisma.Doubt$chapterArgs<ExtArgs>;
    teacher?: boolean | Prisma.Doubt$teacherArgs<ExtArgs>;
}, ExtArgs["result"]["doubt"]>;
export type DoubtSelectScalar = {
    id?: boolean;
    studentId?: boolean;
    subjectId?: boolean;
    chapterId?: boolean;
    text?: boolean;
    images?: boolean;
    status?: boolean;
    assignedTo?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type DoubtOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "studentId" | "subjectId" | "chapterId" | "text" | "images" | "status" | "assignedTo" | "createdAt" | "updatedAt", ExtArgs["result"]["doubt"]>;
export type DoubtInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    student?: boolean | Prisma.StudentProfileDefaultArgs<ExtArgs>;
    subject?: boolean | Prisma.Doubt$subjectArgs<ExtArgs>;
    chapter?: boolean | Prisma.Doubt$chapterArgs<ExtArgs>;
    teacher?: boolean | Prisma.Doubt$teacherArgs<ExtArgs>;
    messages?: boolean | Prisma.Doubt$messagesArgs<ExtArgs>;
    feedback?: boolean | Prisma.Doubt$feedbackArgs<ExtArgs>;
    _count?: boolean | Prisma.DoubtCountOutputTypeDefaultArgs<ExtArgs>;
};
export type DoubtIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    student?: boolean | Prisma.StudentProfileDefaultArgs<ExtArgs>;
    subject?: boolean | Prisma.Doubt$subjectArgs<ExtArgs>;
    chapter?: boolean | Prisma.Doubt$chapterArgs<ExtArgs>;
    teacher?: boolean | Prisma.Doubt$teacherArgs<ExtArgs>;
};
export type DoubtIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    student?: boolean | Prisma.StudentProfileDefaultArgs<ExtArgs>;
    subject?: boolean | Prisma.Doubt$subjectArgs<ExtArgs>;
    chapter?: boolean | Prisma.Doubt$chapterArgs<ExtArgs>;
    teacher?: boolean | Prisma.Doubt$teacherArgs<ExtArgs>;
};
export type $DoubtPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Doubt";
    objects: {
        student: Prisma.$StudentProfilePayload<ExtArgs>;
        subject: Prisma.$SubjectsPayload<ExtArgs> | null;
        chapter: Prisma.$ChaptersPayload<ExtArgs> | null;
        teacher: Prisma.$TeacherProfilePayload<ExtArgs> | null;
        messages: Prisma.$MessagePayload<ExtArgs>[];
        feedback: Prisma.$FeedbackPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        studentId: string;
        subjectId: string | null;
        chapterId: string | null;
        text: string | null;
        images: string[];
        status: $Enums.DoubtStatus;
        assignedTo: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["doubt"]>;
    composites: {};
};
export type DoubtGetPayload<S extends boolean | null | undefined | DoubtDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$DoubtPayload, S>;
export type DoubtCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<DoubtFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DoubtCountAggregateInputType | true;
};
export interface DoubtDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Doubt'];
        meta: {
            name: 'Doubt';
        };
    };
    /**
     * Find zero or one Doubt that matches the filter.
     * @param {DoubtFindUniqueArgs} args - Arguments to find a Doubt
     * @example
     * // Get one Doubt
     * const doubt = await prisma.doubt.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DoubtFindUniqueArgs>(args: Prisma.SelectSubset<T, DoubtFindUniqueArgs<ExtArgs>>): Prisma.Prisma__DoubtClient<runtime.Types.Result.GetResult<Prisma.$DoubtPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Doubt that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DoubtFindUniqueOrThrowArgs} args - Arguments to find a Doubt
     * @example
     * // Get one Doubt
     * const doubt = await prisma.doubt.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DoubtFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, DoubtFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__DoubtClient<runtime.Types.Result.GetResult<Prisma.$DoubtPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Doubt that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoubtFindFirstArgs} args - Arguments to find a Doubt
     * @example
     * // Get one Doubt
     * const doubt = await prisma.doubt.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DoubtFindFirstArgs>(args?: Prisma.SelectSubset<T, DoubtFindFirstArgs<ExtArgs>>): Prisma.Prisma__DoubtClient<runtime.Types.Result.GetResult<Prisma.$DoubtPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Doubt that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoubtFindFirstOrThrowArgs} args - Arguments to find a Doubt
     * @example
     * // Get one Doubt
     * const doubt = await prisma.doubt.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DoubtFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, DoubtFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__DoubtClient<runtime.Types.Result.GetResult<Prisma.$DoubtPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Doubts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoubtFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Doubts
     * const doubts = await prisma.doubt.findMany()
     *
     * // Get first 10 Doubts
     * const doubts = await prisma.doubt.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const doubtWithIdOnly = await prisma.doubt.findMany({ select: { id: true } })
     *
     */
    findMany<T extends DoubtFindManyArgs>(args?: Prisma.SelectSubset<T, DoubtFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DoubtPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Doubt.
     * @param {DoubtCreateArgs} args - Arguments to create a Doubt.
     * @example
     * // Create one Doubt
     * const Doubt = await prisma.doubt.create({
     *   data: {
     *     // ... data to create a Doubt
     *   }
     * })
     *
     */
    create<T extends DoubtCreateArgs>(args: Prisma.SelectSubset<T, DoubtCreateArgs<ExtArgs>>): Prisma.Prisma__DoubtClient<runtime.Types.Result.GetResult<Prisma.$DoubtPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Doubts.
     * @param {DoubtCreateManyArgs} args - Arguments to create many Doubts.
     * @example
     * // Create many Doubts
     * const doubt = await prisma.doubt.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends DoubtCreateManyArgs>(args?: Prisma.SelectSubset<T, DoubtCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Doubts and returns the data saved in the database.
     * @param {DoubtCreateManyAndReturnArgs} args - Arguments to create many Doubts.
     * @example
     * // Create many Doubts
     * const doubt = await prisma.doubt.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Doubts and only return the `id`
     * const doubtWithIdOnly = await prisma.doubt.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends DoubtCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, DoubtCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DoubtPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Doubt.
     * @param {DoubtDeleteArgs} args - Arguments to delete one Doubt.
     * @example
     * // Delete one Doubt
     * const Doubt = await prisma.doubt.delete({
     *   where: {
     *     // ... filter to delete one Doubt
     *   }
     * })
     *
     */
    delete<T extends DoubtDeleteArgs>(args: Prisma.SelectSubset<T, DoubtDeleteArgs<ExtArgs>>): Prisma.Prisma__DoubtClient<runtime.Types.Result.GetResult<Prisma.$DoubtPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Doubt.
     * @param {DoubtUpdateArgs} args - Arguments to update one Doubt.
     * @example
     * // Update one Doubt
     * const doubt = await prisma.doubt.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends DoubtUpdateArgs>(args: Prisma.SelectSubset<T, DoubtUpdateArgs<ExtArgs>>): Prisma.Prisma__DoubtClient<runtime.Types.Result.GetResult<Prisma.$DoubtPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Doubts.
     * @param {DoubtDeleteManyArgs} args - Arguments to filter Doubts to delete.
     * @example
     * // Delete a few Doubts
     * const { count } = await prisma.doubt.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends DoubtDeleteManyArgs>(args?: Prisma.SelectSubset<T, DoubtDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Doubts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoubtUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Doubts
     * const doubt = await prisma.doubt.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends DoubtUpdateManyArgs>(args: Prisma.SelectSubset<T, DoubtUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Doubts and returns the data updated in the database.
     * @param {DoubtUpdateManyAndReturnArgs} args - Arguments to update many Doubts.
     * @example
     * // Update many Doubts
     * const doubt = await prisma.doubt.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Doubts and only return the `id`
     * const doubtWithIdOnly = await prisma.doubt.updateManyAndReturn({
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
    updateManyAndReturn<T extends DoubtUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, DoubtUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DoubtPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Doubt.
     * @param {DoubtUpsertArgs} args - Arguments to update or create a Doubt.
     * @example
     * // Update or create a Doubt
     * const doubt = await prisma.doubt.upsert({
     *   create: {
     *     // ... data to create a Doubt
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Doubt we want to update
     *   }
     * })
     */
    upsert<T extends DoubtUpsertArgs>(args: Prisma.SelectSubset<T, DoubtUpsertArgs<ExtArgs>>): Prisma.Prisma__DoubtClient<runtime.Types.Result.GetResult<Prisma.$DoubtPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Doubts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoubtCountArgs} args - Arguments to filter Doubts to count.
     * @example
     * // Count the number of Doubts
     * const count = await prisma.doubt.count({
     *   where: {
     *     // ... the filter for the Doubts we want to count
     *   }
     * })
    **/
    count<T extends DoubtCountArgs>(args?: Prisma.Subset<T, DoubtCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DoubtCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Doubt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoubtAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DoubtAggregateArgs>(args: Prisma.Subset<T, DoubtAggregateArgs>): Prisma.PrismaPromise<GetDoubtAggregateType<T>>;
    /**
     * Group by Doubt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoubtGroupByArgs} args - Group by arguments.
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
    groupBy<T extends DoubtGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: DoubtGroupByArgs['orderBy'];
    } : {
        orderBy?: DoubtGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, DoubtGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDoubtGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Doubt model
     */
    readonly fields: DoubtFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Doubt.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__DoubtClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    student<T extends Prisma.StudentProfileDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.StudentProfileDefaultArgs<ExtArgs>>): Prisma.Prisma__StudentProfileClient<runtime.Types.Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    subject<T extends Prisma.Doubt$subjectArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Doubt$subjectArgs<ExtArgs>>): Prisma.Prisma__SubjectsClient<runtime.Types.Result.GetResult<Prisma.$SubjectsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    chapter<T extends Prisma.Doubt$chapterArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Doubt$chapterArgs<ExtArgs>>): Prisma.Prisma__ChaptersClient<runtime.Types.Result.GetResult<Prisma.$ChaptersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    teacher<T extends Prisma.Doubt$teacherArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Doubt$teacherArgs<ExtArgs>>): Prisma.Prisma__TeacherProfileClient<runtime.Types.Result.GetResult<Prisma.$TeacherProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    messages<T extends Prisma.Doubt$messagesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Doubt$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    feedback<T extends Prisma.Doubt$feedbackArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Doubt$feedbackArgs<ExtArgs>>): Prisma.Prisma__FeedbackClient<runtime.Types.Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the Doubt model
 */
export interface DoubtFieldRefs {
    readonly id: Prisma.FieldRef<"Doubt", 'String'>;
    readonly studentId: Prisma.FieldRef<"Doubt", 'String'>;
    readonly subjectId: Prisma.FieldRef<"Doubt", 'String'>;
    readonly chapterId: Prisma.FieldRef<"Doubt", 'String'>;
    readonly text: Prisma.FieldRef<"Doubt", 'String'>;
    readonly images: Prisma.FieldRef<"Doubt", 'String[]'>;
    readonly status: Prisma.FieldRef<"Doubt", 'DoubtStatus'>;
    readonly assignedTo: Prisma.FieldRef<"Doubt", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Doubt", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Doubt", 'DateTime'>;
}
/**
 * Doubt findUnique
 */
export type DoubtFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Doubt to fetch.
     */
    where: Prisma.DoubtWhereUniqueInput;
};
/**
 * Doubt findUniqueOrThrow
 */
export type DoubtFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Doubt to fetch.
     */
    where: Prisma.DoubtWhereUniqueInput;
};
/**
 * Doubt findFirst
 */
export type DoubtFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Doubt to fetch.
     */
    where?: Prisma.DoubtWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Doubts to fetch.
     */
    orderBy?: Prisma.DoubtOrderByWithRelationInput | Prisma.DoubtOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Doubts.
     */
    cursor?: Prisma.DoubtWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Doubts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Doubts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Doubts.
     */
    distinct?: Prisma.DoubtScalarFieldEnum | Prisma.DoubtScalarFieldEnum[];
};
/**
 * Doubt findFirstOrThrow
 */
export type DoubtFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Doubt to fetch.
     */
    where?: Prisma.DoubtWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Doubts to fetch.
     */
    orderBy?: Prisma.DoubtOrderByWithRelationInput | Prisma.DoubtOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Doubts.
     */
    cursor?: Prisma.DoubtWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Doubts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Doubts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Doubts.
     */
    distinct?: Prisma.DoubtScalarFieldEnum | Prisma.DoubtScalarFieldEnum[];
};
/**
 * Doubt findMany
 */
export type DoubtFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Doubts to fetch.
     */
    where?: Prisma.DoubtWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Doubts to fetch.
     */
    orderBy?: Prisma.DoubtOrderByWithRelationInput | Prisma.DoubtOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Doubts.
     */
    cursor?: Prisma.DoubtWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Doubts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Doubts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Doubts.
     */
    distinct?: Prisma.DoubtScalarFieldEnum | Prisma.DoubtScalarFieldEnum[];
};
/**
 * Doubt create
 */
export type DoubtCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a Doubt.
     */
    data: Prisma.XOR<Prisma.DoubtCreateInput, Prisma.DoubtUncheckedCreateInput>;
};
/**
 * Doubt createMany
 */
export type DoubtCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Doubts.
     */
    data: Prisma.DoubtCreateManyInput | Prisma.DoubtCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Doubt createManyAndReturn
 */
export type DoubtCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doubt
     */
    select?: Prisma.DoubtSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Doubt
     */
    omit?: Prisma.DoubtOmit<ExtArgs> | null;
    /**
     * The data used to create many Doubts.
     */
    data: Prisma.DoubtCreateManyInput | Prisma.DoubtCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DoubtIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Doubt update
 */
export type DoubtUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a Doubt.
     */
    data: Prisma.XOR<Prisma.DoubtUpdateInput, Prisma.DoubtUncheckedUpdateInput>;
    /**
     * Choose, which Doubt to update.
     */
    where: Prisma.DoubtWhereUniqueInput;
};
/**
 * Doubt updateMany
 */
export type DoubtUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Doubts.
     */
    data: Prisma.XOR<Prisma.DoubtUpdateManyMutationInput, Prisma.DoubtUncheckedUpdateManyInput>;
    /**
     * Filter which Doubts to update
     */
    where?: Prisma.DoubtWhereInput;
    /**
     * Limit how many Doubts to update.
     */
    limit?: number;
};
/**
 * Doubt updateManyAndReturn
 */
export type DoubtUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doubt
     */
    select?: Prisma.DoubtSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Doubt
     */
    omit?: Prisma.DoubtOmit<ExtArgs> | null;
    /**
     * The data used to update Doubts.
     */
    data: Prisma.XOR<Prisma.DoubtUpdateManyMutationInput, Prisma.DoubtUncheckedUpdateManyInput>;
    /**
     * Filter which Doubts to update
     */
    where?: Prisma.DoubtWhereInput;
    /**
     * Limit how many Doubts to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DoubtIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Doubt upsert
 */
export type DoubtUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the Doubt to update in case it exists.
     */
    where: Prisma.DoubtWhereUniqueInput;
    /**
     * In case the Doubt found by the `where` argument doesn't exist, create a new Doubt with this data.
     */
    create: Prisma.XOR<Prisma.DoubtCreateInput, Prisma.DoubtUncheckedCreateInput>;
    /**
     * In case the Doubt was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.DoubtUpdateInput, Prisma.DoubtUncheckedUpdateInput>;
};
/**
 * Doubt delete
 */
export type DoubtDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which Doubt to delete.
     */
    where: Prisma.DoubtWhereUniqueInput;
};
/**
 * Doubt deleteMany
 */
export type DoubtDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Doubts to delete
     */
    where?: Prisma.DoubtWhereInput;
    /**
     * Limit how many Doubts to delete.
     */
    limit?: number;
};
/**
 * Doubt.subject
 */
export type Doubt$subjectArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subjects
     */
    select?: Prisma.SubjectsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Subjects
     */
    omit?: Prisma.SubjectsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SubjectsInclude<ExtArgs> | null;
    where?: Prisma.SubjectsWhereInput;
};
/**
 * Doubt.chapter
 */
export type Doubt$chapterArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapters
     */
    select?: Prisma.ChaptersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Chapters
     */
    omit?: Prisma.ChaptersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ChaptersInclude<ExtArgs> | null;
    where?: Prisma.ChaptersWhereInput;
};
/**
 * Doubt.teacher
 */
export type Doubt$teacherArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * Doubt.messages
 */
export type Doubt$messagesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: Prisma.MessageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Message
     */
    omit?: Prisma.MessageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MessageInclude<ExtArgs> | null;
    where?: Prisma.MessageWhereInput;
    orderBy?: Prisma.MessageOrderByWithRelationInput | Prisma.MessageOrderByWithRelationInput[];
    cursor?: Prisma.MessageWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MessageScalarFieldEnum | Prisma.MessageScalarFieldEnum[];
};
/**
 * Doubt.feedback
 */
export type Doubt$feedbackArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
/**
 * Doubt without action
 */
export type DoubtDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
//# sourceMappingURL=Doubt.d.ts.map