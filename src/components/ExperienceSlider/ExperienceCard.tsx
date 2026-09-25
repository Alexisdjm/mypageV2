import Image from "next/image";
import { Card } from "@/src/components/UXUI";

export interface ExperienceCardProps {
  company: string;
  role: string;
  logo?: string;
  url?: string;
}

function CompanyMark({ company, logo }: Pick<ExperienceCardProps, "company" | "logo">) {
  if (logo) {
    return (
      <Image
        src={logo}
        alt=""
        width={96}
        height={96}
        className="h-12 w-12 object-contain"
      />
    );
  }

  return (
    <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-sm text-white/70">
      {company[0]}
    </span>
  );
}

export default function ExperienceCard({ company, role, logo, url }: ExperienceCardProps) {
  return (
    <Card
      href={url}
      target={url ? "_blank" : undefined}
      ariaLabel={url ? `${company} website` : undefined}
      hover={15}
      className="flex w-[68vw] flex-col items-start rounded-[20px] bg-transparent p-[15px] text-left font-sans md:w-80"
    >
      <CompanyMark company={company} logo={logo} />
      <p className="mt-3 whitespace-nowrap text-[18px] text-white md:whitespace-normal md:text-[20px]">
        {company}
      </p>
      <p className="whitespace-nowrap text-[14px] text-white/70 md:whitespace-normal md:text-base">
        {role}
      </p>
    </Card>
  );
}
