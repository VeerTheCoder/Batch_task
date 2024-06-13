import "./App.css";
import Advantage from "./components/Advantage";
import Faq from "./components/Faq";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <>
      <div className="">
        <Navbar />
        <Hero />
        <Features />
        <Advantage />
        <Testimonial/>
        <Faq/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
