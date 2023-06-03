import React from 'react';
import  Navbar  from './Navbar'
import  HeroSection  from './HeroSection'
import  About  from './About'
import  ParticipationDetails from './ParticipationDetails'
import  Timeline  from './Timeline'
import  CTA  from './CTA'
import  Faqs from './Faqs'
import  Contact  from './Contact'


const HomePage = () => {
  return(
    <div>
      <div
        style={{width: "100%", height: "100%", backgroundColor: "#0042A6", backgroundSize: "cover", backgroundPosition: "center",}}
        >
      <Navbar />
      <HeroSection />
    </div>
      <About />
      <ParticipationDetails />
      <Timeline />
      <CTA />
      <Faqs />
      <Contact />
</div>
  );
}

export default HomePage;
