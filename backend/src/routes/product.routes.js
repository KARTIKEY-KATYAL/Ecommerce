import express from "express";
import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/product.controller.js";

const router = express.Router();

// Get all products
router.get("/", getAllProducts);

// Get single product by ID
router.get("/:id", getProductById);

// Create new product
router.post("/", createProduct);

// Update product
router.put("/:id", updateProduct);

// Delete product
router.delete("/:id", deleteProduct);

export default router;
