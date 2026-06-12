import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.ts";
/**
 * Model TeacherProfile
 *
 */
export type TeacherProfileModel = runtime.Types.Result.DefaultSelection<Prisma.$TeacherProfilePayload>;
export type AggregateTeacherProfile = {
    _count: TeacherProfileCountAggregateOutputType | null;
    _avg: TeacherProfileAvgAggregateOutputType | null;
    _sum: TeacherProfileSumAggregateOutputType | null;
    _min: TeacherProfileMinAggregateOutputType | null;
    _max: TeacherProfileMaxAggregateOutputType | null;
};
export type TeacherProfileAvgAggregateOutputType = {
    passingYear: number | null;
    experience: number | null;
    experienceMonths: number | null;
    rating: number | null;
};
export type TeacherProfileSumAggregateOutputType = {
    passingYear: number | null;
    experience: number | null;
    experienceMonths: number | null;
    rating: number | null;
};
export type TeacherProfileMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    fullName: string | null;
    gender: string | null;
    dob: Date | null;
    address: string | null;
    city: string | null;
    state: string | null;
    pincode: string | null;
    profilePhoto: string | null;
    qualification: string | null;
    highestQualification: string | null;
    instituteName: string | null;
    passingYear: number | null;
    teachingCertification: string | null;
    hasBEd: boolean | null;
    experience: number | null;
    experienceMonths: number | null;
    teachingMode: string | null;
    experienceType: string | null;
    resumeUrl: string | null;
    experienceSummary: string | null;
    aadhaarUrl: string | null;
    qualificationDocUrl: string | null;
    experienceDocUrl: string | null;
    demoVideoUrl: string | null;
    verificationStatus: string | null;
    rejectionReason: string | null;
    reapplicationDate: Date | null;
    availabilityStatus: string | null;
    interviewDate: Date | null;
    interviewLink: string | null;
    rating: number | null;
};
export type TeacherProfileMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    fullName: string | null;
    gender: string | null;
    dob: Date | null;
    address: string | null;
    city: string | null;
    state: string | null;
    pincode: string | null;
    profilePhoto: string | null;
    qualification: string | null;
    highestQualification: string | null;
    instituteName: string | null;
    passingYear: number | null;
    teachingCertification: string | null;
    hasBEd: boolean | null;
    experience: number | null;
    experienceMonths: number | null;
    teachingMode: string | null;
    experienceType: string | null;
    resumeUrl: string | null;
    experienceSummary: string | null;
    aadhaarUrl: string | null;
    qualificationDocUrl: string | null;
    experienceDocUrl: string | null;
    demoVideoUrl: string | null;
    verificationStatus: string | null;
    rejectionReason: string | null;
    reapplicationDate: Date | null;
    availabilityStatus: string | null;
    interviewDate: Date | null;
    interviewLink: string | null;
    rating: number | null;
};
export type TeacherProfileCountAggregateOutputType = {
    id: number;
    userId: number;
    fullName: number;
    gender: number;
    dob: number;
    address: number;
    city: number;
    state: number;
    pincode: number;
    profilePhoto: number;
    qualification: number;
    highestQualification: number;
    instituteName: number;
    passingYear: number;
    teachingCertification: number;
    hasBEd: number;
    experience: number;
    experienceMonths: number;
    teachingMode: number;
    experienceType: number;
    resumeUrl: number;
    experienceSummary: number;
    subjects: number;
    classes: number;
    boards: number;
    languages: number;
    aadhaarUrl: number;
    qualificationDocUrl: number;
    experienceDocUrl: number;
    demoVideoUrl: number;
    verificationStatus: number;
    rejectionReason: number;
    reapplicationDate: number;
    availabilityStatus: number;
    interviewDate: number;
    interviewLink: number;
    rating: number;
    _all: number;
};
export type TeacherProfileAvgAggregateInputType = {
    passingYear?: true;
    experience?: true;
    experienceMonths?: true;
    rating?: true;
};
export type TeacherProfileSumAggregateInputType = {
    passingYear?: true;
    experience?: true;
    experienceMonths?: true;
    rating?: true;
};
export type TeacherProfileMinAggregateInputType = {
    id?: true;
    userId?: true;
    fullName?: true;
    gender?: true;
    dob?: true;
    address?: true;
    city?: true;
    state?: true;
    pincode?: true;
    profilePhoto?: true;
    qualification?: true;
    highestQualification?: true;
    instituteName?: true;
    passingYear?: true;
    teachingCertification?: true;
    hasBEd?: true;
    experience?: true;
    experienceMonths?: true;
    teachingMode?: true;
    experienceType?: true;
    resumeUrl?: true;
    experienceSummary?: true;
    aadhaarUrl?: true;
    qualificationDocUrl?: true;
    experienceDocUrl?: true;
    demoVideoUrl?: true;
    verificationStatus?: true;
    rejectionReason?: true;
    reapplicationDate?: true;
    availabilityStatus?: true;
    interviewDate?: true;
    interviewLink?: true;
    rating?: true;
};
export type TeacherProfileMaxAggregateInputType = {
    id?: true;
    userId?: true;
    fullName?: true;
    gender?: true;
    dob?: true;
    address?: true;
    city?: true;
    state?: true;
    pincode?: true;
    profilePhoto?: true;
    qualification?: true;
    highestQualification?: true;
    instituteName?: true;
    passingYear?: true;
    teachingCertification?: true;
    hasBEd?: true;
    experience?: true;
    experienceMonths?: true;
    teachingMode?: true;
    experienceType?: true;
    resumeUrl?: true;
    experienceSummary?: true;
    aadhaarUrl?: true;
    qualificationDocUrl?: true;
    experienceDocUrl?: true;
    demoVideoUrl?: true;
    verificationStatus?: true;
    rejectionReason?: true;
    reapplicationDate?: true;
    availabilityStatus?: true;
    interviewDate?: true;
    interviewLink?: true;
    rating?: true;
};
export type TeacherProfileCountAggregateInputType = {
    id?: true;
    userId?: true;
    fullName?: true;
    gender?: true;
    dob?: true;
    address?: true;
    city?: true;
    state?: true;
    pincode?: true;
    profilePhoto?: true;
    qualification?: true;
    highestQualification?: true;
    instituteName?: true;
    passingYear?: true;
    teachingCertification?: true;
    hasBEd?: true;
    experience?: true;
    experienceMonths?: true;
    teachingMode?: true;
    experienceType?: true;
    resumeUrl?: true;
    experienceSummary?: true;
    subjects?: true;
    classes?: true;
    boards?: true;
    languages?: true;
    aadhaarUrl?: true;
    qualificationDocUrl?: true;
    experienceDocUrl?: true;
    demoVideoUrl?: true;
    verificationStatus?: true;
    rejectionReason?: true;
    reapplicationDate?: true;
    availabilityStatus?: true;
    interviewDate?: true;
    interviewLink?: true;
    rating?: true;
    _all?: true;
};
export type TeacherProfileAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which TeacherProfile to aggregate.
     */
    where?: Prisma.TeacherProfileWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TeacherProfiles to fetch.
     */
    orderBy?: Prisma.TeacherProfileOrderByWithRelationInput | Prisma.TeacherProfileOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.TeacherProfileWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TeacherProfiles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TeacherProfiles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned TeacherProfiles
    **/
    _count?: true | TeacherProfileCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: TeacherProfileAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: TeacherProfileSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: TeacherProfileMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: TeacherProfileMaxAggregateInputType;
};
export type GetTeacherProfileAggregateType<T extends TeacherProfileAggregateArgs> = {
    [P in keyof T & keyof AggregateTeacherProfile]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTeacherProfile[P]> : Prisma.GetScalarType<T[P], AggregateTeacherProfile[P]>;
};
export type TeacherProfileGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TeacherProfileWhereInput;
    orderBy?: Prisma.TeacherProfileOrderByWithAggregationInput | Prisma.TeacherProfileOrderByWithAggregationInput[];
    by: Prisma.TeacherProfileScalarFieldEnum[] | Prisma.TeacherProfileScalarFieldEnum;
    having?: Prisma.TeacherProfileScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TeacherProfileCountAggregateInputType | true;
    _avg?: TeacherProfileAvgAggregateInputType;
    _sum?: TeacherProfileSumAggregateInputType;
    _min?: TeacherProfileMinAggregateInputType;
    _max?: TeacherProfileMaxAggregateInputType;
};
export type TeacherProfileGroupByOutputType = {
    id: string;
    userId: string;
    fullName: string;
    gender: string | null;
    dob: Date | null;
    address: string | null;
    city: string | null;
    state: string | null;
    pincode: string | null;
    profilePhoto: string | null;
    qualification: string | null;
    highestQualification: string | null;
    instituteName: string | null;
    passingYear: number | null;
    teachingCertification: string | null;
    hasBEd: boolean;
    experience: number | null;
    experienceMonths: number | null;
    teachingMode: string | null;
    experienceType: string | null;
    resumeUrl: string | null;
    experienceSummary: string | null;
    subjects: string[];
    classes: string[];
    boards: string[];
    languages: string[];
    aadhaarUrl: string | null;
    qualificationDocUrl: string | null;
    experienceDocUrl: string | null;
    demoVideoUrl: string | null;
    verificationStatus: string;
    rejectionReason: string | null;
    reapplicationDate: Date | null;
    availabilityStatus: string;
    interviewDate: Date | null;
    interviewLink: string | null;
    rating: number;
    _count: TeacherProfileCountAggregateOutputType | null;
    _avg: TeacherProfileAvgAggregateOutputType | null;
    _sum: TeacherProfileSumAggregateOutputType | null;
    _min: TeacherProfileMinAggregateOutputType | null;
    _max: TeacherProfileMaxAggregateOutputType | null;
};
export type GetTeacherProfileGroupByPayload<T extends TeacherProfileGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TeacherProfileGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TeacherProfileGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TeacherProfileGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TeacherProfileGroupByOutputType[P]>;
}>>;
export type TeacherProfileWhereInput = {
    AND?: Prisma.TeacherProfileWhereInput | Prisma.TeacherProfileWhereInput[];
    OR?: Prisma.TeacherProfileWhereInput[];
    NOT?: Prisma.TeacherProfileWhereInput | Prisma.TeacherProfileWhereInput[];
    id?: Prisma.StringFilter<"TeacherProfile"> | string;
    userId?: Prisma.StringFilter<"TeacherProfile"> | string;
    fullName?: Prisma.StringFilter<"TeacherProfile"> | string;
    gender?: Prisma.StringNullableFilter<"TeacherProfile"> | string | null;
    dob?: Prisma.DateTimeNullableFilter<"TeacherProfile"> | Date | string | null;
    address?: Prisma.StringNullableFilter<"TeacherProfile"> | string | null;
    city?: Prisma.StringNullableFilter<"TeacherProfile"> | string | null;
    state?: Prisma.StringNullableFilter<"TeacherProfile"> | string | null;
    pincode?: Prisma.StringNullableFilter<"TeacherProfile"> | string | null;
    profilePhoto?: Prisma.StringNullableFilter<"TeacherProfile"> | string | null;
    qualification?: Prisma.StringNullableFilter<"TeacherProfile"> | string | null;
    highestQualification?: Prisma.StringNullableFilter<"TeacherProfile"> | string | null;
    instituteName?: Prisma.StringNullableFilter<"TeacherProfile"> | string | null;
    passingYear?: Prisma.IntNullableFilter<"TeacherProfile"> | number | null;
    teachingCertification?: Prisma.StringNullableFilter<"TeacherProfile"> | string | null;
    hasBEd?: Prisma.BoolFilter<"TeacherProfile"> | boolean;
    experience?: Prisma.IntNullableFilter<"TeacherProfile"> | number | null;
    experienceMonths?: Prisma.IntNullableFilter<"TeacherProfile"> | number | null;
    teachingMode?: Prisma.StringNullableFilter<"TeacherProfile"> | string | null;
    experienceType?: Prisma.StringNullableFilter<"TeacherProfile"> | string | null;
    resumeUrl?: Prisma.StringNullableFilter<"TeacherProfile"> | string | null;
    experienceSummary?: Prisma.StringNullableFilter<"TeacherProfile"> | string | null;
    subjects?: Prisma.StringNullableListFilter<"TeacherProfile">;
    classes?: Prisma.StringNullableListFilter<"TeacherProfile">;
    boards?: Prisma.StringNullableListFilter<"TeacherProfile">;
    languages?: Prisma.StringNullableListFilter<"TeacherProfile">;
    aadhaarUrl?: Prisma.StringNullableFilter<"TeacherProfile"> | string | null;
    qualificationDocUrl?: Prisma.StringNullableFilter<"TeacherProfile"> | string | null;
    experienceDocUrl?: Prisma.StringNullableFilter<"TeacherProfile"> | string | null;
    demoVideoUrl?: Prisma.StringNullableFilter<"TeacherProfile"> | string | null;
    verificationStatus?: Prisma.StringFilter<"TeacherProfile"> | string;
    rejectionReason?: Prisma.StringNullableFilter<"TeacherProfile"> | string | null;
    reapplicationDate?: Prisma.DateTimeNullableFilter<"TeacherProfile"> | Date | string | null;
    availabilityStatus?: Prisma.StringFilter<"TeacherProfile"> | string;
    interviewDate?: Prisma.DateTimeNullableFilter<"TeacherProfile"> | Date | string | null;
    interviewLink?: Prisma.StringNullableFilter<"TeacherProfile"> | string | null;
    rating?: Prisma.FloatFilter<"TeacherProfile"> | number;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    sessions?: Prisma.SessionListRelationFilter;
    doubts?: Prisma.DoubtListRelationFilter;
    chats?: Prisma.ChatListRelationFilter;
    timeSlots?: Prisma.TeacherTimeSlotListRelationFilter;
    notifications?: Prisma.TeacherNotificationListRelationFilter;
};
export type TeacherProfileOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    gender?: Prisma.SortOrderInput | Prisma.SortOrder;
    dob?: Prisma.SortOrderInput | Prisma.SortOrder;
    address?: Prisma.SortOrderInput | Prisma.SortOrder;
    city?: Prisma.SortOrderInput | Prisma.SortOrder;
    state?: Prisma.SortOrderInput | Prisma.SortOrder;
    pincode?: Prisma.SortOrderInput | Prisma.SortOrder;
    profilePhoto?: Prisma.SortOrderInput | Prisma.SortOrder;
    qualification?: Prisma.SortOrderInput | Prisma.SortOrder;
    highestQualification?: Prisma.SortOrderInput | Prisma.SortOrder;
    instituteName?: Prisma.SortOrderInput | Prisma.SortOrder;
    passingYear?: Prisma.SortOrderInput | Prisma.SortOrder;
    teachingCertification?: Prisma.SortOrderInput | Prisma.SortOrder;
    hasBEd?: Prisma.SortOrder;
    experience?: Prisma.SortOrderInput | Prisma.SortOrder;
    experienceMonths?: Prisma.SortOrderInput | Prisma.SortOrder;
    teachingMode?: Prisma.SortOrderInput | Prisma.SortOrder;
    experienceType?: Prisma.SortOrderInput | Prisma.SortOrder;
    resumeUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    experienceSummary?: Prisma.SortOrderInput | Prisma.SortOrder;
    subjects?: Prisma.SortOrder;
    classes?: Prisma.SortOrder;
    boards?: Prisma.SortOrder;
    languages?: Prisma.SortOrder;
    aadhaarUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    qualificationDocUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    experienceDocUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    demoVideoUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    verificationStatus?: Prisma.SortOrder;
    rejectionReason?: Prisma.SortOrderInput | Prisma.SortOrder;
    reapplicationDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    availabilityStatus?: Prisma.SortOrder;
    interviewDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    interviewLink?: Prisma.SortOrderInput | Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    sessions?: Prisma.SessionOrderByRelationAggregateInput;
    doubts?: Prisma.DoubtOrderByRelationAggregateInput;
    chats?: Prisma.ChatOrderByRelationAggregateInput;
    timeSlots?: Prisma.TeacherTimeSlotOrderByRelationAggregateInput;
    notifications?: Prisma.TeacherNotificationOrderByRelationAggregateInput;
};
export type TeacherProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    userId?: string;
    AND?: Prisma.TeacherProfileWhereInput | Prisma.TeacherProfileWhereInput[];
    OR?: Prisma.TeacherProfileWhereInput[];
    NOT?: Prisma.TeacherProfileWhereInput | Prisma.TeacherProfileWhereInput[];
    fullName?: Prisma.StringFilter<"TeacherProfile"> | string;
    gender?: Prisma.StringNullableFilter<"TeacherProfile"> | string | null;
    dob?: Prisma.DateTimeNullableFilter<"TeacherProfile"> | Date | string | null;
    address?: Prisma.StringNullableFilter<"TeacherProfile"> | string | null;
    city?: Prisma.StringNullableFilter<"TeacherProfile"> | string | null;
    state?: Prisma.StringNullableFilter<"TeacherProfile"> | string | null;
    pincode?: Prisma.StringNullableFilter<"TeacherProfile"> | string | null;
    profilePhoto?: Prisma.StringNullableFilter<"TeacherProfile"> | string | null;
    qualification?: Prisma.StringNullableFilter<"TeacherProfile"> | string | null;
    highestQualification?: Prisma.StringNullableFilter<"TeacherProfile"> | string | null;
    instituteName?: Prisma.StringNullableFilter<"TeacherProfile"> | string | null;
    passingYear?: Prisma.IntNullableFilter<"TeacherProfile"> | number | null;
    teachingCertification?: Prisma.StringNullableFilter<"TeacherProfile"> | string | null;
    hasBEd?: Prisma.BoolFilter<"TeacherProfile"> | boolean;
    experience?: Prisma.IntNullableFilter<"TeacherProfile"> | number | null;
    experienceMonths?: Prisma.IntNullableFilter<"TeacherProfile"> | number | null;
    teachingMode?: Prisma.StringNullableFilter<"TeacherProfile"> | string | null;
    experienceType?: Prisma.StringNullableFilter<"TeacherProfile"> | string | null;
    resumeUrl?: Prisma.StringNullableFilter<"TeacherProfile"> | string | null;
    experienceSummary?: Prisma.StringNullableFilter<"TeacherProfile"> | string | null;
    subjects?: Prisma.StringNullableListFilter<"TeacherProfile">;
    classes?: Prisma.StringNullableListFilter<"TeacherProfile">;
    boards?: Prisma.StringNullableListFilter<"TeacherProfile">;
    languages?: Prisma.StringNullableListFilter<"TeacherProfile">;
    aadhaarUrl?: Prisma.StringNullableFilter<"TeacherProfile"> | string | null;
    qualificationDocUrl?: Prisma.StringNullableFilter<"TeacherProfile"> | string | null;
    experienceDocUrl?: Prisma.StringNullableFilter<"TeacherProfile"> | string | null;
    demoVideoUrl?: Prisma.StringNullableFilter<"TeacherProfile"> | string | null;
    verificationStatus?: Prisma.StringFilter<"TeacherProfile"> | string;
    rejectionReason?: Prisma.StringNullableFilter<"TeacherProfile"> | string | null;
    reapplicationDate?: Prisma.DateTimeNullableFilter<"TeacherProfile"> | Date | string | null;
    availabilityStatus?: Prisma.StringFilter<"TeacherProfile"> | string;
    interviewDate?: Prisma.DateTimeNullableFilter<"TeacherProfile"> | Date | string | null;
    interviewLink?: Prisma.StringNullableFilter<"TeacherProfile"> | string | null;
    rating?: Prisma.FloatFilter<"TeacherProfile"> | number;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    sessions?: Prisma.SessionListRelationFilter;
    doubts?: Prisma.DoubtListRelationFilter;
    chats?: Prisma.ChatListRelationFilter;
    timeSlots?: Prisma.TeacherTimeSlotListRelationFilter;
    notifications?: Prisma.TeacherNotificationListRelationFilter;
}, "id" | "userId">;
export type TeacherProfileOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    gender?: Prisma.SortOrderInput | Prisma.SortOrder;
    dob?: Prisma.SortOrderInput | Prisma.SortOrder;
    address?: Prisma.SortOrderInput | Prisma.SortOrder;
    city?: Prisma.SortOrderInput | Prisma.SortOrder;
    state?: Prisma.SortOrderInput | Prisma.SortOrder;
    pincode?: Prisma.SortOrderInput | Prisma.SortOrder;
    profilePhoto?: Prisma.SortOrderInput | Prisma.SortOrder;
    qualification?: Prisma.SortOrderInput | Prisma.SortOrder;
    highestQualification?: Prisma.SortOrderInput | Prisma.SortOrder;
    instituteName?: Prisma.SortOrderInput | Prisma.SortOrder;
    passingYear?: Prisma.SortOrderInput | Prisma.SortOrder;
    teachingCertification?: Prisma.SortOrderInput | Prisma.SortOrder;
    hasBEd?: Prisma.SortOrder;
    experience?: Prisma.SortOrderInput | Prisma.SortOrder;
    experienceMonths?: Prisma.SortOrderInput | Prisma.SortOrder;
    teachingMode?: Prisma.SortOrderInput | Prisma.SortOrder;
    experienceType?: Prisma.SortOrderInput | Prisma.SortOrder;
    resumeUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    experienceSummary?: Prisma.SortOrderInput | Prisma.SortOrder;
    subjects?: Prisma.SortOrder;
    classes?: Prisma.SortOrder;
    boards?: Prisma.SortOrder;
    languages?: Prisma.SortOrder;
    aadhaarUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    qualificationDocUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    experienceDocUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    demoVideoUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    verificationStatus?: Prisma.SortOrder;
    rejectionReason?: Prisma.SortOrderInput | Prisma.SortOrder;
    reapplicationDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    availabilityStatus?: Prisma.SortOrder;
    interviewDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    interviewLink?: Prisma.SortOrderInput | Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    _count?: Prisma.TeacherProfileCountOrderByAggregateInput;
    _avg?: Prisma.TeacherProfileAvgOrderByAggregateInput;
    _max?: Prisma.TeacherProfileMaxOrderByAggregateInput;
    _min?: Prisma.TeacherProfileMinOrderByAggregateInput;
    _sum?: Prisma.TeacherProfileSumOrderByAggregateInput;
};
export type TeacherProfileScalarWhereWithAggregatesInput = {
    AND?: Prisma.TeacherProfileScalarWhereWithAggregatesInput | Prisma.TeacherProfileScalarWhereWithAggregatesInput[];
    OR?: Prisma.TeacherProfileScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TeacherProfileScalarWhereWithAggregatesInput | Prisma.TeacherProfileScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"TeacherProfile"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"TeacherProfile"> | string;
    fullName?: Prisma.StringWithAggregatesFilter<"TeacherProfile"> | string;
    gender?: Prisma.StringNullableWithAggregatesFilter<"TeacherProfile"> | string | null;
    dob?: Prisma.DateTimeNullableWithAggregatesFilter<"TeacherProfile"> | Date | string | null;
    address?: Prisma.StringNullableWithAggregatesFilter<"TeacherProfile"> | string | null;
    city?: Prisma.StringNullableWithAggregatesFilter<"TeacherProfile"> | string | null;
    state?: Prisma.StringNullableWithAggregatesFilter<"TeacherProfile"> | string | null;
    pincode?: Prisma.StringNullableWithAggregatesFilter<"TeacherProfile"> | string | null;
    profilePhoto?: Prisma.StringNullableWithAggregatesFilter<"TeacherProfile"> | string | null;
    qualification?: Prisma.StringNullableWithAggregatesFilter<"TeacherProfile"> | string | null;
    highestQualification?: Prisma.StringNullableWithAggregatesFilter<"TeacherProfile"> | string | null;
    instituteName?: Prisma.StringNullableWithAggregatesFilter<"TeacherProfile"> | string | null;
    passingYear?: Prisma.IntNullableWithAggregatesFilter<"TeacherProfile"> | number | null;
    teachingCertification?: Prisma.StringNullableWithAggregatesFilter<"TeacherProfile"> | string | null;
    hasBEd?: Prisma.BoolWithAggregatesFilter<"TeacherProfile"> | boolean;
    experience?: Prisma.IntNullableWithAggregatesFilter<"TeacherProfile"> | number | null;
    experienceMonths?: Prisma.IntNullableWithAggregatesFilter<"TeacherProfile"> | number | null;
    teachingMode?: Prisma.StringNullableWithAggregatesFilter<"TeacherProfile"> | string | null;
    experienceType?: Prisma.StringNullableWithAggregatesFilter<"TeacherProfile"> | string | null;
    resumeUrl?: Prisma.StringNullableWithAggregatesFilter<"TeacherProfile"> | string | null;
    experienceSummary?: Prisma.StringNullableWithAggregatesFilter<"TeacherProfile"> | string | null;
    subjects?: Prisma.StringNullableListFilter<"TeacherProfile">;
    classes?: Prisma.StringNullableListFilter<"TeacherProfile">;
    boards?: Prisma.StringNullableListFilter<"TeacherProfile">;
    languages?: Prisma.StringNullableListFilter<"TeacherProfile">;
    aadhaarUrl?: Prisma.StringNullableWithAggregatesFilter<"TeacherProfile"> | string | null;
    qualificationDocUrl?: Prisma.StringNullableWithAggregatesFilter<"TeacherProfile"> | string | null;
    experienceDocUrl?: Prisma.StringNullableWithAggregatesFilter<"TeacherProfile"> | string | null;
    demoVideoUrl?: Prisma.StringNullableWithAggregatesFilter<"TeacherProfile"> | string | null;
    verificationStatus?: Prisma.StringWithAggregatesFilter<"TeacherProfile"> | string;
    rejectionReason?: Prisma.StringNullableWithAggregatesFilter<"TeacherProfile"> | string | null;
    reapplicationDate?: Prisma.DateTimeNullableWithAggregatesFilter<"TeacherProfile"> | Date | string | null;
    availabilityStatus?: Prisma.StringWithAggregatesFilter<"TeacherProfile"> | string;
    interviewDate?: Prisma.DateTimeNullableWithAggregatesFilter<"TeacherProfile"> | Date | string | null;
    interviewLink?: Prisma.StringNullableWithAggregatesFilter<"TeacherProfile"> | string | null;
    rating?: Prisma.FloatWithAggregatesFilter<"TeacherProfile"> | number;
};
export type TeacherProfileCreateInput = {
    id?: string;
    fullName: string;
    gender?: string | null;
    dob?: Date | string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    pincode?: string | null;
    profilePhoto?: string | null;
    qualification?: string | null;
    highestQualification?: string | null;
    instituteName?: string | null;
    passingYear?: number | null;
    teachingCertification?: string | null;
    hasBEd?: boolean;
    experience?: number | null;
    experienceMonths?: number | null;
    teachingMode?: string | null;
    experienceType?: string | null;
    resumeUrl?: string | null;
    experienceSummary?: string | null;
    subjects?: Prisma.TeacherProfileCreatesubjectsInput | string[];
    classes?: Prisma.TeacherProfileCreateclassesInput | string[];
    boards?: Prisma.TeacherProfileCreateboardsInput | string[];
    languages?: Prisma.TeacherProfileCreatelanguagesInput | string[];
    aadhaarUrl?: string | null;
    qualificationDocUrl?: string | null;
    experienceDocUrl?: string | null;
    demoVideoUrl?: string | null;
    verificationStatus?: string;
    rejectionReason?: string | null;
    reapplicationDate?: Date | string | null;
    availabilityStatus?: string;
    interviewDate?: Date | string | null;
    interviewLink?: string | null;
    rating?: number;
    user: Prisma.UserCreateNestedOneWithoutTeacherProfileInput;
    sessions?: Prisma.SessionCreateNestedManyWithoutTeacherInput;
    doubts?: Prisma.DoubtCreateNestedManyWithoutTeacherInput;
    chats?: Prisma.ChatCreateNestedManyWithoutTeacherInput;
    timeSlots?: Prisma.TeacherTimeSlotCreateNestedManyWithoutTeacherInput;
    notifications?: Prisma.TeacherNotificationCreateNestedManyWithoutTeacherInput;
};
export type TeacherProfileUncheckedCreateInput = {
    id?: string;
    userId: string;
    fullName: string;
    gender?: string | null;
    dob?: Date | string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    pincode?: string | null;
    profilePhoto?: string | null;
    qualification?: string | null;
    highestQualification?: string | null;
    instituteName?: string | null;
    passingYear?: number | null;
    teachingCertification?: string | null;
    hasBEd?: boolean;
    experience?: number | null;
    experienceMonths?: number | null;
    teachingMode?: string | null;
    experienceType?: string | null;
    resumeUrl?: string | null;
    experienceSummary?: string | null;
    subjects?: Prisma.TeacherProfileCreatesubjectsInput | string[];
    classes?: Prisma.TeacherProfileCreateclassesInput | string[];
    boards?: Prisma.TeacherProfileCreateboardsInput | string[];
    languages?: Prisma.TeacherProfileCreatelanguagesInput | string[];
    aadhaarUrl?: string | null;
    qualificationDocUrl?: string | null;
    experienceDocUrl?: string | null;
    demoVideoUrl?: string | null;
    verificationStatus?: string;
    rejectionReason?: string | null;
    reapplicationDate?: Date | string | null;
    availabilityStatus?: string;
    interviewDate?: Date | string | null;
    interviewLink?: string | null;
    rating?: number;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutTeacherInput;
    doubts?: Prisma.DoubtUncheckedCreateNestedManyWithoutTeacherInput;
    chats?: Prisma.ChatUncheckedCreateNestedManyWithoutTeacherInput;
    timeSlots?: Prisma.TeacherTimeSlotUncheckedCreateNestedManyWithoutTeacherInput;
    notifications?: Prisma.TeacherNotificationUncheckedCreateNestedManyWithoutTeacherInput;
};
export type TeacherProfileUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    gender?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dob?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pincode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    profilePhoto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    qualification?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    highestQualification?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    instituteName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passingYear?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    teachingCertification?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hasBEd?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    experience?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    experienceMonths?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    teachingMode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    experienceType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resumeUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    experienceSummary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    subjects?: Prisma.TeacherProfileUpdatesubjectsInput | string[];
    classes?: Prisma.TeacherProfileUpdateclassesInput | string[];
    boards?: Prisma.TeacherProfileUpdateboardsInput | string[];
    languages?: Prisma.TeacherProfileUpdatelanguagesInput | string[];
    aadhaarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    qualificationDocUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    experienceDocUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    demoVideoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    verificationStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reapplicationDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    availabilityStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    interviewDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    interviewLink?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rating?: Prisma.FloatFieldUpdateOperationsInput | number;
    user?: Prisma.UserUpdateOneRequiredWithoutTeacherProfileNestedInput;
    sessions?: Prisma.SessionUpdateManyWithoutTeacherNestedInput;
    doubts?: Prisma.DoubtUpdateManyWithoutTeacherNestedInput;
    chats?: Prisma.ChatUpdateManyWithoutTeacherNestedInput;
    timeSlots?: Prisma.TeacherTimeSlotUpdateManyWithoutTeacherNestedInput;
    notifications?: Prisma.TeacherNotificationUpdateManyWithoutTeacherNestedInput;
};
export type TeacherProfileUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    gender?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dob?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pincode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    profilePhoto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    qualification?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    highestQualification?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    instituteName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passingYear?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    teachingCertification?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hasBEd?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    experience?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    experienceMonths?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    teachingMode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    experienceType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resumeUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    experienceSummary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    subjects?: Prisma.TeacherProfileUpdatesubjectsInput | string[];
    classes?: Prisma.TeacherProfileUpdateclassesInput | string[];
    boards?: Prisma.TeacherProfileUpdateboardsInput | string[];
    languages?: Prisma.TeacherProfileUpdatelanguagesInput | string[];
    aadhaarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    qualificationDocUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    experienceDocUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    demoVideoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    verificationStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reapplicationDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    availabilityStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    interviewDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    interviewLink?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rating?: Prisma.FloatFieldUpdateOperationsInput | number;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutTeacherNestedInput;
    doubts?: Prisma.DoubtUncheckedUpdateManyWithoutTeacherNestedInput;
    chats?: Prisma.ChatUncheckedUpdateManyWithoutTeacherNestedInput;
    timeSlots?: Prisma.TeacherTimeSlotUncheckedUpdateManyWithoutTeacherNestedInput;
    notifications?: Prisma.TeacherNotificationUncheckedUpdateManyWithoutTeacherNestedInput;
};
export type TeacherProfileCreateManyInput = {
    id?: string;
    userId: string;
    fullName: string;
    gender?: string | null;
    dob?: Date | string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    pincode?: string | null;
    profilePhoto?: string | null;
    qualification?: string | null;
    highestQualification?: string | null;
    instituteName?: string | null;
    passingYear?: number | null;
    teachingCertification?: string | null;
    hasBEd?: boolean;
    experience?: number | null;
    experienceMonths?: number | null;
    teachingMode?: string | null;
    experienceType?: string | null;
    resumeUrl?: string | null;
    experienceSummary?: string | null;
    subjects?: Prisma.TeacherProfileCreatesubjectsInput | string[];
    classes?: Prisma.TeacherProfileCreateclassesInput | string[];
    boards?: Prisma.TeacherProfileCreateboardsInput | string[];
    languages?: Prisma.TeacherProfileCreatelanguagesInput | string[];
    aadhaarUrl?: string | null;
    qualificationDocUrl?: string | null;
    experienceDocUrl?: string | null;
    demoVideoUrl?: string | null;
    verificationStatus?: string;
    rejectionReason?: string | null;
    reapplicationDate?: Date | string | null;
    availabilityStatus?: string;
    interviewDate?: Date | string | null;
    interviewLink?: string | null;
    rating?: number;
};
export type TeacherProfileUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    gender?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dob?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pincode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    profilePhoto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    qualification?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    highestQualification?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    instituteName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passingYear?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    teachingCertification?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hasBEd?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    experience?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    experienceMonths?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    teachingMode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    experienceType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resumeUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    experienceSummary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    subjects?: Prisma.TeacherProfileUpdatesubjectsInput | string[];
    classes?: Prisma.TeacherProfileUpdateclassesInput | string[];
    boards?: Prisma.TeacherProfileUpdateboardsInput | string[];
    languages?: Prisma.TeacherProfileUpdatelanguagesInput | string[];
    aadhaarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    qualificationDocUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    experienceDocUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    demoVideoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    verificationStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reapplicationDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    availabilityStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    interviewDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    interviewLink?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rating?: Prisma.FloatFieldUpdateOperationsInput | number;
};
export type TeacherProfileUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    gender?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dob?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pincode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    profilePhoto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    qualification?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    highestQualification?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    instituteName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passingYear?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    teachingCertification?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hasBEd?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    experience?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    experienceMonths?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    teachingMode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    experienceType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resumeUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    experienceSummary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    subjects?: Prisma.TeacherProfileUpdatesubjectsInput | string[];
    classes?: Prisma.TeacherProfileUpdateclassesInput | string[];
    boards?: Prisma.TeacherProfileUpdateboardsInput | string[];
    languages?: Prisma.TeacherProfileUpdatelanguagesInput | string[];
    aadhaarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    qualificationDocUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    experienceDocUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    demoVideoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    verificationStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reapplicationDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    availabilityStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    interviewDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    interviewLink?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rating?: Prisma.FloatFieldUpdateOperationsInput | number;
};
export type TeacherProfileNullableScalarRelationFilter = {
    is?: Prisma.TeacherProfileWhereInput | null;
    isNot?: Prisma.TeacherProfileWhereInput | null;
};
export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    has?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    hasEvery?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    hasSome?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    isEmpty?: boolean;
};
export type TeacherProfileCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    gender?: Prisma.SortOrder;
    dob?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    state?: Prisma.SortOrder;
    pincode?: Prisma.SortOrder;
    profilePhoto?: Prisma.SortOrder;
    qualification?: Prisma.SortOrder;
    highestQualification?: Prisma.SortOrder;
    instituteName?: Prisma.SortOrder;
    passingYear?: Prisma.SortOrder;
    teachingCertification?: Prisma.SortOrder;
    hasBEd?: Prisma.SortOrder;
    experience?: Prisma.SortOrder;
    experienceMonths?: Prisma.SortOrder;
    teachingMode?: Prisma.SortOrder;
    experienceType?: Prisma.SortOrder;
    resumeUrl?: Prisma.SortOrder;
    experienceSummary?: Prisma.SortOrder;
    subjects?: Prisma.SortOrder;
    classes?: Prisma.SortOrder;
    boards?: Prisma.SortOrder;
    languages?: Prisma.SortOrder;
    aadhaarUrl?: Prisma.SortOrder;
    qualificationDocUrl?: Prisma.SortOrder;
    experienceDocUrl?: Prisma.SortOrder;
    demoVideoUrl?: Prisma.SortOrder;
    verificationStatus?: Prisma.SortOrder;
    rejectionReason?: Prisma.SortOrder;
    reapplicationDate?: Prisma.SortOrder;
    availabilityStatus?: Prisma.SortOrder;
    interviewDate?: Prisma.SortOrder;
    interviewLink?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
};
export type TeacherProfileAvgOrderByAggregateInput = {
    passingYear?: Prisma.SortOrder;
    experience?: Prisma.SortOrder;
    experienceMonths?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
};
export type TeacherProfileMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    gender?: Prisma.SortOrder;
    dob?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    state?: Prisma.SortOrder;
    pincode?: Prisma.SortOrder;
    profilePhoto?: Prisma.SortOrder;
    qualification?: Prisma.SortOrder;
    highestQualification?: Prisma.SortOrder;
    instituteName?: Prisma.SortOrder;
    passingYear?: Prisma.SortOrder;
    teachingCertification?: Prisma.SortOrder;
    hasBEd?: Prisma.SortOrder;
    experience?: Prisma.SortOrder;
    experienceMonths?: Prisma.SortOrder;
    teachingMode?: Prisma.SortOrder;
    experienceType?: Prisma.SortOrder;
    resumeUrl?: Prisma.SortOrder;
    experienceSummary?: Prisma.SortOrder;
    aadhaarUrl?: Prisma.SortOrder;
    qualificationDocUrl?: Prisma.SortOrder;
    experienceDocUrl?: Prisma.SortOrder;
    demoVideoUrl?: Prisma.SortOrder;
    verificationStatus?: Prisma.SortOrder;
    rejectionReason?: Prisma.SortOrder;
    reapplicationDate?: Prisma.SortOrder;
    availabilityStatus?: Prisma.SortOrder;
    interviewDate?: Prisma.SortOrder;
    interviewLink?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
};
export type TeacherProfileMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    gender?: Prisma.SortOrder;
    dob?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    state?: Prisma.SortOrder;
    pincode?: Prisma.SortOrder;
    profilePhoto?: Prisma.SortOrder;
    qualification?: Prisma.SortOrder;
    highestQualification?: Prisma.SortOrder;
    instituteName?: Prisma.SortOrder;
    passingYear?: Prisma.SortOrder;
    teachingCertification?: Prisma.SortOrder;
    hasBEd?: Prisma.SortOrder;
    experience?: Prisma.SortOrder;
    experienceMonths?: Prisma.SortOrder;
    teachingMode?: Prisma.SortOrder;
    experienceType?: Prisma.SortOrder;
    resumeUrl?: Prisma.SortOrder;
    experienceSummary?: Prisma.SortOrder;
    aadhaarUrl?: Prisma.SortOrder;
    qualificationDocUrl?: Prisma.SortOrder;
    experienceDocUrl?: Prisma.SortOrder;
    demoVideoUrl?: Prisma.SortOrder;
    verificationStatus?: Prisma.SortOrder;
    rejectionReason?: Prisma.SortOrder;
    reapplicationDate?: Prisma.SortOrder;
    availabilityStatus?: Prisma.SortOrder;
    interviewDate?: Prisma.SortOrder;
    interviewLink?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
};
export type TeacherProfileSumOrderByAggregateInput = {
    passingYear?: Prisma.SortOrder;
    experience?: Prisma.SortOrder;
    experienceMonths?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
};
export type TeacherProfileScalarRelationFilter = {
    is?: Prisma.TeacherProfileWhereInput;
    isNot?: Prisma.TeacherProfileWhereInput;
};
export type TeacherProfileCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.TeacherProfileCreateWithoutUserInput, Prisma.TeacherProfileUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.TeacherProfileCreateOrConnectWithoutUserInput;
    connect?: Prisma.TeacherProfileWhereUniqueInput;
};
export type TeacherProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.TeacherProfileCreateWithoutUserInput, Prisma.TeacherProfileUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.TeacherProfileCreateOrConnectWithoutUserInput;
    connect?: Prisma.TeacherProfileWhereUniqueInput;
};
export type TeacherProfileUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.TeacherProfileCreateWithoutUserInput, Prisma.TeacherProfileUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.TeacherProfileCreateOrConnectWithoutUserInput;
    upsert?: Prisma.TeacherProfileUpsertWithoutUserInput;
    disconnect?: Prisma.TeacherProfileWhereInput | boolean;
    delete?: Prisma.TeacherProfileWhereInput | boolean;
    connect?: Prisma.TeacherProfileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TeacherProfileUpdateToOneWithWhereWithoutUserInput, Prisma.TeacherProfileUpdateWithoutUserInput>, Prisma.TeacherProfileUncheckedUpdateWithoutUserInput>;
};
export type TeacherProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.TeacherProfileCreateWithoutUserInput, Prisma.TeacherProfileUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.TeacherProfileCreateOrConnectWithoutUserInput;
    upsert?: Prisma.TeacherProfileUpsertWithoutUserInput;
    disconnect?: Prisma.TeacherProfileWhereInput | boolean;
    delete?: Prisma.TeacherProfileWhereInput | boolean;
    connect?: Prisma.TeacherProfileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TeacherProfileUpdateToOneWithWhereWithoutUserInput, Prisma.TeacherProfileUpdateWithoutUserInput>, Prisma.TeacherProfileUncheckedUpdateWithoutUserInput>;
};
export type TeacherProfileCreatesubjectsInput = {
    set: string[];
};
export type TeacherProfileCreateclassesInput = {
    set: string[];
};
export type TeacherProfileCreateboardsInput = {
    set: string[];
};
export type TeacherProfileCreatelanguagesInput = {
    set: string[];
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type TeacherProfileUpdatesubjectsInput = {
    set?: string[];
    push?: string | string[];
};
export type TeacherProfileUpdateclassesInput = {
    set?: string[];
    push?: string | string[];
};
export type TeacherProfileUpdateboardsInput = {
    set?: string[];
    push?: string | string[];
};
export type TeacherProfileUpdatelanguagesInput = {
    set?: string[];
    push?: string | string[];
};
export type TeacherProfileCreateNestedOneWithoutDoubtsInput = {
    create?: Prisma.XOR<Prisma.TeacherProfileCreateWithoutDoubtsInput, Prisma.TeacherProfileUncheckedCreateWithoutDoubtsInput>;
    connectOrCreate?: Prisma.TeacherProfileCreateOrConnectWithoutDoubtsInput;
    connect?: Prisma.TeacherProfileWhereUniqueInput;
};
export type TeacherProfileUpdateOneWithoutDoubtsNestedInput = {
    create?: Prisma.XOR<Prisma.TeacherProfileCreateWithoutDoubtsInput, Prisma.TeacherProfileUncheckedCreateWithoutDoubtsInput>;
    connectOrCreate?: Prisma.TeacherProfileCreateOrConnectWithoutDoubtsInput;
    upsert?: Prisma.TeacherProfileUpsertWithoutDoubtsInput;
    disconnect?: Prisma.TeacherProfileWhereInput | boolean;
    delete?: Prisma.TeacherProfileWhereInput | boolean;
    connect?: Prisma.TeacherProfileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TeacherProfileUpdateToOneWithWhereWithoutDoubtsInput, Prisma.TeacherProfileUpdateWithoutDoubtsInput>, Prisma.TeacherProfileUncheckedUpdateWithoutDoubtsInput>;
};
export type TeacherProfileCreateNestedOneWithoutChatsInput = {
    create?: Prisma.XOR<Prisma.TeacherProfileCreateWithoutChatsInput, Prisma.TeacherProfileUncheckedCreateWithoutChatsInput>;
    connectOrCreate?: Prisma.TeacherProfileCreateOrConnectWithoutChatsInput;
    connect?: Prisma.TeacherProfileWhereUniqueInput;
};
export type TeacherProfileUpdateOneWithoutChatsNestedInput = {
    create?: Prisma.XOR<Prisma.TeacherProfileCreateWithoutChatsInput, Prisma.TeacherProfileUncheckedCreateWithoutChatsInput>;
    connectOrCreate?: Prisma.TeacherProfileCreateOrConnectWithoutChatsInput;
    upsert?: Prisma.TeacherProfileUpsertWithoutChatsInput;
    disconnect?: Prisma.TeacherProfileWhereInput | boolean;
    delete?: Prisma.TeacherProfileWhereInput | boolean;
    connect?: Prisma.TeacherProfileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TeacherProfileUpdateToOneWithWhereWithoutChatsInput, Prisma.TeacherProfileUpdateWithoutChatsInput>, Prisma.TeacherProfileUncheckedUpdateWithoutChatsInput>;
};
export type TeacherProfileCreateNestedOneWithoutSessionsInput = {
    create?: Prisma.XOR<Prisma.TeacherProfileCreateWithoutSessionsInput, Prisma.TeacherProfileUncheckedCreateWithoutSessionsInput>;
    connectOrCreate?: Prisma.TeacherProfileCreateOrConnectWithoutSessionsInput;
    connect?: Prisma.TeacherProfileWhereUniqueInput;
};
export type TeacherProfileUpdateOneWithoutSessionsNestedInput = {
    create?: Prisma.XOR<Prisma.TeacherProfileCreateWithoutSessionsInput, Prisma.TeacherProfileUncheckedCreateWithoutSessionsInput>;
    connectOrCreate?: Prisma.TeacherProfileCreateOrConnectWithoutSessionsInput;
    upsert?: Prisma.TeacherProfileUpsertWithoutSessionsInput;
    disconnect?: Prisma.TeacherProfileWhereInput | boolean;
    delete?: Prisma.TeacherProfileWhereInput | boolean;
    connect?: Prisma.TeacherProfileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TeacherProfileUpdateToOneWithWhereWithoutSessionsInput, Prisma.TeacherProfileUpdateWithoutSessionsInput>, Prisma.TeacherProfileUncheckedUpdateWithoutSessionsInput>;
};
export type TeacherProfileCreateNestedOneWithoutTimeSlotsInput = {
    create?: Prisma.XOR<Prisma.TeacherProfileCreateWithoutTimeSlotsInput, Prisma.TeacherProfileUncheckedCreateWithoutTimeSlotsInput>;
    connectOrCreate?: Prisma.TeacherProfileCreateOrConnectWithoutTimeSlotsInput;
    connect?: Prisma.TeacherProfileWhereUniqueInput;
};
export type TeacherProfileUpdateOneRequiredWithoutTimeSlotsNestedInput = {
    create?: Prisma.XOR<Prisma.TeacherProfileCreateWithoutTimeSlotsInput, Prisma.TeacherProfileUncheckedCreateWithoutTimeSlotsInput>;
    connectOrCreate?: Prisma.TeacherProfileCreateOrConnectWithoutTimeSlotsInput;
    upsert?: Prisma.TeacherProfileUpsertWithoutTimeSlotsInput;
    connect?: Prisma.TeacherProfileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TeacherProfileUpdateToOneWithWhereWithoutTimeSlotsInput, Prisma.TeacherProfileUpdateWithoutTimeSlotsInput>, Prisma.TeacherProfileUncheckedUpdateWithoutTimeSlotsInput>;
};
export type TeacherProfileCreateNestedOneWithoutNotificationsInput = {
    create?: Prisma.XOR<Prisma.TeacherProfileCreateWithoutNotificationsInput, Prisma.TeacherProfileUncheckedCreateWithoutNotificationsInput>;
    connectOrCreate?: Prisma.TeacherProfileCreateOrConnectWithoutNotificationsInput;
    connect?: Prisma.TeacherProfileWhereUniqueInput;
};
export type TeacherProfileUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: Prisma.XOR<Prisma.TeacherProfileCreateWithoutNotificationsInput, Prisma.TeacherProfileUncheckedCreateWithoutNotificationsInput>;
    connectOrCreate?: Prisma.TeacherProfileCreateOrConnectWithoutNotificationsInput;
    upsert?: Prisma.TeacherProfileUpsertWithoutNotificationsInput;
    connect?: Prisma.TeacherProfileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TeacherProfileUpdateToOneWithWhereWithoutNotificationsInput, Prisma.TeacherProfileUpdateWithoutNotificationsInput>, Prisma.TeacherProfileUncheckedUpdateWithoutNotificationsInput>;
};
export type TeacherProfileCreateWithoutUserInput = {
    id?: string;
    fullName: string;
    gender?: string | null;
    dob?: Date | string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    pincode?: string | null;
    profilePhoto?: string | null;
    qualification?: string | null;
    highestQualification?: string | null;
    instituteName?: string | null;
    passingYear?: number | null;
    teachingCertification?: string | null;
    hasBEd?: boolean;
    experience?: number | null;
    experienceMonths?: number | null;
    teachingMode?: string | null;
    experienceType?: string | null;
    resumeUrl?: string | null;
    experienceSummary?: string | null;
    subjects?: Prisma.TeacherProfileCreatesubjectsInput | string[];
    classes?: Prisma.TeacherProfileCreateclassesInput | string[];
    boards?: Prisma.TeacherProfileCreateboardsInput | string[];
    languages?: Prisma.TeacherProfileCreatelanguagesInput | string[];
    aadhaarUrl?: string | null;
    qualificationDocUrl?: string | null;
    experienceDocUrl?: string | null;
    demoVideoUrl?: string | null;
    verificationStatus?: string;
    rejectionReason?: string | null;
    reapplicationDate?: Date | string | null;
    availabilityStatus?: string;
    interviewDate?: Date | string | null;
    interviewLink?: string | null;
    rating?: number;
    sessions?: Prisma.SessionCreateNestedManyWithoutTeacherInput;
    doubts?: Prisma.DoubtCreateNestedManyWithoutTeacherInput;
    chats?: Prisma.ChatCreateNestedManyWithoutTeacherInput;
    timeSlots?: Prisma.TeacherTimeSlotCreateNestedManyWithoutTeacherInput;
    notifications?: Prisma.TeacherNotificationCreateNestedManyWithoutTeacherInput;
};
export type TeacherProfileUncheckedCreateWithoutUserInput = {
    id?: string;
    fullName: string;
    gender?: string | null;
    dob?: Date | string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    pincode?: string | null;
    profilePhoto?: string | null;
    qualification?: string | null;
    highestQualification?: string | null;
    instituteName?: string | null;
    passingYear?: number | null;
    teachingCertification?: string | null;
    hasBEd?: boolean;
    experience?: number | null;
    experienceMonths?: number | null;
    teachingMode?: string | null;
    experienceType?: string | null;
    resumeUrl?: string | null;
    experienceSummary?: string | null;
    subjects?: Prisma.TeacherProfileCreatesubjectsInput | string[];
    classes?: Prisma.TeacherProfileCreateclassesInput | string[];
    boards?: Prisma.TeacherProfileCreateboardsInput | string[];
    languages?: Prisma.TeacherProfileCreatelanguagesInput | string[];
    aadhaarUrl?: string | null;
    qualificationDocUrl?: string | null;
    experienceDocUrl?: string | null;
    demoVideoUrl?: string | null;
    verificationStatus?: string;
    rejectionReason?: string | null;
    reapplicationDate?: Date | string | null;
    availabilityStatus?: string;
    interviewDate?: Date | string | null;
    interviewLink?: string | null;
    rating?: number;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutTeacherInput;
    doubts?: Prisma.DoubtUncheckedCreateNestedManyWithoutTeacherInput;
    chats?: Prisma.ChatUncheckedCreateNestedManyWithoutTeacherInput;
    timeSlots?: Prisma.TeacherTimeSlotUncheckedCreateNestedManyWithoutTeacherInput;
    notifications?: Prisma.TeacherNotificationUncheckedCreateNestedManyWithoutTeacherInput;
};
export type TeacherProfileCreateOrConnectWithoutUserInput = {
    where: Prisma.TeacherProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.TeacherProfileCreateWithoutUserInput, Prisma.TeacherProfileUncheckedCreateWithoutUserInput>;
};
export type TeacherProfileUpsertWithoutUserInput = {
    update: Prisma.XOR<Prisma.TeacherProfileUpdateWithoutUserInput, Prisma.TeacherProfileUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.TeacherProfileCreateWithoutUserInput, Prisma.TeacherProfileUncheckedCreateWithoutUserInput>;
    where?: Prisma.TeacherProfileWhereInput;
};
export type TeacherProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: Prisma.TeacherProfileWhereInput;
    data: Prisma.XOR<Prisma.TeacherProfileUpdateWithoutUserInput, Prisma.TeacherProfileUncheckedUpdateWithoutUserInput>;
};
export type TeacherProfileUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    gender?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dob?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pincode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    profilePhoto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    qualification?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    highestQualification?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    instituteName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passingYear?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    teachingCertification?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hasBEd?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    experience?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    experienceMonths?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    teachingMode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    experienceType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resumeUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    experienceSummary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    subjects?: Prisma.TeacherProfileUpdatesubjectsInput | string[];
    classes?: Prisma.TeacherProfileUpdateclassesInput | string[];
    boards?: Prisma.TeacherProfileUpdateboardsInput | string[];
    languages?: Prisma.TeacherProfileUpdatelanguagesInput | string[];
    aadhaarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    qualificationDocUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    experienceDocUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    demoVideoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    verificationStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reapplicationDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    availabilityStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    interviewDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    interviewLink?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rating?: Prisma.FloatFieldUpdateOperationsInput | number;
    sessions?: Prisma.SessionUpdateManyWithoutTeacherNestedInput;
    doubts?: Prisma.DoubtUpdateManyWithoutTeacherNestedInput;
    chats?: Prisma.ChatUpdateManyWithoutTeacherNestedInput;
    timeSlots?: Prisma.TeacherTimeSlotUpdateManyWithoutTeacherNestedInput;
    notifications?: Prisma.TeacherNotificationUpdateManyWithoutTeacherNestedInput;
};
export type TeacherProfileUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    gender?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dob?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pincode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    profilePhoto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    qualification?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    highestQualification?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    instituteName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passingYear?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    teachingCertification?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hasBEd?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    experience?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    experienceMonths?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    teachingMode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    experienceType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resumeUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    experienceSummary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    subjects?: Prisma.TeacherProfileUpdatesubjectsInput | string[];
    classes?: Prisma.TeacherProfileUpdateclassesInput | string[];
    boards?: Prisma.TeacherProfileUpdateboardsInput | string[];
    languages?: Prisma.TeacherProfileUpdatelanguagesInput | string[];
    aadhaarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    qualificationDocUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    experienceDocUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    demoVideoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    verificationStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reapplicationDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    availabilityStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    interviewDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    interviewLink?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rating?: Prisma.FloatFieldUpdateOperationsInput | number;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutTeacherNestedInput;
    doubts?: Prisma.DoubtUncheckedUpdateManyWithoutTeacherNestedInput;
    chats?: Prisma.ChatUncheckedUpdateManyWithoutTeacherNestedInput;
    timeSlots?: Prisma.TeacherTimeSlotUncheckedUpdateManyWithoutTeacherNestedInput;
    notifications?: Prisma.TeacherNotificationUncheckedUpdateManyWithoutTeacherNestedInput;
};
export type TeacherProfileCreateWithoutDoubtsInput = {
    id?: string;
    fullName: string;
    gender?: string | null;
    dob?: Date | string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    pincode?: string | null;
    profilePhoto?: string | null;
    qualification?: string | null;
    highestQualification?: string | null;
    instituteName?: string | null;
    passingYear?: number | null;
    teachingCertification?: string | null;
    hasBEd?: boolean;
    experience?: number | null;
    experienceMonths?: number | null;
    teachingMode?: string | null;
    experienceType?: string | null;
    resumeUrl?: string | null;
    experienceSummary?: string | null;
    subjects?: Prisma.TeacherProfileCreatesubjectsInput | string[];
    classes?: Prisma.TeacherProfileCreateclassesInput | string[];
    boards?: Prisma.TeacherProfileCreateboardsInput | string[];
    languages?: Prisma.TeacherProfileCreatelanguagesInput | string[];
    aadhaarUrl?: string | null;
    qualificationDocUrl?: string | null;
    experienceDocUrl?: string | null;
    demoVideoUrl?: string | null;
    verificationStatus?: string;
    rejectionReason?: string | null;
    reapplicationDate?: Date | string | null;
    availabilityStatus?: string;
    interviewDate?: Date | string | null;
    interviewLink?: string | null;
    rating?: number;
    user: Prisma.UserCreateNestedOneWithoutTeacherProfileInput;
    sessions?: Prisma.SessionCreateNestedManyWithoutTeacherInput;
    chats?: Prisma.ChatCreateNestedManyWithoutTeacherInput;
    timeSlots?: Prisma.TeacherTimeSlotCreateNestedManyWithoutTeacherInput;
    notifications?: Prisma.TeacherNotificationCreateNestedManyWithoutTeacherInput;
};
export type TeacherProfileUncheckedCreateWithoutDoubtsInput = {
    id?: string;
    userId: string;
    fullName: string;
    gender?: string | null;
    dob?: Date | string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    pincode?: string | null;
    profilePhoto?: string | null;
    qualification?: string | null;
    highestQualification?: string | null;
    instituteName?: string | null;
    passingYear?: number | null;
    teachingCertification?: string | null;
    hasBEd?: boolean;
    experience?: number | null;
    experienceMonths?: number | null;
    teachingMode?: string | null;
    experienceType?: string | null;
    resumeUrl?: string | null;
    experienceSummary?: string | null;
    subjects?: Prisma.TeacherProfileCreatesubjectsInput | string[];
    classes?: Prisma.TeacherProfileCreateclassesInput | string[];
    boards?: Prisma.TeacherProfileCreateboardsInput | string[];
    languages?: Prisma.TeacherProfileCreatelanguagesInput | string[];
    aadhaarUrl?: string | null;
    qualificationDocUrl?: string | null;
    experienceDocUrl?: string | null;
    demoVideoUrl?: string | null;
    verificationStatus?: string;
    rejectionReason?: string | null;
    reapplicationDate?: Date | string | null;
    availabilityStatus?: string;
    interviewDate?: Date | string | null;
    interviewLink?: string | null;
    rating?: number;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutTeacherInput;
    chats?: Prisma.ChatUncheckedCreateNestedManyWithoutTeacherInput;
    timeSlots?: Prisma.TeacherTimeSlotUncheckedCreateNestedManyWithoutTeacherInput;
    notifications?: Prisma.TeacherNotificationUncheckedCreateNestedManyWithoutTeacherInput;
};
export type TeacherProfileCreateOrConnectWithoutDoubtsInput = {
    where: Prisma.TeacherProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.TeacherProfileCreateWithoutDoubtsInput, Prisma.TeacherProfileUncheckedCreateWithoutDoubtsInput>;
};
export type TeacherProfileUpsertWithoutDoubtsInput = {
    update: Prisma.XOR<Prisma.TeacherProfileUpdateWithoutDoubtsInput, Prisma.TeacherProfileUncheckedUpdateWithoutDoubtsInput>;
    create: Prisma.XOR<Prisma.TeacherProfileCreateWithoutDoubtsInput, Prisma.TeacherProfileUncheckedCreateWithoutDoubtsInput>;
    where?: Prisma.TeacherProfileWhereInput;
};
export type TeacherProfileUpdateToOneWithWhereWithoutDoubtsInput = {
    where?: Prisma.TeacherProfileWhereInput;
    data: Prisma.XOR<Prisma.TeacherProfileUpdateWithoutDoubtsInput, Prisma.TeacherProfileUncheckedUpdateWithoutDoubtsInput>;
};
export type TeacherProfileUpdateWithoutDoubtsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    gender?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dob?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pincode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    profilePhoto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    qualification?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    highestQualification?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    instituteName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passingYear?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    teachingCertification?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hasBEd?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    experience?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    experienceMonths?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    teachingMode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    experienceType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resumeUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    experienceSummary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    subjects?: Prisma.TeacherProfileUpdatesubjectsInput | string[];
    classes?: Prisma.TeacherProfileUpdateclassesInput | string[];
    boards?: Prisma.TeacherProfileUpdateboardsInput | string[];
    languages?: Prisma.TeacherProfileUpdatelanguagesInput | string[];
    aadhaarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    qualificationDocUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    experienceDocUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    demoVideoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    verificationStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reapplicationDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    availabilityStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    interviewDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    interviewLink?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rating?: Prisma.FloatFieldUpdateOperationsInput | number;
    user?: Prisma.UserUpdateOneRequiredWithoutTeacherProfileNestedInput;
    sessions?: Prisma.SessionUpdateManyWithoutTeacherNestedInput;
    chats?: Prisma.ChatUpdateManyWithoutTeacherNestedInput;
    timeSlots?: Prisma.TeacherTimeSlotUpdateManyWithoutTeacherNestedInput;
    notifications?: Prisma.TeacherNotificationUpdateManyWithoutTeacherNestedInput;
};
export type TeacherProfileUncheckedUpdateWithoutDoubtsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    gender?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dob?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pincode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    profilePhoto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    qualification?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    highestQualification?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    instituteName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passingYear?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    teachingCertification?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hasBEd?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    experience?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    experienceMonths?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    teachingMode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    experienceType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resumeUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    experienceSummary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    subjects?: Prisma.TeacherProfileUpdatesubjectsInput | string[];
    classes?: Prisma.TeacherProfileUpdateclassesInput | string[];
    boards?: Prisma.TeacherProfileUpdateboardsInput | string[];
    languages?: Prisma.TeacherProfileUpdatelanguagesInput | string[];
    aadhaarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    qualificationDocUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    experienceDocUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    demoVideoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    verificationStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reapplicationDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    availabilityStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    interviewDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    interviewLink?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rating?: Prisma.FloatFieldUpdateOperationsInput | number;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutTeacherNestedInput;
    chats?: Prisma.ChatUncheckedUpdateManyWithoutTeacherNestedInput;
    timeSlots?: Prisma.TeacherTimeSlotUncheckedUpdateManyWithoutTeacherNestedInput;
    notifications?: Prisma.TeacherNotificationUncheckedUpdateManyWithoutTeacherNestedInput;
};
export type TeacherProfileCreateWithoutChatsInput = {
    id?: string;
    fullName: string;
    gender?: string | null;
    dob?: Date | string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    pincode?: string | null;
    profilePhoto?: string | null;
    qualification?: string | null;
    highestQualification?: string | null;
    instituteName?: string | null;
    passingYear?: number | null;
    teachingCertification?: string | null;
    hasBEd?: boolean;
    experience?: number | null;
    experienceMonths?: number | null;
    teachingMode?: string | null;
    experienceType?: string | null;
    resumeUrl?: string | null;
    experienceSummary?: string | null;
    subjects?: Prisma.TeacherProfileCreatesubjectsInput | string[];
    classes?: Prisma.TeacherProfileCreateclassesInput | string[];
    boards?: Prisma.TeacherProfileCreateboardsInput | string[];
    languages?: Prisma.TeacherProfileCreatelanguagesInput | string[];
    aadhaarUrl?: string | null;
    qualificationDocUrl?: string | null;
    experienceDocUrl?: string | null;
    demoVideoUrl?: string | null;
    verificationStatus?: string;
    rejectionReason?: string | null;
    reapplicationDate?: Date | string | null;
    availabilityStatus?: string;
    interviewDate?: Date | string | null;
    interviewLink?: string | null;
    rating?: number;
    user: Prisma.UserCreateNestedOneWithoutTeacherProfileInput;
    sessions?: Prisma.SessionCreateNestedManyWithoutTeacherInput;
    doubts?: Prisma.DoubtCreateNestedManyWithoutTeacherInput;
    timeSlots?: Prisma.TeacherTimeSlotCreateNestedManyWithoutTeacherInput;
    notifications?: Prisma.TeacherNotificationCreateNestedManyWithoutTeacherInput;
};
export type TeacherProfileUncheckedCreateWithoutChatsInput = {
    id?: string;
    userId: string;
    fullName: string;
    gender?: string | null;
    dob?: Date | string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    pincode?: string | null;
    profilePhoto?: string | null;
    qualification?: string | null;
    highestQualification?: string | null;
    instituteName?: string | null;
    passingYear?: number | null;
    teachingCertification?: string | null;
    hasBEd?: boolean;
    experience?: number | null;
    experienceMonths?: number | null;
    teachingMode?: string | null;
    experienceType?: string | null;
    resumeUrl?: string | null;
    experienceSummary?: string | null;
    subjects?: Prisma.TeacherProfileCreatesubjectsInput | string[];
    classes?: Prisma.TeacherProfileCreateclassesInput | string[];
    boards?: Prisma.TeacherProfileCreateboardsInput | string[];
    languages?: Prisma.TeacherProfileCreatelanguagesInput | string[];
    aadhaarUrl?: string | null;
    qualificationDocUrl?: string | null;
    experienceDocUrl?: string | null;
    demoVideoUrl?: string | null;
    verificationStatus?: string;
    rejectionReason?: string | null;
    reapplicationDate?: Date | string | null;
    availabilityStatus?: string;
    interviewDate?: Date | string | null;
    interviewLink?: string | null;
    rating?: number;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutTeacherInput;
    doubts?: Prisma.DoubtUncheckedCreateNestedManyWithoutTeacherInput;
    timeSlots?: Prisma.TeacherTimeSlotUncheckedCreateNestedManyWithoutTeacherInput;
    notifications?: Prisma.TeacherNotificationUncheckedCreateNestedManyWithoutTeacherInput;
};
export type TeacherProfileCreateOrConnectWithoutChatsInput = {
    where: Prisma.TeacherProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.TeacherProfileCreateWithoutChatsInput, Prisma.TeacherProfileUncheckedCreateWithoutChatsInput>;
};
export type TeacherProfileUpsertWithoutChatsInput = {
    update: Prisma.XOR<Prisma.TeacherProfileUpdateWithoutChatsInput, Prisma.TeacherProfileUncheckedUpdateWithoutChatsInput>;
    create: Prisma.XOR<Prisma.TeacherProfileCreateWithoutChatsInput, Prisma.TeacherProfileUncheckedCreateWithoutChatsInput>;
    where?: Prisma.TeacherProfileWhereInput;
};
export type TeacherProfileUpdateToOneWithWhereWithoutChatsInput = {
    where?: Prisma.TeacherProfileWhereInput;
    data: Prisma.XOR<Prisma.TeacherProfileUpdateWithoutChatsInput, Prisma.TeacherProfileUncheckedUpdateWithoutChatsInput>;
};
export type TeacherProfileUpdateWithoutChatsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    gender?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dob?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pincode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    profilePhoto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    qualification?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    highestQualification?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    instituteName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passingYear?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    teachingCertification?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hasBEd?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    experience?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    experienceMonths?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    teachingMode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    experienceType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resumeUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    experienceSummary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    subjects?: Prisma.TeacherProfileUpdatesubjectsInput | string[];
    classes?: Prisma.TeacherProfileUpdateclassesInput | string[];
    boards?: Prisma.TeacherProfileUpdateboardsInput | string[];
    languages?: Prisma.TeacherProfileUpdatelanguagesInput | string[];
    aadhaarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    qualificationDocUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    experienceDocUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    demoVideoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    verificationStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reapplicationDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    availabilityStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    interviewDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    interviewLink?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rating?: Prisma.FloatFieldUpdateOperationsInput | number;
    user?: Prisma.UserUpdateOneRequiredWithoutTeacherProfileNestedInput;
    sessions?: Prisma.SessionUpdateManyWithoutTeacherNestedInput;
    doubts?: Prisma.DoubtUpdateManyWithoutTeacherNestedInput;
    timeSlots?: Prisma.TeacherTimeSlotUpdateManyWithoutTeacherNestedInput;
    notifications?: Prisma.TeacherNotificationUpdateManyWithoutTeacherNestedInput;
};
export type TeacherProfileUncheckedUpdateWithoutChatsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    gender?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dob?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pincode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    profilePhoto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    qualification?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    highestQualification?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    instituteName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passingYear?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    teachingCertification?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hasBEd?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    experience?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    experienceMonths?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    teachingMode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    experienceType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resumeUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    experienceSummary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    subjects?: Prisma.TeacherProfileUpdatesubjectsInput | string[];
    classes?: Prisma.TeacherProfileUpdateclassesInput | string[];
    boards?: Prisma.TeacherProfileUpdateboardsInput | string[];
    languages?: Prisma.TeacherProfileUpdatelanguagesInput | string[];
    aadhaarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    qualificationDocUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    experienceDocUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    demoVideoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    verificationStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reapplicationDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    availabilityStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    interviewDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    interviewLink?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rating?: Prisma.FloatFieldUpdateOperationsInput | number;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutTeacherNestedInput;
    doubts?: Prisma.DoubtUncheckedUpdateManyWithoutTeacherNestedInput;
    timeSlots?: Prisma.TeacherTimeSlotUncheckedUpdateManyWithoutTeacherNestedInput;
    notifications?: Prisma.TeacherNotificationUncheckedUpdateManyWithoutTeacherNestedInput;
};
export type TeacherProfileCreateWithoutSessionsInput = {
    id?: string;
    fullName: string;
    gender?: string | null;
    dob?: Date | string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    pincode?: string | null;
    profilePhoto?: string | null;
    qualification?: string | null;
    highestQualification?: string | null;
    instituteName?: string | null;
    passingYear?: number | null;
    teachingCertification?: string | null;
    hasBEd?: boolean;
    experience?: number | null;
    experienceMonths?: number | null;
    teachingMode?: string | null;
    experienceType?: string | null;
    resumeUrl?: string | null;
    experienceSummary?: string | null;
    subjects?: Prisma.TeacherProfileCreatesubjectsInput | string[];
    classes?: Prisma.TeacherProfileCreateclassesInput | string[];
    boards?: Prisma.TeacherProfileCreateboardsInput | string[];
    languages?: Prisma.TeacherProfileCreatelanguagesInput | string[];
    aadhaarUrl?: string | null;
    qualificationDocUrl?: string | null;
    experienceDocUrl?: string | null;
    demoVideoUrl?: string | null;
    verificationStatus?: string;
    rejectionReason?: string | null;
    reapplicationDate?: Date | string | null;
    availabilityStatus?: string;
    interviewDate?: Date | string | null;
    interviewLink?: string | null;
    rating?: number;
    user: Prisma.UserCreateNestedOneWithoutTeacherProfileInput;
    doubts?: Prisma.DoubtCreateNestedManyWithoutTeacherInput;
    chats?: Prisma.ChatCreateNestedManyWithoutTeacherInput;
    timeSlots?: Prisma.TeacherTimeSlotCreateNestedManyWithoutTeacherInput;
    notifications?: Prisma.TeacherNotificationCreateNestedManyWithoutTeacherInput;
};
export type TeacherProfileUncheckedCreateWithoutSessionsInput = {
    id?: string;
    userId: string;
    fullName: string;
    gender?: string | null;
    dob?: Date | string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    pincode?: string | null;
    profilePhoto?: string | null;
    qualification?: string | null;
    highestQualification?: string | null;
    instituteName?: string | null;
    passingYear?: number | null;
    teachingCertification?: string | null;
    hasBEd?: boolean;
    experience?: number | null;
    experienceMonths?: number | null;
    teachingMode?: string | null;
    experienceType?: string | null;
    resumeUrl?: string | null;
    experienceSummary?: string | null;
    subjects?: Prisma.TeacherProfileCreatesubjectsInput | string[];
    classes?: Prisma.TeacherProfileCreateclassesInput | string[];
    boards?: Prisma.TeacherProfileCreateboardsInput | string[];
    languages?: Prisma.TeacherProfileCreatelanguagesInput | string[];
    aadhaarUrl?: string | null;
    qualificationDocUrl?: string | null;
    experienceDocUrl?: string | null;
    demoVideoUrl?: string | null;
    verificationStatus?: string;
    rejectionReason?: string | null;
    reapplicationDate?: Date | string | null;
    availabilityStatus?: string;
    interviewDate?: Date | string | null;
    interviewLink?: string | null;
    rating?: number;
    doubts?: Prisma.DoubtUncheckedCreateNestedManyWithoutTeacherInput;
    chats?: Prisma.ChatUncheckedCreateNestedManyWithoutTeacherInput;
    timeSlots?: Prisma.TeacherTimeSlotUncheckedCreateNestedManyWithoutTeacherInput;
    notifications?: Prisma.TeacherNotificationUncheckedCreateNestedManyWithoutTeacherInput;
};
export type TeacherProfileCreateOrConnectWithoutSessionsInput = {
    where: Prisma.TeacherProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.TeacherProfileCreateWithoutSessionsInput, Prisma.TeacherProfileUncheckedCreateWithoutSessionsInput>;
};
export type TeacherProfileUpsertWithoutSessionsInput = {
    update: Prisma.XOR<Prisma.TeacherProfileUpdateWithoutSessionsInput, Prisma.TeacherProfileUncheckedUpdateWithoutSessionsInput>;
    create: Prisma.XOR<Prisma.TeacherProfileCreateWithoutSessionsInput, Prisma.TeacherProfileUncheckedCreateWithoutSessionsInput>;
    where?: Prisma.TeacherProfileWhereInput;
};
export type TeacherProfileUpdateToOneWithWhereWithoutSessionsInput = {
    where?: Prisma.TeacherProfileWhereInput;
    data: Prisma.XOR<Prisma.TeacherProfileUpdateWithoutSessionsInput, Prisma.TeacherProfileUncheckedUpdateWithoutSessionsInput>;
};
export type TeacherProfileUpdateWithoutSessionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    gender?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dob?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pincode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    profilePhoto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    qualification?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    highestQualification?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    instituteName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passingYear?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    teachingCertification?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hasBEd?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    experience?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    experienceMonths?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    teachingMode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    experienceType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resumeUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    experienceSummary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    subjects?: Prisma.TeacherProfileUpdatesubjectsInput | string[];
    classes?: Prisma.TeacherProfileUpdateclassesInput | string[];
    boards?: Prisma.TeacherProfileUpdateboardsInput | string[];
    languages?: Prisma.TeacherProfileUpdatelanguagesInput | string[];
    aadhaarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    qualificationDocUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    experienceDocUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    demoVideoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    verificationStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reapplicationDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    availabilityStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    interviewDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    interviewLink?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rating?: Prisma.FloatFieldUpdateOperationsInput | number;
    user?: Prisma.UserUpdateOneRequiredWithoutTeacherProfileNestedInput;
    doubts?: Prisma.DoubtUpdateManyWithoutTeacherNestedInput;
    chats?: Prisma.ChatUpdateManyWithoutTeacherNestedInput;
    timeSlots?: Prisma.TeacherTimeSlotUpdateManyWithoutTeacherNestedInput;
    notifications?: Prisma.TeacherNotificationUpdateManyWithoutTeacherNestedInput;
};
export type TeacherProfileUncheckedUpdateWithoutSessionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    gender?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dob?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pincode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    profilePhoto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    qualification?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    highestQualification?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    instituteName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passingYear?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    teachingCertification?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hasBEd?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    experience?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    experienceMonths?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    teachingMode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    experienceType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resumeUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    experienceSummary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    subjects?: Prisma.TeacherProfileUpdatesubjectsInput | string[];
    classes?: Prisma.TeacherProfileUpdateclassesInput | string[];
    boards?: Prisma.TeacherProfileUpdateboardsInput | string[];
    languages?: Prisma.TeacherProfileUpdatelanguagesInput | string[];
    aadhaarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    qualificationDocUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    experienceDocUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    demoVideoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    verificationStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reapplicationDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    availabilityStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    interviewDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    interviewLink?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rating?: Prisma.FloatFieldUpdateOperationsInput | number;
    doubts?: Prisma.DoubtUncheckedUpdateManyWithoutTeacherNestedInput;
    chats?: Prisma.ChatUncheckedUpdateManyWithoutTeacherNestedInput;
    timeSlots?: Prisma.TeacherTimeSlotUncheckedUpdateManyWithoutTeacherNestedInput;
    notifications?: Prisma.TeacherNotificationUncheckedUpdateManyWithoutTeacherNestedInput;
};
export type TeacherProfileCreateWithoutTimeSlotsInput = {
    id?: string;
    fullName: string;
    gender?: string | null;
    dob?: Date | string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    pincode?: string | null;
    profilePhoto?: string | null;
    qualification?: string | null;
    highestQualification?: string | null;
    instituteName?: string | null;
    passingYear?: number | null;
    teachingCertification?: string | null;
    hasBEd?: boolean;
    experience?: number | null;
    experienceMonths?: number | null;
    teachingMode?: string | null;
    experienceType?: string | null;
    resumeUrl?: string | null;
    experienceSummary?: string | null;
    subjects?: Prisma.TeacherProfileCreatesubjectsInput | string[];
    classes?: Prisma.TeacherProfileCreateclassesInput | string[];
    boards?: Prisma.TeacherProfileCreateboardsInput | string[];
    languages?: Prisma.TeacherProfileCreatelanguagesInput | string[];
    aadhaarUrl?: string | null;
    qualificationDocUrl?: string | null;
    experienceDocUrl?: string | null;
    demoVideoUrl?: string | null;
    verificationStatus?: string;
    rejectionReason?: string | null;
    reapplicationDate?: Date | string | null;
    availabilityStatus?: string;
    interviewDate?: Date | string | null;
    interviewLink?: string | null;
    rating?: number;
    user: Prisma.UserCreateNestedOneWithoutTeacherProfileInput;
    sessions?: Prisma.SessionCreateNestedManyWithoutTeacherInput;
    doubts?: Prisma.DoubtCreateNestedManyWithoutTeacherInput;
    chats?: Prisma.ChatCreateNestedManyWithoutTeacherInput;
    notifications?: Prisma.TeacherNotificationCreateNestedManyWithoutTeacherInput;
};
export type TeacherProfileUncheckedCreateWithoutTimeSlotsInput = {
    id?: string;
    userId: string;
    fullName: string;
    gender?: string | null;
    dob?: Date | string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    pincode?: string | null;
    profilePhoto?: string | null;
    qualification?: string | null;
    highestQualification?: string | null;
    instituteName?: string | null;
    passingYear?: number | null;
    teachingCertification?: string | null;
    hasBEd?: boolean;
    experience?: number | null;
    experienceMonths?: number | null;
    teachingMode?: string | null;
    experienceType?: string | null;
    resumeUrl?: string | null;
    experienceSummary?: string | null;
    subjects?: Prisma.TeacherProfileCreatesubjectsInput | string[];
    classes?: Prisma.TeacherProfileCreateclassesInput | string[];
    boards?: Prisma.TeacherProfileCreateboardsInput | string[];
    languages?: Prisma.TeacherProfileCreatelanguagesInput | string[];
    aadhaarUrl?: string | null;
    qualificationDocUrl?: string | null;
    experienceDocUrl?: string | null;
    demoVideoUrl?: string | null;
    verificationStatus?: string;
    rejectionReason?: string | null;
    reapplicationDate?: Date | string | null;
    availabilityStatus?: string;
    interviewDate?: Date | string | null;
    interviewLink?: string | null;
    rating?: number;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutTeacherInput;
    doubts?: Prisma.DoubtUncheckedCreateNestedManyWithoutTeacherInput;
    chats?: Prisma.ChatUncheckedCreateNestedManyWithoutTeacherInput;
    notifications?: Prisma.TeacherNotificationUncheckedCreateNestedManyWithoutTeacherInput;
};
export type TeacherProfileCreateOrConnectWithoutTimeSlotsInput = {
    where: Prisma.TeacherProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.TeacherProfileCreateWithoutTimeSlotsInput, Prisma.TeacherProfileUncheckedCreateWithoutTimeSlotsInput>;
};
export type TeacherProfileUpsertWithoutTimeSlotsInput = {
    update: Prisma.XOR<Prisma.TeacherProfileUpdateWithoutTimeSlotsInput, Prisma.TeacherProfileUncheckedUpdateWithoutTimeSlotsInput>;
    create: Prisma.XOR<Prisma.TeacherProfileCreateWithoutTimeSlotsInput, Prisma.TeacherProfileUncheckedCreateWithoutTimeSlotsInput>;
    where?: Prisma.TeacherProfileWhereInput;
};
export type TeacherProfileUpdateToOneWithWhereWithoutTimeSlotsInput = {
    where?: Prisma.TeacherProfileWhereInput;
    data: Prisma.XOR<Prisma.TeacherProfileUpdateWithoutTimeSlotsInput, Prisma.TeacherProfileUncheckedUpdateWithoutTimeSlotsInput>;
};
export type TeacherProfileUpdateWithoutTimeSlotsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    gender?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dob?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pincode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    profilePhoto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    qualification?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    highestQualification?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    instituteName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passingYear?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    teachingCertification?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hasBEd?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    experience?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    experienceMonths?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    teachingMode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    experienceType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resumeUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    experienceSummary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    subjects?: Prisma.TeacherProfileUpdatesubjectsInput | string[];
    classes?: Prisma.TeacherProfileUpdateclassesInput | string[];
    boards?: Prisma.TeacherProfileUpdateboardsInput | string[];
    languages?: Prisma.TeacherProfileUpdatelanguagesInput | string[];
    aadhaarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    qualificationDocUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    experienceDocUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    demoVideoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    verificationStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reapplicationDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    availabilityStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    interviewDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    interviewLink?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rating?: Prisma.FloatFieldUpdateOperationsInput | number;
    user?: Prisma.UserUpdateOneRequiredWithoutTeacherProfileNestedInput;
    sessions?: Prisma.SessionUpdateManyWithoutTeacherNestedInput;
    doubts?: Prisma.DoubtUpdateManyWithoutTeacherNestedInput;
    chats?: Prisma.ChatUpdateManyWithoutTeacherNestedInput;
    notifications?: Prisma.TeacherNotificationUpdateManyWithoutTeacherNestedInput;
};
export type TeacherProfileUncheckedUpdateWithoutTimeSlotsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    gender?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dob?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pincode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    profilePhoto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    qualification?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    highestQualification?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    instituteName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passingYear?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    teachingCertification?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hasBEd?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    experience?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    experienceMonths?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    teachingMode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    experienceType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resumeUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    experienceSummary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    subjects?: Prisma.TeacherProfileUpdatesubjectsInput | string[];
    classes?: Prisma.TeacherProfileUpdateclassesInput | string[];
    boards?: Prisma.TeacherProfileUpdateboardsInput | string[];
    languages?: Prisma.TeacherProfileUpdatelanguagesInput | string[];
    aadhaarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    qualificationDocUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    experienceDocUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    demoVideoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    verificationStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reapplicationDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    availabilityStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    interviewDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    interviewLink?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rating?: Prisma.FloatFieldUpdateOperationsInput | number;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutTeacherNestedInput;
    doubts?: Prisma.DoubtUncheckedUpdateManyWithoutTeacherNestedInput;
    chats?: Prisma.ChatUncheckedUpdateManyWithoutTeacherNestedInput;
    notifications?: Prisma.TeacherNotificationUncheckedUpdateManyWithoutTeacherNestedInput;
};
export type TeacherProfileCreateWithoutNotificationsInput = {
    id?: string;
    fullName: string;
    gender?: string | null;
    dob?: Date | string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    pincode?: string | null;
    profilePhoto?: string | null;
    qualification?: string | null;
    highestQualification?: string | null;
    instituteName?: string | null;
    passingYear?: number | null;
    teachingCertification?: string | null;
    hasBEd?: boolean;
    experience?: number | null;
    experienceMonths?: number | null;
    teachingMode?: string | null;
    experienceType?: string | null;
    resumeUrl?: string | null;
    experienceSummary?: string | null;
    subjects?: Prisma.TeacherProfileCreatesubjectsInput | string[];
    classes?: Prisma.TeacherProfileCreateclassesInput | string[];
    boards?: Prisma.TeacherProfileCreateboardsInput | string[];
    languages?: Prisma.TeacherProfileCreatelanguagesInput | string[];
    aadhaarUrl?: string | null;
    qualificationDocUrl?: string | null;
    experienceDocUrl?: string | null;
    demoVideoUrl?: string | null;
    verificationStatus?: string;
    rejectionReason?: string | null;
    reapplicationDate?: Date | string | null;
    availabilityStatus?: string;
    interviewDate?: Date | string | null;
    interviewLink?: string | null;
    rating?: number;
    user: Prisma.UserCreateNestedOneWithoutTeacherProfileInput;
    sessions?: Prisma.SessionCreateNestedManyWithoutTeacherInput;
    doubts?: Prisma.DoubtCreateNestedManyWithoutTeacherInput;
    chats?: Prisma.ChatCreateNestedManyWithoutTeacherInput;
    timeSlots?: Prisma.TeacherTimeSlotCreateNestedManyWithoutTeacherInput;
};
export type TeacherProfileUncheckedCreateWithoutNotificationsInput = {
    id?: string;
    userId: string;
    fullName: string;
    gender?: string | null;
    dob?: Date | string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    pincode?: string | null;
    profilePhoto?: string | null;
    qualification?: string | null;
    highestQualification?: string | null;
    instituteName?: string | null;
    passingYear?: number | null;
    teachingCertification?: string | null;
    hasBEd?: boolean;
    experience?: number | null;
    experienceMonths?: number | null;
    teachingMode?: string | null;
    experienceType?: string | null;
    resumeUrl?: string | null;
    experienceSummary?: string | null;
    subjects?: Prisma.TeacherProfileCreatesubjectsInput | string[];
    classes?: Prisma.TeacherProfileCreateclassesInput | string[];
    boards?: Prisma.TeacherProfileCreateboardsInput | string[];
    languages?: Prisma.TeacherProfileCreatelanguagesInput | string[];
    aadhaarUrl?: string | null;
    qualificationDocUrl?: string | null;
    experienceDocUrl?: string | null;
    demoVideoUrl?: string | null;
    verificationStatus?: string;
    rejectionReason?: string | null;
    reapplicationDate?: Date | string | null;
    availabilityStatus?: string;
    interviewDate?: Date | string | null;
    interviewLink?: string | null;
    rating?: number;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutTeacherInput;
    doubts?: Prisma.DoubtUncheckedCreateNestedManyWithoutTeacherInput;
    chats?: Prisma.ChatUncheckedCreateNestedManyWithoutTeacherInput;
    timeSlots?: Prisma.TeacherTimeSlotUncheckedCreateNestedManyWithoutTeacherInput;
};
export type TeacherProfileCreateOrConnectWithoutNotificationsInput = {
    where: Prisma.TeacherProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.TeacherProfileCreateWithoutNotificationsInput, Prisma.TeacherProfileUncheckedCreateWithoutNotificationsInput>;
};
export type TeacherProfileUpsertWithoutNotificationsInput = {
    update: Prisma.XOR<Prisma.TeacherProfileUpdateWithoutNotificationsInput, Prisma.TeacherProfileUncheckedUpdateWithoutNotificationsInput>;
    create: Prisma.XOR<Prisma.TeacherProfileCreateWithoutNotificationsInput, Prisma.TeacherProfileUncheckedCreateWithoutNotificationsInput>;
    where?: Prisma.TeacherProfileWhereInput;
};
export type TeacherProfileUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: Prisma.TeacherProfileWhereInput;
    data: Prisma.XOR<Prisma.TeacherProfileUpdateWithoutNotificationsInput, Prisma.TeacherProfileUncheckedUpdateWithoutNotificationsInput>;
};
export type TeacherProfileUpdateWithoutNotificationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    gender?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dob?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pincode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    profilePhoto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    qualification?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    highestQualification?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    instituteName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passingYear?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    teachingCertification?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hasBEd?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    experience?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    experienceMonths?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    teachingMode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    experienceType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resumeUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    experienceSummary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    subjects?: Prisma.TeacherProfileUpdatesubjectsInput | string[];
    classes?: Prisma.TeacherProfileUpdateclassesInput | string[];
    boards?: Prisma.TeacherProfileUpdateboardsInput | string[];
    languages?: Prisma.TeacherProfileUpdatelanguagesInput | string[];
    aadhaarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    qualificationDocUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    experienceDocUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    demoVideoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    verificationStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reapplicationDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    availabilityStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    interviewDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    interviewLink?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rating?: Prisma.FloatFieldUpdateOperationsInput | number;
    user?: Prisma.UserUpdateOneRequiredWithoutTeacherProfileNestedInput;
    sessions?: Prisma.SessionUpdateManyWithoutTeacherNestedInput;
    doubts?: Prisma.DoubtUpdateManyWithoutTeacherNestedInput;
    chats?: Prisma.ChatUpdateManyWithoutTeacherNestedInput;
    timeSlots?: Prisma.TeacherTimeSlotUpdateManyWithoutTeacherNestedInput;
};
export type TeacherProfileUncheckedUpdateWithoutNotificationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    gender?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dob?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pincode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    profilePhoto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    qualification?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    highestQualification?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    instituteName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passingYear?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    teachingCertification?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hasBEd?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    experience?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    experienceMonths?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    teachingMode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    experienceType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resumeUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    experienceSummary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    subjects?: Prisma.TeacherProfileUpdatesubjectsInput | string[];
    classes?: Prisma.TeacherProfileUpdateclassesInput | string[];
    boards?: Prisma.TeacherProfileUpdateboardsInput | string[];
    languages?: Prisma.TeacherProfileUpdatelanguagesInput | string[];
    aadhaarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    qualificationDocUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    experienceDocUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    demoVideoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    verificationStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reapplicationDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    availabilityStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    interviewDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    interviewLink?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rating?: Prisma.FloatFieldUpdateOperationsInput | number;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutTeacherNestedInput;
    doubts?: Prisma.DoubtUncheckedUpdateManyWithoutTeacherNestedInput;
    chats?: Prisma.ChatUncheckedUpdateManyWithoutTeacherNestedInput;
    timeSlots?: Prisma.TeacherTimeSlotUncheckedUpdateManyWithoutTeacherNestedInput;
};
/**
 * Count Type TeacherProfileCountOutputType
 */
