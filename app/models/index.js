const dbConfig = require("../../app/config/db.config.js");

const Sequelize = require("sequelize");
const sequelizeConnect = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: 0,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelizeConnect = sequelizeConnect;

db.project = require("./projects.model.js")(sequelizeConnect, Sequelize);

module.exports = db;