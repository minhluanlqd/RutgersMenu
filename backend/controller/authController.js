const jwt = require("jsonwebtoken");
const User = require("../model/userModel");
const { promisify } = require("util");

const JWTSecret = "823uienvujbvp4g936967**/398u8t43";
const signToken = (id) => {
  return jwt.sign({ id }, JWTSecret, {
    expiresIn: '1d',
  });
};

const createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id);
  user.password = undefined;
  res.status(statusCode).json({
    status: "success",
    token,
    data: {
      user,
    },
  });
};

exports.signup = async (req, res) => {
  try {
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    newUser.password=undefined;
    createSendToken(newUser, 201, res);
  } catch (e) {
    res.status(404).json({
      message: e,
    });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({
      message: "email or password not found",
    });
  }

  const user = await User.findOne({ email: email }).select("+password");

  if (!user || !(await user.correctPassword(password, user.password))) {
    res.status(401).json({
      message: "email or password not found",
    });
  }

  createSendToken(user, 200, res);
};

exports.isLoggedIn = async (req, res, next) => {
  let token;
  if (req.headers.authorization) {
    token = req.headers.authorization;
  }

  if (token == null) {
    res.status(400).json({
      message: "Please log in",
    });
  }
  // 2) Verification token
  let decoded;
  try{
   decoded = await promisify(jwt.verify)(token, JWTSecret);

}
  catch(e){
      res.status(404).json({
          message: 'invalid token'
      })
  }

  const currentUer = await User.findById(decoded.id);

  if (currentUer == null) {
    res.status(400).json({
      message: "User not found",
    });
  }

  req.user = currentUer;
  next();
};
