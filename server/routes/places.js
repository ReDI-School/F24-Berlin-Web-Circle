const express = require('express');
const places = require("../src/data/places.json");

const router = express.Router();

router.get("/", (req, res) => {
    res.json(places);
  });

module.exports = router;