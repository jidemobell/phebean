import { useState } from 'react';
import './Navigation.css';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-logo">
          Sweet Creations
        </div>
        
        <div className={`nav-menu ${isOpen ? 'nav-menu-open' : ''}`}>
          <button onClick={() => scrollToSection('hero')} className="nav-link">
            Home
          </button>
          <button onClick={() => scrollToSection('about')} className="nav-link">
            About
          </button>
          <button onClick={() => scrollToSection('gallery')} className="nav-link">
            Gallery
          </button>
          <button onClick={() => scrollToSection('services')} className="nav-link">
            Services
          </button>
          <button onClick={() => scrollToSection('contact')} className="nav-link">
            Contact
          </button>
        </div>
        
        <button 
          className={`nav-toggle ${isOpen ? 'nav-toggle-open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}
