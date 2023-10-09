/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import backgroundImage from '/heroBackground.png';
import { fadeIn, staggerContainer, textVariant } from '../utils/motion';
import "./styles/CustomTexts.css";

const InfoHubContent = ({ isOpen, toggleInfoHub }) => {

  
  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: isOpen ? 0 : '100%' }}
      transition={{ duration: 0.5 }}
      className='absolute h-[340px] w-fit px-3 text-xs top-40 right-0 rounded-l-lg rounded-r-none pb-5 py-2 pl-4 flex items-start justify-start gap-2 flex-col  font-firaSans  bg-[#f6f4f4] text-black overflow-y-scroll  overflow-x-hidden'
    >

    <button onClick={toggleInfoHub} className='cursor-pointer'><img width={15} src='./cancel.png' className='absolute top-0 left-0 m-1' /></button>

     <div>
      <h1 className='font-black text-[#E43700] text-xl'>   Emergency Contact</h1>
      <p className=' font-black'>999</p>
      <p className=' font-black'>112</p>
      <p className=' font-black'>(087) 111 4444</p>
      <p className=' font-black'>Midland Regional Hospital Tullamore: +353 57 932 1501</p>  
      <p className=' font-black'>Athlone Garda Police Station: +353 90 649 8550</p>  
      </div>    
      
      {/* <div>
      <h1 className='text-sm'>   Contact Info</h1>
      <p>Sahir Sharma: +353 83 375 0317</p>
      <p>Kkhawaish Gulati: +353 89 494 8222</p>
 
      </div> */}

      <details className="w-full rounded-md ">
      <summary className="text-sm text-black no-underline font-extrabold cursor-pointer" > Contact Info</summary>
      <ul className="p-3 gap-2 shadow-xl menu w-full dropdown-content z-[1] bg-slate-100 rounded-lg font-bold">
      <li>Sahir Sharma: +353 83 375 0317</li>
      <li>Kkhawaish Gulati: +353 89 494 8222</li>
      </ul>
      </details>

      
      <a className='text-black no-underline' target='_blank' href='/announcements'><h1 className='text-sm'>  Announcements</h1></a>
      <a className='text-black no-underline' target='_blank' href='/day-one'><h1 className='text-sm'>  Today's Schedule</h1></a>
      {/* <a className='text-black no-underline' target='_blank' href='/'><h1 className='text-sm'>  Facility Information</h1></a> */}
      <details className="w-full rounded-md">
      <summary className="text-sm text-black no-underline font-extrabold cursor-pointer" >Facility Information</summary>
      <ul className="p-2 shadow-xl menu w-full dropdown-content z-[1] bg-slate-100 rounded-box ">
      <details className="w-full rounded-md">
      <summary className="text-sm text-black no-underline font-extrabold cursor-pointer" >Parking Information</summary>
      <ul className="p-2 shadow-xl menu w-full dropdown-content z-[1] bg-slate-100 rounded-box ">
      <li><a className='text-black no-underline' target='_blank' href='./ParkingLayout.png' download>  Car Parking Map</a></li>
      <li><a className='text-black no-underline' target='_blank' href='https://www.ait.ie/uploads/downloads/TUS_MIDLANDS_PARKING_REGULATIONS_2023.pdf' download>  Parking Regulations</a></li>
      </ul>
      </details>
      <li><a className='text-black no-underline'  target='_blank' href='https://www.ait.ie/uploads/downloads/Engineering_Building_-_Emergency_Evacuation_Maps__Information.pdf'>  Emergency Evacuation Plan</a></li>
      </ul>
      </details>

      <details className="w-full rounded-md ">
      <summary className="text-sm text-black no-underline font-extrabold cursor-pointer" >Classrooms</summary>
      <ul className="p-3 gap-2 shadow-xl menu w-full dropdown-content z-[1] bg-slate-100 rounded-lg font-bold">
      <button className="border-none text-black font-firaSans text-left bg-transparent text-[14px] hover:bg-[#eafe07] cursor-pointer" onClick={()=>document.getElementById('my_modal_1').showModal()}>  Checkout Classrooms</button>
<dialog id="my_modal_1" className="modal flex items-center justify-center mx-auto">
  <div className="modal-box bg-black text-md text-[#f6f4f4]">
    <h3 className="font-bold text-3xl">Kindly Note</h3>
    <p className="mt-4 font-normal text-md">Here are the designated classrooms for teams to engage in discussions: <br /> <span className='font-extrabold text-xl mt-1 flex flex-wrap max-w-[50%]'>U305, U306, V305, V306, W301, Y305, Y306, Z305, Z306</span></p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="px-4 py-1 rounded-full bg-[#eafe07] font-bold text-lg border-2 border-slate-500 text-black font-firaSans">Thanks!</button>
      </form>
    </div>
  </div>
