const express = require('express');
const router = express.Router();
const validate = require('../middleware/validate');

let cart = [];

// GET cart
router.get('/', (req, res) => {
  res.json(cart);
});

// ADD to cart
router.post('/', validate(['userId', 'productId', 'quantity']), (req, res) => {

  const cartItem = {
    userId: req.body.userId,
    productId: req.body.productId,
    quantity: req.body.quantity
  };

  cart.push(cartItem);

  res.status(201).json({
    message: "Item added to cart",
    cartItem
  });
});

module.exports = router;
    