import React, { useState } from 'react';

const categories = ['All', 'Desert', 'Jungle', 'Ruins', 'Snow', 'Temple', 'Village'];

// Generate image list
const images = [];
['desert', 'jungle', 'ruins', 'snow', 'temple', 'village'].forEach(category => {
  for (let i = 1; i <= 5; i++) {
    images.push({
      src: `screenshots/${category} (${i}).jpeg`,
      category: category.charAt(0).toUpperCase() + category.slice(1),
      alt: `${category.charAt(0).toUpperCase() + category.slice(1)} Map Prototype ${i}`
    });
  }
});

function PrototypeGallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages = selectedCategory === 'All' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  return (
    <section id="prototype-gallery" className="bg-pattern" style={{ background: 'var(--color-bg-dark)' }}>
      <h2 className="section-title reveal">Unreal Engine Prototypes</h2>
      <p className="section-subtitle reveal delay-1">Exclusive early look at in-engine environments and maps.</p>
      
      <div className="reveal delay-2" style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '16px',
        marginBottom: '40px'
      }}>
        {categories.map(category => (
          <button 
            key={category}
            onClick={() => setSelectedCategory(category)}
            style={{
              padding: '10px 24px',
              borderRadius: '30px',
              background: selectedCategory === category ? 'var(--color-primary)' : 'rgba(255, 255, 255, 0.05)',
              color: selectedCategory === category ? '#000' : '#fff',
              border: `1px solid ${selectedCategory === category ? 'var(--color-primary)' : 'rgba(255, 255, 255, 0.1)'}`,
              cursor: 'pointer',
              fontWeight: 'bold',
              transition: 'all 0.3s ease',
              boxShadow: selectedCategory === category ? '0 0 15px rgba(255,184,0,0.4)' : 'none'
            }}
            onMouseOver={(e) => {
              if (selectedCategory !== category) {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
              }
            }}
            onMouseOut={(e) => {
              if (selectedCategory !== category) {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
              }
            }}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="gallery-flex" style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '20px',
          padding: '0 20px',
          maxWidth: '1200px',
          margin: '0 auto'
      }}>
        {filteredImages.map((img, index) => (
          <div 
            key={img.src} 
            className="gallery-item glass-panel animate-fade-in" 
            onClick={() => setSelectedImage(img.src)} 
            style={{ 
              cursor: 'pointer', 
              overflow: 'hidden', 
              borderRadius: '12px',
              aspectRatio: '16/9',
              position: 'relative',
              flex: '0 1 calc(33.333% - 14px)',
              minWidth: '300px',
              maxWidth: '400px'
            }}
          >
            <img 
              src={img.src} 
              alt={img.alt} 
              loading="lazy" 
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.5s ease'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            />
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              padding: '15px',
              background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)',
              color: '#fff',
              fontWeight: 'bold',
              textShadow: '0 2px 4px rgba(0,0,0,0.8)',
              pointerEvents: 'none'
            }}>
              {img.category}
            </div>
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
          backgroundColor: 'rgba(0, 0, 0, 0.95)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px',
          backdropFilter: 'blur(10px)'
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
            transition: 'all 0.2s',
            zIndex: 10000
          }}
          onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(255, 0, 85, 0.3)'; e.currentTarget.style.borderColor = '#ff0055'; }}
          onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'; e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)'; }}
          >
            ✕
          </button>
          <img 
            src={selectedImage} 
            alt="Full screen preview" 
            style={{ 
              maxWidth: '90vw', 
              maxHeight: '90vh', 
              objectFit: 'contain', 
              borderRadius: '8px', 
              boxShadow: '0 10px 50px rgba(0,0,0,0.5), 0 0 30px rgba(255,184,0,0.15)' 
            }} 
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}
    </section>
  );
}

export default PrototypeGallery;
