import React, { useEffect, useRef } from 'react';
import './Hero.css';

const roles = ['.NET Full Stack Developer', 'C# / Angular Expert', 'React & Next.js Builder', 'API Architect'];

const Hero = () => {
  const roleRef = useRef(null);
  const roleIdx = useRef(0);
  const charIdx = useRef(0);
  const deleting = useRef(false);

  useEffect(() => {
    let timeout;
    const type = () => {
      const current = roles[roleIdx.current];
      if (!deleting.current) {
        charIdx.current++;
        if (roleRef.current) roleRef.current.textContent = current.slice(0, charIdx.current);
        if (charIdx.current === current.length) {
          deleting.current = true;
          timeout = setTimeout(type, 1800);
          return;
        }
      } else {
        charIdx.current--;
        if (roleRef.current) roleRef.current.textContent = current.slice(0, charIdx.current);
        if (charIdx.current === 0) {
          deleting.current = false;
          roleIdx.current = (roleIdx.current + 1) % roles.length;
          timeout = setTimeout(type, 400);
          return;
        }
      }
      timeout = setTimeout(type, deleting.current ? 60 : 90);
    };
    timeout = setTimeout(type, 800);
    return () => clearTimeout(timeout);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-bg-orb orb-1" />
      <div className="hero-bg-orb orb-2" />

      <div className="container hero-inner">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot" />
            Available for opportunities
          </div>

          <h1 className="hero-name">
            Hi, I'm<br />
            <span className="name-highlight">Amit Mulmule</span>
          </h1>

          <div className="hero-role">
            <span className="role-prefix">{'// '}</span>
            <span className="role-text" ref={roleRef}></span>
            <span className="cursor-blink">|</span>
          </div>

          <p className="hero-desc">
            Results-driven Full Stack Developer with <strong>4+ years</strong> of experience
            building enterprise-grade web applications. Specialized in{' '}
            <span className="text-accent">.NET Core</span>,{' '}
            <span className="text-accent">Angular</span>, and{' '}
            <span className="text-accent">React</span> — delivering scalable solutions
            for clients like <strong>Tata Power</strong> &amp; <strong>Corecard Software</strong>.
          </p>

          <div className="hero-actions">
            <button className="btn-primary" onClick={() => scrollToSection('projects')}>
              <span>View My Work</span>
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <button className="btn-secondary" onClick={() => scrollToSection('contact')}>
              Get In Touch
            </button>
          </div>

          <div className="hero-stats">
            {[
              { value: '4+', label: 'Years Exp.' },
              { value: '10+', label: 'Projects' },
              { value: '50+', label: 'API Endpoints' },
              { value: '2', label: 'Enterprise Clients' },
            ].map(stat => (
              <div className="stat-item" key={stat.label}>
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual">
          <div className="code-window">
            <div className="window-bar">
              <div className="window-dots">
                <span className="dot red" />
                <span className="dot yellow" />
                <span className="dot green" />
              </div>
              <span className="window-title">amit.cs</span>
            </div>
            <pre className="code-content">
              <code>
{`public class Developer {
  public string Name { get; } 
    = "Amit Mulmule";
  
  public string[] Stack { get; } = {
    "C# / .NET Core 9",
    "Angular 14+",
    "React.js",
    "Next.js",
    "SQL Server",
    "Entity Framework"
  };

  public string Location { get; }
    = "Bhopal, India";

  public string Status { get; }
    = "Open to Work ✓";

  public string Build(string idea) {
    return idea + " → Production";
  }
}`}
              </code>
            </pre>
          </div>

          <div className="floating-chips">
            <span className="chip chip-1">.NET Core 9</span>
            <span className="chip chip-2">Angular 14+</span>
            <span className="chip chip-3">React</span>
            <span className="chip chip-4">SQL Server</span>
          </div>
        </div>
      </div>

      <div className="scroll-hint" onClick={() => scrollToSection('about')}>
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
        <span>Scroll down</span>
      </div>
    </section>
  );
};

export default Hero;
