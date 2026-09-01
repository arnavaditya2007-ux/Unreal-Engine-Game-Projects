import React, { useEffect, useRef } from 'react';

function AnimatedBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;
    let particles = [];
    let time = 0;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;
    }

    resize();
    window.addEventListener('resize', resize);

    // Create particles
    const PARTICLE_COUNT = 60;
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: -Math.random() * 0.4 - 0.1,
        opacity: Math.random() * 0.5 + 0.1,
        // Color: mix of cyan, red, gold
        color: [
          'rgba(255, 184, 0,',   // gold
          'rgba(255, 0, 85,',    // red
          'rgba(255, 140, 0,',   // deep orange
          'rgba(255, 255, 255,', // white
        ][Math.floor(Math.random() * 4)],
        pulseSpeed: Math.random() * 0.02 + 0.005,
        pulseOffset: Math.random() * Math.PI * 2,
      });
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.01;

      // Draw slow-moving gradient orbs
      const orbs = [
        { x: canvas.width * 0.2, y: canvas.height * 0.15, r: 300, color: '255, 184, 0' },
        { x: canvas.width * 0.8, y: canvas.height * 0.4, r: 250, color: '255, 0, 85' },
        { x: canvas.width * 0.5, y: canvas.height * 0.7, r: 350, color: '255, 140, 0' },
      ];

      orbs.forEach((orb, i) => {
        const offsetX = Math.sin(time * 0.3 + i * 2) * 80;
        const offsetY = Math.cos(time * 0.2 + i * 1.5) * 60;
        const gradient = ctx.createRadialGradient(
          orb.x + offsetX, orb.y + offsetY, 0,
          orb.x + offsetX, orb.y + offsetY, orb.r
        );
        gradient.addColorStop(0, `rgba(${orb.color}, 0.04)`);
        gradient.addColorStop(1, `rgba(${orb.color}, 0)`);
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });

      // Draw and update particles
      particles.forEach(p => {
        const pulse = Math.sin(time * 10 * p.pulseSpeed + p.pulseOffset);
        const currentOpacity = p.opacity * (0.6 + 0.4 * pulse);

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color + currentOpacity + ')';
        ctx.fill();

        // Glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = p.color + (currentOpacity * 0.15) + ')';
        ctx.fill();

        // Move
        p.x += p.speedX + Math.sin(time + p.pulseOffset) * 0.1;
        p.y += p.speedY;

        // Wrap around
        if (p.y < -10) {
          p.y = canvas.height + 10;
          p.x = Math.random() * canvas.width;
        }
        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;
      });

      animationId = requestAnimationFrame(animate);
    }

    animate();

    // Re-measure page height periodically
    const resizeInterval = setInterval(resize, 3000);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
      clearInterval(resizeInterval);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
}

export default AnimatedBackground;
