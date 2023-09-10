const dotenv = require("dotenv");
dotenv.config();
// Creating a database to store products
const mongoose = require("mongoose");

// Connecting the database
mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;

// on unsuccessfull connection
db.on("error", console.error.bind(console, "Error connecting to MongoDB"));

//on succesfull connection
db.once("open", function () {
  console.log("*** Connected to Database :: MongoDB ***");
});

module.exports = db;
