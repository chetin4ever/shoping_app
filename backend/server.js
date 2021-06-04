// const express = require("express")
// const products = require("./data/products")
// const dotenv = require("dotenv")
import express from "express"

import dotenv from "dotenv"
import connectDB from "./config/db.js"
import productsRoutes from "./routes/productsRoutes.js"
import { errorHandler, notFound } from "./middleware/errorMiddleware.js"

const app = express()
dotenv.config()
connectDB()
app.get("/", (req, res) => {
  res.send("Api is running...")
})
app.use("/api/products", productsRoutes)
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`server is running on port ${PORT}`))
