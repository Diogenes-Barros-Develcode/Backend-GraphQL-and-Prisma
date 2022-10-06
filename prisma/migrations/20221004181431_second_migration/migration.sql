/*
  Warnings:

  - You are about to drop the column `emailToken` on the `Token` table. All the data in the column will be lost.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Token_emailToken_key";

-- AlterTable
ALTER TABLE "Token" DROP COLUMN "emailToken";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "password" STRING NOT NULL;
