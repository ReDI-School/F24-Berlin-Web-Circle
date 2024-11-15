/*
  Warnings:

  - A unique constraint covering the columns `[title]` on the table `Place` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Place_host_key";

-- CreateIndex
CREATE UNIQUE INDEX "Place_title_key" ON "Place"("title");
