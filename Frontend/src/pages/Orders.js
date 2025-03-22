import { useState, useEffect } from "react";
import { getOrders } from "../api";

const Orders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        getOrders().then(setOrders);
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl">
                <h1 className="text-2xl font-semibold text-center text-gray-700 mb-6">Orders</h1>
                {orders.length === 0 ? (
                    <p className="text-center text-gray-500">No orders found.</p>
                ) : (
                    <ul className="divide-y divide-gray-300">
                        {orders.map((o) => (
                            <li key={o.id} className="p-4 flex justify-between items-center">
                                <div>
                                    <p className="text-lg font-medium text-gray-800">Order #{o.id}</p>
                                    <p className="text-sm text-gray-600">{o.product} - {o.quantity} pcs</p>
                                </div>
                                <span className={`px-3 py-1 rounded-full text-sm font-medium ${o.status === "Pending" ? "bg-yellow-100 text-yellow-800" : "bg-green-100 text-green-800"}`}>
                                    {o.status}
                                </span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Orders;
