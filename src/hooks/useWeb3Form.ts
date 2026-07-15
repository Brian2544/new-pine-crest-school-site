"use client";

import { useCallback, useRef, useState } from "react";
import {
  submitWeb3Form,
  type SubmitWeb3FormOptions,
  type Web3FormResult,
} from "@/lib/web3forms";
import { FORM_ERROR_MESSAGE } from "@/config/forms";

export type FormSubmitStatus = "idle" | "success" | "error";

/**
 * Shared client hook for Web3Forms submissions.
 * Provides loading state, duplicate-submit prevention, and status messaging.
 */
export function useWeb3Form() {
  const [status, setStatus] = useState<FormSubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState(FORM_ERROR_MESSAGE);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const inFlightRef = useRef(false);

  const resetStatus = useCallback(() => {
    setStatus("idle");
    setErrorMessage(FORM_ERROR_MESSAGE);
  }, []);

  const submit = useCallback(async (options: SubmitWeb3FormOptions): Promise<Web3FormResult> => {
    // Prevent duplicate submissions (double-click / rapid retry)
    if (inFlightRef.current) {
      return { ok: false, error: FORM_ERROR_MESSAGE };
    }

    inFlightRef.current = true;
    setIsSubmitting(true);
    setStatus("idle");
    setErrorMessage(FORM_ERROR_MESSAGE);

    try {
      const result = await submitWeb3Form(options);

      if (result.ok) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(result.error || FORM_ERROR_MESSAGE);
      }

      return result;
    } finally {
      inFlightRef.current = false;
      setIsSubmitting(false);
    }
  }, []);

  return {
    status,
    errorMessage,
    isSubmitting,
    submit,
    resetStatus,
    setStatus,
  };
}
