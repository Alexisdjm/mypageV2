"use client";

import { Send } from "lucide-react";
import { type ChangeEvent, type FormEvent, useId, useRef, useState } from "react";
import FormFieldShell from "@/src/components/Contact/FormFieldShell";
import { useCursorLight } from "@/src/components/Slider/useCursorLight";
import PrimaryCTA from "@/src/components/UXUI/PrimaryCTA/PrimaryCTA";
import { contactProjectTypes } from "@/src/config/contact";
import { useContactSubmit, type ContactFormValues } from "@/src/hooks/useContactSubmit";

const EMPTY_FORM: ContactFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  projectType: "",
  message: "",
};

const fieldBg =
  "rounded-[10px] border border-transparent bg-gradient-to-r from-[#141414] to-[#020202] px-4 text-base text-white outline-none placeholder:text-white/45";

const singleLineClass = `relative z-0 block h-11 w-full ${fieldBg}`;
const multiLineClass = `relative z-0 block min-h-[180px] w-full resize-y py-3 ${fieldBg}`;

export default function Form() {
  const formRef = useRef<HTMLFormElement>(null);
  useCursorLight(formRef);

  const projectTypeId = useId();
  const { submit, isSubmitting, status, errorMessage, reset } = useContactSubmit();
  const [values, setValues] = useState<ContactFormValues>(EMPTY_FORM);

  const update =
    (key: keyof ContactFormValues) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setValues((prev) => ({ ...prev, [key]: event.target.value }));
      if (status !== "idle") reset();
    };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const ok = await submit(values);
    if (ok) setValues(EMPTY_FORM);
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="flex flex-col gap-6 text-left"
      noValidate
    >
      <div className="flex flex-col gap-6 md:flex-row">
        <label className="flex flex-1 flex-col">
          <span className="sr-only">First name</span>
          <FormFieldShell>
            <input
              type="text"
              name="firstName"
              autoComplete="given-name"
              placeholder="First Name"
              required
              value={values.firstName}
              onChange={update("firstName")}
              className={singleLineClass}
            />
          </FormFieldShell>
        </label>
        <label className="flex flex-1 flex-col">
          <span className="sr-only">Last name</span>
          <FormFieldShell>
            <input
              type="text"
              name="lastName"
              autoComplete="family-name"
              placeholder="Last Name"
              required
              value={values.lastName}
              onChange={update("lastName")}
              className={singleLineClass}
            />
          </FormFieldShell>
        </label>
      </div>

      <label className="flex flex-col">
        <span className="sr-only">Email address</span>
        <FormFieldShell>
          <input
            type="email"
            name="email"
            autoComplete="email"
            placeholder="Email Address"
            required
            value={values.email}
            onChange={update("email")}
            className={singleLineClass}
          />
        </FormFieldShell>
      </label>

      <FormFieldShell>
        <label htmlFor={projectTypeId} className="sr-only">
          Project type
        </label>
        <select
          id={projectTypeId}
          name="projectType"
          required
          value={values.projectType}
          onChange={update("projectType")}
          className={`${singleLineClass} appearance-none pr-10 ${values.projectType ? "" : "text-white/45"}`}
        >
          <option value="" disabled hidden>
            Project Type
          </option>
          {contactProjectTypes.map((type) => (
            <option key={type} value={type} className="bg-[#141414] text-white">
              {type}
            </option>
          ))}
        </select>
        <span
          className="pointer-events-none absolute inset-y-0 right-4 z-2 flex items-center text-white/70"
          aria-hidden="true"
        >
          ▾
        </span>
      </FormFieldShell>

      <label className="flex flex-col">
        <span className="sr-only">Message</span>
        <FormFieldShell>
          <textarea
            name="message"
            placeholder="Message"
            required
            rows={6}
            value={values.message}
            onChange={update("message")}
            className={multiLineClass}
          />
        </FormFieldShell>
      </label>

      {status === "success" ? (
        <p className="text-sm text-emerald-400" role="status">
          Thanks — your message was sent successfully.
        </p>
      ) : null}

      {errorMessage ? (
        <p className="text-sm text-red-400" role="alert">
          {errorMessage}
        </p>
      ) : null}

      <div className="flex justify-end">
        <PrimaryCTA
          type="submit"
          disabled={isSubmitting}
          className="h-11 w-full gap-2 rounded-[10%] px-5 md:w-50 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <Send className="size-4 shrink-0" aria-hidden="true" />
          {isSubmitting ? "Sending…" : "Send"}
        </PrimaryCTA>
      </div>
    </form>
  );
}
