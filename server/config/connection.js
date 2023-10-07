const mongoose = require("mongoose");
const connection_url = process.env.CONNECTION_URL;
exports.connect = () => {
  mongoose.connect("mongodb://127.0.0.1:27017/MERN-ecommerce");
  console.log("inside connection");
};
