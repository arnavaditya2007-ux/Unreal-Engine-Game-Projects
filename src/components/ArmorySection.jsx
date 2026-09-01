import React from 'react';
import { gameData } from '../data/gameData';

function ArmorySection() {
  return (
    <section id="armory" className="bg-gradient-dark">
      <h2 className="section-title reveal">Armory & Arsenal</h2>
      <p className="section-subtitle reveal delay-1">Wield swords with plasma energy, explosive crossbows, and mythic bows. Dominate the terrain with tanks, monster trucks, and helicopters.</p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr auto', gap: '40px' }}>
        
        {/* Top-left: Exotic Weapons */}
        <div className="glass-panel reveal delay-2" style={{ padding: '40px', background: 'rgba(20, 20, 23, 0.7)' }}>
           <h3 style={{ fontSize: '24px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '24px', color: 'var(--color-secondary)', borderBottom: '1px solid rgba(255,0,85,0.3)', paddingBottom: '12px' }}>
             Exotic Weapons
           </h3>
           <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px 24px' }}>
              {gameData.weapons.preEquipped.slice(0, 14).map(w => (
                 <li key={w} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '8px', color: '#d1d1d6', fontSize: '15px' }}>
                    • {w}
                 </li>
              ))}
           </ul>
        </div>

        {/* Top-right: Vehicles & Add-ons */}
        <div className="glass-panel reveal delay-3" style={{ padding: '40px', background: 'rgba(20, 20, 23, 0.7)' }}>
           <h3 style={{ fontSize: '24px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '24px', color: 'var(--color-primary)', borderBottom: '1px solid rgba(255,184,0,0.3)', paddingBottom: '12px' }}>
             Vehicles & Add-ons
           </h3>
           <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px 24px' }}>
              {gameData.vehicles.slice(0, 12).map(v => (
                 <li key={v} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '8px', color: '#d1d1d6', fontSize: '15px' }}>
                    • {v}
                 </li>
              ))}
           </ul>
        </div>

        {/* Bottom-left: Air Drop Exclusives */}
        <div className="glass-panel reveal delay-4" style={{ padding: '40px', background: 'rgba(20, 20, 23, 0.7)' }}>
           <h3 style={{ fontSize: '24px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '24px', color: '#ff8a8a', borderBottom: '1px solid rgba(255,138,138,0.3)', paddingBottom: '12px' }}>
             Air Drop Exclusives
           </h3>
           <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px 24px' }}>
              {gameData.weapons.airDrop.slice(0, 8).map(w => (
                 <li key={w} style={{ borderBottom: '1px solid rgba(255,0,85,0.1)', paddingBottom: '8px', color: '#ffb8b8', fontSize: '15px' }}>
                    • {w}
                 </li>
              ))}
           </ul>
        </div>

        {/* Bottom-right: Companion Pets */}
        <div className="glass-panel reveal delay-5" style={{ padding: '40px', background: 'rgba(20, 20, 23, 0.7)' }}>
           <h3 style={{ fontSize: '24px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px', color: 'var(--color-accent)', borderBottom: '1px solid rgba(255,184,0,0.3)', paddingBottom: '12px' }}>
             Companion Pets
           </h3>
           <p style={{ color: 'var(--color-text-muted)', marginBottom: '24px', fontSize: '14px' }}>Take companions into battle. Obtain them via Battle Pass or Events.</p>
           <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px 24px' }}>
              {gameData.animals.map(a => (
                 <li key={a} style={{ borderBottom: '1px solid rgba(255,184,0,0.1)', paddingBottom: '8px', color: 'var(--color-accent)', fontSize: '15px' }}>
                    • {a}
                 </li>
              ))}
           </ul>
        </div>

      </div>
    </section>
  );
}

export default ArmorySection;
