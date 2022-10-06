/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Token` table. All the data in the column will be lost.
  - You are about to drop the column `expiration` on the `Token` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `Token` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Token` table. All the data in the column will be lost.
  - You are about to drop the column `valid` on the `Token` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[token]` on the table `Token` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `token` to the `Token` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Token" DROP COLUMN "createdAt";
ALTER TABLE "Token" DROP COLUMN "expiration";
ALTER TABLE "Token" DROP COLUMN "type";
ALTER TABLE "Token" DROP COLUMN "updatedAt";
ALTER TABLE "Token" DROP COLUMN "valid";
ALTER TABLE "Token" ADD COLUMN     "token" STRING NOT NULL;

-- DropEnum
DROP TYPE "TokenType";

-- CreateIndex
CREATE UNIQUE INDEX "Token_token_key" ON "Token"("token");
