const express = require("express");
const users = require("../model/users");
const bcrypt = require("bcrypt");
const registerRouter = express.Router();

// API ROUTES  valecoBlog
// Register Routes
registerRouter.post("/valecoBlog/singUp", async (req, res) => {
  try {
    const saltRounds = 10;
    const hashPassword = await bcrypt.hash(req.body.password, saltRounds);
    const user = new users({
      username: req.body.username,
      fullname: req.body.fullname,
      email: req.body.email,
      password: hashPassword,
    });
    const saveUser = await user.save();
    res.json(saveUser);
  } catch (error) {
    res.json({ message: err.message });
  }
});

// Login

registerRouter.post("/valecoBlog/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await users.findOne({ email });
  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    res.json({ message: "Invalid password" });
  } else {
    res.json(user);
  }
});
module.exports = registerRouter;
