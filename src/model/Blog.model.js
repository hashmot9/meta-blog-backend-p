const mongoose = require('mongoose');



const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    image: {
        type: String,
        require: true,
    },
    author: {
        name: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            require: true,
        },
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
  });



  const Blog = mongoose.model('blog', blogSchema);

  module.exports = Blog;

