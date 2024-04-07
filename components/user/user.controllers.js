const UserModel = require("./models/user.model");

// Example controller methods
exports.getAll = async (req, res) => {
  try {
    const users = await UserModel.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.register = async (req, res) => {
  try {
    console.log(req.body);
    const user = await new UserModel({ ...req.body }).save();
    console.log(user);
    res.status(200).json({ message: "Successfull." });
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
};
