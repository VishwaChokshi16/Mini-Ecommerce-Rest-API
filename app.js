const express = require('express');
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Import Routes
const productRoutes = require('./routes/products');
const userRoutes = require('./routes/users');
const cartRoutes = require('./routes/cart');
const orderRoutes = require('./routes/orders');

// Use Routes
app.use('/products', productRoutes);
app.use('/users', userRoutes);
app.use('/cart', cartRoutes);
app.use('/orders', orderRoutes);

// Global Error Handling Middleware
const errorHandler = require('./middleware/errorHandler');
app.use(errorHandler);

// Start server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
