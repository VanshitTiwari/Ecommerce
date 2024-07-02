const Product = require("../models/productModel");




//CREATE PRODUCT

exports.createProduct = async (req, res, next) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json({
            success: true,
            product,
        });
    } catch (error) {
        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(val => val.message);
            res.status(400).json({
                success: false,
                message: messages,
            });
        } else {
            res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }
};

// GET ALL PRODUCTS
exports.getAllProducts = async (req, res, next) => {
    try {   
        const products = await Product.find();
        res.status(200).json({
            success: true,
            products,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

exports.getAllProducts=(req,res)=>{
    res.status(200).json({message:"Route is working fine"});
};