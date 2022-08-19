const mongoose = require("mongoose");

const userDataSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    mobile: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = new mongoose.model("UserData", userDataSchema);
