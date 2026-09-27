import Image from "next/image";
import { Card } from "@/src/components/UXUI";

export interface ExperienceCardProps {
  company: string;
  role: string;
  logo?: string;
  url?: string;
  externalLinkHint?: string;
}

function CompanyMark({ company, logo }: Pick<ExperienceCardProps, "company" | "logo">) {
  if (logo) {
    return (
      <Image
        src={logo}
        alt=""
        width={96}
        height={96}
        sizes="48px"
        loading="lazy"
        decoding="async"
        aria-hidden="true"
        className="h-12 w-12 object-contain"
      />
    );
  }

  return (
    <span
      aria-hidden="true"
      className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-sm text-white/70"
    >
      {company[0]}
    </span>
  );
}

export default function ExperienceCard({
  company,
  role,
  logo,
  url,
  externalLinkHint,
}: ExperienceCardProps) {
  const linkLabel =
    url && externalLinkHint ? `${company}, ${role}. ${externalLinkHint}` : undefined;

  return (
    <Card
      href={url}
      target={url ? "_blank" : undefined}
      ariaLabel={linkLabel}
      hover={15}
      className="flex w-[68vw] flex-col items-start rounded-[20px] bg-transparent p-[15px] text-left font-sans md:w-80"
    >
      <CompanyMark company={company} logo={logo} />
      <h3 className="mt-3 whitespace-nowrap text-[18px] text-white md:whitespace-normal md:text-[20px]">
        {company}
      </h3>
      <p className="whitespace-nowrap text-[14px] text-white/70 md:whitespace-normal md:text-base">
        {role}
      </p>
    </Card>
  );
}
