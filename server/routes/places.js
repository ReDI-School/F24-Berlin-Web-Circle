const express = require('express');
const places = require("../src/data/places.json");
const filterPlaces = require('../src/utils/filter');

const router = express.Router();

router.get("/", (req, res) => {
  console.log(req.queries);
    res.json(filterPlaces());
  });

module.exports = router;