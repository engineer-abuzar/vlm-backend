/*
  Warnings:

  - You are about to drop the column `email` on the `OTP` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[identifier]` on the table `OTP` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `identifier` to the `OTP` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "OTP" DROP COLUMN "email",
ADD COLUMN     "identifier" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "OTP_identifier_key" ON "OTP"("identifier");
