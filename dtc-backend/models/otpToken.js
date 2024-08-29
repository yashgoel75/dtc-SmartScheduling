const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const OtpToken = sequelize.define('OtpToken', {
  otp: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  mobile: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createddate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  modifieddate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  trycnt: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
});

module.exports = OtpToken;
