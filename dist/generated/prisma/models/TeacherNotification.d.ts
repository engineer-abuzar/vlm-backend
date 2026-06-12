import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.ts";
/**
 * Model TeacherNotification
 *
 */
export type TeacherNotificationModel = runtime.Types.Result.DefaultSelection<Prisma.$TeacherNotificationPayload>;
export type AggregateTeacherNotification = {
    _count: TeacherNotificationCountAggregateOutputType | null;
    _min: TeacherNotificationMinAggregateOutputType | null;
    _max: TeacherNotificationMaxAggregateOutputType | null;
};
export type TeacherNotificationMinAggregateOutputType = {
    id: string | null;
    teacherId: string | null;
    type: string | null;
    title: string | null;
    message: string | null;
    isRead: boolean | null;
    createdAt: Date | null;
};
export type TeacherNotificationMaxAggregateOutputType = {
    id: string | null;
    teacherId: string | null;
    type: string | null;
    title: string | null;
    message: string | null;
    isRead: boolean | null;
    createdAt: Date | null;
};
export type TeacherNotificationCountAggregateOutputType = {
    id: number;
    teacherId: number;
    type: number;
    title: number;
    message: number;
    isRead: number;
    createdAt: number;
    _all: number;
};
export type TeacherNotificationMinAggregateInputType = {
    id?: true;
    teacherId?: true;
    type?: true;
    title?: true;
    message?: true;
    isRead?: true;
    createdAt?: true;
};
export type TeacherNotificationMaxAggregateInputType = {
    id?: true;
    teacherId?: true;
    type?: true;
    title?: true;
    message?: true;
    isRead?: true;
    createdAt?: true;
};
export type TeacherNotificationCountAggregateInputType = {
    id?: true;
    teacherId?: true;
    type?: true;
    title?: true;
    message?: true;
    isRead?: true;
    createdAt?: true;
    _all?: true;
};
export type TeacherNotificationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which TeacherNotification to aggregate.
     */
    where?: Prisma.TeacherNotificationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TeacherNotifications to fetch.
     */
    orderBy?: Prisma.TeacherNotificationOrderByWithRelationInput | Prisma.TeacherNotificationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.TeacherNotificationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TeacherNotifications from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TeacherNotifications.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned TeacherNotifications
    **/
    _count?: true | TeacherNotificationCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: TeacherNotificationMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: TeacherNotificationMaxAggregateInputType;
};
export type GetTeacherNotificationAggregateType<T extends TeacherNotificationAggregateArgs> = {
    [P in keyof T & keyof AggregateTeacherNotification]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTeacherNotification[P]> : Prisma.GetScalarType<T[P], AggregateTeacherNotification[P]>;
};
export type TeacherNotificationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TeacherNotificationWhereInput;
    orderBy?: Prisma.TeacherNotificationOrderByWithAggregationInput | Prisma.TeacherNotificationOrderByWithAggregationInput[];
    by: Prisma.TeacherNotificationScalarFieldEnum[] | Prisma.TeacherNotificationScalarFieldEnum;
    having?: Prisma.TeacherNotificationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TeacherNotificationCountAggregateInputType | true;
    _min?: TeacherNotificationMinAggregateInputType;
    _max?: TeacherNotificationMaxAggregateInputType;
};
export type TeacherNotificationGroupByOutputType = {
    id: string;
    teacherId: string;
    type: string;
    title: string;
    message: string;
    isRead: boolean;
    createdAt: Date;
    _count: TeacherNotificationCountAggregateOutputType | null;
    _min: TeacherNotificationMinAggregateOutputType | null;
    _max: TeacherNotificationMaxAggregateOutputType | null;
};
export type GetTeacherNotificationGroupByPayload<T extends TeacherNotificationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TeacherNotificationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TeacherNotificationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TeacherNotificationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TeacherNotificationGroupByOutputType[P]>;
}>>;
export type TeacherNotificationWhereInput = {
    AND?: Prisma.TeacherNotificationWhereInput | Prisma.TeacherNotificationWhereInput[];
    OR?: Prisma.TeacherNotificationWhereInput[];
    NOT?: Prisma.TeacherNotificationWhereInput | Prisma.TeacherNotificationWhereInput[];
    id?: Prisma.StringFilter<"TeacherNotification"> | string;
    teacherId?: Prisma.StringFilter<"TeacherNotification"> | string;
    type?: Prisma.StringFilter<"TeacherNotification"> | string;
    title?: Prisma.StringFilter<"TeacherNotification"> | string;
    message?: Prisma.StringFilter<"TeacherNotification"> | string;
    isRead?: Prisma.BoolFilter<"TeacherNotification"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"TeacherNotification"> | Date | string;
    teacher?: Prisma.XOR<Prisma.TeacherProfileScalarRelationFilter, Prisma.TeacherProfileWhereInput>;
};
export type TeacherNotificationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    isRead?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    teacher?: Prisma.TeacherProfileOrderByWithRelationInput;
};
export type TeacherNotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.TeacherNotificationWhereInput | Prisma.TeacherNotificationWhereInput[];
    OR?: Prisma.TeacherNotificationWhereInput[];
    NOT?: Prisma.TeacherNotificationWhereInput | Prisma.TeacherNotificationWhereInput[];
    teacherId?: Prisma.StringFilter<"TeacherNotification"> | string;
    type?: Prisma.StringFilter<"TeacherNotification"> | string;
    title?: Prisma.StringFilter<"TeacherNotification"> | string;
    message?: Prisma.StringFilter<"TeacherNotification"> | string;
    isRead?: Prisma.BoolFilter<"TeacherNotification"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"TeacherNotification"> | Date | string;
    teacher?: Prisma.XOR<Prisma.TeacherProfileScalarRelationFilter, Prisma.TeacherProfileWhereInput>;
}, "id">;
export type TeacherNotificationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    isRead?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.TeacherNotificationCountOrderByAggregateInput;
    _max?: Prisma.TeacherNotificationMaxOrderByAggregateInput;
    _min?: Prisma.TeacherNotificationMinOrderByAggregateInput;
};
export type TeacherNotificationScalarWhereWithAggregatesInput = {
    AND?: Prisma.TeacherNotificationScalarWhereWithAggregatesInput | Prisma.TeacherNotificationScalarWhereWithAggregatesInput[];
    OR?: Prisma.TeacherNotificationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TeacherNotificationScalarWhereWithAggregatesInput | Prisma.TeacherNotificationScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"TeacherNotification"> | string;
    teacherId?: Prisma.StringWithAggregatesFilter<"TeacherNotification"> | string;
    type?: Prisma.StringWithAggregatesFilter<"TeacherNotification"> | string;
    title?: Prisma.StringWithAggregatesFilter<"TeacherNotification"> | string;
    message?: Prisma.StringWithAggregatesFilter<"TeacherNotification"> | string;
    isRead?: Prisma.BoolWithAggregatesFilter<"TeacherNotification"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"TeacherNotification"> | Date | string;
};
export type TeacherNotificationCreateInput = {
    id?: string;
    type: string;
    title: string;
    message: string;
    isRead?: boolean;
    createdAt?: Date | string;
    teacher: Prisma.TeacherProfileCreateNestedOneWithoutNotificationsInput;
};
export type TeacherNotificationUncheckedCreateInput = {
    id?: string;
    teacherId: string;
    type: string;
    title: string;
    message: string;
    isRead?: boolean;
    createdAt?: Date | string;
};
export type TeacherNotificationUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    isRead?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    teacher?: Prisma.TeacherProfileUpdateOneRequiredWithoutNotificationsNestedInput;
};
export type TeacherNotificationUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    teacherId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    isRead?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TeacherNotificationCreateManyInput = {
    id?: string;
    teacherId: string;
    type: string;
    title: string;
    message: string;
    isRead?: boolean;
    createdAt?: Date | string;
};
export type TeacherNotificationUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    isRead?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TeacherNotificationUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    teacherId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    isRead?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TeacherNotificationListRelationFilter = {
    every?: Prisma.TeacherNotificationWhereInput;
    some?: Prisma.TeacherNotificationWhereInput;
    none?: Prisma.TeacherNotificationWhereInput;
};
export type TeacherNotificationOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type TeacherNotificationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    isRead?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type TeacherNotificationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    isRead?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type TeacherNotificationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    isRead?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type TeacherNotificationCreateNestedManyWithoutTeacherInput = {
    create?: Prisma.XOR<Prisma.TeacherNotificationCreateWithoutTeacherInput, Prisma.TeacherNotificationUncheckedCreateWithoutTeacherInput> | Prisma.TeacherNotificationCreateWithoutTeacherInput[] | Prisma.TeacherNotificationUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: Prisma.TeacherNotificationCreateOrConnectWithoutTeacherInput | Prisma.TeacherNotificationCreateOrConnectWithoutTeacherInput[];
    createMany?: Prisma.TeacherNotificationCreateManyTeacherInputEnvelope;
    connect?: Prisma.TeacherNotificationWhereUniqueInput | Prisma.TeacherNotificationWhereUniqueInput[];
};
export type TeacherNotificationUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: Prisma.XOR<Prisma.TeacherNotificationCreateWithoutTeacherInput, Prisma.TeacherNotificationUncheckedCreateWithoutTeacherInput> | Prisma.TeacherNotificationCreateWithoutTeacherInput[] | Prisma.TeacherNotificationUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: Prisma.TeacherNotificationCreateOrConnectWithoutTeacherInput | Prisma.TeacherNotificationCreateOrConnectWithoutTeacherInput[];
    createMany?: Prisma.TeacherNotificationCreateManyTeacherInputEnvelope;
    connect?: Prisma.TeacherNotificationWhereUniqueInput | Prisma.TeacherNotificationWhereUniqueInput[];
};
export type TeacherNotificationUpdateManyWithoutTeacherNestedInput = {
    create?: Prisma.XOR<Prisma.TeacherNotificationCreateWithoutTeacherInput, Prisma.TeacherNotificationUncheckedCreateWithoutTeacherInput> | Prisma.TeacherNotificationCreateWithoutTeacherInput[] | Prisma.TeacherNotificationUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: Prisma.TeacherNotificationCreateOrConnectWithoutTeacherInput | Prisma.TeacherNotificationCreateOrConnectWithoutTeacherInput[];
    upsert?: Prisma.TeacherNotificationUpsertWithWhereUniqueWithoutTeacherInput | Prisma.TeacherNotificationUpsertWithWhereUniqueWithoutTeacherInput[];
    createMany?: Prisma.TeacherNotificationCreateManyTeacherInputEnvelope;
    set?: Prisma.TeacherNotificationWhereUniqueInput | Prisma.TeacherNotificationWhereUniqueInput[];
    disconnect?: Prisma.TeacherNotificationWhereUniqueInput | Prisma.TeacherNotificationWhereUniqueInput[];
    delete?: Prisma.TeacherNotificationWhereUniqueInput | Prisma.TeacherNotificationWhereUniqueInput[];
    connect?: Prisma.TeacherNotificationWhereUniqueInput | Prisma.TeacherNotificationWhereUniqueInput[];
    update?: Prisma.TeacherNotificationUpdateWithWhereUniqueWithoutTeacherInput | Prisma.TeacherNotificationUpdateWithWhereUniqueWithoutTeacherInput[];
    updateMany?: Prisma.TeacherNotificationUpdateManyWithWhereWithoutTeacherInput | Prisma.TeacherNotificationUpdateManyWithWhereWithoutTeacherInput[];
    deleteMany?: Prisma.TeacherNotificationScalarWhereInput | Prisma.TeacherNotificationScalarWhereInput[];
};
export type TeacherNotificationUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: Prisma.XOR<Prisma.TeacherNotificationCreateWithoutTeacherInput, Prisma.TeacherNotificationUncheckedCreateWithoutTeacherInput> | Prisma.TeacherNotificationCreateWithoutTeacherInput[] | Prisma.TeacherNotificationUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: Prisma.TeacherNotificationCreateOrConnectWithoutTeacherInput | Prisma.TeacherNotificationCreateOrConnectWithoutTeacherInput[];
    upsert?: Prisma.TeacherNotificationUpsertWithWhereUniqueWithoutTeacherInput | Prisma.TeacherNotificationUpsertWithWhereUniqueWithoutTeacherInput[];
    createMany?: Prisma.TeacherNotificationCreateManyTeacherInputEnvelope;
    set?: Prisma.TeacherNotificationWhereUniqueInput | Prisma.TeacherNotificationWhereUniqueInput[];
    disconnect?: Prisma.TeacherNotificationWhereUniqueInput | Prisma.TeacherNotificationWhereUniqueInput[];
    delete?: Prisma.TeacherNotificationWhereUniqueInput | Prisma.TeacherNotificationWhereUniqueInput[];
    connect?: Prisma.TeacherNotificationWhereUniqueInput | Prisma.TeacherNotificationWhereUniqueInput[];
    update?: Prisma.TeacherNotificationUpdateWithWhereUniqueWithoutTeacherInput | Prisma.TeacherNotificationUpdateWithWhereUniqueWithoutTeacherInput[];
    updateMany?: Prisma.TeacherNotificationUpdateManyWithWhereWithoutTeacherInput | Prisma.TeacherNotificationUpdateManyWithWhereWithoutTeacherInput[];
    deleteMany?: Prisma.TeacherNotificationScalarWhereInput | Prisma.TeacherNotificationScalarWhereInput[];
};
export type TeacherNotificationCreateWithoutTeacherInput = {
    id?: string;
    type: string;
    title: string;
    message: string;
    isRead?: boolean;
    createdAt?: Date | string;
};
export type TeacherNotificationUncheckedCreateWithoutTeacherInput = {
    id?: string;
    type: string;
    title: string;
    message: string;
    isRead?: boolean;
    createdAt?: Date | string;
};
export type TeacherNotificationCreateOrConnectWithoutTeacherInput = {
    where: Prisma.TeacherNotificationWhereUniqueInput;
    create: Prisma.XOR<Prisma.TeacherNotificationCreateWithoutTeacherInput, Prisma.TeacherNotificationUncheckedCreateWithoutTeacherInput>;
};
export type TeacherNotificationCreateManyTeacherInputEnvelope = {
    data: Prisma.TeacherNotificationCreateManyTeacherInput | Prisma.TeacherNotificationCreateManyTeacherInput[];
    skipDuplicates?: boolean;
};
export type TeacherNotificationUpsertWithWhereUniqueWithoutTeacherInput = {
    where: Prisma.TeacherNotificationWhereUniqueInput;
    update: Prisma.XOR<Prisma.TeacherNotificationUpdateWithoutTeacherInput, Prisma.TeacherNotificationUncheckedUpdateWithoutTeacherInput>;
    create: Prisma.XOR<Prisma.TeacherNotificationCreateWithoutTeacherInput, Prisma.TeacherNotificationUncheckedCreateWithoutTeacherInput>;
};
export type TeacherNotificationUpdateWithWhereUniqueWithoutTeacherInput = {
    where: Prisma.TeacherNotificationWhereUniqueInput;
    data: Prisma.XOR<Prisma.TeacherNotificationUpdateWithoutTeacherInput, Prisma.TeacherNotificationUncheckedUpdateWithoutTeacherInput>;
};
export type TeacherNotificationUpdateManyWithWhereWithoutTeacherInput = {
    where: Prisma.TeacherNotificationScalarWhereInput;
    data: Prisma.XOR<Prisma.TeacherNotificationUpdateManyMutationInput, Prisma.TeacherNotificationUncheckedUpdateManyWithoutTeacherInput>;
};
export type TeacherNotificationScalarWhereInput = {
    AND?: Prisma.TeacherNotificationScalarWhereInput | Prisma.TeacherNotificationScalarWhereInput[];
    OR?: Prisma.TeacherNotificationScalarWhereInput[];
    NOT?: Prisma.TeacherNotificationScalarWhereInput | Prisma.TeacherNotificationScalarWhereInput[];
    id?: Prisma.StringFilter<"TeacherNotification"> | string;
    teacherId?: Prisma.StringFilter<"TeacherNotification"> | string;
    type?: Prisma.StringFilter<"TeacherNotification"> | string;
    title?: Prisma.StringFilter<"TeacherNotification"> | string;
    message?: Prisma.StringFilter<"TeacherNotification"> | string;
    isRead?: Prisma.BoolFilter<"TeacherNotification"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"TeacherNotification"> | Date | string;
};
export type TeacherNotificationCreateManyTeacherInput = {
    id?: string;
    type: string;
    title: string;
    message: string;
    isRead?: boolean;
    createdAt?: Date | string;
};
export type TeacherNotificationUpdateWithoutTeacherInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    isRead?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TeacherNotificationUncheckedUpdateWithoutTeacherInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    isRead?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TeacherNotificationUncheckedUpdateManyWithoutTeacherInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    isRead?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TeacherNotificationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    teacherId?: boolean;
    type?: boolean;
    title?: boolean;
    message?: boolean;
    isRead?: boolean;
    createdAt?: boolean;
    teacher?: boolean | Prisma.TeacherProfileDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["teacherNotification"]>;
