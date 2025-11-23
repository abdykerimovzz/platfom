import React from 'react'
import { FaBook, FaLink, FaEnvelope } from 'react-icons/fa'

const resources = [
  { id: 1, title: 'MDN Web Docs', url: 'https://developer.mozilla.org/' },
  { id: 2, title: 'React Docs', url: 'https://reactjs.org/' },
  { id: 3, title: 'Vite', url: 'https://vitejs.dev/' },
]

export default function Resources() {
  return (
    <section className="resources-section">
      <div className="page-inner">
        <header className="resources-header">
          <div className="icon"><FaBook /></div>
          <div>
            <h2>Resources</h2>
            <p className="lead">Helpful links, libraries and learning materials we recommend.</p>
          </div>
        </header>

        <ul className="resource-list">
          {resources.map(r => (
            <li key={r.id} className="resource">
              <a href={r.url} target="_blank" rel="noreferrer"><FaLink /> {r.title}</a>
            </li>
          ))}
        </ul>

        <div className="contact-card">
          <div className="contact-left">
            <h3>Contact</h3>
            <p>Got questions or a project? Reach out and we’ll get back to you.</p>
            <div className="contact-info">
              <a href="mailto:hello@example.com" className="contact-email"><FaEnvelope /> hello@example.com</a>
            </div>
          </div>

          <form className="contact-form" onSubmit={(e)=>e.preventDefault()}>
            <label>
              <span>Name</span>
              <input type="text" name="name" required />
            </label>

            <label>
              <span>Email</span>
              <input type="email" name="email" required />
            </label>

            <label>
              <span>Message</span>
              <textarea name="message" rows={4} required />
            </label>

            <div className="contact-actions">
              <button type="submit" className="primary">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
