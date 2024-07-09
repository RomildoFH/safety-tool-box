const certificateToolsCard = [
  {
    name: 'certificado-individual',
    title: 'check lists',
    thumb: require('./individual-certificate-card.png').toString(),
    status: true,
    route: 'IndividualCertificate',
    description: 'Emissor de certificados de trinamentos de segurança do trabalho conforme NR 01 do '
  },
  {
    name: 'certificado-de-lista',
    title: 'certificate emissor',
    thumb: require('./list-certificate-card.png').toString(),
    status: true,
    route: 'CertificateEmissor',
    description: "Emissores de certificados de participação e aprovação em treinamentos, baseado nas NR's com o nosso tamplate."
  },
  {
    name: 'certificado-de-reconhecimento',
    title: 'SHE Report',
    thumb: require('./premium-certificate-card.png').toString(),
    status: false,
  },
];

export default certificateToolsCard;
