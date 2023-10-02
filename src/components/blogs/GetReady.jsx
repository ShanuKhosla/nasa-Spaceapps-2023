import React, {useState, useEffect} from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/motion';
import backgroundImage from '/starsUpscaled.png';


const GetReady = () => {

    const [animationComplete, setAnimationComplete] = useState(false);
    const [isLiked, setIsLiked] = useState(() => {
        const savedLiked = JSON.parse(localStorage.getItem('isLiked'));
        return savedLiked !== null ? savedLiked : false;
      });    const [likeCount, setLikeCount] = useState(() => {
        const savedLikeCount = JSON.parse(localStorage.getItem('likeCount'));
        return savedLikeCount !== null ? savedLikeCount : 971; // Default like count to 971
      });

      useEffect(() => {
        localStorage.setItem('likeCount', JSON.stringify(likeCount));
      }, [likeCount]);

      
  useEffect(() => {
    localStorage.setItem('isLiked', JSON.stringify(isLiked));
  }, [isLiked]);

  const handleAnimationComplete = () => {
    setAnimationComplete(true);
  };

  

  const handleLikeClick = () => {
    if (isLiked) {
      setLikeCount(prevCount => prevCount - 1);
    } else {
      setLikeCount(prevCount => prevCount + 1);
    }
    setIsLiked(!isLiked);
  };


return (
    <>
         <motion.div
    style={{backgroundImage: `url(${backgroundImage})`}}      
    className="h-full bg-center bg-repeat px-[1%] overflow-x-hidden"
      >

<a className='absolute left-2 top-[105px] no-underline' href="/blogs"><button className='invisible lg:visible font-firaSans bg-black cursor-pointer hover:bg-[#eafe07] hover:text-black transition ease duration-500 flex relative top-1 font-bold tracking-wide text-xl px-3 py-1 border-2 border-sky-500 shadow-2xl rounded-md'>Back</button></a>


      <div className=''>
      <motion.h1
        variants={fadeIn('right', 'tween', 0.2, 0.6)}
        initial={animationComplete ? "" : "hidden"}
        whileInView="show"
        onAnimationComplete={handleAnimationComplete}
        className="text-3xl  xs:text-4xl text-center px-10 text-[#FFFFFF] font-extrabold font-firaSans tracking-wider mb-2">
            Hacking the Night Away: Unveiling the Thrills of SpaceApps Athlone 2023      
        </motion.h1>


    <div className='flex flex-col justify-between gap-1 px-[21%] my-6 font-firaSans tracking-wide text-xl'>
      <p>Shaiv Mehrotra</p> 
      <p>5 min read | Sep 27, 2023</p>
    </div>

    <hr className='opacity-30 w-[90%] md:w-[80%] lg:w-[63%] mx-auto' />
        <div className='px-[21%] my-4'>
        <div className='flex flex-row items-center gap-1.5 font-firaSans '>
        <button
        className=''
    onClick={handleLikeClick}
    style={{ border: 'none', background: 'none', cursor: 'pointer' }}
  >
    {isLiked ? (
      <img className='' src="./like.png" width={25} alt="liked" />
    ) : (
      <img className='' src="./unlike.png" width={25} alt="like" />
    )}
  </button>
        </div>
        {/* <img
            src={isPlaying ? './pause.png' : './play.png'}
            width={25}
            alt='play-pause'
            onClick={handleToggleSpeech}
            style={{ cursor: 'pointer' }}
          /> */}
        </div>


    <hr className='opacity-30 w-[90%] md:w-[80%] lg:w-[63%] mx-auto' />

    <div className='mt-8 mb-4 text-lg mx-auto font-overpass font-light tracking-tight leading-normal text-justify max-w-[90%] md:max-w-[75%] lg:max-w-[60%] flex flex-col items-center gap-6'>
    <p>Are you ready to embark on a journey of innovation, sleepless nights, and boundless camaraderie? Look no further than SpaceApps Athlone 2023, a hackathon experience that will leave you exhilarated and inspired. Imagine a weekend filled with coding, problem-solving, and networking with like-minded individuals from around the globe, all set against the backdrop of NASA's International Space Apps Challenge.</p>
    <img className='my-5 rounded-xl object-contain max-w-full' src='./blog10.jpg' alt='banner' />
    <p><b>Hackathon Fever: More Than Just Coding</b></p>
    <p>Hackathons like SpaceApps Athlone are a breed of their own, where participants, fondly called hackers, gather to create, innovate, and push their limits. It's an electrifying atmosphere where ideas come to life, and dreams turn into projects. Whether you're engrossed in lines of code or passionately crafting innovative solutions, this hackathon is for you.</p>
    <p><b>The All-Nighter</b></p>
    <p>Picture this: it's midnight, and you're deep into your project, surrounded by fellow hackers intensely working on their projects. Cups of coffee and energy drinks are scattered across the tables, fueling the night's creativity. Sleep may become a distant memory, but the adrenaline keeps you going, no matter if you're coding or bringing your unique skills to other project aspects.</p>
    <p><b>Teamwork Makes the Dream Work</b></p>
    <p>Hackathons are about collaboration just as much as competition. You'll find yourself part of a diverse team, each member bringing their unique skills to the table. Together, you'll tackle challenges, brainstorm solutions, and create something incredible. It's a bonding experience like no other, where coding and non-coding talents unite to achieve common goals.</p>
    <p><b>Global Connections</b></p>
    <p>In the world of hackathons, geographical borders fade away. SpaceApps Athlone is your chance to connect with fellow hackers from different corners of the world. Discuss ideas, share experiences, and make lifelong friends. This hackathon's global reach mirrors the likes of PennApps and HackMIT, making it the biggest and topmost hackathon worldwide, proudly hosted by NASA.</p>
    <p><b>Eating, Sleeping, and Hacking</b></p>
    <p>At SpaceApps Athlone, the line between work and leisure blurs. You'll witness hackers working with laptops perched on makeshift desks, cozy corners occupied by brainstorming teams, and maybe even a hackathon-inspired pillow fort. Seasoned hackers often come prepared with sleeping bags, ensuring they can grab a few hours of rest before diving back into their code or project tasks.</p>
    <p><b>The SpaceApps Experience</b></p>
    <p>Imagine all of this taking place against the backdrop of NASA's International Space Apps Challenge, the biggest hackathon in the world. SpaceApps Athlone is a global event that challenges participants to solve real-world problems with the help of NASA's open data. It's an opportunity to make a tangible impact on issues ranging from space exploration to climate change.</p>
    <p><b>Why SpaceApps Athlone?</b></p>
    <p>SpaceApps Athlone shares the spirit of innovation with renowned hackathons like PennApps and HackMIT. It's a hub of creativity, learning, and collaboration. Participants don't just code; they shape the future.</p>
    <p>As the countdown to SpaceApps Athlone 2023 begins, get ready to immerse yourself in an unforgettable hackathon experience. It's a whirlwind of creativity, camaraderie, and project development that you won't want to miss. So, mark your calendars, pack your bags (don't forget that sleeping bag!), and get set to hack the night away. Join us from October 6th to 8th, 2023, at TU Shannon. Let's reach for the stars together! 🚀🌌 #SpaceApps2023 #HackAthlone #InnovationUnleashed</p>
    </div>
      </div>
</motion.div>
    </>
  );
}

export default GetReady;
