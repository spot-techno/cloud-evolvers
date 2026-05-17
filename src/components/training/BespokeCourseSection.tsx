import { CheckCircle, Warning, Calendar, Briefcase, X } from '@phosphor-icons/react';
import { Wrap, Eyebrow, Display } from '@/components/editorial';
import type { BespokeCourse } from '@/data/bespoke-courses';

interface Props {
  course: BespokeCourse;
}

export default function BespokeCourseSection({ course }: Props) {
  return (
    <section className="py-16 sm:py-20 border-t border-[color:var(--ed-rule)]">
      <Wrap>
        <div className="max-w-3xl">
          <Eyebrow accent>Practitioner take</Eyebrow>
          <p className="mt-5 text-[18px] leading-relaxed text-[color:var(--ed-ink)]">
            {course.practitionerAngle}
          </p>
        </div>

        {course.callout && (
          <div className="mt-10 max-w-3xl rounded-xl border-l-4 border-[color:var(--ed-accent)] bg-white/60 p-5">
            <Eyebrow>{course.callout.label}</Eyebrow>
            <p className="mt-2 text-[15px] text-[color:var(--ed-ink-2)]">{course.callout.body}</p>
          </div>
        )}

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-[color:var(--ed-rule)] bg-white/40 p-6">
            <Eyebrow>Who passes</Eyebrow>
            <ul className="mt-4 space-y-2 text-[15px] text-[color:var(--ed-ink-2)]">
              {course.whoPasses.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle weight="bold" size={16} className="mt-1 text-[color:var(--ed-accent)] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-[color:var(--ed-rule)] bg-white/40 p-6">
            <Eyebrow>Who struggles</Eyebrow>
            <ul className="mt-4 space-y-2 text-[15px] text-[color:var(--ed-ink-2)]">
              {course.whoStruggles.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <X weight="bold" size={16} className="mt-1 text-[color:var(--ed-ink-3)] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <div className="flex items-center gap-3">
            <Calendar weight="bold" size={20} className="text-[color:var(--ed-accent)]" />
            <Display as="h3" size="sm">Sample week</Display>
          </div>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-5 gap-4">
            {course.sampleWeek.map((day) => (
              <div key={day.label} className="rounded-xl border border-[color:var(--ed-rule)] bg-white/40 p-4">
                <Eyebrow>{day.label}</Eyebrow>
                <p className="mt-2 text-[14px] text-[color:var(--ed-ink-2)] leading-snug">
                  {day.focus}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-[color:var(--ed-rule)] bg-white/40 p-6">
            <div className="flex items-center gap-3">
              <Warning weight="bold" size={20} className="text-[color:var(--ed-accent)]" />
              <Eyebrow>Common mistakes</Eyebrow>
            </div>
            <ul className="mt-4 space-y-3 text-[15px] text-[color:var(--ed-ink-2)]">
              {course.commonMistakes.map((item) => (
                <li key={item} className="border-l-2 border-[color:var(--ed-accent)] pl-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-[color:var(--ed-rule)] bg-white/40 p-6">
            <div className="flex items-center gap-3">
              <Briefcase weight="bold" size={20} className="text-[color:var(--ed-accent)]" />
              <Eyebrow>Jobs this unlocks</Eyebrow>
            </div>
            <ul className="mt-4 space-y-2 text-[15px] text-[color:var(--ed-ink-2)]">
              {course.jobsThisUnlocks.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle weight="bold" size={16} className="mt-1 text-[color:var(--ed-accent)] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Wrap>
    </section>
  );
}
