interface CloudEvolversMarkProps {
  className?: string;
  size?: number;
}

export function CloudEvolversMark({ className, size = 32 }: CloudEvolversMarkProps) {
  return (
    <img
      src="/brand/2026-05-30/cloud-evolvers-linkedin-logo-512.png"
      alt="Cloud Evolvers"
      width={size}
      height={size}
      className={className}
      style={{ objectFit: 'contain' }}
    />
  );
}
