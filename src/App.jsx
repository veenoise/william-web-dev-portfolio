import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './Navigation'
import Hero from './Hero'
import Experience from './Experience'
import Project from './Project'
import Skill from './Skill'
import Contact from './Contact'

Experience
function App() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Skill />
        <Experience />
        <Project />
        <Contact />
      </main>
    </>    
  )
}

export default App
