'use strict';
module.exports = (sequelize, DataTypes) => {
  const addresses = sequelize.define('addresses', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    address: {
      type: DataTypes.STRING
    },
    city: {
      type: DataTypes.STRING
    },
    state: {
      type: DataTypes.STRING
    },
    zip: {
      type: DataTypes.STRING
    },
    country: {
      type: DataTypes.STRING
    },
    typeAddress: {
      type: DataTypes.ENUM('PER', 'COR'),
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'users',
        key: 'id'
      }
    },
    isDeleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
   }, {});
  addresses.associate = function(models) {
    // associations can be defined here
    addresses.belongsTo(models.users, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    });
  };
  return addresses;
};