const { PrismaClient } = require('@prisma/client');
const placesData = require('../src/data/places.json');
const bookingData = require('../src/data/bookings.json');

const prisma = new PrismaClient();

async function main() {
  try {
    // Seed the Places data
    for (const place of placesData) {
      // Insert data into Product table
      const product = await prisma.product.create({
        data: {
          title: place.title,
          host: place.host,
          star_grade: place.productSummary.starGrade,
          price: place.price,
          accommodation: place.productSummary.accommodation,
          address: place.productSummary.address,
          guests: place.productSummary.guests.value,
          bedrooms: place.productSummary.bedrooms.value,
          beds: place.productSummary.beds.value,
          baths: place.productSummary.baths.value,
          host_name: place.hostSummary.hostName,
          hosting_duration: `${place.hostSummary.hostingDuration}`,
          role: place.hostSummary.role,
          profile_pic_Url: place.hostSummary.profilePicUrl,
          description_space: place.productDescription.descriptionSpace,
          description_place: place.productDescription.descriptionPlace,
          guest_access: place.productDescription.guestAccess,
          other_things: place.productDescription.otherThings,
          lon: 0.0,
          lat: 0.0,
          address_description: place.productSummary.address,
          total_avg_rating: place.reviewSummary.totalAvgRating,
          total_reviews_count: place.reviewSummary.totalReviewsCount,
          cleanliness_avg_rating:
            place.reviewSummary.ratings.cleanlinessAvgRating,
          accuracy_avg_rating: place.reviewSummary.ratings.accuracyAvgRating,
          checkin_avg_rating: place.reviewSummary.ratings.checkInAvgRating,
          communication_avg_rating:
            place.reviewSummary.ratings.communicationAvgRating,
          location_avg_rating: place.reviewSummary.ratings.locationAvgRating,
          value_avg_rating: place.reviewSummary.ratings.valueAvgRating,
        },
      });

      // Insert data into Highlight table
      for (const highlight of place.highlights) {
        await prisma.highlight.create({
          data: {
            product_id: product.product_id,
            type: highlight.type,
            text: highlight.text,
            sub_text: highlight.subText,
          },
        });
      }

      // Insert data into Amenitie table
      for (const amenity of place.amenities) {
        await prisma.amenitie.create({
          data: {
            product_id: product.product_id,
            type: amenity.type,
            text: amenity.text,
          },
        });
      }

      // Insert data into Image table
      for (const imageUrl of place.images) {
        await prisma.image.create({
          data: {
            product_id: product.product_id,
            image_url: imageUrl,
            product_section: "main", 
          },
        });
      }

      // Insert data into Review table
      for (const review of place.reviews) {
        await prisma.review.create({
          data: {
            product_id: product.product_id,
            name: review.name,
            review_text: review.reviewText,
            rating: review.rating,
            reviewer_image: review.picture,
            date_image: new Date(review.date),
            accuracy_rating: review.rating, 
            checkin_rating: review.rating,
            cleanliness_rating: review.rating,
            communication_rating: review.rating,
          },
        });
      }
    }
    // Seed the Booking data
    for (const booking of bookingData) {
      const product = await prisma.product.findFirst({
        where: { title: booking.productTitle },
      });
  
      if (product) {
        await prisma.booking.create({
          data: {
            product_id: product.product_id,
            checkInDate: new Date(booking.checkInDate),
            checkOutDate: new Date(booking.checkOutDate),
            totalPrice: parseFloat(booking.totalPrice),
            pricePerNight: parseFloat(booking.bookingData.pricePerNight),
            cleaningFee: parseFloat(booking.bookingData.cleaningFee),
            airbnbServiceFee: parseFloat(booking.bookingData.airbnbServiceFee),
            longStayDiscount: parseFloat(booking.bookingData.longStayDiscount),
            nightsCountForLongStayDiscount: booking.bookingData.nightsCountForLongStayDiscount,
            minStayNights: booking.bookingData.minStayNights,
            isBookingOpen: booking.bookingData.isBookingOpen,
            adults: booking.guestCounts.adults,
            children: booking.guestCounts.children,
            infants: booking.guestCounts.infants,
            pets: booking.guestCounts.pets,
          },
        });
        console.log(`Created Booking for Product ID: ${product.product_id}`);
      } else {
        console.warn(`Product not found for Booking: ${booking.productTitle}`);
      }
    }
    console.log("Data seeded successfully!");
  } catch (error) {
    console.error("Error seeding data:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
