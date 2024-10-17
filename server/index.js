const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 8800;

app.use(cors());

// import Routes
const placesRoutes = require('./routes/places');
const destinationsRoutes = require('./routes/destinations');

// Use Routes
app.use('/places', placesRoutes); 
app.use('/destinations', destinationsRoutes); 

app.listen(PORT, (error) => {
  if (error)
    console.log("Error starting the server:", error);
  else
    console.log(`Server listening on PORT ${PORT}`);
});
