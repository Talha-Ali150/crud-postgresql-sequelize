//import sequelize for using its data types.
const { Sequelize } = require("sequelize");

//importing the local sequelize config for use.
const sequelize = require("../db.config.js");

//creating the user schema, and exporting it.
module.exports = sequelize.define(
  "user",
  {
    name: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
      unique: true,
    },
  },
  { timestamps: false }
);
