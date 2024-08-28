//importing express to create server.
const express = require("express");

//importing the funtion which connects to the DB.
const { connectDB } = require("./db.connection");

//importing user routes.
const userRouter = require("./routes/user.routes.js");

//import important data that should not be exposed from env file.
require("dotenv").config();

//create an instance of express named app.
const app = express();

//specifying the port in case .env file is not present.
const port = process.env.PORT || 8080;

//execute the connect to DB function.
connectDB();

//using express.json() to parse the incoming request body in json format.
app.use(express.json());

//use user routes
app.use("/api/users", userRouter);

//start the server which will listen 
app.listen(port, () => console.log(`server is running at port:${port}`));
