import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.ts";
/**
 * Model Subjects
 *
 */
export type SubjectsModel = runtime.Types.Result.DefaultSelection<Prisma.$SubjectsPayload>;
export type AggregateSubjects = {
    _count: SubjectsCountAggregateOutputType | null;
    _min: SubjectsMinAggregateOutputType | null;
    _max: SubjectsMaxAggregateOutputType | null;
};
export type SubjectsMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    class: string | null;
    code: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type SubjectsMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    class: string | null;
    code: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type SubjectsCountAggregateOutputType = {
    id: number;
    name: number;
    class: number;
    code: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type SubjectsMinAggregateInputType = {
    id?: true;
    name?: true;
    class?: true;
    code?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type SubjectsMaxAggregateInputType = {
    id?: true;
    name?: true;
    class?: true;
    code?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type SubjectsCountAggregateInputType = {
    id?: true;
    name?: true;
    class?: true;
    code?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type SubjectsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Subjects to aggregate.
     */
    where?: Prisma.SubjectsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Subjects to fetch.
     */
    orderBy?: Prisma.SubjectsOrderByWithRelationInput | Prisma.SubjectsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.SubjectsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Subjects.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Subjects
    **/
    _count?: true | SubjectsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: SubjectsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: SubjectsMaxAggregateInputType;
};
export type GetSubjectsAggregateType<T extends SubjectsAggregateArgs> = {
    [P in keyof T & keyof AggregateSubjects]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSubjects[P]> : Prisma.GetScalarType<T[P], AggregateSubjects[P]>;
};
export type SubjectsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SubjectsWhereInput;
    orderBy?: Prisma.SubjectsOrderByWithAggregationInput | Prisma.SubjectsOrderByWithAggregationInput[];
    by: Prisma.SubjectsScalarFieldEnum[] | Prisma.SubjectsScalarFieldEnum;
    having?: Prisma.SubjectsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SubjectsCountAggregateInputType | true;
    _min?: SubjectsMinAggregateInputType;
    _max?: SubjectsMaxAggregateInputType;
};
export type SubjectsGroupByOutputType = {
    id: string;
    name: string;
    class: string;
    code: string;
    createdAt: Date;
    updatedAt: Date;
    _count: SubjectsCountAggregateOutputType | null;
    _min: SubjectsMinAggregateOutputType | null;
    _max: SubjectsMaxAggregateOutputType | null;
};
export type GetSubjectsGroupByPayload<T extends SubjectsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SubjectsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SubjectsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SubjectsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SubjectsGroupByOutputType[P]>;
}>>;
export type SubjectsWhereInput = {
    AND?: Prisma.SubjectsWhereInput | Prisma.SubjectsWhereInput[];
    OR?: Prisma.SubjectsWhereInput[];
    NOT?: Prisma.SubjectsWhereInput | Prisma.SubjectsWhereInput[];
    id?: Prisma.StringFilter<"Subjects"> | string;
    name?: Prisma.StringFilter<"Subjects"> | string;
    class?: Prisma.StringFilter<"Subjects"> | string;
    code?: Prisma.StringFilter<"Subjects"> | string;
    createdAt?: Prisma.DateTimeFilter<"Subjects"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Subjects"> | Date | string;
    chapters?: Prisma.ChaptersListRelationFilter;
    doubts?: Prisma.DoubtListRelationFilter;
    mcqQuestions?: Prisma.McqQuestionListRelationFilter;
};
export type SubjectsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    class?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    chapters?: Prisma.ChaptersOrderByRelationAggregateInput;
    doubts?: Prisma.DoubtOrderByRelationAggregateInput;
    mcqQuestions?: Prisma.McqQuestionOrderByRelationAggregateInput;
};
export type SubjectsWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    code?: string;
    AND?: Prisma.SubjectsWhereInput | Prisma.SubjectsWhereInput[];
    OR?: Prisma.SubjectsWhereInput[];
    NOT?: Prisma.SubjectsWhereInput | Prisma.SubjectsWhereInput[];
    name?: Prisma.StringFilter<"Subjects"> | string;
    class?: Prisma.StringFilter<"Subjects"> | string;
    createdAt?: Prisma.DateTimeFilter<"Subjects"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Subjects"> | Date | string;
    chapters?: Prisma.ChaptersListRelationFilter;
    doubts?: Prisma.DoubtListRelationFilter;
    mcqQuestions?: Prisma.McqQuestionListRelationFilter;
}, "id" | "code">;
export type SubjectsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    class?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.SubjectsCountOrderByAggregateInput;
    _max?: Prisma.SubjectsMaxOrderByAggregateInput;
    _min?: Prisma.SubjectsMinOrderByAggregateInput;
};
export type SubjectsScalarWhereWithAggregatesInput = {
    AND?: Prisma.SubjectsScalarWhereWithAggregatesInput | Prisma.SubjectsScalarWhereWithAggregatesInput[];
    OR?: Prisma.SubjectsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SubjectsScalarWhereWithAggregatesInput | Prisma.SubjectsScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Subjects"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Subjects"> | string;
    class?: Prisma.StringWithAggregatesFilter<"Subjects"> | string;
    code?: Prisma.StringWithAggregatesFilter<"Subjects"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Subjects"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Subjects"> | Date | string;
};
export type SubjectsCreateInput = {
    id?: string;
    name: string;
    class: string;
    code: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    chapters?: Prisma.ChaptersCreateNestedManyWithoutSubjectInput;
    doubts?: Prisma.DoubtCreateNestedManyWithoutSubjectInput;
    mcqQuestions?: Prisma.McqQuestionCreateNestedManyWithoutSubjectInput;
};
export type SubjectsUncheckedCreateInput = {
    id?: string;
    name: string;
    class: string;
    code: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    chapters?: Prisma.ChaptersUncheckedCreateNestedManyWithoutSubjectInput;
    doubts?: Prisma.DoubtUncheckedCreateNestedManyWithoutSubjectInput;
    mcqQuestions?: Prisma.McqQuestionUncheckedCreateNestedManyWithoutSubjectInput;
};
export type SubjectsUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    class?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    chapters?: Prisma.ChaptersUpdateManyWithoutSubjectNestedInput;
    doubts?: Prisma.DoubtUpdateManyWithoutSubjectNestedInput;
    mcqQuestions?: Prisma.McqQuestionUpdateManyWithoutSubjectNestedInput;
};
export type SubjectsUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    class?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    chapters?: Prisma.ChaptersUncheckedUpdateManyWithoutSubjectNestedInput;
    doubts?: Prisma.DoubtUncheckedUpdateManyWithoutSubjectNestedInput;
    mcqQuestions?: Prisma.McqQuestionUncheckedUpdateManyWithoutSubjectNestedInput;
};
export type SubjectsCreateManyInput = {
    id?: string;
    name: string;
    class: string;
    code: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SubjectsUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    class?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SubjectsUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    class?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SubjectsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    class?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SubjectsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    class?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SubjectsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    class?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SubjectsScalarRelationFilter = {
    is?: Prisma.SubjectsWhereInput;
    isNot?: Prisma.SubjectsWhereInput;
};
export type SubjectsNullableScalarRelationFilter = {
    is?: Prisma.SubjectsWhereInput | null;
    isNot?: Prisma.SubjectsWhereInput | null;
};
export type SubjectsCreateNestedOneWithoutChaptersInput = {
    create?: Prisma.XOR<Prisma.SubjectsCreateWithoutChaptersInput, Prisma.SubjectsUncheckedCreateWithoutChaptersInput>;
    connectOrCreate?: Prisma.SubjectsCreateOrConnectWithoutChaptersInput;
    connect?: Prisma.SubjectsWhereUniqueInput;
};
export type SubjectsUpdateOneRequiredWithoutChaptersNestedInput = {
    create?: Prisma.XOR<Prisma.SubjectsCreateWithoutChaptersInput, Prisma.SubjectsUncheckedCreateWithoutChaptersInput>;
    connectOrCreate?: Prisma.SubjectsCreateOrConnectWithoutChaptersInput;
    upsert?: Prisma.SubjectsUpsertWithoutChaptersInput;
    connect?: Prisma.SubjectsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SubjectsUpdateToOneWithWhereWithoutChaptersInput, Prisma.SubjectsUpdateWithoutChaptersInput>, Prisma.SubjectsUncheckedUpdateWithoutChaptersInput>;
};
export type SubjectsCreateNestedOneWithoutDoubtsInput = {
    create?: Prisma.XOR<Prisma.SubjectsCreateWithoutDoubtsInput, Prisma.SubjectsUncheckedCreateWithoutDoubtsInput>;
    connectOrCreate?: Prisma.SubjectsCreateOrConnectWithoutDoubtsInput;
    connect?: Prisma.SubjectsWhereUniqueInput;
};
export type SubjectsUpdateOneWithoutDoubtsNestedInput = {
    create?: Prisma.XOR<Prisma.SubjectsCreateWithoutDoubtsInput, Prisma.SubjectsUncheckedCreateWithoutDoubtsInput>;
    connectOrCreate?: Prisma.SubjectsCreateOrConnectWithoutDoubtsInput;
    upsert?: Prisma.SubjectsUpsertWithoutDoubtsInput;
    disconnect?: Prisma.SubjectsWhereInput | boolean;
    delete?: Prisma.SubjectsWhereInput | boolean;
    connect?: Prisma.SubjectsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SubjectsUpdateToOneWithWhereWithoutDoubtsInput, Prisma.SubjectsUpdateWithoutDoubtsInput>, Prisma.SubjectsUncheckedUpdateWithoutDoubtsInput>;
};
export type SubjectsCreateNestedOneWithoutMcqQuestionsInput = {
    create?: Prisma.XOR<Prisma.SubjectsCreateWithoutMcqQuestionsInput, Prisma.SubjectsUncheckedCreateWithoutMcqQuestionsInput>;
    connectOrCreate?: Prisma.SubjectsCreateOrConnectWithoutMcqQuestionsInput;
    connect?: Prisma.SubjectsWhereUniqueInput;
};
export type SubjectsUpdateOneWithoutMcqQuestionsNestedInput = {
    create?: Prisma.XOR<Prisma.SubjectsCreateWithoutMcqQuestionsInput, Prisma.SubjectsUncheckedCreateWithoutMcqQuestionsInput>;
    connectOrCreate?: Prisma.SubjectsCreateOrConnectWithoutMcqQuestionsInput;
    upsert?: Prisma.SubjectsUpsertWithoutMcqQuestionsInput;
    disconnect?: Prisma.SubjectsWhereInput | boolean;
    delete?: Prisma.SubjectsWhereInput | boolean;
    connect?: Prisma.SubjectsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SubjectsUpdateToOneWithWhereWithoutMcqQuestionsInput, Prisma.SubjectsUpdateWithoutMcqQuestionsInput>, Prisma.SubjectsUncheckedUpdateWithoutMcqQuestionsInput>;
};
export type SubjectsCreateWithoutChaptersInput = {
    id?: string;
    name: string;
    class: string;
    code: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    doubts?: Prisma.DoubtCreateNestedManyWithoutSubjectInput;
    mcqQuestions?: Prisma.McqQuestionCreateNestedManyWithoutSubjectInput;
};
export type SubjectsUncheckedCreateWithoutChaptersInput = {
    id?: string;
    name: string;
    class: string;
    code: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    doubts?: Prisma.DoubtUncheckedCreateNestedManyWithoutSubjectInput;
    mcqQuestions?: Prisma.McqQuestionUncheckedCreateNestedManyWithoutSubjectInput;
};
export type SubjectsCreateOrConnectWithoutChaptersInput = {
    where: Prisma.SubjectsWhereUniqueInput;
    create: Prisma.XOR<Prisma.SubjectsCreateWithoutChaptersInput, Prisma.SubjectsUncheckedCreateWithoutChaptersInput>;
};
export type SubjectsUpsertWithoutChaptersInput = {
    update: Prisma.XOR<Prisma.SubjectsUpdateWithoutChaptersInput, Prisma.SubjectsUncheckedUpdateWithoutChaptersInput>;
    create: Prisma.XOR<Prisma.SubjectsCreateWithoutChaptersInput, Prisma.SubjectsUncheckedCreateWithoutChaptersInput>;
    where?: Prisma.SubjectsWhereInput;
};
export type SubjectsUpdateToOneWithWhereWithoutChaptersInput = {
    where?: Prisma.SubjectsWhereInput;
    data: Prisma.XOR<Prisma.SubjectsUpdateWithoutChaptersInput, Prisma.SubjectsUncheckedUpdateWithoutChaptersInput>;
};
export type SubjectsUpdateWithoutChaptersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    class?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    doubts?: Prisma.DoubtUpdateManyWithoutSubjectNestedInput;
    mcqQuestions?: Prisma.McqQuestionUpdateManyWithoutSubjectNestedInput;
};
export type SubjectsUncheckedUpdateWithoutChaptersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    class?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    doubts?: Prisma.DoubtUncheckedUpdateManyWithoutSubjectNestedInput;
    mcqQuestions?: Prisma.McqQuestionUncheckedUpdateManyWithoutSubjectNestedInput;
};
export type SubjectsCreateWithoutDoubtsInput = {
    id?: string;
    name: string;
    class: string;
    code: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    chapters?: Prisma.ChaptersCreateNestedManyWithoutSubjectInput;
    mcqQuestions?: Prisma.McqQuestionCreateNestedManyWithoutSubjectInput;
};
export type SubjectsUncheckedCreateWithoutDoubtsInput = {
    id?: string;
    name: string;
    class: string;
    code: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    chapters?: Prisma.ChaptersUncheckedCreateNestedManyWithoutSubjectInput;
    mcqQuestions?: Prisma.McqQuestionUncheckedCreateNestedManyWithoutSubjectInput;
};
export type SubjectsCreateOrConnectWithoutDoubtsInput = {
    where: Prisma.SubjectsWhereUniqueInput;
    create: Prisma.XOR<Prisma.SubjectsCreateWithoutDoubtsInput, Prisma.SubjectsUncheckedCreateWithoutDoubtsInput>;
};
export type SubjectsUpsertWithoutDoubtsInput = {
    update: Prisma.XOR<Prisma.SubjectsUpdateWithoutDoubtsInput, Prisma.SubjectsUncheckedUpdateWithoutDoubtsInput>;
    create: Prisma.XOR<Prisma.SubjectsCreateWithoutDoubtsInput, Prisma.SubjectsUncheckedCreateWithoutDoubtsInput>;
    where?: Prisma.SubjectsWhereInput;
};
export type SubjectsUpdateToOneWithWhereWithoutDoubtsInput = {
    where?: Prisma.SubjectsWhereInput;
    data: Prisma.XOR<Prisma.SubjectsUpdateWithoutDoubtsInput, Prisma.SubjectsUncheckedUpdateWithoutDoubtsInput>;
};
export type SubjectsUpdateWithoutDoubtsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    class?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    chapters?: Prisma.ChaptersUpdateManyWithoutSubjectNestedInput;
    mcqQuestions?: Prisma.McqQuestionUpdateManyWithoutSubjectNestedInput;
};
export type SubjectsUncheckedUpdateWithoutDoubtsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    class?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    chapters?: Prisma.ChaptersUncheckedUpdateManyWithoutSubjectNestedInput;
    mcqQuestions?: Prisma.McqQuestionUncheckedUpdateManyWithoutSubjectNestedInput;
};
export type SubjectsCreateWithoutMcqQuestionsInput = {
    id?: string;
    name: string;
    class: string;
    code: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    chapters?: Prisma.ChaptersCreateNestedManyWithoutSubjectInput;
    doubts?: Prisma.DoubtCreateNestedManyWithoutSubjectInput;
};
export type SubjectsUncheckedCreateWithoutMcqQuestionsInput = {
    id?: string;
    name: string;
    class: string;
    code: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    chapters?: Prisma.ChaptersUncheckedCreateNestedManyWithoutSubjectInput;
    doubts?: Prisma.DoubtUncheckedCreateNestedManyWithoutSubjectInput;
};
export type SubjectsCreateOrConnectWithoutMcqQuestionsInput = {
    where: Prisma.SubjectsWhereUniqueInput;
    create: Prisma.XOR<Prisma.SubjectsCreateWithoutMcqQuestionsInput, Prisma.SubjectsUncheckedCreateWithoutMcqQuestionsInput>;
};
export type SubjectsUpsertWithoutMcqQuestionsInput = {
    update: Prisma.XOR<Prisma.SubjectsUpdateWithoutMcqQuestionsInput, Prisma.SubjectsUncheckedUpdateWithoutMcqQuestionsInput>;
    create: Prisma.XOR<Prisma.SubjectsCreateWithoutMcqQuestionsInput, Prisma.SubjectsUncheckedCreateWithoutMcqQuestionsInput>;
    where?: Prisma.SubjectsWhereInput;
};
export type SubjectsUpdateToOneWithWhereWithoutMcqQuestionsInput = {
    where?: Prisma.SubjectsWhereInput;
    data: Prisma.XOR<Prisma.SubjectsUpdateWithoutMcqQuestionsInput, Prisma.SubjectsUncheckedUpdateWithoutMcqQuestionsInput>;
};
export type SubjectsUpdateWithoutMcqQuestionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    class?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    chapters?: Prisma.ChaptersUpdateManyWithoutSubjectNestedInput;
    doubts?: Prisma.DoubtUpdateManyWithoutSubjectNestedInput;
};
export type SubjectsUncheckedUpdateWithoutMcqQuestionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    class?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    chapters?: Prisma.ChaptersUncheckedUpdateManyWithoutSubjectNestedInput;
    doubts?: Prisma.DoubtUncheckedUpdateManyWithoutSubjectNestedInput;
};
/**
 * Count Type SubjectsCountOutputType
 */
