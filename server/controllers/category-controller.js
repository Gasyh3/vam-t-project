const Category = require("../models/category-model");

// Function to create a new category
exports.createCategory = async (req, res) => {
  try {
    const { categoryName, categoryImg } = req.body;
    const category = await Category.create({
      categoryName,
      categoryImg,
    });
    res
      .status(201)
      .json({ message: "Category created successfully", category });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong", err });
  }
};

// Function to update a category
exports.updateCategory = async (req, res) => {
  try {
    const { categoryName, categoryImg } = req.body;
    const { id } = req.params;
    const category = await Category.update(
      { categoryName, categoryImg },
      { where: { id } }
    );
    res
      .status(200)
      .json({ message: "Category updated successfully", category });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong", err });
  }
};

// Function to delete a category
exports.deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    await Category.destroy({ where: { id } });
    res.status(200).json({ message: "Category deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong", err });
  }
};

// Function to get all categories
exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.status(200).json({ categories });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong", err });
  }
};

// Function to get a category by id
exports.getCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Category.findOne({ where: { id } });
    res.status(200).json({ category });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong", err });
  }
};
