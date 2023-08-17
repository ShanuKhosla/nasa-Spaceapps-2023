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
    { id: 1, src: '/australia.png', link: "https://www.industry.gov.au/australian-space-agency" }, // Add your image URLs here
    { id: 2, src: '/brazil.png', link: "https://www.iafastro.org/membership/all-members/brazilian-space-agency-aeb.html"},
    { id: 3, src: '/canada.png' , link: "https://www.asc-csa.gc.ca/eng/"},
    { id: 4, src: '/european.png' , link: "https://www.esa.int/"},
    { id: 5, src: '/isro.png' , link: "https://www.isro.gov.in/"},
    { id: 6, src: '/italy.png' , link: "https://www.asi.it/en/"},
    { id: 7, src: '/japan.png' , link: "https://global.jaxa.jp/"},
    { id: 8, src: '/mexico.png' , link: "https://www.iafastro.org/membership/all-members/agencia-espacial-mexicana-aem.html"},
    { id: 9, src: '/argentina.png' , link: "https://www.iafastro.org/membership/all-members/comision-nacional-de-actividades-espaciales-(conae).html"},
    { id: 10, src: '/nssa.png' , link: "https://www.iafastro.org/membership/all-members/national-space-science-agency-nssa.html"},
    { id: 11, src: '/paraguay.png' , link: "https://www.aep.gov.py/"},
    { id: 12, src: '/southAfrica.png' , link: "https://www.sansa.org.za/"},
    { id: 13, src: '/turkey.png' , link: "https://tua.gov.tr/en"},
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

      <Slider className='my-10 w-full flex flex-row items-center py-2 justify-around bg-white bg-opacity-10' {...sliderSettings}>
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
    </div>
  );
}

export default SpaceAgencies;
