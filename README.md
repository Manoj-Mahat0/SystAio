<h1>🛍 E-Commerce Platform (FastAPI + React)</h1>
        <p>A full-stack e-commerce application built with FastAPI (backend) and React (frontend).</p>
        
        <h2>🚀 Features</h2>
        <ul>
            <li>✅ User Authentication (Signup & Login)</li>
            <li>✅ Product Management (Add, Update, Delete, View)</li>
            <li>✅ Order Management (Place Order, Admin Approval)</li>
            <li>✅ Secure API with JWT Authentication</li>
            <li>✅ Fully Responsive UI with Tailwind CSS</li>
            <li>✅ Deployed on Render & Vercel</li>
        </ul>
        
        <h2>📌 Setup & Run Instructions</h2>
        <h3>🔹 1️⃣ Clone the Repository</h3>
        
        
        <h3>🛠 Backend Setup (FastAPI)</h3>
        <h4>🔹 2️⃣ Install Dependencies</h4>
        <pre><code>cd backend
pip install -r requirements.txt</code></pre>
        
        <h4>🔹 3️⃣ Set Up Environment Variables</h4>
        <pre><code>DATABASE_URL = 
SECRET_KEY = your_secret_key
ALGORITHM = HS256</code></pre>
        
        <h4>🔹 4️⃣ Run FastAPI Backend</h4>
        <pre><code>uvicorn main:app --host 0.0.0.0 --port 8000</code></pre>
        <p>✅ Backend should now be running at <a href="http://localhost:8000">http://localhost:8000</a></p>
        
        <h3>🎨 Frontend Setup (React)</h3>
        <h4>🔹 5️⃣ Install Frontend Dependencies</h4>
        <pre><code>cd frontend
npm install</code></pre>
        
        <h4>🔹 6️⃣ Set Up API URL</h4>
        <pre><code>export const API_URL = "http://localhost:8000/api";</code></pre>
        
        <h4>🔹 7️⃣ Start React Frontend</h4>
        <pre><code>npm start</code></pre>
        <p>✅ Frontend should now be running at <a href="http://localhost:3000">http://localhost:3000</a></p>
        
        <h2>👤 User Authentication Process</h2>
        <h3>🔹 8️⃣ Create an Account (Signup)</h3>
        <pre><code>POST http://localhost:8000/api/signup
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}</code></pre>
        
        <h3>🔹 9️⃣ Login in Frontend</h3>
        <pre><code>{
  "email": "user@example.com",
  "password": "string"
}</code></pre>
        
        <h2>📜 API Endpoints</h2>
        <table border="1" cellpadding="5" cellspacing="0">
            <tr><th>Method</th><th>Endpoint</th><th>Description</th></tr>
            <tr><td>POST</td><td>/api/signup</td><td>Register a new user</td></tr>
            <tr><td>POST</td><td>/api/login</td><td>Login with email & password</td></tr>
            <tr><td>GET</td><td>/api/products</td><td>Fetch all products</td></tr>
            <tr><td>POST</td><td>/api/order/place</td><td>Place an order</td></tr>
            <tr><td>PUT</td><td>/api/order/accept</td><td>Admin accepts order</td></tr>
            <tr><td>GET</td><td>/api/orders</td><td>View all orders</td></tr>
        </table>
        
        <h2>🛠 Tech Stack</h2>
        <ul>
            <li>Backend: FastAPI, SQLAlchemy, JWT Auth</li>
            <li>Frontend: React, Axios, Tailwind CSS</li>
            <li>Database: MySQL (Hosted on FreeDB)</li>
            <li>Deployment: Render (Backend) & Vercel (Frontend)</li>
        </ul>
        
        <h2>✨ Contributors</h2>
        <p>Manoj Mahato</p>
