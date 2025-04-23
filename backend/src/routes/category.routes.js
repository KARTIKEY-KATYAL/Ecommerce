import express, { Router } from "express";
import {
  createCategory,
  getAllCategories,
  getProductsByCategory,
  updateCategory,
  deleteCategory,
} from "../controllers/category.controller.js";

const router = Router();

// Create a new category
router.post("/", createCategory);

// Get all categories
router.get("/", getAllCategories);

// Get all products of a specific category by category ID
router.get("/:categoryId/products", getProductsByCategory);

// Update a category by ID
router.put("/:categoryId", updateCategory);

// Delete a category by ID
router.delete("/:categoryId", deleteCategory);

export default router;