export type SubjectsCountOutputType = {
    chapters: number;
    doubts: number;
    mcqQuestions: number;
};
export type SubjectsCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    chapters?: boolean | SubjectsCountOutputTypeCountChaptersArgs;
    doubts?: boolean | SubjectsCountOutputTypeCountDoubtsArgs;
    mcqQuestions?: boolean | SubjectsCountOutputTypeCountMcqQuestionsArgs;
};
/**
 * SubjectsCountOutputType without action
 */
export type SubjectsCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectsCountOutputType
     */
    select?: Prisma.SubjectsCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * SubjectsCountOutputType without action
 */
export type SubjectsCountOutputTypeCountChaptersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ChaptersWhereInput;
};
/**
 * SubjectsCountOutputType without action
 */
export type SubjectsCountOutputTypeCountDoubtsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DoubtWhereInput;
};
/**
 * SubjectsCountOutputType without action
 */
export type SubjectsCountOutputTypeCountMcqQuestionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.McqQuestionWhereInput;
};
export type SubjectsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    class?: boolean;
    code?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    chapters?: boolean | Prisma.Subjects$chaptersArgs<ExtArgs>;
    doubts?: boolean | Prisma.Subjects$doubtsArgs<ExtArgs>;
    mcqQuestions?: boolean | Prisma.Subjects$mcqQuestionsArgs<ExtArgs>;
    _count?: boolean | Prisma.SubjectsCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["subjects"]>;
