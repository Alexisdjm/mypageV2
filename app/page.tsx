import {
  Contact,
  ExperienceSlider,
  HeroBanner,
  ReactBitsLight,
  Services,
  Stack,
  TechSlider,
  Work,
  Workflow,
} from "@/src/components";
import { homeExperience } from "@/src/config/experience";
import { homeHero } from "@/src/config/homeHero";
import { homeServices } from "@/src/config/services";
import { homeStack } from "@/src/config/stack";
import { homeWork } from "@/src/config/work";
import { homeWorkflow } from "@/src/config/workflow";

export default function Home() {
  return (
    <>
      <ReactBitsLight />
      <div className="relative z-4 flex min-h-dvh flex-1 flex-col">
        <HeroBanner {...homeHero} />
        <TechSlider className="pb-3" />
      </div>
      <ExperienceSlider {...homeExperience} />
      <Services {...homeServices} />
      <Work {...homeWork} />
      <Workflow {...homeWorkflow} />
      <Stack {...homeStack} />
      <Contact />
    </>
  );
}
