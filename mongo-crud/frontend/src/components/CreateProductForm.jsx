// File: components/CreateProductForm.jsx
// Form to create new products

import { useState } from "react";

function CreateProductForm({ onProductCreated }) {

    const [product, setProduct] = useState({
        title: "",
        price: "",
        category: "",
        description: "",
        image: "",
        rating: "",
        inStock: true,
        reviews: ""
    });

    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setProduct({
            ...product,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            // ✅ POST REQUEST (CREATE)
            const response = await fetch(
                "http://localhost:5000/api/products",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(product)
                }
            );

            const data = await response.json();

            if (response.ok) {
                setMessage("✅ Product created successfully!");

                // Clear form
                setProduct({
                    title: "",
                    price: "",
                    category: "",
                    description: "",
                    image: "",
                    rating: "",
                    inStock: true,
                    reviews: ""
                });

                // Refresh products list
                if (onProductCreated) {
                    onProductCreated();
                }

                setTimeout(() => setMessage(""), 3000);
            } else {
                setMessage("❌ " + data.message);
            }
        } catch (error) {
            setMessage("❌ Error: " + error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-2xl mx-auto mt-12 p-8 bg-white rounded-lg shadow-lg">
            
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
                ➕ Create New Product
            </h2>

            {message && (
                <div className={`p-4 mb-6 rounded-lg ${
                    message.includes("✅")
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                }`}>
                    {message}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    {/* Title */}
                    <input
                        type="text"
                        name="title"
                        placeholder="Product title *"
                        value={product.title}
                        onChange={handleChange}
                        required
                        className="border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    {/* Price */}
                    <input
                        type="number"
                        name="price"
                        placeholder="Price *"
                        value={product.price}
                        onChange={handleChange}
                        required
                        className="border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                    />

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    {/* Category */}
                    <input
                        type="text"
                        name="category"
                        placeholder="Category *"
                        value={product.category}
                        onChange={handleChange}
                        required
                        className="border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    {/* Rating */}
                    <input
                        type="number"
                        step="0.1"
                        name="rating"
                        placeholder="Rating (0-5)"
                        value={product.rating}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                    />

                </div>

                {/* Description */}
                <textarea
                    name="description"
                    placeholder="Description"
                    value={product.description}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                    rows="3"
                />

                {/* Image URL */}
                <input
                    type="text"
                    name="image"
                    placeholder="Image URL"
                    value={product.image}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                />

                {/* Reviews */}
                <input
                    type="number"
                    name="reviews"
                    placeholder="Number of reviews"
                    value={product.reviews}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                />

                {/* In Stock Checkbox */}
                <div className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        name="inStock"
                        checked={product.inStock}
                        onChange={handleChange}
                        className="w-5 h-5 cursor-pointer"
                    />
                    <label className="text-gray-700 cursor-pointer">
                        In Stock
                    </label>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition disabled:opacity-50"
                >
                    {loading ? "Creating..." : "✅ Create Product"}
                </button>

            </form>
        </div>
    );
}

export default CreateProductForm;