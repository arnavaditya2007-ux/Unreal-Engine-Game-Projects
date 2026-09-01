import React from 'react';
import { Trophy, Medal, Star } from 'lucide-react';
import { gameData } from '../data/gameData';

function LeaderboardsView({ tab }) {
  const isRankings = tab === 'Rankings';

  return (
    <div className="leaderboards-view">
      <div className="view-header">
        <h1 className="view-title">{isRankings ? 'Rank Tiers' : 'Global Leaderboards'}</h1>
        <p className="view-subtitle">
          {isRankings ? 'Climb from Bronze 5 to Almighty 1.' : 'Top players from around the world.'}
        </p>
      </div>

      <div className="glass-panel" style={{ padding: '32px' }}>
        {isRankings ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {gameData.ranks.map((rank, idx) => (
              <div key={idx} style={{ 
                display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
                padding: '16px 24px', background: 'var(--color-surface)', 
                borderRadius: '8px', borderLeft: `4px solid ${idx > 7 ? 'var(--color-primary)' : idx > 4 ? 'var(--color-accent)' : 'var(--color-text-muted)'}`
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  {idx === gameData.ranks.length - 1 ? <Star color="var(--color-primary)" /> : <Medal color="var(--color-text-muted)" />}
                  <span style={{ fontSize: '18px', fontWeight: 'bold' }}>{rank.name}</span>
                </div>
                <span style={{ color: 'var(--color-accent)', fontWeight: 'bold' }}>{rank.requiredPoints.toLocaleString()} RP</span>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px' }}>
            {gameData.leaderboards.map((lb, idx) => (
              <div key={idx} style={{ padding: '24px', background: 'var(--color-surface)', borderRadius: '12px', textAlign: 'center', border: '1px solid var(--color-glass-border)' }}>
                <Trophy size={48} color={idx < 3 ? 'var(--color-accent)' : 'var(--color-text-muted)'} style={{ marginBottom: '16px' }} />
                <h3 style={{ fontSize: '24px', marginBottom: '8px' }}>{lb}</h3>
                <p style={{ color: 'var(--color-primary)' }}>View Players</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default LeaderboardsView;
