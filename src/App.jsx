import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/home/Hero";
import About from "./components/about/About";
import Support from "./components/Support";
import AllinOne from "./components/AllinOne";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

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
