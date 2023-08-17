import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import backgroundImage from '/spaceAgencies.png';
import { fadeIn} from '../utils/motion';
import './styles/CustomTexts.css';

const GlobalCollaborators = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  const handleAnimationComplete = () => {
    setAnimationComplete(true);
  };

  const logos = [
    { id: 1, src: '/adobeXD.png', link: "https://adobexdplatform.com/"}, // Add your image URLs here
    { id: 2, src: '/google.png', link: "https://about.google/"},
    { id: 3, src: '/microsoft.png', link: "https://www.microsoft.com/en-in/about/"},
    { id: 10, src: '/teams.png', link: "https://www.microsoft.com/en-US/microsoft-teams/group-chat-software"},
    { id: 4, src: '/tableau.png', link: "https://www.tableau.com/"},
    { id: 5, src: '/goDaddy.png', link: "https://www.godaddy.com/en-in"},
    { id: 6, src: '/planet.png', link: "https://www.planet.com/"},
    { id: 7, src: '/azure.png', link: "https://azure.microsoft.com/en-in/"},
    { id: 8, src: '/miro.png', link: "https://miro.com/"},
    { id: 9, src: '/ibm.png', link: "https://www.ibm.com/in-en"},
    { id: 11, src: '/meteomatics.png', link: "https://www.meteomatics.com/"},
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
        className="text-4xl  xs:text-5xl lg:text-6xl font-extrabold text-white font-firaSans tracking-wider mb-2"
      >
        GLOBAL COLLABORATORS IN THE PAST
      </motion.h1>

      <motion.p
        variants={fadeIn('down', 'tween', 1.2, 0.4)}
        initial={animationComplete ? '' : 'hidden'}
        whileInView="show"
        onAnimationComplete={handleAnimationComplete}
        className="text-justify my-8 max-w-full md:max-w-[90%] text-lg md:text-xl leading-snug font-overpass font-normal tracking-wide text-white"
      >
<span className='font-black text-[#eafe07]'>Each year</span> the <span className='font-black text-[#eafe07]'>NASA International Space Apps Challenge Global Organizing Team</span> collaborates with <span className='font-black text-[#eafe07]'>organizations</span> from <span className='font-black text-[#eafe07]'>around the world</span> to provide <span className='font-black text-[#eafe07]'>participants</span> and/or <span className='font-black text-[#eafe07]'>Local Leads</span> with <span className='font-black text-[#eafe07]'>tools</span> and <span className='font-black text-[#eafe07]'>resources</span> that enable the <span className='font-black text-[#eafe07]'>creation</span> of <span className='font-black text-[#eafe07]'>solutions</span>. These <span className='font-black text-[#eafe07]'>tools</span> and <span className='font-black text-[#eafe07]'>resources</span> can be used for <span className='font-black text-[#eafe07]'>free</span> during the <span className='font-black text-[#eafe07]'>event</span>.
      </motion.p>
    </div>

      <Slider className='my-10 w-full bg-white bg-opacity-10 py-2 flex flex-row items-center justify-around' {...sliderSettings}>
        {logos.map((logo) => (
          <div key={logo.id} className="w-[120px] h-[120px]"> {/* Adjust width and height as needed */}
          <a href={logo.link} target="_blank" rel="noopener noreferrer">
            <img
              src={logo.src}
              alt={`Logo ${logo.id}`}
              className=" relative top-2 aspect-ratio-auto w-[60px] h-[60px] gap-2 md:w-[70px] md:h-[70px] lg:w-[180px] lg:h-[100px] object-contain"
            />
            </a>
          </div>
        ))}
      </Slider>
    </motion.div>
  );
};

export default GlobalCollaborators;