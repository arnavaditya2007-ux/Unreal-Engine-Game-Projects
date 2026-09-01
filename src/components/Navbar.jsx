import React, { useState, useEffect } from 'react';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        GAME PROTOTYPE
      </div>
      <div className="nav-links">
        <a href="#modes" className="nav-link">Game Modes</a>
        <a href="#world" className="nav-link">The World</a>
        <a href="#gallery" className="nav-link">Gallery</a>
        <a href="#armory" className="nav-link">Armory</a>
        <a href="#boss" className="nav-link">Boss Champ</a>
        <a href="#economy" className="nav-link">Economy</a>
      </div>
    </nav>
  );
}

export default Navbar;
