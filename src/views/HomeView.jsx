import React, { useContext } from 'react';
import { GameContext } from '../App';
import { Play, Calendar, Zap, AlertTriangle } from 'lucide-react';
import { gameData } from '../data/gameData';

function HomeView() {
  const { navigate } = useContext(GameContext);

  return (
    <div className="home-view">
      <div className="view-header">
        <h1 className="view-title">Lobby</h1>
        <p className="view-subtitle">Welcome back. The battlefield awaits.</p>
      </div>

      <div className="hero-section glass-panel" style={{ padding: '40px', marginBottom: '32px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '600px' }}>
          <h2 style={{ fontSize: '48px', color: 'var(--color-primary)', textShadow: '0 0 20px var(--color-primary-glow)', marginBottom: '16px' }}>
            NIJO - THE ASSASSIN
          </h2>
          <p style={{ fontSize: '18px', color: 'var(--color-text-muted)', marginBottom: '24px', lineHeight: '1.6' }}>
            Experience the new concept character. Master the dynamic weather system and explore custom maps in the ultimate AAA battle royale experience.
          </p>
          <div style={{ display: 'flex', gap: '16px' }}>
            <button className="btn-primary" onClick={() => navigate('br')} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '18px', padding: '12px 32px' }}>
              <Play fill="#000" /> PLAY BR
            </button>
            <button className="btn-outline" onClick={() => navigate('mp')}>
              MULTIPLAYER
            </button>
          </div>
        </div>
        
        {/* Placeholder for Nijo 3D model/Image */}
        <div style={{ position: 'absolute', right: '-50px', top: '10%', height: '120%', width: '600px', background: 'radial-gradient(circle, rgba(0,240,255,0.2) 0%, transparent 70%)', zIndex: 1, pointerEvents: 'none' }}>
           {/* Replace with actual image later if needed */}
           <div style={{width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0.1}}>
             <Zap size={300} />
           </div>
        </div>
      </div>

      <h3 style={{ marginBottom: '24px', color: 'var(--color-text-muted)' }}>QUICK ACCESS</h3>
      <div className="grid-cards">
        <div className="card glass-panel glow-effect" onClick={() => navigate('challenges')}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <Calendar size={32} color="var(--color-accent)" />
            <span style={{ background: 'rgba(255, 184, 0, 0.2)', padding: '4px 8px', borderRadius: '4px', fontSize: '12px', color: 'var(--color-accent)' }}>NEW</span>
          </div>
          <h4 className="card-title">Daily Login Rewards</h4>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '14px' }}>Claim your rewards from the monthly calendar.</p>
        </div>

        <div className="card glass-panel glow-effect" onClick={() => navigate('battlepass')}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <Zap size={32} color="var(--color-secondary)" />
          </div>
          <h4 className="card-title">Battle Pass Season</h4>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '14px' }}>Unlock premium skins, pets, and avatars.</p>
        </div>

        <div className="card glass-panel glow-effect" onClick={() => navigate('store')}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <AlertTriangle size={32} color="var(--color-primary)" />
            <span style={{ background: 'rgba(0, 240, 255, 0.2)', padding: '4px 8px', borderRadius: '4px', fontSize: '12px', color: 'var(--color-primary)' }}>SALE</span>
          </div>
          <h4 className="card-title">Featured Store</h4>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '14px' }}>Grab the Shadow Cards and Double Punk XP Packs.</p>
        </div>
      </div>
    </div>
  );
}

export default HomeView;
