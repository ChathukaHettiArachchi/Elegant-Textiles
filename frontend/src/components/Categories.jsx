export default function Categories() {
  const items = ["Silk", "Cotton", "Denim", "Designer"];

  return (
    <section className="py-20 px-10">
      <h3 className="text-4xl font-bold mb-12 text-center">
        Explore Collections
      </h3>

      <div className="grid md:grid-cols-4 gap-8">
        {items.map((item) => (
          <div
            key={item}
            className="bg-neutral-900 border border-neutral-800 p-8 rounded-xl hover:bg-neutral-800 transition cursor-pointer"
          >
            <h4 className="text-xl font-semibold">{item}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
