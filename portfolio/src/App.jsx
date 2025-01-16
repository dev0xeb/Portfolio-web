import { useState } from 'react'
import './index.css'
import Headers from './components/Headers'
import Intro from './components/Intro'
import Skills from './components/Skills'
import Qualifications from './components/Qualifications'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <Headers/>
    <Intro/>
    <Skills/>
    <Qualifications/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
