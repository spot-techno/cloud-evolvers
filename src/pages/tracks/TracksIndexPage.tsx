import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from '@phosphor-icons/react';
import { SEO } from '@/components/SEO';
import { Wrap, Eyebrow, Display, Lede, EdButton } from '@/components/editorial';
import { BackgroundIcons } from '@/components/BackgroundIcons';
import { CERT_TRACKS } from '@/data/cert-tracks';
import { getAllTrainings } from '@/data/training-json';

const TracksIndexPage: React.FC = () => {
  const trainings = useMemo(() => getAllTrainings(), []);

  return (
    <div className="bg-[color:var(--ed-bg)] min-h-screen text-[color:var(--ed-ink)]">
      <SEO
        title="Microsoft Certification Tracks"
        description="Role-based certification tracks for Azure, AI, Security, and Microsoft 365. From foundation to expert, taught live by an MCT."
        canonical="/tracks"
      />

      <section className="relative pt-20 sm:pt-28 pb-12 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <BackgroundIcons variant="training" />
        </div>
        <Wrap>
          <div className="relative max-w-3xl">
            <Eyebrow accent>Certification tracks</Eyebrow>
            <Display as="h1" size="lg" className="mt-5 leading-[1.02]">
              Pick a role.{' '}
              <span className="ed-display-italic">We have the path.</span>
            </Display>
            <Lede className="mt-7">
              Six Microsoft role tracks, each three courses deep. Built around the certifications hiring managers actually screen for, taught live by a working MCT.
            </Lede>
          </div>
        </Wrap>
      </section>

      <section className="pb-16">
        <Wrap>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {CERT_TRACKS.map((track) => {
              const trainingMap = new Map(trainings.map((t) => [t.slug, t]));
              const exams = track.steps
                .map((s) => trainingMap.get(s.slug)?.certification?.examCode)
                .filter((c): c is string => !!c);
              const totalDays = track.steps
                .map((s) => trainingMap.get(s.slug)?.duration?.days ?? 0)
                .reduce((a, b) => a + b, 0);
              return (
                <Link
                  key={track.slug}
                  to={`/tracks/${track.slug}`}
                  className="block rounded-xl border border-[color:var(--ed-rule)] bg-white/40 p-6 transition hover:border-[color:var(--ed-ink)] hover:bg-white/60"
                >
                  <Eyebrow>{exams.join(' • ')}</Eyebrow>
                  <h2 className="ed-display text-[24px] mt-3 leading-tight">{track.title}</h2>
                  <p className="mt-3 text-[15px] text-[color:var(--ed-ink-2)]">{track.audience}</p>
                  <div className="mt-5 flex items-center justify-between text-[13px] text-[color:var(--ed-ink-3)]">
                    <span>{totalDays} training days • {track.steps.length} courses</span>
                    <span className="inline-flex items-center gap-1 text-[color:var(--ed-accent)] font-medium">
                      See the path <ArrowRight weight="bold" size={14} />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mt-12 rounded-xl border border-[color:var(--ed-rule)] bg-white/40 p-6 max-w-3xl">
            <Eyebrow>Building a team plan?</Eyebrow>
            <p className="mt-3 text-[15px] text-[color:var(--ed-ink-2)]">
              Tracks scale to teams. We run the same courses in-company, sequenced across a quarter so people learn, ship, and certify without losing project velocity.
            </p>
            <div className="mt-5">
              <EdButton to="/contact" variant="primary">
                Talk to us about a team track <ArrowRight weight="bold" size={14} />
              </EdButton>
            </div>
          </div>
        </Wrap>
      </section>
    </div>
  );
};

export default TracksIndexPage;
