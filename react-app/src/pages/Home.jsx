import { useState } from "react";
import Card from "../components/Card";
import { products } from "../data/products";

function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div>
      <button
        onClick={() => setSelectedCategory("All")}
        className={
          selectedCategory == "All"
            ? "bg-black text-white"
            : "bg-white text-black"
        }
      >
        All
      </button>

      <button
        onClick={() => setSelectedCategory("Laptops")}
        className={
          selectedCategory == "Laptops"
            ? "bg-black text-white"
            : "bg-white text-black"
        }
      >
        Laptops
      </button>

      <button onClick={() => setSelectedCategory("Smartphones")}>
        Smartphones
      </button>
      <button>Headphones</button>
      <button>Gaming</button>

      <div className="grid grid-cols-4">
        {filteredProducts.map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}

export default Home;
