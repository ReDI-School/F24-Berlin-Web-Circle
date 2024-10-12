const express = require("express");
const cors = require("cors");

const app = express();
const port = 8800;

app.use(cors());

app.get("/", (req, res) => {
  res.send("This is from backend!");
});

app.listen(port, () => {
  console.log(`Port: http://localhost:${port}`);
});
