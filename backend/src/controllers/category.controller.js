import Category from "../models/category.model.js";

// Create a new category
export const createCategory = async (req, res) => {
  try {
    const { name, description} = req.body;
    const category = await Category.create({ name, description});
    await category.save();
    res
      .status(201)
      .json({ message: "Category created successfully", category });
  } catch (error) {
    res.status(500).json({ message: "Error creating category", error });
  }
};

// Get all categories
export const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: "Error fetching categories", error });
  }
};

// Get all products of a specific category by category ID
export const getProductsByCategory = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const category = await Category.findById(categoryId).populate("products");
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.status(200).json(category.products);
  } catch (error) {
    res.status(500).json({ message: "Error fetching products", error });
  }
};

// Update a category by ID
export const updateCategory = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const { name, description} = req.body;
    const category = await Category.findByIdAndUpdate(
      categoryId,
      { name, description},
      { new: true }
    );
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    res
      .status(200)
      .json({ message: "Category updated successfully", category });
  } catch (error) {
    res.status(500).json({ message: "Error updating category", error });
  }
};

// Delete a category by ID
export const deleteCategory = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const category = await Category.findByIdAndDelete(categoryId);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.status(200).json({ message: "Category deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting category", error });
  }
};
