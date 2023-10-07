const mongoose = require("mongoose");
const express = require("express");
const app = express.Router();
const Product = require("../models/Product");
app.use(express.json());
app.post("/", async (req, res) => {
  let product = new Product({
    name: req.body.name,
    description: req.body.description,
    richDescription: req.body.richDescription,
    image: req.body.image,
    brand: req.body.brand,
    price: req.body.price,
    category: req.body.category,
    countInStock: req.body.countInStock,
    rating: req.body.rating,
    isFeatured: req.body.isFeatured,
  });
  try {
    await product.save();
    res.status(201).json({ message: "Product created successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error creating products" });
  }
});

module.exports = app;
