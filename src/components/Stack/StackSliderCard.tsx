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

/** Filename in public/Stack (square assets use -logo suffix). */
const STACK_LOGO_FILE: Record<StackIconName, string> = {
  chatgpt: "chatgpt.webp",
  cursor: "cursor.webp",
  windows: "windows.webp",
  figma: "figma.webp",
  github: "github.webp",
  unity: "unity.webp",
  nextjs: "next-logo.webp",
  react: "react.webp",
  tailwind: "tailwind.webp",
  django: "django.webp",
  python: "python.webp",
  postgres: "postgres.webp",
  js: "js.webp",
  html: "html.webp",
  css: "css.webp",
  shopify: "shopify.webp",
  webflow: "webflow-logo.webp",
  wordpress: "wordpress.webp",
};

export interface StackSliderCardProps {
  name: string;
  icon: StackIconName;
  size?: StackCardSize;
}

/** Mobile: all cards share portrait proportions (454×379). From md up: wide vs portrait from config. */
const MOBILE_PORTRAIT = "aspect-[454/379] h-auto w-[min(85vw,454px)]";

const SIZE_CLASS: Record<StackCardSize, string> = {
  wide: `${MOBILE_PORTRAIT} md:aspect-auto md:h-[370px] md:w-[min(85vw,720px)] xl:w-[clamp(650px,40vw,720px)]`,
  portrait: `${MOBILE_PORTRAIT} md:aspect-auto md:h-[379px] md:w-[min(85vw,454px)]`,
};

/** Logo display box — same in every card (wide/portrait). Tablet & desktop: 120×120. */
const LOGO_BOX_CLASS = "size-[min(6.25rem,28vw)] shrink-0 object-contain md:size-[120px]";

export default function StackSliderCard({
  name,
  icon,
  size = "portrait",
}: StackSliderCardProps) {
  return (
    <Card
      ring={false}
      className={`flex h-auto min-h-0 flex-col overflow-hidden rounded-[20px] border border-[#535353] bg-[#141414] px-5 py-4 text-left ${SIZE_CLASS[size]}`}
    >
      <div className="flex min-h-0 flex-1 items-center justify-center">
        <Image
          src={`/Stack/${STACK_LOGO_FILE[icon]}`}
          alt=""
          width={120}
          height={120}
          sizes="(min-width: 768px) 120px, 100px"
          loading="lazy"
          fetchPriority="low"
          decoding="async"
          className={LOGO_BOX_CLASS}
        />
      </div>
      <p className="shrink-0 font-[family-name:var(--font-plus-jakarta)] text-[20px] font-semibold text-white">
        {name}
      </p>
    </Card>
  );
}
