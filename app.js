// Imported libraries
const express = require("express");
const db = require("./config/mongoose");

// Creating an App with Express
const app = express();
const port = 8000;

//Enable us to pass data through URL
app.use(express.urlencoded({ extended: true }));

//Routes
app.use("/", require("./routes/api/index"));

app.listen(port, () => {
  console.log(`API Server is Live on http://localhost:${port}/products`);
});
