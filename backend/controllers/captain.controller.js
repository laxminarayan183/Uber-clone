const { validationResult } = require("express-validator");
const captainModel = require("../models/captain.model");
const captainService = require("../services/captain.service");
const blacklistTokenModel = require("../models/blacklistToken.model");

module.exports.registerCaptain = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { fullname, email, password, vehicle } = req.body;

  const isCaptainAlreadyExist = await captainModel.findOne({ email });

  if (isCaptainAlreadyExist) {
    return res.status(200).json({ message: "Captain already exists" });
  }

  const hashPassword = await captainModel.hashPassword(password);
  const captain = await captainService.createCaptain({
    firstname: fullname.firstname,
    lastname: fullname.lastname,
    email,
    password: hashPassword,
    color: vehicle.color,
    plate: vehicle.plate,
    capacity: vehicle.capacity,
    vehicleType: vehicle.vehicleType,
  });
  const token = captain.generateAuthToken();
  res.status(201).json({ token, captain });
};

module.exports.loginCaptain = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { email, password } = req.body;
  const captain = await captainModel.findOne({ email }).select("+password");
  if (!captain) {
    return res.status(401).json({ messages: "Invalid email or password" });
  }
  const isMatch = await captain.comparePassword(password);
  if (!isMatch) {
    return res.status(401).json({ messages: "Invalid email or password" });
  }
  const token = captain.generateAuthToken();
  res.cookie("token", token);
  res.status(200).json({ token, captain });
};

module.exports.getCaptainProfile = async (req, res, next) => {
  res.status(200).json(req.captain);
};

module.exports.logoutCaptain = async function (req, res, next) {
  res.clearCookie("token");
  const token = req.cookies.token || req.headers.authorization.split(" ")[1];
  await blacklistTokenModel.create({ token });
  res.status(200).json({ message: "Logged out" });
};

// {
//   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzQ5YzEwMjA1MzFjODI0NmJiODA3ZGEiLCJpYXQiOjE3MzI4ODY3ODYsImV4cCI6MTczMjk3MzE4Nn0.xBScGf5K4Y1OgCFnDbvIw050N4bQUiJ4LL50Y3F7rF8",
//   "captain": {
//       "fullname": {
//           "firstname": "captain",
//           "lastname": "test"
//       },
//       "email": "testcapg@gmail.com",
//       "password": "$2b$10$pcKJW3.LOtRHLxUuhEhyeuKnEaqQHlV6AWGP2NnPhbLUY9fPfl9fq",
//       "status": "inactive",
//       "vehicle": {
//           "color": "red",
//           "plate": "MH 13 MS 7777",
//           "capacity": 3,
//           "vehicleType": "car"
//       },
//       "_id": "6749c1020531c8246bb807da",
//       "__v": 0
//   }
// }
