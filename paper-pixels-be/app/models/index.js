// import config from config.js
const dbConfig = require('../config/config');

// connect to database
const Sequelize = require('sequelize');
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.host,
  dialect: dbConfig.dialect,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.mix,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

// db export to pass around
const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

// import models
db.product = require('./product.model')(sequelize, Sequelize);
db.order = require('./order.model')(sequelize, Sequelize);

// assign to export for use of others
module.exports = db;
