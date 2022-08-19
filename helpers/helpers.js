const smsSID = process.env.SMS_SID;
const smsAuthToken = process.env.SMS_AUTH_TOKEN;
const twilio = require("twilio")(smsSID, smsAuthToken, { lazyLoading: true });

module.exports.sendBySMS = async (phone, message) => {
  return await twilio.messages.create({
    to: phone,
    from: process.env.SMS_FROM_NUMBER,
    body: message,
  });
};
