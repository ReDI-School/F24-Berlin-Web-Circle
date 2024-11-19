const express =  require("express");
const {PrismaClient} = require("@prisma/client");

const prisma = new PrismaClient();
const router = express.Router();

//Get all places
router.get("/",async (req, res)=> {
    try {
        const places = await prisma.place.findMany();
        res.status(200).json(places);
    } catch (errror){
        console.error("Error fetching places:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

module.exports = router;