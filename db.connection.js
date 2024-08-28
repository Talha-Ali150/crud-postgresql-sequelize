// const User = require("./models/user.model.js");
const sequelize = require("./db.config.js");

//function to connect to the database.
const connectDB = async () => {
  try {
    //this will authenticate the connection.
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");

    //this will synchronize the models with the database.
    await sequelize.sync();
    console.log("Database synchronized successfully.");

  } catch (error) {
    //in case of any error
    console.error("Unable to connect to the database:", error);
  }
};

// exporting the connectDB function to be used
module.exports = { connectDB };