export type SubjectsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    class?: boolean;
    code?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["subjects"]>;
export type SubjectsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    class?: boolean;
    code?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["subjects"]>;
export type SubjectsSelectScalar = {
    id?: boolean;
    name?: boolean;
    class?: boolean;
    code?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type SubjectsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "class" | "code" | "createdAt" | "updatedAt", ExtArgs["result"]["subjects"]>;
export type SubjectsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    chapters?: boolean | Prisma.Subjects$chaptersArgs<ExtArgs>;
    doubts?: boolean | Prisma.Subjects$doubtsArgs<ExtArgs>;
    mcqQuestions?: boolean | Prisma.Subjects$mcqQuestionsArgs<ExtArgs>;
    _count?: boolean | Prisma.SubjectsCountOutputTypeDefaultArgs<ExtArgs>;
};
export type SubjectsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type SubjectsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $SubjectsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Subjects";
    objects: {
        chapters: Prisma.$ChaptersPayload<ExtArgs>[];
        doubts: Prisma.$DoubtPayload<ExtArgs>[];
        mcqQuestions: Prisma.$McqQuestionPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        class: string;
        code: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["subjects"]>;
    composites: {};
};
export type SubjectsGetPayload<S extends boolean | null | undefined | SubjectsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SubjectsPayload, S>;
export type SubjectsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SubjectsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SubjectsCountAggregateInputType | true;
};
export interface SubjectsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Subjects'];
        meta: {
            name: 'Subjects';
        };
    };
    /**
     * Find zero or one Subjects that matches the filter.
     * @param {SubjectsFindUniqueArgs} args - Arguments to find a Subjects
     * @example
     * // Get one Subjects
     * const subjects = await prisma.subjects.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubjectsFindUniqueArgs>(args: Prisma.SelectSubset<T, SubjectsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SubjectsClient<runtime.Types.Result.GetResult<Prisma.$SubjectsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Subjects that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubjectsFindUniqueOrThrowArgs} args - Arguments to find a Subjects
     * @example
     * // Get one Subjects
     * const subjects = await prisma.subjects.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubjectsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SubjectsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SubjectsClient<runtime.Types.Result.GetResult<Prisma.$SubjectsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Subjects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectsFindFirstArgs} args - Arguments to find a Subjects
     * @example
     * // Get one Subjects
     * const subjects = await prisma.subjects.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubjectsFindFirstArgs>(args?: Prisma.SelectSubset<T, SubjectsFindFirstArgs<ExtArgs>>): Prisma.Prisma__SubjectsClient<runtime.Types.Result.GetResult<Prisma.$SubjectsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Subjects that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectsFindFirstOrThrowArgs} args - Arguments to find a Subjects
     * @example
     * // Get one Subjects
     * const subjects = await prisma.subjects.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubjectsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SubjectsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SubjectsClient<runtime.Types.Result.GetResult<Prisma.$SubjectsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Subjects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subjects
     * const subjects = await prisma.subjects.findMany()
     *
     * // Get first 10 Subjects
     * const subjects = await prisma.subjects.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const subjectsWithIdOnly = await prisma.subjects.findMany({ select: { id: true } })
     *
     */
    findMany<T extends SubjectsFindManyArgs>(args?: Prisma.SelectSubset<T, SubjectsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SubjectsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Subjects.
     * @param {SubjectsCreateArgs} args - Arguments to create a Subjects.
     * @example
     * // Create one Subjects
     * const Subjects = await prisma.subjects.create({
     *   data: {
     *     // ... data to create a Subjects
     *   }
     * })
     *
     */
    create<T extends SubjectsCreateArgs>(args: Prisma.SelectSubset<T, SubjectsCreateArgs<ExtArgs>>): Prisma.Prisma__SubjectsClient<runtime.Types.Result.GetResult<Prisma.$SubjectsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Subjects.
     * @param {SubjectsCreateManyArgs} args - Arguments to create many Subjects.
     * @example
     * // Create many Subjects
     * const subjects = await prisma.subjects.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends SubjectsCreateManyArgs>(args?: Prisma.SelectSubset<T, SubjectsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Subjects and returns the data saved in the database.
     * @param {SubjectsCreateManyAndReturnArgs} args - Arguments to create many Subjects.
     * @example
     * // Create many Subjects
     * const subjects = await prisma.subjects.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Subjects and only return the `id`
     * const subjectsWithIdOnly = await prisma.subjects.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends SubjectsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SubjectsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SubjectsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Subjects.
     * @param {SubjectsDeleteArgs} args - Arguments to delete one Subjects.
     * @example
     * // Delete one Subjects
     * const Subjects = await prisma.subjects.delete({
     *   where: {
     *     // ... filter to delete one Subjects
     *   }
     * })
     *
     */
    delete<T extends SubjectsDeleteArgs>(args: Prisma.SelectSubset<T, SubjectsDeleteArgs<ExtArgs>>): Prisma.Prisma__SubjectsClient<runtime.Types.Result.GetResult<Prisma.$SubjectsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Subjects.
     * @param {SubjectsUpdateArgs} args - Arguments to update one Subjects.
     * @example
     * // Update one Subjects
     * const subjects = await prisma.subjects.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends SubjectsUpdateArgs>(args: Prisma.SelectSubset<T, SubjectsUpdateArgs<ExtArgs>>): Prisma.Prisma__SubjectsClient<runtime.Types.Result.GetResult<Prisma.$SubjectsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Subjects.
     * @param {SubjectsDeleteManyArgs} args - Arguments to filter Subjects to delete.
     * @example
     * // Delete a few Subjects
     * const { count } = await prisma.subjects.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends SubjectsDeleteManyArgs>(args?: Prisma.SelectSubset<T, SubjectsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subjects
     * const subjects = await prisma.subjects.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends SubjectsUpdateManyArgs>(args: Prisma.SelectSubset<T, SubjectsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Subjects and returns the data updated in the database.
     * @param {SubjectsUpdateManyAndReturnArgs} args - Arguments to update many Subjects.
     * @example
     * // Update many Subjects
     * const subjects = await prisma.subjects.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Subjects and only return the `id`
     * const subjectsWithIdOnly = await prisma.subjects.updateManyAndReturn({
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
    updateManyAndReturn<T extends SubjectsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SubjectsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SubjectsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Subjects.
     * @param {SubjectsUpsertArgs} args - Arguments to update or create a Subjects.
     * @example
     * // Update or create a Subjects
     * const subjects = await prisma.subjects.upsert({
     *   create: {
     *     // ... data to create a Subjects
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subjects we want to update
     *   }
     * })
     */
    upsert<T extends SubjectsUpsertArgs>(args: Prisma.SelectSubset<T, SubjectsUpsertArgs<ExtArgs>>): Prisma.Prisma__SubjectsClient<runtime.Types.Result.GetResult<Prisma.$SubjectsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectsCountArgs} args - Arguments to filter Subjects to count.
     * @example
     * // Count the number of Subjects
     * const count = await prisma.subjects.count({
     *   where: {
     *     // ... the filter for the Subjects we want to count
     *   }
     * })
    **/
    count<T extends SubjectsCountArgs>(args?: Prisma.Subset<T, SubjectsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SubjectsCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubjectsAggregateArgs>(args: Prisma.Subset<T, SubjectsAggregateArgs>): Prisma.PrismaPromise<GetSubjectsAggregateType<T>>;
    /**
     * Group by Subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectsGroupByArgs} args - Group by arguments.
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
    groupBy<T extends SubjectsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SubjectsGroupByArgs['orderBy'];
    } : {
        orderBy?: SubjectsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SubjectsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubjectsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Subjects model
     */
    readonly fields: SubjectsFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Subjects.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__SubjectsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    chapters<T extends Prisma.Subjects$chaptersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Subjects$chaptersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ChaptersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    doubts<T extends Prisma.Subjects$doubtsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Subjects$doubtsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DoubtPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    mcqQuestions<T extends Prisma.Subjects$mcqQuestionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Subjects$mcqQuestionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$McqQuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the Subjects model
 */
export interface SubjectsFieldRefs {
    readonly id: Prisma.FieldRef<"Subjects", 'String'>;
    readonly name: Prisma.FieldRef<"Subjects", 'String'>;
    readonly class: Prisma.FieldRef<"Subjects", 'String'>;
    readonly code: Prisma.FieldRef<"Subjects", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Subjects", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Subjects", 'DateTime'>;
}
/**
 * Subjects findUnique
 */
export type SubjectsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Subjects to fetch.
     */
    where: Prisma.SubjectsWhereUniqueInput;
};
/**
 * Subjects findUniqueOrThrow
 */
export type SubjectsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Subjects to fetch.
     */
    where: Prisma.SubjectsWhereUniqueInput;
};
/**
 * Subjects findFirst
 */
export type SubjectsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Subjects to fetch.
     */
    where?: Prisma.SubjectsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Subjects to fetch.
     */
    orderBy?: Prisma.SubjectsOrderByWithRelationInput | Prisma.SubjectsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Subjects.
     */
    cursor?: Prisma.SubjectsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Subjects.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Subjects.
     */
    distinct?: Prisma.SubjectsScalarFieldEnum | Prisma.SubjectsScalarFieldEnum[];
};
/**
 * Subjects findFirstOrThrow
 */
export type SubjectsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Subjects to fetch.
     */
    where?: Prisma.SubjectsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Subjects to fetch.
     */
    orderBy?: Prisma.SubjectsOrderByWithRelationInput | Prisma.SubjectsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Subjects.
     */
    cursor?: Prisma.SubjectsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Subjects.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Subjects.
     */
    distinct?: Prisma.SubjectsScalarFieldEnum | Prisma.SubjectsScalarFieldEnum[];
};
/**
 * Subjects findMany
 */
export type SubjectsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Subjects to fetch.
     */
    where?: Prisma.SubjectsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Subjects to fetch.
     */
    orderBy?: Prisma.SubjectsOrderByWithRelationInput | Prisma.SubjectsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Subjects.
     */
    cursor?: Prisma.SubjectsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Subjects.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Subjects.
     */
    distinct?: Prisma.SubjectsScalarFieldEnum | Prisma.SubjectsScalarFieldEnum[];
};
/**
 * Subjects create
 */
export type SubjectsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a Subjects.
     */
    data: Prisma.XOR<Prisma.SubjectsCreateInput, Prisma.SubjectsUncheckedCreateInput>;
};
/**
 * Subjects createMany
 */
