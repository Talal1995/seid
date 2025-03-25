import React from "react";
import { Routes, Route } from "react-router-dom";
import SurveyPage from "./pages/Survey";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import WhatWeDo from "./pages/WhatWeDo";
import Navbar from "./components/Navbar";
import Footer from "./pages/Footer";
import OurStory from "./pages/OurStory";
import VisionMission from "./pages/VisionMission";
import "./styles/responsive.css"; // Import the new responsive styles

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vision-mission" element={<VisionMission />} />{" "}
        <Route path="/survey" element={<SurveyPage />} /> {/* Corrected */}
        <Route path="/our-story" element={<OurStory />} /> {/* Corrected */}
        <Route path="/what-we-do" element={<WhatWeDo />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
