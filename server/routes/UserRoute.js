const mongoose = require("mongoose");
const express = require("express");
const app = express.Router();
const User = require("../models/Users");
const bycrpt = require("bcryptjs");
app.use(express.json());

app.post("/", async (req, res) => {
  var salt = bycrpt.genSaltSync(10);
  var hash = bycrpt.hashSync(req.body.password, 10);
  let user = new User({
    name: req.body.name,
    email: req.body.email,
    passwordHash: hash,
    phone: req.body.phone,
    isAdmin: req.body.isAdmin,
    street: req.body.street,
    apartment: req.body.apartment,
    zip: req.body.zip,
    city: req.body.city,
    country: req.body.country,
  });
  try {
    await user.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error creating users" });
  }
});

module.exports = app;
