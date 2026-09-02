import React, { useState } from 'react';

function GallerySection() {
  const [selectedImage, setSelectedImage] = useState(null);
  const imageNumbers = [4, 5, 6, 9, 10, 12, 7, 11, 8];
  const images = imageNumbers.map(n => `assets/game_map (${n}).png`);

  return (
    <section id="gallery" className="bg-pattern" style={{ background: 'var(--color-bg-dark)' }}>
      <h2 className="section-title reveal">Final In-Game Renders</h2>
      <p className="section-subtitle reveal delay-1">Experience the fully realized, high-fidelity environments of the finished game.</p>
      
      <div className="gallery-grid">
        {images.map((src, index) => (
          <div key={index} className={`gallery-item glass-panel reveal delay-${(index % 4) + 1}`} onClick={() => setSelectedImage(src)} style={{ cursor: 'pointer' }}>
            <img src={src} alt={`Game Map ${index + 1}`} loading="lazy" />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.9)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px'
        }} onClick={() => setSelectedImage(null)}>
          <button style={{
            position: 'absolute',
            top: '24px',
            right: '24px',
            background: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '50%',
            color: '#fff',
            cursor: 'pointer',
            padding: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s'
          }}
          onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(255, 0, 85, 0.3)'; e.currentTarget.style.borderColor = '#ff0055'; }}
          onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'; e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)'; }}
          >
            ✕
          </button>
          <img src={selectedImage} alt="Full screen preview" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', borderRadius: '8px', boxShadow: '0 0 50px rgba(255,184,0,0.2)' }} onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </section>
  );
}

export default GallerySection;
