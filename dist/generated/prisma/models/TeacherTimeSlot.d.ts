import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.ts";
/**
 * Model TeacherTimeSlot
 *
 */
export type TeacherTimeSlotModel = runtime.Types.Result.DefaultSelection<Prisma.$TeacherTimeSlotPayload>;
export type AggregateTeacherTimeSlot = {
    _count: TeacherTimeSlotCountAggregateOutputType | null;
    _min: TeacherTimeSlotMinAggregateOutputType | null;
    _max: TeacherTimeSlotMaxAggregateOutputType | null;
};
export type TeacherTimeSlotMinAggregateOutputType = {
    id: string | null;
    teacherId: string | null;
    dayOfWeek: string | null;
    subject: string | null;
    startTime: string | null;
    endTime: string | null;
    isActive: boolean | null;
    repeatWeekly: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type TeacherTimeSlotMaxAggregateOutputType = {
    id: string | null;
    teacherId: string | null;
    dayOfWeek: string | null;
    subject: string | null;
    startTime: string | null;
    endTime: string | null;
    isActive: boolean | null;
    repeatWeekly: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type TeacherTimeSlotCountAggregateOutputType = {
    id: number;
    teacherId: number;
    dayOfWeek: number;
    subject: number;
    startTime: number;
    endTime: number;
    isActive: number;
    repeatWeekly: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type TeacherTimeSlotMinAggregateInputType = {
    id?: true;
    teacherId?: true;
    dayOfWeek?: true;
    subject?: true;
    startTime?: true;
    endTime?: true;
    isActive?: true;
    repeatWeekly?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type TeacherTimeSlotMaxAggregateInputType = {
    id?: true;
    teacherId?: true;
    dayOfWeek?: true;
    subject?: true;
    startTime?: true;
    endTime?: true;
    isActive?: true;
    repeatWeekly?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type TeacherTimeSlotCountAggregateInputType = {
    id?: true;
    teacherId?: true;
    dayOfWeek?: true;
    subject?: true;
    startTime?: true;
    endTime?: true;
    isActive?: true;
    repeatWeekly?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type TeacherTimeSlotAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which TeacherTimeSlot to aggregate.
     */
    where?: Prisma.TeacherTimeSlotWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TeacherTimeSlots to fetch.
     */
    orderBy?: Prisma.TeacherTimeSlotOrderByWithRelationInput | Prisma.TeacherTimeSlotOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.TeacherTimeSlotWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TeacherTimeSlots from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TeacherTimeSlots.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned TeacherTimeSlots
    **/
    _count?: true | TeacherTimeSlotCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: TeacherTimeSlotMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: TeacherTimeSlotMaxAggregateInputType;
};
export type GetTeacherTimeSlotAggregateType<T extends TeacherTimeSlotAggregateArgs> = {
    [P in keyof T & keyof AggregateTeacherTimeSlot]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTeacherTimeSlot[P]> : Prisma.GetScalarType<T[P], AggregateTeacherTimeSlot[P]>;
};
export type TeacherTimeSlotGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TeacherTimeSlotWhereInput;
    orderBy?: Prisma.TeacherTimeSlotOrderByWithAggregationInput | Prisma.TeacherTimeSlotOrderByWithAggregationInput[];
    by: Prisma.TeacherTimeSlotScalarFieldEnum[] | Prisma.TeacherTimeSlotScalarFieldEnum;
    having?: Prisma.TeacherTimeSlotScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TeacherTimeSlotCountAggregateInputType | true;
    _min?: TeacherTimeSlotMinAggregateInputType;
    _max?: TeacherTimeSlotMaxAggregateInputType;
};
export type TeacherTimeSlotGroupByOutputType = {
    id: string;
    teacherId: string;
    dayOfWeek: string;
    subject: string;
    startTime: string;
    endTime: string;
    isActive: boolean;
    repeatWeekly: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: TeacherTimeSlotCountAggregateOutputType | null;
    _min: TeacherTimeSlotMinAggregateOutputType | null;
    _max: TeacherTimeSlotMaxAggregateOutputType | null;
};
export type GetTeacherTimeSlotGroupByPayload<T extends TeacherTimeSlotGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TeacherTimeSlotGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TeacherTimeSlotGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TeacherTimeSlotGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TeacherTimeSlotGroupByOutputType[P]>;
}>>;
export type TeacherTimeSlotWhereInput = {
    AND?: Prisma.TeacherTimeSlotWhereInput | Prisma.TeacherTimeSlotWhereInput[];
    OR?: Prisma.TeacherTimeSlotWhereInput[];
    NOT?: Prisma.TeacherTimeSlotWhereInput | Prisma.TeacherTimeSlotWhereInput[];
    id?: Prisma.StringFilter<"TeacherTimeSlot"> | string;
    teacherId?: Prisma.StringFilter<"TeacherTimeSlot"> | string;
    dayOfWeek?: Prisma.StringFilter<"TeacherTimeSlot"> | string;
    subject?: Prisma.StringFilter<"TeacherTimeSlot"> | string;
    startTime?: Prisma.StringFilter<"TeacherTimeSlot"> | string;
    endTime?: Prisma.StringFilter<"TeacherTimeSlot"> | string;
    isActive?: Prisma.BoolFilter<"TeacherTimeSlot"> | boolean;
    repeatWeekly?: Prisma.BoolFilter<"TeacherTimeSlot"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"TeacherTimeSlot"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"TeacherTimeSlot"> | Date | string;
    teacher?: Prisma.XOR<Prisma.TeacherProfileScalarRelationFilter, Prisma.TeacherProfileWhereInput>;
};
export type TeacherTimeSlotOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrder;
    dayOfWeek?: Prisma.SortOrder;
    subject?: Prisma.SortOrder;
    startTime?: Prisma.SortOrder;
    endTime?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    repeatWeekly?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    teacher?: Prisma.TeacherProfileOrderByWithRelationInput;
};
export type TeacherTimeSlotWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.TeacherTimeSlotWhereInput | Prisma.TeacherTimeSlotWhereInput[];
    OR?: Prisma.TeacherTimeSlotWhereInput[];
    NOT?: Prisma.TeacherTimeSlotWhereInput | Prisma.TeacherTimeSlotWhereInput[];
    teacherId?: Prisma.StringFilter<"TeacherTimeSlot"> | string;
    dayOfWeek?: Prisma.StringFilter<"TeacherTimeSlot"> | string;
    subject?: Prisma.StringFilter<"TeacherTimeSlot"> | string;
    startTime?: Prisma.StringFilter<"TeacherTimeSlot"> | string;
    endTime?: Prisma.StringFilter<"TeacherTimeSlot"> | string;
    isActive?: Prisma.BoolFilter<"TeacherTimeSlot"> | boolean;
    repeatWeekly?: Prisma.BoolFilter<"TeacherTimeSlot"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"TeacherTimeSlot"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"TeacherTimeSlot"> | Date | string;
    teacher?: Prisma.XOR<Prisma.TeacherProfileScalarRelationFilter, Prisma.TeacherProfileWhereInput>;
}, "id">;
export type TeacherTimeSlotOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrder;
    dayOfWeek?: Prisma.SortOrder;
    subject?: Prisma.SortOrder;
    startTime?: Prisma.SortOrder;
    endTime?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    repeatWeekly?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.TeacherTimeSlotCountOrderByAggregateInput;
    _max?: Prisma.TeacherTimeSlotMaxOrderByAggregateInput;
    _min?: Prisma.TeacherTimeSlotMinOrderByAggregateInput;
};
export type TeacherTimeSlotScalarWhereWithAggregatesInput = {
    AND?: Prisma.TeacherTimeSlotScalarWhereWithAggregatesInput | Prisma.TeacherTimeSlotScalarWhereWithAggregatesInput[];
    OR?: Prisma.TeacherTimeSlotScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TeacherTimeSlotScalarWhereWithAggregatesInput | Prisma.TeacherTimeSlotScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"TeacherTimeSlot"> | string;
    teacherId?: Prisma.StringWithAggregatesFilter<"TeacherTimeSlot"> | string;
    dayOfWeek?: Prisma.StringWithAggregatesFilter<"TeacherTimeSlot"> | string;
    subject?: Prisma.StringWithAggregatesFilter<"TeacherTimeSlot"> | string;
    startTime?: Prisma.StringWithAggregatesFilter<"TeacherTimeSlot"> | string;
    endTime?: Prisma.StringWithAggregatesFilter<"TeacherTimeSlot"> | string;
    isActive?: Prisma.BoolWithAggregatesFilter<"TeacherTimeSlot"> | boolean;
    repeatWeekly?: Prisma.BoolWithAggregatesFilter<"TeacherTimeSlot"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"TeacherTimeSlot"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"TeacherTimeSlot"> | Date | string;
};
export type TeacherTimeSlotCreateInput = {
    id?: string;
    dayOfWeek: string;
    subject: string;
    startTime: string;
    endTime: string;
    isActive?: boolean;
    repeatWeekly?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    teacher: Prisma.TeacherProfileCreateNestedOneWithoutTimeSlotsInput;
};
export type TeacherTimeSlotUncheckedCreateInput = {
    id?: string;
    teacherId: string;
    dayOfWeek: string;
    subject: string;
    startTime: string;
    endTime: string;
    isActive?: boolean;
    repeatWeekly?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TeacherTimeSlotUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dayOfWeek?: Prisma.StringFieldUpdateOperationsInput | string;
    subject?: Prisma.StringFieldUpdateOperationsInput | string;
    startTime?: Prisma.StringFieldUpdateOperationsInput | string;
    endTime?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    repeatWeekly?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    teacher?: Prisma.TeacherProfileUpdateOneRequiredWithoutTimeSlotsNestedInput;
};
export type TeacherTimeSlotUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    teacherId?: Prisma.StringFieldUpdateOperationsInput | string;
    dayOfWeek?: Prisma.StringFieldUpdateOperationsInput | string;
    subject?: Prisma.StringFieldUpdateOperationsInput | string;
    startTime?: Prisma.StringFieldUpdateOperationsInput | string;
    endTime?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    repeatWeekly?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TeacherTimeSlotCreateManyInput = {
    id?: string;
    teacherId: string;
    dayOfWeek: string;
    subject: string;
    startTime: string;
    endTime: string;
    isActive?: boolean;
    repeatWeekly?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TeacherTimeSlotUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dayOfWeek?: Prisma.StringFieldUpdateOperationsInput | string;
    subject?: Prisma.StringFieldUpdateOperationsInput | string;
    startTime?: Prisma.StringFieldUpdateOperationsInput | string;
    endTime?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    repeatWeekly?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TeacherTimeSlotUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    teacherId?: Prisma.StringFieldUpdateOperationsInput | string;
    dayOfWeek?: Prisma.StringFieldUpdateOperationsInput | string;
    subject?: Prisma.StringFieldUpdateOperationsInput | string;
    startTime?: Prisma.StringFieldUpdateOperationsInput | string;
    endTime?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    repeatWeekly?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TeacherTimeSlotListRelationFilter = {
    every?: Prisma.TeacherTimeSlotWhereInput;
    some?: Prisma.TeacherTimeSlotWhereInput;
    none?: Prisma.TeacherTimeSlotWhereInput;
};
export type TeacherTimeSlotOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type TeacherTimeSlotCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrder;
    dayOfWeek?: Prisma.SortOrder;
    subject?: Prisma.SortOrder;
    startTime?: Prisma.SortOrder;
    endTime?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    repeatWeekly?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TeacherTimeSlotMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrder;
    dayOfWeek?: Prisma.SortOrder;
    subject?: Prisma.SortOrder;
    startTime?: Prisma.SortOrder;
    endTime?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    repeatWeekly?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TeacherTimeSlotMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrder;
    dayOfWeek?: Prisma.SortOrder;
    subject?: Prisma.SortOrder;
    startTime?: Prisma.SortOrder;
    endTime?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    repeatWeekly?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TeacherTimeSlotCreateNestedManyWithoutTeacherInput = {
    create?: Prisma.XOR<Prisma.TeacherTimeSlotCreateWithoutTeacherInput, Prisma.TeacherTimeSlotUncheckedCreateWithoutTeacherInput> | Prisma.TeacherTimeSlotCreateWithoutTeacherInput[] | Prisma.TeacherTimeSlotUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: Prisma.TeacherTimeSlotCreateOrConnectWithoutTeacherInput | Prisma.TeacherTimeSlotCreateOrConnectWithoutTeacherInput[];
    createMany?: Prisma.TeacherTimeSlotCreateManyTeacherInputEnvelope;
    connect?: Prisma.TeacherTimeSlotWhereUniqueInput | Prisma.TeacherTimeSlotWhereUniqueInput[];
};
export type TeacherTimeSlotUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: Prisma.XOR<Prisma.TeacherTimeSlotCreateWithoutTeacherInput, Prisma.TeacherTimeSlotUncheckedCreateWithoutTeacherInput> | Prisma.TeacherTimeSlotCreateWithoutTeacherInput[] | Prisma.TeacherTimeSlotUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: Prisma.TeacherTimeSlotCreateOrConnectWithoutTeacherInput | Prisma.TeacherTimeSlotCreateOrConnectWithoutTeacherInput[];
    createMany?: Prisma.TeacherTimeSlotCreateManyTeacherInputEnvelope;
    connect?: Prisma.TeacherTimeSlotWhereUniqueInput | Prisma.TeacherTimeSlotWhereUniqueInput[];
};
export type TeacherTimeSlotUpdateManyWithoutTeacherNestedInput = {
    create?: Prisma.XOR<Prisma.TeacherTimeSlotCreateWithoutTeacherInput, Prisma.TeacherTimeSlotUncheckedCreateWithoutTeacherInput> | Prisma.TeacherTimeSlotCreateWithoutTeacherInput[] | Prisma.TeacherTimeSlotUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: Prisma.TeacherTimeSlotCreateOrConnectWithoutTeacherInput | Prisma.TeacherTimeSlotCreateOrConnectWithoutTeacherInput[];
    upsert?: Prisma.TeacherTimeSlotUpsertWithWhereUniqueWithoutTeacherInput | Prisma.TeacherTimeSlotUpsertWithWhereUniqueWithoutTeacherInput[];
    createMany?: Prisma.TeacherTimeSlotCreateManyTeacherInputEnvelope;
    set?: Prisma.TeacherTimeSlotWhereUniqueInput | Prisma.TeacherTimeSlotWhereUniqueInput[];
    disconnect?: Prisma.TeacherTimeSlotWhereUniqueInput | Prisma.TeacherTimeSlotWhereUniqueInput[];
    delete?: Prisma.TeacherTimeSlotWhereUniqueInput | Prisma.TeacherTimeSlotWhereUniqueInput[];
    connect?: Prisma.TeacherTimeSlotWhereUniqueInput | Prisma.TeacherTimeSlotWhereUniqueInput[];
    update?: Prisma.TeacherTimeSlotUpdateWithWhereUniqueWithoutTeacherInput | Prisma.TeacherTimeSlotUpdateWithWhereUniqueWithoutTeacherInput[];
    updateMany?: Prisma.TeacherTimeSlotUpdateManyWithWhereWithoutTeacherInput | Prisma.TeacherTimeSlotUpdateManyWithWhereWithoutTeacherInput[];
    deleteMany?: Prisma.TeacherTimeSlotScalarWhereInput | Prisma.TeacherTimeSlotScalarWhereInput[];
};
export type TeacherTimeSlotUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: Prisma.XOR<Prisma.TeacherTimeSlotCreateWithoutTeacherInput, Prisma.TeacherTimeSlotUncheckedCreateWithoutTeacherInput> | Prisma.TeacherTimeSlotCreateWithoutTeacherInput[] | Prisma.TeacherTimeSlotUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: Prisma.TeacherTimeSlotCreateOrConnectWithoutTeacherInput | Prisma.TeacherTimeSlotCreateOrConnectWithoutTeacherInput[];
    upsert?: Prisma.TeacherTimeSlotUpsertWithWhereUniqueWithoutTeacherInput | Prisma.TeacherTimeSlotUpsertWithWhereUniqueWithoutTeacherInput[];
    createMany?: Prisma.TeacherTimeSlotCreateManyTeacherInputEnvelope;
    set?: Prisma.TeacherTimeSlotWhereUniqueInput | Prisma.TeacherTimeSlotWhereUniqueInput[];
    disconnect?: Prisma.TeacherTimeSlotWhereUniqueInput | Prisma.TeacherTimeSlotWhereUniqueInput[];
    delete?: Prisma.TeacherTimeSlotWhereUniqueInput | Prisma.TeacherTimeSlotWhereUniqueInput[];
    connect?: Prisma.TeacherTimeSlotWhereUniqueInput | Prisma.TeacherTimeSlotWhereUniqueInput[];
    update?: Prisma.TeacherTimeSlotUpdateWithWhereUniqueWithoutTeacherInput | Prisma.TeacherTimeSlotUpdateWithWhereUniqueWithoutTeacherInput[];
    updateMany?: Prisma.TeacherTimeSlotUpdateManyWithWhereWithoutTeacherInput | Prisma.TeacherTimeSlotUpdateManyWithWhereWithoutTeacherInput[];
    deleteMany?: Prisma.TeacherTimeSlotScalarWhereInput | Prisma.TeacherTimeSlotScalarWhereInput[];
};
export type TeacherTimeSlotCreateWithoutTeacherInput = {
    id?: string;
    dayOfWeek: string;
    subject: string;
    startTime: string;
    endTime: string;
    isActive?: boolean;
    repeatWeekly?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TeacherTimeSlotUncheckedCreateWithoutTeacherInput = {
    id?: string;
    dayOfWeek: string;
    subject: string;
    startTime: string;
    endTime: string;
    isActive?: boolean;
    repeatWeekly?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TeacherTimeSlotCreateOrConnectWithoutTeacherInput = {
    where: Prisma.TeacherTimeSlotWhereUniqueInput;
    create: Prisma.XOR<Prisma.TeacherTimeSlotCreateWithoutTeacherInput, Prisma.TeacherTimeSlotUncheckedCreateWithoutTeacherInput>;
};
export type TeacherTimeSlotCreateManyTeacherInputEnvelope = {
    data: Prisma.TeacherTimeSlotCreateManyTeacherInput | Prisma.TeacherTimeSlotCreateManyTeacherInput[];
    skipDuplicates?: boolean;
};
export type TeacherTimeSlotUpsertWithWhereUniqueWithoutTeacherInput = {
    where: Prisma.TeacherTimeSlotWhereUniqueInput;
    update: Prisma.XOR<Prisma.TeacherTimeSlotUpdateWithoutTeacherInput, Prisma.TeacherTimeSlotUncheckedUpdateWithoutTeacherInput>;
    create: Prisma.XOR<Prisma.TeacherTimeSlotCreateWithoutTeacherInput, Prisma.TeacherTimeSlotUncheckedCreateWithoutTeacherInput>;
};
export type TeacherTimeSlotUpdateWithWhereUniqueWithoutTeacherInput = {
    where: Prisma.TeacherTimeSlotWhereUniqueInput;
    data: Prisma.XOR<Prisma.TeacherTimeSlotUpdateWithoutTeacherInput, Prisma.TeacherTimeSlotUncheckedUpdateWithoutTeacherInput>;
};
export type TeacherTimeSlotUpdateManyWithWhereWithoutTeacherInput = {
    where: Prisma.TeacherTimeSlotScalarWhereInput;
    data: Prisma.XOR<Prisma.TeacherTimeSlotUpdateManyMutationInput, Prisma.TeacherTimeSlotUncheckedUpdateManyWithoutTeacherInput>;
};
export type TeacherTimeSlotScalarWhereInput = {
    AND?: Prisma.TeacherTimeSlotScalarWhereInput | Prisma.TeacherTimeSlotScalarWhereInput[];
    OR?: Prisma.TeacherTimeSlotScalarWhereInput[];
    NOT?: Prisma.TeacherTimeSlotScalarWhereInput | Prisma.TeacherTimeSlotScalarWhereInput[];
    id?: Prisma.StringFilter<"TeacherTimeSlot"> | string;
    teacherId?: Prisma.StringFilter<"TeacherTimeSlot"> | string;
    dayOfWeek?: Prisma.StringFilter<"TeacherTimeSlot"> | string;
    subject?: Prisma.StringFilter<"TeacherTimeSlot"> | string;
    startTime?: Prisma.StringFilter<"TeacherTimeSlot"> | string;
    endTime?: Prisma.StringFilter<"TeacherTimeSlot"> | string;
    isActive?: Prisma.BoolFilter<"TeacherTimeSlot"> | boolean;
    repeatWeekly?: Prisma.BoolFilter<"TeacherTimeSlot"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"TeacherTimeSlot"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"TeacherTimeSlot"> | Date | string;
};
export type TeacherTimeSlotCreateManyTeacherInput = {
    id?: string;
    dayOfWeek: string;
    subject: string;
    startTime: string;
    endTime: string;
    isActive?: boolean;
    repeatWeekly?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TeacherTimeSlotUpdateWithoutTeacherInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dayOfWeek?: Prisma.StringFieldUpdateOperationsInput | string;
    subject?: Prisma.StringFieldUpdateOperationsInput | string;
    startTime?: Prisma.StringFieldUpdateOperationsInput | string;
    endTime?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    repeatWeekly?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TeacherTimeSlotUncheckedUpdateWithoutTeacherInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dayOfWeek?: Prisma.StringFieldUpdateOperationsInput | string;
    subject?: Prisma.StringFieldUpdateOperationsInput | string;
    startTime?: Prisma.StringFieldUpdateOperationsInput | string;
    endTime?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    repeatWeekly?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TeacherTimeSlotUncheckedUpdateManyWithoutTeacherInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dayOfWeek?: Prisma.StringFieldUpdateOperationsInput | string;
    subject?: Prisma.StringFieldUpdateOperationsInput | string;
    startTime?: Prisma.StringFieldUpdateOperationsInput | string;
    endTime?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    repeatWeekly?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TeacherTimeSlotSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    teacherId?: boolean;
    dayOfWeek?: boolean;
    subject?: boolean;
    startTime?: boolean;
    endTime?: boolean;
    isActive?: boolean;
    repeatWeekly?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    teacher?: boolean | Prisma.TeacherProfileDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["teacherTimeSlot"]>;
export type TeacherTimeSlotSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    teacherId?: boolean;
    dayOfWeek?: boolean;
    subject?: boolean;
    startTime?: boolean;
    endTime?: boolean;
    isActive?: boolean;
    repeatWeekly?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    teacher?: boolean | Prisma.TeacherProfileDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["teacherTimeSlot"]>;
export type TeacherTimeSlotSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    teacherId?: boolean;
    dayOfWeek?: boolean;
    subject?: boolean;
    startTime?: boolean;
    endTime?: boolean;
    isActive?: boolean;
    repeatWeekly?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    teacher?: boolean | Prisma.TeacherProfileDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["teacherTimeSlot"]>;
export type TeacherTimeSlotSelectScalar = {
    id?: boolean;
    teacherId?: boolean;
    dayOfWeek?: boolean;
    subject?: boolean;
    startTime?: boolean;
    endTime?: boolean;
    isActive?: boolean;
    repeatWeekly?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type TeacherTimeSlotOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "teacherId" | "dayOfWeek" | "subject" | "startTime" | "endTime" | "isActive" | "repeatWeekly" | "createdAt" | "updatedAt", ExtArgs["result"]["teacherTimeSlot"]>;
export type TeacherTimeSlotInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    teacher?: boolean | Prisma.TeacherProfileDefaultArgs<ExtArgs>;
};
export type TeacherTimeSlotIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    teacher?: boolean | Prisma.TeacherProfileDefaultArgs<ExtArgs>;
};
export type TeacherTimeSlotIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    teacher?: boolean | Prisma.TeacherProfileDefaultArgs<ExtArgs>;
};
export type $TeacherTimeSlotPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "TeacherTimeSlot";
    objects: {
        teacher: Prisma.$TeacherProfilePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        teacherId: string;
        dayOfWeek: string;
        subject: string;
        startTime: string;
        endTime: string;
        isActive: boolean;
        repeatWeekly: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["teacherTimeSlot"]>;
    composites: {};
};
export type TeacherTimeSlotGetPayload<S extends boolean | null | undefined | TeacherTimeSlotDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TeacherTimeSlotPayload, S>;
export type TeacherTimeSlotCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TeacherTimeSlotFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TeacherTimeSlotCountAggregateInputType | true;
};
export interface TeacherTimeSlotDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['TeacherTimeSlot'];
        meta: {
            name: 'TeacherTimeSlot';
        };
    };
    /**
     * Find zero or one TeacherTimeSlot that matches the filter.
     * @param {TeacherTimeSlotFindUniqueArgs} args - Arguments to find a TeacherTimeSlot
     * @example
     * // Get one TeacherTimeSlot
     * const teacherTimeSlot = await prisma.teacherTimeSlot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeacherTimeSlotFindUniqueArgs>(args: Prisma.SelectSubset<T, TeacherTimeSlotFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TeacherTimeSlotClient<runtime.Types.Result.GetResult<Prisma.$TeacherTimeSlotPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one TeacherTimeSlot that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeacherTimeSlotFindUniqueOrThrowArgs} args - Arguments to find a TeacherTimeSlot
     * @example
     * // Get one TeacherTimeSlot
     * const teacherTimeSlot = await prisma.teacherTimeSlot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeacherTimeSlotFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TeacherTimeSlotFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TeacherTimeSlotClient<runtime.Types.Result.GetResult<Prisma.$TeacherTimeSlotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first TeacherTimeSlot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherTimeSlotFindFirstArgs} args - Arguments to find a TeacherTimeSlot
     * @example
     * // Get one TeacherTimeSlot
     * const teacherTimeSlot = await prisma.teacherTimeSlot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeacherTimeSlotFindFirstArgs>(args?: Prisma.SelectSubset<T, TeacherTimeSlotFindFirstArgs<ExtArgs>>): Prisma.Prisma__TeacherTimeSlotClient<runtime.Types.Result.GetResult<Prisma.$TeacherTimeSlotPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first TeacherTimeSlot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherTimeSlotFindFirstOrThrowArgs} args - Arguments to find a TeacherTimeSlot
     * @example
     * // Get one TeacherTimeSlot
     * const teacherTimeSlot = await prisma.teacherTimeSlot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeacherTimeSlotFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TeacherTimeSlotFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TeacherTimeSlotClient<runtime.Types.Result.GetResult<Prisma.$TeacherTimeSlotPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more TeacherTimeSlots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherTimeSlotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TeacherTimeSlots
     * const teacherTimeSlots = await prisma.teacherTimeSlot.findMany()
     *
     * // Get first 10 TeacherTimeSlots
     * const teacherTimeSlots = await prisma.teacherTimeSlot.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const teacherTimeSlotWithIdOnly = await prisma.teacherTimeSlot.findMany({ select: { id: true } })
     *
     */
    findMany<T extends TeacherTimeSlotFindManyArgs>(args?: Prisma.SelectSubset<T, TeacherTimeSlotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TeacherTimeSlotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a TeacherTimeSlot.
     * @param {TeacherTimeSlotCreateArgs} args - Arguments to create a TeacherTimeSlot.
     * @example
     * // Create one TeacherTimeSlot
     * const TeacherTimeSlot = await prisma.teacherTimeSlot.create({
     *   data: {
     *     // ... data to create a TeacherTimeSlot
     *   }
     * })
     *
     */
    create<T extends TeacherTimeSlotCreateArgs>(args: Prisma.SelectSubset<T, TeacherTimeSlotCreateArgs<ExtArgs>>): Prisma.Prisma__TeacherTimeSlotClient<runtime.Types.Result.GetResult<Prisma.$TeacherTimeSlotPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many TeacherTimeSlots.
     * @param {TeacherTimeSlotCreateManyArgs} args - Arguments to create many TeacherTimeSlots.
     * @example
     * // Create many TeacherTimeSlots
     * const teacherTimeSlot = await prisma.teacherTimeSlot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends TeacherTimeSlotCreateManyArgs>(args?: Prisma.SelectSubset<T, TeacherTimeSlotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many TeacherTimeSlots and returns the data saved in the database.
     * @param {TeacherTimeSlotCreateManyAndReturnArgs} args - Arguments to create many TeacherTimeSlots.
     * @example
     * // Create many TeacherTimeSlots
     * const teacherTimeSlot = await prisma.teacherTimeSlot.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many TeacherTimeSlots and only return the `id`
     * const teacherTimeSlotWithIdOnly = await prisma.teacherTimeSlot.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends TeacherTimeSlotCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TeacherTimeSlotCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TeacherTimeSlotPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a TeacherTimeSlot.
     * @param {TeacherTimeSlotDeleteArgs} args - Arguments to delete one TeacherTimeSlot.
     * @example
     * // Delete one TeacherTimeSlot
     * const TeacherTimeSlot = await prisma.teacherTimeSlot.delete({
     *   where: {
     *     // ... filter to delete one TeacherTimeSlot
     *   }
     * })
     *
     */
    delete<T extends TeacherTimeSlotDeleteArgs>(args: Prisma.SelectSubset<T, TeacherTimeSlotDeleteArgs<ExtArgs>>): Prisma.Prisma__TeacherTimeSlotClient<runtime.Types.Result.GetResult<Prisma.$TeacherTimeSlotPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one TeacherTimeSlot.
     * @param {TeacherTimeSlotUpdateArgs} args - Arguments to update one TeacherTimeSlot.
     * @example
     * // Update one TeacherTimeSlot
     * const teacherTimeSlot = await prisma.teacherTimeSlot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends TeacherTimeSlotUpdateArgs>(args: Prisma.SelectSubset<T, TeacherTimeSlotUpdateArgs<ExtArgs>>): Prisma.Prisma__TeacherTimeSlotClient<runtime.Types.Result.GetResult<Prisma.$TeacherTimeSlotPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more TeacherTimeSlots.
     * @param {TeacherTimeSlotDeleteManyArgs} args - Arguments to filter TeacherTimeSlots to delete.
     * @example
     * // Delete a few TeacherTimeSlots
     * const { count } = await prisma.teacherTimeSlot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends TeacherTimeSlotDeleteManyArgs>(args?: Prisma.SelectSubset<T, TeacherTimeSlotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more TeacherTimeSlots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherTimeSlotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TeacherTimeSlots
     * const teacherTimeSlot = await prisma.teacherTimeSlot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends TeacherTimeSlotUpdateManyArgs>(args: Prisma.SelectSubset<T, TeacherTimeSlotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more TeacherTimeSlots and returns the data updated in the database.
     * @param {TeacherTimeSlotUpdateManyAndReturnArgs} args - Arguments to update many TeacherTimeSlots.
     * @example
     * // Update many TeacherTimeSlots
     * const teacherTimeSlot = await prisma.teacherTimeSlot.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more TeacherTimeSlots and only return the `id`
     * const teacherTimeSlotWithIdOnly = await prisma.teacherTimeSlot.updateManyAndReturn({
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
    updateManyAndReturn<T extends TeacherTimeSlotUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TeacherTimeSlotUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TeacherTimeSlotPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one TeacherTimeSlot.
     * @param {TeacherTimeSlotUpsertArgs} args - Arguments to update or create a TeacherTimeSlot.
     * @example
     * // Update or create a TeacherTimeSlot
     * const teacherTimeSlot = await prisma.teacherTimeSlot.upsert({
     *   create: {
     *     // ... data to create a TeacherTimeSlot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TeacherTimeSlot we want to update
     *   }
     * })
     */
    upsert<T extends TeacherTimeSlotUpsertArgs>(args: Prisma.SelectSubset<T, TeacherTimeSlotUpsertArgs<ExtArgs>>): Prisma.Prisma__TeacherTimeSlotClient<runtime.Types.Result.GetResult<Prisma.$TeacherTimeSlotPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of TeacherTimeSlots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherTimeSlotCountArgs} args - Arguments to filter TeacherTimeSlots to count.
     * @example
     * // Count the number of TeacherTimeSlots
     * const count = await prisma.teacherTimeSlot.count({
     *   where: {
     *     // ... the filter for the TeacherTimeSlots we want to count
     *   }
     * })
    **/
    count<T extends TeacherTimeSlotCountArgs>(args?: Prisma.Subset<T, TeacherTimeSlotCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TeacherTimeSlotCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a TeacherTimeSlot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherTimeSlotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeacherTimeSlotAggregateArgs>(args: Prisma.Subset<T, TeacherTimeSlotAggregateArgs>): Prisma.PrismaPromise<GetTeacherTimeSlotAggregateType<T>>;
    /**
     * Group by TeacherTimeSlot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherTimeSlotGroupByArgs} args - Group by arguments.
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
    groupBy<T extends TeacherTimeSlotGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TeacherTimeSlotGroupByArgs['orderBy'];
    } : {
        orderBy?: TeacherTimeSlotGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TeacherTimeSlotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeacherTimeSlotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the TeacherTimeSlot model
     */
    readonly fields: TeacherTimeSlotFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for TeacherTimeSlot.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__TeacherTimeSlotClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    teacher<T extends Prisma.TeacherProfileDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TeacherProfileDefaultArgs<ExtArgs>>): Prisma.Prisma__TeacherProfileClient<runtime.Types.Result.GetResult<Prisma.$TeacherProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the TeacherTimeSlot model
 */
export interface TeacherTimeSlotFieldRefs {
    readonly id: Prisma.FieldRef<"TeacherTimeSlot", 'String'>;
    readonly teacherId: Prisma.FieldRef<"TeacherTimeSlot", 'String'>;
    readonly dayOfWeek: Prisma.FieldRef<"TeacherTimeSlot", 'String'>;
    readonly subject: Prisma.FieldRef<"TeacherTimeSlot", 'String'>;
    readonly startTime: Prisma.FieldRef<"TeacherTimeSlot", 'String'>;
    readonly endTime: Prisma.FieldRef<"TeacherTimeSlot", 'String'>;
    readonly isActive: Prisma.FieldRef<"TeacherTimeSlot", 'Boolean'>;
    readonly repeatWeekly: Prisma.FieldRef<"TeacherTimeSlot", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"TeacherTimeSlot", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"TeacherTimeSlot", 'DateTime'>;
}
/**
 * TeacherTimeSlot findUnique
 */
export type TeacherTimeSlotFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherTimeSlot
     */
    select?: Prisma.TeacherTimeSlotSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TeacherTimeSlot
     */
    omit?: Prisma.TeacherTimeSlotOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TeacherTimeSlotInclude<ExtArgs> | null;
    /**
     * Filter, which TeacherTimeSlot to fetch.
     */
    where: Prisma.TeacherTimeSlotWhereUniqueInput;
};
/**
 * TeacherTimeSlot findUniqueOrThrow
 */
export type TeacherTimeSlotFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherTimeSlot
     */
    select?: Prisma.TeacherTimeSlotSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TeacherTimeSlot
     */
    omit?: Prisma.TeacherTimeSlotOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TeacherTimeSlotInclude<ExtArgs> | null;
    /**
     * Filter, which TeacherTimeSlot to fetch.
     */
    where: Prisma.TeacherTimeSlotWhereUniqueInput;
};
/**
 * TeacherTimeSlot findFirst
 */
export type TeacherTimeSlotFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherTimeSlot
     */
    select?: Prisma.TeacherTimeSlotSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TeacherTimeSlot
     */
    omit?: Prisma.TeacherTimeSlotOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TeacherTimeSlotInclude<ExtArgs> | null;
    /**
     * Filter, which TeacherTimeSlot to fetch.
     */
    where?: Prisma.TeacherTimeSlotWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TeacherTimeSlots to fetch.
     */
    orderBy?: Prisma.TeacherTimeSlotOrderByWithRelationInput | Prisma.TeacherTimeSlotOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for TeacherTimeSlots.
     */
    cursor?: Prisma.TeacherTimeSlotWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TeacherTimeSlots from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TeacherTimeSlots.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of TeacherTimeSlots.
     */
    distinct?: Prisma.TeacherTimeSlotScalarFieldEnum | Prisma.TeacherTimeSlotScalarFieldEnum[];
};
/**
 * TeacherTimeSlot findFirstOrThrow
 */
export type TeacherTimeSlotFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherTimeSlot
     */
    select?: Prisma.TeacherTimeSlotSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TeacherTimeSlot
     */
    omit?: Prisma.TeacherTimeSlotOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TeacherTimeSlotInclude<ExtArgs> | null;
    /**
     * Filter, which TeacherTimeSlot to fetch.
     */
    where?: Prisma.TeacherTimeSlotWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TeacherTimeSlots to fetch.
     */
    orderBy?: Prisma.TeacherTimeSlotOrderByWithRelationInput | Prisma.TeacherTimeSlotOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for TeacherTimeSlots.
     */
    cursor?: Prisma.TeacherTimeSlotWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TeacherTimeSlots from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TeacherTimeSlots.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of TeacherTimeSlots.
     */
    distinct?: Prisma.TeacherTimeSlotScalarFieldEnum | Prisma.TeacherTimeSlotScalarFieldEnum[];
};
/**
 * TeacherTimeSlot findMany
 */
export type TeacherTimeSlotFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherTimeSlot
     */
    select?: Prisma.TeacherTimeSlotSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TeacherTimeSlot
     */
    omit?: Prisma.TeacherTimeSlotOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TeacherTimeSlotInclude<ExtArgs> | null;
    /**
     * Filter, which TeacherTimeSlots to fetch.
     */
    where?: Prisma.TeacherTimeSlotWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TeacherTimeSlots to fetch.
     */
    orderBy?: Prisma.TeacherTimeSlotOrderByWithRelationInput | Prisma.TeacherTimeSlotOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing TeacherTimeSlots.
     */
    cursor?: Prisma.TeacherTimeSlotWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TeacherTimeSlots from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TeacherTimeSlots.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of TeacherTimeSlots.
     */
    distinct?: Prisma.TeacherTimeSlotScalarFieldEnum | Prisma.TeacherTimeSlotScalarFieldEnum[];
};
/**
 * TeacherTimeSlot create
 */
