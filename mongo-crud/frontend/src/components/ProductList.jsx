// File: components/ProductList.jsx
// Display products and handle delete

import { useState, useEffect } from "react";
import Card from "./Card";

function ProductList({ refreshTrigger, onEditProduct }) {

    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");
    const [loading, setLoading] = useState(true);

    // ✅ READ - Fetch all products
    const fetchProducts = async () => {
        try {
            setLoading(true);
            // GET /api/products
            const response = await fetch("http://localhost:5000/api/products");
            const data = await response.json();

            if (response.ok) {
                setProducts(data.data);
            }
        } catch (error) {
            console.error("Error fetching products:", error);
        } finally {
            setLoading(false);
        }
    };

    // Fetch on mount
    useEffect(() => {
        fetchProducts();
    }, []);

    // Refresh when products change
    useEffect(() => {
        fetchProducts();
    }, [refreshTrigger]);

    // Extract categories
    const categories = [
        "All",
        ...new Set(products.map((product) => product.category))
    ];

    // Filter products
    const filteredProducts = products.filter((product) => {
        const matchesSearch = product.title
            .toLowerCase()
            .includes(search.toLowerCase());

        const matchesCategory =
            category === "All" || product.category === category;

        return matchesSearch && matchesCategory;
    });

    // ✅ DELETE handler (passed to Card)
    const handleDelete = async (productId) => {
        if (window.confirm("Are you sure you want to delete this product?")) {
            try {
                // DELETE /api/products/:id
                const response = await fetch(
                    `http://localhost:5000/api/products/${productId}`,
                    { method: "DELETE" }
                );

                if (response.ok) {
                    alert("✅ Product deleted successfully!");
                    fetchProducts();  // Refresh list
                }
            } catch (error) {
                console.error("Error deleting:", error);
            }
        }
    };

    return (
        <div>

            {/* Header */}
            <header className="bg-gray-900 text-white">
                <div className="max-w-7xl mx-auto px-6 py-5">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-2xl font-bold">📦 MyStore</h1>
                            <p className="text-gray-400 text-sm">Products from MongoDB</p>
                        </div>
                        <div className="text-sm text-gray-300">
                            {products.length} Products
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-6 py-10">

                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-gray-900">📋 Our Products</h2>
                    <p className="text-gray-500 mt-2">Browse and manage our product collection.</p>
                </div>

                {/* Search & Filter */}
                <div className="bg-white rounded-xl shadow-sm p-5 mb-8">

                    {/* Search */}
                    <div className="mb-5">
                        <input
                            type="text"
                            placeholder="🔍 Search products..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full md:w-96 border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Categories */}
                    <div className="flex flex-wrap gap-3">
                        {categories.map((item) => (
                            <button
                                key={item}
                                onClick={() => setCategory(item)}
                                className={`px-4 py-2 rounded-lg font-medium transition ${
                                    category === item
                                        ? "bg-blue-600 text-white"
                                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                }`}
                            >
                                {item}
                            </button>
                        ))}
                    </div>

                </div>

                {/* Product Count */}
                <div className="flex justify-between items-center mb-5">
                    <p className="text-gray-600">
                        Showing <span className="font-bold">{filteredProducts.length}</span> products
                    </p>
                </div>

                {/* Loading State */}
                {loading && (
                    <div className="text-center py-12">
                        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                        <p className="text-gray-600 mt-4">Loading products...</p>
                    </div>
                )}

                {/* Products Grid */}
                {!loading && filteredProducts.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {filteredProducts.map((product) => (
                            <Card
                                key={product._id}
                                type="products"
                                data={product}
                                onProductDelete={() => handleDelete(product._id)}
                                onProductEdit={() => onEditProduct(product._id)}
                            />
                        ))}
                    </div>
                ) : !loading && (
                    <div className="bg-white rounded-xl p-12 text-center">
                        <h3 className="text-xl font-semibold text-gray-800">No products found</h3>
                        <p className="text-gray-500 mt-2">Try a different search or create a new product.</p>
                    </div>
                )}

            </main>

        </div>
    );
}

export default ProductList;