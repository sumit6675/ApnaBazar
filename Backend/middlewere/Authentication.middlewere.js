const jwt = require("jsonwebtoken");
require("dotenv").config();
const KEY = process.env.key;
const authenticate = (req, res, next) => {
  const token = req.headers.authorization;
  // console.log(token)
  if (token) {
    const decoded = jwt.verify(token, "masai");
    if (decoded) {
      // const userID=decoded.userID
      // console.log(decoded,userID)
      // req.body.userID=userID
      next();
    } else {
      res.send("please login first");
    }
  } else {
    res.send("Please Login First");
  }
};
module.exports = {
  authenticate,
};
