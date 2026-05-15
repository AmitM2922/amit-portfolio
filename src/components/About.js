import React from 'react';
import './About.css';

const About = () => (
  <section id="about" className="about section">
    <div className="container">
      <div className="section-header">
        <span className="section-tag">// about_me</span>
        <h2 className="section-title">Who I Am</h2>
      </div>

      <div className="about-grid">
        <div className="about-text">
          <p>
            I'm a <strong>.NET Full Stack Developer</strong> based in Bhopal, India, with over 4 years
            of hands-on experience building enterprise-grade web applications. I specialize in crafting
            clean, scalable backend APIs with <strong>C# / .NET Core</strong> and responsive frontends
            with <strong>Angular, React, and Next.js</strong>.
          </p>
          <p>
            I've had the privilege of delivering mission-critical solutions for <strong>Tata Power</strong>'s
            smart home IoT platform and <strong>Corecard Software India</strong>'s financial processing
            systems — always with a sharp focus on performance, security, and maintainability.
          </p>
          <p>
            I actively leverage <strong>AI tools</strong> like GitHub Copilot and ChatGPT to accelerate
            delivery without sacrificing quality, and I enjoy mentoring junior developers and leading
            code reviews that elevate team standards.
          </p>

          <div className="about-info">
            {[
              { label: 'Location', value: 'Bhopal, Madhya Pradesh' },
              { label: 'Email', value: 'amitmulmule4@gmail.com' },
              { label: 'Phone', value: '+91 9067550461' },
              { label: 'Languages', value: 'English, Hindi, Marathi' },
              { label: 'Education', value: 'B.Tech — ECE (2022)' },
              { label: 'Status', value: 'Open to Work ✓' },
            ].map(info => (
              <div className="info-row" key={info.label}>
                <span className="info-label">{info.label}</span>
                <span className="info-value">{info.value}</span>
              </div>
            ))}
          </div>

          <div className="about-actions">
            <a
              href="mailto:amitmulmule4@gmail.com"
              className="btn-primary"
            >
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Send Email
            </a>
            <a
              href="https://linkedin.com/in/amit-mulmule-5266011b2"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>

        <div className="about-cards">
          <div className="about-card card-highlight">
            <div className="card-icon">🏗️</div>
            <h3>Architecture</h3>
            <p>Microservices-ready APIs, clean architecture patterns, and scalable database design for high-load systems.</p>
          </div>
          <div className="about-card">
            <div className="card-icon">⚡</div>
            <h3>Performance</h3>
            <p>SQL indexing strategies, optimized queries, and frontend load time reduction via component-driven architecture.</p>
          </div>
          <div className="about-card">
            <div className="card-icon">🤖</div>
            <h3>AI-Augmented Dev</h3>
            <p>GitHub Copilot & ChatGPT for faster boilerplate, unit test generation, and intelligent code refactoring.</p>
          </div>
          <div className="about-card">
            <div className="card-icon">👥</div>
            <h3>Team Leadership</h3>
            <p>Mentored 3+ junior developers, led structured code reviews, and managed Git Flow with CI/CD pipelines.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
