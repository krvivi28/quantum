const express = require("express");
const bcrypt = require("bcrypt");
const auth = require("../middleware/auth");
const jwt = require("jsonwebtoken");
const { registerUser } = require("../controllers/registerController");
const router = express.Router();
const User = require("../model/user");
router.get("/allusers", auth, async (req, res) => {
  try {
    // console.log("all user page");
    const data = await User.find({});
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.post("/register", async (req, res) => {
  const { name, email, dob, password, cpassword } = req.body;
  // console.log(req.body);
  try {
    const data = new User({
      name,
      email,
      dob,
      password,
      cpassword,
    });
    const resdata = await data.save();
    res.status(200).send(`Hey ${name} you are part of the family now`);
  } catch (error) {
    res.status(400).send("kuch galat ho gya");
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const data = await User.findOne({ email: email });
    const token = await data.genAuthToken();
    res.cookie("jwtoken", token, {
      expires: new Date(Date.now() + 300000),
      httpOnly: true,
      // secure:true
    });
    const isMatch = await bcrypt.compare(password, data.password);
    if (isMatch) res.status(200).send(data);
    else res.status(400).send("invalid user credientials");
  } catch (error) {
    res.status(400).send(error.message);
  }
});
module.exports = router;
