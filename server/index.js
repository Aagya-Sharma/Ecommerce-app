const express = require("express");
const app = express();
const port = process.env.port || 3000;
const mongoose = require("mongoose");
const { connect } = require("../server/config/connection");
const categoryRoutes = require("../server/routes/CategoryRoute");

connect();

app.get("/", () => {
  console.log("initial routes");
});

app.use("/category", categoryRoutes);

app.listen(port, () => {
  console.log("server is running on port 3000");
});
