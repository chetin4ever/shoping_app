import express from "express"
import {
  getProductById,
  getProducts,
} from "../controllers/productController.js"
const router = express.Router()
export default router

router.route("/").get(getProducts)

router.route("/:id").get(getProductById)
