import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Facebook, Instagram, Youtube, Star, ArrowUpRight, Heart } from 'lucide-react'
import { Link } from 'react-scroll'
import { siteData } from '../data/content'

const socialIconMap = { Facebook, Instagram, Youtube }

export default function Footer() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const { footer } = siteData

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="bg-dark border-t border-white/5">

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16"
        >

          {/* Column 1 — Brand */}
          <div className="md:col-span-1">
            <button onClick={scrollToTop} className="flex items-center gap-2 mb-6 group">
              <div className="w-9 h-9 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform">
                <Star className="w-4 h-4 text-white fill-white" />
              </div>
              <span className="text-primary font-black text-lg tracking-widest uppercase">
                Kandidatja
              </span>
            </button>

            <p className="text-gray-400 text-sm leading-relaxed mb-8 font-light">
              Zëri i qytetarëve. Forca e ndryshimit.
              <br />
              E përkushtuar ndaj drejtësisë, transparencës dhe ndërtimit të një të ardhmeje më të mirë për çdo qytetar.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              {footer.social.map((s) => {
                const Icon = socialIconMap[s.icon]
                return (
                  <motion.a
                    key={s.platform}
                    href={s.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300"
                    aria-label={s.platform}
                  >
                    {Icon && <Icon className="w-4 h-4 text-gray-400 hover:text-white transition-colors" />}
                  </motion.a>
                )
              })}
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h4 className="text-white font-bold text-xs tracking-[0.2em] uppercase mb-7 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-primary rounded-full" />
              Lidhje të Shpejta
            </h4>
            <ul className="space-y-3">
              {footer.quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors duration-200"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-primary transition-all duration-300" />
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>

            {/* Nav links */}
            <h4 className="text-white font-bold text-xs tracking-[0.2em] uppercase mt-8 mb-5 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-primary rounded-full" />
              Navigimi
            </h4>
            <ul className="space-y-3">
              {siteData.nav.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    smooth
                    duration={600}
                    offset={-80}
                    className="group inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors duration-200 cursor-pointer"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-primary transition-all duration-300" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Na Ndiqni + Newsletter */}
          <div>
            <h4 className="text-white font-bold text-xs tracking-[0.2em] uppercase mb-7 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-primary rounded-full" />
              Na Ndiqni
            </h4>

            <p className="text-gray-500 text-sm mb-6 leading-relaxed">
              Ndiqni aktivitetet dhe lajmet e fundit nga fushata jonë.
            </p>

            <div className="space-y-3 mb-8">
              {footer.social.map((s) => {
                const Icon = socialIconMap[s.icon]
                return (
                  <a
                    key={s.platform}
                    href={s.href}
                    className="flex items-center gap-3 text-gray-400 hover:text-white text-sm transition-colors duration-200 group"
                  >
                    {Icon && (
                      <span className="w-8 h-8 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all">
                        <Icon className="w-3.5 h-3.5" />
                      </span>
                    )}
                    {s.platform}
                  </a>
                )
              })}
            </div>

            {/* Newsletter CTA */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <p className="text-white text-sm font-semibold mb-1">Qëndroni të informuar</p>
              <p className="text-gray-500 text-xs mb-4">Regjistrojuni për lajmet e fundit.</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Email-i juaj"
                  className="flex-1 bg-white/10 border border-white/10 rounded-lg px-3 py-2 text-white text-xs placeholder:text-gray-600 focus:outline-none focus:border-primary transition-colors"
                />
                <button className="bg-primary text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors">
                  Dërgo
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs text-center sm:text-left">
            {footer.copyright}
          </p>
          <p className="text-gray-700 text-xs flex items-center gap-1.5">
            Bërë me <Heart className="w-3 h-3 text-primary fill-primary" /> për Kosovën
          </p>
        </div>
      </div>
    </footer>
  )
}
