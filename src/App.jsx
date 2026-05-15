import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Biography from './components/Biography'
import Priorities from './components/Priorities'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Biography />
        <Priorities />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
