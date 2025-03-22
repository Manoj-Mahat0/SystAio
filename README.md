🛍 E-Commerce Platform (FastAPI + React)

A full-stack e-commerce application built with FastAPI (backend) and React (frontend).

🚀 Features

✅ User Authentication (Signup & Login)✅ Product Management (Add, Update, Delete, View)✅ Order Management (Place Order, Admin Approval)✅ Secure API with JWT Authentication✅ Fully Responsive UI with Tailwind CSS✅ Deployed on Render & Vercel

📂 Folder Structure

📦 project_root/  
┣ 📂 backend/                # FastAPI Backend  
┃ ┣ 📂 DB/                   # Database Models & Connection  
┃ ┣ 📂 routes/               # API Routes (user, product, order, etc.)  
┃ ┣ 📂 frontend/             # React Build (After `npm run build`)  
┃ ┣ 📜 main.py               # FastAPI Entry Point  
┃ ┣ 📜 auth.py               # Authentication Logic  
┃ ┣ 📜 config.py             # Environment Variables  
┃ ┣ 📜 schemas.py            # Pydantic Schemas  
┃ ┣ 📜 requirements.txt      # Backend Dependencies  
┃ ┗ 📜 .env                  # Environment Variables (not pushed)  
┃  
┣ 📂 frontend/               # React Frontend  
┃ ┣ 📂 src/                  # React Components & Pages  
┃ ┣ 📜 api.js                # API Calls (Axios)  
┃ ┣ 📜 config.js             # API Base URL  
┃ ┣ 📜 App.js                # Main React Component  
┃ ┣ 📜 package.json          # React Dependencies  
┃ ┗ 📜 README.md             # Frontend Documentation  

📌 Setup & Run Instructions

🔹 1️⃣ Clone the Repository

git clone https://github.com/your-username/your-repo.git
cd your-repo

🛠 Backend Setup (FastAPI)

🔹 2️⃣ Install Dependencies

cd backend
pip install -r requirements.txt

🔹 3️⃣ Set Up Environment Variables

Create a .env file inside the backend/ folder and add:

DATABASE_URL = mysql+pymysql://freedb_manoj:ZscbxA%8!BK!7qV@sql.freedb.tech:3306/freedb_ecom_db
SECRET_KEY = manoj
ALGORITHM = HS256

🔹 4️⃣ Run FastAPI Backend

uvicorn main:app --host 0.0.0.0 --port 8000

✅ Backend should now be running at http://localhost:8000✅ API Documentation: http://localhost:8000/docs

🎨 Frontend Setup (React)

🔹 5️⃣ Install Frontend Dependencies

cd frontend
npm install

🔹 6️⃣ Set Up API URL

Edit frontend/src/config.js:

export const API_URL = "http://localhost:8000/api";

🔹 7️⃣ Start React Frontend

npm start

✅ Frontend should now be running at http://localhost:3000

👤 User Authentication Process

🔹 8️⃣ Create an Account (Signup)

Before logging in, the user must create an account via the backend.

Use Postman or cURL to make a POST request:

POST http://localhost:8000/api/signup
Content-Type: application/json

Request Body:

{
  "email": "user@example.com",
  "password": "password123"
}

✅ If successful, the user is registered.

🔹 9️⃣ Login in Frontend

Open the React App (http://localhost:3000).

Use the following sample login credentials:

{
  "email": "user@example.com",
  "password": "string"
}

Click Login → You will be redirected to the Admin Panel or Dashboard.

🌍 Live Demo Links

Backend (FastAPI - Render): https://your-backend.onrender.com

Frontend (React - Vercel): https://your-frontend.vercel.app

API Documentation: https://your-backend.onrender.com/docs

📜 API Endpoints

Method

Endpoint

Description

POST

/api/signup

Register a new user

POST

/api/login

Login with email & password

GET

/api/products

Fetch all products

POST

/api/order/place

Place an order

PUT

/api/order/accept

Admin accepts order

GET

/api/orders

View all orders

🛠 Tech Stack

Backend: FastAPI, SQLAlchemy, JWT Auth

Frontend: React, Axios, Tailwind CSS

Database: MySQL (Hosted on FreeDB)

Deployment: Render (Backend) & Vercel (Frontend)

✨ Contributors

Your Name

🚀 Now your project is ready for submission! 🎯

