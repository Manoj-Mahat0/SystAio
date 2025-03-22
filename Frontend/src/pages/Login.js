import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../api";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async () => {
        if (!email || !password) {
            alert("Please enter both email and password.");
            return;
        }

        setLoading(true);
        try {
            const response = await login(email, password);
            localStorage.setItem("adminToken", response.access_token);
            alert("Login successful!");
            navigate("/admin");
        } catch (error) {
            alert(error.detail || "Invalid credentials.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Admin Login</h2>
                <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 border rounded-lg mb-4 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                />
                <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-3 border rounded-lg mb-4 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                />
                <button
                    onClick={handleLogin}
                    disabled={loading}
                    className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-300 disabled:bg-gray-400"
                >
                    {loading ? "Logging in..." : "Login"}
                </button>
            </div>
        </div>
    );
};

export default Login;
