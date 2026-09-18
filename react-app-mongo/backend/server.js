const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require('dotenv').config();

// import models
const Product = require('./models/products');

const app = express();
app.use(cors());
app.use(express.json());
const PORT = 5000;
// connection string
const mongoURL = process.env.MONGO;

mongoose.connect(mongoURL)
    .then(() => {
        console.log("MongoDB connected successfully");
    })
    .catch((error) => {
        console.log("MongoDB connection failed");
        console.log(error);
    });


app.get("/", (req, res) => {
    res.send("Server is running. MongoDb is connected");
});

// Product CRUD Operations
app.post('/api/products', async (req, res) => {
    try{
        // data from the user/client side
        const {title, price, category, description, image, rating, inStock, reviews} = req.body;

        if(!title || !price || !category){
            return res.status(400).json({
                'message': 'Title, price and category not found'
            })
        }

        // creating a document
        const newProduct = new Product({
            title, 
            price, 
            category, 
            description, 
            image,
            rating,
            inStock, 
            reviews
        })

        const savedProduct = await newProduct.save()

        res.status(201).json({
            'message': 'product create sucessfully',
            'data' : savedProduct
        });

    }catch(error){
        res.status(500).json({
            'message' : 'Server Error, Products cannot be added' 
        })
    }
});

//get data from api
app.get('/api/products', async (req, res) => {
    try{
        const allProducts = await Product.find()

        res.json({
            'message' : 'All products successfully fetched',
            'count' : allProducts.length,
            'data' : allProducts
        });
    }catch(error){
        res.status(500).json({
            'message' : 'Products fetching failed',
            'error' : error.message
        })
    }
});

// find by id
app.get('/api/products/:id', async (req, res) => {
    try{    
        const productId = req.params.id

        // fetching a single product by ID
        const product = await Product.findById(productId)

        if(!product){
            return res.status(404).json({
                'message' : 'Product not found'
            })
        }

        res.json({
            'message' : 'Product fetched',
            'data' : product
        });
    }catch(error){
        res.status(500).json({
            'message' : 'Product cannot be fetched',
            'error' : error.message
        })
    };
});

// find a product by id and update
app.put('/api/products/:id', async (req, res) => {
    try{    
        const {title, price, category, description, image, rating, inStock, reviews} = req.body;

        const updatedProduct = Product.findByIdAndUpdate(
            req.params.id,
            {title, price, category, description, image, rating, inStock, reviews},
            {new: true}
        )

        if(!updatedProduct){
            res.status(404).json({
                'message' : 'Product not found'
            })
        }

        res.json({
            'message' : 'Product updated successfully',
            'data' : updatedProduct
        })
    }catch(error){
        res.status(500).json({
            'message' : 'Products cannot be fetched',
            'error' : error.message
        })
    }
})

// React Form -> request -> body -> data
// Id -> product fetch ->




app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});