export type SubjectsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subjects.
     */
    data: Prisma.SubjectsCreateManyInput | Prisma.SubjectsCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Subjects createManyAndReturn
 */
export type SubjectsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subjects
     */
    select?: Prisma.SubjectsSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Subjects
     */
    omit?: Prisma.SubjectsOmit<ExtArgs> | null;
    /**
     * The data used to create many Subjects.
     */
    data: Prisma.SubjectsCreateManyInput | Prisma.SubjectsCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Subjects update
 */
export type SubjectsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a Subjects.
     */
    data: Prisma.XOR<Prisma.SubjectsUpdateInput, Prisma.SubjectsUncheckedUpdateInput>;
    /**
     * Choose, which Subjects to update.
     */
    where: Prisma.SubjectsWhereUniqueInput;
};
/**
 * Subjects updateMany
 */
export type SubjectsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Subjects.
     */
    data: Prisma.XOR<Prisma.SubjectsUpdateManyMutationInput, Prisma.SubjectsUncheckedUpdateManyInput>;
    /**
     * Filter which Subjects to update
     */
    where?: Prisma.SubjectsWhereInput;
    /**
     * Limit how many Subjects to update.
     */
    limit?: number;
};
/**
 * Subjects updateManyAndReturn
 */
export type SubjectsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subjects
     */
    select?: Prisma.SubjectsSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Subjects
     */
    omit?: Prisma.SubjectsOmit<ExtArgs> | null;
    /**
     * The data used to update Subjects.
     */
    data: Prisma.XOR<Prisma.SubjectsUpdateManyMutationInput, Prisma.SubjectsUncheckedUpdateManyInput>;
    /**
     * Filter which Subjects to update
     */
    where?: Prisma.SubjectsWhereInput;
    /**
     * Limit how many Subjects to update.
     */
    limit?: number;
};
/**
 * Subjects upsert
 */
