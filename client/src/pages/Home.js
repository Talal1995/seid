import React from "react";
import "../styles/home.css"; // Ensure styles are correctly applied

const Home = () => {
  return (
    <main className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <h1 className="hero-title">Welcome to SEID</h1>
        <p className="hero-text">
          Syrian expertise is a key driver for Syria’s future. Across the world,
          skilled professionals and thought leaders stand ready to contribute.
          Our mission is to connect, empower, and activate this collective
          knowledge to rebuild, innovate, and advance Syria’s development. Join
          us in shaping Syria’s future, where knowledge leads to action.
        </p>
        <button className="cta-button" aria-label="Join Us">
          Join Us
        </button>
      </section>

      {/* Co-founders Section */}
      <section className="cofounders">
        <h2 className="section-title">Our Co-founders</h2>
        <div className="cofounders-container">
          <article className="cofounder-card">
            <h3 className="cofounder-name">Mostafa Issa</h3>
            <p className="cofounder-desc">Detailed description of Mostafa.</p>
          </article>
          <article className="cofounder-card">
            <h3 className="cofounder-name">Mohammad Barhamji</h3>
            <p className="cofounder-desc">Detailed description of Mohammad.</p>
          </article>
        </div>
      </section>
    </main>
  );
};

export default Home;
