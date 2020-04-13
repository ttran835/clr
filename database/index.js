require('dotenv').config();
const Sequelize = require('sequelize');

const { Op } = Sequelize;
const operatorsAliases = {
  $like: Op.like,
};
const devDb = new Sequelize(
  process.env.LOCAL_DB,
  process.env.LOCAL_USER,
  process.env.LOCAL_PASSWORD,

  {
    host: 'localhost',
    dialect: 'postgres',
    dialectOptions: {
      ssl: false,
    },
    operatorsAliases: { operatorsAliases },
  },
);

const productionDb = new Sequelize(process.env.HEROKU_DB, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: true,
  },
  operatorsAliases: { operatorsAliases },
});

const sequelize = process.env.LOCAL_DB === undefined ? productionDb : devDb;

sequelize
  .authenticate()
  .then(() => console.log('Conected to DB'))
  .catch((err) => console.error(err));
// sequelize
//   .sync()
//   .then(() => console.log('App synced with all tables.'))
//   .catch((err) => console.error(err));

module.exports = { sequelize };
