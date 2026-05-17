import React, { useMemo } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowRight, CheckCircle, Briefcase, Target } from '@phosphor-icons/react';
import { SEO } from '@/components/SEO';
import { Wrap, Eyebrow, Display, Lede, EdButton } from '@/components/editorial';
import { BackgroundIcons } from '@/components/BackgroundIcons';
import { getTrackBySlug, type CertTrack, type CertTrackStep } from '@/data/cert-tracks';
import { getAllTrainings } from '@/data/training-json';
import type { TrainingJSON } from '@/data/training-json/types';
import { useAllTrainingSessions, formatLowestPrice } from '@/hooks/use-all-training-sessions';
import { useLanguageContext } from '@/contexts/LanguageContext';
import { badgeSrc } from '@/lib/cert-badge';

const roleLabel: Record<CertTrackStep['role'], string> = {
  foundation: 'Foundation',
  associate: 'Associate',
  expert: 'Expert',
  specialty: 'Specialty',
};

interface Step {
  config: CertTrackStep;
  training: TrainingJSON;
}

function buildSteps(track: CertTrack, trainings: TrainingJSON[]): Step[] {
  const map = new Map(trainings.map((t) => [t.slug, t]));
  return track.steps
    .map((cfg) => {
      const training = map.get(cfg.slug);
      return training ? { config: cfg, training } : null;
    })
    .filter((s): s is Step => s !== null);
}

const TrackHubPage: React.FC = () => {
  const { slug = '' } = useParams<{ slug: string }>();
  const track = getTrackBySlug(slug);
  const trainings = useMemo(() => getAllTrainings(), []);
  const { byCourse: pricesByCourse } = useAllTrainingSessions();
  const { language } = useLanguageContext();

  if (!track) {
    return <Navigate to="/training" replace />;
  }

  const steps = buildSteps(track, trainings);
  const totalDays = steps.reduce((sum, s) => sum + (s.training.duration?.days ?? 0), 0);

  return (
    <div className="bg-[color:var(--ed-bg)] min-h-screen text-[color:var(--ed-ink)]">
      <SEO
        title={`${track.title} Certification Track`}
        description={track.metaDescription}
        canonical={`/tracks/${track.slug}`}
      />

      <section className="relative pt-20 sm:pt-28 pb-12 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <BackgroundIcons variant="training" />
        </div>
        <Wrap>
          <div className="relative max-w-3xl">
            <Eyebrow accent>Certification track</Eyebrow>
            <Display as="h1" size="lg" className="mt-5 leading-[1.02]">
              {track.title}{' '}
              <span className="ed-display-italic">in {totalDays} training days.</span>
            </Display>
            <Lede className="mt-7">{track.audience}</Lede>
            <div className="mt-6 inline-flex items-start gap-3 rounded-lg border border-[color:var(--ed-rule)] bg-white/50 p-4 text-[15px]">
              <Target weight="bold" className="mt-0.5 text-[color:var(--ed-accent)]" size={20} />
              <p className="text-[color:var(--ed-ink-2)]">
                <span className="font-semibold text-[color:var(--ed-ink)]">Outcome.</span> {track.outcome}
              </p>
            </div>
          </div>
        </Wrap>
      </section>

      <section className="pb-12">
        <Wrap>
          <div className="border-y border-[color:var(--ed-rule)] py-5 mb-10">
            <Eyebrow>The path</Eyebrow>
            <p className="mt-3 text-[15px] text-[color:var(--ed-ink-2)]">
              Three steps from foundation to expert. Each course is taught live by a Microsoft Certified Trainer.
            </p>
          </div>

          <ol className="space-y-6">
            {steps.map((step, idx) => {
              const cert = step.training.certification;
              const lowest = pricesByCourse[step.training.slug];
              const price = lowest ? formatLowestPrice(lowest.priceCents, language) : null;
              return (
                <li
                  key={step.training.slug}
                  className="grid grid-cols-1 md:grid-cols-[64px_1fr_auto] gap-5 md:gap-7 border border-[color:var(--ed-rule)] rounded-xl p-6 bg-white/40"
                >
                  <div className="flex md:flex-col items-center md:items-start gap-3">
                    <div className="ed-display text-[28px] leading-none text-[color:var(--ed-accent)]">
                      {String(idx + 1).padStart(2, '0')}
                    </div>
                    {cert?.examCode && (
                      <img
                        src={badgeSrc(cert.examCode) ?? ''}
                        alt={`${cert.examCode} badge`}
                        className="w-12 h-12 object-contain"
                        loading="lazy"
                      />
                    )}
                  </div>
                  <div className="min-w-0">
                    <Eyebrow>{roleLabel[step.config.role]}{cert?.examCode ? ` • ${cert.examCode}` : ''}</Eyebrow>
                    <h2 className="ed-display text-[22px] mt-2 leading-tight">
                      <Link to={`/training/${step.training.slug}`} className="hover:text-[color:var(--ed-accent)]">
                        {step.training.title}
                      </Link>
                    </h2>
                    <p className="mt-2 text-[15px] text-[color:var(--ed-ink-2)]">
                      {step.training.subtitle ?? step.training.description}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-[13px] text-[color:var(--ed-ink-3)]">
                      <span>{step.training.duration.days} days</span>
                      {step.training.difficulty && <span>{step.training.difficulty}</span>}
                      {price && <span>From {price}</span>}
                    </div>
                  </div>
                  <div className="flex md:flex-col gap-2 md:justify-center">
                    <EdButton to={`/training/${step.training.slug}`} variant="ghost" size="sm">
                      Course detail <ArrowRight weight="bold" size={14} />
                    </EdButton>
                  </div>
                </li>
              );
            })}
          </ol>
        </Wrap>
      </section>

      <section className="pb-16">
        <Wrap>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-[color:var(--ed-rule)] p-6 bg-white/40">
              <Eyebrow>Who it is for</Eyebrow>
              <ul className="mt-4 space-y-2 text-[15px] text-[color:var(--ed-ink-2)]">
                {track.jobTitles.map((title) => (
                  <li key={title} className="flex items-start gap-2">
                    <Briefcase weight="bold" size={16} className="mt-1 text-[color:var(--ed-accent)] shrink-0" />
                    <span>{title}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-[color:var(--ed-rule)] p-6 bg-white/40">
              <Eyebrow>What you walk away with</Eyebrow>
              <ul className="mt-4 space-y-2 text-[15px] text-[color:var(--ed-ink-2)]">
                <li className="flex items-start gap-2">
                  <CheckCircle weight="bold" size={16} className="mt-1 text-[color:var(--ed-accent)] shrink-0" />
                  <span>Exam-ready prep for every certification in the track.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle weight="bold" size={16} className="mt-1 text-[color:var(--ed-accent)] shrink-0" />
                  <span>Live cloud labs against a real Azure tenant, not a click-through simulator.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle weight="bold" size={16} className="mt-1 text-[color:var(--ed-accent)] shrink-0" />
                  <span>Direct access to a working MCT during and after each course.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <EdButton to="/contact" variant="primary">
              Plan this track for your team <ArrowRight weight="bold" size={14} />
            </EdButton>
            <EdButton to="/training" variant="ghost">
              See the full course catalog
            </EdButton>
          </div>
        </Wrap>
      </section>
    </div>
  );
};

export default TrackHubPage;
