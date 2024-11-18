const validator = require("validator");
const signUpValidator = (body) => {
  const { firstName, lastName, age, gender, userName, password } = body;
  if (!firstName || !lastName) {
    throw new Error("Name is invalid!");
  }
  if (!validator.isEmail(userName)) {
    throw new Error("Email is not valid!");
  }
  if (!validator.isStrongPassword(password)) {
    throw new Error("Please choose a strong password!");
  }
};
module.exports = { signUpValidator };
