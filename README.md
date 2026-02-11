# 🛒 Mini E-Commerce REST API

A simple RESTful API built using **Node.js** and **Express.js** that simulates a basic E-Commerce backend system.

This project demonstrates:

* REST API development
* Modular routing
* Middleware validation
* Global server-side error handling
* Proper HTTP status codes

---

## 🚀 Technologies Used

* Node.js
* Express.js
* JavaScript (ES6)
* REST Architecture
* Middleware

---

## 📂 Project Structure

mini-ecommerce-api
│── app.js
│── package.json
│── package-lock.json
│── README.md
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

---

## 🔌 Installation & Setup

1️⃣ Clone the repository

git clone [https://github.com/VishwaChokshi16/Mini-Ecommerce-Rest-API.git](https://github.com/VishwaChokshi16/Mini-Ecommerce-Rest-API.git)

2️⃣ Navigate into the project folder

cd mini-ecommerce-api

3️⃣ Install dependencies

npm install

4️⃣ Start the server

node app.js

Server will run at:

[http://localhost:3000](http://localhost:3000)

---

## 📌 API Endpoints

### 🛍 Products API

GET /products
Returns all products

POST /products
Creates a new product

Sample Request:
{
"name": "Laptop",
"price": 50000
}

---

### 👤 Users API

GET /users
Returns all users

POST /users
Creates a new user

Sample Request:
{
"name": "Vishwa",
"email": "[vishwa@gmail.com](mailto:vishwa@gmail.com)"
}

---

### 🛒 Cart API

GET /cart
Returns cart items

POST /cart
Adds item to cart

Sample Request:
{
"userId": 1,
"productId": 1,
"quantity": 2
}

---

### 📦 Orders API

GET /orders
Returns all orders

POST /orders
Places a new order

Sample Request:
{
"userId": 1,
"totalAmount": 100000
}

---

## ✅ Features Implemented

✔ RESTful API structure
✔ Modular route handling
✔ JSON parsing middleware
✔ Custom validation middleware
✔ Global error handling middleware
✔ Proper HTTP status codes (200, 201, 400, 500)
✔ Clean folder structure

---

## ⚠ Middleware Validation

If required fields are missing in request body, API returns:

{
"message": "fieldName is required"
}

Example:
If price is missing while creating product:

{
"message": "price is required"
}

---

## 🚨 Error Handling

Global error handler catches server errors and returns:

{
"message": "Internal Server Error",
"error": "Error details"
}

---

## 🎯 Purpose of the Project

This project was developed as part of a backend practical assignment to demonstrate:

* Creation of REST APIs
* Implementation of middleware
* Data validation
* Server-side error handling

---

## 📜 License

MIT License

---

## 👨‍💻 Author

Vishwa Chokshi

If you want, I can also give:

* A shorter version (if your teacher prefers short README)
* Resume one-line description
* Viva questions for this project
