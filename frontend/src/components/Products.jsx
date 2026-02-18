import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

 let filteredProducts =
  products
    .filter(p =>
      filter === "All" ? true : p.gender === filter
    )
    .filter(p =>
      p.name.toLowerCase().includes(search.toLowerCase())
    );

if (sort === "low") {
  filteredProducts.sort((a, b) => a.price - b.price);
}

if (sort === "high") {
  filteredProducts.sort((a, b) => b.price - a.price);
}


  return (
    <section className="py-20 px-10">
      <h3 className="text-4xl font-bold mb-8 text-center">
        Featured Products
      </h3>

      {/* SEARCH INPUT */}
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 rounded mb-6 w-full max-w-md mx-auto block"
      />


<div className="flex justify-center gap-4 mb-6">
  <select
  value={sort}
  onChange={(e) => setSort(e.target.value)}
  className="border p-2 rounded"
>
  <option value="">Remove Sort</option>
  <option value="low">Price: Low to High</option>
  <option value="high">Price: High to Low</option>
</select>

</div>

      {/* FILTER BUTTONS */}
      <div className="flex justify-center gap-6 mb-10">
        {["All", "Gents", "Ladies", "Kids"].map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full border ${
              filter === cat
                ? "bg-rose-600 text-white"
                : "bg-white text-gray-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-4 gap-10">
        {filteredProducts.map(product => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </section>
  );
}
