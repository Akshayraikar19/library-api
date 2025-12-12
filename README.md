📚 Library Management API

A simple backend service to manage Authors and Books, built using Node.js, Express, and MongoDB.

📘 Objective

This project aims to showcase:

Backend architecture using Node.js & Express

Database design and relationships using MongoDB & Mongoose

Manual CRUD operations without auto-generated packages

Input validation using express-validator

Pagination support

Clean, production-ready code

🏗️ Features
Authors

Create Author

View All Authors

Books

Create Book

View All Books (with Author details)

Search Books by Author Name

Update Book

Delete Book

Pagination support (GET /books?page=1&limit=5)

Validation & Error Handling

Input validation using express-validator

Error messages for invalid data or missing resources

Environment

Configurable via .env using dotenv

🧱 Tech Stack
Component	Technology
Backend	Node.js, Express.js
Database	MongoDB
ODM	Mongoose
Validation	express-validator
Environment	dotenv
📦 Project Setup
1️⃣ Clone the Repository
git clone https://github.com/Akshayraikar19/library-api.git
cd library

2️⃣ Install Dependencies
npm install

3️⃣ Setup Environment Variables

Create a .env file in the project root:

PORT=5004
DB_URL=mongodb://127.0.0.1:27017/library-api

4️⃣ Start MongoDB

Ensure MongoDB is running using mongod or via MongoDB Compass.

5️⃣ Start the Server
npm run dev


Expected Output

server running on port 5004
connected to db

📁 Folder Structure
project/
├── app/
│   ├── controllers/
│   │   ├── authorController.js
│   │   └── bookController.js
│   ├── models/
│   │   ├── Author.js
│   │   └── Book.js
│   ├── routes/
│   │   ├── authorRoutes.js
│   │   └── bookRoutes.js
│   ├── validations/
│       └── bookValidation.js
├── config/
│   └── db.js
├── server.js
├── package.json
└── README.md

🔹 API Endpoints
1️⃣ Create Author

POST /authors
Request Body

{
  "name": "Chetan Bhagat",
  "bio": "Indian author of bestselling novels."
}


Success Response (201)

{
  "_id": "678a45f1289b02f3c1b099c4",
  "name": "Chetan Bhagat",
  "bio": "Indian author of bestselling novels.",
  "createdAt": "2025-01-01T12:20:30.123Z",
  "updatedAt": "2025-01-01T12:20:30.123Z",
  "__v": 0
}

2️⃣ Get All Authors

GET /authors
Success Response (200)

[
  {
    "_id": "678a45f1289b02f3c1b099c4",
    "name": "Chetan Bhagat",
    "bio": "Indian author of bestselling novels.",
    "createdAt": "2025-01-01T12:20:30.123Z"
  }
]

3️⃣ Create Book

POST /books
Request Body

{
  "title": "2 States",
  "publishedYear": 2009,
  "author": "678a45f1289b02f3c1b099c4"
}


Validation Error Example

{
  "errors": [
    {
      "msg": "Author ID must be a valid Mongo ID",
      "param": "author",
      "location": "body"
    }
  ]
}


If Author Does Not Exist (404)

{
  "message": "Author not found"
}


Success Response (201)

{
  "_id": "678a4649289b02f3c1b099d1",
  "title": "2 States",
  "publishedYear": 2009,
  "author": "678a45f1289b02f3c1b099c4",
  "createdAt": "2025-01-01T12:30:15.123Z",
  "updatedAt": "2025-01-01T12:30:15.123Z"
}

4️⃣ Get All Books (with Pagination)

GET /books?page=1&limit=5
Success Response (200)

[
  {
    "_id": "678a4649289b02f3c1b099d1",
    "title": "2 States",
    "publishedYear": 2009,
    "author": {
      "_id": "678a45f1289b02f3c1b099c4",
      "name": "Chetan Bhagat",
      "bio": "Indian author of bestselling novels."
    },
    "createdAt": "2025-01-01T12:30:15.123Z"
  }
]

5️⃣ Search Books by Author Name

GET /books/search?name=chetan
Success Response (200)

[
  {
    "_id": "678a4649289b02f3c1b099d1",
    "title": "2 States",
    "publishedYear": 2009,
    "author": {
      "_id": "678a45f1289b02f3c1b099c4",
      "name": "Chetan Bhagat"
    }
  }
]


If No Author Found

[]

6️⃣ Update Book

PUT /books/:id
Request Body

{
  "title": "Two States - Updated"
}


Success Response (200)

{
  "_id": "678a4649289b02f3c1b099d1",
  "title": "Two States - Updated",
  "publishedYear": 2009,
  "author": "678a45f1289b02f3c1b099c4",
  "updatedAt": "2025-01-01T12:40:30.123Z"
}

7️⃣ Delete Book

DELETE /books/:id
Success Response (200)

{
  "message": "Book deleted successfully"
}

⚡ Notes

All requests and responses use JSON format.

Input validation is implemented for required fields and MongoDB IDs.

Pagination defaults: page=1, limit=5 if not specified.
