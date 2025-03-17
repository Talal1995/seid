import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import WhatWeDo from "./pages/WhatWeDo";
import Navbar from "./components/Navbar";
import Footer from "./pages/Footer"; // Import Footer here

const App = () => {
  return (
    <div className="app-container">
      {" "}
      {/* Add a wrapper for layout control */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/what-we-do" element={<WhatWeDo />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer /> {/* Place Footer here */}
    </div>
  );
};

export default App;
