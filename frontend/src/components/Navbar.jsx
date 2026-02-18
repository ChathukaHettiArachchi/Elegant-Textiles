import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import CartSidebar from "./CartSidebar";

export default function Navbar() {
  const { cartItems } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);

  const totalItems = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <>
      <nav className="bg-white/80 backdrop-blur-md shadow-sm fixed w-full z-50">
        <div className="max-w-8xl mx-auto flex justify-between items-center p-4">
          
          <h1 className="text-2xl font-bold text-rose-600 tracking-wide">
            Elegant Textile
          </h1>

          <ul className="hidden md:flex gap-8 font-medium text-gray-700 items-center">
            <li>Home</li>
            <li>Products</li>
            <li>About</li>
            <li>Contact</li>

            <li
              onClick={() => setIsOpen(true)}
              className="relative cursor-pointer"
            >
              🛒
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-3 bg-rose-600 text-white text-xs px-2 py-0.5 rounded-full">
                  {totalItems}
                </span>
              )}
            </li>
          </ul>
        </div>
      </nav>

      <CartSidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
