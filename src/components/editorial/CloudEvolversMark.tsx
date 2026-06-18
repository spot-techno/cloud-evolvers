interface CloudEvolversMarkProps {
  className?: string;
  size?: number;
}

/**
 * Cloud Evolvers brand mark. A flat text monogram ("ce.") in the same recipe
 * as the xevolve / spot-suite marks: brand-green first letter (#22c55e),
 * navy ink second letter (#1A2E3C), green trailing dot, set in Space Grotesk.
 * Wordmark is rendered separately by the surrounding component.
 */
export function CloudEvolversMark({ className, size = 32 }: CloudEvolversMarkProps) {
  return (
    <img
      src="/cloudevolvers-mark.svg"
      alt="Cloud Evolvers"
      width={size}
      height={size}
      className={className}
      style={{ objectFit: 'contain' }}
    />
  );
}
