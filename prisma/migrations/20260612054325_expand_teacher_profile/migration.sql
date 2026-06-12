-- AlterTable
ALTER TABLE "TeacherProfile" ADD COLUMN     "aadhaarUrl" TEXT,
ADD COLUMN     "address" TEXT,
ADD COLUMN     "availabilityStatus" TEXT NOT NULL DEFAULT 'offline',
ADD COLUMN     "boards" TEXT[],
ADD COLUMN     "city" TEXT,
ADD COLUMN     "classes" TEXT[],
ADD COLUMN     "demoVideoUrl" TEXT,
ADD COLUMN     "dob" TIMESTAMP(3),
ADD COLUMN     "experienceDocUrl" TEXT,
ADD COLUMN     "experienceMonths" INTEGER,
ADD COLUMN     "experienceSummary" TEXT,
ADD COLUMN     "experienceType" TEXT,
ADD COLUMN     "gender" TEXT,
ADD COLUMN     "hasBEd" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "highestQualification" TEXT,
ADD COLUMN     "instituteName" TEXT,
ADD COLUMN     "interviewDate" TIMESTAMP(3),
ADD COLUMN     "interviewLink" TEXT,
ADD COLUMN     "languages" TEXT[],
ADD COLUMN     "passingYear" INTEGER,
ADD COLUMN     "pincode" TEXT,
ADD COLUMN     "profilePhoto" TEXT,
ADD COLUMN     "qualificationDocUrl" TEXT,
ADD COLUMN     "reapplicationDate" TIMESTAMP(3),
ADD COLUMN     "rejectionReason" TEXT,
ADD COLUMN     "resumeUrl" TEXT,
ADD COLUMN     "state" TEXT,
ADD COLUMN     "subjects" TEXT[],
ADD COLUMN     "teachingCertification" TEXT,
ADD COLUMN     "teachingMode" TEXT,
ADD COLUMN     "verificationStatus" TEXT NOT NULL DEFAULT 'DRAFT';

-- CreateTable
CREATE TABLE "TeacherTimeSlot" (
    "id" TEXT NOT NULL,
    "teacherId" TEXT NOT NULL,
    "dayOfWeek" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "startTime" TEXT NOT NULL,
    "endTime" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "repeatWeekly" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TeacherTimeSlot_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TeacherNotification" (
    "id" TEXT NOT NULL,
    "teacherId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "isRead" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TeacherNotification_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "TeacherTimeSlot" ADD CONSTRAINT "TeacherTimeSlot_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "TeacherProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TeacherNotification" ADD CONSTRAINT "TeacherNotification_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "TeacherProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