export type TeacherNotificationSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    teacherId?: boolean;
    type?: boolean;
    title?: boolean;
    message?: boolean;
    isRead?: boolean;
    createdAt?: boolean;
    teacher?: boolean | Prisma.TeacherProfileDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["teacherNotification"]>;
export type TeacherNotificationSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    teacherId?: boolean;
    type?: boolean;
    title?: boolean;
    message?: boolean;
    isRead?: boolean;
    createdAt?: boolean;
    teacher?: boolean | Prisma.TeacherProfileDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["teacherNotification"]>;
export type TeacherNotificationSelectScalar = {
    id?: boolean;
    teacherId?: boolean;
    type?: boolean;
    title?: boolean;
    message?: boolean;
    isRead?: boolean;
    createdAt?: boolean;
};
export type TeacherNotificationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "teacherId" | "type" | "title" | "message" | "isRead" | "createdAt", ExtArgs["result"]["teacherNotification"]>;
export type TeacherNotificationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    teacher?: boolean | Prisma.TeacherProfileDefaultArgs<ExtArgs>;
};
export type TeacherNotificationIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    teacher?: boolean | Prisma.TeacherProfileDefaultArgs<ExtArgs>;
};
export type TeacherNotificationIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    teacher?: boolean | Prisma.TeacherProfileDefaultArgs<ExtArgs>;
};
export type $TeacherNotificationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "TeacherNotification";
    objects: {
        teacher: Prisma.$TeacherProfilePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        teacherId: string;
        type: string;
        title: string;
        message: string;
        isRead: boolean;
        createdAt: Date;
    }, ExtArgs["result"]["teacherNotification"]>;
    composites: {};
};
export type TeacherNotificationGetPayload<S extends boolean | null | undefined | TeacherNotificationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TeacherNotificationPayload, S>;
export type TeacherNotificationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TeacherNotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TeacherNotificationCountAggregateInputType | true;
};
export interface TeacherNotificationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['TeacherNotification'];
        meta: {
            name: 'TeacherNotification';
        };
    };
    /**
     * Find zero or one TeacherNotification that matches the filter.
     * @param {TeacherNotificationFindUniqueArgs} args - Arguments to find a TeacherNotification
     * @example
     * // Get one TeacherNotification
     * const teacherNotification = await prisma.teacherNotification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeacherNotificationFindUniqueArgs>(args: Prisma.SelectSubset<T, TeacherNotificationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TeacherNotificationClient<runtime.Types.Result.GetResult<Prisma.$TeacherNotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one TeacherNotification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeacherNotificationFindUniqueOrThrowArgs} args - Arguments to find a TeacherNotification
     * @example
     * // Get one TeacherNotification
     * const teacherNotification = await prisma.teacherNotification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeacherNotificationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TeacherNotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TeacherNotificationClient<runtime.Types.Result.GetResult<Prisma.$TeacherNotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first TeacherNotification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherNotificationFindFirstArgs} args - Arguments to find a TeacherNotification
     * @example
     * // Get one TeacherNotification
     * const teacherNotification = await prisma.teacherNotification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeacherNotificationFindFirstArgs>(args?: Prisma.SelectSubset<T, TeacherNotificationFindFirstArgs<ExtArgs>>): Prisma.Prisma__TeacherNotificationClient<runtime.Types.Result.GetResult<Prisma.$TeacherNotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first TeacherNotification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherNotificationFindFirstOrThrowArgs} args - Arguments to find a TeacherNotification
     * @example
     * // Get one TeacherNotification
     * const teacherNotification = await prisma.teacherNotification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeacherNotificationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TeacherNotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TeacherNotificationClient<runtime.Types.Result.GetResult<Prisma.$TeacherNotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more TeacherNotifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherNotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TeacherNotifications
     * const teacherNotifications = await prisma.teacherNotification.findMany()
     *
     * // Get first 10 TeacherNotifications
     * const teacherNotifications = await prisma.teacherNotification.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const teacherNotificationWithIdOnly = await prisma.teacherNotification.findMany({ select: { id: true } })
     *
     */
    findMany<T extends TeacherNotificationFindManyArgs>(args?: Prisma.SelectSubset<T, TeacherNotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TeacherNotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a TeacherNotification.
     * @param {TeacherNotificationCreateArgs} args - Arguments to create a TeacherNotification.
     * @example
     * // Create one TeacherNotification
     * const TeacherNotification = await prisma.teacherNotification.create({
     *   data: {
     *     // ... data to create a TeacherNotification
     *   }
     * })
     *
     */
    create<T extends TeacherNotificationCreateArgs>(args: Prisma.SelectSubset<T, TeacherNotificationCreateArgs<ExtArgs>>): Prisma.Prisma__TeacherNotificationClient<runtime.Types.Result.GetResult<Prisma.$TeacherNotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many TeacherNotifications.
     * @param {TeacherNotificationCreateManyArgs} args - Arguments to create many TeacherNotifications.
     * @example
     * // Create many TeacherNotifications
     * const teacherNotification = await prisma.teacherNotification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends TeacherNotificationCreateManyArgs>(args?: Prisma.SelectSubset<T, TeacherNotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many TeacherNotifications and returns the data saved in the database.
     * @param {TeacherNotificationCreateManyAndReturnArgs} args - Arguments to create many TeacherNotifications.
     * @example
     * // Create many TeacherNotifications
     * const teacherNotification = await prisma.teacherNotification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many TeacherNotifications and only return the `id`
     * const teacherNotificationWithIdOnly = await prisma.teacherNotification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends TeacherNotificationCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TeacherNotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TeacherNotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a TeacherNotification.
     * @param {TeacherNotificationDeleteArgs} args - Arguments to delete one TeacherNotification.
     * @example
     * // Delete one TeacherNotification
     * const TeacherNotification = await prisma.teacherNotification.delete({
     *   where: {
     *     // ... filter to delete one TeacherNotification
     *   }
     * })
     *
     */
    delete<T extends TeacherNotificationDeleteArgs>(args: Prisma.SelectSubset<T, TeacherNotificationDeleteArgs<ExtArgs>>): Prisma.Prisma__TeacherNotificationClient<runtime.Types.Result.GetResult<Prisma.$TeacherNotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one TeacherNotification.
     * @param {TeacherNotificationUpdateArgs} args - Arguments to update one TeacherNotification.
     * @example
     * // Update one TeacherNotification
     * const teacherNotification = await prisma.teacherNotification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends TeacherNotificationUpdateArgs>(args: Prisma.SelectSubset<T, TeacherNotificationUpdateArgs<ExtArgs>>): Prisma.Prisma__TeacherNotificationClient<runtime.Types.Result.GetResult<Prisma.$TeacherNotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more TeacherNotifications.
     * @param {TeacherNotificationDeleteManyArgs} args - Arguments to filter TeacherNotifications to delete.
     * @example
     * // Delete a few TeacherNotifications
     * const { count } = await prisma.teacherNotification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends TeacherNotificationDeleteManyArgs>(args?: Prisma.SelectSubset<T, TeacherNotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more TeacherNotifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherNotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TeacherNotifications
     * const teacherNotification = await prisma.teacherNotification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends TeacherNotificationUpdateManyArgs>(args: Prisma.SelectSubset<T, TeacherNotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more TeacherNotifications and returns the data updated in the database.
     * @param {TeacherNotificationUpdateManyAndReturnArgs} args - Arguments to update many TeacherNotifications.
     * @example
     * // Update many TeacherNotifications
     * const teacherNotification = await prisma.teacherNotification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more TeacherNotifications and only return the `id`
     * const teacherNotificationWithIdOnly = await prisma.teacherNotification.updateManyAndReturn({
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
    updateManyAndReturn<T extends TeacherNotificationUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TeacherNotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TeacherNotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one TeacherNotification.
     * @param {TeacherNotificationUpsertArgs} args - Arguments to update or create a TeacherNotification.
     * @example
     * // Update or create a TeacherNotification
     * const teacherNotification = await prisma.teacherNotification.upsert({
     *   create: {
     *     // ... data to create a TeacherNotification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TeacherNotification we want to update
     *   }
     * })
     */
    upsert<T extends TeacherNotificationUpsertArgs>(args: Prisma.SelectSubset<T, TeacherNotificationUpsertArgs<ExtArgs>>): Prisma.Prisma__TeacherNotificationClient<runtime.Types.Result.GetResult<Prisma.$TeacherNotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of TeacherNotifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherNotificationCountArgs} args - Arguments to filter TeacherNotifications to count.
     * @example
     * // Count the number of TeacherNotifications
     * const count = await prisma.teacherNotification.count({
     *   where: {
     *     // ... the filter for the TeacherNotifications we want to count
     *   }
     * })
    **/
    count<T extends TeacherNotificationCountArgs>(args?: Prisma.Subset<T, TeacherNotificationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TeacherNotificationCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a TeacherNotification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherNotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeacherNotificationAggregateArgs>(args: Prisma.Subset<T, TeacherNotificationAggregateArgs>): Prisma.PrismaPromise<GetTeacherNotificationAggregateType<T>>;
    /**
     * Group by TeacherNotification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherNotificationGroupByArgs} args - Group by arguments.
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
    groupBy<T extends TeacherNotificationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TeacherNotificationGroupByArgs['orderBy'];
    } : {
        orderBy?: TeacherNotificationGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TeacherNotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeacherNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the TeacherNotification model
     */
    readonly fields: TeacherNotificationFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for TeacherNotification.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__TeacherNotificationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the TeacherNotification model
 */
export interface TeacherNotificationFieldRefs {
    readonly id: Prisma.FieldRef<"TeacherNotification", 'String'>;
    readonly teacherId: Prisma.FieldRef<"TeacherNotification", 'String'>;
    readonly type: Prisma.FieldRef<"TeacherNotification", 'String'>;
    readonly title: Prisma.FieldRef<"TeacherNotification", 'String'>;
    readonly message: Prisma.FieldRef<"TeacherNotification", 'String'>;
    readonly isRead: Prisma.FieldRef<"TeacherNotification", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"TeacherNotification", 'DateTime'>;
}
/**
 * TeacherNotification findUnique
 */
export type TeacherNotificationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherNotification
     */
    select?: Prisma.TeacherNotificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TeacherNotification
     */
    omit?: Prisma.TeacherNotificationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TeacherNotificationInclude<ExtArgs> | null;
    /**
     * Filter, which TeacherNotification to fetch.
     */
    where: Prisma.TeacherNotificationWhereUniqueInput;
};
/**
 * TeacherNotification findUniqueOrThrow
 */
export type TeacherNotificationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherNotification
     */
    select?: Prisma.TeacherNotificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TeacherNotification
     */
    omit?: Prisma.TeacherNotificationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TeacherNotificationInclude<ExtArgs> | null;
    /**
     * Filter, which TeacherNotification to fetch.
     */
    where: Prisma.TeacherNotificationWhereUniqueInput;
};
/**
 * TeacherNotification findFirst
 */
export type TeacherNotificationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherNotification
     */
    select?: Prisma.TeacherNotificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TeacherNotification
     */
    omit?: Prisma.TeacherNotificationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TeacherNotificationInclude<ExtArgs> | null;
    /**
     * Filter, which TeacherNotification to fetch.
     */
    where?: Prisma.TeacherNotificationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TeacherNotifications to fetch.
     */
    orderBy?: Prisma.TeacherNotificationOrderByWithRelationInput | Prisma.TeacherNotificationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for TeacherNotifications.
     */
    cursor?: Prisma.TeacherNotificationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TeacherNotifications from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TeacherNotifications.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of TeacherNotifications.
     */
    distinct?: Prisma.TeacherNotificationScalarFieldEnum | Prisma.TeacherNotificationScalarFieldEnum[];
};
/**
 * TeacherNotification findFirstOrThrow
 */
export type TeacherNotificationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherNotification
     */
    select?: Prisma.TeacherNotificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TeacherNotification
     */
    omit?: Prisma.TeacherNotificationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TeacherNotificationInclude<ExtArgs> | null;
    /**
     * Filter, which TeacherNotification to fetch.
     */
    where?: Prisma.TeacherNotificationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TeacherNotifications to fetch.
     */
    orderBy?: Prisma.TeacherNotificationOrderByWithRelationInput | Prisma.TeacherNotificationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for TeacherNotifications.
     */
    cursor?: Prisma.TeacherNotificationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TeacherNotifications from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TeacherNotifications.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of TeacherNotifications.
     */
    distinct?: Prisma.TeacherNotificationScalarFieldEnum | Prisma.TeacherNotificationScalarFieldEnum[];
};
/**
 * TeacherNotification findMany
 */
export type TeacherNotificationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherNotification
     */
    select?: Prisma.TeacherNotificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TeacherNotification
     */
    omit?: Prisma.TeacherNotificationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TeacherNotificationInclude<ExtArgs> | null;
    /**
     * Filter, which TeacherNotifications to fetch.
     */
    where?: Prisma.TeacherNotificationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TeacherNotifications to fetch.
     */
    orderBy?: Prisma.TeacherNotificationOrderByWithRelationInput | Prisma.TeacherNotificationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing TeacherNotifications.
     */
    cursor?: Prisma.TeacherNotificationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TeacherNotifications from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TeacherNotifications.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of TeacherNotifications.
     */
    distinct?: Prisma.TeacherNotificationScalarFieldEnum | Prisma.TeacherNotificationScalarFieldEnum[];
};
/**
 * TeacherNotification create
 */
export type TeacherNotificationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherNotification
     */
    select?: Prisma.TeacherNotificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TeacherNotification
     */
    omit?: Prisma.TeacherNotificationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TeacherNotificationInclude<ExtArgs> | null;
    /**
     * The data needed to create a TeacherNotification.
     */
    data: Prisma.XOR<Prisma.TeacherNotificationCreateInput, Prisma.TeacherNotificationUncheckedCreateInput>;
};
/**
 * TeacherNotification createMany
 */
