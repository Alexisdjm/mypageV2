import Image from "next/image";
import { Card } from "@/src/components/UXUI";

export type ServiceIcon = "frontend" | "backend" | "commerce" | "design";

export interface ServicesSliderCardProps {
  title: string;
  description: string;
  icon: ServiceIcon;
}

const SERVICE_ICONS: Record<ServiceIcon, string> = {
  frontend: "/Services/document.png",
  backend: "/Services/web-settings.png",
  commerce: "/Services/e-commerce.png",
  design: "/Services/figma 2.png",
};

export default function ServicesSliderCard({ title, description, icon }: ServicesSliderCardProps) {
  const iconSrc = SERVICE_ICONS[icon];

  return (
    <Card
      hover={15}
      className="flex h-70 w-(--service-card) flex-col items-start overflow-hidden rounded-5 bg-[#141414] p-5 text-left font-sans md:h-(--service-card) md:size-(--service-card) md:p-6 min-[1440px]:p-8"
    >
      <Image
        src={iconSrc}
        alt=""
        width={280}
        height={280}
        sizes="(min-width: 1440px) 289px, 180px"
        loading="lazy"
        decoding="async"
        aria-hidden="true"
        className="pointer-events-none absolute right-[-8%] bottom-[-10%] z-0 size-[68%] rotate-[-30deg] object-contain brightness-0"
      />
      <div className="relative z-10 grid size-22.5 place-items-center rounded-[10px] bg-white">
        <Image
          src={iconSrc}
          alt=""
          width={70}
          height={70}
          sizes="75px"
          loading="lazy"
          decoding="async"
          className="size-18.75 object-contain"
        />
      </div>
      <h3 className="relative z-10 mt-auto max-w-[90%] text-[18px] text-white md:text-[24px] min-[1440px]:text-[22px]">
        {title}
      </h3>
      <p className="relative z-10 mt-2 max-w-[92%] text-[14px] leading-snug text-white/70 md:text-base md:leading-snug">
        {description}
      </p>
    </Card>
  );
}
