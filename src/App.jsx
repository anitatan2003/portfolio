import React from 'react';
import './index.css';

export default function App() {
  return (
    <div className="portfolio-container">
      
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">Anita.</div>
        <div className="nav-links">
          <a href="#works">Works</a>
          <a href="#about">About</a>
          <button className="contact-btn">Contact</button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <span className="badge">✦ Available for opportunities</span>
          <h1 className="hero-title">
            I Am <br /> Anita
          </h1>
          <h2 className="hero-subtitle">AI & Full-Stack Engineer</h2>
          <p className="hero-description">
            Specializing in Context Engineering, RAG Pipelines, and building scalable 
            technology for social good.
          </p>
        </div>
        
        <div className="hero-image-container">
              <img src="src/assets/Subject.png" alt="Anita" className='hero-image' />
        </div> 
      </header>

      {/* Projects */}
      <section id="works" className="projects-section">
        <h2 className="section-title">Recent Projects</h2>
        
        <div className="projects-grid">
          {/* Project 1 */}
          <div className="project-card">
            <h3 className="project-title">Healthcare RAG Auditor</h3>
            <p className="tech-stack">Python • Gemini Flash • Vector DB</p>
            <p className="project-desc">
              Automated compliance auditing pipeline ingesting 700k+ words of regulatory data. 
              Implemented dynamic chunking to reduce processing times from days to seconds.
            </p>
            <a href="https://github.com/anitatan2003" target="_blank" rel="noreferrer" className="project-link">
              View Repository &rarr;
            </a>
          </div>

          {/* Project 2 */}
          <div className="project-card">
            <h3 className="project-title">Compliance Copilot</h3>
            <p className="tech-stack">Agentic Workflows • React • REST APIs</p>
            <p className="project-desc">
              Co-designed an AI agent for regulatory readiness mapping and gap assessments. 
              Structured context pipelines to evaluate mapping accuracy.
            </p>
            <a href="https://github.com/anitatan2003" target="_blank" rel="noreferrer" className="project-link">
              View Case Study &rarr;
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}