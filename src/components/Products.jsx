import ProductCard from "./ProductCard";

export default function Products() {
  const products = [
    { id: 1, name: "Premium Silk Saree", price: 120 },
    { id: 2, name: "Classic Denim Jeans", price: 80 },
    { id: 3, name: "Designer Cotton Dress", price: 95 },
    { id: 4, name: "Luxury Fabric Roll", price: 150 },
  ];

  return (
    <section className="py-20 px-10">
      <h3 className="text-4xl font-bold mb-12 text-center">
        Featured Products
      </h3>

      <div className="grid md:grid-cols-4 gap-10">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
