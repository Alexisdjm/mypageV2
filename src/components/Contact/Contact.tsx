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
      className={`relative z-[4] shrink-0 py-20 text-center ${className}`}
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-3xl px-5 md:px-6">
        <h2
          id="contact-heading"
          className="text-[64px] leading-[1.05] tracking-tight text-white"
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
