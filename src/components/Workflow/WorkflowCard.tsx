import Image from "next/image";
import { Card } from "@/src/components/UXUI";

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
    <Card
      ring="wave"
      waveDelay={waveDelay}
      className={`flex aspect-[350/250] w-full max-w-[350px] flex-col items-start rounded-[24px] bg-[#020202] p-6 text-left xl:aspect-auto xl:h-[250px] xl:w-[350px] xl:max-w-none ${className}`}
    >
      <div className="relative z-10 grid size-[60px] place-items-center rounded-[10px] bg-white">
        <Image
          src={icon}
          alt=""
          width={45}
          height={45}
          sizes="45px"
          loading="lazy"
          decoding="async"
          className="size-[45px] object-contain"
        />
      </div>
      <h3 className="relative z-10 mt-auto text-[20px] leading-tight tracking-tight text-white md:text-[22px]">
        {title}
      </h3>
      <p className="relative z-10 mt-2 max-w-[34ch] text-[14px] leading-relaxed text-white/70">{description}</p>
    </Card>
  );
}
