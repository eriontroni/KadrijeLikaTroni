export const siteData = {
  candidate: {
    name: 'Kandidatja',
    badge: 'KANDIDATJA PËR PARLAMENT 2024',
    slogan: 'Zëri i qytetarëve.\nForca e ndryshimit.',
    subtitle:
      'E përkushtuar për drejtësi, zhvillim dhe një të ardhme më të mirë për të gjithë. Ne ndërtojmë të nesërmen me transparencë dhe guxim.',
  },

  nav: [
    { label: 'Biografia', to: 'biografia' },
    { label: 'Programi', to: 'programi' },
    { label: 'Rrugëtimi', to: 'rrugetimi' },
    { label: 'Aktivitetet', to: 'aktivitetet' },
    { label: 'Prioritetet', to: 'prioritetet' },
    { label: 'Galeria', to: 'galeria' },
  ],

  stats: [
    { value: 15, suffix: '+', label: 'Vite Eksperiencë' },
    { value: 100, suffix: '+', label: 'Aktivitete Publike' },
    { value: 10, suffix: 'K+', label: 'Qytetarë të Takuar' },
  ],

  priorities: [
    {
      id: 1,
      icon: 'GraduationCap',
      title: 'Arsimi dhe Fuqizimi i Rinisë',
      description:
        'Duke u bazuar në përvojën si profesoreshë dhe në punën me të rinjtë, kontribut i drejtpërdrejtë për arsim cilësor dhe mundësi të reja për brezin e ri.',
      color: 'from-red-50 to-rose-50',
    },
    {
      id: 2,
      icon: 'Building2',
      title: 'Qeverisja Lokale dhe Përfaqësimi Qytetar',
      description:
        'Përvojë e drejtpërdrejtë si asambleiste dhe shefe e grupit të asambleistëve – zë i qytetarëve në vendimmarrjen lokale dhe ndërkomunale.',
      color: 'from-red-50 to-orange-50',
    },
    {
      id: 3,
      icon: 'TrendingUp',
      title: 'Fuqizimi Ekonomik dhe Përkrahja e Grave',
      description:
        'Duke u mbështetur në përvojën menaxheriale dhe angazhimin për barazi, punë për mundësi më të mëdha ekonomike dhe sociale për gratë në shoqëri.',
      color: 'from-rose-50 to-pink-50',
    },
  ],

  footer: {
    quickLinks: [
      { label: 'Programi i Plotë', href: '#' },
      { label: 'Politika e Privatësisë', href: '#' },
      { label: 'Kushtet e Përdorimit', href: '#' },
      { label: 'Na Kontaktoni', href: '#' },
    ],
    social: [
      { platform: 'Facebook', icon: 'Facebook', href: '#' },
      { platform: 'Instagram', icon: 'Instagram', href: '#' },
      { platform: 'YouTube', icon: 'Youtube', href: '#' },
    ],
    copyright: '© 2024 Zëri i qytetarëve. Të gjitha të drejtat të rezervuara.',
  },
}
