import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function CartSidebar({ isOpen, setIsOpen }) {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/40 z-40"
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-96 bg-white shadow-2xl z-50 p-6 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Your Cart</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-xl font-bold text-gray-500 hover:text-gray-700 cursor-pointer"
          >
            ✖
          </button>
        </div>

        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <>
            {cartItems.map(item => (
              <div
                key={item._id}
                className="border-b py-4 flex justify-between"
              >
                <div>
                  <h4 className="font-semibold">{item.name}</h4>
                  <p>
                    ${item.price} × {item.quantity}
                  </p>
                </div>

                <button
                  onClick={() => removeFromCart(item._id)}
                  className="text-red-500"
                >
                  Remove
                </button>
              </div>
            ))}

            <div className="mt-6 font-bold text-lg">
              Total: ${totalPrice}
            </div>
          </>
        )}
      </div>
    </>
  );
}
