export interface CertTrackStep {
  slug: string;
  role: 'foundation' | 'associate' | 'expert' | 'specialty';
}

export interface CertTrack {
  slug: string;
  title: string;
  audience: string;
  outcome: string;
  jobTitles: string[];
  steps: CertTrackStep[];
  metaDescription: string;
}

export const CERT_TRACKS: CertTrack[] = [
  {
    slug: 'azure-administrator',
    title: 'Azure Administrator',
    audience: 'IT professionals managing Azure subscriptions, identity, storage, and networking day to day.',
    outcome: 'You can run a production Azure tenant, harden it against the most common attacks, and pass AZ-104 + AZ-500.',
    jobTitles: ['Cloud Administrator', 'Azure Operations Engineer', 'Systems Administrator'],
    steps: [
      { slug: 'azure-fundamentals', role: 'foundation' },
      { slug: 'azure-administrator', role: 'associate' },
      { slug: 'azure-security-engineer', role: 'associate' },
    ],
    metaDescription: 'Azure Administrator certification track. AZ-900, AZ-104, AZ-500. Run, secure, and operate Azure in production.',
  },
  {
    slug: 'azure-developer',
    title: 'Azure Developer',
    audience: 'Software engineers shipping cloud-native apps on Azure App Service, Functions, Containers, and Cosmos DB.',
    outcome: 'You can design, build, deploy, and monitor production workloads end to end and pass AZ-204 + AZ-400.',
    jobTitles: ['Cloud Developer', 'Backend Engineer', 'Platform Engineer'],
    steps: [
      { slug: 'azure-fundamentals', role: 'foundation' },
      { slug: 'azure-developer', role: 'associate' },
      { slug: 'azure-devops-engineer', role: 'expert' },
    ],
    metaDescription: 'Azure Developer certification track. AZ-900, AZ-204, AZ-400. Build, deploy, and operate cloud-native Azure apps.',
  },
  {
    slug: 'azure-solutions-architect',
    title: 'Azure Solutions Architect',
    audience: 'Architects designing enterprise Azure landing zones, hybrid networks, and resilient multi-region workloads.',
    outcome: 'You can lead Azure design reviews, justify trade-offs to stakeholders, and pass AZ-305 + AZ-700.',
    jobTitles: ['Cloud Architect', 'Solutions Architect', 'Principal Engineer'],
    steps: [
      { slug: 'azure-administrator', role: 'associate' },
      { slug: 'azure-solutions-architect', role: 'expert' },
      { slug: 'azure-network-engineer', role: 'associate' },
    ],
    metaDescription: 'Azure Solutions Architect track. AZ-104, AZ-305, AZ-700. Design landing zones, hybrid networks, resilient workloads.',
  },
  {
    slug: 'azure-ai-engineer',
    title: 'Azure AI Engineer',
    audience: 'Engineers building production AI features with Azure OpenAI, AI Foundry, and the Microsoft Agent Framework.',
    outcome: 'You can ship grounded generative AI apps, run MLOps on Azure, and pass AI-102 + AI-300.',
    jobTitles: ['AI Engineer', 'Machine Learning Engineer', 'GenAI Developer'],
    steps: [
      { slug: 'azure-ai-fundamentals', role: 'foundation' },
      { slug: 'azure-ai-engineer', role: 'associate' },
      { slug: 'mlops-engineer', role: 'associate' },
    ],
    metaDescription: 'Azure AI Engineer track. AI-900, AI-102, AI-300. Ship production GenAI and MLOps on Azure.',
  },
  {
    slug: 'microsoft-security',
    title: 'Microsoft Security',
    audience: 'Defenders building zero-trust controls across Azure, Entra ID, Defender XDR, and Purview.',
    outcome: 'You can architect a Microsoft-native security program and pass SC-900, AZ-500, and SC-100.',
    jobTitles: ['Security Engineer', 'Security Architect', 'SOC Lead'],
    steps: [
      { slug: 'security-compliance-identity-fundamentals', role: 'foundation' },
      { slug: 'azure-security-engineer', role: 'associate' },
      { slug: 'cybersecurity-architect', role: 'expert' },
    ],
    metaDescription: 'Microsoft Security track. SC-900, AZ-500, SC-100. Build a zero-trust program on Azure, Entra, Defender, and Purview.',
  },
  {
    slug: 'microsoft-365',
    title: 'Microsoft 365 Administrator',
    audience: 'M365 admins running Exchange, Teams, Intune, and Entra ID across a hybrid workforce.',
    outcome: 'You can administer a Microsoft 365 tenant in production and pass MS-102 + MS-700.',
    jobTitles: ['Microsoft 365 Administrator', 'Modern Workplace Engineer', 'Collaboration Specialist'],
    steps: [
      { slug: 'microsoft-365-fundamentals', role: 'foundation' },
      { slug: 'microsoft-365-administrator', role: 'associate' },
      { slug: 'teams-advanced-administration', role: 'associate' },
    ],
    metaDescription: 'Microsoft 365 Administrator track. MS-900, MS-102, MS-700. Run a production M365 tenant across Exchange, Teams, and Intune.',
  },
];

export function getTrackBySlug(slug: string): CertTrack | undefined {
  return CERT_TRACKS.find((t) => t.slug === slug);
}
