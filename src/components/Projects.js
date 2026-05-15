import React, { useState } from 'react';
import './Projects.css';

const projects = [
  {
    title: 'SIS — Student Information System',
    category: 'Full Stack',
    description:
      'A comprehensive school management platform with 50+ RESTful API endpoints. Handles authentication, business logic, and data operations across student records, fee management, and administrative workflows.',
    stack: ['.NET Core 9', 'Angular 14+', 'Next.js', 'Entity Framework', 'SQL Server', 'GitHub Actions', 'xUnit'],
    highlights: [
      '50+ RESTful API endpoints (microservices-ready)',
      'Normalized SQL schema for thousands of concurrent records',
      'CI/CD pipeline with GitHub Actions & Git Flow',
      'Unit tested via xUnit with GitHub Copilot assistance',
    ],
    color: 'green',
    icon: '🎓',
  },
  {
    title: 'Tata Power — SI EZ Home',
    category: 'IoT / Enterprise',
    description:
      'Smart home IoT ecosystem for Tata Power. Built RESTful APIs for device control, user authentication, and real-time energy data retrieval. Deployed on Azure App Service.',
    stack: ['ASP.NET Web API 4.8', 'MS SQL Server', 'React', 'Angular', 'Azure App Service', 'Tailwind CSS'],
    highlights: [
      'Real-time energy consumption visualization',
      'Custom API wrapper reducing integration bugs by 40%',
      'Deployed on Azure App Service for high availability',
      'Responsive device management UI with Tailwind CSS',
    ],
    color: 'blue',
    icon: '🏠',
  },
  {
    title: 'MP Government — Annual Action Planner',
    category: 'Government',
    description:
      'Government-grade web application for annual action planning across cross-functional departments. High-availability requirements with Agile delivery cycles.',
    stack: ['.NET Core MVC', 'MS SQL Server', 'Bootstrap', 'REST APIs', 'xUnit'],
    highlights: [
      'Government-grade high-availability requirements',
      'RESTful APIs for cross-departmental data exchange',
      'Optimized CRUD operations with xUnit test coverage',
      'Agile delivery with iterative deployment cycles',
    ],
    color: 'purple',
    icon: '🏛️',
  },
  {
    title: 'DSS Agroforestry Platform',
    category: 'Decision Support',
    description:
      'Decision support system for agroforestry management. RESTful APIs and microservices-aligned schema for complex agroforestry data storage, with real-time visualization for field users.',
    stack: ['.NET Core MVC', 'SQL Server', 'Angular', 'Tailwind CSS', 'Microservices'],
    highlights: [
      'Microservices-aligned database schema design',
      'Real-time data visualization for field users',
      'Decision support tools for complex data analysis',
      'Accessible UI optimized for field conditions',
    ],
    color: 'emerald',
    icon: '🌿',
  },
];

const categoryColors = {
  green: { border: 'rgba(0,255,136,0.25)', bg: 'rgba(0,255,136,0.06)', accent: '#00ff88' },
  blue: { border: 'rgba(61,155,255,0.25)', bg: 'rgba(61,155,255,0.06)', accent: '#3d9bff' },
  purple: { border: 'rgba(167,139,250,0.25)', bg: 'rgba(167,139,250,0.06)', accent: '#a78bfa' },
  emerald: { border: 'rgba(52,211,153,0.25)', bg: 'rgba(52,211,153,0.06)', accent: '#34d399' },
};

const Projects = () => {
  const [expanded, setExpanded] = useState(null);

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">// key_projects</span>
          <h2 className="section-title">What I've Built</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project, i) => {
            const colors = categoryColors[project.color];
            const isOpen = expanded === i;
            return (
              <div
                className={`project-card ${isOpen ? 'expanded' : ''}`}
                key={i}
                style={{ '--card-border': colors.border, '--card-bg': colors.bg, '--card-accent': colors.accent }}
              >
                <div className="project-card-top">
                  <div className="project-icon">{project.icon}</div>
                  <span className="project-category">{project.category}</span>
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                <div className="project-stack">
                  {project.stack.slice(0, isOpen ? undefined : 4).map(t => (
                    <span className="project-tag" key={t}>{t}</span>
                  ))}
                  {!isOpen && project.stack.length > 4 && (
                    <span className="project-tag-more">+{project.stack.length - 4}</span>
                  )}
                </div>

                {isOpen && (
                  <ul className="project-highlights">
                    {project.highlights.map((h, j) => (
                      <li key={j}>
                        <span className="point-bullet">▸</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                )}

                <button
                  className="project-toggle"
                  onClick={() => setExpanded(isOpen ? null : i)}
                >
                  {isOpen ? 'Show Less ↑' : 'View Details ↓'}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
