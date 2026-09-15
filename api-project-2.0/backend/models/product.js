const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
 title: {
    type: String,
    required: true
 },
 price: {
    type: Number,
    required: true
 },
//  category, description, image, rating, inStock, reviews,
 category:{
    type: String,
    required: true
 },
 description:{
    type: String,
    required: true
 },
 image:{
    type: String,
    required: true
 },
 rating:{
    type: Number,
    required: true
 },
 inStock:{
    type: Boolean,
    required: true
 },
 reviews:{
    type: Number,
    required: true
 },
}, {timestamps: true});

const Product = mongoose.models('product', productSchema)

module.exports = Product