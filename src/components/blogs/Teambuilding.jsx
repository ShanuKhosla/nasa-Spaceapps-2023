import React, {useState, useEffect} from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/motion';
import backgroundImage from '/starsUpscaled.png';


const Teambuilding = () => {

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
        Navigating SpaceApps Athlone 2023: Forming Teams, Joining Forces, and Finding Your Cosmic Crew
      </motion.h1>


    <div className='flex flex-col justify-between gap-1 px-[21%] my-6 font-firaSans tracking-wide text-xl'>
      <p>Shaiv Mehrotra</p> 
      <p>6 min read | Sep 18, 2023</p>
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
    <p>Are you gearing up for SpaceApps Athlone 2023 and wondering how to find the perfect team to tackle NASA's cosmic challenges? Look no further! In this guide, we'll walk you through the strategies and support available at the hackathon to help you form your dream team, join an existing one, or even embark on a solo cosmic adventure.</p>
    <img className='my-5 rounded-xl object-contain max-w-full' src='./blog5.jpg' alt='banner' />
    <p><strong>1. Team Size Flexibility:</strong></p>
    <p> - One of the fantastic aspects of SpaceApps Athlone is the flexibility in team sizes. You can form a team of 1 to 6 participants, allowing for diverse collaborations and ideas.</p>

    <p><strong>2. Solo or Team Participation:</strong></p>
<p>- Participants have the freedom to choose between participating solo or as part of a team. You can explore the challenges independently or collaborate with fellow space enthusiasts.</p>

<p><strong>3. Registering Your Team:</strong></p>
<p>- If you decide to form a team, the team leader must register it on the SpaceApps platform. This step will create a hub for your collective efforts.</p>

<p><strong>4. Team Joining Opportunities:</strong></p>
<p>- Not interested in leading a team? No worries! Team joining will open soon, typically starting from September 25th. During this time, registered teams will be visible on the SpaceApps platform, and you can join the one that aligns with your interests.</p>

<p><strong>5. Dedicated Chat Platform:</strong></p>
<p>- SpaceApps Athlone provides a designated chat platform, allowing participants to connect with each other. This platform is a fantastic resource for team building, discussing challenges, and forming alliances.</p>

<p><strong>6. Seek Organizers' Assistance:</strong></p>
<p>- If you're feeling a bit lost or unsure about how to find or create a team, don't hesitate to reach out to the organizing team. They're there to help you navigate the hackathon's exciting landscape.</p>

<p><strong>7. Cross-College Collaboration:</strong></p>
<p>- SpaceApps encourages diverse teams! You can team up with participants from different colleges and universities, fostering cross-institutional cooperation.</p>

<p><strong>8. Inclusion of Online Participants:</strong></p>
<p>- Space knows no boundaries! Online participants are welcome to form or join teams, ensuring that the hackathon transcends geographical limitations.</p>

<p><strong>9. Engage in Pitchfest:</strong></p>
<p>- At the start of the hackathon, don't miss the Pitchfest event. Team leaders can take the stage to share their challenge goals, project ideas, and the kind of talent they're looking for. This is a perfect opportunity to find like-minded individuals to join your team.</p>

<p><strong>10. Icebreaking Sessions:</strong></p>
<p>- Right after the Pitchfest, get ready for the icebreaking session. This is your chance to socialize, network, and meet potential teammates. Who knows, your cosmic crew might be just a conversation away!</p>

<p><strong>11. Color-Coded ID Cards:</strong></p>
<p>- To make team formation even smoother, participants will receive color-coded ID cards. These stickers will represent your domain or expertise, helping others identify your skills and interests quickly.</p>

<p>In SpaceApps Athlone 2023, forming teams, joining forces, and networking are essential elements of the cosmic journey. Whether you're a seasoned participant or a first-timer, you'll find ample opportunities to connect, collaborate, and embark on this incredible adventure together. Get ready to meet your cosmic crew and conquer the cosmos!</p>

<p className='font-semibold'>Join us from October 6th to 8th, 2023, at TU Shannon . Ignite your creativity, innovate with technology, and explore the universe. See you there! 🚀🌌 <span className='text-[#2E96F5] font-bold text-xl'>#SpaceApps2023</span> <span className='text-[#0960E1] font-bold text-xl'>#TeamFormation</span> <span className='text-[#0042A6] font-bold text-xl'>#CosmicCrew</span> <span className='text-[#eafe07] font-bold text-xl'>#HackAth</span><span className='text-xl font-light'>l</span><span className='text-[#eafe07] font-bold text-xl'>on</span><span className='text-xl font-light'>e</span></p>
    </div>
      </div>
</motion.div>
    </>
  );
}

export default Teambuilding;
