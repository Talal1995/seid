import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SurveyPage from "./pages/Survey";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import WhatWeDo from "./pages/WhatWeDo";
import Navbar from "./components/Navbar";
import Footer from "./pages/Footer";
import OurStory from "./components/OurStory";
import OurTeam from "./pages/OurTeam";
import GetInvolved from "./pages/GetInvolved";
import ScientificCommitteesPage from "./pages/ScientificCommitteesPage";
import GDPRPolicy from "./pages/GDPRPolicy";
import CookiePolicy from "./pages/CookiePolicy";
import CookieConsent from "./components/CookieConsent";

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
        />
        <Route path="/survey" element={<SurveyPage />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/get-involved" element={<GetInvolved />} />
        <Route path="/what-we-do" element={<WhatWeDo />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gdpr-policy" element={<GDPRPolicy />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
      </Routes>
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default App;