export type TeacherProfileCountOutputType = {
    sessions: number;
    doubts: number;
    chats: number;
    timeSlots: number;
    notifications: number;
};
export type TeacherProfileCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    sessions?: boolean | TeacherProfileCountOutputTypeCountSessionsArgs;
    doubts?: boolean | TeacherProfileCountOutputTypeCountDoubtsArgs;
    chats?: boolean | TeacherProfileCountOutputTypeCountChatsArgs;
    timeSlots?: boolean | TeacherProfileCountOutputTypeCountTimeSlotsArgs;
    notifications?: boolean | TeacherProfileCountOutputTypeCountNotificationsArgs;
};
/**
 * TeacherProfileCountOutputType without action
 */
export type TeacherProfileCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherProfileCountOutputType
     */
    select?: Prisma.TeacherProfileCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * TeacherProfileCountOutputType without action
 */
export type TeacherProfileCountOutputTypeCountSessionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SessionWhereInput;
};
/**
 * TeacherProfileCountOutputType without action
 */
export type TeacherProfileCountOutputTypeCountDoubtsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DoubtWhereInput;
};
/**
 * TeacherProfileCountOutputType without action
 */
export type TeacherProfileCountOutputTypeCountChatsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ChatWhereInput;
};
/**
 * TeacherProfileCountOutputType without action
 */
