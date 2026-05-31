// Hand-written content for the eight highest-demand certification courses.
// Rendered as extra sections on the training detail page when slug matches.

export interface BespokeCallout {
  label: string;
  body: string;
}

export interface BespokeWeekItem {
  label: string;
  focus: string;
}

export interface BespokeCourse {
  practitionerAngle: string;
  whoPasses: string[];
  whoStruggles: string[];
  sampleWeek: BespokeWeekItem[];
  commonMistakes: string[];
  jobsThisUnlocks: string[];
  callout?: BespokeCallout;
}

export const BESPOKE_COURSES: Record<string, BespokeCourse> = {
  'azure-administrator': {
    practitionerAngle:
      "AZ-104 is the single most useful Azure exam to hold. Every other role exam, AZ-204, AZ-305, AZ-500, builds on the operations vocabulary it tests. We teach it the way a working administrator actually uses it: Resource Manager, Entra ID, networking, storage, compute, governance, and recovery, in that order.",
    whoPasses: [
      'Engineers who already manage servers, networks, or identities on prem.',
      'AZ-900 holders ready for a deeper, hands-on second pass.',
      'Cloud engineers from AWS or GCP mapping their model to Azure.',
    ],
    whoStruggles: [
      'Total beginners with no infrastructure background. Start at AZ-900 first.',
      'Engineers who skip the labs. The exam is scenario based, not memorisation.',
    ],
    sampleWeek: [
      { label: 'Day 1', focus: 'Subscriptions, management groups, RBAC, Entra ID basics.' },
      { label: 'Day 2', focus: 'Virtual networks, peering, NSGs, public and private endpoints.' },
      { label: 'Day 3', focus: 'Storage accounts, blob lifecycle, file shares, replication.' },
      { label: 'Day 4', focus: 'Compute: VMs, scale sets, App Service, container basics.' },
      { label: 'Day 5', focus: 'Monitoring, backup, governance, exam-style scenarios.' },
    ],
    commonMistakes: [
      'Treating the lab portal as the production portal. We work in a real tenant.',
      'Skipping Azure Policy. It carries weight on the exam and in real audits.',
      'Memorising CLI flags instead of understanding what each resource type is for.',
    ],
    jobsThisUnlocks: [
      'Azure Administrator',
      'Cloud Operations Engineer',
      'Platform Engineer (Microsoft stack)',
      'Junior Cloud Architect',
    ],
    callout: {
      label: 'Pass rate signal',
      body: 'Engineers who do every lab and one full timed mock pass the first attempt. Engineers who skip labs do not. There is no third path.',
    },
  },
  'azure-developer': {
    practitionerAngle:
      "AZ-204 is the exam that proves you can ship on Azure, not just configure it. App Service, Functions, Cosmos DB, storage SDKs, messaging, Key Vault, monitoring. We code through every domain against a live tenant, not slides.",
    whoPasses: [
      'Developers with 1 to 3 years of.NET, Python, or Node experience.',
      'Backend engineers moving from a different cloud or from on prem.',
      'AZ-104 holders ready to add code to their toolkit.',
    ],
    whoStruggles: [
      'People without working code experience. The exam has no language-agnostic path.',
      'Engineers who only read docs and never write the SDK call.',
    ],
    sampleWeek: [
      { label: 'Day 1', focus: 'App Service, deployment slots, configuration, scaling.' },
      { label: 'Day 2', focus: 'Functions, triggers, bindings, Durable Functions patterns.' },
      { label: 'Day 3', focus: 'Cosmos DB, partitioning, consistency, change feed.' },
      { label: 'Day 4', focus: 'Service Bus, Event Grid, messaging patterns, Key Vault, managed identity.' },
      { label: 'Day 5', focus: 'Application Insights, monitoring, security, exam scenarios.' },
    ],
    commonMistakes: [
      'Using account keys instead of managed identity. Both work, only one passes.',
      'Skipping Durable Functions. It is a high-weight topic.',
      'Treating consistency levels as a footnote. The scenario questions live there.',
    ],
    jobsThisUnlocks: [
      'Azure Developer',
      'Cloud Software Engineer',
      'Backend Engineer (Microsoft stack)',
      'Integration Engineer',
    ],
  },
  'azure-solutions-architect': {
    practitionerAngle:
      "AZ-305 is a design exam, not a configuration exam. The questions test whether you can pick the right service combination for a given constraint. We teach the patterns that show up across landing zones, identity, data platform, and continuity, then drill case studies.",
    whoPasses: [
      'AZ-104 plus AZ-204 holders, or equivalent operations and development experience.',
      'Engineers leading multi-team projects and writing Azure design documents.',
      'Lead engineers preparing for staff or principal roles.',
    ],
    whoStruggles: [
      'Engineers who only know one Azure domain deeply. Architecture rewards breadth.',
      'Anyone trying to take it without prior hands-on Azure delivery experience.',
    ],
    sampleWeek: [
      { label: 'Day 1', focus: 'Landing zones, governance, subscription design, identity foundations.' },
      { label: 'Day 2', focus: 'Networking topologies, hub and spoke, private DNS, hybrid options.' },
      { label: 'Day 3', focus: 'Data platform, SQL options, Cosmos DB, integration patterns.' },
      { label: 'Day 4', focus: 'Application platforms, AKS vs App Service vs Container Apps, messaging.' },
      { label: 'Day 5', focus: 'Business continuity, cost design, full case study walk-throughs.' },
    ],
    commonMistakes: [
      'Picking services you like instead of services that fit the constraint.',
      'Ignoring cost as a design lever. Architecture decisions are economic decisions.',
      'Walking in cold without doing at least two full case studies under time pressure.',
    ],
    jobsThisUnlocks: [
      'Azure Solutions Architect',
      'Senior Cloud Architect',
      'Cloud Platform Lead',
      'Principal Engineer (Microsoft stack)',
    ],
    callout: {
      label: 'Honest expectation',
      body: 'AZ-305 fails more first-time takers than any other associate-or-higher Azure exam. Plan for one practice exam, one debrief, then the real attempt.',
    },
  },
  'azure-security-engineer': {
    practitionerAngle:
      "AZ-500 is the gate every Microsoft Cloud security role lives behind. Entra ID, Defender for Cloud, Key Vault, network security, governance, incident response. We work from a hardened reference tenant and walk through the attack and defence loop on each domain.",
    whoPasses: [
      'AZ-104 holders with at least six months on the platform.',
      'Security engineers from on-prem or AWS environments moving to Microsoft Cloud.',
      'SOC analysts moving into security engineering roles.',
    ],
    whoStruggles: [
      'Engineers without baseline networking and identity knowledge.',
      'Anyone hoping to memorise. Every domain is scenario based.',
    ],
    sampleWeek: [
      { label: 'Day 1', focus: 'Entra ID, Conditional Access, PIM, identity protection.' },
      { label: 'Day 2', focus: 'Network security, firewalls, NSGs, private endpoints, DDoS.' },
      { label: 'Day 3', focus: 'Compute and data protection, Key Vault, encryption, secrets management.' },
      { label: 'Day 4', focus: 'Defender for Cloud, security posture, regulatory compliance, governance.' },
      { label: 'Day 5', focus: 'Incident response, Sentinel basics, exam scenarios.' },
    ],
    commonMistakes: [
      'Ignoring Conditional Access nuance. It appears in every other question.',
      'Confusing Defender for Cloud and Defender for Endpoint scopes.',
      'Treating Key Vault as plumbing instead of a security boundary.',
    ],
    jobsThisUnlocks: [
      'Azure Security Engineer',
      'Cloud Security Engineer',
      'Microsoft Security Operations',
      'Identity Engineer',
    ],
  },
  'azure-ai-engineer': {
    practitionerAngle:
      "AI-102 covers what you actually need to build production AI on Azure: Azure OpenAI, Cognitive Services, Search, content safety, and agent patterns. We build a working RAG application across the week, then map every exam domain back to its component.",
    whoPasses: [
      'Developers with Python or.NET experience who already ship APIs.',
      'AZ-204 holders adding AI to their backend toolkit.',
      'Data engineers who want to package models behind a usable API.',
    ],
    whoStruggles: [
      'Engineers without coding experience. The exam expects API and SDK fluency.',
      'Anyone confusing the cert with general-purpose machine learning theory.',
    ],
    sampleWeek: [
      { label: 'Day 1', focus: 'Cognitive Services foundations, language, vision, speech APIs.' },
      { label: 'Day 2', focus: 'Azure OpenAI: deployments, prompt engineering, content filtering.' },
      { label: 'Day 3', focus: 'Azure AI Search, embeddings, vector retrieval, hybrid search.' },
      { label: 'Day 4', focus: 'Building a full RAG application end to end with monitoring.' },
      { label: 'Day 5', focus: 'Responsible AI, security, agentic patterns, exam scenarios.' },
    ],
    commonMistakes: [
      'Treating Azure OpenAI as the whole product. It is one piece of a larger pattern.',
      'Skipping responsible AI and content safety. They carry weight on the exam.',
      'Building demos that work but cost too much. We cover token economics explicitly.',
    ],
    jobsThisUnlocks: [
      'Azure AI Engineer',
      'AI Application Engineer',
      'Senior Backend Engineer (AI focus)',
      'Machine Learning Engineer (productionisation)',
    ],
  },
  'azure-devops-engineer': {
    practitionerAngle:
      "AZ-400 is the exam that bridges development, operations, and security. Source control, pipelines, infrastructure as code, monitoring, secure delivery. We run real Azure DevOps and GitHub Actions pipelines for the whole week.",
    whoPasses: [
      'Engineers holding either AZ-104 or AZ-204, with active CI/CD experience.',
      'Platform engineers running developer experience and tooling.',
      'Senior developers moving into staff or platform lead roles.',
    ],
    whoStruggles: [
      'Engineers without working pipeline experience. The exam expects YAML fluency.',
      'Anyone unfamiliar with both Bicep and Terraform. We cover both.',
    ],
    sampleWeek: [
      { label: 'Day 1', focus: 'Source control strategy, branching, Azure Repos and GitHub.' },
      { label: 'Day 2', focus: 'Pipelines, build agents, multi-stage YAML, templates, secrets.' },
      { label: 'Day 3', focus: 'Infrastructure as code: Bicep and Terraform side by side.' },
      { label: 'Day 4', focus: 'Release strategies, feature flags, observability, dashboards.' },
      { label: 'Day 5', focus: 'DevSecOps, supply chain, dependency scanning, exam scenarios.' },
    ],
    commonMistakes: [
      'Treating pipelines as build scripts. The exam tests release strategy and approvals.',
      'Skipping environments and approval gates. They appear in case studies.',
      'Ignoring supply chain security. It is a fast-growing exam domain.',
    ],
    jobsThisUnlocks: [
      'DevOps Engineer',
      'Platform Engineer',
      'Site Reliability Engineer',
      'Release Engineer',
    ],
  },
  'microsoft-365-administrator': {
    practitionerAngle:
      "MS-102 is the Microsoft 365 platform exam. Tenant configuration, Entra ID, Intune, security and compliance. It is the exam that signals you can run M365 for a real organisation, not just click around an admin centre.",
    whoPasses: [
      'IT administrators with daily Microsoft 365 admin centre experience.',
      'Engineers responsible for Entra ID, Intune, or Exchange Online operations.',
      'Consultants leading M365 rollouts at small to mid-size companies.',
    ],
    whoStruggles: [
      'People with no M365 tenant ownership experience.',
      'Engineers who skip the Intune labs. Device management is heavily tested.',
    ],
    sampleWeek: [
      { label: 'Day 1', focus: 'Tenant setup, domains, licensing, Entra ID identity sync.' },
      { label: 'Day 2', focus: 'User and group management, role assignment, PIM.' },
      { label: 'Day 3', focus: 'Intune: device enrolment, compliance, configuration profiles.' },
      { label: 'Day 4', focus: 'Security: Defender for Office 365, Defender for Endpoint, conditional access.' },
      { label: 'Day 5', focus: 'Compliance, data loss prevention, retention, exam scenarios.' },
    ],
    commonMistakes: [
      'Treating MS-102 as a soft exam. It now covers Intune and Defender depth.',
      'Skipping conditional access. It anchors most security questions.',
      'Memorising portal paths instead of understanding the policy model.',
    ],
    jobsThisUnlocks: [
      'Microsoft 365 Administrator',
      'Endpoint Engineer',
      'Identity and Access Administrator',
      'Modern Workplace Consultant',
    ],
  },
  'security-operations-analyst': {
    practitionerAngle:
      "SC-200 is the SOC analyst exam. Microsoft Sentinel, Defender XDR, threat hunting, incident response, KQL. We work in a Sentinel workspace seeded with real attack signal, write queries, and run the investigation loop.",
    whoPasses: [
      'Analysts with prior SIEM experience on any platform.',
      'AZ-500 holders moving into operational security roles.',
      'Engineers running incident response in a Microsoft stack.',
    ],
    whoStruggles: [
      'People with no SOC or detection engineering background.',
      'Engineers uncomfortable writing queries. KQL is unavoidable here.',
    ],
    sampleWeek: [
      { label: 'Day 1', focus: 'Defender XDR portal, alerts, incidents, automated response.' },
      { label: 'Day 2', focus: 'Microsoft Sentinel: data connectors, workbooks, content hubs.' },
      { label: 'Day 3', focus: 'KQL for hunting, parsing, joins, time series, watchlists.' },
      { label: 'Day 4', focus: 'Analytics rules, playbooks, SOAR integrations, incident handling.' },
      { label: 'Day 5', focus: 'Threat hunting, MITRE ATT&CK mapping, exam scenarios.' },
    ],
    commonMistakes: [
      'Skipping KQL practice. Every domain assumes you can write a query.',
      'Treating Sentinel and Defender XDR as one product. The exam separates them.',
      'Ignoring playbooks. SOAR pieces carry weight on the exam.',
    ],
    jobsThisUnlocks: [
      'SOC Analyst (Tier 2 and above)',
      'Detection Engineer',
      'Threat Hunter',
      'Microsoft Sentinel Engineer',
    ],
  },
};

export function getBespokeCourse(slug: string): BespokeCourse | null {
  return BESPOKE_COURSES[slug] ?? null;
}
