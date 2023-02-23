const dotenv = require("dotenv");
const path = require("path");
const express = require("express");
dotenv.config({ path: "config/config.env" });
const app = require("./app");
require("./db/db");
app.use(express.static(path.join(__dirname, "client", "build")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});
app.listen(process.env.PORT, () => {
  console.log(`server is running on PORT: ${process.env.PORT}`);
});
