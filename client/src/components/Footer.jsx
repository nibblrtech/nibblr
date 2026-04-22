import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "../assets/logodarkgroundcropped.png";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <img src={logo} alt="Nibblr logo" className="footer-logo-img" />
          </Link>
          <p>Thoughtfully designed GenAI applications for everyday life.</p>
          <address>
            474 48th Ave, APT Ph1h
            <br />
            Long Island City, NY 11109
            <br />
            <a href="tel:+13475023070">(347) 502-3070</a>
            <br />
            <a href="mailto:nibblrtech@gmail.com">nibblrtech@gmail.com</a>
          </address>
        </div>

        <div className="footer-links">
          <div className="footer-col">
            <h4>Company</h4>
            <Link to="/">Home</Link>
            <Link to="/#about">About Us</Link>
            <Link to="/#team">Our Team</Link>
          </div>
          <div className="footer-col">
            <h4>Products</h4>
            <Link to="/products">All Products</Link>
            <Link to="/products#realfit">RealFit AI</Link>
            <Link to="/products#menupic">MenuPic AI</Link>
          </div>
          <div className="footer-col">
            <h4>Support</h4>
            <Link to="/support">Help Center</Link>
            <Link to="/support#faq">FAQ</Link>
            <Link to="/support#contact">Contact Us</Link>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {year} Nibblr LLC. All rights reserved.</p>
        <div className="footer-legal">
          <a
            href="https://sites.google.com/view/nibblr/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>
          <a
            href="https://sites.google.com/view/nibblr/menu-pic-privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
          >
            MenuPic Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
