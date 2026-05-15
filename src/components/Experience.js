import React from 'react';
import './Experience.css';

const experiences = [
  {
    role: 'Full Stack Developer',
    company: 'RAJ Digital',
    location: 'Bhopal',
    period: 'June 2025 – Present',
    current: true,
    stack: ['.NET Core 9', 'Angular 14+', 'Next.js', 'SQL Server', 'GitHub Actions'],
    points: [
      'Architect and develop production-grade .NET Core 9 Web APIs using Entity Framework and microservices patterns, handling 10,000+ records.',
      'Build responsive, high-performance frontends with Angular 14+ and Next.js, component-driven architecture, and Tailwind CSS.',
      'Design and optimize SQL Server schemas with indexing strategies, stored procedures, and query tuning.',
      'Actively use GitHub Copilot and ChatGPT to accelerate boilerplate coding, unit test generation, and complex debugging.',
      'Mentor 3+ junior developers through structured code reviews and best-practice guidance.',
      'Manage full GitHub workflows including Git Flow branching, pull requests, and CI/CD pipelines via GitHub Actions.',
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'TekIT Software Solutions',
    location: 'Indore',
    period: 'Dec 2021 – Apr 2025',
    current: false,
    stack: ['.NET Core 6', 'Angular', 'React', 'SQL Server', 'Azure', 'JIRA'],
    points: [
      'Delivered engineering services to Corecard Software India — building robust .NET Core 6 Web APIs for financial processing systems.',
      'Collaborated with Tata Power to build enterprise-level backend APIs and responsive web interfaces using ASP.NET and Angular/React.',
      'Integrated 10+ third-party APIs into production applications, extending platform functionality.',
      'Designed and managed SQL Server databases with optimized queries and ORM mappings for large-scale data operations.',
      'Built dynamic Angular frontends with TypeScript, delivering intuitive UIs for complex financial business workflows.',
      'Leveraged AI tools (GitHub Copilot, ChatGPT) for code review, refactoring, and architectural problem-solving.',
    ],
  },
];

const Experience = () => (
  <section id="experience" className="experience section">
    <div className="container">
      <div className="section-header">
        <span className="section-tag">// work_experience</span>
        <h2 className="section-title">Where I've Worked</h2>
      </div>

      <div className="timeline">
        {experiences.map((exp, i) => (
          <div className={`timeline-item ${exp.current ? 'current' : ''}`} key={i}>
            <div className="timeline-line">
              <div className={`timeline-dot ${exp.current ? 'dot-active' : ''}`} />
              {i < experiences.length - 1 && <div className="timeline-connector" />}
            </div>

            <div className="timeline-content">
              <div className="exp-header">
                <div>
                  <div className="exp-meta">
                    <span className="exp-period">{exp.period}</span>
                    {exp.current && <span className="exp-badge">Current</span>}
                  </div>
                  <h3 className="exp-role">{exp.role}</h3>
                  <p className="exp-company">
                    {exp.company}
                    <span className="exp-location"> · {exp.location}</span>
                  </p>
                </div>
              </div>

              <div className="exp-stack">
                {exp.stack.map(t => (
                  <span className="exp-tag" key={t}>{t}</span>
                ))}
              </div>

              <ul className="exp-points">
                {exp.points.map((pt, j) => (
                  <li key={j}>
                    <span className="point-bullet">▸</span>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Education */}
      <div className="education-section">
        <span className="section-tag" style={{display:'block', marginBottom:'20px'}}>// education</span>
        <div className="edu-grid">
          {[
            {
              degree: 'B.Tech — Electronics & Communication Engineering',
              school: 'Technocrats Institute of Technology',
              year: '2022',
              location: 'Bhopal',
            },
            {
              degree: 'Higher Secondary Certificate (HSC)',
              school: 'Little Step School, Borgaon',
              year: '2018',
              location: 'Madhya Pradesh',
            },
          ].map(edu => (
            <div className="edu-card" key={edu.degree}>
              <div className="edu-year">{edu.year}</div>
              <h4 className="edu-degree">{edu.degree}</h4>
              <p className="edu-school">{edu.school} · {edu.location}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
