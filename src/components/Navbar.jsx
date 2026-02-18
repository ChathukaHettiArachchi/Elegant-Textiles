export default function Navbar() {
  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm fixed w-full z-50">
      <div className="max-w-8xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-rose-600 tracking-wide">
          Elegant Textile
        </h1>

        <ul className="hidden md:flex gap-8 font-medium text-gray-700">
          <li className="hover:text-rose-600 cursor-pointer transition">Home</li>
          <li className="hover:text-rose-600 cursor-pointer transition">Products</li>
          <li className="hover:text-rose-600 cursor-pointer transition">About</li>
          <li className="hover:text-rose-600 cursor-pointer transition">Contact</li>
        </ul>
      </div>
    </nav>
  );
}
