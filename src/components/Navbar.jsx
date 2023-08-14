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
      className={`bg-opacity-80 dark:bg-black dark:bg-opacity-90 px-[20px] sm:px-[40px] lg:px-[60px]  flex flex-row items-center justify-between  overflow-hidden `}
      id="Navbar"
>

      <a href="/">
        <img src="/athloneLogo.svg" className="object-contain h-[120px] w-[120px] sm:h-[190px] sm:w-[190px]" alt="Logo" />
      </a>
      <nav
      ref={navRef} className={`font-overpass fixed right-10`}>
        <a href="/">HOME</a>
        <a href="/blogs">BLOGS</a>
        <a href="https://docs.google.com/forms/d/1EYUQxLAllIdm3bygjkTN76sDyDh9SxiAeS3DbMIqQp0/viewform?edit_requested=true">VOLUNTEER</a>
        <a href="/contact">CONTACT</a>
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
