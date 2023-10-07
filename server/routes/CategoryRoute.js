const express = require("express");
const app = express.Router();
const Category = require("../models/Category");
app.use(express.json());

app.post("/", async (req, res) => {
  console.log(req.body);
  let category = new Category({
    name: req.body.name,
    color: req.body.color,
    icon: req.body.icon,
  });
  try {
    await category.save();
    res.status(201).json({ message: "Category created successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error creating category" });
  }
});

app.delete("/:id", async (req, res) => {
  console.log(req.params.id);
  try {
    await Category.findOneAndRemove({
      _id: req.params.id,
    }).exec();
    res.status(500).json({ message: "Category deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting category" });
  }
});
module.exports = app;
