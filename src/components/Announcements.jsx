import React from 'react'
import backgroundImage from '/starsUpscaled.png';
import { announcements } from '../constants';

const AnnouncementCard = ({ announcement }) => {
    return (
      <div className='w-full px-4 py-1 bg-[#eafe07] rounded-md my-2'>
        <p className='text-black font-firaSans text-md'>{announcement}</p>
      </div>
    );
  };
const Announcements = () => {
  return (
    <>
    <div
      className="h-full px-[20px] sm:px-[40px] lg:px-[60px] py-5 header bg-center bg-repeat bg-contain h-screen"
      style={{backgroundImage: `url(${backgroundImage})`}}
    >
      <h1 className="text-4xl xs:text-5xl lg:text-6xl text-[#FFFFFF] font-extrabold font-firaSans tracking-wider mb-2">
      Announcements!
      </h1>
      <p className="text-lg sm:text-2xl leading-relaxed font-light font-overpass tracking-wide">
        Stay informed and up-to-date with important updates 
      </p>
      <hr className='bg-[#eafe07] my-3 w-full' />
      <div className='my-10'>
      {announcements.map((announcement, index) => (
  <AnnouncementCard 
    key={index}
    announcement={announcement.announcement}  // Access the announcement property correctly
  />
))}

      </div>
      </div>
    </>
  )
}

export default Announcements