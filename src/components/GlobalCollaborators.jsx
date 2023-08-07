import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import backgroundImage from '/global.png';
import { fadeIn, staggerContainer, textVariant } from '../utils/motion';
import './styles/CustomTexts.css';

const GlobalCollaborators = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  const handleAnimationComplete = () => {
    setAnimationComplete(true);
  };

  const logos = [
    { id: 1, src: '/twitter.png' }, // Add your image URLs here
    { id: 2, src: '/twitter.png' },
    { id: 3, src: '/twitter.png' },
    { id: 4, src: '/twitter.png' },
    { id: 5, src: '/twitter.png' },
    { id: 6, src: '/twitter.png' },
    { id: 7, src: '/twitter.png' },
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 800, // Slower speed for smoother effect
    autoplay: true,
    autoplaySpeed: 3000, // Adjust as needed
    slidesToShow: 4,    // Adjust the number of visible logos
    slidesToScroll: 1,
    cssEase: 'ease', // Linear easing for smoother transition
  };

  return (
    <motion.div
    style={{
    backgroundImage: `url(${backgroundImage})`}}
     className="h-full px-[20px] sm:px-[40px] lg:px-[60px] py-8 md:py-70 bg-[#ffffff] bg-cover bg-no-repeat bg-bottom">
    <div>      
      <motion.h1
        variants={fadeIn('right', 'tween', 0.2, 0.4)}
        initial={animationComplete ? '' : 'hidden'}
        whileInView="show"
        onAnimationComplete={handleAnimationComplete}
        className="text-4xl  xs:text-5xl lg:text-6xl font-extrabold text-[#07173F] font-firaSans tracking-wider mb-2"
      >
        GLOBAL COLLABORATORS
      </motion.h1>

      <motion.p
        variants={fadeIn('down', 'tween', 1.2, 0.4)}
        initial={animationComplete ? '' : 'hidden'}
        whileInView="show"
        onAnimationComplete={handleAnimationComplete}
        className="text-justify my-8 max-w-full md:max-w-[58%] text-lg md:text-xl leading-snug font-overpass font-normal tracking-wide text-black"
      >
        Each year the NASA International Space Apps Challenge Global Organizing Team collaborates with organizations from around the world to provide participants and/or Local Leads with tools and resources that enable the creation of solutions.
        These tools and resources can be used for free during the event.
      </motion.p>
    </div>

      <Slider className='my-10' {...sliderSettings}>
        {logos.map((logo) => (
          <div key={logo.id} className="w-[120px] h-[120px] gap-10"> {/* Adjust width and height as needed */}
            <img
              src={logo.src}
              alt={`Logo ${logo.id}`}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </Slider>
    </motion.div>
  );
};

export default GlobalCollaborators;
