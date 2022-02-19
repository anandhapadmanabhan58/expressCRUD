const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const dotenv = require("dotenv");
const dbConfig = require("./dbConfig");
const homeRoute = require("./routes/homer");

dotenv.config({ path: "config.env" });
dbConfig();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use("", homeRoute);

app.listen(process.env.PORT, () => {
  console.log("server is running");
});
