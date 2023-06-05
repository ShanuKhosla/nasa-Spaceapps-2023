import React, { useRef, useEffect, useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import "./styles/Navbar.css";
import { motion } from "framer-motion";
import { navVariants } from '../utils/motion';

const Navbar = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  const handleAnimationComplete = () => {
    setAnimationComplete(true);
  };
  const navRef = useRef();
  const [isTabletView, setIsTabletView] = useState(false);

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  useEffect(() => {
    const handleResize = () => {
      setIsTabletView(window.innerWidth <= 768); // Adjust the breakpoint as per your tablet view
    };

    handleResize(); // Call the function initially to set the state based on the initial window width

    window.addEventListener("resize", handleResize); // Add resize event listener

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <motion.header
      variants={navVariants}
      initial="hidden"
      animate={animationComplete ? "show" : "hidden"} // Only animate when animationComplete is true
      onAnimationComplete={handleAnimationComplete} // Update the state when animation is complete
      className="px-[20px] sm:px-[40px] lg:px-[60px] flex flex-row items-center justify-between gap-[15%]"
      id="Navbar"
    >
      <img src="/SpaceApps-defaultLogo.png" className="object-contain h-[260px] w-[260px]" />
      <nav ref={navRef} className="font-overpass">
        <a href="/about">ABOUT</a>
        <a href="#timeline">TIMELINE</a>
        <a href="/contact">CONTACT</a>
        <a href="/ambassador">AMBASSADOR</a>
        <a href="/volunteer">VOLUNTEER</a>
        <a href="/sponsors">SPONSORS</a>
        {isTabletView && (
          <button className="nav-btn nav-close-btn " onClick={showNavbar}>
            <FaTimes />
          </button>
        )}
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </motion.header>
  );
}

export default Navbar;
