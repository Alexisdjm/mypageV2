import { PrimaryCTA, SecondaryCTA } from "@/src/components/UXUI";

export interface HeroContentProps {
  greeting: string;
  title: {
    before: string;
    highlight: string;
    after: string;
  };
  description: string;
  primaryLabel: string;
  secondaryLabel: string;
}

export default function HeroContent({
  greeting,
  title,
  description,
  primaryLabel,
  secondaryLabel,
}: HeroContentProps) {
  return (
    <>
      <p className="text-sm text-white/80">{greeting}</p>

      <h1 className="mt-5 max-w-4xl text-[40px] leading-[1.05] tracking-tight md:text-[48px]">
        {title.before}{" "}
        <span className="bg-white px-2 text-neutral-950 relative -rotate-2 inline-block">{title.highlight}</span>
        <br />
        {title.after}
      </h1>

      <p className="mt-5 hidden max-w-2xl text-sm leading-relaxed text-white/70 md:block">
        {description}
      </p>

      <div className="mt-8 grid grid-cols-2 gap-3">
        <PrimaryCTA className="gap-2">
          {primaryLabel}
          <DownloadIcon />
        </PrimaryCTA>
        <SecondaryCTA>{secondaryLabel}</SecondaryCTA>
      </div>
    </>
  );
}

function DownloadIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 4v11m0 0 4-4m-4 4-4-4M5 20h14" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
