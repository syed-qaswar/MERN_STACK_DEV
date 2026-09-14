const express = require("express");
const mongoose = require("mongoose");

const app = express();

const PORT = 5000;

const MONGO_URI = "connection string";

mongoose.connect(MONGO_URI)
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