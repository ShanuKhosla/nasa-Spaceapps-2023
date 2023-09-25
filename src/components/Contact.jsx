import React , {useState, useEffect} from 'react';
import { motion } from 'framer-motion';
import { TypingText } from "./CustomTexts";
import { fadeIn, staggerContainer, textVariant } from '../utils/motion';
import "./styles/CustomTexts.css"
import backgroundImage from '/contactus.png';



const Contact = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  const handleAnimationComplete = () => {
    setAnimationComplete(true);
  };

  return(
    <motion.div
    style={{backgroundImage: `url(${backgroundImage})`}}      
    className="h-full bg-center bg-contain bg-no-repeat px-[20px] sm:px-[40px] lg:px-[60px] overflow-x-hidden"
      >
      <motion.h1
        variants={fadeIn('right', 'tween', 0.2, 0.6)}
        initial={animationComplete ? "" : "hidden"}
        whileInView="show"
        onAnimationComplete={handleAnimationComplete}
        className="text-4xl xs:text-5xl lg:text-6xl text-[#FFFFFF] font-extrabold font-firaSans tracking-wider mb-2"        >
        Get In Touch
      </motion.h1>
      <motion.p
        variants={fadeIn('down', 'tween', 0.7, 0.5)}
        initial="hidden"
        animate={animationComplete ? 'show' : 'hidden'}
        onAnimationComplete={handleAnimationComplete}
        className="text-lg sm:text-2xl leading-relaxed font-light font-overpass tracking-wide"
      >
      We're here to assist you. Reach out anytime!
</motion.p>
    <div className='flex items-center justify-center w-full my-6'>
      <iframe  
      className='rounded-lg'
      src="https://docs.google.com/forms/d/e/1FAIpQLSc2yQmV5x9yusPlhxMHI8U0Gbf2S5Qr3RgA8nKTqsUJ5y6hFA/viewform?embedded=true" 
      width="640" 
      height="937" 
      frameborder="0" 
      marginheight="0" 
      marginwidth="0"
      >Loading…</iframe>
    </div>
    </motion.div>
  );
}

export default Contact;
