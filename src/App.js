import "./sass/main.scss";
import { Navbar } from "./components/NavBar";
import { Hero } from "./components/Hero";
import { SixFeatures } from "./components/SixFeatures";
import { CTA } from "./components/CTA";
import { FourFeatures } from "./components/FourFeatures";
import { Testimonials } from "./components/Testimonials";
import { Pricing } from "./components/Pricing";
import { Faq } from "./components/Faq";
import { CTA2 } from "./components/CTA2";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="main">
        <Hero />
        <SixFeatures />
        <CTA />
        <FourFeatures />
        <Testimonials />
        <Pricing />
        <Faq />
        <CTA2 />
        <Footer />
      </main>
    </div>
  );
}

export default App;
