const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// Register user controller
const registerUser = async (req, res) => {
  res.status(501).json({
    status: "error",
    message: "This route is not implemented yet",
  });
};

module.exports = { registerUser };
