import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  GraduationCap,
  Briefcase,
  Star,
  MapPin,
  Calendar,
  Award,
  Users,
  TrendingUp,
  BookOpen,
  Building2,
} from 'lucide-react'

const biographyData = {
  personal: {
    name: 'Kadrije Lika-Troni',
    number: '80',
    born: '13 Dhjetor 1980, Kaçanik',
    location: 'Kovaçec, Komuna e Kaçanikut',
    status: 'E martuar, nënë e dy fëmijëve',
  },
  sections: [
    {
      id: 'arsimi',
      icon: 'GraduationCap',
      color: 'from-red-500 to-rose-600',
      bgLight: 'from-red-50 to-rose-50',
      title: 'Arsimi',
      items: [
        {
          label: 'Shkolla Fillore',
          text: 'Kreu shkollën fillore në qytetin e lindjes, Kaçanik.',
        },
        {
          label: 'Shkolla e Mesme',
          text: 'SHMM "Elena Gjika" në Ferizaj – paralel e ndarë në Kaçanik.',
        },
        {
          label: 'Universiteti',
          text: 'Fakulteti Filologjik, Prishtinë – Gjuhë dhe Letërsi Shqipe. Titull: Profesor i gjuhës dhe letërsisë shqipe.',
        },
      ],
    },
    {
      id: 'karriera',
      icon: 'Briefcase',
      color: 'from-orange-500 to-amber-600',
      bgLight: 'from-orange-50 to-amber-50',
      title: 'Karriera Profesionale',
      items: [
        {
          year: '2005',
          label: 'Mësimdhënëse',
          text: 'SHFMU "Ilaz Thaçi", Han i Elezit – fillimi i karrierës profesionale.',
        },
        {
          year: '2008 – 2015',
          label: 'Bankiere – TEB Sh.A.',
          text: 'U dallua si bankiere e suksesshme me trajnime dhe certifikime të njohura ndërkombëtarisht.',
        },
        {
          year: '2015 – sot',
          label: 'Menaxhere Zyre – TELKOS',
          text: 'Menaxhere e zyrës për Komunën e Kaçanikut në kompaninë TELKOS.',
        },
      ],
    },
    {
      id: 'politika',
      icon: 'Star',
      color: 'from-primary to-red-700',
      bgLight: 'from-red-50 to-rose-50',
      title: 'Angazhimi Politik – LVV',
      items: [
        {
          year: '2017',
          label: 'Anëtare e LVV-së',
          text: 'Filloi angazhimin si anëtare e Lëvizjes VETËVENDOSJE!',
        },
        {
          year: '2017 – 2022',
          label: 'Kryetare e Pikës – Kovaçec',
          text: 'Kryetare e pikës së LVV-së në Kovaçec dhe anëtare e grupit punues në Qendrën e LVV-së, Kaçanik.',
        },
        {
          year: '2022 – sot',
          label: 'Nënkryetare e Qendrës – Kaçanik',
          text: 'Mban pozitën e nënkryetares së Qendrës së LVV-së në Kaçanik.',
        },
      ],
    },
    {
      id: 'sukseset',
      icon: 'Award',
      color: 'from-rose-500 to-pink-600',
      bgLight: 'from-rose-50 to-pink-50',
      title: 'Sukseset Zgjedhore',
      items: [
        {
          year: '2021',
          label: 'Asambleiste – Mandati I',
          text: 'Fitoi mandatin si asambleiste në Kuvendin Komunal të Kaçanikut – kandidatja më e votuar e listës LVV. Anëtare e Komisionit për Politikë dhe Financa.',
        },
        {
          year: '2025',
          label: 'Mandati II – Shefe e Grupit',
          text: 'Sërish kandidatja më e votuar e LVV-së. Shefe e Grupit të Asambleistëve të LVV-së, anëtare e Komisionit për Politikë dhe Financa, dhe delegate në Asociacionin e Komunave – e votuar unanimisht.',
        },
        {
          year: '2025',
          label: 'Gruaja Më e Votuar',
          text: 'Gruaja më e votuar nga të gjitha subjektet politike në Komunën e Kaçanikut.',
        },
      ],
    },
  ],
}

