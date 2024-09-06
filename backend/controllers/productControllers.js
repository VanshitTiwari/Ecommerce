const Product = require('../models/productModel');
const ErrorHandler = require('../utils/errorhandler');
const catchAsyncError = require("../middleware/catchAsyncError");

// CREATE PRODUCT -- Admin

exports.createProduct = catchAsyncError(async (req, res) => {
    try {
        console.log('Request Body:', req.body);

        // Validate request body manually (optional, for debugging)
        if (!req.body.name || !req.body.price || !req.body.description || !req.body.category || !req.body.images || !req.body.images.public_id || !req.body.images.url) {
            return res.status(400).json({
                success: false,
                message: 'Please provide all required fields: name, price, description, category, images.public_id, images.url'
            });
        }

        const product = await Product.create(req.body);
        console.log('Product Created:', product);
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
});
// GET ALL PRODUCTS
exports.getAllProducts = catchAsyncError(async (req, res) => {
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
});

// GET PRODUCT DETAIL
exports.getProductDetails = catchAsyncError(async (req, res, next) => {
    try {
        const product = await Product.findById(req.params.id);

        if (!product) {
            return next(new ErrorHandler('Product not found', 404));
        }

        res.status(200).json({
            success: true,
            product,
        });
    } catch (error) {
        return next(new ErrorHandler(error.message, 500));
}
});

// UPDATE PRODUCT -- Admin
exports.updateProduct = catchAsyncError(async (req, res, next) => {
    try {
        let product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json({
                success: false,
                message: 'Product not found',
            });
        }

        product = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
            useFindAndModify: false,
        });

        res.status(200).json({
            success: true,
            product,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
});

// DELETE PRODUCT
exports.deleteProduct = catchAsyncError( async (req, res, next) => {
    try {
        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json({
                success: false,
                message: 'Product not found',
            });
        }

        await Product.findByIdAndDelete(req.params.id);

        res.status(200).json({
            success: true,
            message: 'Product deleted successfully',
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
});
