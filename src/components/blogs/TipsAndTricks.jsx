import React, {useState, useEffect} from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/motion';
import backgroundImage from '/starsUpscaled.png';


const TipsAndTricks = () => {

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
            Mastering SpaceApps Athlone: Tips for a Stellar Hackathon Experience     
        </motion.h1>


    <div className='flex flex-col justify-between gap-1 px-[21%] my-6 font-firaSans tracking-wide text-xl'>
      <p>Shaiv Mehrotra</p> 
      <p>6 min read | Sep 23, 2023</p>
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
        <p>Are you gearing up for SpaceApps Athlone 2023, ready to embark on an unforgettable journey of innovation and discovery? Whether you're a seasoned participant or a first-timer, navigating a hackathon of this magnitude can be an exhilarating adventure. To help you make the most of your SpaceApps experience, we've compiled a handy guide with tips and tricks to elevate your hackathon game.</p>    
    <img className='my-5 rounded-xl object-contain max-w-full' src='./blog7.jpg' alt='banner' />
    <p><strong>Team Up: Collaborate for Galactic Success</strong></p>
    <p><b>• Break the Ice: </b>As you step into the hackathon, don't hesitate to engage with your fellow participants. Use hackathon ice-breakers, prep a small idea pitch, or highlight your skillset. It's all about making connections and finding like-minded space enthusiasts.</p>
    <p><b>• Pre-Hackathon Team Formation: </b>If you already have a team in mind or want to form one before the event, go for it! Collaborating with a group of diverse talents can amplify your problem-solving capabilities.</p>
    <p><b>• Leverage Your Proficiencies: </b>Once in a team, identify your strengths and contribute accordingly. Whether it's coding, design, research, or presentation skills, assume a role that aligns with your talents. For instance, you could take the lead in developing the presentation.</p>
    <p><strong>Network: Forge Cosmic Connections</strong></p>
<p><b>• Engage with Fellow Participants: </b>Hackathons are more than just coding marathons; they're opportunities to build connections that can last a lifetime. Engage with fellow participants, discuss project ideas, share your interests, backgrounds, and even your experiences in hackathons. These interactions can lead to valuable collaborations.</p>
<p><b>• Connect with Mentors: </b>Seek guidance from mentors who can provide insights, technical expertise, and advice on problem-solving. Their experience can be invaluable in steering your project in the right direction.</p>
<p><b>• Expand Your LinkedIn Universe: </b>Don't miss the chance to grow your professional network. During the hackathon, connect with people on LinkedIn and send out personalized messages, sharing your experiences and connections forged during the event.</p>

<p><strong>Solution Demo: Shine with Your Innovation</strong></p>
<p><b>• Showcase Your Solution: </b>When presenting your project, seize the opportunity to spotlight the depth and innovation behind your solution. Whether it's a working prototype, a practical demo, or a simulation, a visually compelling presentation can leave a lasting impression.</p>
<p><b>• Proof of Concept: </b>Aim for a proof of concept. Having an institution validate the value of your proposed solution can add credibility and impact to your project.</p>

<p><strong>Time Management: Hackathon Hours Are Precious</strong></p>
<p><b>• Manage Your Time Effectively: </b>Time flies during a hackathon. Prioritize tasks, set realistic goals, and allocate time wisely. Stay organized to ensure you make the most of every coding minute.</p>

<p><strong>Final Presentations: Shine Bright on Stage</strong></p>
<p><b>• Perfect Your Pitch: </b>As the hackathon concludes, practice your pitch rigorously. Determine the optimal time for your presentation, and remember that not everyone on your team needs to speak. Use a structured approach to organize your thoughts early in the hack.</p>

<p><strong>Seek SME Validation: Tap into Mentor Resources</strong></p>
<p><b>• Utilize Mentor Hours: </b>Don't hesitate to leverage mentor hours to consult with experts or individuals experienced in your project's field. Their feedback and guidance can be instrumental in refining your solution.</p>

<p><strong>Hackshop: Secure Your Components Early</strong></p>
<p><b>• Battling for Resources: </b>In a hackathon where limited electronic components are available, especially those in high demand, it's essential to secure them as soon as possible. Visit the Hackshop early to avoid potential bottlenecks.</p>


<p><b>Ethical Considerations:</b> The Universal Code of Conduct
Remember to uphold ethical standards throughout the hackathon. Respect your teammates, mentors, and fellow participants. Be inclusive, collaborative, and always prioritize the integrity of your work.</p>

<p>As you embark on your hackathon journey at SpaceApps Athlone 2023, keep these tips in mind. They'll not only enhance your experience but also elevate the impact of your projects. Get ready to ignite your creativity, innovate with technology, and explore new horizons. We can't wait to see your aspirations come to life!</p>


    
<p className='font-semibold'>Join us from October 6th to 8th, 2023, at TU Shannon . Let's reach for the stars together! 🚀🌌 <span className='text-[#2E96F5] font-bold text-xl'>#SpaceApps2023</span> <span className='text-[#0960E1] font-bold text-xl'>#CosmicHacks </span> <span className='text-[#0042A6] font-bold text-xl'>#HackathonTips </span> <span className='text-[#eafe07] font-bold text-xl'>#HackAth</span><span className='text-xl font-light'>l</span><span className='text-[#eafe07] font-bold text-xl'>on</span><span className='text-xl font-light'>e</span></p>
    </div>
      </div>
</motion.div>
    </>
  );
}

export default TipsAndTricks;
