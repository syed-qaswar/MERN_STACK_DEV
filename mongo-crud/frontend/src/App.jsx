// File: App.jsx
// Main app component

import { useState } from "react";
import ProductList from "./components/ProductList";
import CreateProductForm from "./components/CreateProductForm";
import EditProductForm from "./components/EditProductForm";

function App() {

    const [refreshTrigger, setRefreshTrigger] = useState(0);
    const [editingId, setEditingId] = useState(null);

    // ✅ CREATE - Refresh list after creating
    const handleProductCreated = () => {
        setRefreshTrigger(prev => prev + 1);
    };

    // ✅ UPDATE - Refresh list after updating
    const handleProductUpdated = () => {
        setRefreshTrigger(prev => prev + 1);
    };

    // ✅ EDIT - Open edit form
    const handleEditProduct = (productId) => {
        setEditingId(productId);
    };

    // ✅ CLOSE - Close edit form
    const handleEditClose = () => {
        setEditingId(null);
    };

    return (
        <div className="min-h-screen bg-gray-50">

            {/* Product List (READ & DELETE) */}
            <ProductList
                refreshTrigger={refreshTrigger}
                onEditProduct={handleEditProduct}
            />

            {/* Create Form */}
            <CreateProductForm
                onProductCreated={handleProductCreated}
            />

            {/* Edit Form (Modal) */}
            {editingId && (
                <EditProductForm
                    productId={editingId}
                    onProductUpdated={handleProductUpdated}
                    onClose={handleEditClose}
                />
            )}

        </div>
    );
}

export default App;