import React, { useState } from "react";
import { FaLaptopCode } from 'react-icons/fa'
import Design from "./Design"
import Development from "./Development"


export default function Home() {
  const [contactState, setContactState] = useState({ status: 'idle', message: '' })

  function scrollToContact() {
    const el = document.getElementById('contact') || document.querySelector('.home-contact')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  function scrollToWork() {
    const el = document.querySelector('.design-section') || document.querySelector('.development-section')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  async function handleContactSubmit(e) {
    e.preventDefault()
    const form = e.target
    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    }

    try {
      setContactState({ status: 'loading', message: '' })
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) throw new Error('Network error')
      setContactState({ status: 'success', message: 'Message sent — thanks!' })
      form.reset()
    } catch (error) {
      // keep a simple user message; log to console for debugging
      console.error('Contact submit error', error)
      setContactState({ status: 'error', message: 'Failed to send — try again later.' })
    }
  }
  return (
    <div className="page">
      <main className="main">
        <div className="text-main">
          <h1>FULL STACK DEVELOPER</h1>
          <p>Jebesoft Academy</p>
          <div className="button-main">
            <button type="button" className="primary" onClick={scrollToContact}>Contact Me</button>
            <button type="button" onClick={scrollToWork}>See My Work</button>
          </div>
        </div>

        <div className="image-main">
          <div className="image-icon" aria-hidden>
            <FaLaptopCode />
          </div>
        </div>
      </main>
      <Design />
      <Development />

      <section id="contact" className="home-contact">
        <div className="page-inner">
          <h2>Contact Me</h2>
          <p className="lead">Have a project or question? Send a message and I will reply shortly.</p>

          <div className="contact-card">
            <form className="contact-form" onSubmit={handleContactSubmit}>
              <label>
                <span>Name</span>
                <input name="name" type="text" required />
              </label>

              <label>
                <span>Email</span>
                <input name="email" type="email" required />
              </label>

              <label>
                <span>Message</span>
                <textarea name="message" rows={4} required />
              </label>

              <div className="contact-actions">
                <button type="submit" className="primary">Send Message</button>
              </div>

              {contactState.status === 'loading' && <div className="form-note">Sending…</div>}
              {contactState.status === 'success' && <div className="form-note success">{contactState.message}</div>}
              {contactState.status === 'error' && <div className="form-note error">{contactState.message}</div>}
            </form>
          </div>
        </div>
      </section>

      <search></search>
      <footer></footer>

    </div>
  );
}
