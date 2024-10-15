import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import OurFeatures from "./components/OurFeatures";
import Roadmap from "./components/Roadmap";
import Tokenomics from "./components/Tokenomics";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app-cont">
      <Navbar />
      <Home />
      <OurFeatures />
      <About />
      <Tokenomics />
      <Roadmap />
      <Footer />
    </div>
  );
}

export default App;
