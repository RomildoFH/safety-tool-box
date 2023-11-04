const nrArray = [
  {
    name: 'NR 1',
    title: 'DISPOSIÇÕES GERAIS',
    content: '1. Introdução às normas regulamentadoras.\n2. Responsabilidades do empregador e empregado.\n3. Documentação necessária.\n4. Comissão Interna de Prevenção de Acidentes (CIPA).\n5. Organização e planejamento da segurança do trabalho.\n6. Penas e fiscalização.\n7. Disposições finais e transitórias.'
  },
  {
    name: 'NR 2',
    title: 'INSPEÇÃO PRÉVIA',
    content: ''
  },
  { 
    name: 'NR 3', 
    title: 'EMBARGO OU INTERDIÇÃO',
    content: ''
  },
  { 
    name: 'NR 4', 
    title: 'SERVIÇOS ESPECIALIZADOS EM ENGENHARIA DE SEGURANÇA E EM MEDICINA DO TRABALHO',
    content: ''
  },
  { 
    name: 'NR 5', 
    title: 'COMISSÃO INTERNA DE PREVENÇÃO DE ACIDENTES (CIPA)',
    content: `
      a) Estudo do ambiente, das condições de trabalho, bem como dos riscos originados do processo produtivo;\n
      b) Noções sobre acidentes e doenças relacionadas ao trabalho decorrentes das condições de trabalho e da exposição aos riscos existentes no estabelecimento e suas medidas de prevenção;\n
      c) Metodologia de investigação e análise de acidentes e doenças relacionadas ao trabalho;\n
      d) Princípios gerais de higiene do trabalho e de medidas de prevenção dos riscos;\n
      e) Noções sobre as legislações trabalhista e previdenciária relativas à segurança e saúde no trabalho;\n
      f) Noções sobre a inclusão de pessoas com deficiência e reabilitados nos processos de trabalho;\n
      g) Organização da CIPA e outros assuntos necessários ao exercício das atribuições da Comissão; e\n
      h) Prevenção e combate ao assédio sexual e a outras formas de violência no trabalho.`
  },
  { 
    name: 'NR 6', 
    title: 'EQUIPAMENTOS DE PROTEÇÃO INDIVIDUAL (EPI)',
    content: ''
  },
  { 
    name: 'NR 7', 
    title: 'PROGRAMAS DE CONTROLE MÉDICO DE SAÚDE OCUPACIONAL (PCMSO)',
    content: ''
  },
  { 
    name: 'NR 8', 
    title: 'EDIFICAÇÕES',
    content: ''
  },
  { 
    name: 'NR 9', 
    title: 'PROGRAMAS DE PREVENÇÃO DE RISCOS AMBIENTAIS (PPRA)',
    content: ''
  },
  { 
    name: 'NR 10', 
    title: 'SEGURANÇA EM INSTALAÇÕES E SERVIÇOS EM ELETRICIDADE',
    content: ''
  },
  { 
    name: 'NR 11', 
    title: 'TRANSPORTE, MOVIMENTAÇÃO, ARMAZENAGEM E MANUSEIO DE MATERIAIS',
    content: ''
  },
  { 
    name: 'NR 12', 
    title: 'MÁQUINAS E EQUIPAMENTOS',
    content: ''
  },
  { 
    name: 'NR 13', 
    title: 'CALDEIRAS E VASOS DE PRESSÃO',
    content: ''
  },
  { 
    name: 'NR 14', 
    title: 'FORNOS',
    content: ''
  },
  { 
    name: 'NR 15', 
    title: 'ATIVIDADES E OPERAÇÕES INSALUBRES',
    content: ''
  },
  { 
    name: 'NR 16', 
    title: 'ATIVIDADES E OPERAÇÕES PERIGOSAS',
    content: ''
  },
  { 
    name: 'NR 17', 
    title: 'ERGONOMIA',
    content: ''
  },
  { 
    name: 'NR 18', 
    title: 'CONDIÇÕES E MEIO AMBIENTE DE TRABALHO NA INDÚSTRIA DA CONSTRUÇÃO',
    content: ''
  },
  { 
    name: 'NR 19', 
    title: 'EXPLOSIVOS',
    content: ''
  },
  { 
    name: 'NR 20', 
    title: 'SEGURANÇA E SAÚDE NO TRABALHO COM INFLAMÁVEIS E COMBUSTÍVEIS',
    content: ''
  },
  { 
    name: 'NR 21', 
    title: 'TRABALHO A CÉU ABERTO',
    content: ''
  },
  { 
    name: 'NR 22', 
    title: 'SEGURANÇA E SAÚDE OCUPACIONAL NA MINERAÇÃO',
    content: ''
  },
  { 
    name: 'NR 23', 
    title: 'PROTEÇÃO CONTRA INCÊNDIOS',
    content: ''
  },
  { 
    name: 'NR 24', 
    title: 'CONDIÇÕES SANITÁRIAS E DE CONFORTO NOS LOCAIS DE TRABALHO',
    content: ''
  },
  { 
    name: 'NR 25', 
    title: 'RESÍDUOS INDUSTRIAIS',
    content: ''
  },
  { 
    name: 'NR 26', 
    title: 'SINALIZAÇÃO DE SEGURANÇA',
    content: ''
  },
  { 
    name: 'NR 27', 
    title: 'REGISTRO PROFISSIONAL DO TÉCNICO DE SEGURANÇA DO TRABALHO NO MTB',
    content: ''
  },
  { 
    name: 'NR 28', 
    title: 'FISCALIZAÇÃO E PENALIDADES',
    content: ''
  },
  { 
    name: 'NR 29', 
    title: 'NORMA REGULAMENTADORA DE SEGURANÇA E SAÚDE NO TRABALHO PORTUÁRIO',
    content: ''
  },
  { 
    name: 'NR 30', 
    title: 'SEGURANÇA E SAÚDE NO TRABALHO AQUAVIÁRIO',
    content: ''
  },
  { 
    name: 'NR 31', 
    title: 'SEGURANÇA E SAÚDE NO TRABALHO NA AGRICULTURA, PECUÁRIA, SILVICULTURA, EXPLORAÇÃO FLORESTAL E AQUICULTURA',
    content: ''
  },
  { 
    name: 'NR 32', 
    title: 'SEGURANÇA E SAÚDE NO TRABALHO EM SERVIÇOS DE SAÚDE',
    content: ''
  },
  { 
    name: 'NR 33', 
    title: 'SEGURANÇA E SAÚDE NO TRABALHO EM ESPAÇOS CONFINADOS',
    content: ''
  },
  { 
    name: 'NR 34', 
    title: 'CONDIÇÕES E MEIO AMBIENTE DE TRABALHO NA INDÚSTRIA DA CONSTRUÇÃO, REPARAÇÃO E DESMONTE NAVAL',
    content: ''
  },
  { 
    name: 'NR 35', 
    title: 'TRABALHO EM ALTURA',
    content: ''
  },
  { 
    name: 'NR 36', 
    title: 'SEGURANÇA E SAÚDE NO TRABALHO EM EMPRESAS DE ABATE E PROCESSAMENTO DE CARNES E DERIVADOS',
    content: ''
  },
  { 
    name: 'NR 37', 
    title: 'SEGURANÇA E SAÚDE EM PLATAFORMAS DE PETRÓLEO',
    content: ''
  },
  { 
    name: 'NR 38', 
    title: 'SEGURANÇA E SAÚDE NO TRABALHO NAS ATIVIDADES DE LIMPEZA URBANA E MANEJO DE RESÍDUOS SÓLIDOS',
    content: ''
  },
];

export default nrArray;
