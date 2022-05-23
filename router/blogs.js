const express = require("express");
const blogRouter = express.Router();
const blogs = require("../model/blog");

// get all blogs

blogRouter.get("/blogs/all", async (req, res) => {
  const allBlogs = await blogs.find();
  res.json(allBlogs);
});

// create blogPost

blogRouter.get("blogs/create", async (req, res) => {
  try {
    const blog = new blogs(req.body);
    const newBlog = await blog.save();
    res.json(newBlog);
  } catch (err) {
    res.json({ message: "Error in creating blog" });
  }
});

// delete blog

blogRouter.delete("blog/all/:id", async (req, res) => {
  const id = req.params.id;
  const deleteBlog = await blogs.findByIdAndRemove(id);
  res.json(deleteBlog);
});

module.exports = blogRouter;
