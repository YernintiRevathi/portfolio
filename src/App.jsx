import './App.css'
import AllContacts from './components/AllContacts'
import Education_and_Certificates from './components/Education_and_Certificates'
import AllExperience from './components/AllExperience'
import AllProjects from './components/AllProjects'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import Skills_and_Achievements from './components/Skills_and_Achievements'
import AllPublications from './components/AllPublications'
import { useState } from 'react'

function App() {
  return (
    <div className='dark:text-white dark:bg-stone-800'>
      <HeroSection/>
      <AllExperience/>
      <Skills_and_Achievements/>
      <AllProjects/>
      <Education_and_Certificates/>
      <AllPublications/>
      <AllContacts/>
    </div>
  )
}

export default App
