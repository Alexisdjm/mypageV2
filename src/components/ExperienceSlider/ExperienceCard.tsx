import Image from "next/image";

export interface ExperienceCardProps {
  company: string;
  role: string;
  logo?: string;
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

export default function ExperienceCard({ company, role, logo }: ExperienceCardProps) {
  return (
    <article className="flex w-[min(20rem,82vw)] flex-col items-start rounded-[20px] border border-neutral-500 bg-transparent p-[15px] text-left font-sans transition-transform duration-300 ease-out hover:-translate-y-[15px]">
      <CompanyMark company={company} logo={logo} />
      <p className="mt-3 text-[20px] text-white">{company}</p>
      <p className="text-base text-white/70">{role}</p>
    </article>
  );
}
