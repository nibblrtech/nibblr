import './Products.css'

function FeaturePill({ children }) {
  return <span className="feature-pill">{children}</span>
}

function AppStoreButton({ store }) {
  if (store === 'apple') {
    return (
      <a href="#" className="store-btn apple-btn" aria-label="Download on the App Store">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.14-2.22 1.3-2.2 3.88.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.64M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
        </svg>
        <span>
          <small>Download on the</small>
          App Store
        </span>
      </a>
    )
  }
  return (
    <a href="#" className="store-btn google-btn" aria-label="Get it on Google Play">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M3.18 23.76c.3.17.63.24.97.24.37 0 .74-.1 1.07-.3l13.18-7.46L15.15 13l-11.97 10.76zM.44 1.93C.17 2.31 0 2.82 0 3.44v17.12c0 .62.17 1.13.44 1.51L.56 22.2l9.6-9.6v-.22L.56 2.8l-.12.13zM20.5 10.42L17.4 8.64 14.1 12l3.3 3.36 3.1-1.76c.88-.5.88-1.32 0-1.82l.1-.36zM4.22.54L17.4 8l-3.25 3.25L2.2.74c.33-.2.7-.3 1.07-.3.33 0 .65.07.95.1z"/>
      </svg>
      <span>
        <small>Get it on</small>
        Google Play
      </span>
    </a>
  )
}

