// File: routes/products.js
// All product CRUD operations

const express = require('express');
const Product = require('../models/products');

const router = express.Router();

// ═══════════════════════════════════════════════════════════
// ✅ CREATE - POST /api/products
// ═══════════════════════════════════════════════════════════

router.post('/', async (req, res) => {
    try {
        const { title, price, category, description, image, rating, inStock, reviews } = req.body;

        // Validation
        if (!title || !price || !category) {
            return res.status(400).json({
                message: 'Title, price, and category are required'
            });
        }

        // Create document
        const newProduct = new Product({
            title,
            price,
            category,
            description,
            image,
            rating,
            inStock,
            reviews
        });

        // Save to database
        const savedProduct = await newProduct.save();

        res.status(201).json({
            message: '✅ Product created successfully',
            data: savedProduct
        });

    } catch (error) {
        res.status(500).json({
            message: '❌ Error creating product',
            error: error.message
        });
    }
});

// ═══════════════════════════════════════════════════════════
// ✅ READ ALL - GET /api/products
// ═══════════════════════════════════════════════════════════

router.get('/', async (req, res) => {
    try {
        const allProducts = await Product.find();

        res.json({
            message: '✅ All products fetched',
            count: allProducts.length,
            data: allProducts
        });

    } catch (error) {
        res.status(500).json({
            message: '❌ Error fetching products',
            error: error.message
        });
    }
});

// ═══════════════════════════════════════════════════════════
// ✅ READ SINGLE - GET /api/products/:id
// ═══════════════════════════════════════════════════════════

router.get('/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json({
                message: '❌ Product not found'
            });
        }

        res.json({
            message: '✅ Product fetched',
            data: product
        });

    } catch (error) {
        res.status(500).json({
            message: '❌ Error fetching product',
            error: error.message
        });
    }
});

// ═══════════════════════════════════════════════════════════
// ✅ UPDATE - PUT /api/products/:id
// ═══════════════════════════════════════════════════════════

router.put('/:id', async (req, res) => {
    try {
        const { title, price, category, description, image, rating, inStock, reviews } = req.body;

        // Find and update
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            { title, price, category, description, image, rating, inStock, reviews },
            { new: true }  // Return updated document
        );

        if (!updatedProduct) {
            return res.status(404).json({
                message: '❌ Product not found'
            });
        }

        res.json({
            message: '✅ Product updated successfully',
            data: updatedProduct
        });

    } catch (error) {
        res.status(500).json({
            message: '❌ Error updating product',
            error: error.message
        });
    }
});

// ═══════════════════════════════════════════════════════════
// ✅ DELETE - DELETE /api/products/:id
// ═══════════════════════════════════════════════════════════

router.delete('/:id', async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);

        if (!deletedProduct) {
            return res.status(404).json({
                message: '❌ Product not found'
            });
        }

        res.json({
            message: '✅ Product deleted successfully',
            data: deletedProduct
        });

    } catch (error) {
        res.status(500).json({
            message: '❌ Error deleting product',
            error: error.message
        });
    }
});

module.exports = router;