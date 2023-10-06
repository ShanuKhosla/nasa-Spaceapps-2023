import React, { useState, useEffect} from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import backgroundImage from '/spaceAgencies.png';
import { fadeIn} from '../utils/motion';
import './styles/CustomTexts.css';

const GlobalCollaborators = () => {
  const [animationComplete, setAnimationComplete] = useState(false);
  const [slidesToShow, setSlidesToShow] = useState(4);


  const handleAnimationComplete = () => {
    setAnimationComplete(true);
  };

    useEffect(() => {
    const updateSlidesToShow = () => {
      if(window.innerWidth < 768)
      {
        setSlidesToShow(2);
      }
      else{
        setSlidesToShow(4);
      }
    };

    updateSlidesToShow();
    window.addEventListener('resize', updateSlidesToShow);

    return () => {
      window.removeEventListener('resize', updateSlidesToShow);
    };
  }, []);

  const logos = [
    { id: 2, src: '/google.png', link: "https://about.google/"},
    { id: 3, src: '/microsoft.png', link: "https://www.microsoft.com/en-in/about/"},
    { id: 10, src: '/teams.png', link: "https://www.microsoft.com/en-US/microsoft-teams/group-chat-software"},
    { id: 4, src: '/tableau.png', link: "https://www.tableau.com/"},
    { id: 5, src: '/goDaddy.png', link: "https://www.godaddy.com/en-in"},
    { id: 6, src: '/planet.png', link: "https://www.planet.com/"},
    { id: 7, src: '/azure.png', link: "https://azure.microsoft.com/en-in/"},
    { id: 8, src: '/miro.png', link: "https://miro.com/"},
    { id: 9, src: '/ibm.png', link: "https://www.ibm.com/in-en"},
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 10000, // Slower speed for smoother effect
    autoplay: true,
    autoplaySpeed: 100, // Adjust as needed
    slidesToShow: slidesToShow,    // Adjust the number of visible logos
    swipeToSlide: true, // Allow sliding on swipe
    focusOnSelect: false, // Do not focus on slide selection
    slidesToScroll: 1,
    cssEase: 'linear', // Linear easing for smoother transition
    prevArrow: null, // Disable previous arrow
    nextArrow: null,
    };

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
        GLOBAL COLLABORATORS THIS YEAR
      </motion.h1>

      <motion.p
        variants={fadeIn('down', 'tween', 1.2, 0.4)}
        initial={animationComplete ? '' : 'hidden'}
        whileInView="show"
        onAnimationComplete={handleAnimationComplete}
        className="text-justify my-8 max-w-full md:max-w-[90%] text-lg md:text-xl leading-snug font-overpass font-normal tracking-wide text-white"
      >
<span className='font-black text-[#eafe07]'>This year</span>, the NASA International Space Apps Challenge <span className='font-black text-[#eafe07]'>Global Organizing Team</span> collaborates with <span className='font-black text-[#eafe07]'>organizations</span> from around the world to provide <span className='font-black text-[#eafe07]'>participants</span> and/or <span className='font-black text-[#eafe07]'>Local Leads</span> with tools and resources that enable the creation of <span className='font-black text-[#eafe07]'>solutions</span>. These tools and resources can be used for free during the event.
      </motion.p>
    </div>

      <Slider className='slick-slide py-2 h-ful w-full flex flex-row items-center justify-around bg-black bg-opacity-50' {...sliderSettings}>
        {logos.map((logo) => (
          <div key={logo.id} className="w-[120px] h-[120px]"> {/* Adjust width and height as needed */}
          <a href={logo.link} target="_blank" rel="noopener noreferrer">
            <img
              src={logo.src}
              alt={`Logo ${logo.id}`}
              className=" relative top-2 aspect-ratio-auto w-[120px] h-[110px] gap-2 md:w-[130px] md:h-[110px] lg:w-[220px] lg:h-[100px] object-contain"
            />
            </a>
          </div>
        ))}
      </Slider>
    </motion.div>
  );
};

export default GlobalCollaborators;