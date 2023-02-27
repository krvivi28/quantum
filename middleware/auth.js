const jwt = require("jsonwebtoken");
const User = require("../model/user");
const auth = async (req, res, next) => {
  try {
    // console.log("auth me hu mai");
    const token = req.cookies.jwtoken;
    // console.log(token);
    const verifyUser = jwt.verify(token, process.env.SECRET_KEY);
    console.log(verifyUser);
    const user = await User.findOne({
      _id: verifyUser._id,
    });
    // console.log(user);
    req.token = token;
    req.user = user;
    req.userId = user._id;
    next();
  } catch (error) {
    res.status(400).send(error.message);
  }
};
module.exports = auth;
