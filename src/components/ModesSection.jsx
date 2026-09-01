import React from 'react';
import { gameData } from '../data/gameData';

function ModesSection() {

  return (
    <section id="modes" className="bg-gradient-dark">
      <h2 className="section-title reveal">Diverse Game Modes</h2>
      <p className="section-subtitle reveal delay-1">Whether you're pushing ranks in Battle Royale, warming up in TDM, or fighting hordes in Zombie mode, there's always a challenge waiting.</p>
      
      <div className="grid-cards">
        {gameData.modes.map((mode, idx) => (
          <div key={idx} className={`card reveal delay-${(idx % 4) + 1}`}>
             <h3 style={{ fontSize: '24px', marginBottom: '12px' }}>{mode}</h3>
             <p style={{ color: 'var(--color-text-muted)' }}>
               {mode.includes('BR') ? 'Drop into massive 60-100 player maps. Loot, survive, and be the last one standing.' :
                mode.includes('TDM') ? 'Fast-paced 40, 60, or 120 kill matches. Quick and comfortable gameplay.' :
                mode.includes('Zombie') ? 'Survive endless waves. Protect the base.' : 
                mode.includes('Custom') ? 'Create private lobbies to play with friends, set rules, and host tournaments.' :
                'Climb the ranks and earn exclusive rewards in this competitive mode.'}
             </p>
          </div>
        ))}
      </div>
      
      <div style={{ marginTop: '60px', textAlign: 'center' }}>
         <div style={{ display: 'inline-block', padding: '16px 32px', background: 'rgba(255, 184, 0, 0.1)', borderRadius: '8px' }}>
            <h3 style={{ color: 'var(--color-primary)', marginBottom: '8px' }}>Offline Support Available</h3>
            <p style={{ color: 'var(--color-text-muted)' }}>Play Battle Royale offline against mainly bots. Perfect for training anywhere, anytime.</p>
         </div>
      </div>
    </section>
  );
}

export default ModesSection;
