const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 4000;

app.use(express.json())
app.use(
  cors({
    origin:['http://localhost:5173', 'http://localhost:5174']
  })
)

const productData = require('./mock-data/product-info.json');
const bookingStatusData = require('./mock-data/booking-status.json');
const galleryData = require('./mock-data/gallery.json');
const reviewsData = require('./mock-data/reviews.json');

app.get('/product-info/:id', (req, res) => {
  const id = req.params.id;
  const product = productData.find(item => item.productId === id); 
  if (product) {
    res.json({
      productId: product.productId,
      description: product.description,
      productSummary: product.productSummary,
      host: product.host,
      reviewsSummary: product.reviewsSummary,
      highlights: product.highlights,
      amenities: product.amenities,
    });
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

app.get('/booking-status/:id', (req, res) => {
  const id = req.params.id;
  const booking = bookingStatusData.find(item => item.productId === id);
  if (booking) {
    res.json({
      productId: booking.productId,
      checkInDate: booking.checkInDate,
      checkOutDate: booking.checkOutDate,
      guestCounts: booking.guestCounts,
      totalPrice: booking.totalPrice,
      bookingData: booking.bookingData
    });
  } else {
    res.status(404).json({ message: 'Booking status not found' });
  }
});

app.get('/gallery/:id', (req, res) => {
  const id = req.params.id;
  const gallery = galleryData.find(item => item.productId === id);
  if (gallery) {
    res.json({
      productId: gallery.productId,
      gallery: {
        bigImage: gallery.gallery.bigImage,
        smallImages: gallery.gallery.smallImages
      }
    });
  } else {
    res.status(404).json({ message: 'Gallery not found' });
  }
});


app.get('/reviews/:id', (req, res) => {
  const id = req.params.id;
  const reviews = reviewsData.find(item => item.productId === id); 

  if (reviews) {
    res.json({
      productId: reviews.productId, 
      reviewsList: reviews.reviewsList, 
      totalReviews: reviews.totalReviews 
    });
  } else {
    res.status(404).json({ message: 'Reviews not found' });
  }
});

app.listen(PORT, () => {
  console.log(`Mock server is running on http://localhost:${PORT}`);
});