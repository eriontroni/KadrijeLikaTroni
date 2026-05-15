import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-scroll'
import { ChevronDown, Play, ArrowRight } from 'lucide-react'
import { siteData } from '../data/content'

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1920&q=85&auto=format&fit=crop'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  const { candidate } = siteData

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.18, delayChildren: 0.3 } },
  }

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } },
  }

  return (
    <section id="hero" ref={ref} className="relative min-h-screen flex items-center overflow-hidden">

      {/* Parallax Background */}
      <motion.div style={{ y: imageY }} className="absolute inset-0 scale-110">
        <img
          src={HERO_IMAGE}
          alt="Kandidatja"
          className="w-full h-full object-cover object-top"
          loading="eager"
        />
      </motion.div>

      {/* Layered overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/75 to-dark/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-dark/20" />

      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Content */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32 w-full"
      >
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          {/* Badge */}
          <motion.div variants={item} className="mb-8">
            <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/30 text-white text-xs font-bold tracking-widest uppercase px-5 py-2.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              {candidate.badge}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[1.05] mb-8"
          >
            {candidate.slogan.split('\n').map((line, i) => (
              <span key={i} className="block">
                {i === 1 ? (
                  <span className="relative">
                    {line}
                    <motion.span
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 1.2, duration: 0.8, ease: 'easeOut' }}
                      className="absolute -bottom-2 left-0 right-0 h-1 bg-white/40 origin-left rounded-full"
                    />
                  </span>
                ) : line}
              </span>
            ))}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={item}
            className="text-white/85 text-lg sm:text-xl leading-relaxed mb-12 max-w-2xl font-light"
          >
            {candidate.subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={item} className="flex flex-wrap gap-4">
            <Link to="programi" smooth duration={700} offset={-80} className="cursor-pointer">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-white text-primary font-black px-8 py-4 rounded-full text-sm uppercase tracking-widest shadow-xl shadow-black/20 hover:shadow-2xl hover:shadow-black/30 transition-shadow"
              >
                NJIHUNI ME KANDIDATEN
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>

            <Link to="aktivitetet" smooth duration={700} offset={-80} className="cursor-pointer">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 border-2 border-white text-white font-black px-8 py-4 rounded-full text-sm uppercase tracking-widest hover:bg-white/10 transition-colors"
              >
                <Play className="w-4 h-4 fill-white" />
                SHIKONI AKTIVITETET
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <Link to="stats" smooth duration={600}>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="cursor-pointer flex flex-col items-center gap-1 text-white/60 hover:text-white transition-colors"
          >
            <ChevronDown className="w-7 h-7" />
          </motion.div>
        </Link>
      </motion.div>

      {/* Curved bottom separator */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-16 sm:h-20">
          <path d="M0 80 L0 40 Q360 0 720 40 Q1080 80 1440 40 L1440 80 Z" fill="#111111" />
        </svg>
      </div>
    </section>
  )
}
