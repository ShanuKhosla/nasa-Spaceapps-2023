import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import backgroundImage from '/spaceAgencies.png';
import { fadeIn } from '../utils/motion';
import './styles/CustomTexts.css';

const SpaceAgencies = () => {

    const [animationComplete, setAnimationComplete] = useState(false);

  const handleAnimationComplete = () => {
    setAnimationComplete(true);
  };

  const logos = [
    { id: 1, src: '/australia.png' }, // Add your image URLs here
    { id: 2, src: '/brazil.png' },
    { id: 3, src: '/canada.png' },
    { id: 4, src: '/european.png' },
    { id: 5, src: '/isro.png' },
    { id: 6, src: '/italy.png' },
    { id: 7, src: '/japan.png' },
    { id: 8, src: '/mexico.png' },
    { id: 9, src: '/argentina.png' },
    { id: 10, src: '/nssa.png' },
    { id: 11, src: '/paraguay.png' },
    { id: 12, src: '/southAfrica.png' },
    { id: 13, src: '/turkey.png' },
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 11000, // Slower speed for smoother effect
    autoplay: true,
    autoplaySpeed: 0, // Adjust as needed
    slidesToShow: 5,    // Adjust the number of visible logos
    swipeToSlide: true, // Allow sliding on swipe
    focusOnSelect: false, // Do not focus on slide selection
    slidesToScroll: 1,
    cssEase: 'linear', // Linear easing for smoother transition
    prevArrow: null, // Disable previous arrow
    nextArrow: null,
    rtl: true, // Disable next arrow 
    };

  return (
    <div
    style={{
    backgroundImage: `url(${backgroundImage})`}}
     className="h-full w-full py-8 md:py-70 overflow-x-hidden bg-[#ffffff] bg-cover bg-no-repeat bg-bottom">
    <div className='px-[20px] sm:px-[40px] lg:px-[60px]'>      
      <motion.h1
        variants={fadeIn('right', 'tween', 0.2, 0.4)}
        initial={animationComplete ? '' : 'hidden'}
        whileInView="show"
        onAnimationComplete={handleAnimationComplete}
        className="text-4xl  xs:text-5xl lg:text-6xl font-extrabold text-white font-firaSans tracking-wider mb-2"
      >
        SPACE AGENCIES
      </motion.h1>

      <motion.p
        variants={fadeIn('down', 'tween', 1.2, 0.4)}
        initial={animationComplete ? '' : 'hidden'}
        whileInView="show"
        onAnimationComplete={handleAnimationComplete}
        className="text-justify my-8 max-w-full md:max-w-[95%] text-lg md:text-xl leading-snug font-overpass font-normal tracking-wide text-white"
      >
In <span className='font-black text-[#eafe07]'>2022</span>, NASA collaborated with even more <span className='font-black text-[#eafe07]'>space agency partners</span> to bring the largest annual global hackathon to communities around the world! These <span className='font-black text-[#eafe07]'>space agency partners</span>, along with <span className='font-black text-[#eafe07]'>NASA’s engineers</span> at the <span className='font-black text-[#eafe07]'>Earth Science Division</span>, came up with <span className='font-black text-[#eafe07]'>innovative problem statements</span> (literally out of this world). They provide access to this data and other resources around <span className='font-black text-[#eafe07]'>Earth Observations</span> for solving the <span className='font-black text-[#eafe07]'>challenges</span>.
      </motion.p>
    </div>

      <Slider className='my-10 w-full flex flex-row items-center justify-around' {...sliderSettings}>
        {logos.map((logo) => (
          <div key={logo.id} className="w-[120px] h-[120px]"> {/* Adjust width and height as needed */}
            <img
              src={logo.src}
              alt={`Logo ${logo.id}`}
              className=" aspect-ratio-auto w-[60px] h-[60px] gap-2 md:w-[70px] md:h-[70px] lg:w-[180px] lg:h-[100px] object-contain"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SpaceAgencies;
