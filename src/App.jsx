import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Products from "./components/Products";
import Featured from "./components/Featured";
import Footer from "./components/Footer";


<h1 style={{color: "red"}}>TEST CHANGE</h1>


function App() {
  return (
    
    <div className="min-h-screen bg-gradient-to-l from-rose-200 to-white text-gray-800">
      <Navbar />
      <Hero />
      <Categories />
      <Products />
      <ProductCard />
      <Featured />
      <Footer />
    </div>
  );
}

export default App;
