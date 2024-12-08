-- CreateTable
CREATE TABLE "Product" (
    "product_id" SERIAL NOT NULL,
    "title" VARCHAR(150) NOT NULL,
    "host" VARCHAR(150) NOT NULL,
    "star_grade" DOUBLE PRECISION NOT NULL,
    "price" TEXT NOT NULL,
    "accommodation" VARCHAR(150) NOT NULL,
    "address" VARCHAR(150) NOT NULL,
    "guests" INTEGER NOT NULL,
    "bedrooms" INTEGER NOT NULL,
    "beds" INTEGER NOT NULL,
    "baths" INTEGER NOT NULL,
    "host_name" VARCHAR(64) NOT NULL,
    "hosting_duration" VARCHAR(64) NOT NULL,
    "role" VARCHAR(64) NOT NULL,
    "profile_pic_Url" VARCHAR(150) NOT NULL,
    "description_space" TEXT NOT NULL,
    "description_place" TEXT NOT NULL,
    "guest_access" TEXT NOT NULL,
    "other_things" VARCHAR(150) NOT NULL,
    "lon" DECIMAL(12,8) NOT NULL,
    "lat" DECIMAL(12,8) NOT NULL,
    "address_description" TEXT NOT NULL,
    "total_avg_rating" DOUBLE PRECISION NOT NULL,
    "total_reviews_count" INTEGER NOT NULL,
    "cleanliness_avg_rating" DOUBLE PRECISION NOT NULL,
    "accuracy_avg_rating" DOUBLE PRECISION NOT NULL,
    "checkin_avg_rating" DOUBLE PRECISION NOT NULL,
    "communication_avg_rating" DOUBLE PRECISION NOT NULL,
    "location_avg_rating" DOUBLE PRECISION NOT NULL,
    "value_avg_rating" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("product_id")
);

-- CreateTable
CREATE TABLE "Highlight" (
    "highlight_id" SERIAL NOT NULL,
    "product_id" INTEGER NOT NULL,
    "type" VARCHAR(64) NOT NULL,
    "text" VARCHAR(64) NOT NULL,
    "sub_text" VARCHAR(150) NOT NULL,

    CONSTRAINT "Highlight_pkey" PRIMARY KEY ("highlight_id")
);

-- CreateTable
CREATE TABLE "Amenitie" (
    "amenitie_id" SERIAL NOT NULL,
    "product_id" INTEGER NOT NULL,
    "type" VARCHAR(64) NOT NULL,
    "text" VARCHAR(64) NOT NULL,

    CONSTRAINT "Amenitie_pkey" PRIMARY KEY ("amenitie_id")
);

-- CreateTable
CREATE TABLE "Image" (
    "image_id" SERIAL NOT NULL,
    "product_id" INTEGER NOT NULL,
    "image_url" VARCHAR(250) NOT NULL,
    "product_section" VARCHAR(150) NOT NULL,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("image_id")
);

-- CreateTable
CREATE TABLE "Review" (
    "review_id" SERIAL NOT NULL,
    "product_id" INTEGER NOT NULL,
    "name" VARCHAR(64) NOT NULL,
    "review_text" VARCHAR(250) NOT NULL,
    "rating" INTEGER NOT NULL,
    "reviewer_image" VARCHAR(250) NOT NULL,
    "date_image" TIMESTAMP(3) NOT NULL,
    "accuracy_rating" DOUBLE PRECISION NOT NULL,
    "checkin_rating" DOUBLE PRECISION NOT NULL,
    "cleanliness_rating" DOUBLE PRECISION NOT NULL,
    "communication_rating" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("review_id")
);

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
CREATE INDEX "Highlight_product_id_idx" ON "Highlight"("product_id");

-- CreateIndex
CREATE INDEX "Amenitie_product_id_idx" ON "Amenitie"("product_id");

-- CreateIndex
CREATE INDEX "Image_product_id_idx" ON "Image"("product_id");

-- CreateIndex
CREATE INDEX "Review_product_id_idx" ON "Review"("product_id");

-- CreateIndex
CREATE INDEX "Booking_product_id_idx" ON "Booking"("product_id");

-- AddForeignKey
ALTER TABLE "Highlight" ADD CONSTRAINT "Highlight_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product"("product_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Amenitie" ADD CONSTRAINT "Amenitie_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product"("product_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product"("product_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product"("product_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product"("product_id") ON DELETE RESTRICT ON UPDATE CASCADE;
