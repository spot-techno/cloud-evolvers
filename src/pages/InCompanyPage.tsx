import React from 'react';
import { ArrowRight, Users, Lock, Clock, MapPin, Buildings, ChartLine } from '@phosphor-icons/react';
import { SEO } from '@/components/SEO';
import { Wrap, Eyebrow, Display, Lede, EdButton } from '@/components/editorial';
import { BackgroundIcons } from '@/components/BackgroundIcons';

interface PackageCard {
  title: string;
  duration: string;
  groupSize: string;
  bestFor: string;
  examples: string[];
}

const PACKAGES: PackageCard[] = [
  {
    title: 'Half-day workshop',
    duration: '4 hours',
    groupSize: '4 to 16 people',
    bestFor: 'A team that needs to align on one topic fast, before a migration or audit.',
    examples: [
      'Azure landing zone walk-through',
      'Entra ID Conditional Access tightening',
      'Defender for Cloud setup review',
    ],
  },
  {
    title: 'Full-day deep dive',
    duration: '1 day',
    groupSize: '6 to 14 people',
    bestFor: 'A single team going from theory to production on a specific service.',
    examples: [
      'AKS hands-on with internal services',
      'Application Insights and Log Analytics for engineers',
      'AZ-104 exam crash session',
    ],
  },
  {
    title: 'Custom multi-day cohort',
    duration: '2 to 5 days',
    groupSize: '8 to 12 people',
    bestFor: 'Teams certifying together on AZ-104, AZ-204, AZ-305, AZ-500, AI-102, or MS-102.',
    examples: [
      'Two-week Azure Administrator track',
      'AZ-204 + AZ-400 bootcamp on your codebase',
      'Microsoft 365 Security Administrator rollout',
    ],
  },
];

interface PromiseItem {
  icon: React.ComponentType<{ size?: number; weight?: 'bold' | 'regular' }>;
  title: string;
  body: string;
}

const PROMISES: PromiseItem[] = [
  {
    icon: Users,
    title: 'Same trainer, every session',
    body: 'Yaïr delivers every course personally. No subcontractors, no reused canned content from a vendor library.',
  },
  {
    icon: Buildings,
    title: 'Built around your tenant',
    body: 'We work from your Azure landing zone, your Entra ID setup, your policies. Examples come from your stack, not a generic lab.',
  },
  {
    icon: Lock,
    title: 'Stays inside your team',
    body: 'No recordings, no public posts, no name-dropping. Internal context discussed in class stays in class.',
  },
  {
    icon: Clock,
    title: 'Scheduled around your sprints',
    body: 'Half-day blocks, evenings, or split-day formats. We design the calendar so nobody has to choose between training and shipping.',
  },
  {
    icon: MapPin,
    title: 'Your office or remote',
    body: 'On-site anywhere in the Netherlands and Belgium, or live online with the same engagement model.',
  },
  {
    icon: ChartLine,
    title: 'Measured outcomes',
    body: 'Each engagement ends with a written readiness report. You see who is ready for the exam and who needs another pass.',
  },
];

const InCompanyPage: React.FC = () => {
  return (
    <div className="bg-[color:var(--ed-bg)] min-h-screen text-[color:var(--ed-ink)]">
      <SEO
        title="In-Company Azure Training"
        description="Private Azure and Microsoft 365 training delivered on site or remote. Built around your tenant, taught live by a working MCT."
        canonical="/in-company"
      />

      <section className="relative pt-20 sm:pt-28 pb-12 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <BackgroundIcons variant="training" />
        </div>
        <Wrap>
          <div className="relative max-w-3xl">
            <Eyebrow accent>In-company training</Eyebrow>
            <Display as="h1" size="lg" className="mt-5 leading-[1.02]">
              Private cohorts, taught{' '}
              <span className="ed-display-italic">on your own stack.</span>
            </Display>
            <Lede className="mt-7">
              Bring an MCT to your team. We deliver Azure, AI, Security, and Microsoft 365 courses on site or remote, sequenced around your release calendar and grounded in your live tenant.
            </Lede>
            <div className="mt-8 flex flex-wrap gap-3">
              <EdButton to="/contact" variant="primary">
                Plan an in-company cohort <ArrowRight weight="bold" size={14} />
              </EdButton>
              <EdButton to="/training" variant="ghost">
                See course catalog
              </EdButton>
            </div>
          </div>
        </Wrap>
      </section>

      <section className="pb-12">
        <Wrap>
          <div className="border-y border-[color:var(--ed-rule)] py-5 mb-10">
            <Eyebrow>Packages</Eyebrow>
            <p className="mt-3 text-[15px] text-[color:var(--ed-ink-2)]">
              Three formats, all delivered by the same trainer. Pick the one closest to where your team is today.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {PACKAGES.map((pkg) => (
              <div key={pkg.title} className="rounded-xl border border-[color:var(--ed-rule)] bg-white/40 p-6">
                <Eyebrow>{pkg.duration} • {pkg.groupSize}</Eyebrow>
                <h3 className="ed-display text-[22px] mt-3 leading-tight">{pkg.title}</h3>
                <p className="mt-3 text-[14px] text-[color:var(--ed-ink-2)]">{pkg.bestFor}</p>
                <ul className="mt-4 space-y-2 text-[13px] text-[color:var(--ed-ink-3)]">
                  {pkg.examples.map((ex) => (
                    <li key={ex} className="border-l-2 border-[color:var(--ed-accent)] pl-3">{ex}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Wrap>
      </section>

      <section className="pb-12">
        <Wrap>
          <div className="border-y border-[color:var(--ed-rule)] py-5 mb-10">
            <Eyebrow>What you get</Eyebrow>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROMISES.map(({ icon: Icon, title, body }) => (
              <div key={title} className="rounded-xl border border-[color:var(--ed-rule)] bg-white/40 p-5">
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
          <div className="rounded-xl border border-[color:var(--ed-rule)] bg-white/40 p-8 max-w-3xl">
            <Eyebrow>How a cohort gets scoped</Eyebrow>
            <ol className="mt-5 space-y-4 text-[15px] text-[color:var(--ed-ink-2)]">
              <li><span className="ed-display text-[color:var(--ed-accent)] mr-2">01.</span> A 30 minute intake with the engineering or platform lead. We map current skills, the tenant, and the deadline.</li>
              <li><span className="ed-display text-[color:var(--ed-accent)] mr-2">02.</span> A written proposal with format, schedule, and price. Fixed fee, no per-seat surprises.</li>
              <li><span className="ed-display text-[color:var(--ed-accent)] mr-2">03.</span> Delivery on the agreed dates. Each session has its own success criterion.</li>
              <li><span className="ed-display text-[color:var(--ed-accent)] mr-2">04.</span> A readiness report after the last day, plus a free follow-up Q&amp;A two weeks later.</li>
            </ol>
            <div className="mt-7">
              <EdButton to="/contact" variant="primary">
                Start the intake <ArrowRight weight="bold" size={14} />
              </EdButton>
            </div>
          </div>
        </Wrap>
      </section>
    </div>
  );
};

export default InCompanyPage;
