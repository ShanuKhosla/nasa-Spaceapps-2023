import {useState} from 'react'
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import backgroundImage from '/starsUpscaled.png';
import { allChallenges, softwareDevelopment, creativeChallenges, dataScienceChallenges, gameDevelopment } from '../constants';

const getChallenges = (selectedOption) => {
    switch (selectedOption) {
      case 'Software Development':
        return softwareDevelopment;
      case 'Creative Challenges':
        return creativeChallenges;
      case 'Data Science Challenges':
        return dataScienceChallenges;
      case 'Game Development':
        return gameDevelopment;
      default:
        return allChallenges;
    }
  }

const ChallengeCard = ({index, title, iframes}) => {
    return(
        <>
            <div className= 'rounded-md w-full bg-black h-full border-2 border-slate-500 pt-4 flex flex-col justify-between text-justify gap-1 mt-4'>
                <h1 className='font-overpass text-xl md:text-2xl font-thin tracking-tight '>{title}</h1>
                <div className="w-fit" dangerouslySetInnerHTML={{ __html: iframes }} />
            </div>
        </>
    )
}


const Challenges = () => {

    const [animationComplete, setAnimationComplete] = useState(false);
    const [selectedOption, setSelectedOption] = useState('All Challenges');

    const handleAnimationComplete = () => {
      setAnimationComplete(true);
    };

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  

  return (
    <motion.div
      className="h-full px-[20px] sm:px-[40px] lg:px-[60px] py-5 header bg-center bg-repeat"
      style={{backgroundImage: `url(${backgroundImage})`}}
    >

        <div className='flex flex-col lg:flex-row gap-4 lg:gap-0 items-start lg:items-center justify-between'>
        <div>
      <motion.h1 
      variants={fadeIn('down', 'tween', 0.2, 0.4)}
          initial={animationComplete ? "" : "hidden"}
          whileInView="show"
          onAnimationComplete={handleAnimationComplete}
      className="text-4xl xs:text-5xl lg:text-6xl text-[#FFFFFF] font-extrabold font-firaSans tracking-wider mb-2">
      Challenges
      </motion.h1>
      <motion.p
        variants={fadeIn('down', 'tween', 0.7, 0.5)}
        initial="hidden"
        animate={animationComplete ? 'show' : 'hidden'}
        onAnimationComplete={handleAnimationComplete}
        className="text-lg sm:text-2xl leading-relaxed font-light font-overpass tracking-wide"
      >
        Hackathon Challenges: Your Path to Participant Resources
      </motion.p>
      </div>
      {/* add dropdown here */}
      <div className="relative">
      <div>
        <button
          type="button"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)} // Toggle dropdown
          className={` ${isDropdownOpen ? 'rounded-t-md' : 'rounded-md'} cursor-pointer bg-white text-black border-none font-firaSans text-bold text-lg w-56 py-1.5`}
        >
          Select Challenge
          <svg
            className="relative top-1.5 left-1 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {/* Dropdown Content */}
      {isDropdownOpen && (
        <div className="origin-top-right absolute right-0 rounded-b-md rounded-t-none w-56  transition-all duration-1000 ease-in-out">
          <div className="flex flex-col justify-center py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {['All Challenges', 'Software Development', 'Creative Challenges', 'Data Science Challenges', 'Game Development'].map((option, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsDropdownOpen(false);
                  setSelectedOption(option);
                }}
                className={`px-4 py-3 border-none font-overpass text-md no-underline ${selectedOption === option ? 'bg-[#eafe07] text-black' : ' bg-white text-black hover:bg-[#eafe07] hover:text-black'} transition duration-500 ease`}
                role="menuitem"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>

        
        </div>

        <div className='py-5'>
        <h1 className='text-2xl font-firaSans font-extrabold'>{selectedOption}</h1>
        <div className="flex items-start flex-col justify-between gap-5 w-fit">
          {getChallenges(selectedOption).map((challenge, index) => (
            <ChallengeCard key={index} title={challenge.title} iframes={challenge.iframes} />
          ))}
        </div>
      </div>

      </motion.div>
  )
}



export default Challenges