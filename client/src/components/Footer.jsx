import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
              <circle cx="16" cy="16" r="16" fill="url(#footer-logo-grad)" />
              <path d="M9 20c1.5-4 4.5-6 7-6s5.5 2 7 6" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
              <circle cx="12" cy="13" r="1.5" fill="white"/>
              <circle cx="20" cy="13" r="1.5" fill="white"/>
              <defs>
                <linearGradient id="footer-logo-grad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#7c3aed"/>
                  <stop offset="1" stopColor="#0ea5e9"/>
                </linearGradient>
              </defs>
            </svg>
            <span>Nibblr</span>
          </Link>
          <p>Thoughtfully designed GenAI applications for everyday life.</p>
          <address>
            474 48th Ave, APT Ph1h<br />
            Long Island City, NY 11109<br />
            <a href="tel:+13475023070">(347) 502-3070</a><br />
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
          <a href="https://sites.google.com/view/nibblr/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
          <a href="https://sites.google.com/view/nibblr/menu-pic-privacy-policy" target="_blank" rel="noopener noreferrer">MenuPic Privacy Policy</a>
        </div>
      </div>
    </footer>
  )
}
