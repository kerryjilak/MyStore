import express from "express";
import mongoose from "mongoose";
const router = express.Router();
import Product from "../models/product_model.js";
import {
  getProducts,
  createProduct,
  deleteProduct,
  updateProduct,
} from "../controllers/product_controllers.js";

router.post("/", createProduct);

router.delete("/:id", deleteProduct);
router.get("/", getProducts);

router.put("/:id", updateProduct);
// Get all products

export default router;
