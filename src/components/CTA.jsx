import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Users, Mail, ArrowRight, Sparkles } from 'lucide-react'

export default function CTA() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section className="relative py-24 lg:py-36 bg-dark overflow-hidden">

      {/* Animated gradient orbs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-primary rounded-full blur-[120px]"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-primary-light rounded-full blur-[100px]"
      />

      {/* Grid texture */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(rgba(214,0,28,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(214,0,28,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 border border-primary/40 text-primary text-xs font-bold tracking-widest uppercase px-5 py-2.5 rounded-full mb-10"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Bashkohuni Sot
          </motion.div>

          {/* Headline */}
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-8">
            Bashkohuni në rrugëtimin
            <br />
            <span className="text-primary">tonë për ndryshim.</span>
          </h2>

          <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto mb-14 leading-relaxed font-light">
            Çdo zë ka rëndësi. Çdo kontribut ndërtoi ndryshimin. Bashkohuni me ne dhe bëhuni pjesë e
            lëvizjes për një Kosovë më të drejtë.
          </p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-5 justify-center"
          >
            <motion.a
              href="#"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-3 bg-primary text-white font-black px-10 py-4.5 py-[18px] rounded-full text-sm uppercase tracking-widest shadow-2xl shadow-primary/40 hover:bg-primary-dark transition-colors"
            >
              <Users className="w-4 h-4" />
              BËHU VULLNETAR
            </motion.a>

            <motion.a
              href="#"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-3 border-2 border-white/30 text-white font-black px-10 py-[18px] rounded-full text-sm uppercase tracking-widest hover:border-white hover:bg-white/5 transition-all"
            >
              <Mail className="w-4 h-4" />
              NA KONTAKTONI
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
