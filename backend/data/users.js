import bcrypt from "bcryptjs"
const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "chetan mahajan",
    email: "chetan@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "chetu mahajn",
    email: "chetu@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
]
export default users
