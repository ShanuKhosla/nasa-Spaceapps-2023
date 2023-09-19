import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import backgroundImage from '/spaceAgencies.png';
import { fadeIn } from '../utils/motion';
import './styles/CustomTexts.css';

const SpaceAgencies = () => {

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
    { id: 2, src: '/brazil.png', link: "https://www.iafastro.org/membership/all-members/brazilian-space-agency-aeb.html"},
    { id: 4, src: '/eesa.png' , link: "https://www.esa.int/"},
    { id: 3, src: '/canada.png' , link: "https://www.asc-csa.gc.ca/eng/"},
    { id: 6, src: '/asi.png' , link: "https://www.asi.it/en/"},
    { id: 5, src: '/isro.png' , link: "https://www.isro.gov.in/"},
    { id: 7, src: '/jaxa.png' , link: "https://global.jaxa.jp/"},
    { id: 11, src: '/paraguay.png' , link: "https://www.aep.gov.py/"},
    { id: 8, src: '/mexico.png' , link: "https://www.iafastro.org/membership/all-members/agencia-espacial-mexicana-aem.html"},
    { id: 13, src: '/turkey.svg' , link: "https://tua.gov.tr/en"},
    { id: 12, src: '/sansa.png' , link: "https://www.sansa.org.za/"},
    { id: 10, src: '/nssa.png' , link: "https://www.iafastro.org/membership/all-members/national-space-science-agency-nssa.html"},
    { id: 9, src: '/argentina(1).png' , link: "https://www.argentina.gob.ar/ciencia/conae"},
    { id: 1, src: '/australia.png', link: "https://www.industry.gov.au/australian-space-agency" }, // Add your image URLs here
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
In <span className='font-black text-[#eafe07]'>2022</span>, NASA collaborated with even more <span className='font-black text-[#eafe07]'>space agency partners</span> to bring the largest annual global hackathon to communities around the world! These space agency partners , along with NASA’s engineers at the <span className='font-black text-[#eafe07]'>Earth Science Division</span>, came up with <span className='font-black text-[#eafe07]'>innovative problem statements</span> (literally out of this world). They provide access to this data and other resources around Earth Observations for solving the <span className='font-black text-[#eafe07]'>challenges</span>.
      </motion.p>
    </div>

      <Slider className='slick-slide py-2  w-full flex flex-row items-center justify-around bg-black
       bg-opacity-60' {...sliderSettings}>
        {logos.map((logo) => (
          <div key={logo.id} className="w-[120px] h-[120px]"> {/* Adjust width and height as needed */}
          <a href={logo.link} target="_blank" rel="noopener noreferrer">
            <img
              src={logo.src}
              alt={`Logo ${logo.id}`}
              className="relative top-1 md:top-1 aspect-ratio-auto mx-5 w-[120px] h-[120px] md:w-[160px] md:h-[120px] lg:w-[250px] lg:h-[110px] object-contain"
            />
          </a>            
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SpaceAgencies;
