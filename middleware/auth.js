const jwt = require("jsonwebtoken");
const User = require("../models/user");

module.exports = async (req, res, next) => {
  //get token from header
  // const token = req.header("x-auth-token");
  // const token = req.header("Authorization").replace("Bearer ", "");
  console.log("HEADER TOKEN: ", req.header("Authorization").replace("Bearer ", ""));
  // const token = req.session.token;
  const token = req.header("Authorization").replace("Bearer ", "");
  // console.log("SessionToken:", req.session.token);
  // const token = req.session.token;
  req.token = token;
  // console.log("bye ", token);
  if (!token) {
    return res.status(405).json({ msg: "No token, Authorization denied" });
  }
  //Verify token
  try {
    const decoded = await jwt.verify(token, "longer-secret-is-better");
    const user = await User.findOne({ _id: decoded.user.userId, "tokens.token": token });
    // console.log("CHECK", user, decoded.user);
    if (!user) throw new Error();
    req.user = user;
    // console.log(req.user);
    next();
  } catch (error) {
    res.status(401).json({ message: "Session Expired" });
  }
};
