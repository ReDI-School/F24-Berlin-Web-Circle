/*
  Warnings:

  - A unique constraint covering the columns `[host]` on the table `Place` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Place_host_key" ON "Place"("host");
