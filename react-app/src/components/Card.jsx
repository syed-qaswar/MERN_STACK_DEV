function ProductCard({
  title,
  price,
  category,
  rating,
  image,
  description,
  inStock,
  reviews,
}) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* Image */}
      <div className="relative h-52 overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Category */}
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-700 backdrop-blur">
          {category}
        </span>

        {/* Stock */}
        {!inStock && (
          <span className="absolute right-3 top-3 rounded-full bg-red-500 px-3 py-1 text-xs font-semibold text-white">
            Out of Stock
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5">

        <h2 className="mb-2 text-lg font-bold text-gray-900">
          {title}
        </h2>

        {/* Rating */}
        <div className="mb-3 flex items-center gap-2">
          <span className="text-yellow-500">★</span>

          <span className="font-medium text-gray-700">
            {rating}
          </span>

          <span className="text-sm text-gray-400">
            ({reviews} reviews)
          </span>
        </div>

        {/* Description */}
        <p className="mb-5 line-clamp-2 text-sm leading-6 text-gray-500">
          {description}
        </p>

        {/* Bottom */}
        <div className="flex items-center justify-between">

          <span className="text-xl font-bold text-gray-900">
            ${price}
          </span>

          <button
            disabled={!inStock}
            className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
              inStock
                ? "bg-black text-white hover:bg-gray-800"
                : "cursor-not-allowed bg-gray-200 text-gray-400"
            }`}
          >
            {inStock ? "Add to Cart" : "Unavailable"}
          </button>

        </div>
      </div>
    </div>
  );
}

export default ProductCard;