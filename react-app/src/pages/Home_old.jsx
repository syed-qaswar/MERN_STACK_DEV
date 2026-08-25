import { useState } from "react";
import { products } from "../data/products";
import Card from "../components/Card";

function Home() {

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(
          (product) => product.category === selectedCategory
        );

  return (
    <main className="min-h-screen bg-gray-50">

      {/* Header */}
      <section className="px-6 py-16 text-center">

        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gray-500">
          Our Collection
        </p>

        <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
          Explore Our Products
        </h1>

        <p className="mx-auto max-w-2xl text-gray-500">
          Discover high-quality products carefully selected for you.
        </p>

      </section>


      {/* Category Buttons */}
      <section className="px-6">

        <div className="mx-auto mb-10 flex max-w-6xl flex-wrap justify-center gap-3">

          <button
            onClick={() => setSelectedCategory("All")}
            className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
              selectedCategory === "All"
                ? "bg-black text-white"
                : "bg-white text-gray-600 hover:bg-gray-100"
            }`}
          >
            All
          </button>

          <button
            onClick={() => setSelectedCategory("Laptops")}
            className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
              selectedCategory === "Laptops"
                ? "bg-black text-white"
                : "bg-white text-gray-600 hover:bg-gray-100"
            }`}
          >
            Laptops
          </button>

          <button
            onClick={() => setSelectedCategory("Smartphones")}
            className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
              selectedCategory === "Smartphones"
                ? "bg-black text-white"
                : "bg-white text-gray-600 hover:bg-gray-100"
            }`}
          >
            Smartphones
          </button>

          <button
            onClick={() => setSelectedCategory("Headphones")}
            className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
              selectedCategory === "Headphones"
                ? "bg-black text-white"
                : "bg-white text-gray-600 hover:bg-gray-100"
            }`}
          >
            Headphones
          </button>

          <button
            onClick={() => setSelectedCategory("Gaming")}
            className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
              selectedCategory === "Gaming"
                ? "bg-black text-white"
                : "bg-white text-gray-600 hover:bg-gray-100"
            }`}
          >
            Gaming
          </button>

        </div>


        {/* Products */}
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 pb-20 sm:grid-cols-2 lg:grid-cols-4">

          {filteredProducts.map((product) => (
            <Card
              key={product.id}
              {...product}
            />
          ))}

        </div>

      </section>

    </main>
  );
}

export default Home;