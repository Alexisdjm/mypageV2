import ProjectsCards, { type ProjectsCardProps } from "./ProjectsCards";

export const WORK_PEEK = 16;

export interface ProjectsProps {
  projects: readonly ProjectsCardProps[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <div className="relative mt-12">
      {projects.map((project, index) => (
        <div
          key={project.title}
          className="sticky pb-3 md:min-h-[78svh] md:pb-6"
          style={{
            top: `calc(1.25rem + ${index * WORK_PEEK}px)`,
            zIndex: index + 1,
          }}
        >
          <ProjectsCards {...project} priority={index === 0} />
        </div>
      ))}
    </div>
  );
}
