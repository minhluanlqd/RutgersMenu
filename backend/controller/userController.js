const User = require("../model/userModel");

exports.getAllUser = async (req, res) => {
  try {
    const users = await User.find();
    res.json({
      users: users,
    });
  } catch (e) {
    res.json({
      message: e,
    });
  }
};