function ProductSection({ id, reversed, gradient, accentColor, icon, name, tagline, description, longDescription, features, badges }) {
  return (
    <section className={`product-section${reversed ? ' reversed' : ''}`} id={id}>
      <div className="product-section-inner">
        <div className="product-visual" style={{ background: gradient }}>
          <div className="product-visual-bg" aria-hidden="true">
            <div className="pv-orb pv-orb-1" style={{ background: `radial-gradient(circle, ${accentColor}60 0%, transparent 70%)` }} />
            <div className="pv-orb pv-orb-2" style={{ background: `radial-gradient(circle, ${accentColor}30 0%, transparent 70%)` }} />
          </div>
          <div className="product-icon-wrap" style={{ border: `1px solid ${accentColor}50` }}>
            {icon}
          </div>
          <div className="product-phone">
            <div className="pp-screen">
              <div className="pp-header" style={{ background: `linear-gradient(90deg, ${accentColor}90, transparent)` }} />
              <div className="pp-content">
                {[0.8, 0.6, 0.9, 0.5, 0.7].map((w, i) => (
                  <div key={i} className="pp-line" style={{ width: `${w * 100}%`, opacity: 0.6 - i * 0.08 }} />
                ))}
                <div className="pp-card" style={{ borderColor: `${accentColor}40` }}>
                  <div className="pp-card-line" style={{ background: accentColor, width: '60%' }} />
                  <div className="pp-card-line" style={{ width: '80%' }} />
                  <div className="pp-card-line" style={{ width: '40%' }} />
                </div>
              </div>
            </div>
          </div>
          {badges && (
            <div className="product-badges">
              {badges.map((b, i) => (
                <div key={i} className="product-badge" style={{ borderColor: `${accentColor}40`, color: accentColor }}>
                  {b}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="product-content">
          <span className="product-tag" style={{ background: `${accentColor}18`, color: accentColor }}>{tagline}</span>
          <h2>{name}</h2>
          <p className="product-lead">{description}</p>
          <p className="product-body">{longDescription}</p>

          <h3 className="features-heading">Key Features</h3>
          <ul className="features-list">
            {features.map((f, i) => (
              <li key={i}>
                <span className="feature-check" style={{ background: `${accentColor}18`, color: accentColor }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </span>
                {f}
              </li>
            ))}
          </ul>

          <div className="store-buttons">
            <AppStoreButton store="apple" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Products() {
  return (
    <main className="products-page">
      {/* ── PAGE HEADER ── */}
      <header className="products-header">
        <div className="products-header-bg" aria-hidden="true">
          <div className="ph-orb ph-orb-1" />
          <div className="ph-orb ph-orb-2" />
        </div>
        <div className="products-header-content">
          <span className="section-tag-light">Our Products</span>
          <h1>AI that works as hard as you do</h1>
          <p>
            Two carefully crafted applications built to empower your daily life — from
            the gym to the dining table. Each powered by state-of-the-art generative AI.
          </p>
        </div>
      </header>

      {/* ── PRODUCT NAV ── */}
      <nav className="product-nav" aria-label="Product navigation">
        <div className="product-nav-inner">
          <a href="#realfit" className="product-nav-item">
            <span className="pni-dot" style={{ background: 'linear-gradient(135deg, #7c3aed, #c084fc)' }} />
            RealFit AI
          </a>
          <a href="#menupic" className="product-nav-item">
            <span className="pni-dot" style={{ background: 'linear-gradient(135deg, #0ea5e9, #38bdf8)' }} />
            MenuPic AI
          </a>
        </div>
      </nav>

      {/* ── REALFIT AI ── */}
      <ProductSection
        id="realfit"
        gradient="linear-gradient(160deg, #1a0533 0%, #2d1169 50%, #4c1d95 100%)"
        accentColor="#a78bfa"
        icon={
          <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8h1a4 4 0 0 1 0 8h-1"/>
            <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/>
            <line x1="6" y1="1" x2="6" y2="4"/>
            <line x1="10" y1="1" x2="10" y2="4"/>
            <line x1="14" y1="1" x2="14" y2="4"/>
          </svg>
        }
        name="RealFit AI"
        tagline="Your Intelligent Fitness Companion"
        description="Stop guessing at the gym. RealFit AI combines the science of exercise physiology with the power of generative AI to give you a truly personalized fitness experience."
        longDescription="Whether you're a beginner just starting out or an experienced athlete looking to break through plateaus, RealFit AI adapts to your unique body, schedule, and goals. Our AI coach learns from your performance data, adjusts your plan in real time, and provides actionable insights that keep you progressing safely and efficiently."
        features={[
          'AI-generated workout plans tailored to your goals, fitness level, and available equipment',
          'Smart nutrition tracking with meal analysis and macro recommendations',
          'Real-time form guidance and exercise technique tips',
          'Adaptive progress tracking — your plan evolves as you improve',
          'Injury prevention alerts based on workout patterns and recovery data',
          'Detailed analytics and weekly performance summaries',
          'Seamless integration with Apple Health and wearable devices',
        ]}
        badges={['Fitness', 'Nutrition', 'AI Coach']}
      />

      {/* ── MENUPIC AI ── */}
      <ProductSection
        id="menupic"
        reversed
        gradient="linear-gradient(160deg, #0c1a4b 0%, #0c3462 50%, #0369a1 100%)"
        accentColor="#38bdf8"
        icon={
          <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
            <circle cx="12" cy="13" r="4"/>
          </svg>
        }
        name="MenuPic AI"
        tagline="Scan Any Menu. Know Everything."
        description="Dining out has never been this effortless. Point your camera at any restaurant menu — printed, chalkboard, or digital — and let AI do the heavy lifting."
        longDescription="MenuPic AI instantly analyzes menus using advanced computer vision and generative AI to give you complete nutritional information, allergen warnings, personalized dish recommendations based on your dietary preferences, and real-time translation for menus in foreign languages. Perfect for travelers, health-conscious diners, and anyone with dietary restrictions."
        features={[
          'Instant menu scanning using your phone camera — no typing required',
          'Complete nutritional breakdown for every dish',
          'Allergen detection and dietary restriction filtering (vegan, gluten-free, etc.)',
          'AI-powered personalized dish recommendations based on your taste profile',
          'Real-time menu translation in 40+ languages',
          'Price-to-value analysis and popularity rankings',
          'Offline mode for areas with limited connectivity',
        ]}
        badges={['Camera AI', 'Nutrition', 'Travel']}
      />

      {/* ── COMING SOON ── */}
      <section className="coming-soon-section">
        <div className="coming-soon-inner">
          <span className="section-tag">What's Next</span>
          <h2>More AI innovations in the pipeline</h2>
          <p>
            We're constantly researching, designing, and building. The Nibblr team is
            working on exciting new products that will continue to bring thoughtful AI
            to everyday life. Stay tuned — or reach out if you have an idea to share.
          </p>
          <a href="/support" className="btn btn-primary-outline">Contact Us to Learn More</a>
        </div>
      </section>
    </main>
  )
}
