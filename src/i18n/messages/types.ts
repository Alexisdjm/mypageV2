import type { ExperienceSliderProps } from "@/src/components/ExperienceSlider";
import type { ServicesProps } from "@/src/components/Services";
import type { WorkProps } from "@/src/components/Work";
import type { WorkflowProps } from "@/src/components/Workflow/Workflow";
import type { StackProps } from "@/src/components/Stack/Stack";

/** Hero copy only — resume URL lives under `site` and is merged in `HomeView`. */
export type HeroMessages = {
  greeting: string;
  title: {
    before: string;
    highlight: string;
    after: string;
  };
  description: string;
  primaryLabel: string;
  secondaryLabel: string;
};

export type Messages = {
  nav: {
    about: string;
    experience: string;
    services: string;
    work: string;
    stack: string;
    contactMe: string;
    mainAria: string;
    mobileAria: string;
    closeMenu: string;
    menuDialog: string;
  };
  footer: {
    index: string;
    socialTitle: string;
    basedIn: string;
    location: string;
    rights: string;
    indexNavAria: string;
    socialNavAria: string;
    languageAria: string;
    socialLinks: {
      email: string;
      github: string;
      linkedin: string;
      instagram: string;
    };
  };
  hero: HeroMessages;
  techSliderAria: string;
  experience: ExperienceSliderProps;
  services: ServicesProps;
  work: WorkProps;
  workflow: WorkflowProps;
  stack: StackProps;
  contact: {
    headingLine1: string;
    headingLine2: string;
    subtitle: string;
    projectTypes: readonly { value: string; label: string }[];
    form: {
      firstName: string;
      lastName: string;
      email: string;
      projectType: string;
      message: string;
      send: string;
      sending: string;
      success: string;
      errorGeneric: string;
      errorNetwork: string;
    };
  };
  site: {
    authorName: string;
    copyrightYear: number;
    resumePath: string;
    resumeDownloadName: string;
    scrollToTopAria: string;
  };
};
