// server.js

const express = require('express');
const bodyParser = require('body-parser');
const otpGenerator = require('otp-generator');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/generate-otp', (req, res) => {
  const { mobileNumber } = req.body;
  const otp = otpGenerator.generate(6, { upperCase: false, specialChars: false, alphabets: false });
  // TODO: Send the OTP to the user's mobile number (you can use a third-party SMS service for this)
  console.log(`Generated OTP for ${mobileNumber}: ${otp}`);
  res.json({ success: true, message: 'OTP sent successfully' });
});

app.post('/verify-otp', (req, res) => {
  const { mobileNumber, otp } = req.body;
  // TODO: Implement OTP verification logic
  // For simplicity, let's assume the OTP is valid if it matches '123456'
  const isValid = otp === '123456';
  if (isValid) {
    res.json({ success: true, message: 'OTP verified successfully' });
  } else {
    res.status(400).json({ success: false, message: 'Invalid OTP' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