export type TeacherProfileCountOutputTypeCountTimeSlotsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TeacherTimeSlotWhereInput;
};
/**
 * TeacherProfileCountOutputType without action
 */
export type TeacherProfileCountOutputTypeCountNotificationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TeacherNotificationWhereInput;
};
export type TeacherProfileSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    fullName?: boolean;
    gender?: boolean;
    dob?: boolean;
    address?: boolean;
    city?: boolean;
    state?: boolean;
    pincode?: boolean;
    profilePhoto?: boolean;
    qualification?: boolean;
    highestQualification?: boolean;
    instituteName?: boolean;
    passingYear?: boolean;
    teachingCertification?: boolean;
    hasBEd?: boolean;
    experience?: boolean;
    experienceMonths?: boolean;
    teachingMode?: boolean;
    experienceType?: boolean;
    resumeUrl?: boolean;
    experienceSummary?: boolean;
    subjects?: boolean;
    classes?: boolean;
    boards?: boolean;
    languages?: boolean;
    aadhaarUrl?: boolean;
    qualificationDocUrl?: boolean;
    experienceDocUrl?: boolean;
    demoVideoUrl?: boolean;
    verificationStatus?: boolean;
    rejectionReason?: boolean;
    reapplicationDate?: boolean;
    availabilityStatus?: boolean;
    interviewDate?: boolean;
    interviewLink?: boolean;
    rating?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    sessions?: boolean | Prisma.TeacherProfile$sessionsArgs<ExtArgs>;
    doubts?: boolean | Prisma.TeacherProfile$doubtsArgs<ExtArgs>;
    chats?: boolean | Prisma.TeacherProfile$chatsArgs<ExtArgs>;
    timeSlots?: boolean | Prisma.TeacherProfile$timeSlotsArgs<ExtArgs>;
    notifications?: boolean | Prisma.TeacherProfile$notificationsArgs<ExtArgs>;
    _count?: boolean | Prisma.TeacherProfileCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["teacherProfile"]>;
