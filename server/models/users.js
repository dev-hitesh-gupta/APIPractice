'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    qualification: {
      type: DataTypes.STRING,
      allowNull: true
    },
    exp_years: {
      type: DataTypes.STRING,
      allowNull: true
    },
    hobbies: {
      type: DataTypes.STRING,
      allowNull: true
    },
    foodchoice: {
      type: DataTypes.STRING,
      allowNull: true
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
  users.associate = function(models) {
    // associations can be defined here
    users.hasMany(models.addresses, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    });
  };
  return users;
};