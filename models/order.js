'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      // One-to-Many: Order belongs to User
      Order.belongsTo(models.User, { foreignKey: 'UserId' });
      // One-to-Many: Order belongs to Driver
      Order.belongsTo(models.Driver, { foreignKey: 'DriverId' });
      // Many-to-Many: Order belongs to many Menus through OrderMenu
      Order.belongsToMany(models.Menu, {
        through: models.OrderMenu,
        foreignKey: 'OrderId',
      });
    }
  }

  Order.init(
    {
      name: DataTypes.STRING,
      address: DataTypes.STRING,
      UserId: DataTypes.INTEGER,
      DriverId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Order',
    }
  );

  return Order;
};