/*
  Warnings:

  - You are about to drop the column `image` on the `Image` table. All the data in the column will be lost.
  - You are about to drop the column `image_location` on the `Image` table. All the data in the column will be lost.
  - Added the required column `image_url` to the `Image` table without a default value. This is not possible if the table is not empty.
  - Added the required column `product_section` to the `Image` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Image" DROP COLUMN "image",
DROP COLUMN "image_location",
ADD COLUMN     "image_url" VARCHAR(250) NOT NULL,
ADD COLUMN     "product_section" VARCHAR(150) NOT NULL;

-- CreateTable
CREATE TABLE "Booking" (
    "booking_id" SERIAL NOT NULL,
    "product_id" INTEGER NOT NULL,
    "checkInDate" TIMESTAMP(3) NOT NULL,
    "checkOutDate" TIMESTAMP(3) NOT NULL,
    "totalPrice" DOUBLE PRECISION NOT NULL,
    "pricePerNight" DOUBLE PRECISION NOT NULL,
    "cleaningFee" DOUBLE PRECISION NOT NULL,
    "airbnbServiceFee" DOUBLE PRECISION NOT NULL,
    "longStayDiscount" DOUBLE PRECISION NOT NULL,
    "nightsCountForLongStayDiscount" INTEGER NOT NULL,
    "minStayNights" INTEGER NOT NULL,
    "isBookingOpen" BOOLEAN NOT NULL,
    "adults" INTEGER NOT NULL,
    "children" INTEGER NOT NULL,
    "infants" INTEGER NOT NULL,
    "pets" INTEGER NOT NULL,

    CONSTRAINT "Booking_pkey" PRIMARY KEY ("booking_id")
);

-- CreateIndex
CREATE INDEX "Booking_product_id_idx" ON "Booking"("product_id");

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product"("product_id") ON DELETE RESTRICT ON UPDATE CASCADE;
