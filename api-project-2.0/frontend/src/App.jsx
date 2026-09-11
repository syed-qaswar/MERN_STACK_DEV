import Card from "./components/Card";
import { useEffect, useState } from "react";

function App() {

  const [products, setProducts] = useState([]);
  const [users, setUser] = useState([]);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  useEffect(() => {

    async function getData() {

      const [productResponse, userResponse] = await Promise.all([
        fetch("http://localhost:5000/api/products"),
        fetch("http://localhost:5000/api/user")
      ]);

      const productData = await productResponse.json();
      const userData = await userResponse.json();

      setProducts(productData);
      setUser(userData);
    }

    getData();

  }, []);


  // Get unique categories from API data
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


  return (

    <div className="min-h-screen bg-gray-100">

      {/* Header */}
      <header className="bg-gray-900 text-white">

        <div className="max-w-7xl mx-auto px-6 py-5">

          <div className="flex items-center justify-between">

            <div>
              <h1 className="text-2xl font-bold">
                MyStore
              </h1>

              <p className="text-gray-400 text-sm">
                Products from our API
              </p>
            </div>

            <div className="text-sm text-gray-300">
              {products.length} Products
            </div>

          </div>

        </div>

      </header>


      {/* Products Section */}
      <main className="max-w-7xl mx-auto px-6 py-10">

        <div className="mb-8">

          <h2 className="text-3xl font-bold text-gray-900">
            Our Products
          </h2>

          <p className="text-gray-500 mt-2">
            Browse products fetched from our Express API.
          </p>

        </div>


        {/* Search + Categories */}
        <div className="bg-white rounded-xl shadow-sm p-5 mb-8">

          {/* Search */}
          <div className="mb-5">

            <input
              type="text"
              placeholder="Search products..."
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
            Showing{" "}
            <span className="font-bold">
              {filteredProducts.length}
            </span>{" "}
            products
          </p>

        </div>


        {/* Product Cards */}
        {filteredProducts.length > 0 ? (

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {filteredProducts.map((product) => (

              <Card
                key={product.id}
                type="products"
                data={product}
              />

            ))}

          </div>

        ) : (

          <div className="bg-white rounded-xl p-12 text-center">

            <h3 className="text-xl font-semibold text-gray-800">
              No products found
            </h3>

            <p className="text-gray-500 mt-2">
              Try a different search or category.
            </p>

          </div>

        )}

      </main>

    </div>
  );
}

export default App;