export type TeacherProfileSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    fullName?: boolean;
    gender?: boolean;
    dob?: boolean;
    address?: boolean;
    city?: boolean;
    state?: boolean;
    pincode?: boolean;
    profilePhoto?: boolean;
    qualification?: boolean;
    highestQualification?: boolean;
    instituteName?: boolean;
    passingYear?: boolean;
    teachingCertification?: boolean;
    hasBEd?: boolean;
    experience?: boolean;
    experienceMonths?: boolean;
    teachingMode?: boolean;
    experienceType?: boolean;
    resumeUrl?: boolean;
    experienceSummary?: boolean;
    subjects?: boolean;
    classes?: boolean;
    boards?: boolean;
    languages?: boolean;
    aadhaarUrl?: boolean;
    qualificationDocUrl?: boolean;
    experienceDocUrl?: boolean;
    demoVideoUrl?: boolean;
    verificationStatus?: boolean;
    rejectionReason?: boolean;
    reapplicationDate?: boolean;
    availabilityStatus?: boolean;
    interviewDate?: boolean;
    interviewLink?: boolean;
    rating?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["teacherProfile"]>;
export type TeacherProfileSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    fullName?: boolean;
    gender?: boolean;
    dob?: boolean;
    address?: boolean;
    city?: boolean;
    state?: boolean;
    pincode?: boolean;
    profilePhoto?: boolean;
    qualification?: boolean;
    highestQualification?: boolean;
    instituteName?: boolean;
    passingYear?: boolean;
    teachingCertification?: boolean;
    hasBEd?: boolean;
    experience?: boolean;
    experienceMonths?: boolean;
    teachingMode?: boolean;
    experienceType?: boolean;
    resumeUrl?: boolean;
    experienceSummary?: boolean;
    subjects?: boolean;
    classes?: boolean;
    boards?: boolean;
    languages?: boolean;
    aadhaarUrl?: boolean;
    qualificationDocUrl?: boolean;
    experienceDocUrl?: boolean;
    demoVideoUrl?: boolean;
    verificationStatus?: boolean;
    rejectionReason?: boolean;
    reapplicationDate?: boolean;
    availabilityStatus?: boolean;
    interviewDate?: boolean;
    interviewLink?: boolean;
    rating?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["teacherProfile"]>;
