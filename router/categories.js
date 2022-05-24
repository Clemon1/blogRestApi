const express = require("express");
const category = require("../model/categories");
const router = express.Router();

// Find all  Category
router.get("/category/findAll", async (req, res) => {
  try {
    const allCategory = await category.find();
    res.json(allCategory);
  } catch (error) {
    res.json(error.message);
  }
});

// Create category
router.post("/category/create", async (req, res) => {
  try {
    const newCategory = new category(req.body);
    const createCategory = await newCategory.save();
    res.json(createCategory);
  } catch (error) {
    res.json(error.message);
  }
});

// Delete category
router.delete("/category/:id", async (req, res) => {
  const id = req.params.id;
  const deleteCategory = await category.findByIdAndRemove(id);
  res.json(deleteCategory);
});

module.exports = router;
