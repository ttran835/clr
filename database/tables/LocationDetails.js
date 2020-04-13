const Sequelize = require('sequelize');
const { sequelize } = require('../index');

const LocationDetails = sequelize.define(
  'location_details',
  {
    _id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: Sequelize.STRING(255), allowNull: false },
    description: { type: Sequelize.TEXT },
  },
  { timeStamp: false },
);

module.exports = { LocationDetails };
