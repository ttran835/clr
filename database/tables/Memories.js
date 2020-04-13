const Sequelize = require('sequelize');
const { sequelize } = require('../index');
const { Images } = require('./Images');

const Memories = sequelize.define(
  'memories',
  {
    _id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: Sequelize.STRING(255) },
    description: { type: Sequelize.TEXT },
  },
  { timeStamp: false },
);

Memories.hasMany(Images, { as: 'images', foreignKey: 'image_id' });

module.exports = { Memories };
