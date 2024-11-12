const express = require("express");
const cors = require("cors");
const placesRoutes = require("./routes/places");

const app = express();
const PORT = 8800;

app.use(cors());
app.use(express.json());

app.use("/places", placesRoutes);

// Use Routes
// app.use("/places", placesRoutes);
// app.use("/destinations", destinationsRoutes);
// app.use("/s", searchedPlacesRoutes);
// app.use("/bookings", bookingsRoutes);

app.listen(PORT, (error) => {
  if (error) console.log("Error starting the server:", error);
  else console.log(`Server listening on PORT ${PORT}`);
});