</dialog>
      <a className='text-black no-underline' href='./Classrooms.png' download>  Download Floor Layout</a>
      </ul>
      </details>
      <details className="w-full rounded-md ">
      <summary className="text-sm text-black no-underline font-extrabold cursor-pointer" > Resources</summary>
      <ul className="p-3 gap-2 shadow-xl menu w-full dropdown-content z-[1] bg-slate-100 rounded-lg font-bold">
      <a target="_blank" className='text-black no-underline' href='/findateam'>Find A Team</a>
      </ul>
      </details>  
      <a className='text-black no-underline' target='_blank' href='https://instagram.com/spaceappsathlone/live/18035428129520568?igshid=MTc4MmM1YmI2Ng=='><h1 className='text-sm'>  Live Stream</h1></a>
    
      {/* <a className='text-black no-underline' target='_blank' href='/'><h1 className='text-sm'>  Rules and Regulations</h1></a> */}
      {/* <a className='text-black no-underline' target='_blank' href='/'><h1 className='text-sm'>  Discord </h1></a> */}
      {/* <a target='_blank' href='/'><h1 className='text-sm'>  Whatsapp Chatroom</h1></a> */}
    </motion.div>
  );
};


const HeroSection = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleInfoHub = () => {
    setIsOpen(!isOpen);
  };

  const [animationComplete, setAnimationComplete] = useState(false);

  const handleAnimationComplete = () => {
    setAnimationComplete(true);
  };

  return (
    <motion.div
      className="my-[-30px] py-3 mb-10 flex items-center justify-center flex-col h-screen bg-[#000000] bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}

    >



<h1 className='text-xl mt-4  text-[#FFFFFF] font-bold font-firaSans text-center tracking-wider contrast-125'>Welcome To</h1> 

      <h1
      className=" text-4xl  xs:text-6xl lg:text-8xl text-[#FFFFFF] font-extrabold font-firaSans text-center tracking-wider mb-2"><span className='font-black text-[#eafe07]'>HackAth</span><span className='font-thin text-[#ffffff]'>l</span><span className='font-black text-[#eafe07]'>on</span><span className='font-thin text-[#ffffff]'>e</span> <br /></h1>

    <img width={200} src="./spaceapps_Logo.png" />

    <h1 className='text-2xl text-center sm:text-4xl lg:text-6xl mt-3 mb-1 text-[#ffffff] leading-tight font-firaSans font-bold tracking-tight contrast-125'>The hackathon has officially concluded.</h1>
    <p className='text-center w-[70%] md:w-full text-lg md:text-3xl mt-1 mb-8 font-overpass font-bold tracking-tight text-[#eafe07] contrast-125'>Cheers to the participants! Best of luck to all, and a big thank you for joining us.</p>

      {/* <button onClick={toggleInfoHub} className='cursor-pointer absolute right-0 top-40 p-1 bg-[#eafe07] rounded-l-full rounded-r-none flex flex-row items-center gap-2'>
        <img src='./leftarrow.png' width={15} />
        <p className='text-black text-xs font-firaSans font-bold tracking-tight'>Info Hub</p>
      </button>

      {isOpen && <InfoHubContent isOpen={isOpen} toggleInfoHub={toggleInfoHub} />} */}

         {/* <h1 className='underline text-3xl text-center sm:text-2xl mt-5 lg:text-4xl mt-3 mb-1 text-[#eafeo7] leading-tight font-firaSans font-bold tracking-tight contrast-125'>Join The Action!</h1>
        <motion.div
         variants={fadeIn('', '', 0.7, 0.3)}
          initial={animationComplete ? "" : "hidden"}
          whileInView="show"
          onAnimationComplete={handleAnimationComplete}
          className='flex flex-col sm:flex-row items-center justify-between gap-4 my-3'
        >        
              
        <a href="https://www.youtube.com/watch?v=W3y2qN2spO4" target='_blank'>
        <button className="px-[30px] py-3  bg-black bg-opacity-90 md:bg-opacity-10 text-[#eafe07] text-2xl font-firaSans font-semibold rounded-full hover:bg-[#eafe07] hover:text-black transition-colors duration-500 border-[4px] cursor-pointer border-red-600 ">
          Youtube Live Stream
        </button>
        </a>
        </motion.div> */}
         

      
    </motion.div>
  );
}

export default HeroSection;
