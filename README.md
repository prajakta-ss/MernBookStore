A secure, full-stack BookStore web application built using the MERN stack (MongoDB, Express, React, Node.js). This app allows users to register, log in, browse books.
🚀 Features
✅ User registration & login (JWT authentication)
📚 Browse book catalog
🔐 Secure routes using JWT middleware
📦 Persistent storage using MongoDB

🛠️ Tech Stack
Frontend: React (Vite or Create React App)

Backend: Node.js + Express.js

Database: MongoDB + Mongoose

Authentication: JWT (JSON Web Token)

Styling: CSS / Tailwind 

HTTP Client: Axios / Fetch API

🧩 Project Structure
📁 Backend (/backend)

backend/
├── controllers/      # user.controller.js book.controller.js
├── models/           # user.model.js, book.model.js
├── routes/           #  user.routes.js, book.routes.js

📁 Frontend (/frontend)

frontend/
├── src/
│   ├── components/          # Banner.jsx,cards.jsx,Contact.jsx,Course.js,Footer.jsx,FreeBook.jsx,Login.jsx,Logout.jsx,navbar.jsx,Signup.jsx
│   ├── contacts/            # Contacts.jsx
│   ├── context/             # AuthProvider.jsx
|   ├── courses/             #Course.jsx
|   ├── courses/             #Home.jsx
│   ├── App.jsx
│   └── main.jsx 
🔧 Setup Instructions
✅ Prerequisites
Node.js (v18+)

MongoDB (local or Atlas)

⚙️ Backend Setup
bash
Copy
Edit
cd backend
npm install
🔑 Configure .env file
env
Copy
Edit
PORT=5000
MONGO_URI=mongodb://localhost:27017/bookstore_db
JWT_SECRET=your_secret_key
JWT_EXPIRES_IN=3600000
▶️ Run the server
bash
Copy
Edit
npm start
Server will run at: http://localhost:5000

📱 Frontend Setup
bash
Copy
Edit
cd frontend
npm install
🔧 Configure API URL in api.js
js
Copy
Edit
const API_URL = 'http://localhost:5000/api';
▶️ Run React App
bash
Copy
Edit
npm start
Frontend will run at: http://localhost:3000

🔐 JWT Authentication Flow
User logs in — server returns a JWT token.

React stores the token in localStorage or context.

For protected routes (like cart, orders), token is sent in headers:

http
Copy
Edit
Authorization: Bearer <token>
📤 API Endpoints (Sample)
Method	Endpoint	Description
POST	/api/auth/register	Register user
POST	/api/auth/login	Login (returns JWT)
GET	/api/books	Fetch all books
POST	/api/cart	Add book to cart
GET	/api/orders	Get user's order history

📸 Snapshots
📷 Screenshot album: Imgur BookStore Snapshots

🧪 Sample Postman JSON Payloads
1. Register
json
Copy
Edit
POST /api/auth/register
{
  "username": "jane",
  "email": "jane@example.com",
  "password": "123456"
}
2. Login
json
Copy
Edit
POST /api/auth/login
{
  "email": "jane@example.com",
  "password": "123456"
}
Use the returned token in headers:

makefile
Copy
Edit
Authorization: Bearer <token>
3. Add Book (Admin only)
json
Copy
Edit
POST /api/books
{
  "title": "MERN Mastery",
  "author": "J. Dev",
  "price": 499,
  "description": "Learn fullstack development"
}
Let me know if you want:

Swagger API docs

Dockerized setup

Unit testing setup (Jest, Mocha)

Deployment guide (Render, Vercel, Heroku, etc.)








