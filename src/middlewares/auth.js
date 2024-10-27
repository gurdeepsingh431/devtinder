const adminAuth = (req, res, next) => {
  const token = "xyzabc";
  const isAuthorized = token === "xyzabc";
  console.log("Authorization Check...");
  if (isAuthorized) {
    next();
  } else {
    res.status(401).send("Unauthorized user");
  }
};
const userAuth = (req, res, next) => {
  const token = "xyzabc";
  const isAuthorized = token === "xyzabc";
  console.log("Authorization Check...");
  if (isAuthorized) {
    next();
  } else {
    res.status(401).send("Unauthorized user");
  }
};
module.exports = { adminAuth, userAuth };
