export interface CapabilityFeatProps {
  metric: string;
  label: string;
  description: string;
}

export default function CapabilityFeat({
  metric,
  label,
  description,
}: CapabilityFeatProps) {
  return (
    <article className="text-left">
      <p className="text-[clamp(1.75rem,6vw,3.25rem)] font-semibold leading-none tracking-tight text-white/90">
        {metric}
      </p>
      <h3 className="mt-2 text-base font-semibold text-white/55 sm:text-lg md:text-xl">
        {label}
      </h3>
      <p className="mt-2 max-w-none text-xs leading-relaxed text-white/40 sm:max-w-[18rem] sm:text-sm md:text-base">
        {description}
      </p>
    </article>
  );
}
