import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavigationBar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Orders from "./pages/Orders";
import Admin from "./pages/Admin";
import Login from "./pages/Login";

function App() {
    console.log("✅ App.js is rendering!"); // Debug log

    return (
        <Router>
            <div>
                <NavigationBar />
                <ToastContainer position="bottom-right" autoClose={3000} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/orders" element={<Orders />} />
                    <Route path="/admin" element={<Admin />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
