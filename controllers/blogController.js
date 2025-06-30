const express = require("express");
const Blog = require("../models/Bloging");

// create POST method blog

const createBlog = async (req, res) => {
  try {
    const data = req.body;
    const newBlog = new Blog(data);
    const response = await newBlog.save();
    console.log("Blog is save Successful");
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// create GET method

const getBlog = async(req,res)=>{
    try {
        const data = await Blog.find();
        console.log("data fetching successful");
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({message : "Internal server error"})
    }
}

module.exports = {createBlog, getBlog};