import React from 'react';
import { ArrowRight, Calendar, ChartBar, Target, GraduationCap, UsersThree, FileText } from '@phosphor-icons/react';
import { SEO } from '@/components/SEO';
import { Wrap, Eyebrow, Display, Lede, EdButton } from '@/components/editorial';
import { BackgroundIcons } from '@/components/BackgroundIcons';

interface PhaseItem {
  number: string;
  title: string;
  weeks: string;
  body: string;
}

const PHASES: PhaseItem[] = [
  {
    number: '01',
    title: 'Baseline and plan',
    weeks: 'Week 0',
    body: 'Skill assessment per engineer, mapped against the certifications the team needs. We agree on a target shape: which roles, which exams, which deadlines.',
  },
  {
    number: '02',
    title: 'Foundation cohort',
    weeks: 'Weeks 1 to 4',
    body: 'Everyone goes through the foundation course together. Same vocabulary, same baseline. Foundation exam booked at the end of the block.',
  },
  {
    number: '03',
    title: 'Role split',
    weeks: 'Weeks 5 to 10',
    body: 'Team splits into role tracks: admin, developer, security, AI. Each track runs its associate course with role-specific labs against your tenant.',
  },
  {
    number: '04',
    title: 'Specialise and certify',
    weeks: 'Weeks 11 to 16',
    body: 'Expert or specialty courses for engineers who need them. Final exam window. Readiness report goes to the engineering lead.',
  },
];

interface OutcomeItem {
  icon: React.ComponentType<{ size?: number; weight?: 'bold' | 'regular' }>;
  title: string;
  body: string;
}

const OUTCOMES: OutcomeItem[] = [
  {
    icon: GraduationCap,
    title: 'Certified team, not certified individuals',
    body: 'The whole team passes together. No single point of failure when one engineer leaves.',
  },
  {
    icon: ChartBar,
    title: 'Reporting the manager actually uses',
    body: 'Per-engineer readiness, exam pass rates, time-to-cert. One dashboard, updated after each block.',
  },
  {
    icon: Target,
    title: 'Tied to real work',
    body: 'Each block ships something. A landing zone, a pipeline, a policy set. Training pays for itself before the certs land.',
  },
  {
    icon: Calendar,
    title: 'Predictable cadence',
    body: 'Fixed dates per quarter. Engineers and managers can plan delivery around it instead of guessing.',
  },
  {
    icon: UsersThree,
    title: 'Same trainer end to end',
    body: 'Yaïr leads every block. Continuity matters when an engineer asks a question that builds on something three weeks back.',
  },
  {
    icon: FileText,
    title: 'Written close-out per engineer',
    body: 'Strengths, gaps, recommended next cert. Goes straight into your performance review cycle.',
  },
];

