/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import HeroSection from './HeroSection';
import SpaceAppsRecap from './SpaceAppsRecap';
import ParticipationDetails from './ParticipationDetails';
import Timeline from './Timeline';
import CTA from './CTA';
import GlobalCollaborators from './GlobalCollaborators';
import SpaceAgencies from './SpaceAgencies';
import Tus from './Tus';
import Instagram from './Instagram';
import Winners from './Winners';
import Testimonials from './Testimonials';

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
    <div>
      <div
        style={{
          width: '100%',
          height: '100%',
    
        }}
      >
        <HeroSection />
      </div>
      <SpaceAppsRecap />  
      <ParticipationDetails />
      <SpaceAgencies />
      <GlobalCollaborators />
      <Tus />
      <Winners />
      <Testimonials />
      <Timeline />
      <Instagram />
      {/* <CTA /> */}

      {showBackToTop && (
        <motion.img
          onClick={handleBackToTop}
          src="/arrow-circle-up.svg"
          className="cursor-pointer w-[50px] fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-600 text-white rounded-full"
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
