"use client";

import {
  Contact,
  Capability,
  ExperienceSlider,
  Footer,
  HeroBanner,
  ReactBitsLight,
  Services,
  Stack,
  TechSlider,
  Work,
  Workflow,
} from "@/src/components";
import { useLocale } from "@/src/i18n/LocaleProvider";

export default function HomeView() {
  const { messages } = useLocale();

  return (
    <main id="main-content" className="min-h-dvh bg-[#020202]">
      <div className="relative flex min-h-dvh flex-1 flex-col overflow-hidden bg-[#020202]">
        <div
          className="pointer-events-none absolute inset-0 z-0 overflow-hidden mask-[linear-gradient(to_bottom,black_0%,black_52%,transparent_96%)]"
          aria-hidden="true"
        >
          <ReactBitsLight
            raysOrigin="top-center"
            raysColor="#ffffff"
            rayLength={1.28}
            fadeDistance={0.85}
            lightSpread={1.10}
            followMouse
            mouseInfluence={0.1}
          />
        </div>
        <HeroBanner
          {...messages.hero}
          resumeHref={messages.site.resumePath}
          resumeDownloadName={messages.site.resumeDownloadName}
        />
        <TechSlider className="relative z-[1] pb-3" ariaLabel={messages.techSliderAria} />
      </div>
      <ExperienceSlider {...messages.experience} />
      <Services {...messages.services} />
      <Capability {...messages.capability} />
      <Work {...messages.work} />
      <Workflow {...messages.workflow} />
      <Stack {...messages.stack} />
      <Contact />
      <Footer />
    </main>
  );
}
