const express = require('express');
const destinations = require("../src/data/destinations.json");

const router = express.Router();

router.get("/", (req, res) => {
    res.json(destinations);
  });

router.post('/autocomplete', (req, res) => {
  const query = req.body.userQuery; 

  if (!query) {
    return res.json([]);
  }

  const results = destinations.filter(destination =>
    destination.name.toLowerCase().startsWith(query.toLowerCase())
  );

  res.json(results);
});

module.exports = router;