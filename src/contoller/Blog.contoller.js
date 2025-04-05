const express = require('express');
const mongoose = require("mongoose");
const Blog = require('../model/Blog.model');


const createBlog = async (req, res) => {
    try {
        const newBlog = await Blog({...req.body})
        newBlog.save()
        res.status(200).send({
            message: 'Post blog created successfully',
            blog: newBlog
        })
    } catch (error) {
        console.log(error);
        res.status(404).send({
            message: 'Failed to create post blog'
        })
    }
}

const getAllBlogs = async (req, res)=> {
    try {
        const allBlogs = await Blog.find()
        res.status(200).send(allBlogs)
    } catch (error) {
        console.log(error);
        res.status(404).send({
            message: 'Failed to fetch all blogs'
        })    
    }
}

const getSingleBlog = async (req, res)=> {
    const {id} = req.params
    try {
        const singleBlog = await Blog.findById(id)
        res.status(200).send({
            message: "Single blog found",
            blog: singleBlog
        })
    } catch (error) {
        console.log(error);
        res.status(404).send({
            message: 'Failed to fetch single blog'
        })    
    }
}
const UpdateBlog = async (req, res)=> {
    const {id} = req.params
    try {
        const updateblog = await Blog.findByIdAndUpdate(id, req.body, {new: true})
        res.status(200).send({
            message: 'Blog updated successfully',
            blog: updateblog
        })
    } catch (error) {
        console.log(error);
        res.status(404).send({
            message: 'Failed to update blog'
        })    
    }
}
const DeleteBlog = async (req, res)=> {
    const {id} = req.params
    try {
        const deteteblog = await Blog.findByIdAndDelete(id)
        res.status(200).send({
            message: 'Blog deleted successfully',
            blog: deteteblog
        })
    } catch (error) {
        console.log(error);
        res.status(404).send({
            message: 'Failed to delete blog'
        })    
    }
}

module.exports = {
    createBlog,
    getAllBlogs,
    getSingleBlog,
    UpdateBlog,
    DeleteBlog,
}