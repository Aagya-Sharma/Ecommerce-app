const { mongoose } = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  richDescription: {
    type: String,
    require: true,
  },
  image: {
    type: String,
    require: true,
  },
  images: {
    type: [String],
  },
  brand: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  countInStock: {
    type: Number,
    require: true,
  },
  rating: {
    type: Number,
  },
});

exports.Product = mongoose.model("Product", productSchema);
