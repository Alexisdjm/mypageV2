"use client";

import { useCallback, useState } from "react";

export interface ContactFormValues {
  firstName: string;
  lastName: string;
  email: string;
  projectType: string;
  message: string;
}

export type ContactSubmitStatus = "idle" | "loading" | "success" | "error";

export type ContactSubmitErrorCopy = {
  generic: string;
  network: string;
};

export function useContactSubmit() {
  const [status, setStatus] = useState<ContactSubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const reset = useCallback(() => {
    setStatus("idle");
    setErrorMessage(null);
  }, []);

  const submit = useCallback(async (values: ContactFormValues, errors?: ContactSubmitErrorCopy) => {
    setStatus("loading");
    setErrorMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = (await response.json().catch(() => null)) as { error?: string } | null;

      if (!response.ok) {
        setStatus("error");
        setErrorMessage(data?.error ?? errors?.generic ?? "Something went wrong. Please try again.");
        return false;
      }

      setStatus("success");
      return true;
    } catch {
      setStatus("error");
      setErrorMessage(errors?.network ?? "Network error. Check your connection and try again.");
      return false;
    }
  }, []);

  return {
    submit,
    status,
    isSubmitting: status === "loading",
    errorMessage,
    reset,
  };
}
