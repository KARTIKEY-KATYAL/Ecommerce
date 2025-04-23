import express, { Router } from "express";

const router = Router();

// Create a new category
router.post("/", (req, res) => {
  res.send("Create a new category");
});

// Get all categories
router.get("/", (req, res) => {
  res.send("Get all categories");
});

// Get all products of a specific category by category ID
router.get("/:categoryId/products", (req, res) => {
  res.send(`Get all products of category ${req.params.categoryId}`);
});

// Update a category by ID
router.put("/:categoryId", (req, res) => {
  res.send(`Update category ${req.params.categoryId}`);
});

// Delete a category by ID
router.delete("/:categoryId", (req, res) => {
  res.send(`Delete category ${req.params.categoryId}`);
});

export default router;
