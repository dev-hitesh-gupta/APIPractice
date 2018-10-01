const db = require('../db');
db['addresses'] = db.sequelize.import('addresses', (sequelize, DataTypes) =>
  sequelize.define('addresses', {
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
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
      timestamp: true,
      paranoid: true
    }));

db.sequelize.sync({ 
//  force: true
});

module.exports = db['addresses'];