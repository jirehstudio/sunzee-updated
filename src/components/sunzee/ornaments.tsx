// Decorative elements used throughout the design.

export function Ornament({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`} aria-hidden="true">
      <span className="h-px w-12 sm:w-16 bg-gradient-to-r from-transparent to-[var(--coral)]/70" />
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--coral)]/60" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--coral)]" />
      </span>
      <span className="h-px w-12 sm:w-16 bg-gradient-to-l from-transparent to-[var(--coral)]/70" />
    </div>
  );
}

export function SmallOrnament({ className = "" }: { className?: string }) {
  return <span className={className} aria-hidden="true" />;
}

export function DividerLine({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`} aria-hidden="true">
      <span className="h-px w-16 sm:w-24 bg-gradient-to-r from-transparent to-[var(--ocean)]/60" />
      <span className="h-px w-16 sm:w-24 bg-gradient-to-l from-transparent to-[var(--ocean)]/60" />
    </div>
  );
}

export function PalmIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M32 60 V32" />
      <path d="M32 32 C 20 28, 12 18, 8 8 C 18 12, 28 18, 32 32" />
      <path d="M32 32 C 44 28, 52 18, 56 8 C 46 12, 36 18, 32 32" />
      <path d="M32 28 C 26 22, 20 18, 14 16 C 20 24, 26 28, 32 28" />
      <path d="M32 28 C 38 22, 44 18, 50 16 C 44 24, 38 28, 32 28" />
      <path d="M32 60 C 30 56, 28 54, 26 52" />
      <path d="M32 60 C 34 56, 36 54, 38 52" />
    </svg>
  );
}

export function CompassIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      className={className}
      aria-hidden="true"
    >
      <circle cx="32" cy="32" r="28" />
      <circle cx="32" cy="32" r="22" opacity="0.4" />
      <circle cx="32" cy="32" r="2" fill="currentColor" />
    </svg>
  );
}

export function LeafIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M8 56 C 8 30, 30 8, 56 8 C 56 34, 34 56, 8 56 Z" />
      <path d="M8 56 L 40 24" opacity="0.5" />
      <path d="M20 44 L 32 32" opacity="0.5" />
      <path d="M14 50 L 26 38" opacity="0.5" />
    </svg>
  );
}

export function WaveDivider({
  flip = false,
  className = "",
  color = "var(--background)",
  variant = "single",
}: {
  flip?: boolean;
  className?: string;
  color?: string;
  variant?: "single" | "double" | "triple";
}) {
  // Multi-layered wave paths for a richer ocean feel
  const paths: Record<string, string> = {
    single: "M0,30 C150,60 350,0 600,30 C850,60 1050,0 1200,30 L1200,60 L0,60 Z",
    double:
      "M0,40 C200,10 400,55 600,30 C800,5 1000,55 1200,30 L1200,60 L0,60 Z M0,46 C200,30 400,60 600,42 C800,28 1000,58 1200,42 L1200,60 L0,60 Z",
    triple:
      "M0,30 C200,5 400,55 600,30 C800,5 1000,55 1200,30 L1200,60 L0,60 Z M0,40 C200,20 400,55 600,38 C800,22 1000,55 1200,38 L1200,60 L0,60 Z M0,48 C200,35 400,58 600,46 C800,35 1000,58 1200,46 L1200,60 L0,60 Z",
  };
  // For multi-layer variants we split into multiple paths with decreasing opacity
  const layers = variant === "single" ? 1 : variant === "double" ? 2 : 3;
  return (
    <div
      className={`pointer-events-none w-full overflow-hidden leading-none ${className}`}
      style={{ transform: flip ? "rotate(180deg)" : undefined }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
        className="w-full h-[40px] md:h-[60px]"
        fill={color}
      >
        {Array.from({ length: layers }).map((_, i) => (
          <path
            key={i}
            d={paths[variant]}
            opacity={i === 0 ? 1 : 1 - i * 0.25}
            transform={i > 0 ? `translate(0, ${i * 4})` : undefined}
          />
        ))}
      </svg>
    </div>
  );
}

export function SectionLabel({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`inline-flex items-center justify-center gap-3 text-[10px] sm:text-xs font-semibold tracking-[0.15em] sm:tracking-[0.32em] uppercase text-[var(--coral-deep)] ${className}`}>
      <span className="h-px w-6 sm:w-8 bg-[var(--coral)] shrink-0" />
      <span className="text-center">{children}</span>
      <span className="h-px w-6 sm:w-8 bg-[var(--coral)] shrink-0" />
    </div>
  );
}
