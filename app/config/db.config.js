const mysql = require('mysql2')
/*const db = mysql.createConnection({
host: "localhost",
user: "root",
password: "",
database:"portfolio_react",
dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

db.connect(function(err){
    console.log(err);
})*/
module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "",
  DB: "portfolio_react",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};