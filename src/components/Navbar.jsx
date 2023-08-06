import React, { useRef, useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './styles/Navbar.css';
import { motion } from 'framer-motion';
import { navVariants } from '../utils/motion';

const Navbar = () => {
  const [animationComplete, setAnimationComplete] = useState(false);
  const [scrolled, setScrolled] = useState(false); // State to track if the user has scrolled

  const handleAnimationComplete = () => {
    setAnimationComplete(true);
  };

  const navRef = useRef();
  const [isTabletView, setIsTabletView] = useState(false);

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
  };

  useEffect(() => {
    const handleResize = () => {
      setIsTabletView(window.innerWidth <= 1024);
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 20); // Set scrolled to true when the user scrolls down 20px
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.header
      variants={navVariants}
      initial="hidden"
      animate={animationComplete ? 'show' : 'hidden'}
      onAnimationComplete={handleAnimationComplete}
      className={`bg-opacity-40 backdrop-filter backdrop-blur-sm bg-white/20 dark:bg-black/20 px-[20px] sm:px-[40px] lg:px-[60px] bg-[#0042A6] flex flex-row items-center justify-between gap-[15%] overflow-hidden ${scrolled ? 'scrolled' : ''}`}
      id="Navbar"
      
    >
      <a href="/">
        <img src="/athloneLogo.svg" className="object-contain h-[170px] w-[170px] sm:h-[210px] sm:w-[210px]" alt="Logo" />
      </a>
      <nav ref={navRef} className="font-overpass">
        <a href="/about">ABOUT</a>
        <a href="#timeline">TIMELINE</a>
        <a href="/contact">CONTACT</a>
        <a href="/ambassador">AMBASSADOR</a>
        <a href="/volunteer">VOLUNTEER</a>
        <a href="/sponsors">SPONSORS</a>
        {isTabletView && (
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        )}
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </motion.header>
  );
};

export default Navbar;
