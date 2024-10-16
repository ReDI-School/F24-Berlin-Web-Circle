const express = require("express");
const products = require("./src/data/places.json");
const cors = require("cors");

const app = express();
const PORT = 8800;

app.use(cors());

app.get("/places", (req, res) => {
  res.json(products);
});

app.listen(PORT, (error) => {
  if (error)
    console.log("Error starting the server:", error);
  else
    console.log(`Server listening on PORT ${PORT}`);
});
