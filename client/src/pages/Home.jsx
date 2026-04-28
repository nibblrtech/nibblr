import { Link } from "react-router-dom";
import "./Home.css";
import julietProfile from "../assets/Juliet Profile.jpg";
import kenProfile from "../assets/Ken profile.jpg";
import RealFitAILogo from "../assets/RealFitAILogo.png";
import MenuPicAILogo from "../assets/MenuPicAILogo.png";
import FamilyStudioImage from "../assets/Family Studio 1.png";
import OutfitImage from "../assets/Outfit no bg.png";
import TravelDiningImage from "../assets/Traveldining no bg.png";

function StatItem({ number, label }) {
  return (
    <div className="stat-item">
      <span className="stat-number">{number}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="feature-card">
      <div className="feature-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function ProductTeaser({
  id,
  gradient,
  iconBackground,
  icon,
  name,
  tagline,
  description,
  href,
}) {
  return (
    <div className="product-teaser" id={id}>
      <div className="product-teaser-visual" style={{ background: gradient }}>
        <div
          style={{ background: iconBackground }}
          className="product-teaser-icon"
        >
          {icon}
        </div>
      </div>
      <div className="product-teaser-content">
        <h3>{name}</h3>
        <p className="product-tagline">{tagline}</p>
        <p>{description}</p>
        <Link to={href} className="btn btn-outline">
          Learn More →
        </Link>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="home">
      {/* ── HERO ── */}
      <section className="hero-section">
        <div className="hero-bg" aria-hidden="true">
          <div className="hero-orb hero-orb-1" />
          <div className="hero-orb hero-orb-2" />
          <div className="hero-orb hero-orb-3" />
          <div className="hero-grid" />
        </div>
        <div className="hero-content">
          <h1 className="hero-heading">
            AI That Works for
            <span className="gradient-text"> Everyday Life</span>
          </h1>
          <p className="hero-sub">
            Nibblr LLC builds thoughtfully crafted, generative AI applications
            that help to make life easier — with a personal touch only a
            family-run studio can deliver.
          </p>
          <div className="hero-actions">
            <Link to="/products" className="btn btn-primary">
              Explore Our Apps
            </Link>
            <Link to="/support" className="btn btn-ghost">
              Get in Touch
            </Link>
          </div>
          <div className="hero-stats">
            <StatItem number="2" label="AI-Powered Apps" />
            <div className="stat-divider" />
            <StatItem number="40+" label="Years Engineering Experience" />
            <div className="stat-divider" />
            <StatItem number="100%" label="Family Owned &amp; Operated" />
          </div>
        </div>
        <div className="hero-images" aria-hidden="true">
          <img
            src={OutfitImage}
            alt=""
            className="hero-image hero-image-left"
          />
          <img
            src={TravelDiningImage}
            alt=""
            className="hero-image hero-image-right"
          />
        </div>
      </section>

      {/* ── WHY NIBBLR ── */}
      <section className="features-section">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-tag">Why Nibblr</span>
            <h2>Designed with care. Powered by AI.</h2>
            <p>
              We believe the best technology feels effortless. Every app we
              build starts with real user needs and finishes with a product that
              genuinely delivers.
            </p>
          </div>
          <div className="features-grid">
            <FeatureCard
              icon={
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" />
                  <path d="M12 8v4l3 3" />
                </svg>
              }
              title="Real-Time AI"
              description="Our apps deliver instant, context-aware AI insights — no waiting, no lag. Powered by state-of-the-art generative models."
            />
            <FeatureCard
              icon={
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              }
              title="Privacy First"
              description="We're transparent about how AI is used in our products. Your data is handled with care, and we never sell or misuse personal information."
            />
            <FeatureCard
              icon={
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              }
              title="Human-Centered Design"
              description="Led by a UX expert and a seasoned engineer, our products are as beautiful as they are functional — accessible to everyone."
            />
            <FeatureCard
              icon={
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
              }
              title="Continuously Improving"
              description="We actively collect feedback and release regular updates. When you reach out, a real person responds — not a bot."
            />
            <FeatureCard
              icon={
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              }
              title="Built for Quality"
              description="Over 40 years of engineering experience underpins every technical decision. Performance, reliability, and security are non-negotiable."
            />
            <FeatureCard
              icon={
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              }
              title="NYC Roots"
              description="We're a proudly local business based in Long Island City, NY — bringing big-tech innovation with small-business warmth."
            />
          </div>
        </div>
      </section>

      {/* ── PRODUCTS TEASER ── */}
      <section className="products-teaser-section" id="products">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-tag">Our Products</span>
            <h2>Apps that make a difference</h2>
            <p>
              Two AI-powered applications crafted to help you reach your goals —
              whether you're shopping for a new outfit or exploring a new
              restaurant.
            </p>
          </div>
          <div className="products-teaser-grid">
            <ProductTeaser
              id="realfit"
              gradient="linear-gradient(135deg, #290A6F 0%, #8B5CF6 50%, #D1BDFF 100%)"
              iconBackground="rgba(255, 255, 255, 0.15)"
              icon={
                <img
                  src={RealFitAILogo}
                  alt="RealFit AI Logo"
                  style={{ width: "70px", height: "70px" }}
                />
              }
              name="RealFit AI"
              tagline="See How Clothes Fit Before You Buy"
              description="RealFit AI transforms online shopping with hyper-realistic virtual try-ons. By using your personal profile data, it shows how clothes and accessories look on your body in real time— helping you understand fit, style, and proportion instantly. Shop with clarity, confidence, and zero guesswork, wherever you are."
              href="/products#realfit"
            />
            <ProductTeaser
              id="menupic"
              gradient="linear-gradient(135deg, #356FE3 0%, #84ADFF 50%, #B4CEFF 100%)"
              iconBackground="rgba(255, 255, 255, 0.85)"
              icon={
                <img
                  src={MenuPicAILogo}
                  alt="MenuPic AI Logo"
                  style={{ width: "70px", height: "70px" }}
                />
              }
              name="MenuPic AI"
              tagline="See Your Food Before You Order"
              description="MenuPic AI transforms restaurant menus into clear, visual, and helpful insights. With a quick scan, users can preview dishes with AI-generated images, translate menu descriptions, and view nutrition information—making it easier to discover new foods and order with confidence anywhere in the world."
              href="/products#menupic"
            />
          </div>
          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <Link to="/products" className="btn btn-primary">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="about-section" id="about">
        <div className="section-inner about-inner">
          <div className="about-visual">
            <img
              src={FamilyStudioImage}
              alt="Family Studio"
              className="about-image"
            />
          </div>
          <div className="about-content">
            <span className="section-tag">Our Story</span>
            <h2>A family studio with a big mission</h2>
            <p>
              Nibblr LLC is a U.S.-incorporated, family-owned software studio
              dedicated to building thoughtfully designed, GenAI-enhanced
              applications for everyday users. We focus on creating intuitive,
              reliable tools that help people work, create, and explore new
              ideas more effectively — across a wide range of topics and use
              cases.
            </p>
            <p>
              As a modern software company, we combine strong technical
              engineering with user-centered design principles. Our process
              spans the full product lifecycle: researching user pain points,
              designing clear and engaging interfaces, building secure and
              scalable architectures, and continuously refining our apps based
              on real-world feedback.
            </p>
            <p>
              We place a high value on{" "}
              <strong>quality, privacy, and transparency</strong> in how AI is
              used within our products.
            </p>
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="team-section" id="team">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-tag">Meet the Team</span>
            <h2>The people behind the products</h2>
            <p>
              Two co-founders. Decades of combined experience. One shared
              vision: making AI work for everyone.
            </p>
          </div>
          <div className="team-grid">
            <div className="team-card">
              <div
                className="team-avatar"
                style={{
                  backgroundImage: `url(${julietProfile})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div className="team-info">
                <h3>Juliet Sun</h3>
                <span className="team-role">Chief Executive Officer</span>
                <p>
                  A product designer and UX expert, Juliet leads product vision
                  and user experience. She ensures that every Nibblr app feels
                  intuitive, beautiful, and genuinely helpful, with a strong
                  emphasis on functionality, usability and presentation.
                </p>
                <div className="team-tags">
                  <span>UX Design</span>
                  <span>Product Vision</span>
                  <span>Accessibility</span>
                </div>
              </div>
            </div>

            <div className="team-card">
              <div
                className="team-avatar"
                style={{
                  backgroundImage: `url(${kenProfile})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div className="team-info">
                <h3>Ken Rubin</h3>
                <span className="team-role">Chief Technology Officer</span>
                <p>
                  A seasoned programmer and software architect with 40 years of
                  experience, Ken is responsible for the technical direction of
                  the company. He designs and implements the core systems that
                  power our GenAI capabilities, emphasizing reliability,
                  performance, and security.
                </p>
                <div className="team-tags">
                  <span>Software Architecture</span>
                  <span>GenAI Systems</span>
                  <span>Security</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section">
        <div className="cta-bg" aria-hidden="true">
          <div className="cta-orb cta-orb-1" />
          <div className="cta-orb cta-orb-2" />
        </div>
        <div className="cta-content">
          <h2>Ready to experience the difference?</h2>
          <p>
            Explore our AI-powered apps or reach out — we'd love to hear from
            you.
          </p>
          <div className="cta-actions">
            <Link to="/products" className="btn btn-white">
              See Our Products
            </Link>
            <Link to="/support" className="btn btn-ghost-white">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
