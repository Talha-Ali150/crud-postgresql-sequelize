//import express for using its router.
const express = require("express");

//importing all the user controller functions.
const {
  addUser,
  getUsers,
  updateUser,
  deleteUser,
} = require("../controllers/user.controllers.js");

//creating an instance of router.
const router = express.Router();

//route to get all users.
router.route("/").get(getUsers);

//route to add a user.
router.route("/addUser").post(addUser);

//route to update user's name using user id.
router.route("/updateUser/:id").put(updateUser);

//route to delete a user using user id
router.route("/deleteUser/:id").delete(deleteUser);

//exporting all the routes to be used.
module.exports = router;
