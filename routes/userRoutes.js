const express = require("express");
const router = express.Router();

const User = require("../models/User");

// Create User
router.post("/", async (req, res) => {
  try {
    const user = new User(req.body);
    const savedUser = await user.save();

    res.status(201).json(savedUser);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

// Get All Users
router.get("/", async (req, res) => {
  try {

    const users = await User.find();

    res.json(users);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
});

module.exports = router;