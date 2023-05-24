const jwt = require("jsonwebtoken");
const User = require("../models/user-model");

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({ where: { id: decodedToken.id } });
    req.user = user;
    next();
  } catch (err) {
    res.status(401).json({ message: "Unauthorized", err });
  }
};

module.exports = authMiddleware;
