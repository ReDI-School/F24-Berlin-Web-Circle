const {PrismaClient}= require('@prisma/client');
const places = require('../src/data/places.json');

const prisma = new PrismaClient();

async function main() {
    for(const place of places) {
        await prisma.place.create({
            data: {
                title: place.title,
                host: place.host,
                price: place.price,
                accommodation: place.productSummary.accommodation,
                address: place.productSummary.address,
                guests: place.productSummary.guests.value,
                bedrooms: place.productSummary.bedrooms.value,
                beds: place.productSummary.beds.value,
                baths: place.productSummary.baths.value,
                starGrade: place.productSummary.starGrade,
                reviewsCount: place.productSummary.reviews,
                highlightCheckIn: place.highlights.find(h => h.type === "CHECK_IN")?.text || null,
                highlightAward: place.highlights.find(h => h.type === "AWARD")?.text || null,
                highlightWifi: place.highlights.find(h => h.type === "WIFI")?.text || null,
                highlightCancellation: place.highlights.find(h => h.type === "CANCELLATION")?.text || null,
                amenitiesKitchen: place.amenities.some(a => a.type === "kitchen"),
                amenitiesWorkspace: place.amenities.some(a => a.type === "workspace"),
                amenitiesSauna: place.amenities.some(a => a.type === "sauna"),
                amenitiesBalcony: place.amenities.some(a => a.type === "balcony"),
                amenitiesFireplace: place.amenities.some(a => a.type === "fireplace"),
                amenitiesWifi: place.amenities.some(a => a.type === "wifi"),
                amenitiesParking: place.amenities.some(a => a.type === "parking"),
                amenitiesPets: place.amenities.some(a => a.type === "pets"),
                amenitiesBackyard: place.amenities.some(a => a.type === "backyard"),
                amenitiesFirepit: place.amenities.some(a => a.type === "firepit"),
                reviewSummaryTotalAvgRating: place.reviewSummary.totalAvgRating,
                reviewSummaryTotalReviewsCount: place.reviewSummary.totalReviewsCount,
                cleanlinessAvgRating: place.reviewSummary.ratings.cleanlinessAvgRating,
                accuracyAvgRating: place.reviewSummary.ratings.accuracyAvgRating,
                checkInAvgRating: place.reviewSummary.ratings.checkInAvgRating,
                communicationAvgRating: place.reviewSummary.ratings.communicationAvgRating,
                locationAvgRating: place.reviewSummary.ratings.locationAvgRating,
                valueAvgRating: place.reviewSummary.ratings.valueAvgRating,
                starTotalFiveStar: place.reviewSummary.ratings.starTotals.fiveStar,
                starTotalFourStar: place.reviewSummary.ratings.starTotals.fourStar,
                starTotalThreeStar: place.reviewSummary.ratings.starTotals.threeStar,
                starTotalTwoStar: place.reviewSummary.ratings.starTotals.twoStar,
                starTotalOneStar: place.reviewSummary.ratings.starTotals.oneStar,
                lon: place.mapView.lon,
                lat: place.mapView.lat,
                mapAddress: place.mapView.address,
                mapAddressDescription: place.mapView.addressDescription,
                hostName: place.hostSummary.hostName,
                hostingDuration: place.hostSummary.hostingDuration,
                role: place.hostSummary.role,
                hostProfilePicUrl: place.hostSummary.profilePicUrl,
                descriptionPlace: place.productDescription.descriptionPlace,
                descriptionSpace: place.productDescription.descriptionSpace,
                guestAccess: place.productDescription.guestAccess,
                otherThings: place.productDescription.otherThings,
            },
        });
    }
}

main()
    .catch(e =>{
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    })