const express = require("express");
const cors = require("cors");
const products = require("./src/data/places.json");
const dotenv = require("dotenv");
const v2Routes = require('./routes/v2');

// Load environment variables
dotenv.config();

const app = express();

// Use PORT from environment or fallback to 4000
const PORT = process.env.PORT || 8800;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/v2', v2Routes);

// API Endpoints
app.get("/places/:id", (req, res) => {
  const placeId = parseInt(req.params.id);
  const place = products.find((p) => p.id === placeId);

  if (place) {
    res.json(place);
  } else {
    res.status(404).json({ error: `Place with ID ${placeId} not found.` });
  }
});

app.post("/savePlace", (req, res) => {
  const { placeId } = req.body;

  if (!placeId) {
    return res.status(400).json({
      success: false,
      message: "Place ID is required.",
    });
  }

  console.log(`Received place ID: ${placeId}`);
  res.json({
    success: true,
    message: `Place ID ${placeId} saved successfully`,
  });
});

// Import Additional Routes
const placesRoutes = require("./routes/places");
const destinationsRoutes = require("./routes/destinations");
const searchedPlacesRoutes = require("./routes/searchedPlaces");
const bookingsRoutes = require("./routes/bookings");

// Use Additional Routes
app.use("/places", placesRoutes);
app.use("/destinations", destinationsRoutes);
app.use("/s", searchedPlacesRoutes);
app.use("/bookings", bookingsRoutes);

// Fallback for undefined routes
app.use((req, res) => {
  res.status(404).json({ error: "Endpoint not found." });
});

// Start Server
app.listen(PORT, (error) => {
  if (error) {
    console.error("Error starting the server:", error);
  } else {
    console.log(`Server is running on http://localhost:${PORT}`);
  }
});