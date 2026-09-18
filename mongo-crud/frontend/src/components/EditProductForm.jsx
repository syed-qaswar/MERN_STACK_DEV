// File: components/EditProductForm.jsx
// Form to edit existing products

import { useState, useEffect } from "react";

function EditProductForm({ productId, onProductUpdated, onClose }) {

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
    const [loading, setLoading] = useState(true);

    // ✅ READ SINGLE - Fetch product to prefill form
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                // GET /api/products/:id
                const response = await fetch(
                    `http://localhost:5000/api/products/${productId}`
                );
                const data = await response.json();

                if (response.ok) {
                    setProduct(data.data);
                }
            } catch (error) {
                setMessage("❌ Error loading product");
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [productId]);

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setProduct({
            ...product,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    // ✅ UPDATE - Submit form
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);

            // PUT /api/products/:id
            const response = await fetch(
                `http://localhost:5000/api/products/${productId}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(product)
                }
            );

            const data = await response.json();

            if (response.ok) {
                setMessage("✅ Product updated successfully!");

                setTimeout(() => {
                    onProductUpdated();
                    onClose();
                }, 1500);
            } else {
                setMessage("❌ " + data.message);
            }
        } catch (error) {
            setMessage("❌ Error: " + error.message);
        } finally {
            setLoading(false);
        }
    };

    if (loading && !product.title) {
        return (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
                <div className="bg-white rounded-lg p-8">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                    <p className="text-gray-600 mt-4">Loading product...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">

                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    ✏️ Edit Product
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
                            placeholder="Product title"
                            value={product.title}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        {/* Price */}
                        <input
                            type="number"
                            name="price"
                            placeholder="Price"
                            value={product.price}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                        />

                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                        {/* Category */}
                        <input
                            type="text"
                            name="category"
                            placeholder="Category"
                            value={product.category}
                            onChange={handleChange}
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

                    {/* Buttons */}
                    <div className="flex gap-3 mt-6">
                        <button
                            type="submit"
                            disabled={loading}
                            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition disabled:opacity-50"
                        >
                            {loading ? "Updating..." : "✅ Update Product"}
                        </button>

                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 bg-gray-400 hover:bg-gray-500 text-white font-bold py-3 px-4 rounded-lg transition"
                        >
                            ❌ Cancel
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default EditProductForm;