/*
 app.js is javascript ,which connects to mongoDb and runs server on port 3000
*/

const app= require('./server');
const mongoose = require("mongoose");

// conection to database
mongoose
  .connect(
    "mongodb+srv://roopz:Qwerty@cluster0.vdi14cr.mongodb.net/user?retryWrites=true&w=majority"
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