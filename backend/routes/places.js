const express = require('express');
const places = require("../src/data/places.json");
const { getPlaces, getPlacesFromDb, getPlacesById, getTestRoute } = require('../controllers/places');

const router = express.Router();

router.get("/", getPlaces); //fromn our json

router.get("/from-db", getPlacesFromDb);

router.get("/places/:id", getPlacesById);

router.get("/test", getTestRoute);



module.exports = router;