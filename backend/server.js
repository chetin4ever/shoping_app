// const express = require("express")
// const products = require("./data/products")
// const dotenv = require("dotenv")
import express from "express"
import products from "./data/products.js"
import dotenv from "dotenv"

const app = express()
dotenv.config()
app.get("/", (req, res) => {
  res.send("Api is running...")
})
app.get("/api/products/", (req, res) => {
  res.json(products)
})
app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id)
  res.send(product)
})
const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`server is running on port ${PORT}`))
