const express = require("express");
const router = express.Router()
const { createBlog, getAllBlogs, getSingleBlog, UpdateBlog, DeleteBlog } = require("../contoller/Blog.contoller.js")


// /api/v1/blog
router.post("/create-blog",createBlog)
router.get("/all-blogs",getAllBlogs)
router.get("/single-blog/:id",getSingleBlog)
router.put("/update-blog/:id",UpdateBlog)
router.delete("/delete-blog/:id",DeleteBlog)


module.exports = router;