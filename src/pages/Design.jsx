import React from 'react'
import DesignImage from "../assets/images.jpg"

export default function Design() {
  return (
    <section className="design-section">
      <div className="design-hero">
        <div className="design-text">
          <h2>Design</h2>
          <p className="lead">What do we do in design? We craft experiences and visuals that make products useful, usable and beautiful. Below are common design services and outcomes.</p>
        </div>

        <div className="design-hero-image">
          <img src={DesignImage} alt="Design sample" />
        </div>
      </div>

      <div className="design-cards">
        <article className="card">
          <div className="card-icon" aria-hidden>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="3" width="8" height="8" rx="1" fill="currentColor" />
              <rect x="13" y="3" width="8" height="8" rx="1" fill="currentColor" />
              <rect x="3" y="13" width="8" height="8" rx="1" fill="currentColor" />
              <rect x="13" y="13" width="8" height="8" rx="1" fill="currentColor" />
            </svg>
          </div>
          <div className="card-body">
            <h3>UI / UX</h3>
            <p>Research, wireframes, user flows and high-fidelity interfaces focused on clarity and ease-of-use.</p>
          </div>
        </article>

        <article className="card">
          <div className="card-icon" aria-hidden>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 21l12-12 3 3-12 12H3z" fill="currentColor" />
            </svg>
          </div>
          <div className="card-body">
            <h3>Branding</h3>
            <p>Visual identity, color systems and typography that create memorable, consistent brands.</p>
          </div>
        </article>

        <article className="card">
          <div className="card-icon" aria-hidden>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="0" fill="currentColor" />
              <path d="M10 8l6 4-6 4z" fill="rgba(255,255,255,0.95)" />
            </svg>
          </div>
          <div className="card-body">
            <h3>Prototyping</h3>
            <p>Clickable prototypes to validate ideas, test interactions and speed up development feedback loops.</p>
          </div>
        </article>

        <article className="card">
          <div className="card-icon" aria-hidden>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="4" width="14" height="12" rx="2" fill="currentColor" />
              <rect x="19" y="7" width="3" height="8" rx="1" fill="currentColor" />
            </svg>
          </div>
          <div className="card-body">
            <h3>Responsive Design</h3>
            <p>Layouts and components that adapt across devices for a smooth, consistent experience.</p>
          </div>
        </article>
      </div>
    </section>
  )
}
