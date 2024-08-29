const axios = require('axios');
const moment = require('moment');
const OtpToken = require('../models/otpToken');

exports.sendOtp = async (req, res) => {
  const { mobile } = req.body;

  try {
    let numberTo = "+91" + mobile;
    let otp = Math.floor(Math.random() * 8888 + 1111);
    
    // Custom OTP for specific numbers (for testing)
    if (numberTo === '+919213723036') {
      otp = 1234;
    }

    // Send OTP via API
    if (numberTo !== '+918829996143' && numberTo !== '+918050389046') {
      await axios.get(`https://2factor.in/API/V1/${process.env.API_2Factor}/SMS/${numberTo}/${otp}/OTP`);
    }

    // Save OTP to database
    const date = moment().format("YYYY-MM-DD HH:mm:ss.SSS");
    await OtpToken.create({
      otp,
      mobile: numberTo,
      createddate: date,
      modifieddate: date,
    });

    res.status(200).json({ message: 'OTP sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to send OTP' });
  }
};

exports.verifyOtp = async (req, res) => {
  const { mobile, otp } = req.body;

  try {
    let numberTo = "+91" + mobile;

    // Check OTP in the database
    const result = await OtpToken.findOne({
      where: {
        mobile: numberTo,
        otp,
        trycnt: { [Op.lt]: 3 },
      },
      order: [['createddate', 'DESC']],
    });

    if (!result) {
      return res.status(400).json({ message: 'Invalid OTP' });
    }

    // OTP verification successful
    res.status(200).json({ message: 'Logged in successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to verify OTP' });
  }
};