export type TeacherProfileSelectScalar = {
    id?: boolean;
    userId?: boolean;
    fullName?: boolean;
    gender?: boolean;
    dob?: boolean;
    address?: boolean;
    city?: boolean;
    state?: boolean;
    pincode?: boolean;
    profilePhoto?: boolean;
    qualification?: boolean;
    highestQualification?: boolean;
    instituteName?: boolean;
    passingYear?: boolean;
    teachingCertification?: boolean;
    hasBEd?: boolean;
    experience?: boolean;
    experienceMonths?: boolean;
    teachingMode?: boolean;
    experienceType?: boolean;
    resumeUrl?: boolean;
    experienceSummary?: boolean;
    subjects?: boolean;
    classes?: boolean;
    boards?: boolean;
    languages?: boolean;
    aadhaarUrl?: boolean;
    qualificationDocUrl?: boolean;
    experienceDocUrl?: boolean;
    demoVideoUrl?: boolean;
    verificationStatus?: boolean;
    rejectionReason?: boolean;
    reapplicationDate?: boolean;
    availabilityStatus?: boolean;
    interviewDate?: boolean;
    interviewLink?: boolean;
    rating?: boolean;
};
export type TeacherProfileOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "fullName" | "gender" | "dob" | "address" | "city" | "state" | "pincode" | "profilePhoto" | "qualification" | "highestQualification" | "instituteName" | "passingYear" | "teachingCertification" | "hasBEd" | "experience" | "experienceMonths" | "teachingMode" | "experienceType" | "resumeUrl" | "experienceSummary" | "subjects" | "classes" | "boards" | "languages" | "aadhaarUrl" | "qualificationDocUrl" | "experienceDocUrl" | "demoVideoUrl" | "verificationStatus" | "rejectionReason" | "reapplicationDate" | "availabilityStatus" | "interviewDate" | "interviewLink" | "rating", ExtArgs["result"]["teacherProfile"]>;
export type TeacherProfileInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    sessions?: boolean | Prisma.TeacherProfile$sessionsArgs<ExtArgs>;
    doubts?: boolean | Prisma.TeacherProfile$doubtsArgs<ExtArgs>;
    chats?: boolean | Prisma.TeacherProfile$chatsArgs<ExtArgs>;
    timeSlots?: boolean | Prisma.TeacherProfile$timeSlotsArgs<ExtArgs>;
    notifications?: boolean | Prisma.TeacherProfile$notificationsArgs<ExtArgs>;
    _count?: boolean | Prisma.TeacherProfileCountOutputTypeDefaultArgs<ExtArgs>;
};
export type TeacherProfileIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type TeacherProfileIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $TeacherProfilePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "TeacherProfile";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        sessions: Prisma.$SessionPayload<ExtArgs>[];
        doubts: Prisma.$DoubtPayload<ExtArgs>[];
        chats: Prisma.$ChatPayload<ExtArgs>[];
        timeSlots: Prisma.$TeacherTimeSlotPayload<ExtArgs>[];
        notifications: Prisma.$TeacherNotificationPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        fullName: string;
        gender: string | null;
        dob: Date | null;
        address: string | null;
        city: string | null;
        state: string | null;
        pincode: string | null;
        profilePhoto: string | null;
        qualification: string | null;
        highestQualification: string | null;
        instituteName: string | null;
        passingYear: number | null;
        teachingCertification: string | null;
        hasBEd: boolean;
        experience: number | null;
        experienceMonths: number | null;
        teachingMode: string | null;
        experienceType: string | null;
        resumeUrl: string | null;
        experienceSummary: string | null;
        subjects: string[];
        classes: string[];
        boards: string[];
        languages: string[];
        aadhaarUrl: string | null;
        qualificationDocUrl: string | null;
        experienceDocUrl: string | null;
        demoVideoUrl: string | null;
        verificationStatus: string;
        rejectionReason: string | null;
        reapplicationDate: Date | null;
        availabilityStatus: string;
        interviewDate: Date | null;
        interviewLink: string | null;
        rating: number;
    }, ExtArgs["result"]["teacherProfile"]>;
    composites: {};
};
export type TeacherProfileGetPayload<S extends boolean | null | undefined | TeacherProfileDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TeacherProfilePayload, S>;
export type TeacherProfileCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TeacherProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TeacherProfileCountAggregateInputType | true;
};
export interface TeacherProfileDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['TeacherProfile'];
        meta: {
            name: 'TeacherProfile';
        };
    };
    /**
     * Find zero or one TeacherProfile that matches the filter.
     * @param {TeacherProfileFindUniqueArgs} args - Arguments to find a TeacherProfile
     * @example
     * // Get one TeacherProfile
     * const teacherProfile = await prisma.teacherProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeacherProfileFindUniqueArgs>(args: Prisma.SelectSubset<T, TeacherProfileFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TeacherProfileClient<runtime.Types.Result.GetResult<Prisma.$TeacherProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one TeacherProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeacherProfileFindUniqueOrThrowArgs} args - Arguments to find a TeacherProfile
     * @example
     * // Get one TeacherProfile
     * const teacherProfile = await prisma.teacherProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeacherProfileFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TeacherProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TeacherProfileClient<runtime.Types.Result.GetResult<Prisma.$TeacherProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first TeacherProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherProfileFindFirstArgs} args - Arguments to find a TeacherProfile
     * @example
     * // Get one TeacherProfile
     * const teacherProfile = await prisma.teacherProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeacherProfileFindFirstArgs>(args?: Prisma.SelectSubset<T, TeacherProfileFindFirstArgs<ExtArgs>>): Prisma.Prisma__TeacherProfileClient<runtime.Types.Result.GetResult<Prisma.$TeacherProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first TeacherProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherProfileFindFirstOrThrowArgs} args - Arguments to find a TeacherProfile
     * @example
     * // Get one TeacherProfile
     * const teacherProfile = await prisma.teacherProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeacherProfileFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TeacherProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TeacherProfileClient<runtime.Types.Result.GetResult<Prisma.$TeacherProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more TeacherProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TeacherProfiles
     * const teacherProfiles = await prisma.teacherProfile.findMany()
     *
     * // Get first 10 TeacherProfiles
     * const teacherProfiles = await prisma.teacherProfile.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const teacherProfileWithIdOnly = await prisma.teacherProfile.findMany({ select: { id: true } })
     *
     */
    findMany<T extends TeacherProfileFindManyArgs>(args?: Prisma.SelectSubset<T, TeacherProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TeacherProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a TeacherProfile.
     * @param {TeacherProfileCreateArgs} args - Arguments to create a TeacherProfile.
     * @example
     * // Create one TeacherProfile
     * const TeacherProfile = await prisma.teacherProfile.create({
     *   data: {
     *     // ... data to create a TeacherProfile
     *   }
     * })
     *
     */
    create<T extends TeacherProfileCreateArgs>(args: Prisma.SelectSubset<T, TeacherProfileCreateArgs<ExtArgs>>): Prisma.Prisma__TeacherProfileClient<runtime.Types.Result.GetResult<Prisma.$TeacherProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many TeacherProfiles.
     * @param {TeacherProfileCreateManyArgs} args - Arguments to create many TeacherProfiles.
     * @example
     * // Create many TeacherProfiles
     * const teacherProfile = await prisma.teacherProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends TeacherProfileCreateManyArgs>(args?: Prisma.SelectSubset<T, TeacherProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many TeacherProfiles and returns the data saved in the database.
     * @param {TeacherProfileCreateManyAndReturnArgs} args - Arguments to create many TeacherProfiles.
     * @example
     * // Create many TeacherProfiles
     * const teacherProfile = await prisma.teacherProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many TeacherProfiles and only return the `id`
     * const teacherProfileWithIdOnly = await prisma.teacherProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends TeacherProfileCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TeacherProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TeacherProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a TeacherProfile.
     * @param {TeacherProfileDeleteArgs} args - Arguments to delete one TeacherProfile.
     * @example
     * // Delete one TeacherProfile
     * const TeacherProfile = await prisma.teacherProfile.delete({
     *   where: {
     *     // ... filter to delete one TeacherProfile
     *   }
     * })
     *
     */
    delete<T extends TeacherProfileDeleteArgs>(args: Prisma.SelectSubset<T, TeacherProfileDeleteArgs<ExtArgs>>): Prisma.Prisma__TeacherProfileClient<runtime.Types.Result.GetResult<Prisma.$TeacherProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one TeacherProfile.
     * @param {TeacherProfileUpdateArgs} args - Arguments to update one TeacherProfile.
     * @example
     * // Update one TeacherProfile
     * const teacherProfile = await prisma.teacherProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends TeacherProfileUpdateArgs>(args: Prisma.SelectSubset<T, TeacherProfileUpdateArgs<ExtArgs>>): Prisma.Prisma__TeacherProfileClient<runtime.Types.Result.GetResult<Prisma.$TeacherProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more TeacherProfiles.
     * @param {TeacherProfileDeleteManyArgs} args - Arguments to filter TeacherProfiles to delete.
     * @example
     * // Delete a few TeacherProfiles
     * const { count } = await prisma.teacherProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends TeacherProfileDeleteManyArgs>(args?: Prisma.SelectSubset<T, TeacherProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more TeacherProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TeacherProfiles
     * const teacherProfile = await prisma.teacherProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends TeacherProfileUpdateManyArgs>(args: Prisma.SelectSubset<T, TeacherProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more TeacherProfiles and returns the data updated in the database.
     * @param {TeacherProfileUpdateManyAndReturnArgs} args - Arguments to update many TeacherProfiles.
     * @example
     * // Update many TeacherProfiles
     * const teacherProfile = await prisma.teacherProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more TeacherProfiles and only return the `id`
     * const teacherProfileWithIdOnly = await prisma.teacherProfile.updateManyAndReturn({
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
    updateManyAndReturn<T extends TeacherProfileUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TeacherProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TeacherProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one TeacherProfile.
     * @param {TeacherProfileUpsertArgs} args - Arguments to update or create a TeacherProfile.
     * @example
     * // Update or create a TeacherProfile
     * const teacherProfile = await prisma.teacherProfile.upsert({
     *   create: {
     *     // ... data to create a TeacherProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TeacherProfile we want to update
     *   }
     * })
     */
    upsert<T extends TeacherProfileUpsertArgs>(args: Prisma.SelectSubset<T, TeacherProfileUpsertArgs<ExtArgs>>): Prisma.Prisma__TeacherProfileClient<runtime.Types.Result.GetResult<Prisma.$TeacherProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of TeacherProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherProfileCountArgs} args - Arguments to filter TeacherProfiles to count.
     * @example
     * // Count the number of TeacherProfiles
     * const count = await prisma.teacherProfile.count({
     *   where: {
     *     // ... the filter for the TeacherProfiles we want to count
     *   }
     * })
    **/
    count<T extends TeacherProfileCountArgs>(args?: Prisma.Subset<T, TeacherProfileCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TeacherProfileCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a TeacherProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeacherProfileAggregateArgs>(args: Prisma.Subset<T, TeacherProfileAggregateArgs>): Prisma.PrismaPromise<GetTeacherProfileAggregateType<T>>;
    /**
     * Group by TeacherProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherProfileGroupByArgs} args - Group by arguments.
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
    groupBy<T extends TeacherProfileGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TeacherProfileGroupByArgs['orderBy'];
    } : {
        orderBy?: TeacherProfileGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TeacherProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeacherProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the TeacherProfile model
     */
    readonly fields: TeacherProfileFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for TeacherProfile.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__TeacherProfileClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    sessions<T extends Prisma.TeacherProfile$sessionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TeacherProfile$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    doubts<T extends Prisma.TeacherProfile$doubtsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TeacherProfile$doubtsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DoubtPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    chats<T extends Prisma.TeacherProfile$chatsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TeacherProfile$chatsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    timeSlots<T extends Prisma.TeacherProfile$timeSlotsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TeacherProfile$timeSlotsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TeacherTimeSlotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    notifications<T extends Prisma.TeacherProfile$notificationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TeacherProfile$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TeacherNotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the TeacherProfile model
 */
export interface TeacherProfileFieldRefs {
    readonly id: Prisma.FieldRef<"TeacherProfile", 'String'>;
    readonly userId: Prisma.FieldRef<"TeacherProfile", 'String'>;
    readonly fullName: Prisma.FieldRef<"TeacherProfile", 'String'>;
    readonly gender: Prisma.FieldRef<"TeacherProfile", 'String'>;
    readonly dob: Prisma.FieldRef<"TeacherProfile", 'DateTime'>;
    readonly address: Prisma.FieldRef<"TeacherProfile", 'String'>;
    readonly city: Prisma.FieldRef<"TeacherProfile", 'String'>;
    readonly state: Prisma.FieldRef<"TeacherProfile", 'String'>;
    readonly pincode: Prisma.FieldRef<"TeacherProfile", 'String'>;
    readonly profilePhoto: Prisma.FieldRef<"TeacherProfile", 'String'>;
    readonly qualification: Prisma.FieldRef<"TeacherProfile", 'String'>;
    readonly highestQualification: Prisma.FieldRef<"TeacherProfile", 'String'>;
    readonly instituteName: Prisma.FieldRef<"TeacherProfile", 'String'>;
    readonly passingYear: Prisma.FieldRef<"TeacherProfile", 'Int'>;
    readonly teachingCertification: Prisma.FieldRef<"TeacherProfile", 'String'>;
    readonly hasBEd: Prisma.FieldRef<"TeacherProfile", 'Boolean'>;
    readonly experience: Prisma.FieldRef<"TeacherProfile", 'Int'>;
    readonly experienceMonths: Prisma.FieldRef<"TeacherProfile", 'Int'>;
    readonly teachingMode: Prisma.FieldRef<"TeacherProfile", 'String'>;
    readonly experienceType: Prisma.FieldRef<"TeacherProfile", 'String'>;
    readonly resumeUrl: Prisma.FieldRef<"TeacherProfile", 'String'>;
    readonly experienceSummary: Prisma.FieldRef<"TeacherProfile", 'String'>;
    readonly subjects: Prisma.FieldRef<"TeacherProfile", 'String[]'>;
    readonly classes: Prisma.FieldRef<"TeacherProfile", 'String[]'>;
    readonly boards: Prisma.FieldRef<"TeacherProfile", 'String[]'>;
    readonly languages: Prisma.FieldRef<"TeacherProfile", 'String[]'>;
    readonly aadhaarUrl: Prisma.FieldRef<"TeacherProfile", 'String'>;
    readonly qualificationDocUrl: Prisma.FieldRef<"TeacherProfile", 'String'>;
    readonly experienceDocUrl: Prisma.FieldRef<"TeacherProfile", 'String'>;
    readonly demoVideoUrl: Prisma.FieldRef<"TeacherProfile", 'String'>;
    readonly verificationStatus: Prisma.FieldRef<"TeacherProfile", 'String'>;
    readonly rejectionReason: Prisma.FieldRef<"TeacherProfile", 'String'>;
    readonly reapplicationDate: Prisma.FieldRef<"TeacherProfile", 'DateTime'>;
    readonly availabilityStatus: Prisma.FieldRef<"TeacherProfile", 'String'>;
    readonly interviewDate: Prisma.FieldRef<"TeacherProfile", 'DateTime'>;
    readonly interviewLink: Prisma.FieldRef<"TeacherProfile", 'String'>;
    readonly rating: Prisma.FieldRef<"TeacherProfile", 'Float'>;
}
/**
 * TeacherProfile findUnique
 */
export type TeacherProfileFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which TeacherProfile to fetch.
     */
    where: Prisma.TeacherProfileWhereUniqueInput;
};
/**
 * TeacherProfile findUniqueOrThrow
 */
export type TeacherProfileFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which TeacherProfile to fetch.
     */
    where: Prisma.TeacherProfileWhereUniqueInput;
};
/**
 * TeacherProfile findFirst
 */
export type TeacherProfileFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which TeacherProfile to fetch.
     */
    where?: Prisma.TeacherProfileWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TeacherProfiles to fetch.
     */
    orderBy?: Prisma.TeacherProfileOrderByWithRelationInput | Prisma.TeacherProfileOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for TeacherProfiles.
     */
    cursor?: Prisma.TeacherProfileWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TeacherProfiles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TeacherProfiles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of TeacherProfiles.
     */
    distinct?: Prisma.TeacherProfileScalarFieldEnum | Prisma.TeacherProfileScalarFieldEnum[];
};
/**
 * TeacherProfile findFirstOrThrow
 */
export type TeacherProfileFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which TeacherProfile to fetch.
     */
    where?: Prisma.TeacherProfileWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TeacherProfiles to fetch.
     */
    orderBy?: Prisma.TeacherProfileOrderByWithRelationInput | Prisma.TeacherProfileOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for TeacherProfiles.
     */
    cursor?: Prisma.TeacherProfileWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TeacherProfiles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TeacherProfiles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of TeacherProfiles.
     */
    distinct?: Prisma.TeacherProfileScalarFieldEnum | Prisma.TeacherProfileScalarFieldEnum[];
};
/**
 * TeacherProfile findMany
 */
export type TeacherProfileFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which TeacherProfiles to fetch.
     */
    where?: Prisma.TeacherProfileWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TeacherProfiles to fetch.
     */
    orderBy?: Prisma.TeacherProfileOrderByWithRelationInput | Prisma.TeacherProfileOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing TeacherProfiles.
     */
    cursor?: Prisma.TeacherProfileWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TeacherProfiles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TeacherProfiles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of TeacherProfiles.
     */
    distinct?: Prisma.TeacherProfileScalarFieldEnum | Prisma.TeacherProfileScalarFieldEnum[];
};
/**
 * TeacherProfile create
 */
export type TeacherProfileCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a TeacherProfile.
     */
    data: Prisma.XOR<Prisma.TeacherProfileCreateInput, Prisma.TeacherProfileUncheckedCreateInput>;
};
/**
 * TeacherProfile createMany
 */
