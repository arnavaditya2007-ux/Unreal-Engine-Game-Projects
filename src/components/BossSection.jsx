import React from 'react';
import { gameData } from '../data/gameData';

function BossSection() {
  return (
    <section id="boss" style={{ 
      background: 'linear-gradient(0deg, rgba(255,0,85,0.1) 0%, var(--color-bg-dark) 100%)',
      borderTop: '1px solid rgba(255,0,85,0.2)',
      borderBottom: '1px solid rgba(255,0,85,0.2)'
    }}>
      <div className="reveal" style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h2 style={{ fontSize: '48px', color: 'var(--color-secondary)', textShadow: '0 0 20px var(--color-secondary-glow)', textTransform: 'uppercase', marginBottom: '16px' }}>
          When the Sky Turns Red
        </h2>
        <p style={{ fontSize: '20px', color: 'var(--color-text-muted)', maxWidth: '800px', margin: '0 auto' }}>
          Rank up from Bronze 5 to the legendary Almighty 1. When you reach the top, the Boss Champ is summoned from ground to sky to bestow the Almighty Badge.
        </p>
      </div>

      <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
        <div style={{ flex: 1 }} className="glass-panel reveal delay-1">
          <div style={{ padding: '32px' }}>
            <h3 style={{ fontSize: '24px', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              Rank Progression
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              {gameData.ranks.map((rank, idx) => (
                <div key={idx} style={{ 
                  padding: '12px', background: 'var(--color-surface)', borderRadius: '4px',
                  borderLeft: `4px solid ${idx === 9 ? 'var(--color-secondary)' : 'var(--color-glass-border)'}`
                }}>
                  <div style={{ fontWeight: 'bold', color: idx === 9 ? 'var(--color-secondary)' : '#fff' }}>{rank.name}</div>
                  <div style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>{rank.requiredPoints.toLocaleString()} RP</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ flex: 1 }}>
          <div className="glass-panel reveal delay-2" style={{ padding: '40px', background: 'rgba(255,0,85,0.05)', border: '1px solid rgba(255,0,85,0.2)' }}>
             <h3 style={{ fontSize: '32px', color: '#fff', marginBottom: '16px' }}>Boss Champ Features</h3>
             <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '18px', color: 'var(--color-text-muted)' }}>
               {gameData.bossChamp.features.slice(0, 6).map((feat, idx) => (
                 <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                   <div style={{ width: '8px', height: '8px', background: 'var(--color-secondary)', borderRadius: '50%', boxShadow: '0 0 10px var(--color-secondary)' }}></div>
                   {feat}
                 </li>
               ))}
             </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BossSection;
