import React, { useState } from "react";
import { toast } from "react-toastify";
import { placeOrder } from "../api"; // Import API function

const DEFAULT_IMAGE = "/electronic.jpg"; // Ensure it's in the public folder

const ProductCard = ({ product }) => {
  const [loading, setLoading] = useState(false);

  const handlePlaceOrder = async () => {
    if (product.stock === 0) {
      toast.error("⚠️ Out of stock!", { position: "bottom-right" });
      return;
    }

    setLoading(true);
    try {
      const response = await placeOrder(product.name, 1); // Ordering 1 unit

      if (response.order_id) {
        toast.success(`🎉 Order #${response.order_id} placed successfully!`, { position: "bottom-right" });
      } else {
        toast.error("❌ Order failed. Try again.", { position: "bottom-right" });
      }
    } catch (error) {
      toast.error("❌ Order could not be placed.", { position: "bottom-right" });
    }
    setLoading(false);
  };

  return (
    <div className="relative bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
      {/* Product Image */}
      <div className="relative overflow-hidden rounded-t-xl">
        <img
          className="w-full h-56 object-cover transition-transform duration-500 hover:scale-105"
          src={product.image || DEFAULT_IMAGE}
          alt={product.name}
        />
        {product.onSale && (
          <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
            Sale
          </span>
        )}
      </div>

      {/* Product Info */}
      <div className="p-5">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white truncate">
          {product.name}
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 truncate">
          {product.category || "No Category"}
        </p>

        {/* Price & Stock Status */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-xl font-bold text-green-600 dark:text-green-400">
            ${product.price.toFixed(2)}
          </span>
          <span
            className={`px-3 py-1 text-xs font-semibold rounded-full animate-pulse ${
              product.stock > 10
                ? "bg-green-100 text-green-700"
                : product.stock > 0
                ? "bg-yellow-100 text-yellow-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {product.stock > 0 ? `${product.stock} left` : "Out of stock"}
          </span>
        </div>

        {/* Place Order Button */}
        <button
          onClick={handlePlaceOrder}
          className={`w-full py-3 rounded-lg font-medium transition-all transform ${
            product.stock > 0
              ? "bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:to-blue-600 active:scale-95 focus:ring-2 focus:ring-blue-400"
              : "bg-gray-400 cursor-not-allowed text-gray-200"
          }`}
          disabled={product.stock === 0 || loading}
        >
          {loading ? "Processing..." : product.stock > 0 ? "Place Order" : "Sold Out"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
