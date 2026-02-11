const express = require('express');
const router = express.Router();
const validate = require('../middleware/validate');

let users = [];

// GET all users
router.get('/', (req, res) => {
  res.json(users);
});

// POST new user
router.post('/', validate(['name', 'email']), (req, res) => {

  const newUser = {
    id: users.length + 1,
    name: req.body.name,
    email: req.body.email
  };

  users.push(newUser);

  res.status(201).json(newUser);
});

module.exports = router;
