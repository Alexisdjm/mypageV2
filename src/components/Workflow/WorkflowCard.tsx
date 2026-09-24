import type { CSSProperties } from "react";
import Image from "next/image";

export interface WorkflowCardProps {
  title: string;
  description: string;
  icon: string;
  className?: string;
  waveDelay?: string;
}

export default function WorkflowCard({
  title,
  description,
  icon,
  className = "",
  waveDelay,
}: WorkflowCardProps) {
  return (
    <article
      className={`relative flex aspect-[350/250] w-full max-w-[350px] flex-col items-start rounded-[24px] bg-[#020202] p-6 text-left xl:aspect-auto xl:h-[250px] xl:w-[350px] xl:max-w-none ${className}`}
    >
      <span
        data-light
        aria-hidden="true"
        className="workflow-card-ring pointer-events-none absolute inset-0 z-[1] rounded-[24px]"
        style={waveDelay ? ({ "--wave-delay": waveDelay } as CSSProperties) : undefined}
      />
      <div className="relative z-10 grid size-[60px] place-items-center rounded-[10px] bg-white">
        <Image
          src={icon}
          alt=""
          width={45}
          height={45}
          sizes="45px"
          className="size-[45px] object-contain"
        />
      </div>

      <h3 className="relative z-10 mt-auto text-[20px] leading-tight tracking-tight text-white md:text-[22px]">
        {title}
      </h3>
      <p className="relative z-10 mt-2 max-w-[34ch] text-[14px] leading-relaxed text-white/70">
        {description}
      </p>
    </article>
  );
}
