import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import backgroundImage from '/starsUpscaled.png';
import { faqs } from '../constants';


const FaqCard = ({index, question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [animationComplete, setAnimationComplete] = useState(false);

  const handleAnimationComplete = () => {
    setAnimationComplete(true);
  };

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.div 
      variants={fadeIn('down', 'tween', 1.2, 1)}
      initial="hidden"
      animate={animationComplete ? 'show' : 'hidden'}
      onAnimationComplete={handleAnimationComplete}
    className="md:max-w-[80%] lg:max-w-[75%] text-xl text-black my-4">
      <div className={`${isOpen ? 'rounded-t-md' : 'rounded-md'} px-4 py-2.5 flex bg-[#eafe07] font-firaSans items-center gap-5`} onClick={toggleAnswer}>
        <span className='relative top-0.5'>{isOpen ? <img src='./minus-sign.png' width={20} /> : <img src='plus.png' width={20} />}</span>
        {question}
      </div>
      {isOpen && <motion.div 
      variants={fadeIn('', 'fadeIn', 0.1, 0.3)}
      initial="hidden"
      animate={animationComplete ? "show" : "hidden"} // Only animate when animationComplete is true
      onAnimationComplete={handleAnimationComplete}
      className="font-overpass font-normal rounded-b-md px-4 py-2 bg-[#f6f4f4]">{answer}</motion.div>}
    </motion.div>
  );
};

const Faqs = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  const handleAnimationComplete = () => {
    setAnimationComplete(true);
  };

  return (
    <>
    <motion.div
      className="h-full px-[20px] sm:px-[40px] lg:px-[60px] py-5 header bg-center bg-no-repeat bg-cover"
      style={{backgroundImage: `url(${backgroundImage})`}}
    >

  
      <motion.h1 
      variants={fadeIn('down', 'tween', 0.2, 0.4)}
          initial={animationComplete ? "" : "hidden"}
          whileInView="show"
          onAnimationComplete={handleAnimationComplete}
      className="text-4xl xs:text-5xl lg:text-6xl text-[#FFFFFF] font-extrabold font-firaSans tracking-wider mb-2">
      FAQ Hub
      </motion.h1>
      <motion.p
        variants={fadeIn('down', 'tween', 0.7, 0.5)}
        initial="hidden"
        animate={animationComplete ? 'show' : 'hidden'}
        onAnimationComplete={handleAnimationComplete}
        className="text-lg sm:text-2xl leading-relaxed font-light font-overpass tracking-wide"
      >
        Quick Answers to Your Queries
      </motion.p>

      <img src="./faq.png" width={400} className='invisible lg:visible absolute right-0 bottom-5' />
      <div className='my-10'>
        {faqs.map((faq, index) => (
          <FaqCard 
            key={index}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </div>
      <p className=''><a className='no-underline text-lg sm:text-xl leading-relaxed font-bold font-firaSans tracking-wide text-[#f6f4f4] hover:text-[#eafe07] transition ease duration-500' href='/contact'>Have more questions? Reach out to our team for assistance.</a></p>
      </motion.div>
      </>
  );
}

export default Faqs;
 