export type TeacherTimeSlotCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherTimeSlot
     */
    select?: Prisma.TeacherTimeSlotSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TeacherTimeSlot
     */
    omit?: Prisma.TeacherTimeSlotOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TeacherTimeSlotInclude<ExtArgs> | null;
    /**
     * The data needed to create a TeacherTimeSlot.
     */
    data: Prisma.XOR<Prisma.TeacherTimeSlotCreateInput, Prisma.TeacherTimeSlotUncheckedCreateInput>;
};
/**
 * TeacherTimeSlot createMany
 */
export type TeacherTimeSlotCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many TeacherTimeSlots.
     */
    data: Prisma.TeacherTimeSlotCreateManyInput | Prisma.TeacherTimeSlotCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * TeacherTimeSlot createManyAndReturn
 */
export type TeacherTimeSlotCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherTimeSlot
     */
    select?: Prisma.TeacherTimeSlotSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the TeacherTimeSlot
     */
    omit?: Prisma.TeacherTimeSlotOmit<ExtArgs> | null;
    /**
     * The data used to create many TeacherTimeSlots.
     */
    data: Prisma.TeacherTimeSlotCreateManyInput | Prisma.TeacherTimeSlotCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TeacherTimeSlotIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * TeacherTimeSlot update
 */
export type TeacherTimeSlotUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherTimeSlot
     */
    select?: Prisma.TeacherTimeSlotSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TeacherTimeSlot
     */
    omit?: Prisma.TeacherTimeSlotOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TeacherTimeSlotInclude<ExtArgs> | null;
    /**
     * The data needed to update a TeacherTimeSlot.
     */
    data: Prisma.XOR<Prisma.TeacherTimeSlotUpdateInput, Prisma.TeacherTimeSlotUncheckedUpdateInput>;
    /**
     * Choose, which TeacherTimeSlot to update.
     */
    where: Prisma.TeacherTimeSlotWhereUniqueInput;
};
/**
 * TeacherTimeSlot updateMany
 */
