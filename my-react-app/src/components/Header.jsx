import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">

        {/* Logo */}
        <div className="logo">
          {/* <a href="/">app</a> */}
          <Link to="/">MyApp</Link>
        </div>

        {/* Nav */}
        <nav className={`nav ${menuOpen ? "active" : ""}`}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        {/* Mobile Menu */}
        <div 
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

      </div>
    </header>
  );
};

export default Header;