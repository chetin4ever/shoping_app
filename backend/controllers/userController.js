import asyncHandler from "express-async-handler"
import User from "../models/userModel.js"
import generateToken from "../utils/genrateToken.js"

//@desc auth user and get tokens
//@route POST /api/users/login
//@access public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    })
  } else {
    res.status(401)
    throw new Error("Invalid password")
  }
})
//@desc register new user
//@route POST /api/users/
//@access public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body
  const userExists = await User.findOne({ email })
  if (userExists) {
    res.status(400)
    throw Error("User already exists")
  }
  const user = await User.create({
    name,
    email,
    password,
  })
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    })
  } else {
    res.status(400)
    throw new Error("invalid user Data")
  }
})

//@desc auth user and get tokens
//@route GET /api/users/profile
//@access private
const getUserProfile = asyncHandler(async (req, res) => {
  //   res.send("sucesss")
  const user = await User.findById(req.user._id)
  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    })
  } else {
    res.status(404)
    throw new Error("user not found")
  }
})
export { authUser, getUserProfile, registerUser }
