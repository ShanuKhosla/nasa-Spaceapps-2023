import React , {useState} from 'react';
import { motion } from 'framer-motion';
import { TypingText } from "./CustomTexts";
import { fadeIn, staggerContainer, textVariant } from '../utils/motion';
import "./styles/CustomTexts.css"


const Sponsors = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  const handleAnimationComplete = () => {
    setAnimationComplete(true);
  };
  return(
    <motion.div
      className="h-screen px-[20px] sm:px-[40px] lg:px-[60px] py-[70px] bg-[#0042A6] overflow-x-hidden"
      >
      <motion.h1
        variants={fadeIn('right', 'tween', 0.2, 0.6)}
        initial={animationComplete ? "" : "hidden"}
        whileInView="show"
        onAnimationComplete={handleAnimationComplete}
        className="text-4xl  xs:text-5xl lg:text-6xl text-[#FFFFFF] font-extrabold font-firaSans tracking-wider mb-2"        >
        SPONSORS PAGE
      </motion.h1>
    </motion.div>
  );
}

export default Sponsors;
