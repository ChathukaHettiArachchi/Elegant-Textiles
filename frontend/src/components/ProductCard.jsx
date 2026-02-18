import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="bg-neutral-900 rounded-xl p-6 border border-neutral-800">
      <h4 className="text-xl font-semibold mb-2">{product.name}</h4>
      <p className="text-neutral-400 mb-2">${product.price}</p>
      <p className="text-sm text-neutral-500 mb-4">
        {product.description}
      </p>

      <button
        onClick={() => addToCart(product)}
        className="bg-yellow-400 text-black px-4 py-2 rounded-lg"
      >
        Add to Cart
      </button>
    </div>
  );
}
