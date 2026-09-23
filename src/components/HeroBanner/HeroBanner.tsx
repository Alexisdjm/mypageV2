import HeroContent, { type HeroContentProps } from "./HeroContent";

export type HeroBannerProps = HeroContentProps;

export default function HeroBanner(props: HeroBannerProps) {
  return (
    <section className="relative z-[4] flex w-full flex-1 flex-col items-center justify-center px-6 py-28 text-center text-white">
      <HeroContent {...props} />
    </section>
  );
}
