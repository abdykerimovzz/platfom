import React, { useState } from "react";
import { FaInstagram, FaGithub } from "react-icons/fa";

// Replace these with your real profile URLs
const INSTAGRAM_URL = 'https://www.instagram.com/A_ABDYKERIMOV_';
const GITHUB_URL = 'https://github.com/your_username';


export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="site-header">
            <div className="logo">MySite</div>

            <button
                className={`burger ${open ? 'open' : ''}`}
                aria-label={open ? 'Close menu' : 'Open menu'}
                aria-expanded={open}
                onClick={() => setOpen(prev => !prev)}
            >
                <span />
                <span />
                <span />
            </button>

            <nav className={`nav-links ${open ? 'open' : ''}`}>
                <a href="/" onClick={() => setOpen(false)}>Home</a>
                <a href="/design" onClick={() => setOpen(false)}>Design</a>
                <a href="/development" onClick={() => setOpen(false)}>Development</a>
                <a href="/blog" onClick={() => setOpen(false)}>Blog</a>
                <a href="/resources" onClick={() => setOpen(false)}>Resources</a>
            </nav>

            <div className="social-icons">
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-link instagram">
                    <FaInstagram  />
                </a>
                <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-link github">
                    <FaGithub />
                </a>
            </div>
        </header>
    );
}
