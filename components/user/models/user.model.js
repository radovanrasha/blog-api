// models/user.model.js
const { DataTypes } = require("sequelize");
const sequelize = require("../../../config/database"); // Adjust the path as necessary

const User = sequelize.define(
  "User",
  {
    username: { type: DataTypes.STRING, allowNull: false },
    firstName: { type: DataTypes.STRING, allowNull: false },
    lastName: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
  },
  {
    tableName: "users",
    timestamps: true,
  }
);

module.exports = User;
