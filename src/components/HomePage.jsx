import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import SpaceAppsRecap from './SpaceAppsRecap';
import ParticipationDetails from './ParticipationDetails';
import Timeline from './Timeline';
import CTA from './CTA';
import Footer from './Footer';

const HomePage = () => {
  return (
    <div className="overflow-x-hidden">
      <div
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: '#0042A6',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Navbar />
        <HeroSection />
      </div>
        <SpaceAppsRecap />
      <ParticipationDetails />
      <Timeline />
      <CTA />
      <Footer />
    </div>
  );
};

export default HomePage;
