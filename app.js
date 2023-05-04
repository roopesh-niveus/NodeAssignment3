/*
 app.js is javascript ,which connects to mongoDb and runs server on port 3000
*/

const app= require('./server');
const mongoose = require("mongoose");
require('dotenv').config();
const mongodb_uri = process.env.MONGODB_URI;

// conection to database
mongoose
  .connect(
    `${mongodb_uri}`
  )
  .then(() => {
    console.log("Connected to db");
    app.listen(3000, () => {
      console.log("Listening on port 3000");
    });
  })
  .catch((error) => {
    console.log(error);
  });

  module.exports = app;


