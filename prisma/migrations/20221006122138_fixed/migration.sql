/*
  Warnings:

  - Added the required column `updatedAt` to the `Users` table without a default value. This is not possible if the table is not empty.
  - Made the column `name` on table `Users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Users" ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
ALTER TABLE "Users" ALTER COLUMN "name" SET NOT NULL;
