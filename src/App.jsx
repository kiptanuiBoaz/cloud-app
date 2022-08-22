import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/home/Hero";
import About from "./components/about/About";
import Support from "./components/support/Support";
import AllinOne from "./components/platforms/AllinOne";
import Pricing from "./components/pricing/Pricing";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Support/>
      <AllinOne/>
      <Pricing/>
      <Footer/>
    </>
  );
}

export default App;
