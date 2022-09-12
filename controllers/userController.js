const User = require("../models/userSchema")
const bcrypt = require ("bcrypt")
const {validate} = require('../config/validator')

// adding a user
const addUser = async (req, res) => {
  const { username, email, password} = req.body;
  const valid = await validate({username, email, password});
  if (valid) {

    const hashedPassword = await bcrypt.hash(valid.password, 8)
    const saveUser = await User.create({
      username,
      email,
      password:hashedPassword,
    });

    res.status(201).json({
      success: true,
      message: "user created",
      saveUser, 
    });
  } else {
    res.status(400).json({
      error: true,
      message: "Invalid data",
    });
  }

};


module.exports = {addUser}

