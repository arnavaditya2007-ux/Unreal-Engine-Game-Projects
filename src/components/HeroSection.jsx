import React from 'react';

function HeroSection() {
  return (
    <section id="hero" style={{ 
      height: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      position: 'relative',
      background: 'linear-gradient(90deg, rgba(9,9,11,1) 0%, rgba(9,9,11,0.6) 50%, rgba(9,9,11,0.2) 100%), url("assets/game_map (1).png")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      <div style={{ maxWidth: '800px', zIndex: 2 }}>
        <div className="cinematic-badge">
          <span className="badge-icon"></span>
          <span className="badge-text">Shape-Shift & Camouflage into any environment object!</span>
          <span className="badge-icon"></span>
        </div>
        <h1 style={{ fontSize: '72px', lineHeight: '1.1', marginBottom: '24px', textShadow: '0 0 40px rgba(255,255,255,0.2)' }}>
          THE ULTIMATE AAA<br/>BATTLE ROYALE
        </h1>
        <p style={{ fontSize: '24px', color: 'var(--color-text-muted)', marginBottom: '40px', maxWidth: '600px' }}>
          Experience fast loading, dynamic weather, and 100-player lobbies. Transform into nearby objects to outsmart your enemies in a highly interactive world!
        </p>
        <div style={{ display: 'flex', gap: '20px' }}>
          <button className="card glass-panel" style={{ padding: '20px 40px', background: 'transparent', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '20px', fontWeight: 'bold', textTransform: 'uppercase' }}>
            View Trailer
          </button>
        </div>
      </div>

    </section>
  );
}

export default HeroSection;
