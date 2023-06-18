import express from "express";
import dotenv from "dotenv";
dotenv.config();
import products from "./data/products.js";

// I want the backend running on 5000
const port = process.env.PORT || 5000;

// Initialize express
const app = express();

// create a first Route so we are making a get request
app.get("/", (req, res) => {
  res.send("API is running...");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

// start a server up
app.listen(port, () => console.log(`Server running on port ${port}`));