export type TeacherProfileCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many TeacherProfiles.
     */
    data: Prisma.TeacherProfileCreateManyInput | Prisma.TeacherProfileCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * TeacherProfile createManyAndReturn
 */
export type TeacherProfileCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherProfile
     */
    select?: Prisma.TeacherProfileSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the TeacherProfile
     */
    omit?: Prisma.TeacherProfileOmit<ExtArgs> | null;
    /**
     * The data used to create many TeacherProfiles.
     */
    data: Prisma.TeacherProfileCreateManyInput | Prisma.TeacherProfileCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TeacherProfileIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * TeacherProfile update
 */
export type TeacherProfileUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a TeacherProfile.
     */
    data: Prisma.XOR<Prisma.TeacherProfileUpdateInput, Prisma.TeacherProfileUncheckedUpdateInput>;
    /**
     * Choose, which TeacherProfile to update.
     */
    where: Prisma.TeacherProfileWhereUniqueInput;
};
/**
 * TeacherProfile updateMany
 */
export type TeacherProfileUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update TeacherProfiles.
     */
    data: Prisma.XOR<Prisma.TeacherProfileUpdateManyMutationInput, Prisma.TeacherProfileUncheckedUpdateManyInput>;
    /**
     * Filter which TeacherProfiles to update
     */
    where?: Prisma.TeacherProfileWhereInput;
    /**
     * Limit how many TeacherProfiles to update.
     */
    limit?: number;
};
/**
 * TeacherProfile updateManyAndReturn
 */
