"use client";

import Link from "next/link";
import { useEffect } from "react";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function GlobalError({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[radial-gradient(circle_at_top,rgba(255,123,109,0.16),transparent_60%),radial-gradient(circle_at_bottom,rgba(122,204,200,0.14),transparent_55%)] px-6 py-16 text-center text-foreground">
      <div className="surface-panel w-full max-w-xl rounded-[32px] border border-subtle bg-surface/90 p-10 shadow-soft">
        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-muted">
          500
        </p>
        <h1 className="mt-4 text-4xl font-semibold">Something glitched</h1>
        <p className="mt-4 text-base text-muted">
          {error?.message || "An unexpected error occurred."}
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <button
            type="button"
            onClick={reset}
            className="rounded-full border border-subtle bg-foreground px-6 py-3 text-sm font-semibold text-background transition hover:bg-foreground/90"
          >
            Try again
          </button>
          <Link
            href="/"
            className="rounded-full border border-subtle px-6 py-3 text-sm font-semibold text-muted transition hover:border-accent hover:text-foreground"
          >
            Return home
          </Link>
        </div>
        {error?.digest ? (
          <p className="mt-4 text-xs uppercase tracking-[0.32em] text-muted">
            Reference: {error.digest}
          </p>
        ) : null}
      </div>
    </div>
  );
}
