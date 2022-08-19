const { sendBySMS } = require("../helpers/helpers");
const UserData = require("../models/UserDataModel");
const { ObjectId } = require("mongoose").Types;
const SendOTPRecord = require("../models/SendOTPRecordModels");

exports.addUser = async (req, res) => {
  try {
    const user = await UserData.create(req.body);

    return res.json(user);
  } catch (error) {
    return res.status(501).json({ message: error.message });
  }
};

exports.getAllContacts = async (req, res) => {
  try {
    const users = await UserData.find({});

    return res.json(users);
  } catch (error) {
    return res.status(501).json({ message: error.message });
  }
};

exports.getContactById = async (req, res) => {
  try {
    const user = await UserData.findById(req.params.userId);
    return res.json(user);
  } catch (error) {
    return res.status(501).json({ message: error.message });
  }
};

exports.sendOTP = async (req, res) => {
  try {
    const message = req.body.message;
    const user = await UserData.findById(req.body.userId);
    const otp = req.body.otp;
    const phone = `+91${user.mobile}`;

    await sendBySMS(phone, message);

    await SendOTPRecord.create({
      userId: user._id,
      sentOTP: otp,
    });

    return res.status(200).json({
      message: `Successfully OTP message sent to ${user.name} Mobile Number: ${user.mobile}`,
      user,
    });
  } catch (error) {
    return res.status(501).json({ message: error.message });
  }
};

exports.getAllSentOTPRecord = async (req, res) => {
  try {
    const record = await SendOTPRecord.find()
      .sort({ createdAt: -1 })
      .populate("userId");
    return res.status(200).json(record);
  } catch (error) {
    return res.status(501).json({ message: error.message });
  }
};
