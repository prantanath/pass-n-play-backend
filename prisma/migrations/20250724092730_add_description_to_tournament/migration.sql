/*
  Warnings:

  - You are about to drop the column `username` on the `profiles` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."profiles" DROP COLUMN "username",
ADD COLUMN     "role" TEXT;
