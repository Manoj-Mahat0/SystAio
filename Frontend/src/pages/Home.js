import { useState, useEffect } from "react";
import { getProducts } from "../api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HeroSection from "../components/HeroSection";
import ProductCard from "../components/Cards"; // Import ProductCard

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts()
            .then(setProducts)
            .catch(() => {
                toast.error("❌ Failed to load products", { position: "bottom-right" });
            });
    }, []);

    return (
        <>
            <HeroSection />
            <div className="container mx-auto mt-8 px-4">
                {/* Title */}
                <h1 className="text-4xl font-extrabold text-center mb-8 text-gray-900 dark:text-white">
                    Featured Products
                </h1>

                {/* Product Grid */}
                <div className="flex flex-wrap justify-center gap-6">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
            </div>

            {/* Toast Container */}
            <ToastContainer position="bottom-right" autoClose={3000} />
        </>
    );
};

export default Home;
