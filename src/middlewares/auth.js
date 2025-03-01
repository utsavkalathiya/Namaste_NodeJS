const authAdmin = (req, res, next) => {
  const token = "xyz";
  const isAminAuthorized = token == "xyz";

  if (!isAminAuthorized) {
    res.status(401).send("unauthorised request");
  } else {
    next();
  }
};
const userAuth = (req, res, next) => {
  const token = "xyzads";
  const isAminAuthorized = token == "xyz";

  if (!isAminAuthorized) {
    res.status(401).send("unauthorised request");
  } else {
    next();
  }
};

module.exports = { authAdmin, userAuth };
