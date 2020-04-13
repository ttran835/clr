const Sequelize = require('sequelize');
const { sequelize } = require('../index');

const Images = sequelize.define(
  'images',
  {
    _id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    url: { type: Sequelize.STRING(255), allowNull: false },
    locations_id: { type: Sequelize.INTEGER },
    memories_id: { type: Sequelize.INTEGER },
  },
  { timeStamp: false },
);

module.exports = { Images };
