// File: components/Card.jsx
// Product card component with action buttons

import React from 'react';

export default function Card({ type, data, onProductDelete, onProductEdit }) {

    if (type === 'products') {
        return (
            <div className="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">

                {/* Image Container */}
                <div className="relative h-64 overflow-hidden bg-gray-200">
                    <img
                        src={data.image || 'https://via.placeholder.com/400'}
                        alt={data.title}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />

                    {/* Stock Badge */}
                    <div className="absolute top-3 right-3">
                        {data.inStock ? (
                            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                In Stock
                            </span>
                        ) : (
                            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                Out of Stock
                            </span>
                        )}
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-3 left-3">
                        <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                            {data.category}
                        </span>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6">

                    {/* Title */}
                    <h2 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
                        {data.title}
                    </h2>

                    {/* Description */}
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {data.description || 'No description available'}
                    </p>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-4">
                        <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                                <span key={i}>
                                    {i < Math.floor(data.rating || 0) ? '★' : '☆'}
                                </span>
                            ))}
                        </div>
                        <span className="text-gray-700 font-semibold">{data.rating || 0}</span>
                        <span className="text-gray-500 text-sm">({data.reviews || 0})</span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                        <div>
                            <p className="text-gray-500 text-sm">Price</p>
                            <p className="text-2xl font-bold text-gray-900">
                                ${data.price}
                            </p>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 mt-4">

                        {/* Add to Cart */}
                        <button
                            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition disabled:opacity-50"
                            disabled={!data.inStock}
                        >
                            🛒 Cart
                        </button>

                        {/* Edit Button */}
                        <button
                            onClick={() => onProductEdit && onProductEdit()}
                            className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-lg transition"
                        >
                            ✏️
                        </button>

                        {/* Delete Button */}
                        <button
                            onClick={() => onProductDelete && onProductDelete()}
                            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition"
                        >
                            🗑️
                        </button>

                    </div>
                </div>
            </div>
        );
    }

    return <div>Unknown card type</div>;
}