# ADBMS-E-COMMERCE-SYSTEM-PROJECT
Advanced E-Commerce Management System using MongoDB


🛒 Advanced E-Commerce Management System (MongoDB)#


📌 Project Overview

This project is a **backend-based Advanced E-Commerce Management System** developed using **Node.js, Express.js, and MongoDB**.


The system demonstrates how modern e-commerce platforms handle a large amount of diverse and dynamic data using a **NoSQL database**.



It manages:- Products from multiple categories- Users with addresses- Orders with real transaction dataThe main focus of this project is on **MongoDB schema design, flexibility, and implementation of CRUD operations**.---## 🎯 Objectives- Develop a scalable e-commerce backend system  - Implement all **CRUD operations (Create, Read, Update, Delete)**  - Use MongoDB to manage flexible and dynamic product data  - Handle a **large realistic dataset**  - Demonstrate advantages of NoSQL over relational databases  ---## 🧰 Technology Stack- **Node.js** – Backend runtime environment  - **Express.js** – API framework  - **MongoDB** – NoSQL database  - **Mongoose** – Object Data Modeling (ODM)  - **MongoDB Compass** – Database visualization tool  ---## 📂 Project StructureShow more lines
config/
models/
controllers/
routes/
server.js
package.json
README.md

---

## 🧱 Database Design

The system is based on **three main MongoDB collections**:

---

### 👤 Users Collection

Stores user details along with embedded addresses and cart.

```json
{
  "name": "User 1",
  "email": "user1@gmail.com",
  "password": "123",
  "addresses": [
    {
      "street": "Street 1",
      "city": "Karachi",
      "postalCode": "74000"
    }
  ],
  "cart": []
}

✔ Uses embedded documents
✔ Improves performance
✔ Eliminates need for joins

📦 Products Collection
Stores product data with a flexible schema.
JSON{  "name": "Product 1",  "price": 1500,  "category": "Clothing",  "stock": 20,  "specs": {    "Size": "M",    "Material": "Cotton"  }}Show more lines
Example (Electronics):
JSON{  "name": "Product 2",  "category": "Electronics",  "specs": {    "RAM": "8GB",    "Storage": "256GB"  }}Show more lines
✔ Flexible specs field
✔ Supports different product types
✔ No schema change required

🧾 Orders Collection
Stores orders with embedded product items.
JSON{  "items": [    {      "name": "Product 1",      "price": 1500,      "quantity": 2    }  ],  "shippingAddress": {    "street": "Street 1",    "city": "Karachi"  },  "totalAmount": 3000}Show more lines
✔ Uses denormalization
✔ Faster queries
✔ No JOIN operations

📊 Dataset Description
A large dataset was created to simulate a real-world environment:

✅ 30+ Products
✅ 10 Users
✅ 15 Orders

Product Categories:

Electronics
Clothing
Footwear
Accessories
Home Appliances
Books

Each product includes unique attributes stored in the specs field, demonstrating MongoDB’s flexibility.

🔗 API Endpoints
📦 Products

GET /products → Retrieve all products
POST /products → Add new product
PUT /products/:id → Update product
DELETE /products/:id → Delete product
GET /products/seed → Insert sample dataset


👤 Users

GET /users → Retrieve users
POST /users → Create user
GET /users/seed-users → Insert sample users


🧾 Orders

POST /orders → Create order
GET /orders/seed-orders → Insert sample orders


🚀 How to Run the Project

Install dependencies:

Shellnpm installShow more lines

Start the server:

Shellnode server.jsShow more lines

Open browser:

http://localhost:3000


Insert sample data:

/products/seed
/users/seed-users
/orders/seed-orders


✅ MongoDB Features Used

Flexible Schema Design
Embedded Documents (User addresses, cart)
Denormalization (Orders)
No Join Operations
JSON-based document structure


💡 Key Highlights

Large realistic dataset
Multiple collections with relationships
Fully implemented CRUD system
Efficient data design
Scalable architecture


🎓 Academic Requirement Fulfillment
All CRUD operations (Create, Read, Update, Delete) have been successfully implemented using MongoDB, fulfilling the ADBMS project requirements.

👨‍💻 Authors

Shifa Batool 
Alia Kalwar


⭐ Final Note
This project highlights how MongoDB can efficiently handle dynamic and complex data structures, making it highly suitable for real-world applications such as e-commerce systems.
This repository includes the complete project files, report, and screenshots compressed in a ZIP file for easy access.

