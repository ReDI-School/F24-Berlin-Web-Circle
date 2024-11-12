const dotenv = require('dotenv');
dotenv.config(); 

const { Client } = require('pg');
// const { Client } = pkg;


const db = new Client({
  host: process.env.POSTGRES_HOST,       
  user: process.env.POSTGRES_USER,      
  password: process.env.POSTGRES_PASSWORD, 
  database: process.env.POSTGRES_DB,   
  port: process.env.POSTGRES_PORT,       
});

db.connect((err) => {
  if (err) {
    console.error("Connection error", err.stack);
  } else {
    console.log("Connected to the database");
  }
});

module.exports = db;