export type SubjectsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the Subjects to update in case it exists.
     */
    where: Prisma.SubjectsWhereUniqueInput;
    /**
     * In case the Subjects found by the `where` argument doesn't exist, create a new Subjects with this data.
     */
    create: Prisma.XOR<Prisma.SubjectsCreateInput, Prisma.SubjectsUncheckedCreateInput>;
    /**
     * In case the Subjects was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.SubjectsUpdateInput, Prisma.SubjectsUncheckedUpdateInput>;
};
/**
 * Subjects delete
 */
export type SubjectsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which Subjects to delete.
     */
    where: Prisma.SubjectsWhereUniqueInput;
};
/**
 * Subjects deleteMany
 */
export type SubjectsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Subjects to delete
     */
    where?: Prisma.SubjectsWhereInput;
    /**
     * Limit how many Subjects to delete.
     */
    limit?: number;
};
/**
 * Subjects.chapters
 */
export type Subjects$chaptersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    orderBy?: Prisma.ChaptersOrderByWithRelationInput | Prisma.ChaptersOrderByWithRelationInput[];
    cursor?: Prisma.ChaptersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ChaptersScalarFieldEnum | Prisma.ChaptersScalarFieldEnum[];
};
/**
 * Subjects.doubts
 */
export type Subjects$doubtsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * Subjects.mcqQuestions
 */
export type Subjects$mcqQuestionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the McqQuestion
     */
    select?: Prisma.McqQuestionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the McqQuestion
     */
    omit?: Prisma.McqQuestionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.McqQuestionInclude<ExtArgs> | null;
    where?: Prisma.McqQuestionWhereInput;
    orderBy?: Prisma.McqQuestionOrderByWithRelationInput | Prisma.McqQuestionOrderByWithRelationInput[];
    cursor?: Prisma.McqQuestionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.McqQuestionScalarFieldEnum | Prisma.McqQuestionScalarFieldEnum[];
};
/**
 * Subjects without action
 */
export type SubjectsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
//# sourceMappingURL=Subjects.d.ts.map