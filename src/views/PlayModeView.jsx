import React, { useState, useContext, useEffect } from 'react';
import { GameContext } from '../App';
import { ShieldAlert, Crosshair, Map as MapIcon, Users, Settings2, Play } from 'lucide-react';
import { gameData } from '../data/gameData';

function PlayModeView({ mode }) {
  const { playerRank, setPlayerRank, economy, setEconomy } = useContext(GameContext);
  const [isMatchmaking, setIsMatchmaking] = useState(false);
  const [matchResult, setMatchResult] = useState(null);
  const [showBossChampEvent, setShowBossChampEvent] = useState(false);

  // Reset state when mode changes
  useEffect(() => {
    setIsMatchmaking(false);
    setMatchResult(null);
    setShowBossChampEvent(false);
  }, [mode]);

  const simulateMatch = () => {
    setIsMatchmaking(true);
    setMatchResult(null);
    
    // Simulate 3 seconds of matchmaking/gameplay
    setTimeout(() => {
      setIsMatchmaking(false);
      
      const won = Math.random() > 0.5;
      const pointsEarned = won ? Math.floor(Math.random() * 500) + 100 : -(Math.floor(Math.random() * 100));
      const creditsEarned = won ? Math.floor(Math.random() * 200) + 50 : 10;
      
      setMatchResult({
        won,
        points: pointsEarned,
        credits: creditsEarned,
        kills: Math.floor(Math.random() * 15)
      });
      
      // Update economy
      setEconomy(prev => ({
        ...prev,
        silver_credits: prev.silver_credits + creditsEarned
      }));
      
      // Check for Almighty rank promotion animation trigger
      if (playerRank.name === "Mythical 3" && won && Math.random() > 0.3) {
        // Promote to Almighty 1 for demonstration
        setPlayerRank(gameData.ranks[9]); 
        setShowBossChampEvent(true);
      } else if (playerRank.name === "Almighty 1" && won) {
         setShowBossChampEvent(true);
      }
      
    }, 3000);
  };

  const renderBossChampAnimation = () => (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(255,0,0,0.85)', zIndex: 1000, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
      <h1 style={{ fontSize: '72px', textShadow: '0 0 40px #fff', marginBottom: '20px', letterSpacing: '10px' }}>SKY TURNS RED</h1>
      <h2 style={{ fontSize: '36px', marginBottom: '40px' }}>BOSS CHAMP SUMMONED</h2>
      <div style={{ width: '200px', height: '200px', background: '#000', borderRadius: '50%', border: '4px solid #ffb800', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '40px', boxShadow: '0 0 50px #ffb800' }}>
         <ShieldAlert size={100} color="#ffb800" />
      </div>
      <p style={{ fontSize: '24px', fontStyle: 'italic', marginBottom: '40px' }}>"Only the worthy shall bear the Almighty badge."</p>
      
      <button className="btn-primary" onClick={() => setShowBossChampEvent(false)} style={{ background: '#ffb800', color: '#000' }}>
        Accept Almighty Badge & Return to Lobby
      </button>
    </div>
  );

  return (
    <div className="play-mode-view">
      <div className="view-header">
        <h1 className="view-title">{mode} Mode</h1>
        <p className="view-subtitle">Select your loadout and enter the battlefield.</p>
      </div>
      
      {showBossChampEvent && renderBossChampAnimation()}

      <div style={{ display: 'flex', gap: '32px' }}>
        <div style={{ flex: 2 }}>
          <div className="glass-panel" style={{ padding: '32px', minHeight: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            
            {isMatchmaking ? (
              <div style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '24px' }}>
                <div className="glow-effect" style={{ width: '80px', height: '80px', borderRadius: '50%', border: '4px solid var(--color-primary)', borderTopColor: 'transparent', animation: 'spin 1s linear infinite' }}></div>
                <style>{`@keyframes spin { 100% { transform: rotate(360deg); } }`}</style>
                <h2 style={{ color: 'var(--color-primary)' }}>MATCHMAKING...</h2>
                <p style={{ color: 'var(--color-text-muted)' }}>Finding optimal server (Low Ping)</p>
              </div>
            ) : matchResult ? (
              <div style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
                <h2 style={{ fontSize: '48px', color: matchResult.won ? 'var(--color-primary)' : 'var(--color-secondary)' }}>
                  {matchResult.won ? 'VICTORY' : 'DEFEAT'}
                </h2>
                <div style={{ display: 'flex', gap: '24px', margin: '24px 0' }}>
                  <div style={{ textAlign: 'center' }}>
                    <h4 style={{ color: 'var(--color-text-muted)' }}>KILLS</h4>
                    <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{matchResult.kills}</p>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <h4 style={{ color: 'var(--color-text-muted)' }}>RANK POINTS</h4>
                    <p style={{ fontSize: '24px', fontWeight: 'bold', color: matchResult.points > 0 ? '#00ff88' : '#ff0055' }}>
                      {matchResult.points > 0 ? '+' : ''}{matchResult.points}
                    </p>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <h4 style={{ color: 'var(--color-text-muted)' }}>CREDITS</h4>
                    <p style={{ fontSize: '24px', fontWeight: 'bold', color: 'var(--color-primary)' }}>
                      +{matchResult.credits} ⚪
                    </p>
                  </div>
                </div>
                <button className="btn-primary" onClick={() => setMatchResult(null)}>PLAY AGAIN</button>
              </div>
            ) : (
              <>
                <div>
                  <h3 style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}><MapIcon size={20}/> Maps Available</h3>
                  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '32px' }}>
                    {mode === 'BR' ? (
                      gameData.locations.natural.slice(0, 5).map(map => (
                        <span key={map} style={{ padding: '8px 16px', background: 'var(--color-surface)', borderRadius: '20px', fontSize: '14px', border: '1px solid var(--color-glass-border)' }}>{map}</span>
                      ))
                    ) : (
                      gameData.locations.military.slice(0, 5).map(map => (
                        <span key={map} style={{ padding: '8px 16px', background: 'var(--color-surface)', borderRadius: '20px', fontSize: '14px', border: '1px solid var(--color-glass-border)' }}>{map}</span>
                      ))
                    )}
                  </div>

                  <h3 style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}><Settings2 size={20}/> Mode Settings</h3>
                  <div style={{ display: 'flex', gap: '24px', color: 'var(--color-text-muted)' }}>
                     <div>
                       <strong>Players:</strong> {mode === 'BR' ? '60/100' : '40/60/120 kills'}
                     </div>
                     <div>
                       <strong>Perspective:</strong> FPP / TPP
                     </div>
                     <div>
                       <strong>Auto-fill:</strong> Enabled
                     </div>
                  </div>
                </div>
                
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
                  <button className="btn-primary" onClick={simulateMatch} style={{ padding: '16px 64px', fontSize: '24px', display: 'flex', alignItems: 'center', gap: '12px', boxShadow: '0 0 20px var(--color-primary-glow)' }}>
                    <Play fill="#000" /> START MATCH
                  </button>
                </div>
              </>
            )}
            
          </div>
        </div>

        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div className="glass-panel" style={{ padding: '24px' }}>
            <h3 style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}><Crosshair size={20}/> Current Loadout</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
               <div style={{ padding: '12px', background: 'var(--color-surface)', borderRadius: '8px', borderLeft: '4px solid var(--color-primary)' }}>
                 <p style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>Primary Weapon</p>
                 <p style={{ fontWeight: 'bold' }}>{gameData.weapons.preEquipped[0]}</p>
               </div>
               <div style={{ padding: '12px', background: 'var(--color-surface)', borderRadius: '8px', borderLeft: '4px solid var(--color-secondary)' }}>
                 <p style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>Secondary Weapon</p>
                 <p style={{ fontWeight: 'bold' }}>{gameData.weapons.preEquipped[10]}</p>
               </div>
               <div style={{ padding: '12px', background: 'var(--color-surface)', borderRadius: '8px', borderLeft: '4px solid var(--color-accent)' }}>
                 <p style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>Vehicle Skin</p>
                 <p style={{ fontWeight: 'bold' }}>{gameData.vehicles[0]}</p>
               </div>
            </div>
            <button className="btn-outline" style={{ width: '100%', marginTop: '16px' }}>EDIT LOADOUT</button>
          </div>

          <div className="glass-panel" style={{ padding: '24px' }}>
            <h3 style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}><Users size={20}/> Squad</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
               <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px', background: 'var(--color-surface-hover)', borderRadius: '8px' }}>
                 <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--color-primary)' }}></div>
                 <span>You</span>
               </div>
               <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px', border: '1px dashed var(--color-glass-border)', borderRadius: '8px', color: 'var(--color-text-muted)' }}>
                 <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'transparent', border: '1px solid var(--color-text-muted)' }}></div>
                 <span>Invite Friend</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayModeView;
