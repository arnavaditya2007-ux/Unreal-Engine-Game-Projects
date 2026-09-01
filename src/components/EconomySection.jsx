import React from 'react';
import { gameData } from '../data/gameData';

function EconomySection() {
  return (
    <section id="economy" className="bg-pattern">
      <div className="reveal" style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h2 className="section-title">Economy & Store</h2>
        <p className="section-subtitle">Earn, trade, and unlock exclusive rewards in our comprehensive economy system.</p>
      </div>
      
      <div className="grid-cards" style={{ marginBottom: '40px' }}>
         <div className="glass-panel reveal delay-1" style={{ padding: '40px', background: 'rgba(20, 20, 23, 0.7)' }}>
            <h3 style={{ fontSize: '22px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '24px', color: 'var(--color-primary)', borderBottom: '1px solid rgba(255,184,0,0.3)', paddingBottom: '12px' }}>
              Currencies
            </h3>
            <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
               {gameData.currencies.map(c => (
                 <li key={c.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '8px', color: '#d1d1d6', fontSize: '15px' }}>
                    • {c.name}
                 </li>
               ))}
            </ul>
         </div>
         
         <div className="glass-panel reveal delay-2" style={{ padding: '40px', background: 'rgba(20, 20, 23, 0.7)' }}>
            <h3 style={{ fontSize: '22px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '24px', color: 'var(--color-secondary)', borderBottom: '1px solid rgba(255,0,85,0.3)', paddingBottom: '12px' }}>
              Store Items
            </h3>
            <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
               {gameData.store.packs.slice(0, 6).map(p => (
                 <li key={p} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '8px', color: '#d1d1d6', fontSize: '15px' }}>
                    • {p}
                 </li>
               ))}
            </ul>
         </div>
         
         <div className="glass-panel reveal delay-3" style={{ padding: '40px', background: 'rgba(20, 20, 23, 0.7)' }}>
            <h3 style={{ fontSize: '22px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '24px', color: '#fff', borderBottom: '1px solid rgba(255,255,255,0.3)', paddingBottom: '12px' }}>
              Customizations
            </h3>
            <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
               {['Gun skins', 'Car skins', 'Player skins', 'Avatar frame', 'Themes', 'Parachute skins', 'Glider skins'].map(i => (
                 <li key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '8px', color: '#d1d1d6', fontSize: '15px' }}>
                    • {i}
                 </li>
               ))}
            </ul>
         </div>
      </div>
    </section>
  );
}

export default EconomySection;
