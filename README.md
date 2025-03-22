# 🛍 E-Commerce Platform (FastAPI + React)

A full-stack e-commerce application built with FastAPI (backend) and React (frontend).

## 🚀 Features
- ✅ User Authentication (Signup & Login)
- ✅ Product Management (Add, Update, Delete, View)
- ✅ Order Management (Place Order, Admin Approval)
- ✅ Secure API with JWT Authentication
- ✅ Fully Responsive UI with Tailwind CSS
- ✅ Deployed on Render & Vercel

## 📌 Setup & Run Instructions

### 🔹 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-repo.git
cd your-repo
```

### 🧐 Backend Setup (FastAPI)

#### 🔹 2️⃣ Install Dependencies
```sh
cd backend
pip install -r requirements.txt
```

#### 🔹 3️⃣ Set Up Environment Variables
```sh
DATABASE_URL=<your_database_url>
SECRET_KEY=your_secret_key
ALGORITHM=HS256
```

#### 🔹 4️⃣ Run FastAPI Backend
```sh
uvicorn main:app --host 0.0.0.0 --port 8000
```
✅ Backend should now be running at [http://localhost:8000](http://localhost:8000)

### 🎨 Frontend Setup (React)

#### 🔹 5️⃣ Install Frontend Dependencies
```sh
cd frontend
npm install
```

#### 🔹 6️⃣ Set Up API URL
```js
export const API_URL = "http://localhost:8000/api";
```

#### 🔹 7️⃣ Start React Frontend
```sh
npm start
```
✅ Frontend should now be running at [http://localhost:3000](http://localhost:3000)

## 👤 User Authentication Process

### 🔹 8️⃣ Create an Account (Signup)
```http
POST http://localhost:8000/api/signup
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}
```

### 🔹 9️⃣ Login in Frontend
```json
{
  "email": "user@example.com",
  "password": "string"
}
```

## 📝 API Endpoints

| Method | Endpoint             | Description              |
|--------|----------------------|--------------------------|
| POST   | `/api/signup`        | Register a new user     |
| POST   | `/api/login`         | Login with email & password |
| GET    | `/api/products`      | Fetch all products      |
| POST   | `/api/order/place`   | Place an order          |
| PUT    | `/api/order/accept`  | Admin accepts order     |
| GET    | `/api/orders`        | View all orders         |

## 🤦🏻‍♂️ Tech Stack
- **Backend:** FastAPI, SQLAlchemy, JWT Auth
- **Frontend:** React, Axios, Tailwind CSS
- **Database:** MySQL (Hosted on FreeDB)
- **Deployment:** Render (Backend) & Vercel (Frontend)

## ✨ Contributors
- **Manoj Mahato**

