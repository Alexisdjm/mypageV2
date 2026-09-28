"use client";

import { useLocale } from "@/src/i18n/LocaleProvider";
import Form from "./Form";

export interface ContactProps {
  className?: string;
}

export default function Contact({ className = "" }: ContactProps) {
  const { messages } = useLocale();
  const { contact } = messages;

  return (
    <section
      id="contact"
      className={`relative z-[4] max-w-full shrink-0 overflow-x-clip py-20 text-center ${className}`}
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto min-w-0 max-w-3xl px-5 md:px-6">
        <h2
          id="contact-heading"
          className="mx-auto max-w-full text-[clamp(1.875rem,9vw,4rem)] leading-[1.08] tracking-tight text-balance text-white"
        >
          <span className="block">{contact.headingLine1}</span>
          <span className="block">{contact.headingLine2}</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/70">
          {contact.subtitle}
        </p>

        <div className="mt-10 md:mt-12">
          <Form />
        </div>
      </div>
    </section>
  );
}
