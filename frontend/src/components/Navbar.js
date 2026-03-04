import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div>
        <Link to="/" style={{ fontWeight: "700", fontSize: "20px" }}>
          Inscapes Wellness
        </Link>
      </div>

      <div>
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/achievements">Achievements</Link>
        <Link to="/book">Book</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;