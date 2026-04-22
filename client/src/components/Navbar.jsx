import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logodarkgroundcropped.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <header className={`navbar${scrolled ? " scrolled" : ""}`}>
      <div className="navbar-inner">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Nibblr logo" className="navbar-logo-img" />
        </Link>

        <nav
          className={`navbar-links${menuOpen ? " open" : ""}`}
          aria-label="Main navigation"
        >
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            Home
          </Link>
          <Link
            to="/products"
            className={location.pathname === "/products" ? "active" : ""}
          >
            Products
          </Link>
          <Link
            to="/support"
            className={location.pathname === "/support" ? "active" : ""}
          >
            Support
          </Link>
          <Link to="/support" className="nav-cta">
            Get in Touch
          </Link>
        </nav>

        <button
          className={`hamburger${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
