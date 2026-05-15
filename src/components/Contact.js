import React, { useState } from 'react';
import './Contact.css';

const contactLinks = [
  {
    label: 'Email',
    value: 'amitmulmule4@gmail.com',
    href: 'mailto:amitmulmule4@gmail.com',
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: 'Phone',
    value: '+91 9067550461',
    href: 'tel:+919067550461',
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'amit-mulmule-5266011b2',
    href: 'https://linkedin.com/in/amit-mulmule-5266011b2',
    icon: (
      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'Location',
    value: 'Bhopal, Madhya Pradesh, India',
    href: 'https://maps.google.com/?q=Bhopal,India',
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

const Contact = () => {
  const [copied, setCopied] = useState('');

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(''), 2000);
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">// get_in_touch</span>
          <h2 className="section-title">Let's Work Together</h2>
        </div>

        <div className="contact-grid">
          <div className="contact-left">
            <p className="contact-intro">
              I'm currently <strong>open to new opportunities</strong> — whether it's a full-time role,
              freelance project, or a conversation about what we could build together. Drop me a message!
            </p>

            <div className="contact-links">
              {contactLinks.map(link => (
                <a
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="contact-link"
                  key={link.label}
                >
                  <div className="contact-link-icon">{link.icon}</div>
                  <div className="contact-link-info">
                    <span className="contact-link-label">{link.label}</span>
                    <span className="contact-link-value">{link.value}</span>
                  </div>
                  <button
                    className="copy-btn"
                    onClick={e => {
                      e.preventDefault();
                      handleCopy(link.value, link.label);
                    }}
                    title="Copy to clipboard"
                  >
                    {copied === link.label ? '✓' : '⧉'}
                  </button>
                </a>
              ))}
            </div>
          </div>

          <div className="contact-right">
            <div className="contact-cta-card">
              <div className="cta-icon">🚀</div>
              <h3>Ready to build something great?</h3>
              <p>
                With 4+ years delivering enterprise applications for Tata Power and Corecard Software,
                I bring deep technical expertise and a commitment to quality on every project.
              </p>
              <div className="cta-features">
                {[
                  '.NET Core / C# Expertise',
                  'Angular & React Frontends',
                  'API Architecture & Design',
                  'AI-Augmented Development',
                  'Agile / Scrum Workflow',
                ].map(f => (
                  <span key={f} className="cta-feature">
                    <span className="feature-check">✓</span>
                    {f}
                  </span>
                ))}
              </div>
              <a href="mailto:amitmulmule4@gmail.com" className="cta-button">
                Send Me a Message
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
