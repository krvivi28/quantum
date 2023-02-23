const express = require("express");
const app = express();
app.use(express.json());

const registerRoute = require("./routes/register");
app.use("/api", registerRoute);
module.exports = app;
