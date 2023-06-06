const sequelize = require("../connection");
const { DataTypes } = require("sequelize");

const Company = sequelize.define("Company", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  code: {
    type: DataTypes.STRING(6),
    unique: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  creditBalance: {
    type: DataTypes.DOUBLE,
    defaultValue: 0,
  },
  debitBalance: {
    type: DataTypes.DOUBLE,
    defaultValue: 0,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Company;
