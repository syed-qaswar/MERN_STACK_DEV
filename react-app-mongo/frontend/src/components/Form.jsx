import { useState } from "react";

function Form({ onProductAdded }) {  // ← Add this prop

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

    const [message, setMessage] = useState("");  // ← Add feedback

    const handleChange = (e) => {
        const { name, value } = e.target;

        setProduct({
            ...product,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:5000/api/products", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(product)
            });

            const data = await response.json();

            if (response.ok) {
                // ✅ Show success message
                setMessage("✅ Product added successfully!");
                
                // ✅ Clear form
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

                // ✅ Call parent function to refresh products
                if (onProductAdded) {
                    onProductAdded();
                }

                // Clear message after 3 seconds
                setTimeout(() => setMessage(""), 3000);
            } else {
                setMessage("❌ Error adding product");
            }
        } catch (error) {
            setMessage("❌ " + error.message);
        }
    };

    return (
        <div className="max-w-2xl mx-auto mt-12 p-8 bg-white rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Add New Product</h2>

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

                <input
                    type="text"
                    name="title"
                    placeholder="Product title"
                    value={product.title}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    value={product.price}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                    type="text"
                    name="category"
                    placeholder="Category"
                    value={product.category}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                    type="text"
                    name="description"
                    placeholder="Description"
                    value={product.description}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                    type="text"
                    name="image"
                    placeholder="Image URL"
                    value={product.image}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                    type="number"
                    step="0.1"
                    name="rating"
                    placeholder="Rating (0-5)"
                    value={product.rating}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                    type="number"
                    name="reviews"
                    placeholder="Number of reviews"
                    value={product.reviews}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                />

                <button 
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition"
                >
                    Add Product
                </button>

            </form>
        </div>
    );
}

export default Form;