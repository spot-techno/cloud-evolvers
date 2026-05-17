import type {
  CurrentLevel,
  FundamentalsStance,
  WeeklyHours,
  FocusDepth,
} from '@/data/tools/microsoft-cert-paths';

export const LEVEL_OPTIONS: { id: CurrentLevel; label: string; sub: string }[] = [
  { id: 'none', label: 'None', sub: 'Starting from scratch.' },
  { id: 'fundamentals-only', label: 'Fundamentals only', sub: 'AZ-900, MS-900, AI-900, or DP-900.' },
  { id: 'one-associate', label: 'One associate-level cert', sub: 'AZ-104, AZ-204, AZ-500, MS-102, etc.' },
  { id: 'multi-associate', label: 'Multiple associate certs', sub: 'Two or more at the AZ-1xx, AZ-5xx tier.' },
  { id: 'expert', label: 'Already at expert level', sub: 'AZ-305, AZ-400, or SC-100 done.' },
];

export const STANCE_OPTIONS: { id: FundamentalsStance; label: string; sub: string }[] = [
  { id: 'take-first', label: 'Take AZ-900 first', sub: 'Recommended for newcomers, ~30 hours of prep.' },
  { id: 'skip', label: 'Skip fundamentals', sub: 'You already have IT background to lean on.' },
];

export const HOURS_OPTIONS: { id: WeeklyHours; label: string; sub: string }[] = [
  { id: 5, label: '5 hours / week', sub: 'Slow lane. Evenings and weekends only.' },
  { id: 10, label: '10 hours / week', sub: 'Steady. The realistic full-time-employed pace.' },
  { id: 20, label: '20+ hours / week', sub: 'Fast lane. Bootcamp or sabbatical pace.' },
];

export const FOCUS_OPTIONS: { id: FocusDepth; label: string; sub: string }[] = [
  { id: 'breadth', label: 'Breadth', sub: 'Spread across several certs and domains.' },
  { id: 'depth', label: 'Depth', sub: 'Master one role ladder all the way through.' },
];

export const FAQ: { q: string; a: string }[] = [
  {
    q: 'Should I always take AZ-900 first?',
    a: 'No. AZ-900 is the recommended starting point if you have little or no Azure background. If you already work with Azure daily or you come from another cloud, the fundamentals exam is mostly review. Skip it and head straight to the associate exam for your role. The fundamentals certs never expire, but they also do not count toward most job requirements.',
  },
  {
    q: 'Is the cert path the same as the role I need?',
    a: 'A cert path is a study plan, the role is the job. Recruiters care about real work experience first, certs second. Use the path to structure learning and to signal effort. Pair every cert with hands-on lab work in your own subscription so you can answer scenario questions in interviews.',
  },
  {
    q: 'Why do you not show MTA or older certs?',
    a: 'Microsoft retired the MTA program in 2022 and the older MCSA / MCSE tracks before that. The current role-based ladder (Fundamentals, Associate, Expert) is the only one Microsoft is investing in. We only list exams that are live and renewable today.',
  },
  {
    q: 'How do you estimate prep hours?',
    a: 'Hours come from Microsoft Learn time estimates and from observed candidate behavior across courses we run. Fundamentals land around 30 hours. Associate exams sit in the 90 to 130 hour range. Expert exams typically need 130 to 160 hours of focused prep, more if you skip the associate underneath. Your real number depends on prior experience and study quality.',
  },
];
