import { useState } from 'react'
import './Support.css'

const faqs = [
  {
    q: 'How do I download Nibblr apps?',
    a: 'Our apps are available on the Apple App Store. Search for "RealFit AI" or "MenuPic AI" to find and download them directly to your iPhone or iPad.',
  },
  {
    q: 'Are the apps free to use?',
    a: 'Both RealFit AI and MenuPic AI offer a free tier with core features. Premium subscriptions unlock advanced AI capabilities, detailed analytics, and unlimited usage. Pricing details are available within each app.',
  },
  {
    q: 'How does the AI personalization work?',
    a: 'Our apps use state-of-the-art generative AI to analyze your preferences, goals, and usage patterns. The more you use the app, the more personalized your experience becomes. Your data is always handled securely and never sold to third parties.',
  },
  {
    q: 'Is my personal data safe?',
    a: 'Absolutely. Privacy is a core value at Nibblr. We use industry-standard encryption, collect only what is necessary to provide our services, and are fully transparent about how data is used. Please review our Privacy Policy for full details.',
  },
  {
    q: 'RealFit AI: What equipment do I need?',
    a: 'None — unless you want it! RealFit AI creates workout plans for any situation: gym, home, outdoors, or travel. Simply tell the app what equipment you have available and it builds a plan around that.',
  },
  {
    q: 'MenuPic AI: Which languages does menu translation support?',
    a: 'MenuPic AI currently supports menu translation in over 40 languages, including Spanish, French, Italian, German, Japanese, Chinese (Simplified and Traditional), Korean, Arabic, and many more.',
  },
  {
    q: 'MenuPic AI: Does it work with digital menus on screens?',
    a: 'Yes! MenuPic AI uses advanced computer vision that works with printed menus, chalkboards, and digital screens. Just point your camera and tap to scan.',
  },
  {
    q: 'How do I report a bug or technical issue?',
    a: 'You can contact us directly at nibblrtech@gmail.com or use the contact form below. Please include your device model, iOS version, app version, and a description of the issue. We typically respond within 1–2 business days.',
  },
  {
    q: 'How do I cancel my subscription?',
    a: 'Subscriptions are managed through your Apple ID. To cancel, go to Settings → [Your Name] → Subscriptions on your iPhone or iPad and select the Nibblr app subscription you wish to cancel.',
  },
]

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false)

  return (
    <div className={`faq-item${open ? ' open' : ''}`}>
      <button
        className="faq-question"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span>{question}</span>
        <span className="faq-icon" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </span>
      </button>
      {open && <div className="faq-answer"><p>{answer}</p></div>}
    </div>
  )
}

export default function Support() {
  const [formData, setFormData] = useState({ name: '', email: '', product: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    // In production this would submit to a backend endpoint
    setSubmitted(true)
  }

  return (
    <main className="support-page">
      {/* ── HEADER ── */}
      <header className="support-header">
        <div className="support-header-bg" aria-hidden="true">
          <div className="sh-orb sh-orb-1" />
          <div className="sh-orb sh-orb-2" />
        </div>
        <div className="support-header-content">
          <span className="section-tag-light">Support</span>
          <h1>How can we help?</h1>
          <p>
            We're a small team and we genuinely care about your experience.
            Browse our FAQs or reach out directly — a real person will respond.
          </p>
        </div>
      </header>

      {/* ── QUICK LINKS ── */}
      <section className="quick-links-section">
        <div className="quick-links-inner">
          <a href="#faq" className="quick-link-card">
            <div className="qlc-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                <line x1="12" y1="17" x2="12.01" y2="17"/>
              </svg>
            </div>
            <h3>FAQ</h3>
            <p>Quick answers to common questions</p>
          </a>
          <a href="#contact" className="quick-link-card">
            <div className="qlc-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>
            <h3>Email Us</h3>
            <p>nibblrtech@gmail.com</p>
          </a>
          <a href="tel:+13475023070" className="quick-link-card">
            <div className="qlc-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.45 2 2 0 0 1 3.59 1.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.73 16z"/>
              </svg>
            </div>
            <h3>Call Us</h3>
            <p>(347) 502-3070</p>
          </a>
          <a href="https://sites.google.com/view/nibblr/privacy-policy" target="_blank" rel="noopener noreferrer" className="quick-link-card">
            <div className="qlc-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </div>
            <h3>Privacy Policy</h3>
            <p>How we handle your data</p>
          </a>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="faq-section" id="faq">
        <div className="faq-inner">
          <div className="faq-header">
            <span className="section-tag">FAQ</span>
            <h2>Frequently Asked Questions</h2>
            <p>Can't find what you're looking for? Contact us below.</p>
          </div>
          <div className="faq-list">
            {faqs.map((item, i) => (
              <FAQItem key={i} question={item.q} answer={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className="contact-section" id="contact">
        <div className="contact-inner">
          <div className="contact-info">
            <span className="section-tag">Get in Touch</span>
            <h2>We'd love to hear from you</h2>
            <p>
              Whether you have a question, feedback, a feature request, or just
              want to say hello — we're here. As a family-run business, we take
              every message seriously and aim to respond within 1–2 business days.
            </p>

            <div className="contact-details">
              <div className="contact-detail">
                <div className="cd-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <span className="cd-label">Email</span>
                  <a href="mailto:nibblrtech@gmail.com">nibblrtech@gmail.com</a>
                </div>
              </div>

              <div className="contact-detail">
                <div className="cd-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.45 2 2 0 0 1 3.59 1.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.73 16z"/>
                  </svg>
                </div>
                <div>
                  <span className="cd-label">Phone</span>
                  <a href="tel:+13475023070">(347) 502-3070</a>
                </div>
              </div>

              <div className="contact-detail">
                <div className="cd-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <span className="cd-label">Address</span>
                  <address>
                    474 48th Ave, APT Ph1h<br/>
                    Long Island City, NY 11109
                  </address>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-wrap">
            {submitted ? (
              <div className="form-success">
                <div className="success-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. We'll get back to you within 1–2 business days.</p>
                <button className="btn-link" onClick={() => setSubmitted(false)}>Send another message</button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <h3>Send us a message</h3>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Your Name <span aria-hidden="true">*</span></label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Jane Smith"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      autoComplete="name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address <span aria-hidden="true">*</span></label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      autoComplete="email"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="product">Related Product</label>
                  <select id="product" name="product" value={formData.product} onChange={handleChange}>
                    <option value="">Select a product (optional)</option>
                    <option value="realfit">RealFit AI</option>
                    <option value="menupic">MenuPic AI</option>
                    <option value="general">General / Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject <span aria-hidden="true">*</span></label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message <span aria-hidden="true">*</span></label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="Tell us how we can help..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className="submit-btn">
                  Send Message
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="22" y1="2" x2="11" y2="13"/>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
