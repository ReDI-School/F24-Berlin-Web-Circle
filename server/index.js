const express = require("express");
const products = require("./src/data/places.json");
const cors = require("cors");

const app = express();
const PORT = 8800;

app.use(cors());
app.use(express.json());

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
  console.log(`Received place ID: ${placeId}`);
  res.json({
    success: true,
    message: `Place ID ${placeId} saved successfully`,
  });
});

app.get("/places", (req, res) => {
  res.json(products);
});

app.listen(PORT, (error) => {
  if (error) console.log("Error starting the server:", error);
  else console.log(`Server listening on PORT ${PORT}`);
});
