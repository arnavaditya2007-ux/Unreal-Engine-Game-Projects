import React from 'react';
import { gameData } from '../data/gameData';
import { Shield, Car, User, Cat, Map } from 'lucide-react';

function CodexView({ category }) {
  let displayData = [];
  let icon = null;
  let title = category || "Codex";

  switch (category) {
    case 'Vehicles':
      displayData = [...gameData.vehicles, ...gameData.addons.filter(a => a.includes('Tractor') || a.includes('Horse'))];
      icon = <Car size={32} color="var(--color-primary)" />;
      break;
    case 'Weapons':
      displayData = [...gameData.weapons.preEquipped, ...gameData.weapons.airDrop];
      icon = <Shield size={32} color="var(--color-secondary)" />;
      break;
    case 'Characters':
      displayData = ["Nijo - The Assassin", ...gameData.store.realMoneyItems.filter(i => i.includes('skins') && !i.includes('Gun') && !i.includes('Car'))];
      icon = <User size={32} color="var(--color-accent)" />;
      break;
    case 'Pets':
      displayData = [...gameData.animals, ...gameData.pets.items];
      icon = <Cat size={32} color="var(--color-primary)" />;
      break;
    case 'Maps':
      displayData = [
        ...gameData.locations.cultural, 
        ...gameData.locations.urban, 
        ...gameData.locations.industrial, 
        ...gameData.locations.military, 
        ...gameData.locations.natural, 
        ...gameData.locations.waterBased, 
        ...gameData.locations.rural
      ];
      icon = <Map size={32} color="var(--color-secondary)" />;
      break;
    default:
      displayData = [];
  }

  return (
    <div className="codex-view">
      <div className="view-header" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <div style={{ width: '64px', height: '64px', borderRadius: '12px', background: 'var(--color-surface)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--color-glass-border)' }}>
          {icon}
        </div>
        <div>
          <h1 className="view-title">{title} Database</h1>
          <p className="view-subtitle">Total Entries: {displayData.length}</p>
        </div>
      </div>

      <div className="grid-cards">
        {displayData.map((item, idx) => (
          <div key={idx} className="card glass-panel glow-effect">
            <div className="card-image-placeholder" style={{ height: '100px' }}>
              <span style={{ opacity: 0.2 }}>[ IMAGE PLACEHOLDER ]</span>
            </div>
            <h4 className="card-title" style={{ fontSize: '16px' }}>{item}</h4>
            <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontSize: '12px', color: 'var(--color-text-muted)', background: 'var(--color-surface)', padding: '4px 8px', borderRadius: '4px' }}>
                Tier: {Math.random() > 0.8 ? 'Legendary' : Math.random() > 0.5 ? 'Epic' : 'Common'}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CodexView;
