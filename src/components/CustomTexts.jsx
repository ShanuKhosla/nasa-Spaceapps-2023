import { motion } from 'framer-motion';
import { textContainer, textVariant2 } from '../utils/motion';
 import "./styles/CustomTexts.css"


export const TypingText = ({ title, textStyles }) => (
  <motion.p variants={textContainer} className={`mt-5 max-w-[70%] text-lg lg:text-xl leading-snug font-overpass font-normal tracking-wide text-white`}>
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}

  </motion.p>
);

export const TitleText = ({ title, textStyles }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-[30px] font-semibold md:text-[64px] text-[50px] text-white`}
  >
    {title}
  </motion.h2>
);
