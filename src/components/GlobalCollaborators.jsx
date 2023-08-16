import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import backgroundImage from '/global.png';
import { fadeIn} from '../utils/motion';
import './styles/CustomTexts.css';

const GlobalCollaborators = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  const handleAnimationComplete = () => {
    setAnimationComplete(true);
  };

  const logos = [
    { id: 1, src: '/adobeXD.png' }, // Add your image URLs here
    { id: 2, src: '/google.png' },
    { id: 3, src: '/microsoft.png' },
    { id: 10, src: '/teams.png' },
    { id: 4, src: '/tableau.png' },
    { id: 5, src: '/goDaddy.png' },
    { id: 6, src: '/planet.png' },
    { id: 7, src: '/azure.png' },
    { id: 8, src: '/miro.png' },
    { id: 9, src: '/ibm.png' },
    { id: 11, src: '/meteomatics.png' },
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 10000, // Slower speed for smoother effect
    autoplay: true,
    autoplaySpeed: 0, // Adjust as needed
    slidesToShow: 5,    // Adjust the number of visible logos
    swipeToSlide: true, // Allow sliding on swipe
    focusOnSelect: false, // Do not focus on slide selection
    slidesToScroll: 1,
    cssEase: 'linear', // Linear easing for smoother transition
    prevArrow: null, // Disable previous arrow
    nextArrow: null,
  }

  return (
    <motion.div
    style={{
    backgroundImage: `url(${backgroundImage})`}}
     className="h-full w-full py-4 overflow-x-hidden bg-[#ffffff] bg-cover bg-no-repeat bg-bottom">
    <div className='px-[20px] sm:px-[40px] lg:px-[60px] '>      
      <motion.h1
        variants={fadeIn('right', 'tween', 0.2, 0.4)}
        initial={animationComplete ? '' : 'hidden'}
        whileInView="show"
        onAnimationComplete={handleAnimationComplete}
        className="text-4xl  xs:text-5xl lg:text-6xl font-extrabold text-[#07173F] font-firaSans tracking-wider mb-2"
      >
        GLOBAL COLLABORATORS IN THE PAST
      </motion.h1>

      <motion.p
        variants={fadeIn('down', 'tween', 1.2, 0.4)}
        initial={animationComplete ? '' : 'hidden'}
        whileInView="show"
        onAnimationComplete={handleAnimationComplete}
        className="text-justify my-8 max-w-full md:max-w-[90%] text-lg md:text-xl leading-snug font-overpass font-normal tracking-wide text-black"
      >
<span className='font-black text-[#07173F]'>Each year</span> the <span className='font-black text-[#07173F]'>NASA International Space Apps Challenge Global Organizing Team</span> collaborates with <span className='font-black text-[#07173F]'>organizations</span> from <span className='font-black text-[#07173F]'>around the world</span> to provide <span className='font-black text-[#07173F]'>participants</span> and/or <span className='font-black text-[#07173F]'>Local Leads</span> with <span className='font-black text-[#07173F]'>tools</span> and <span className='font-black text-[#07173F]'>resources</span> that enable the <span className='font-black text-[#07173F]'>creation</span> of <span className='font-black text-[#07173F]'>solutions</span>. These <span className='font-black text-[#07173F]'>tools</span> and <span className='font-black text-[#07173F]'>resources</span> can be used for <span className='font-black text-[#07173F]'>free</span> during the <span className='font-black text-[#07173F]'>event</span>.
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
    </motion.div>
  );
};

export default GlobalCollaborators;