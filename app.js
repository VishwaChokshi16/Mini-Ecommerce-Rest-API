const express = require('express');
const mongoose = require('mongoose');
const errorHandler = require('./middleware/errorHandler');

const app = express();

// JSON middleware
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/ecommerceDB')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Routes
app.use('/products', require('./routes/products'));
app.use('/users', require('./routes/users'));
app.use('/cart', require('./routes/cart'));
app.use('/orders', require('./routes/orders'));

// Error handler
app.use(errorHandler);

// Server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});