const TeamsPage: React.FC = () => {
  return (
    <div className="bg-[color:var(--ed-bg)] min-h-screen text-[color:var(--ed-ink)]">
      <SEO
        title="Team Training Plans"
        description="Quarterly Microsoft certification plans for engineering teams. Foundation, role split, specialise, certify, all taught live by a working MCT."
        canonical="/teams"
      />

      <section className="relative pt-20 sm:pt-28 pb-12 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <BackgroundIcons variant="training" />
        </div>
        <Wrap>
          <div className="relative max-w-3xl">
            <Eyebrow accent>Team training plans</Eyebrow>
            <Display as="h1" size="lg" className="mt-5 leading-[1.02]">
              Certify the whole team{' '}
              <span className="ed-display-italic">in one quarter.</span>
            </Display>
            <Lede className="mt-7">
              A 16 week Microsoft certification plan, run for your engineers as one cohort. Foundation, role split, specialise, certify. We hand back a fully credentialed platform team.
            </Lede>
            <div className="mt-8 flex flex-wrap gap-3">
              <EdButton to="/contact" variant="primary">
                Talk to us about a team plan <ArrowRight weight="bold" size={14} />
              </EdButton>
              <EdButton to="/tracks" variant="ghost">
                See certification tracks
              </EdButton>
            </div>
          </div>
        </Wrap>
      </section>

      <section className="pb-12">
        <Wrap>
          <div className="border-y border-[color:var(--ed-rule)] py-5 mb-10">
            <Eyebrow>The 16 week plan</Eyebrow>
            <p className="mt-3 text-[15px] text-[color:var(--ed-ink-2)]">
              One quarter, four blocks. Fixed dates, fixed price, written outcomes after each block.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {PHASES.map((phase) => (
              <div
                key={phase.number}
                className="rounded-xl border border-[color:var(--ed-rule)] bg-white/40 p-6"
              >
                <div className="flex items-baseline gap-4">
                  <span className="ed-display text-[40px] leading-none text-[color:var(--ed-accent)]">
                    {phase.number}
                  </span>
                  <div>
                    <Eyebrow>{phase.weeks}</Eyebrow>
                    <h3 className="ed-display text-[22px] mt-2 leading-tight">{phase.title}</h3>
                  </div>
                </div>
                <p className="mt-4 text-[15px] text-[color:var(--ed-ink-2)]">{phase.body}</p>
              </div>
            ))}
          </div>
        </Wrap>
      </section>

      <section className="pb-12">
        <Wrap>
          <div className="border-y border-[color:var(--ed-rule)] py-5 mb-10">
            <Eyebrow>What the team walks away with</Eyebrow>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {OUTCOMES.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="rounded-xl border border-[color:var(--ed-rule)] bg-white/40 p-5"
              >
                <Icon weight="bold" size={24} />
                <h3 className="ed-display text-[18px] mt-3 leading-tight">{title}</h3>
                <p className="mt-2 text-[14px] text-[color:var(--ed-ink-2)]">{body}</p>
              </div>
            ))}
          </div>
        </Wrap>
      </section>

      <section className="pb-16">
        <Wrap>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-[color:var(--ed-rule)] bg-white/40 p-6">
              <Eyebrow>Best fit for</Eyebrow>
              <ul className="mt-4 space-y-2 text-[15px] text-[color:var(--ed-ink-2)]">
                <li className="border-l-2 border-[color:var(--ed-accent)] pl-3">
                  Platform teams of 6 to 20 engineers moving to Azure.
                </li>
                <li className="border-l-2 border-[color:var(--ed-accent)] pl-3">
                  Consultancies standardising delivery on Microsoft Cloud.
                </li>
                <li className="border-l-2 border-[color:var(--ed-accent)] pl-3">
                  Security and compliance teams aligning to ISO 27001 or DORA.
                </li>
                <li className="border-l-2 border-[color:var(--ed-accent)] pl-3">
                  Engineering orgs preparing for an MSP partner audit.
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-[color:var(--ed-rule)] bg-white/40 p-6">
              <Eyebrow>Not the right fit</Eyebrow>
              <ul className="mt-4 space-y-2 text-[15px] text-[color:var(--ed-ink-2)]">
                <li className="border-l-2 border-[color:var(--ed-rule)] pl-3">
                  Single engineer self-study. Use the public schedule instead.
                </li>
                <li className="border-l-2 border-[color:var(--ed-rule)] pl-3">
                  Teams that need a one-off two hour intro. Book a half-day workshop.
                </li>
                <li className="border-l-2 border-[color:var(--ed-rule)] pl-3">
                  AWS or GCP shops. We only teach the Microsoft stack.
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 rounded-xl border border-[color:var(--ed-rule)] bg-white/40 p-8 max-w-3xl">
            <Eyebrow>How a team plan starts</Eyebrow>
            <ol className="mt-5 space-y-4 text-[15px] text-[color:var(--ed-ink-2)]">
              <li><span className="ed-display text-[color:var(--ed-accent)] mr-2">01.</span> A 45 minute call with the engineering lead and HR. We map current skills, target roles, and the quarter you want the team certified by.</li>
              <li><span className="ed-display text-[color:var(--ed-accent)] mr-2">02.</span> A written team plan with block dates, role splits, exam targets, and one fixed fee.</li>
              <li><span className="ed-display text-[color:var(--ed-accent)] mr-2">03.</span> Delivery across the quarter. Manager dashboard updated after every block.</li>
              <li><span className="ed-display text-[color:var(--ed-accent)] mr-2">04.</span> Final readiness report and per-engineer review notes. Optional retainer for the next quarter.</li>
            </ol>
            <div className="mt-7 flex flex-wrap gap-3">
              <EdButton to="/contact" variant="primary">
                Plan the quarter <ArrowRight weight="bold" size={14} />
              </EdButton>
              <EdButton to="/in-company" variant="ghost">
                Or just one workshop
              </EdButton>
            </div>
          </div>
        </Wrap>
      </section>
    </div>
  );
};

export default TeamsPage;
