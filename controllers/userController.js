const User = require("../models/userSchema")
const bcryptjs = ("bcryptjs")

// adding a user


const addUser = async (req, res) => {
  // encrypting a password
  const  salt = await bcryptjs.gensalt(7)
  const hashedPassword = await bcryptjs.hash(req.body.password,salt)

  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  });

  await newUser.save();
  res.staus(201).json({
    _id: newUser.username,
    email:newUser.email
  })

}
module.exports={addUser}      