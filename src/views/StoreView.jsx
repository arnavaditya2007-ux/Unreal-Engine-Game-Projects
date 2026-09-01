import React, { useContext, useState } from 'react';
import { GameContext } from '../App';
import { ShoppingCart, Star, Package, Check, X } from 'lucide-react';
import { gameData } from '../data/gameData';

function StoreView({ category }) {
  const { economy, setEconomy, inventory, setInventory } = useContext(GameContext);
  const [activeTab, setActiveTab] = useState(category === 'Pass' ? 'Battle Pass' : 'Store');
  const [purchaseModal, setPurchaseModal] = useState(null);

  const storeItems = [
    ...gameData.store.wearables.map(w => ({ name: w, type: 'Wearable', price: 500, currency: 'silver_credits' })),
    ...gameData.store.packs.map(p => ({ name: p, type: 'Pack', price: 150, currency: 'gold_credits' })),
    ...gameData.store.realMoneyItems.slice(5, 20).map(s => ({ name: s, type: 'Skin', price: 1000, currency: 'silver_credits' }))
  ];

  const handlePurchase = (item) => {
    if (economy[item.currency] >= item.price) {
      // Deduct currency
      setEconomy(prev => ({
        ...prev,
        [item.currency]: prev[item.currency] - item.price
      }));
      // Add to inventory
      setInventory(prev => ({
        ...prev,
        skins: [...prev.skins, item.name]
      }));
      setPurchaseModal({ success: true, item });
    } else {
      setPurchaseModal({ success: false, item });
    }
  };

  const getCurrencySymbol = (type) => {
    switch(type) {
      case 'silver_credits': return <span style={{color: '#c0c0c0'}}>⚪</span>;
      case 'gold_credits': return <span style={{color: '#ffb800'}}>🪙</span>;
      default: return '🪙';
    }
  };

  return (
    <div className="store-view">
      <div className="view-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div>
          <h1 className="view-title">Store & Economy</h1>
          <p className="view-subtitle">Purchase exclusive skins, packs, and the Battle Pass.</p>
        </div>
        <div style={{ display: 'flex', gap: '16px' }}>
          <button className={`btn-outline ${activeTab === 'Store' ? 'btn-primary' : ''}`} onClick={() => setActiveTab('Store')}>Store Items</button>
          <button className={`btn-outline ${activeTab === 'Battle Pass' ? 'btn-primary' : ''}`} onClick={() => setActiveTab('Battle Pass')}>Battle Pass</button>
        </div>
      </div>

      {purchaseModal && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.8)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="glass-panel" style={{ padding: '32px', maxWidth: '400px', textAlign: 'center' }}>
            {purchaseModal.success ? (
              <>
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(0,255,136,0.2)', color: '#00ff88', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                  <Check size={32} />
                </div>
                <h2>PURCHASE SUCCESSFUL</h2>
                <p style={{ margin: '16px 0', color: 'var(--color-text-muted)' }}>You have acquired <strong>{purchaseModal.item.name}</strong>.</p>
              </>
            ) : (
              <>
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(255,0,85,0.2)', color: '#ff0055', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                  <X size={32} />
                </div>
                <h2>INSUFFICIENT FUNDS</h2>
                <p style={{ margin: '16px 0', color: 'var(--color-text-muted)' }}>You do not have enough {purchaseModal.item.currency.replace('_', ' ')} for this item.</p>
              </>
            )}
            <button className="btn-primary" onClick={() => setPurchaseModal(null)}>CLOSE</button>
          </div>
        </div>
      )}

      {activeTab === 'Store' && (
        <div className="grid-cards">
          {storeItems.map((item, idx) => {
            const isOwned = inventory.skins.includes(item.name);
            return (
              <div key={idx} className="card glass-panel">
                <div className="card-image-placeholder">
                  {item.type === 'Pack' ? <Package size={48} /> : <ShoppingCart size={48} />}
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <h4 className="card-title">{item.name}</h4>
                    <p style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>{item.type}</p>
                  </div>
                </div>
                <div className="card-meta">
                  <div style={{ fontSize: '18px', fontWeight: 'bold' }}>
                    {getCurrencySymbol(item.currency)} {item.price.toLocaleString()}
                  </div>
                  <button 
                    className={isOwned ? "btn-outline" : "btn-primary"} 
                    disabled={isOwned}
                    onClick={() => handlePurchase(item)}
                  >
                    {isOwned ? 'OWNED' : 'BUY'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {activeTab === 'Battle Pass' && (
        <div className="glass-panel" style={{ padding: '40px', textAlign: 'center', background: 'linear-gradient(135deg, rgba(255,184,0,0.1), rgba(0,0,0,0.8))', border: '1px solid rgba(255,184,0,0.3)' }}>
          <Star size={64} color="var(--color-accent)" style={{ marginBottom: '24px' }} />
          <h2 style={{ fontSize: '36px', color: 'var(--color-accent)', marginBottom: '16px' }}>PREMIUM BATTLE PASS</h2>
          <p style={{ fontSize: '18px', color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto 32px' }}>
            Unlock exclusive Season rewards including Nijo Character Skins, Boss Champ summoning tokens, and legendary weapon crates.
          </p>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginBottom: '40px' }}>
            {gameData.store.realMoneyItems.slice(22, 26).map((pet, idx) => (
              <div key={idx} style={{ padding: '16px', background: 'rgba(0,0,0,0.5)', borderRadius: '8px', border: '1px solid var(--color-glass-border)' }}>
                <p style={{ fontWeight: 'bold' }}>{pet}</p>
              </div>
            ))}
          </div>

          <button className="btn-primary" style={{ padding: '16px 48px', fontSize: '20px', background: 'var(--color-accent)', color: '#000', boxShadow: '0 0 20px rgba(255,184,0,0.4)' }} onClick={() => handlePurchase({name: 'Premium Battle Pass', price: 900, currency: 'gold_credits'})}>
            PURCHASE PASS - 🪙 900
          </button>
        </div>
      )}
    </div>
  );
}

export default StoreView;
