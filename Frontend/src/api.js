import axios from "axios";
import API_BASE_URL from "./config";

// 🟢 Admin Login
export const login = async (email, password) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/api/login`, { email, password }, {
            headers: { "Accept": "application/json", "Content-Type": "application/json" }
        });
        localStorage.setItem("adminToken", response.data.access_token);
        return response.data;
    } catch (error) {
        throw error.response?.data || "Login failed";
    }
};

// 🟢 Get All Products


// 🟡 Place an Order
export const placeOrder = async (productName, quantity) => {
    try {
        const response = await fetch(`${API_BASE_URL}/api/order/place`, { // Use backticks here
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                product_name: productName,
                quantity: quantity
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("❌ Order placement failed:", error);
        throw error;
    }
};



export const getProducts = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/api/products`);  // ✅ Ensure `/api/products`
        return response.data;
    } catch (error) {
        console.error("Error fetching products:", error);
        return [];
    }
};

export const getOrders = async () => {
    try {
        const token = localStorage.getItem("adminToken");
        const response = await axios.get(`${API_BASE_URL}/api/orders`, {  // ✅ Ensure `/api/orders`
            headers: { Authorization: `Bearer ${token}` }
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching orders:", error);
        return [];
    }
};


// 🔴 Accept an Order (Admin Only)
export const acceptOrder = async (orderId) => {
    try {
        const token = localStorage.getItem("adminToken");  // Get token from storage
        const url = `${API_BASE_URL}/api/order/accept`;

        const requestBody = {
            order_id: orderId,
            token: token,  // ✅ Include token in body
        };

        console.log("🔷 API Request:", {
            url,
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(requestBody), // Log full request body
        });

        const response = await axios.put(url, requestBody, {
            headers: { "Content-Type": "application/json" },
        });

        console.log("✅ API Response:", response.data);
        return response.data;
    } catch (error) {
        console.error("❌ API Error:", error.response?.data || error.message);
        throw error.response?.data || "Failed to accept order";
    }
};




// 🟠 Add Product
export const addProduct = async (product) => {
    try {
        const token = localStorage.getItem("adminToken");

        const formattedProduct = {
            name: product.name,
            category_name: product.category_name,
            price: parseFloat(product.price),
            stock: parseInt(product.stock, 10),
            token: token // ✅ Include token in request body as required by FastAPI
        };

        console.log("🔹 Sending Request to API:", {
            url: `${API_BASE_URL}/api/product/add`,
            method: "POST",
            headers: { 
                "Accept": "application/json", 
                "Content-Type": "application/json" 
            },
            body: formattedProduct
        });

        const response = await axios.post(`${API_BASE_URL}/api/product/add`, formattedProduct, {
            headers: { 
                "Accept": "application/json", 
                "Content-Type": "application/json" 
            }
        });

        console.log("✅ API Response:", response.data);
        return response.data;
    } catch (error) {
        console.error("❌ API Error Response:", error.response?.data);
        throw error.response?.data || "Failed to add product";
    }
};




// 🟡 Update Product
export const updateProduct = async (id, updatedData) => {
    try {
        const token = localStorage.getItem("adminToken");

        const formattedData = {
            name: updatedData.name,
            category_name: updatedData.category_name || "Uncategorized",  // ✅ Ensure category_name is never missing
            price: parseFloat(updatedData.price),
            stock: parseInt(updatedData.stock, 10),
            token: token
        };

        console.log("🔹 Sending Update Request:", formattedData);

        const response = await axios.put(`${API_BASE_URL}/api/product/update`, formattedData, {
            headers: { "Accept": "application/json", "Content-Type": "application/json" }
        });

        console.log("✅ Product Updated:", response.data);
        return response.data;
    } catch (error) {
        console.error("❌ Update Product Error:", error.response?.data);
        throw error.response?.data || "Failed to update product";
    }
};



// 🔴 Delete Product
export const deleteProduct = async (id) => {
    try {
        const token = localStorage.getItem("adminToken"); // ✅ Fetch token

        if (!token) {
            throw new Error("❌ No admin token found! User must be logged in.");
        }

        const requestData = { id, token };

        console.log("🔹 Sending Delete Request:", requestData);

        const response = await axios.delete(`${API_BASE_URL}/api/product/delete`, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            data: requestData // ✅ Send data in the request body
        });

        console.log("✅ Product Deleted:", response.data);
        return response.data;
    } catch (error) {
        console.error("❌ Delete Product Error:", error.response?.data);
        throw error.response?.data || "Failed to delete product";
    }
};

