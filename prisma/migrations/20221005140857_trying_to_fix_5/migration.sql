/*
  Warnings:

  - You are about to drop the `Tokens` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Tokens" DROP CONSTRAINT "Tokens_usersId_fkey";

-- DropTable
DROP TABLE "Tokens";

-- CreateTable
CREATE TABLE "Token" (
    "id" STRING NOT NULL,
    "token" STRING NOT NULL,
    "usersId" STRING NOT NULL,

    CONSTRAINT "Token_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Token_token_key" ON "Token"("token");

-- AddForeignKey
ALTER TABLE "Token" ADD CONSTRAINT "Token_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
