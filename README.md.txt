✅ 📄 README.md
Markdown# 🛒 Advanced E-Commerce Management System (MongoDB)## 📌 Project OverviewThis project is a backend-based **E-Commerce Management System** developed using **Node.js, Express.js, and MongoDB**.  It demonstrates how a modern e-commerce platform can handle large volumes of diverse and dynamic data using a NoSQL database.The system manages:- Products (multiple categories)- Users (with addresses and cart)- Orders (real transaction data)The focus of this project is **MongoDB schema design, data flexibility, and CRUD operations**.---## 🎯 Objectives- Build a scalable e-commerce backend system  - Implement full **CRUD operations**  - Use MongoDB to handle dynamic product attributes  - Demonstrate **NoSQL advantages over relational databases**  - Work with a **large realistic dataset**  ---## 🧰 Tech Stack- **Node.js** – Backend runtime  - **Express.js** – API framework  - **MongoDB** – NoSQL Database  - **Mongoose** – ODM (Object Data Modeling)  - **MongoDB Compass** – Database GUI  ---## 📂 Project StructureShow less
config/
models/
controllers/
routes/
server.js
package.json
README.md

---

## 🧱 Database Design

The system uses **three main collections**:

---

### 👤 Users Collection

Stores user information, addresses, and cart:

```json
{
  "name": "User 1",
  "email": "user1@gmail.com",
  "addresses": [
    {
      "street": "Street 1",
      "city": "Karachi"
    }
  ],
  "cart": []
}

✅ Embedded documents used
✅ No joins required

📦 Products Collection
Stores products with a flexible schema:
JSON{  "name": "Laptop",  "price": 120000,  "category": "Electronics",  "specs": {    "RAM": "8GB",    "Storage": "512GB"  }}Show more lines
✅ Different products → different attributes
✅ Demonstrates MongoDB flexibility

🧾 Orders Collection
Stores order data with embedded items:
JSON{  "items": [    {      "name": "Laptop",      "price": 120000,      "quantity": 1    }  ],  "shippingAddress": {    "city": "Karachi"  },  "totalAmount": 120000}Show more lines
✅ Denormalized structure
✅ No joins required

📊 Dataset Description
The system uses a large dataset:

✅ 30+ Products (multiple categories)
✅ 10 Users
✅ 15 Orders

Categories Included:

Electronics
Clothing
Footwear
Accessories
Home Appliances
Books


🔗 API Endpoints
📦 Products

GET /products → Get all products
POST /products → Add product
PUT /products/:id → Update product
DELETE /products/:id → Delete product
GET /products/seed → Insert bulk data


👤 Users

GET /users → Get users
POST /users → Create user
GET /users/seed-users → Insert users


🧾 Orders

POST /orders → Create order
GET /orders/seed-orders → Insert orders


🚀 How to Run the Project

Install dependencies:

Shellnpm installShow more lines

Run server:

Shellnode server.jsShow more lines

Open browser:

http://localhost:3000


✅ MongoDB Features Used

Flexible Schema Design
Embedded Documents
Denormalization
No Join Operations
JSON-based Storage


💡 Key Highlights

Real-world e-commerce dataset
Multiple collections with relationships
Fully implemented CRUD system
Performance-efficient design
Clean backend architecture


🎓 Academic Requirement Fulfillment
All required CRUD operations (Create, Read, Update, Delete) have been successfully implemented using MongoDB, fulfilling the requirements of the ADBMS project.

👨‍💻 Authors

Shifa Batool (Group Leader)
Alia Kalwar


⭐ Final Note
This project demonstrates how MongoDB can efficiently handle complex, dynamic, and large-scale data for real-world applications like e-commerce systems.