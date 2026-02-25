import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container home-hero">
      {/* Left Side: Text */}
      <div className="hero-text">
        <h1>Compassionate Psychological Care</h1>

        <p>
          Supporting individuals, families, and organizations toward emotional
          resilience and mental clarity.
        </p>

        <div className="hero-buttons">
          <Link to="/book">
            <button className="btn btn-primary">Book Appointment</button>
          </Link>

          <Link to="/services">
            <button className="btn btn-secondary">View Services</button>
          </Link>
        </div>
      </div>

      {/* Right Side: Image */}
      <div className="hero-image-container">
        <img
          src="/doctor.jpg.jpeg"  // public folder path
          alt="Dr. Winnie Orodi"
          className="hero-image"
        />
      </div>
    </div>
  );
}

export default Home;