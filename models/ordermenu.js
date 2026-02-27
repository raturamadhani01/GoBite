'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class OrderMenu extends Model {
    static associate(models) {
    }
  }

  OrderMenu.init(
    {
      OrderId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      MenuId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'OrderMenu',
    }
  );

  return OrderMenu;
};