export type TeacherTimeSlotUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update TeacherTimeSlots.
     */
    data: Prisma.XOR<Prisma.TeacherTimeSlotUpdateManyMutationInput, Prisma.TeacherTimeSlotUncheckedUpdateManyInput>;
    /**
     * Filter which TeacherTimeSlots to update
     */
    where?: Prisma.TeacherTimeSlotWhereInput;
    /**
     * Limit how many TeacherTimeSlots to update.
     */
    limit?: number;
};
/**
 * TeacherTimeSlot updateManyAndReturn
 */
export type TeacherTimeSlotUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherTimeSlot
     */
    select?: Prisma.TeacherTimeSlotSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the TeacherTimeSlot
     */
    omit?: Prisma.TeacherTimeSlotOmit<ExtArgs> | null;
    /**
     * The data used to update TeacherTimeSlots.
     */
    data: Prisma.XOR<Prisma.TeacherTimeSlotUpdateManyMutationInput, Prisma.TeacherTimeSlotUncheckedUpdateManyInput>;
    /**
     * Filter which TeacherTimeSlots to update
     */
    where?: Prisma.TeacherTimeSlotWhereInput;
    /**
     * Limit how many TeacherTimeSlots to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TeacherTimeSlotIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * TeacherTimeSlot upsert
 */
