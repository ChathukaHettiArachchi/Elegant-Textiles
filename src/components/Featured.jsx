export default function Featured() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <h3 className="text-4xl font-bold text-center mb-16">
        Our Premium Collections
      </h3>

      <div className="grid md:grid-cols-3 gap-10">
  {["Silk Sarees", "Cotton Wear", "Designer Materials"].map((item) => (
    <div
      key={item}
      className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition duration-500"
    >
      {/* Image Placeholder */}
      <div className="h-56 bg-gradient-to-br from-rose-300 to-rose-500 group-hover:scale-110 transition duration-500"></div>

      <div className="p-8">
        <h4 className="text-2xl font-semibold mb-3">{item}</h4>

        <p className="text-gray-600 mb-4">
          Premium quality {item.toLowerCase()} crafted for elegance and comfort.
        </p>

        <button className="text-rose-600 font-semibold hover:underline cursor-pointer">
          View Collection →
        </button>
      </div>
    </div>
  ))}
</div>

    </section>
  );
}
