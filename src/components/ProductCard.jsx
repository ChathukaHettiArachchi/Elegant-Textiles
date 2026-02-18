export default function ProductCard({ product }) {
  return (
    <div className="bg-neutral-900 rounded-xl overflow-hidden border border-neutral-800 hover:scale-105 transition duration-300">
      
      <div className="h-64 bg-gradient-to-br from-neutral-800 to-neutral-700"></div>

      <div className="p-6">
        <h4 className="text-xl font-semibold mb-2">{product.name}</h4>
        <p className="text-neutral-400 mb-4">${product.price}</p>

        <button className="bg-yellow-400 text-black px-4 py-2 rounded-lg hover:bg-yellow-300 transition">
          Add to Cart
        </button>
      </div>

    </div>
  );
}
