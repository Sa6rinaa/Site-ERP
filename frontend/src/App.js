import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import Header from './Header'
import Hero from './Hero'
import About from './About'
import VideoSection from './VideoSection'
import Features from './Features'
import Testimonials from './Testimonials'
import Contact from './Contact'
import Footer from './Footer'
import SimulateurModules from './SimulateurModules' 



function HomePage() {
  return (
    <div>
      <Hero />
    
      <About />  
      <Features />
      <VideoSection />
      <SimulateurModules />
      <Testimonials />
      <Contact />
    </div>
  );
}


function App() {
  return (
    <>
      <Header />
      <main>
        <HomePage /> 
      </main>
      <Footer />
    </>
  )
}

export default App 