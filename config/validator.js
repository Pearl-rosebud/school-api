const yup = ("yup");
function validate(data) {
  const userSchema =yup.object().shape({
    username: yup.string().require("usernmae must be filled").min(3).max(20),
    email: yup.string().email().require("email is require").min(3).max(50),
    password: yup.string().require("password require").min(8).max(20),
  });
  return userSchema.validate(data);
}

module.exports = {validate};