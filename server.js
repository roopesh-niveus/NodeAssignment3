/*
  server.js is a javascript file, where crud operations is performed on mongoDB
*/

const express = require("express");
require('dotenv').config();
const mongodb_uri = process.env.MONGODB_URI;
const app = express();
const mongoose = require("mongoose");
const User = require("./modules/user");  //  importing Shcema

//middleware for json
app.use(express.json());

//default get api
app.get("/", (req, res) => {
  res.send("Hello");
});

//adding user using post api (used thunder client for sending post request)
app.post("/addUser", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(200).json(user);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

//fetch by id using get api (used thunder client for sending get request)
app.get("/fetchById/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

//update user using put api (used thunder client for sending put request)
app.put("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndUpdate(id, req.body);
    if (!user) {
      res.status(404).json({ message: `Cannot find the user with ID ${id}` });
    }
    const updatedUser = await User.findById(id);
    res.status(200).json(updatedUser);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

//fetch all user details using get api (used thunder client for sending get request)
app.get("/fetchUser", async (req, res) => {
  try {
    const user = await User.find({
      /* curly braces to get all product */
    });
    res.status(200).json(user);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

module.exports = app;

