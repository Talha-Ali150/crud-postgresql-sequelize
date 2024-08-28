//importing user modules to perform operations on them.
const User = require("../models/user.model.js");

//creating add user function.
const addUser = async (req, res) => {
  //this will extract the name and email from body of request.
  const { name, email } = req.body;
  try {
    
    //it will try to create a new user, using name and email extracted from the body.
    const newUser = await User.create({ name, email });

    //if it fails to create user it will return this response.
    if (!newUser) {
      return res.status(400).json({ message: "User not created" });
    }
    //otherwise it will return the newly created user
    res.status(201).json(newUser);
  } catch (error) {
    //this will run in the case when some other error occurs.
    res.status(500).json({ message: "Error creating user" });
  }
};

const getUsers = async (req, res) => {
  try {
    // it will try to fetch all the users from the DB.
    const allUsers = await User.findAll();

    //if there it's unable to do so it will return no users found.
    if (!allUsers) {
      res.status(404).send({ message: "No users found" });
    }
    //otherwise it will return the list of all the users present in the DB.
    res.json(allUsers);

    //this will run in the case when some other error occurs.
  } catch (error) {
    res.status(500).send({
      message: "error fetching users",
    });
  }
};

const updateUser = async (req, res) => {
  //it will extract name from body request.
  const { name } = req.body;

  // it will extract id from request parameters.
  const { id } = req.params;

  try {
  
    //this will try to update the user.
    const updatedUser = await User.update(
      { name },
      {
        where: {
          id,
        },
      }
    );
    //if it fails it will return this response.
    if (!updatedUser) {
      return res
        .status(404)
        .json({ message: "user not found can not update." });
    }
    //otherwise it will return the success message.
    return res
      .status(200)
      .send({ message: "user's name updated successfully" });

      //this will run in the case when some other error occurs.
  } catch (error) {
    return res.status(500).json({ message: "internal server error." });
  }
};

const deleteUser = async (req, res) => {
  //it will extract id from request parameters.
  const { id } = req.params;

  try {
    //it will try to delete the user using the user id.
    const user = await User.destroy({ where: { id } });

    //if user with that id is not found it will return this response.
    if (!user) {
      return res
        .status(404)
        .json({ message: "user not found, failed to delete user." });
    }
    // oherwise it will return success message.
    return res.status(200).json({ message: "user deleted successfully." });
  } catch (error) {

    //this will run in the case when some other error occurs.
    res.status(500).json({ message: "internal server error" });
  }
};

//exporting all the controller functions.
module.exports = { addUser, getUsers, updateUser, deleteUser };
