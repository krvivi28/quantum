const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
app.use(express.json());
app.use(cookieParser());

const registerRoute = require("./routes/register");
app.use("/api", registerRoute);
module.exports = app;
