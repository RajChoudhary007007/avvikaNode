const { Sequelize, DataTypes } = require('sequelize');
const {database} = require("../connection/database"); // Import your Sequelize instance

const registration = database.define('registration', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'GUEST',
  },
  mobile_num: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  email_id: {
    type: DataTypes.STRING,
  },
  gender: {
    type: DataTypes.STRING,
  },
  dob: {
    type: DataTypes.DATE,
  },
});

module.exports = registration;