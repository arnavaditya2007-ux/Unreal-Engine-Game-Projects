import React from 'react';
import { gameData } from '../data/gameData';

function WorldSection() {
  const categories = [
    { name: 'Cultural & Historical', data: gameData.locations.cultural },
    { name: 'Urban & City', data: gameData.locations.urban.slice(0, 8) },
    { name: 'Industrial Sites', data: gameData.locations.industrial.slice(0, 8) },
    { name: 'Military Bases', data: gameData.locations.military },
    { name: 'Natural Environments', data: gameData.locations.natural.slice(0, 8) },
    { name: 'Water-based Areas', data: gameData.locations.waterBased.slice(0, 8) }
  ];

  return (
    <section id="world" className="bg-pattern">
      <h2 className="section-title reveal">A Massive, Dynamic World</h2>
      <p className="section-subtitle reveal delay-1">Drop into dozens of uniquely crafted POIs across varying terrains. Adapt to the dynamic weather system and find cover in sealed crates.</p>
      
      <div className="grid-cards">
        {categories.map((cat, idx) => (
          <div key={idx} className={`card reveal delay-${(idx % 4) + 1}`} style={{ background: 'rgba(24, 24, 27, 0.9)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px', color: 'var(--color-primary)' }}>
               <h3 style={{ fontSize: '20px', color: '#fff' }}>{cat.name}</h3>
            </div>
            <ul style={{ listStyle: 'none', color: 'var(--color-text-muted)', lineHeight: '1.8' }}>
              {cat.data.map(loc => (
                <li key={loc} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ width: '6px', height: '6px', background: 'var(--color-text-muted)', borderRadius: '50%' }}></span>
                  {loc}
                </li>
              ))}
              {cat.data.length >= 8 && <li style={{ fontStyle: 'italic', marginTop: '8px' }}>+ Many more...</li>}
            </ul>
          </div>
        ))}
      </div>
      
      <div style={{ marginTop: '60px', padding: '40px', background: 'var(--color-surface)', borderRadius: '12px', border: '1px solid var(--color-glass-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '24px' }}>
         <div>
            <h3 style={{ fontSize: '24px', marginBottom: '8px' }}>Dynamic Environmental Interaction</h3>
            <p style={{ color: 'var(--color-text-muted)' }}>Drive through bushes, fences, tree stumps, traffic cones, and snow. Use building jumps and barrel ramps for tactical advantages.</p>
         </div>
         <div style={{ display: 'flex', gap: '12px' }}>
            {gameData.obstacles.slice(0, 4).map(obs => (
               <span key={obs} style={{ padding: '8px 16px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px' }}>{obs}</span>
            ))}
         </div>
      </div>
    </section>
  );
}

export default WorldSection;
