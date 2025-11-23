import React from 'react'
import { FaLaptopCode, FaDatabase, FaCloud } from 'react-icons/fa'

export default function Development() {
  const skills = [
    { name: 'JavaScript', pct: 88, most: true },
    { name: 'React', pct: 80, most: true },
    { name: 'Node.js', pct: 72 },
    { name: 'TypeScript', pct: 60 },
    { name: 'Python', pct: 50 },
  ]

  return (
    <section className="development-section">
      <div className="development-hero">
        <div className="development-text">
          <h2>Development</h2>
          <p className="lead">We build robust, maintainable applications — frontend interfaces, backend services and deployment pipelines.</p>
        </div>

        <div className="development-hero-icon" aria-hidden>
          <div className="dev-icon-wrap">
            <FaLaptopCode />
          </div>
        </div>
      </div>

      <div className="development-cards">
        <article className="card">
          <div className="card-icon" aria-hidden>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 6h16v12H4z" fill="currentColor" /></svg>
          </div>
          <div className="card-body">
            <h3>Frontend</h3>
            <p>React, component-driven UI, accessibility and performant rendering to create delightful user experiences.</p>
          </div>
        </article>

        <article className="card">
          <div className="card-icon" aria-hidden>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 12h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
          </div>
          <div className="card-body">
            <h3>Backend & APIs</h3>
            <p>Design and implement scalable APIs, authentication, data models and business logic with best practices.</p>
          </div>
        </article>

        <article className="card">
          <div className="card-icon" aria-hidden>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1" /></svg>
          </div>
          <div className="card-body">
            <h3>DevOps</h3>
            <p>CI/CD pipelines, containerization, monitoring and deployment strategies to keep services reliable.</p>
          </div>
        </article>

        <article className="card">
          <div className="card-icon" aria-hidden>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 6l8 6-8 6V6z" fill="currentColor"/></svg>
          </div>
          <div className="card-body">
            <h3>Testing & QA</h3>
            <p>Unit, integration and e2e testing to ensure correctness, reduce regressions and speed up releases.</p>
          </div>
        </article>
      </div>

        <div className="development-skills">
          <h3>Languages & Tools</h3>
          <p className="muted">Percent indicates relative usage and experience across projects.</p>

          <ul className="skills-list">
            {skills.map(s => (
              <li key={s.name} className="skill">
                <div className="skill-meta">
                  <div className="skill-name">{s.name}{s.most ? <span className="badge">Most used</span> : null}</div>
                  <div className="skill-pct">{s.pct}%</div>
                </div>

                <div className="skill-bar" aria-hidden>
                  <div className="skill-fill" style={{width: `${s.pct}%`}} />
                </div>
              </li>
            ))}
          </ul>
        </div>
    </section>
  )
}
