import { useState } from 'react'
import './App.css'
import Header from './components/global/header'
import Hero from './components/Hero'
import Footer from './components/global/footer'
import Bio from './components/Bio'
import Projects from './components/Projects/Projects'
import Spotify from './components/Spotify/Spotify'

function App() {

  return (
    <>
      <Header />
      <Hero />
      <Bio />
      <Projects />
      <Spotify />
      <Footer />
    </>
  )
}

export default App
