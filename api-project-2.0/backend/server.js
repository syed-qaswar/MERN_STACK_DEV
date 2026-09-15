const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();

const app = express();

const PORT = 5000;

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
    res.send("Server is running");
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});