export type TeacherProfileUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherProfile
     */
    select?: Prisma.TeacherProfileSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the TeacherProfile
     */
    omit?: Prisma.TeacherProfileOmit<ExtArgs> | null;
    /**
     * The data used to update TeacherProfiles.
     */
    data: Prisma.XOR<Prisma.TeacherProfileUpdateManyMutationInput, Prisma.TeacherProfileUncheckedUpdateManyInput>;
    /**
     * Filter which TeacherProfiles to update
     */
    where?: Prisma.TeacherProfileWhereInput;
    /**
     * Limit how many TeacherProfiles to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TeacherProfileIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * TeacherProfile upsert
 */
export type TeacherProfileUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the TeacherProfile to update in case it exists.
     */
    where: Prisma.TeacherProfileWhereUniqueInput;
    /**
     * In case the TeacherProfile found by the `where` argument doesn't exist, create a new TeacherProfile with this data.
     */
    create: Prisma.XOR<Prisma.TeacherProfileCreateInput, Prisma.TeacherProfileUncheckedCreateInput>;
    /**
     * In case the TeacherProfile was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.TeacherProfileUpdateInput, Prisma.TeacherProfileUncheckedUpdateInput>;
};
/**
 * TeacherProfile delete
 */
export type TeacherProfileDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which TeacherProfile to delete.
     */
    where: Prisma.TeacherProfileWhereUniqueInput;
};
/**
 * TeacherProfile deleteMany
 */
