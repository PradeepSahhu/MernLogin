import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../models/user.models.js";
// import jwt from "jsonwebtoken";

const Trail = asyncHandler(async (req, res) => {
  console.log("this is calling");
  return res
    .status(200)
    .json(new ApiResponse(200, { message: "Api is working perfectly" }));
});

const userDemo = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { email, password, ApiKey } = req.body;
  if (!email || !password) {
    throw new ApiError(400, "Email and Password are required");
  }

  const options = {
    maxAge: 1000 * 60 * 60 * 24,
    httpOnly: true,
    secure: false,
    sameSite: "Lax",
    origin: "http://localhost:8010",
  };

  if (email === "official.pradeepsahu@gmail.com" && password === "123456") {
    res.cookie("ApiKey", ApiKey, options);
    return res
      .status(200)
      .json(new ApiResponse(200, { message: "User logged In Successfully" }));
  }
  throw new ApiError(401, "Invalid Email or Password");
});

const registerUser = asyncHandler(async (req, res) => {
  console.log(req.param);
  const { username, email, password } = req.body;
  console.table([username, email, password]);

  if (!username && !email && !password) {
    return res.status(401).json({
      message: "password , email or username can't be empty",
    });
  }

  const existingUser = await User.findOne({ $or: [{ username }, { email }] });

  if (existingUser) {
    return res
      .status(400)
      .json({ message: "Username or email already exists" });
  }

  const user = await User.create({
    username,
    email,
    password,
  });

  const createdUser = await User.findOne(user._id).select("-password");

  if (!createdUser) {
    return res.status(401, "Something went wrong");
  }

  return res.status(200).json({ message: "User registered Successfully" });
});

const loginUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  console.table([username, email, password]);

  if (!username && !email) {
    return res.status(400).json({ message: "Email or username required" });
  }

  const userExist = await User.findOne({ $or: [{ username }, { email }] });
  if (!userExist) {
    return res.status(401).json({ message: "User doesn't exist" });
  }

  const checkPassword = await User.findOne({ password });

  if (!checkPassword) {
    return res.status(401).json({ message: "User doesn't exist" });
  }
  console.log(userExist);
  console.log(checkPassword);
  return res.status(200).json({ message: "User successfully logined!!" });
});

export { registerUser, loginUser, userDemo, Trail };
