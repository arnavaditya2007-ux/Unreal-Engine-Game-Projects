import React, { useContext, useState } from 'react';
import { GameContext } from '../App';
import { User, Award, Target, Gift } from 'lucide-react';
import { gameData } from '../data/gameData';

function ProfileView({ tab }) {
  const { playerRank, economy, inventory } = useContext(GameContext);
  const [activeTab, setActiveTab] = useState(tab || 'Overview');

  return (
    <div className="profile-view">
      <div className="view-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div>
          <h1 className="view-title">Player Profile</h1>
          <p className="view-subtitle">Review your stats, challenges, and achievements.</p>
        </div>
        <div style={{ display: 'flex', gap: '16px' }}>
          <button className={`btn-outline ${activeTab === 'Overview' ? 'btn-primary' : ''}`} onClick={() => setActiveTab('Overview')}><User size={16} /> Overview</button>
          <button className={`btn-outline ${activeTab === 'Challenges' ? 'btn-primary' : ''}`} onClick={() => setActiveTab('Challenges')}><Target size={16} /> Challenges</button>
          <button className={`btn-outline ${activeTab === 'Achievements' ? 'btn-primary' : ''}`} onClick={() => setActiveTab('Achievements')}><Award size={16} /> Achievements</button>
          <button className={`btn-outline ${activeTab === 'Rewards' ? 'btn-primary' : ''}`} onClick={() => setActiveTab('Rewards')}><Gift size={16} /> Rewards</button>
        </div>
      </div>

      <div className="glass-panel" style={{ padding: '32px' }}>
        {activeTab === 'Overview' && (
          <div style={{ display: 'flex', gap: '32px' }}>
             <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
                <div style={{ width: '150px', height: '150px', borderRadius: '50%', background: 'var(--color-surface)', border: '4px solid var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <User size={80} color="var(--color-primary)" />
                </div>
                <h2>PlayerName123</h2>
                <div style={{ background: 'var(--color-surface)', padding: '8px 16px', borderRadius: '20px', color: 'var(--color-accent)' }}>
                  {playerRank.name} ({playerRank.requiredPoints.toLocaleString()} RP)
                </div>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '14px' }}>Player Level: 100</p>
             </div>
             <div style={{ flex: 2, display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <h3 style={{ borderBottom: '1px solid var(--color-glass-border)', paddingBottom: '8px' }}>Career Stats</h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div style={{ background: 'var(--color-surface)', padding: '16px', borderRadius: '8px' }}>
                    <p style={{ color: 'var(--color-text-muted)' }}>Matches Played</p>
                    <p style={{ fontSize: '24px', fontWeight: 'bold' }}>1,204</p>
                  </div>
                  <div style={{ background: 'var(--color-surface)', padding: '16px', borderRadius: '8px' }}>
                    <p style={{ color: 'var(--color-text-muted)' }}>Win Rate</p>
                    <p style={{ fontSize: '24px', fontWeight: 'bold' }}>18.5%</p>
                  </div>
                  <div style={{ background: 'var(--color-surface)', padding: '16px', borderRadius: '8px' }}>
                    <p style={{ color: 'var(--color-text-muted)' }}>K/D Ratio</p>
                    <p style={{ fontSize: '24px', fontWeight: 'bold' }}>3.2</p>
                  </div>
                  <div style={{ background: 'var(--color-surface)', padding: '16px', borderRadius: '8px' }}>
                    <p style={{ color: 'var(--color-text-muted)' }}>Headshots</p>
                    <p style={{ fontSize: '24px', fontWeight: 'bold' }}>4,821</p>
                  </div>
                </div>
                
                <h3 style={{ borderBottom: '1px solid var(--color-glass-border)', paddingBottom: '8px', marginTop: '16px' }}>Avatars & Banners</h3>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <div style={{ padding: '8px 16px', border: '1px solid var(--color-glass-border)', borderRadius: '4px' }}>Theme: Dark</div>
                  <div style={{ padding: '8px 16px', border: '1px solid var(--color-glass-border)', borderRadius: '4px' }}>Banner: Premium</div>
                  <div style={{ padding: '8px 16px', border: '1px solid var(--color-glass-border)', borderRadius: '4px' }}>Flair: Nijo Assassin</div>
                </div>
             </div>
          </div>
        )}

        {activeTab === 'Challenges' && (
          <div>
            <h2 style={{ marginBottom: '24px' }}>Daily / Weekly / Monthly Challenges</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { title: 'Win 3 BR Matches', type: 'Daily', reward: '500 Silver Credits', progress: '1/3' },
                { title: 'Get 50 Headshots in MP', type: 'Weekly', reward: '2 Gold Credits', progress: '34/50' },
                { title: 'Play for 20 hours', type: 'Monthly', reward: 'Shadow Card', progress: '12/20' },
                { title: 'Heal 5 Injuries', type: 'Daily', reward: '100 Silver Credits', progress: '5/5 (Completed)' }
              ].map((challenge, idx) => (
                <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--color-surface)', padding: '16px 24px', borderRadius: '8px' }}>
                   <div>
                     <span style={{ fontSize: '12px', color: 'var(--color-primary)', background: 'rgba(0,240,255,0.1)', padding: '2px 6px', borderRadius: '4px', marginRight: '8px' }}>{challenge.type}</span>
                     <span style={{ fontSize: '18px', fontWeight: 'bold' }}>{challenge.title}</span>
                     <p style={{ color: 'var(--color-text-muted)', fontSize: '14px', marginTop: '4px' }}>Reward: {challenge.reward}</p>
                   </div>
                   <div style={{ fontWeight: 'bold', color: challenge.progress.includes('Completed') ? '#00ff88' : '#fff' }}>
                     {challenge.progress}
                   </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {activeTab === 'Achievements' && (
          <div>
            <h2 style={{ marginBottom: '24px' }}>Unlockable Achievements</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              {[
                { title: 'First Blood', desc: 'Get the first kill in a match.', unlocked: true },
                { title: 'Pacifist', desc: 'Reach Top 10 without dealing damage.', unlocked: false },
                { title: 'Almighty', desc: 'Reach Almighty 1 rank and meet the Boss Champ.', unlocked: false },
                { title: 'Pet Lover', desc: 'Unlock 3 pets.', unlocked: inventory.pets.length >= 3 },
                { title: 'Collector', desc: 'Own 20 skins.', unlocked: inventory.skins.length >= 20 },
              ].map((ach, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '16px', background: 'var(--color-surface)', padding: '16px', borderRadius: '8px', opacity: ach.unlocked ? 1 : 0.5 }}>
                  <Award size={40} color={ach.unlocked ? 'var(--color-accent)' : 'var(--color-text-muted)'} />
                  <div>
                    <h4 style={{ fontSize: '16px' }}>{ach.title}</h4>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '14px' }}>{ach.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'Rewards' && (
           <div style={{ textAlign: 'center', padding: '40px' }}>
              <Gift size={64} color="var(--color-primary)" style={{ marginBottom: '24px' }} />
              <h2>Playtime Rewards</h2>
              <p style={{ color: 'var(--color-text-muted)', margin: '16px auto', maxWidth: '400px' }}>
                You have played for 2 hours today. Claim your playtime reward crate!
              </p>
              <button className="btn-primary" onClick={() => alert("Claimed Playtime Reward: 200 Silver Credits!")}>CLAIM CRATE</button>
           </div>
        )}
      </div>
    </div>
  );
}

export default ProfileView;
