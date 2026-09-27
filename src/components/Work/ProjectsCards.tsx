import Image from "next/image";
import { PrimaryCTA } from "@/src/components/UXUI";

export interface ProjectsCardProps {
  title: string;
  description: string;
  tags: readonly string[];
  /** Primary preview (e.g. desktop / hero). */
  image: string;
  /** Optional second preview shown beside `image` (e.g. full page / mobile). */
  imageSecondary?: string;
  /** Top gap above the hero preview in dual layout (e.g. `"6%"`). */
  heroPreviewTopInset?: string;
  imageBg: string;
  url?: string;
  visitSiteLabel?: string;
  priority?: boolean;
}

export default function ProjectsCards({
  title,
  description,
  tags,
  image,
  imageSecondary,
  heroPreviewTopInset,
  imageBg,
  url,
  visitSiteLabel = "Visit site",
  priority = false,
}: ProjectsCardProps) {
  const dualPreview = Boolean(imageSecondary);

  return (
    <article className="work-card-frame overflow-hidden rounded-[28px] text-left">
      <div className="relative z-10 flex flex-col gap-5 px-5 pt-4 pb-5 md:grid md:grid-cols-2 md:items-start md:gap-8 md:px-10 md:pt-10 md:pb-10">
        <div
          className={`relative flex w-full overflow-hidden rounded-[20px] md:order-2 ${
            dualPreview
              ? "aspect-16/10 max-h-[42svh] md:max-h-none"
              : "aspect-16/10 max-h-[42svh] items-center justify-center px-5 py-7 md:max-h-none md:px-8 md:py-9"
          }`}
          style={{ backgroundColor: imageBg }}
        >
          {dualPreview && imageSecondary ? (
            <div className="absolute inset-0 flex min-h-0 items-stretch gap-2 px-3 sm:gap-3 sm:px-4 md:gap-4 md:px-6">
              <div className="flex h-full min-h-0 w-[58%] flex-col sm:w-[60%] md:w-[62%]">
                {heroPreviewTopInset ? (
                  <div
                    className="shrink-0"
                    style={{ height: heroPreviewTopInset }}
                    aria-hidden="true"
                  />
                ) : null}
                <div className="flex min-h-0 flex-1 items-end justify-center">
                  <Image
                    src={image}
                    alt=""
                    width={1200}
                    height={900}
                    sizes="(min-width: 768px) 28vw, 52vw"
                    priority={priority}
                    loading={priority ? "eager" : "lazy"}
                    decoding={priority ? "sync" : "async"}
                    className="h-auto max-h-full w-full object-contain object-bottom drop-shadow-[0_18px_40px_rgba(0,0,0,0.35)]"
                  />
                </div>
              </div>
              <div className="relative min-h-0 w-[34%] shrink-0 sm:w-[32%] md:w-[30%]">
                <Image
                  src={imageSecondary}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 14vw, 34vw"
                  priority={priority}
                  loading={priority ? "eager" : "lazy"}
                  decoding={priority ? "sync" : "async"}
                  className="object-contain object-center drop-shadow-[0_18px_40px_rgba(0,0,0,0.35)]"
                />
              </div>
            </div>
          ) : (
            <Image
              src={image}
              alt=""
              width={1400}
              height={900}
              sizes="(min-width: 768px) 40vw, 86vw"
              priority={priority}
              loading={priority ? "eager" : "lazy"}
              decoding={priority ? "sync" : "async"}
              className="h-auto w-[88%] object-contain"
            />
          )}
          {url ? (
            <PrimaryCTA
              href={url}
              target="_blank"
              rel="noreferrer"
              className="absolute right-3 bottom-3 z-10 gap-2 rounded-full"
            >
              {visitSiteLabel}
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M4.5 11.5 11.5 4.5M6 4.5h5.5V10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </PrimaryCTA>
          ) : null}
        </div>

        <div className="md:order-1 md:flex md:min-w-0 md:flex-col">
          <h3 className="text-[24px] leading-tight tracking-tight text-white md:text-[36px]">
            {title}
          </h3>
          <p className="mt-4 hidden max-w-xl text-[15px] leading-relaxed text-white/70 xl:block xl:text-base">
            {description}
          </p>

          <ul className="mt-6 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-white/20 px-3.5 py-1.5 text-sm text-white/80"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
