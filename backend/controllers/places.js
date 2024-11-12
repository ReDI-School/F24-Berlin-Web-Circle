const places = require("../src/data/places.json");
const db = require("../db.js")

const getTestRoute = (req, res) => {
    res.send("Test route working")
}

const getPlaces = (req, res) => {
    res.json(places[0]);
}

const getPlacesFromDb = (req, res) => {
    console.log("Fetching from database");

    const q = "SELECT  p.id AS id,  p.title AS title,  p.price AS price, \
                ARRAY_AGG(i.image_url) AS images  \
                FROM property p \
                JOIN images i ON p.id = i.property_id \
                WHERE is_profile_image = FALSE \
                GROUP BY p.id, p.title, p.price;"
     ;  
    db.query(q, (err, data) => {
        if (err) {
            console.error("Database error: ", err);
            return res.status(500).json({ error: "Database query failed" });
        }
        res.status(200).json(data.rows); 
    });
}

const getPlacesById = (req, res) => {
    const placeId = parseInt(req.params.id); 
    // console.log("id passedd", placeId)
    if (isNaN(placeId)) {
        return res.status(400).json({ error: "Invalid place ID" });
    }

    const q = "SELECT * FROM property WHERE id = $1";
  
    db.query(q, [placeId], (err, data) => {
        if (err) {
            console.error("Database error: ", err);
            return res.status(500).json({ error: "Failed to retrieve place from database" });
        }

       
        if (data.rows.length === 0) {
            return res.status(404).json({ error: "Place not found" });
        }

        
        return res.status(200).json(data.rows[0]);  
    });
}

module.exports = {
    getPlaces,
    getPlacesFromDb,
    getPlacesById, 
    getTestRoute
};