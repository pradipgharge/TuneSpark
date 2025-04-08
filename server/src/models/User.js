const mongoose = require("mongoose");
const validator = require("validator");

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true, minlength: 3 },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      validate: validator.isEmail,
    },
    password: { type: String, required: true, minlength: 8, select: false },
  },
  { timeStamps: true }
);

module.exports = mongoose.model("User", UserSchema);
