import React from "react";
import { Routes, Route } from "react-router-dom";
import SurveyPage from "./pages/Survey";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import WhatWeDo from "./pages/WhatWeDo";
import Navbar from "./components/Navbar";
import Footer from "./pages/Footer";
import OurStory from "./pages/OurStory";
import OurTeam from "./pages/OurTeam";
import ScientificCommitteesPage from "./pages/ScientificCommitteesPage";

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route
          path="/scientific-committees"
          element={<ScientificCommitteesPage />}
        />{" "}
        <Route path="/survey" element={<SurveyPage />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/what-we-do" element={<WhatWeDo />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
