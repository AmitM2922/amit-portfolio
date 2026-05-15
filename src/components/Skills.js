import React, { useEffect, useRef, useState } from 'react';
import './Skills.css';

const skillGroups = [
  {
    category: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'C# / .NET Core', level: 92 },
      { name: 'ASP.NET Web API', level: 90 },
      { name: 'Entity Framework', level: 85 },
      { name: 'JWT / Auth', level: 80 },
      { name: 'Microservices', level: 78 },
    ],
  },
  {
    category: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'Angular 14+', level: 88 },
      { name: 'React.js', level: 82 },
      { name: 'Next.js', level: 78 },
      { name: 'TypeScript', level: 85 },
      { name: 'Tailwind CSS', level: 80 },
    ],
  },
  {
    category: 'Database & Cloud',
    icon: '🗄️',
    skills: [
      { name: 'SQL Server', level: 88 },
      { name: 'Query Optimization', level: 84 },
      { name: 'Azure App Service', level: 68 },
      { name: 'PostgreSQL', level: 60 },
      { name: 'GitHub Actions CI/CD', level: 75 },
    ],
  },
  {
    category: 'Tools & Practices',
    icon: '🛠️',
    skills: [
      { name: 'Git / Git Flow', level: 90 },
      { name: 'Agile / Scrum', level: 85 },
      { name: 'GitHub Copilot / AI', level: 88 },
      { name: 'JIRA', level: 80 },
      { name: 'Postman / API Testing', level: 85 },
    ],
  },
];

const techBadges = [
  'C#', '.NET Core 9', 'Angular 14+', 'React.js', 'Next.js',
  'TypeScript', 'JavaScript', 'SQL Server', 'Entity Framework',
  'JWT', 'REST APIs', 'Microservices', 'Azure', 'GitHub Actions',
  'Tailwind CSS', 'Bootstrap', 'xUnit', 'JIRA', 'Git Flow',
];

const SkillBar = ({ name, level, animate }) => (
  <div className="skill-bar-item">
    <div className="skill-bar-header">
      <span className="skill-name">{name}</span>
      <span className="skill-percent">{level}%</span>
    </div>
    <div className="skill-bar-track">
      <div
        className="skill-bar-fill"
        style={{ width: animate ? `${level}%` : '0%' }}
      />
    </div>
  </div>
);

const Skills = () => {
  const ref = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimate(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="skills section" ref={ref}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">// technical_skills</span>
          <h2 className="section-title">What I Work With</h2>
        </div>

        <div className="skills-grid">
          {skillGroups.map(group => (
            <div className="skill-group" key={group.category}>
              <div className="skill-group-header">
                <span className="skill-group-icon">{group.icon}</span>
                <h3>{group.category}</h3>
              </div>
              <div className="skill-bars">
                {group.skills.map(skill => (
                  <SkillBar key={skill.name} {...skill} animate={animate} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="tech-badges-section">
          <p className="badges-label">
            <span className="section-tag" style={{display:'inline'}}>// also_worked_with</span>
          </p>
          <div className="tech-badges">
            {techBadges.map(badge => (
              <span className="tech-badge" key={badge}>{badge}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
