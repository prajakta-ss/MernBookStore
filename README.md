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

cd backend
npm install
🔑 Configure .env file
env

PORT=5000
MONGO_URI=mongodb://localhost:27017/bookstore_db
JWT_SECRET=your_secret_key
JWT_EXPIRES_IN=3600000
▶️ Run the server

npm start
Server will run at: http://localhost:4001

📱 Frontend Setup

cd frontend
npm install
🔧 Configure API URL in api.jsx



▶️ Run React App

npm start
Frontend will run at: http://localhost:5173

🔐 JWT Authentication Flow
User logs in — server returns a JWT token.

React stores the token in localStorage or context.

For protected routes, token is sent in headers:


Authorization: Bearer <token>
📤 API Endpoints (Sample)
Method	Endpoint	Description
POST	/api/auth/register	Register user
POST	/api/auth/login	Login (returns JWT)
GET	/api/books	Fetch all books


📸 Snapshots
📷 Book Page: ![books bk](https://github.com/user-attachments/assets/b1fe8407-ba95-471a-9d68-6f96abedc8cd)

📷 Login Page: ![login bk](https://github.com/user-attachments/assets/ca27049c-0d94-4747-9e4c-27d48674f619)

📷 Contact Page: ![contack bk](https://github.com/user-attachments/assets/2dd909a1-83f2-4dc5-a6ee-8b1cd43a0d42)



