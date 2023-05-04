/*
  user.js file is used to create a user schema of database
*/

const mongoose = require("mongoose");

// Creating a schema
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter name"],
    },
    email: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);


const User= mongoose.model('User',userSchema);

module.exports= User;