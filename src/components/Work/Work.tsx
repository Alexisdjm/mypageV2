import Projects from "./Projects";
import type { ProjectsCardProps } from "./ProjectsCards";

export interface WorkProps {
  heading: string;
  subtitle: string;
  visitSite: string;
  projects: readonly ProjectsCardProps[];
  className?: string;
}

export default function Work({
  heading,
  subtitle,
  visitSite,
  projects,
  className = "",
}: WorkProps) {
  return (
    <section
      className={`relative z-[4] shrink-0 px-4 py-20 text-center md:px-6 lg:px-[50px] ${className}`}
      aria-labelledby="work-heading"
    >
      <div className="mx-auto w-full max-w-[1400px]">
        <h2
          id="work-heading"
          className="text-[32px] tracking-tight text-white md:text-[40px] lg:text-[54px]"
        >
          {heading}
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-base text-white/70">{subtitle}</p>

        <Projects projects={projects} visitSiteLabel={visitSite} />
      </div>
    </section>
  );
}
