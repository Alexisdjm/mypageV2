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
      className="flex h-(--service-card-height) w-(--service-card-width) flex-col items-start overflow-hidden rounded-[20px] bg-[#141414] p-4 text-left font-sans min-[1440px]:size-(--service-card) min-[1440px]:p-8"
    >
      <Image
        src={iconSrc}
        alt=""
        width={280}
        height={280}
        sizes="(min-width: 1440px) 289px, 150px"
        loading="lazy"
        decoding="async"
        aria-hidden="true"
        className="pointer-events-none absolute right-[-8%] bottom-[-10%] z-0 size-[52%] rotate-[-30deg] object-contain brightness-0 min-[1440px]:size-[68%]"
      />
      <div
        className="relative z-10 grid size-14 place-items-center rounded-[8px] bg-white min-[1440px]:size-22.5 min-[1440px]:rounded-[10px]"
        aria-hidden="true"
      >
        <Image
          src={iconSrc}
          alt=""
          width={70}
          height={70}
          sizes="(min-width: 1440px) 75px, 45px"
          loading="lazy"
          decoding="async"
          className="size-11.25 object-contain min-[1440px]:size-18.75"
        />
      </div>
      <h3 className="relative z-10 mt-auto max-w-[92%] text-[20px] leading-snug text-white min-[1440px]:max-w-[90%] min-[1440px]:text-[22px]">
        {title}
      </h3>
      <p className="relative z-10 mt-2 max-w-[92%] text-[14px] leading-snug text-white/70 min-[1440px]:text-base">
        {description}
      </p>
    </Card>
  );
}
