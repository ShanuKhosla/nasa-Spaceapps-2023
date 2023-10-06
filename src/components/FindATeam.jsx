import React from 'react'
import backgroundImage from '/starsUpscaled.png';
import { pitchs } from '../constants';

const TeamCard = ({name, college, challenge, summary, skillset, skillsneeded}) => {
    return(
        <>
        <div className='w-[300px] h-[310px] overflow-y-auto bg-[#eafe07] text-black font-overpass font-normal text-md flex flex-col items-start gap-3 p-3 rounded-lg shadow-inner '>
        <h1 className='text-lg font-extrabold'>Name: {name}</h1>
        <p><b>College:</b> {college}</p>
        <p><b>Challenge:</b> {challenge}</p>
        <p><b>Pitch Summary:</b> {summary}</p>
        <p><b>Team Skill Set</b>: {skillset}</p>
        <p><b>Skills Required:</b> {skillsneeded}</p>
        </div>
        </>
    )
}

const FindATeam = () => {
  return (
    <>
    <div
      className="h-full px-[20px] sm:px-[40px] lg:px-[60px] py-5 header bg-center bg-repeat bg-contain"
      style={{backgroundImage: `url(${backgroundImage})`}}
    >
      <h1 className="text-4xl xs:text-5xl lg:text-6xl text-[#FFFFFF] font-extrabold font-firaSans tracking-wider mb-2">
      Find A Team
      </h1>
      <p className="text-lg sm:text-2xl leading-relaxed font-light font-overpass tracking-wide">
      Collaborate and Conquer: Discover Your Dream Team
      </p>
      <hr className='bg-[#eafe07] my-3 w-full' />

      <div className='flex flex-wrap items-start gap-5'>
      {pitchs.map((pitch, index) => (
          <TeamCard 
          key={index}
          name={pitch.name}
          college={pitch.college}
          challenge={pitch.challenge}
          summary={pitch.summary}
          skillset={pitch.skillset}
          skillsneeded={pitch.skillsneeded}
          />
          ))}
        </div>
      </div>
    </>
  )
}

export default FindATeam