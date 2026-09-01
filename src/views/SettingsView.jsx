import React, { useState } from 'react';
import { Settings, Monitor, Volume2, Gamepad2 } from 'lucide-react';
import { gameData } from '../data/gameData';

function SettingsView() {
  const [activeTab, setActiveTab] = useState('Graphics');
  
  const [settingsState, setSettingsState] = useState({
    graphics: 'High',
    fps: '60',
    resolution: '1920x1080',
    vSync: true,
    fullScreen: true,
    motionBlur: false,
    bloom: true,
    shadowQuality: 'High',
    reflections: 'Medium',
    depthOfField: true,
    antiAliasing: 'TAA'
  });

  const toggleSetting = (key) => {
    setSettingsState(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="settings-view">
      <div className="view-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div>
          <h1 className="view-title">Settings</h1>
          <p className="view-subtitle">Configure your experience for optimal performance.</p>
        </div>
        <div style={{ display: 'flex', gap: '16px' }}>
          <button className={`btn-outline ${activeTab === 'Graphics' ? 'btn-primary' : ''}`} onClick={() => setActiveTab('Graphics')}><Monitor size={16} /> Graphics</button>
          <button className={`btn-outline ${activeTab === 'Audio' ? 'btn-primary' : ''}`} onClick={() => setActiveTab('Audio')}><Volume2 size={16} /> Audio</button>
          <button className={`btn-outline ${activeTab === 'Controls' ? 'btn-primary' : ''}`} onClick={() => setActiveTab('Controls')}><Gamepad2 size={16} /> Controls</button>
        </div>
      </div>

      <div className="glass-panel" style={{ padding: '32px' }}>
        {activeTab === 'Graphics' && (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <h3 style={{ borderBottom: '1px solid var(--color-glass-border)', paddingBottom: '12px' }}>Display</h3>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>Overall Quality</span>
                <select className="glass-panel" style={{ padding: '8px 16px', color: '#fff', border: '1px solid var(--color-primary)' }}
                        value={settingsState.graphics} onChange={e => setSettingsState({...settingsState, graphics: e.target.value})}>
                  {gameData.settings.graphics.map(g => <option key={g} value={g}>{g}</option>)}
                </select>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>FPS Limit</span>
                <select className="glass-panel" style={{ padding: '8px 16px', color: '#fff' }}
                        value={settingsState.fps} onChange={e => setSettingsState({...settingsState, fps: e.target.value})}>
                  <option value="30">30</option>
                  <option value="60">60</option>
                  <option value="120">120</option>
                  <option value="Unlimited">Unlimited</option>
                </select>
              </div>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>Resolution</span>
                <select className="glass-panel" style={{ padding: '8px 16px', color: '#fff' }}
                        value={settingsState.resolution} onChange={e => setSettingsState({...settingsState, resolution: e.target.value})}>
                  <option value="1280x720">1280x720</option>
                  <option value="1920x1080">1920x1080</option>
                  <option value="2560x1440">2560x1440</option>
                  <option value="3840x2160">3840x2160</option>
                </select>
              </div>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>Full Screen</span>
                <input type="checkbox" checked={settingsState.fullScreen} onChange={() => toggleSetting('fullScreen')} style={{ width: '20px', height: '20px' }} />
              </div>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>V Sync</span>
                <input type="checkbox" checked={settingsState.vSync} onChange={() => toggleSetting('vSync')} style={{ width: '20px', height: '20px' }} />
              </div>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <h3 style={{ borderBottom: '1px solid var(--color-glass-border)', paddingBottom: '12px' }}>Advanced Settings</h3>
              
              {['Motion blur', 'Bloom', 'Depth of field'].map((setting, idx) => {
                const stateKey = setting.replace(/ ([a-z])/g, (g) => g[1].toUpperCase()).replace(/^([A-Z])/, (g) => g[0].toLowerCase());
                return (
                  <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span>{setting}</span>
                    <input type="checkbox" checked={settingsState[stateKey]} onChange={() => toggleSetting(stateKey)} style={{ width: '20px', height: '20px' }} />
                  </div>
                )
              })}
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>Shadow quality</span>
                <select className="glass-panel" style={{ padding: '8px 16px', color: '#fff' }}
                        value={settingsState.shadowQuality} onChange={e => setSettingsState({...settingsState, shadowQuality: e.target.value})}>
                  {gameData.settings.graphics.map(g => <option key={g} value={g}>{g}</option>)}
                </select>
              </div>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>Reflections</span>
                <select className="glass-panel" style={{ padding: '8px 16px', color: '#fff' }}
                        value={settingsState.reflections} onChange={e => setSettingsState({...settingsState, reflections: e.target.value})}>
                   {gameData.settings.graphics.map(g => <option key={g} value={g}>{g}</option>)}
                </select>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>Anti Aliasing</span>
                <select className="glass-panel" style={{ padding: '8px 16px', color: '#fff' }}
                        value={settingsState.antiAliasing} onChange={e => setSettingsState({...settingsState, antiAliasing: e.target.value})}>
                   <option>Off</option>
                   <option>FXAA</option>
                   <option>SMAA</option>
                   <option>TAA</option>
                </select>
              </div>
            </div>
          </div>
        )}
        
        {activeTab !== 'Graphics' && (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '300px', color: 'var(--color-text-muted)' }}>
            <h2>{activeTab} settings coming soon.</h2>
          </div>
        )}

      </div>
    </div>
  );
}

export default SettingsView;
