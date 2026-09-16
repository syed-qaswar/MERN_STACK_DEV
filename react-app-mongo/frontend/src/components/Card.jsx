function Card({ type, data }) {

  if (type === "products") {

    return (

      <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 group">

        {/* Image */}
        <div className="relative h-52 overflow-hidden">

          <img
            src={data.image}
            alt={data.title}
            className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
          />

          {/* Stock Badge */}
          <div className="absolute top-3 left-3">

            {data.inStock ? (

              <span className="bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                In Stock
              </span>

            ) : (

              <span className="bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                Out of Stock
              </span>

            )}

          </div>

        </div>


        {/* Content */}
        <div className="p-5">

          {/* Category */}
          <p className="text-sm text-blue-600 font-medium mb-1">
            {data.category}
          </p>


          {/* Title */}
          <h2 className="text-lg font-bold text-gray-900">
            {data.title}
          </h2>


          {/* Description */}
          <p className="text-sm text-gray-500 mt-2 line-clamp-2">
            {data.description}
          </p>


          {/* Rating */}
          <div className="flex items-center gap-2 mt-4">

            <span className="text-yellow-500">
              ★
            </span>

            <span className="font-semibold">
              {data.rating}
            </span>

            <span className="text-gray-400 text-sm">
              ({data.reviews} reviews)
            </span>

          </div>


          {/* Price + Button */}
          <div className="flex items-center justify-between mt-5">

            <div>

              <p className="text-2xl font-bold text-gray-900">
                ${data.price}
              </p>

            </div>


            <button
              disabled={!data.inStock}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                data.inStock
                  ? "bg-gray-900 text-white hover:bg-blue-600"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
            >
              {data.inStock ? "Add to Cart" : "Unavailable"}
            </button>

          </div>

        </div>

      </div>

    );

  }


  return null;
}

export default Card;