const mongoose = require("mongoose");
const dotenv = require("dotenv");
mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.DATABASE)
  .then(() => {
    console.log("connection successfull");
  })
  .catch(() => {
    console.log("some error ocuured in db connection");
  });
