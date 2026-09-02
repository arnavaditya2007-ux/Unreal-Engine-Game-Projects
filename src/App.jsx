import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ModesSection from './components/ModesSection';
import WorldSection from './components/WorldSection';
import GallerySection from './components/GallerySection';
import PrototypeGallery from './components/PrototypeGallery';
import ArmorySection from './components/ArmorySection';
import BossSection from './components/BossSection';
import EconomySection from './components/EconomySection';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import AnimatedBackground from './components/AnimatedBackground';

function App() {
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="landing-page-container" style={{ position: 'relative', zIndex: 1 }}>
      <AnimatedBackground />
      <LoadingScreen />
      <Navbar />
      <HeroSection />
      <ModesSection />
      <WorldSection />
      <GallerySection />
      <PrototypeGallery />
      <ArmorySection />
      <BossSection />
      <EconomySection />
      <Footer />
    </div>
  );
}

export default App;
