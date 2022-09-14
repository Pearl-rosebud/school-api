const jwt = require("jsonwebtoken")
const User = require("../models/userschema")




// is admin middleware

exports.admin = async function(req,res,next) {
  if (req.user && req.User.isAdmin) {
    res.status(401).json ({
      message:"you are not an authorized admin"
    })
  }
}