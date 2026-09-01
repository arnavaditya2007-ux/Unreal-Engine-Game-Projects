import React from 'react';
import { gameData } from '../data/gameData';

function Footer() {
  return (
    <footer style={{ background: '#050505', padding: '60px 5%', borderTop: '1px solid var(--color-glass-border)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', marginBottom: '60px' }}>
        
        <div>
          <div className="logo" style={{ marginBottom: '24px' }}>
            GAME PROTOTYPE
          </div>
          <p style={{ color: 'var(--color-text-muted)' }}>The ultimate battle royale experience optimized for every device.</p>
        </div>
        
        <div>
           <h4 style={{ color: '#fff', marginBottom: '16px', fontSize: '18px' }}>Platforms</h4>
           <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', color: 'var(--color-text-muted)' }}>
              {['Play store', 'Windows store', 'MS store', 'App store', 'Play station', 'Microsoft XBox'].map(p => (
                <li key={p}>{p}</li>
              ))}
           </ul>
        </div>
        
        <div>
           <h4 style={{ color: '#fff', marginBottom: '16px', fontSize: '18px' }}>Versions</h4>
           <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', color: 'var(--color-text-muted)' }}>
              {gameData.mainGameVariations.map(v => (
                <li key={v}>{v}</li>
              ))}
           </ul>
        </div>
        
        <div>
           <h4 style={{ color: '#fff', marginBottom: '16px', fontSize: '18px' }}>Legal</h4>
           <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', color: 'var(--color-text-muted)' }}>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>Code of Conduct</li>
           </ul>
        </div>
        
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '24px', borderTop: '1px solid rgba(255,255,255,0.1)', color: 'var(--color-text-muted)', fontSize: '14px', flexWrap: 'wrap', gap: '16px' }}>
         <p>© 2026 Game Prototype Studio. All rights reserved.</p>
         <div style={{ display: 'flex', gap: '16px' }}>
            <span>Estimated Download Size: 1.2GB</span>
            <span>|</span>
            <span>Cross Platform Supported</span>
         </div>
      </div>
    </footer>
  );
}

export default Footer;
