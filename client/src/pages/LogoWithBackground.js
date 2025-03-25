import React from "react";
import Logo5 from "../assets/Logo5.jpeg";

const LogoWithBackground = () => {
  return (
    <div
      style={{
        position: "absolute", // Position it behind everything else
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: `url(${Logo5}) center/cover no-repeat`, // Logo as background
        backgroundSize: "contain", // Ensure the logo is responsive and fills the container
        zIndex: -1, // Make sure it stays behind other elements
        opacity: 0.1, // Set a low opacity so the logo is subtle and doesn't dominate
        pointerEvents: "none", // Ensure the logo doesn't interfere with clicking or interaction
      }}
    />
  );
};

export default LogoWithBackground;
