const mongoose = require("mongoose");
const express = require("express");
const app = express.Router();
const Product = require("../models/Product");
app.use(express.json());

//post a products
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

//get the list of all products
app.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "error listing products" });
  }
});

//get a single product details
app.get("/:id", async (req, res) => {
  try {
    const product = await Product.findOne({ _id: req.params.id });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "error retriving product details" });
  }
});

//delete product by id
app.delete("/:id", async (req, res) => {
  console.log(req.params.id);
  try {
    await Product.findOneAndRemove({
      _id: req.params.id,
    }).exec();
    res.status(500).json({ message: "product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting product" });
  }
});

//get list of featured products
app.get("/get/featured", async (req, res) => {
  try {
    const featuredProducts = await Product.find({
      isFeatured: true,
    });
    res.status(200).json(featuredProducts);
  } catch (error) {
    res.status(500).json({ message: "error in getting featured products" });
  }
});
module.exports = app;
