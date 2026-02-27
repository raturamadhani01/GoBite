'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Driver extends Model {
    get privatePhone() {
      if (!this.phoneNumber || this.phoneNumber.length < 4) return this.phoneNumber;
      return `${this.phoneNumber.slice(0, 4)}****${this.phoneNumber.slice(-3)}`;
    }
    static associate(models) {
      // One-to-Many: Driver has many Orders
      Driver.hasMany(models.Order, { foreignKey: 'DriverId' });
    }
  }

  Driver.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Driver name is required" },
          notEmpty: { msg: "Driver name is required" },
        },
      },
      phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Driver phone number is required" },
          notEmpty: { msg: "Driver phone number is required" },
        },
      },
      license: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Driver license is required" },
          notEmpty: { msg: "Driver license is required" },
        },
      },
    },
    {
      sequelize,
      modelName: 'Driver',
    }
  );

  return Driver;
};
