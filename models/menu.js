'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Menu extends Model {
    static associate(models) {
      // Many-to-Many: Menu belongs to many Orders through OrderMenu
      Menu.belongsToMany(models.Order, {
        through: models.OrderMenu,
        foreignKey: 'MenuId',
      });
    }
  }

  Menu.init(
    {
      menu: DataTypes.STRING,
      price: DataTypes.INTEGER,
      description: DataTypes.STRING,
      imageUrl: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Menu',
    }
  );

  return Menu;
};