export type TeacherTimeSlotUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherTimeSlot
     */
    select?: Prisma.TeacherTimeSlotSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TeacherTimeSlot
     */
    omit?: Prisma.TeacherTimeSlotOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TeacherTimeSlotInclude<ExtArgs> | null;
    /**
     * The filter to search for the TeacherTimeSlot to update in case it exists.
     */
    where: Prisma.TeacherTimeSlotWhereUniqueInput;
    /**
     * In case the TeacherTimeSlot found by the `where` argument doesn't exist, create a new TeacherTimeSlot with this data.
     */
    create: Prisma.XOR<Prisma.TeacherTimeSlotCreateInput, Prisma.TeacherTimeSlotUncheckedCreateInput>;
    /**
     * In case the TeacherTimeSlot was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.TeacherTimeSlotUpdateInput, Prisma.TeacherTimeSlotUncheckedUpdateInput>;
};
/**
 * TeacherTimeSlot delete
 */
export type TeacherTimeSlotDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherTimeSlot
     */
    select?: Prisma.TeacherTimeSlotSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TeacherTimeSlot
     */
    omit?: Prisma.TeacherTimeSlotOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TeacherTimeSlotInclude<ExtArgs> | null;
    /**
     * Filter which TeacherTimeSlot to delete.
     */
    where: Prisma.TeacherTimeSlotWhereUniqueInput;
};
/**
 * TeacherTimeSlot deleteMany
 */
export type TeacherTimeSlotDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which TeacherTimeSlots to delete
     */
    where?: Prisma.TeacherTimeSlotWhereInput;
    /**
     * Limit how many TeacherTimeSlots to delete.
     */
    limit?: number;
};
/**
 * TeacherTimeSlot without action
 */
export type TeacherTimeSlotDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherTimeSlot
     */
    select?: Prisma.TeacherTimeSlotSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TeacherTimeSlot
     */
    omit?: Prisma.TeacherTimeSlotOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TeacherTimeSlotInclude<ExtArgs> | null;
};
//# sourceMappingURL=TeacherTimeSlot.d.ts.map