export type TeacherNotificationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many TeacherNotifications.
     */
    data: Prisma.TeacherNotificationCreateManyInput | Prisma.TeacherNotificationCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * TeacherNotification createManyAndReturn
 */
export type TeacherNotificationCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherNotification
     */
    select?: Prisma.TeacherNotificationSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the TeacherNotification
     */
    omit?: Prisma.TeacherNotificationOmit<ExtArgs> | null;
    /**
     * The data used to create many TeacherNotifications.
     */
    data: Prisma.TeacherNotificationCreateManyInput | Prisma.TeacherNotificationCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TeacherNotificationIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * TeacherNotification update
 */
export type TeacherNotificationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherNotification
     */
    select?: Prisma.TeacherNotificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TeacherNotification
     */
    omit?: Prisma.TeacherNotificationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TeacherNotificationInclude<ExtArgs> | null;
    /**
     * The data needed to update a TeacherNotification.
     */
    data: Prisma.XOR<Prisma.TeacherNotificationUpdateInput, Prisma.TeacherNotificationUncheckedUpdateInput>;
    /**
     * Choose, which TeacherNotification to update.
     */
    where: Prisma.TeacherNotificationWhereUniqueInput;
};
/**
 * TeacherNotification updateMany
 */
export type TeacherNotificationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update TeacherNotifications.
     */
    data: Prisma.XOR<Prisma.TeacherNotificationUpdateManyMutationInput, Prisma.TeacherNotificationUncheckedUpdateManyInput>;
    /**
     * Filter which TeacherNotifications to update
     */
    where?: Prisma.TeacherNotificationWhereInput;
    /**
     * Limit how many TeacherNotifications to update.
     */
    limit?: number;
};
/**
 * TeacherNotification updateManyAndReturn
 */
