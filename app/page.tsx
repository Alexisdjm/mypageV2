import { ExperienceSlider, HeroBanner, ReactBitsLight, TechSlider } from "@/src/components";
import { homeExperience } from "@/src/config/experience";
import { homeHero } from "@/src/config/homeHero";

export default function Home() {
  return (
    <>
      <ReactBitsLight />
      <div className="relative z-[4] flex min-h-dvh flex-1 flex-col">
        <HeroBanner {...homeHero} />
        <TechSlider className="pb-3" />
      </div>
      <ExperienceSlider {...homeExperience} />
    </>
  );
}
