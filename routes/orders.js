const express = require('express');
const router = express.Router();
const validate = require('../middleware/validate');

let orders = [];

// GET all orders
router.get('/', (req, res) => {
  res.json(orders);
});

// PLACE order
router.post('/', validate(['userId', 'totalAmount']), (req, res) => {

  const newOrder = {
    id: orders.length + 1,
    userId: req.body.userId,
    totalAmount: req.body.totalAmount,
    date: new Date()
  };

  orders.push(newOrder);

  res.status(201).json(newOrder);
});

module.exports = router;
