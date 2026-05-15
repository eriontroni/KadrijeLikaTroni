import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Star } from 'lucide-react'
import { siteData } from '../data/content'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md shadow-black/5' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <Link
            to="hero"
            smooth
            duration={600}
            className="cursor-pointer flex items-center gap-2 group"
          >
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-md shadow-primary/30 group-hover:scale-110 transition-transform">
              <Star className="w-4 h-4 text-white fill-white" />
            </div>
            <span className="text-primary font-black text-lg tracking-widest uppercase">
              Kandidatja
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {siteData.nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth
                duration={600}
                offset={-80}
                className="nav-link cursor-pointer pb-1"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="#" className="btn-outline-red py-2.5 px-6 text-xs">
              Vullnetar
            </a>
            <a href="#" className="btn-primary py-2.5 px-6 text-xs">
              Dhuro
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6 text-dark" /> : <Menu className="w-6 h-6 text-dark" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {siteData.nav.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  smooth
                  duration={600}
                  offset={-80}
                  onClick={() => setMenuOpen(false)}
                  className="cursor-pointer px-4 py-3 rounded-xl hover:bg-gray-50 font-medium text-dark hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex gap-3 mt-4 pt-4 border-t border-gray-100">
                <a href="#" className="btn-outline-red flex-1 justify-center py-2.5 text-xs">
                  Vullnetar
                </a>
                <a href="#" className="btn-primary flex-1 justify-center py-2.5 text-xs">
                  Dhuro
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
