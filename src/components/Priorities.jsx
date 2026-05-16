import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GraduationCap, Building2, TrendingUp, ArrowRight } from 'lucide-react'
import { siteData } from '../data/content'

const iconMap = { GraduationCap, Building2, TrendingUp }

function PriorityCard({ priority, index }) {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 })
  const Icon = iconMap[priority.icon]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group"
    >
      <div className="relative h-full bg-white rounded-3xl p-8 border border-gray-100
                      shadow-sm hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2
                      transition-all duration-500 overflow-hidden cursor-default">

        {/* Background gradient on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

        {/* Number watermark */}
        <div className="absolute top-4 right-6 text-8xl font-black text-gray-50 select-none transition-colors duration-500 group-hover:text-primary/5">
          {String(index + 1).padStart(2, '0')}
        </div>

        {/* Icon */}
        <div className="relative mb-6">
          <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center
                          group-hover:bg-primary group-hover:scale-110 transition-all duration-400">
            {Icon && (
              <Icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-400" />
            )}
          </div>
        </div>

        {/* Content */}
        <div className="relative">
          <h3 className="text-2xl font-black text-dark mb-4 font-display group-hover:text-primary transition-colors duration-300">
            {priority.title}
          </h3>
          <p className="text-gray-500 leading-relaxed text-base">
            {priority.description}
          </p>

          {/* Learn more arrow */}
          <div className="mt-6 flex items-center gap-2 text-primary text-sm font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            <span>Mëso më shumë</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary-light scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 rounded-b-3xl" />
      </div>
    </motion.div>
  )
}

export default function Priorities() {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 })

  return (
    <section id="prioritetet" className="relative py-24 lg:py-32 bg-gray-light overflow-hidden">

      {/* Dot pattern background */}
      <div className="absolute inset-0 dot-pattern opacity-60" />

      {/* Decorative blob */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase px-5 py-2 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
            Programi Ynë
          </div>
          <h2 className="section-title mb-6">
            Prioritetet <span className="text-primary">Kryesore</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Shtyllat e programit tonë për një shoqëri të drejtë dhe një ekonomi të fortë.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteData.priorities.map((priority, i) => (
            <PriorityCard key={priority.id} priority={priority} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-14"
        >
          <a href="#" className="btn-outline-red">
            Shiko Programin e Plotë
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
