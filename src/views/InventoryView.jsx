import React, { useContext } from 'react';
import { GameContext } from '../App';
import { Backpack, Shield, Activity } from 'lucide-react';
import { gameData } from '../data/gameData';

function InventoryView() {
  const { inventory } = useContext(GameContext);

  return (
    <div className="inventory-view">
      <div className="view-header">
        <h1 className="view-title">Inventory & Loadout</h1>
        <p className="view-subtitle">Manage your weapons, skins, and check your base stats.</p>
      </div>

      <div style={{ display: 'flex', gap: '32px' }}>
        <div style={{ flex: 2 }}>
          <h3 style={{ marginBottom: '16px', color: 'var(--color-primary)' }}>Your Items</h3>
          <div className="grid-cards">
            {[...inventory.weapons, ...inventory.vehicles, ...inventory.pets, ...inventory.skins].map((item, idx) => (
              <div key={idx} className="card glass-panel" style={{ padding: '16px' }}>
                <div className="card-image-placeholder" style={{ height: '80px', marginBottom: '12px' }}>
                  <Backpack size={32} />
                </div>
                <h4 style={{ fontSize: '14px', textAlign: 'center' }}>{item}</h4>
              </div>
            ))}
            {inventory.weapons.length === 0 && inventory.skins.length === 0 && (
              <p style={{ color: 'var(--color-text-muted)' }}>Your inventory is empty. Visit the store!</p>
            )}
          </div>
        </div>

        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div className="glass-panel" style={{ padding: '24px' }}>
            <h3 style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-accent)' }}>
              <Shield size={20} /> Base Stats
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {gameData.baseStats.map(stat => (
                <div key={stat} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '14px' }}>{stat}</span>
                  <div style={{ width: '100px', height: '6px', background: 'var(--color-surface-hover)', borderRadius: '3px', overflow: 'hidden' }}>
                    <div style={{ width: `${Math.random() * 60 + 40}%`, height: '100%', background: 'var(--color-accent)' }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel" style={{ padding: '24px', border: '1px solid rgba(255, 0, 85, 0.3)' }}>
            <h3 style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-secondary)' }}>
              <Activity size={20} /> Active Injuries
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <span style={{ padding: '8px', background: 'rgba(255, 0, 85, 0.1)', borderRadius: '4px', fontSize: '14px', color: '#ffb8b8' }}>
                {gameData.injuries[0]} (-10% Movement)
              </span>
              <span style={{ padding: '8px', background: 'rgba(255, 0, 85, 0.1)', borderRadius: '4px', fontSize: '14px', color: '#ffb8b8' }}>
                {gameData.injuries[2]} (-5% Armor)
              </span>
              <button className="btn-outline" style={{ marginTop: '12px', color: 'var(--color-secondary)', borderColor: 'var(--color-secondary)' }}>HEAL ALL (100 🪙)</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InventoryView;
