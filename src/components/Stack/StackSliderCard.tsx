import Image from "next/image";
import { Card } from "@/src/components/UXUI";

export type StackCardSize = "wide" | "portrait";

export const STACK_LOGOS = [
  "chatgpt",
  "cursor",
  "windows",
  "figma",
  "github",
  "unity",
  "nextjs",
  "react",
  "tailwind",
  "django",
  "python",
  "postgres",
  "js",
  "html",
  "css",
  "shopify",
  "webflow",
  "wordpress",
] as const;

export type StackIconName = (typeof STACK_LOGOS)[number];

export interface StackSliderCardProps {
  name: string;
  icon: StackIconName;
  size?: StackCardSize;
}

const SIZE_CLASS: Record<StackCardSize, string> = {
  wide: "h-[370px] w-[min(85vw,720px)] xl:w-[clamp(650px,40vw,720px)]",
  portrait: "h-[379px] w-[min(85vw,454px)]",
};

export default function StackSliderCard({ name, icon, size = "portrait" }: StackSliderCardProps) {
  const wide = size === "wide";

  return (
    <Card
      ring={false}
      className={`flex flex-col items-stretch rounded-[20px] border border-[#535353] bg-[#141414] px-5 py-4 text-left ${SIZE_CLASS[size]}`}
    >
      <div className="flex flex-1 items-center justify-center">
        <Image
          src={`/Stack/${icon}.webp`}
          alt=""
          width={wide ? 180 : 140}
          height={wide ? 180 : 140}
          sizes={wide ? "180px" : "140px"}
          quality={70}
          unoptimized
          className={wide ? "max-h-36 w-auto max-w-[50%] object-contain" : "max-h-28 w-auto max-w-[58%] object-contain"}
        />
      </div>
      <p className="font-[family-name:var(--font-plus-jakarta)] text-[20px] font-semibold text-white">
        {name}
      </p>
    </Card>
  );
}
