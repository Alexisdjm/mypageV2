import Image from "next/image";

export interface ProjectsCardProps {
  title: string;
  description: string;
  tags: readonly string[];
  image: string;
  imageBg: string;
  url?: string;
  priority?: boolean;
}

export default function ProjectsCards({
  title,
  description,
  tags,
  image,
  imageBg,
  url,
  priority = false,
}: ProjectsCardProps) {
  return (
    <article className="work-card-frame overflow-hidden rounded-[28px] text-left">
      <div className="relative z-10 flex flex-col gap-5 px-5 py-5 md:grid md:grid-cols-2 md:items-center md:gap-8 md:px-10 md:py-10">
        <div
          className="flex aspect-16/10 max-h-[42svh] w-full items-center justify-center overflow-hidden rounded-[20px] px-5 py-7 md:order-2 md:max-h-none md:px-8 md:py-9"
          style={{ backgroundColor: imageBg }}
        >
          <Image
            src={image}
            alt=""
            width={1400}
            height={900}
            sizes="(min-width: 768px) 40vw, 86vw"
            priority={priority}
            loading={priority ? "eager" : "lazy"}
            className="h-auto w-[88%] object-contain"
          />
        </div>

        <div className="md:order-1 md:flex md:min-w-0 md:flex-col">
          <h3 className="text-[24px] leading-tight tracking-tight text-white md:text-[36px]">{title}</h3>
          <p className="mt-4 hidden max-w-xl text-[15px] leading-relaxed text-white/70 md:block md:text-base">
            {description}
          </p>

          <ul className="mt-6 hidden flex-wrap gap-2 md:flex">
            {tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-white/20 px-3.5 py-1.5 text-sm text-white/80"
              >
                {tag}
              </li>
            ))}
          </ul>

          {url ? (
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="mt-8 hidden w-fit items-center gap-2 rounded-full border border-white/30 bg-white/5 px-5 py-2.5 text-sm text-white md:inline-flex"
            >
              Visit site
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M4.5 11.5 11.5 4.5M6 4.5h5.5V10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
