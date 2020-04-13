const Sequelize = require('sequelize');
const { sequelize } = require('../index');
const { Images } = require('./Images');
const { LocationDetails } = require('./LocationDetails');

const Locations = sequelize.define(
  'locations',
  {
    _id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: Sequelize.STRING(255), allowNull: false },
    lat: { type: Sequelize.FLOAT },
    lng: { type: Sequelize.FLOAT },
  },
  { timeStamp: false },
);

Locations.hasMany(Images, { as: 'images', foreignKey: 'image_id' });
Locations.hasMany(LocationDetails, { as: 'location_details', foreignKey: 'detail_id' });

module.exports = { Locations };
