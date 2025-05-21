import React from 'react';
import HeroVideoBackground from './HeroVideoBackground';
import HeroContent from './HeroContent';

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black" style={{ marginTop: 0 }}>
      <HeroVideoBackground />
      <HeroContent />
    </section>
  );
};

export default HeroSection;