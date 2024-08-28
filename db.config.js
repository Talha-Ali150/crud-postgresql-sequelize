//importing the sequelize ORM.
const Sequelize = require("sequelize");

//creating instance of sequlize passing the database name, username and password.
//also specify the host and dialect parameters.
module.exports = new Sequelize("crud-database", "postgres", "1234", {
  host: "localhost",
  dialect: "postgres",
});
