import React, { useState, useEffect } from 'react';

function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5; // Random increments
      });
    }, 150);

    // Hide loading screen after 2.5 seconds
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  if (!loading) return null;

  return (
    <div className={`loading-screen ${progress >= 100 ? 'fade-out' : ''}`}>
      <div className="loading-content">
        <h1 className="loading-title">GAME PROTOTYPE</h1>
        <p className="loading-subtitle">Initializing World Engine...</p>
        
        <div className="loading-bar-container">
          <div className="loading-bar" style={{ width: `${Math.min(progress, 100)}%` }}></div>
        </div>
      </div>
    </div>
  );
}

export default LoadingScreen;
