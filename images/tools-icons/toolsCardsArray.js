const toolsCardsArray = [
  {
    name: 'check-lists',
    title: 'check lists',
    thumb: require('./checklist-card.png'),
    status: true,
    route: 'CheckLists',
    description: 'Conjunto de ferramentas de check list, voltados para as verificações de segurança mais utilizadas no dia a dia de profissionais de segurança do trabalho.'
  },
  {
    name: 'emissor-de-certificado',
    title: 'certificate emissor',
    thumb: require('./certificate-emissor-card.png'),
    status: true,
    route: 'CertificateEmissor',
    description: "Emissores de certificados de participação e aprovação em treinamentos, baseado nas NR's com o nosso tamplate."
  },
  {
    name: 'reporte-sstma',
    title: 'SHE Report',
    thumb: require('./safety-report-card.png'),
    status: false,
  },
  {
    name: 'gestao-de-acidentes',
    title: 'accdients management',
    thumb: require('./accident-card.png'),
    status: false,
  },
  {
    name: 'plano-de-açao',
    title: 'action plan',
    thumb: require('./action-plan-card.png'),
    status: false,
  },
  {
    name: 'brainstorming',
    title: 'brainstorming',
    thumb: require('./brain-storm-card.png'),
    status: false,
  },
  {
    name: 'indicadores-ambientais',
    title: 'environment kpis',
    thumb: require('./environment-kpis-card.png'),
    status: false,
  },
  {
    name: 'gestao-de-epis',
    title: 'PPEs Management',
    thumb: require('./epi-card.png'),
    status: false,
  },
  {
    name: 'estatisticas-sstma',
    title: 'SHE statistics',
    thumb: require('./statistic-card.png'),
    status: false,
  },
  {
    name: 'gestao-de-residuos',
    title: 'Waste management',
    thumb: require('./waste-card.png'),
    status: false,
  },
];

export default toolsCardsArray;
