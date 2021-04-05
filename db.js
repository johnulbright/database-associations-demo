const Sequelize = require("sequelize");

//const db = new Sequelize(process.env.DBSTRING);
const db = new Sequelize("database-associations-demo-server",
"postgres",
"password",
{
  host: "localhost",
  dialect: "postgres",
}
  
);


module.exports = db;