const iconMap = { GraduationCap, Briefcase, Star, Award }

function TimelineItem({ item, index }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex gap-4 group"
    >
      <div className="flex flex-col items-center">
        <div className="w-3 h-3 rounded-full bg-primary mt-1.5 shrink-0 group-hover:scale-125 transition-transform duration-300" />
        <div className="w-0.5 flex-1 bg-gray-200 mt-2 group-last:hidden" />
      </div>
      <div className="pb-6 flex-1">
        {item.year && (
          <span className="inline-block text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full mb-2">
            {item.year}
          </span>
        )}
        <h4 className="font-bold text-dark text-base mb-1">{item.label}</h4>
        <p className="text-gray-500 text-sm leading-relaxed">{item.text}</p>
      </div>
    </motion.div>
  )
}

function BiographySection({ section, index }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const Icon = iconMap[section.icon]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-500"
    >
      <div className="flex items-center gap-4 mb-7">
        <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${section.color} flex items-center justify-center shrink-0`}>
          {Icon && <Icon className="w-6 h-6 text-white" />}
        </div>
        <h3 className="text-xl font-black text-dark font-display">{section.title}</h3>
      </div>
      <div>
        {section.items.map((item, i) => (
          <TimelineItem key={i} item={item} index={i} />
        ))}
      </div>
    </motion.div>
  )
}

export default function Biography() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const { personal } = biographyData

  return (
    <section id="biografia" className="relative py-24 lg:py-32 bg-white overflow-hidden">

      {/* Decorative blobs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14 lg:mb-18"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase px-5 py-2 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
            Rrugëtimi Im
          </div>
          <h2 className="section-title mb-6">
            Bio<span className="text-primary">grafia</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Një rrugëtim i ndërtuar mbi punë, përkushtim dhe shërbim ndaj komunitetit.
          </p>
        </motion.div>

        {/* Personal info card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="bg-gradient-to-br from-primary to-red-700 rounded-3xl p-8 mb-10 text-white shadow-xl shadow-primary/20"
        >
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            {/* Number badge */}
            <div className="shrink-0 w-20 h-20 rounded-2xl bg-white/15 backdrop-blur flex items-center justify-center">
              <span className="text-4xl font-black font-display">{personal.number}</span>
            </div>

            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-black font-display mb-4">{personal.name}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="flex items-center gap-2 bg-white/10 rounded-xl px-4 py-2.5">
                  <Calendar className="w-4 h-4 shrink-0 opacity-80" />
                  <span className="text-sm font-medium">{personal.born}</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 rounded-xl px-4 py-2.5">
                  <MapPin className="w-4 h-4 shrink-0 opacity-80" />
                  <span className="text-sm font-medium">{personal.location}</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 rounded-xl px-4 py-2.5">
                  <Users className="w-4 h-4 shrink-0 opacity-80" />
                  <span className="text-sm font-medium">{personal.status}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Biography sections grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {biographyData.sections.map((section, i) => (
            <BiographySection key={section.id} section={section} index={i} />
          ))}
        </div>

        {/* Achievement highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-10 bg-gradient-to-r from-gray-50 to-red-50 rounded-3xl p-8 border border-red-100 flex flex-col sm:flex-row items-center gap-6"
        >
          <div className="shrink-0 w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/30">
            <TrendingUp className="w-8 h-8 text-white" />
          </div>
          <div>
            <h4 className="text-lg font-black text-dark font-display mb-1">
              Dy mandate radhazi – kandidatja më e votuar e LVV-së
            </h4>
            <p className="text-gray-500 text-sm leading-relaxed">
              Në zgjedhjet lokale 2025, Kadrije Lika-Troni u bë <strong className="text-primary">gruaja më e votuar</strong> nga të gjitha subjektet politike në Komunën e Kaçanikut – dëshmi e besimit të pakushtëzuar të qytetarëve.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
