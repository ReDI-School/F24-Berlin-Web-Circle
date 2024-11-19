// controllers/destinationController.js

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Fetch all destinations
const getAllDestinations = async (req, res) => {
    try {
        const destinations = await prisma.destination.findMany();
        res.status(200).json({ success: true, data: destinations });
    } catch (error) {
        console.error('Error fetching destinations:', error);
        res.status(500).json({ success: false, message: 'Failed to fetch destinations' });
    }
};

module.exports = { getAllDestinations };
