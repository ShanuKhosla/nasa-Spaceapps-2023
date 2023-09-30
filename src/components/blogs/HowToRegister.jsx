import React, {useState, useEffect} from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/motion';
import backgroundImage from '/starsUpscaled.png';


const HowToRegister = () => {

    const [animationComplete, setAnimationComplete] = useState(false);
    const [isLiked, setIsLiked] = useState(() => {
        const savedLiked = JSON.parse(localStorage.getItem('isLiked'));
        return savedLiked !== null ? savedLiked : false;
      });    const [likeCount, setLikeCount] = useState(() => {
        const savedLikeCount = JSON.parse(localStorage.getItem('likeCount'));
        return savedLikeCount !== null ? savedLikeCount : 482; // Default like count to 971
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
    className="h-full bg-center bg-repeat-y px-[1%] overflow-x-hidden"
      >

<a className='absolute left-2 top-[105px] no-underline' href="/blogs"><button className='invisible lg:visible font-firaSans bg-black cursor-pointer hover:bg-[#eafe07] hover:text-black transition ease duration-500 flex relative top-1 font-bold tracking-wide text-xl px-3 py-1 border-2 border-sky-500 shadow-2xl rounded-md'>Back</button></a>


      <div className=''>
      <motion.h1
        variants={fadeIn('right', 'tween', 0.2, 0.6)}
        initial={animationComplete ? "" : "hidden"}
        whileInView="show"
        onAnimationComplete={handleAnimationComplete}
        className="text-3xl w-[90%] md:w-[80%] lg:w-[63%] mx-auto  xs:text-4xl text-center text-[#FFFFFF] font-extrabold font-firaSans tracking-wider mb-2">
        Ready to Join the Cosmic Challenge? Here's How to Register for SpaceApps 2023!
      </motion.h1>


    <div className='flex flex-col justify-between gap-1 px-[21%] my-6 font-firaSans tracking-wide text-xl'>
      <p>Shaiv Mehrotra</p>
      <p>6 min read | Aug 24, 2023</p>
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
    <p>The NASA SpaceApps Challenge 2023 is gearing up for an exciting cosmic adventure, and you're invited! Whether you're an aspiring space scientist, a data wizard, a game developer, or a creative storyteller, this year's hackathon has something for everyone. If you're ready to join the global SpaceApps community and make your mark in space exploration, follow these simple steps to register for the event.The NASA SpaceApps Challenge 2023 is gearing up for an exciting cosmic adventure, and you're invited! Whether you're an aspiring space scientist, a data wizard, a game developer, or a creative storyteller, this year's hackathon has something for everyone. If you're ready to join the global SpaceApps community and make your mark in space exploration, follow these simple steps to register for the event. </p>
    <img className='my-5 rounded-xl object-contain max-w-full' src='./notSureHow.gif' alt='banner' />
    <p className='font-semibold'> Step 1: Visit the SpaceApps Website </p>
    <p>First things first, open your web browser and head over to the official SpaceApps Challenge website. You can do this by typing "SpaceApps Challenge" into your preferred search engine or by directly entering the URL: <span className=''><a className='text-[#eafe07] no-underline' href='https://www.spaceappschallenge.org/'>https://www.spaceappschallenge.org/</a></span></p>
    <img className='my-5 rounded-xl object-contain max-w-full' src='./step1.png' alt='banner' />

    <p className='font-semibold'> Step 2: Explore the Local Events </p>
    <p>Once you're on the SpaceApps website, take a moment to explore the available options. You'll find a variety of resources, including information about past challenges, inspirational stories, and more. But right now, we're here for SpaceApps 2023, so let's dive in!</p>
    <img className='my-5 rounded-xl object-contain max-w-full' src='./step2.png' alt='banner' />

    <p className='font-semibold'> Step 3: Search for 2023 Local Events </p>
    <p>To participate in SpaceApps 2023, you'll want to find a local event near you. These events serve as the launchpad for your SpaceApps journey. Click on the "Find a Local Event" or similar link to begin your search.</p>
    <img className='my-5 rounded-xl object-contain max-w-full' src='./step3.png' alt='banner' />

    <p className='font-semibold'> Step 4: Choose HackAthlone (TU Shannon, Ireland) </p>
    <p>As you search for local events, you'll come across various locations around the world. However, if you're looking for the Athlone event in Ireland, you're in the right place! Look for "HackAthlone" or simply "Athlone" in the list of events. This event is hosted at TU Shannon (Technological University Shannon) and promises an exciting experience in space innovation and collaboration.</p>
    <img className='my-5 rounded-xl object-contain max-w-full' src='./step4.png' alt='banner' />

    <p className='font-semibold'> Step 5: Sign Up </p>
    <p>Once you've found the Athlone event, it's time to secure your spot. Click on the event to access its dedicated page. There, you'll find all the details you need about Athlone's SpaceApps event, including dates, schedules, and more.</p>
    <img className='my-5 rounded-xl object-contain max-w-full' src='./step5.png' alt='banner' />
    <img className='my-5 rounded-xl object-contain max-w-full' src='./step51.png' alt='banner' />
    
    <p className='font-semibold'> Step 6: Register as an Individual or Team </p>
    <p>Now, it's registration time! Choose whether you want to participate as an individual or as part of a team. If you're planning to collaborate with friends or fellow enthusiasts, team registration is the way to go. Otherwise, you can register as an individual and join or form a team later.</p>
    <img className='my-5 rounded-xl object-contain max-w-full' src='./step6.png' alt='banner' />

    <p className='font-semibold'> Step 7: Access Resources and Challenges </p>
    <p>Congratulations! You're now officially registered for SpaceApps 2023, Athlone. This means you'll have access to a wealth of resources, including datasets, tools, mentorship, and more to help you prepare for the hackathon. Additionally, you can explore the list of exciting challenges that await your innovation and problem-solving skills.</p>
    <p className='font-semibold'> Step 8: Get Ready for the Cosmic Adventure </p>
    <p>With your registration complete, you're one step closer to an incredible cosmic adventure. Stay tuned for updates from the Athlone event organizers, connect with fellow participants, and start brainstorming your hackathon ideas. Remember, SpaceApps is not just a competition; it's an opportunity to learn, collaborate, and contribute to space science and exploration.</p>
    <p>So, whether you're a seasoned space enthusiast or a newcomer with a passion for discovery, SpaceApps 2023 is your chance to shine. Register today, and get ready to reach for the stars at TU Shannon's HackAthlone event. The cosmos is waiting for your brilliant ideas and solutions!</p>
    </div>
      </div>
</motion.div>
    </>
  );
}

export default HowToRegister;
