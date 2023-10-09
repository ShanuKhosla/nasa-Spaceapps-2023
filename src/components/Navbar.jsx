import React, { useRef, useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './styles/Navbar.css';
import { motion } from 'framer-motion';
import { navVariants } from '../utils/motion';
import ProgressBar from "react-scroll-progress-bar";

const Navbar = () => {
  const [animationComplete, setAnimationComplete] = useState(false);
  const [scrolled, setScrolled] = useState(false);// State to track if the user has scrolled
  const [showPopup, setShowPopup] = useState(false);

  const handleMouseEnter = () => {
    setShowPopup(true);
    console.log("hovered");
  };

  const handleMouseLeave = () => {
    setShowPopup(false);
  };


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
    <>
      
    <motion.header
      variants={navVariants}
      initial="hidden"
      animate={animationComplete ? 'show' : 'hidden'}
      onAnimationComplete={handleAnimationComplete}
      className={`bg-opacity-80 bg-black  px-[20px] sm:px-[40px] lg:px-[60px] mb-5  flex flex-row items-center justify-between  overflow-hidden `}
      id="Navbar"
>

      <a target="_blank" href="https://deeducommunity.netlify.app/">
        <img src="/DeeduLogo1.png" className="object-contain relative right-3 lg:right-[65px] h-[120px] w-[120px] sm:h-[140px] sm:w-[180px]" alt="Logo" />
      </a>
      <nav
      ref={navRef} className={`font-overpass fixed right-10 xl:top-6`}>
        <a href="/">HOME</a>
        <a href="/blogs">BLOGS</a>
        {/* <a href="https://docs.google.com/forms/d/1EYUQxLAllIdm3bygjkTN76sDyDh9SxiAeS3DbMIqQp0/viewform?edit_requested=true">VOLUNTEER</a> */}
        {/* <a href="/volunteer">JOIN US</a> */}
        <a href="/faq">FAQ's</a>
        <a href="https://www.spaceappschallenge.org/2023/challenges/" target='_blank'>CHALLENGES</a>
        {/* <a href="/contact">CONTACT</a> */}
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
    <div className='progress-bar-container'>
                <ProgressBar
                 height="5px"
      bgcolor="#ffffff"
      duration="1"
                />
            </div>
    </>
  );
};

export default Navbar;
