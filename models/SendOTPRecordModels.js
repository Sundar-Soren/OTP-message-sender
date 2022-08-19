const mongoose = require("mongoose");

const sentOTPRecordSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "UserData",
    },
    sentOTP: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = new mongoose.model("SentOTPRecord", sentOTPRecordSchema);
