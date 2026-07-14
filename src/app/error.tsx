"use client";

import { useEffect } from "react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Keep details out of the UI while still reporting unexpected failures.
    console.error(error);
  }, [error]);

  return (
    <section className="mx-auto flex min-h-[55vh] max-w-3xl flex-col items-center justify-center px-4 py-16 text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-amber-600">
        Something went wrong
      </p>
      <h1 className="mt-3 font-serif text-4xl font-bold text-green-950">
        We couldn&apos;t load this page
      </h1>
      <p className="mt-4 max-w-xl text-slate-600">
        Please try again. If the problem continues, contact Pine Crest School for assistance.
      </p>
      <button
        type="button"
        onClick={reset}
        className="mt-8 rounded-full bg-green-800 px-7 py-3 font-semibold text-white transition hover:bg-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-700 focus-visible:ring-offset-2"
      >
        Try again
      </button>
    </section>
  );
}
