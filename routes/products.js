const express = require('express');
const router = express.Router();
const validate = require('../middleware/validate');

let products = [];

// GET all products
router.get('/', (req, res) => {
  res.json(products);
});

// POST new product
router.post('/', validate(['name', 'price']), (req, res) => {

  const newProduct = {
    id: products.length + 1,
    name: req.body.name,
    price: req.body.price
  };

  products.push(newProduct);

  res.status(201).json(newProduct);
});

module.exports = router;
