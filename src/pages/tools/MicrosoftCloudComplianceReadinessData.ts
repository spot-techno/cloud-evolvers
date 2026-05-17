export type AnswerValue = 'yes' | 'partial' | 'no';
export type Pillar = 'Identity' | 'Cloud' | 'Data' | 'Operations';

export interface Checkpoint {
  id: string;
  pillar: Pillar;
  label: string;
  detail: string;
  frameworks: string[];
  fix: string;
}

export type Answers = Record<string, AnswerValue>;

export type ReviewLeadForm = {
  name: string;
  email: string;
  company: string;
};

export type QuickLeadForm = {
  email: string;
  company: string;
};

export const CHECKPOINTS: Checkpoint[] = [
  {
    id: 'entra-mfa',
    pillar: 'Identity',
    label: 'MFA and Conditional Access are enforced for admins and risky sign-ins.',
    detail: 'Maps to NIST PR.AA, CIS Control 6, and DORA access control expectations.',
    frameworks: ['NIST', 'CIS', 'DORA'],
    fix: 'Tighten Entra Conditional Access, break-glass accounts, and admin sign-in monitoring.',
  },
  {
    id: 'privileged-access',
    pillar: 'Identity',
    label: 'Privileged roles use PIM, approval, expiration, and review cycles.',
    detail: 'Important for Entra ID, Azure RBAC, Microsoft 365 admin roles, and audit evidence.',
    frameworks: ['NIST', 'CIS', 'DORA'],
    fix: 'Enable PIM for high-impact roles and schedule monthly access reviews.',
  },
  {
    id: 'secure-score',
    pillar: 'Cloud',
    label: 'Microsoft Secure Score and Defender for Cloud recommendations are triaged.',
    detail: 'Good first signal for Azure and Microsoft 365 hardening work.',
    frameworks: ['CIS', 'NIST'],
    fix: 'Pick the top ten Secure Score and Defender recommendations by blast radius.',
  },
  {
    id: 'benchmarks',
    pillar: 'Cloud',
    label: 'Azure subscriptions are checked against CIS benchmark-style controls.',
    detail: 'Covers identity, logging, encryption, network exposure, and resource hygiene.',
    frameworks: ['CIS', 'NIST'],
    fix: 'Run an Azure posture review and turn the findings into one sprint backlog.',
  },
  {
    id: 'purview',
    pillar: 'Data',
    label: 'Purview labels, retention, DLP, and sensitive data locations are known.',
    detail: 'Needed when compliance owners ask where critical data lives and who can share it.',
    frameworks: ['NIST', 'DORA'],
    fix: 'Map the top data classes, then implement labels, retention, and DLP for those flows.',
  },
  {
    id: 'backups',
    pillar: 'Data',
    label: 'Backups, recovery points, and restore tests exist for critical systems.',
    detail: 'DORA operational resilience depends on tested recovery and recorded backup evidence.',
    frameworks: ['DORA', 'NIST'],
    fix: 'Run restore tests for the top systems and record evidence for each test.',
  },
  {
    id: 'sentinel',
    pillar: 'Operations',
    label: 'Security logs land in Sentinel or Log Analytics with useful alert rules.',
    detail: 'Evidence requires identity, endpoint, cloud, and audit logs to be retained and searchable.',
    frameworks: ['NIST', 'CIS', 'DORA'],
    fix: 'Connect Entra, Defender, Azure Activity, and Microsoft 365 audit logs first.',
  },
  {
    id: 'incident-process',
    pillar: 'Operations',
    label: 'Incident response roles, escalation paths, and timelines are written down.',
    detail: 'DORA and NIS2 style readiness needs operational proof alongside technical controls.',
    frameworks: ['DORA', 'NIS2', 'NIST'],
    fix: 'Write the escalation path and run a short tabletop exercise with the IT owner.',
  },
  {
    id: 'third-parties',
    pillar: 'Operations',
    label: 'Critical ICT suppliers and SaaS dependencies are inventoried.',
    detail: 'Useful for DORA ICT third-party risk and Microsoft cloud dependency discussions.',
    frameworks: ['DORA', 'NIS2'],
    fix: 'Create a supplier register with owner, contract, data type, and fallback path.',
  },
];

export const ANSWER_POINTS: Record<AnswerValue, number> = {
  yes: 2,
  partial: 1,
  no: 0,
};

export const ANSWER_LABELS: Record<AnswerValue, string> = {
  yes: 'Yes',
  partial: 'Partly',
  no: 'Not yet',
};

export const PILLARS: Pillar[] = ['Identity', 'Cloud', 'Data', 'Operations'];

export function initialAnswers(): Answers {
  return CHECKPOINTS.reduce<Answers>((acc, item) => {
    acc[item.id] = 'partial';
    return acc;
  }, {});
}

export function scoreAnswers(answers: Answers) {
  const possible = CHECKPOINTS.length * 2;
  const points = CHECKPOINTS.reduce((sum, item) => sum + ANSWER_POINTS[answers[item.id]], 0);
  const percent = Math.round((points / possible) * 100);
  return { points, possible, percent };
}

export function getBand(percent: number) {
  if (percent >= 78) {
    return {
      label: 'Ready for evidence work',
      tone: 'text-emerald-700',
      summary:
        'The basics look strong. The next useful move is collecting evidence, closing exceptions, and deciding what must be proved for auditors or management.',
    };
  }
  if (percent >= 50) {
    return {
      label: 'Good base, uneven proof',
      tone: 'text-amber-700',
      summary:
        'You probably have several controls in place, but the story is not yet tight enough for DORA, NIS2, NIST, or CIS discussions.',
    };
  }
  return {
    label: 'High-priority remediation',
    tone: 'text-red-700',
    summary:
      'Start with identity, logging, backups, and the critical supplier list. Those basics unblock the rest of the readiness work.',
  };
}

export function topFixes(answers: Answers) {
  return CHECKPOINTS
    .filter((item) => answers[item.id] !== 'yes')
    .sort((a, b) => ANSWER_POINTS[answers[a.id]] - ANSWER_POINTS[answers[b.id]])
    .slice(0, 4);
}

export function buildReport(percent: number, band: string, fixes: Checkpoint[], answers: Answers) {
  const lines = [
    'Microsoft cloud compliance readiness scan',
    `Score: ${percent}%`,
    `Band: ${band}`,
    '',
    'Top fixes:',
    ...fixes.map((item, index) => `${index + 1}. ${item.fix}`),
    '',
    'Answers:',
    ...CHECKPOINTS.map((item) => `- ${item.label} ${ANSWER_LABELS[answers[item.id]]}`),
  ];
  return lines.join('\n');
}
