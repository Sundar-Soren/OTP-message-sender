const express = require("express");
const {
  addUser,
  sendOTP,
  getAllSentOTPRecord,
  getAllContacts,
  getContactById,
} = require("./controllers/UserControllers");
const router = express.Router();

router.post("/addUser", addUser);
router.get("/contacts", getAllContacts);
router.get("/contact/:userId", getContactById);
router.post("/sendOTP", sendOTP);
router.get("/getRecords", getAllSentOTPRecord);

module.exports = router;
