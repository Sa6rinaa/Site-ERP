import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Header from './Header'
import Hero from './Hero'
import About from './About'
import VideoSection from './VideoSection'
import Features from './Features'
import Testimonials from './Testimonials'
import Contact from './Contact'
import Footer from './Footer'




function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />  
        <Features />
        <VideoSection />
     
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
