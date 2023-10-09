import React from 'react';
import backgroundImage from '/starsUpscaled.png';


const Footer = () => {

  const currentYear = new Date().getFullYear();

  return (
    <>
<div 
className='h-full py-2 flex flex-col justify-evenly w-full gap-4 text-[#F6F4F4]'
style={{ backgroundImage: `url(${backgroundImage})` }}
>
  <div className='flex flex-col lg:flex-row lg:items-center lg:justify-evenly text-[14px] gap-1 px-[5%] py-[1%] '>
      <div className=''>
        <div className='flex flex-col gap-2 items-center justify-evenly'>
        <a className='cursor-pointer' href='/'><img className='' src='./spaceapps_Logo.png' width={180}/></a>
        <p className='w-[80%] sm:w-[62%] lg:w-[220px] mt-1 text-justify leading-snug font-overpass font-normal mt-1 mb-6'>
        Space Apps is funded by NASA's <span className="font-semibold"><a className="text-[#2E96F5] no-underline" href="https://science.nasa.gov/earth-science">Earth Science Division</a></span> through a contract with <a className='font-semibold text-[#2E96F5] no-underline'  href='https://www.boozallen.com/'>Booz Allen Hamilton</a>, <a  className='font-semibold text-[#2E96F5] no-underline' href='https://www.mindgrub.com/'>Mindgrub</a>, and <a className='font-semibold text-[#2E96F5] no-underline'  href='https://www.secondmuse.com/'>SecondMuse</a>.
                </p>
        </div>

        <div className='flex gap-3 relative right-1 flex-row items-center justify-between mb-6 '>
          <a href='https://www.facebook.com/spaceapps.athlone'><img className='hover:scale-110 transition-transform ease-in-out duration-800' width={40}  src='facebook.png' /></a>
          <a href='https://www.instagram.com/spaceapps_athlone'><img className='hover:scale-110 transition-transform ease-in-out duration-800' width={40}  src='instagram.png' /></a>
          <a href='https://www.linkedin.com/company/spaceapps-hackathlone/'><img className='hover:scale-110 transition-transform ease-in-out duration-800' width={40}  src='linkedin.png' /></a>
          <a href='https://twitter.com/hack_athlone'><img className='hover:scale-110 transition-transform ease-in-out duration-800' width={40} src='twitter.png' /></a>
        </div>

        {/* <div className='flex items-center flex-col justify-center lg:items-start'>
          <h2 className='font-overpass font-bold text-lg tracking-snug mb-1'>Contact Us</h2>
          <div className='flex flex-row items-center gap-4 mb-1'>
            <img width={22} src='./phone.png' alt='phone icon' />
            <p className='font-overpass font-semibold text-[15px]'>+353 831 148 266</p>
          </div> 
          
          <div className='flex flex-row items-center gap-5 mb-1'>
            <img width={20} src='./email.png' alt='email icon' />
            <p className='font-overpass font-semibold text-[15px]'>info@waytoindia.com</p>
          </div>
        </div> */}
        <hr className='lg:hidden mt-10' />

      </div>

<div className='lg:flex lg:flex-row lg:items-start w-full  lg:justify-evenly grid grid-cols-2'>
  
  <div className='mt-4 lg:mt-4'>
  <h3 className='font-overpass font-bold text-xl tracking-snug mb-1 lg:mb-10'>Participation Kit</h3>
  <ul className='font-firaSans list-none leading-relaxed'>
    <li className='my-2'><a className='tracking-wide no-underline text-[#f6f4f4] hover:text-[#eafe07]' target='_blank' href="https://www.spaceappschallenge.org/2023/challenges/">Challenges</a></li>
    <li className='my-2'><a className='tracking-wide no-underline text-[#f6f4f4] hover:text-[#eafe07]' target='_blank' href="https://drive.google.com/file/d/1Z2y_0w7MQXH5dPbiL4hLdYlpkULcw04S/view?usp=sharing" download>How to Register</a></li>
    <li className='my-2'><a className='tracking-wide no-underline text-[#f6f4f4] hover:text-[#eafe07]' target='_blank' href="https://www.youtube.com/watch?v=EhF7JJlOKXc" download >Choose a Challenge</a></li>
    <li className='my-2'><a className='tracking-wide no-underline text-[#f6f4f4] hover:text-[#eafe07]' target='_blank' href="https://youtu.be/1t9Qxn3w-4o?si=nkyZqB8qwSYGsOY2" download >How to Form Teams</a></li>
    <li className='my-2'><a className='tracking-wide no-underline text-[#f6f4f4] hover:text-[#eafe07]' target='_blank' href="https://youtu.be/lQpLzNgRl8k?si=f0Z7pcfkdwNJQFPS" download >Encourage Team Diversity</a></li>
    <li className='my-2'><a className='tracking-wide no-underline text-[#f6f4f4] hover:text-[#eafe07]' target='_blank' href="https://www.youtube.com/watch?v=2Ornb12MKxk" download >Tips & Tricks</a></li>
  </ul> 
</div>

<div className='mt-4 lg:mt-4 text-right lg:text-left'>
  <h3 className='font-overpass font-bold text-xl tracking-snug mb-1 lg:mb-10 '>Past Event</h3>
  <ul className='font-firaSans list-none  leading-relaxed'>
    <li className='my-2'><a className='tracking-wide no-underline text-[#f6f4f4] hover:text-[#eafe07]' target='_blank' href="https://www.youtube.com/watch?v=n_KqGdnlOcU">Opening Ceremony</a></li>
    <li className='my-2'><a className='tracking-wide no-underline text-[#f6f4f4] hover:text-[#eafe07]' target='_blank' href="https://www.youtube.com/watch?v=zFdhwgOyqho">Mentor Sessions</a></li>
    <li className='my-2'><a className='tracking-wide no-underline text-[#f6f4f4] hover:text-[#eafe07]' target='_blank' href="https://www.youtube.com/watch?v=EjbDhhmpgEk">Practice Presentations</a></li>
    <li className='my-2'><a className='tracking-wide no-underline text-[#f6f4f4] hover:text-[#eafe07]' target='_blank' href="https://www.youtube.com/watch?v=CFN7ewwBYT0">Closing Ceremony</a></li>
  </ul>
</div>

<div className='mt-6 lg:mt-4'>
  <h3 className='font-overpass font-bold text-xl tracking-snug mb-1 lg:mb-10'>Contact & Support</h3>
  <ul className='font-firaSans list-none leading-relaxed'>
    {/* <li className='my-2'><a className='tracking-wide no-underline text-[#f6f4f4] hover:text-[#eafe07]' target='_blank' href="#">About us</a></li> */}
    <li className='my-2'><a className='tracking-wide no-underline text-[#f6f4f4] hover:text-[#eafe07]' target='_blank' href="/faq">Help & FAQs</a></li>
    {/* <li className='my-2'><a className='tracking-wide no-underline text-[#f6f4f4] hover:text-[#eafe07]' target='_blank' href="/contact">Contact us</a></li> */}
    {/* <li className='my-2'><a className='tracking-wide no-underline text-[#f6f4f4] hover:text-[#eafe07]' href="#">Sitemap</a></li> */}
    {/* <li className='my-2'><a className='tracking-wide no-underline text-[#f6f4f4] hover:text-[#eafe07]' href="#">Feedback</a></li> */}
    {/* <li className='my-2'><a className='tracking-wide no-underline text-[#f6f4f4] hover:text-[#eafe07]' href="#">Plan My Tour</a></li> */}
  </ul>
</div>

<div className='mt-6 lg:mt-4 text-right lg:text-left'>
  <h3 className='font-overpass font-bold text-xl tracking-snug mb-1 lg:mb-10 '>Terms & Policies</h3>
  <ul className='font-firaSans list-none leading-relaxed'>
    <li className='my-2'><a className='tracking-wide no-underline text-[#f6f4f4] hover:text-[#eafe07]' target='_blank' href="https://www.nasa.gov/about/highlights/HP_Privacy.html"> Privacy Policy</a></li>
    <li className='my-2'><a className='tracking-wide no-underline text-[#f6f4f4] hover:text-[#eafe07]' target='_blank' href="https://www.spaceappschallenge.org/legal/"> Terms & Conditions</a></li>
    {/* <li className='my-2'><a className='tracking-wide no-underline text-[#f6f4f4] hover:text-[#eafe07]' target='_blank' href="#"> Covid-19 Safety</a></li> */}
  </ul>
</div>
</div>

  </div>

      <div className='w-full'>
      <hr className='w-[92%] mx-auto'/>
      <div className='flex flex-col sm:flex-row sm:flex items-center justify-between px-[5%]'>
      <p className='font-firaSans text-center py-3'>Copyright ©2023 NASA</p>
      <p className='font-overpass text-center py-3'>Developed by <span><a className='font-firaSans tracking-wide no-underline text-[#f6f4f4] hover:text-[#eafe07]' href='https://www.linkedin.com/in/shantanu-khosla-48b8ba21b/'>Shantanu Khosla</a></span></p>
      </div>
      </div>
</div>
    </>
  );
}

export default Footer;
