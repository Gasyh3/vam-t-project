require("dotenv").config();

const express = require("express");
const path = require("path");
const cors = require("cors");
const helmet = require("helmet");
const app = express();

const database = require("./config/database");
const userRoute = require("./routes/user-route");
const categoryRoute = require("./routes/category-route");
const voitureRoute = require("./routes/voiture-route");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  helmet({
    crossOriginResourcePolicy: false,
  })
);
app.use("/images", express.static(path.join(__dirname, "images")));
app.use("/api/user", userRoute);
app.use("/api/category", categoryRoute);
app.use("/api/voiture", voitureRoute);

database.sync().then(() => console.log("database is ready to sync"));

module.exports = app;