export type TeacherNotificationUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherNotification
     */
    select?: Prisma.TeacherNotificationSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the TeacherNotification
     */
    omit?: Prisma.TeacherNotificationOmit<ExtArgs> | null;
    /**
     * The data used to update TeacherNotifications.
     */
    data: Prisma.XOR<Prisma.TeacherNotificationUpdateManyMutationInput, Prisma.TeacherNotificationUncheckedUpdateManyInput>;
    /**
     * Filter which TeacherNotifications to update
     */
    where?: Prisma.TeacherNotificationWhereInput;
    /**
     * Limit how many TeacherNotifications to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TeacherNotificationIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * TeacherNotification upsert
 */
export type TeacherNotificationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherNotification
     */
    select?: Prisma.TeacherNotificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TeacherNotification
     */
    omit?: Prisma.TeacherNotificationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TeacherNotificationInclude<ExtArgs> | null;
    /**
     * The filter to search for the TeacherNotification to update in case it exists.
     */
    where: Prisma.TeacherNotificationWhereUniqueInput;
    /**
     * In case the TeacherNotification found by the `where` argument doesn't exist, create a new TeacherNotification with this data.
     */
    create: Prisma.XOR<Prisma.TeacherNotificationCreateInput, Prisma.TeacherNotificationUncheckedCreateInput>;
    /**
     * In case the TeacherNotification was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.TeacherNotificationUpdateInput, Prisma.TeacherNotificationUncheckedUpdateInput>;
};
/**
 * TeacherNotification delete
 */
export type TeacherNotificationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherNotification
     */
    select?: Prisma.TeacherNotificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TeacherNotification
     */
    omit?: Prisma.TeacherNotificationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TeacherNotificationInclude<ExtArgs> | null;
    /**
     * Filter which TeacherNotification to delete.
     */
    where: Prisma.TeacherNotificationWhereUniqueInput;
};
/**
 * TeacherNotification deleteMany
 */
export type TeacherNotificationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which TeacherNotifications to delete
     */
    where?: Prisma.TeacherNotificationWhereInput;
    /**
     * Limit how many TeacherNotifications to delete.
     */
    limit?: number;
};
/**
 * TeacherNotification without action
 */
export type TeacherNotificationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherNotification
     */
    select?: Prisma.TeacherNotificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TeacherNotification
     */
    omit?: Prisma.TeacherNotificationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TeacherNotificationInclude<ExtArgs> | null;
};
//# sourceMappingURL=TeacherNotification.d.ts.map