export type TeacherProfileDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which TeacherProfiles to delete
     */
    where?: Prisma.TeacherProfileWhereInput;
    /**
     * Limit how many TeacherProfiles to delete.
     */
    limit?: number;
};
/**
 * TeacherProfile.sessions
 */
export type TeacherProfile$sessionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * TeacherProfile.doubts
 */
export type TeacherProfile$doubtsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * TeacherProfile.chats
 */
export type TeacherProfile$chatsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * TeacherProfile.timeSlots
 */
export type TeacherProfile$timeSlotsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.TeacherTimeSlotWhereInput;
    orderBy?: Prisma.TeacherTimeSlotOrderByWithRelationInput | Prisma.TeacherTimeSlotOrderByWithRelationInput[];
    cursor?: Prisma.TeacherTimeSlotWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TeacherTimeSlotScalarFieldEnum | Prisma.TeacherTimeSlotScalarFieldEnum[];
};
/**
 * TeacherProfile.notifications
 */
export type TeacherProfile$notificationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.TeacherNotificationWhereInput;
    orderBy?: Prisma.TeacherNotificationOrderByWithRelationInput | Prisma.TeacherNotificationOrderByWithRelationInput[];
    cursor?: Prisma.TeacherNotificationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TeacherNotificationScalarFieldEnum | Prisma.TeacherNotificationScalarFieldEnum[];
};
/**
 * TeacherProfile without action
 */
export type TeacherProfileDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
//# sourceMappingURL=TeacherProfile.d.ts.map