import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import SpaceAppsRecap from './SpaceAppsRecap';
import ParticipationDetails from './ParticipationDetails';
import Timeline from './Timeline';
import CTA from './CTA';
import Footer from './Footer';

const HomePage = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setShowBackToTop(scrollTop > 1200);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const buttonVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

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

      {showBackToTop && (
        <motion.img
          onClick={handleBackToTop}
          src="/arrow-circle-up.svg"
          className="w-[50px] fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-600 text-white rounded-full"
          initial="hidden"
          animate="visible"
          variants={buttonVariants}
          transition={{ duration: 0.9, ease: 'easeInOut' }}
        />
      )}
    </div>
  );
};

export default HomePage;
