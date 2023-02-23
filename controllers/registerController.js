const User = require("../model/user");
exports.registerUser = async (req, res) => {
  const { name, email, dob, password, cpassword } = req.body;
  console.log(req.body);
  try {
    const data = new User({
      name,
      email,
      dob,
      password,
      cpassword,
    });
    const res = await data.save();
    res.status(200).send(Hey`${name} you are part of the family now`);
  } catch (error) {
    res.status(400).send("kuch galat ho gya");
  }
};
