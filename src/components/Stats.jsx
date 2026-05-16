import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import { siteData } from '../data/content'

function StatCard({ stat, index }) {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.4 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
      className="flex-1 min-w-[200px]"
    >
      <div className="relative group h-full">
        {/* Card glow effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-primary-light rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500" />
        <div className="relative bg-dark-2 rounded-2xl px-8 py-10 text-center h-full border border-white/5 group-hover:border-transparent transition-all duration-300">
          <div className="text-5xl md:text-6xl font-black text-white mb-3 font-display">
            {inView ? (
              <>
                <CountUp end={stat.value} duration={2.2} delay={index * 0.1} />
                <span className="text-primary">{stat.suffix}</span>
              </>
            ) : (
              <span>0</span>
            )}
          </div>
          <div className="text-gray-400 font-semibold uppercase tracking-widest text-xs">
            {stat.label}
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-primary rounded-full mt-4 opacity-60" />
        </div>
      </div>
    </motion.div>
  )
}

export default function Stats() {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 })

  return (
    <section id="stats" className="bg-dark-2 pt-6 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-6"
        >
          {siteData.stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
