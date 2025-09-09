import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-brand">
              <h3 className="footer-logo">M.sanka</h3>
              <p className="footer-description">
                Creating beautiful, functional, and user-friendly web experiences 
                with modern technologies and best practices.
              </p>
            </div>

            <div className="footer-links">
              <div className="footer-section">
                <h4>Quick Links</h4>
                <ul>
                  <li><a href="#hero">Home</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#skills">Skills</a></li>
                  <li><a href="#projects">Projects</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </div>

              <div className="footer-section">
                <h4>Services</h4>
                <ul>
                  <li><a href="/">Web Development</a></li>
                  <li><a href="/">UI/UX Design</a></li>
                  <li><a href="/">Mobile Apps</a></li>
                  <li><a href="/">Videography & Editing</a></li>
                  <li><a href="/">Maintenance</a></li>
                </ul>
              </div>

              <div className="footer-section">
                <h4>Connect</h4>
                <ul>
                  <li><a href="mailto:naradamsanka@gmail.com">Email</a></li>
                  <li><a href="tel:+9474 0309918">Phone</a></li>
                  <li><a href="https://www.linkedin.com">LinkedIn</a></li>
                  <li><a href="https://github.com/NaradaMsanka">GitHub</a></li>
                  <li><a href="/">Twitter</a></li>
                </ul>
              </div>
            </div>

            <div className="footer-newsletter">
              <h4>Stay Updated</h4>
              <p>Subscribe to get the latest updates on new projects and blog posts.</p>
              <form className="newsletter-form">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="newsletter-input"
                />
                <button type="submit" className="newsletter-btn">
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <p className="copyright">
                © {currentYear} NaradaMsanka. All rights reserved.
              </p>
              
              <div className="footer-social">
                <a href="https://github.com/NaradaMsanka" className="social-link" aria-label="GitHub">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                  </svg>
                </a>
                
                <a href="https://www.linkedin.com" className="social-link" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect x="2" y="9" width="4" height="12"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </a>
                
                <a href="/" className="social-link" aria-label="Twitter">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                  </svg>
                </a>
                
                <a href="https://www.instagram.com/" className="social-link" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                </a>
              </div>

              <div className="footer-legal">
                <a href="/">Privacy Policy</a>
                <span className="separator">•</span>
                <a href="/">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;