  import React, {useState} from 'react'
  import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
  import './App.css'
  import  Navbar  from './components/Navbar'
  import  HeroSection  from './components/HeroSection'
  import  About  from './components/About'
  import  ParticipationDetails from './components/ParticipationDetails'
  import  Timeline  from './components/Timeline'
  import  CTA  from './components/CTA'
  import  Faqs from './components/Faqs'
  import  Contact  from './components/Contact'
  import  Volunteer  from './components/Volunteer'
  import  Ambassador  from './components/Ambassador'
  import  Sponsors  from './components/Sponsors'

  function App() {
    return (
      <div className="bg-black">

      <Navbar />
      <HeroSection />
      <About />
      <ParticipationDetails />
      <Timeline />
      <CTA />
      <Faqs />
      <Contact />

      <Routes>
    <Route path='/ambassador' element={<Ambassador />} />
    <Route path='/volunteer' element={<Volunteer />} />
    <Route path='/sponsors' element={<Sponsors />} />
  </Routes>

</div>
    )
  }

  export default App
