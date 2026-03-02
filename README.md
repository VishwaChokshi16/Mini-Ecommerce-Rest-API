# 🛒 Mini E-Commerce REST API (MongoDB + Mongoose)

A RESTful API built using **Node.js**, **Express.js**, and **MongoDB (Mongoose)** that simulates a basic E-Commerce backend system.

This project demonstrates:

* REST API development
* MVC architecture (Routes → Controllers → Models)
* MongoDB integration using Mongoose
* Schema design and CRUD operations
* Middleware validation
* Global error handling

---

## 🚀 Technologies Used

* Node.js
* Express.js
* MongoDB
* Mongoose
* JavaScript (ES6)
* REST Architecture
* MongoDB Compass (GUI)

---

## 📂 Project Structure

```text
Mini-Ecommerce-Rest-API/
│
├── app.js
├── package.json
├── package-lock.json
├── README.md
│
├── controllers/
│   ├── productController.js
│   ├── userController.js
│   ├── cartController.js
│   └── orderController.js
│
├── models/
│   ├── Product.js
│   ├── User.js
│   ├── Cart.js
│   └── Order.js
│
├── routes/
│   ├── products.js
│   ├── users.js
│   ├── cart.js
│   └── orders.js
│
└── middleware/
    ├── validate.js
    └── errorHandler.js
```

---

## 🔌 Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/VishwaChokshi16/Mini-Ecommerce-Rest-API.git
```

### 2️⃣ Navigate to project folder

```bash
cd Mini-Ecommerce-Rest-API
```

### 3️⃣ Install dependencies

```bash
npm install
```

### 4️⃣ Start MongoDB

Ensure MongoDB server is running (MongoDB Compass can be used).

### 5️⃣ Start the server

```bash
node app.js
```

Server will run at:

```
http://localhost:3000
```

---

## 🗄 MongoDB Integration

* MongoDB is connected using **Mongoose**
* No separate config file is used; connection is handled directly in `app.js`
* Database name: `ecommerceDB`
* Collections are created automatically when data is inserted

You can view data using **MongoDB Compass**.

---

## 📌 API Endpoints

### 🛍 Products API

**GET /products**
Returns all products

**POST /products**
Creates a new product

```json
{
  "name": "Laptop",
  "price": 50000
}
```

---

### 👤 Users API

**GET /users**
Returns all users

**POST /users**
Creates a new user

```json
{
  "name": "Vishwa",
  "email": "vishwa@gmail.com"
}
```

---

### 🛒 Cart API

**GET /cart**
Returns cart items

**POST /cart**
Adds item to cart

```json
{
  "userId": "USER_OBJECT_ID",
  "productId": "PRODUCT_OBJECT_ID",
  "quantity": 2
}
```

---

### 📦 Orders API

**GET /orders**
Returns all orders

**POST /orders**
Places a new order

```json
{
  "userId": "USER_OBJECT_ID",
  "totalAmount": 100000
}
```

---

## ⚠ Middleware Validation

If required fields are missing, API returns:

```json
{
  "message": "fieldName is required"
}
```

Example:

```json
{
  "message": "price is required"
}
```

---

## 🚨 Global Error Handling

All server-side errors are handled using a global error handler:

```json
{
  "message": "Internal Server Error",
  "error": "Error details"
}
```

---

## ✅ Features Implemented

✔ RESTful API design
✔ MVC architecture
✔ MongoDB integration with Mongoose
✔ Schema definitions for Product, User, Cart, Order
✔ CRUD operations
✔ Validation middleware
✔ Global error handling
✔ Clean and modular folder structure

---

## 🎯 Purpose of the Project

This project was developed as part of a **backend practical assignment** to demonstrate:

* REST API development
* MongoDB & Mongoose usage
* MVC design pattern
* Middleware-based validation
* Server-side error handling

---

## 📜 License

MIT License

---

## 👨‍💻 Author

**Vishwa Chokshi**


