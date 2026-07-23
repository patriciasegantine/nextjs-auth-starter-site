import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TEMPLATE_REPOSITORY_URL } from "@/lib/links";

export const metadata: Metadata = {
  title: "Documentation",
  description: "Auth Starter documentation is currently being prepared.",
};

export default function DocumentationPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader currentPage="docs" />
      <main className="flex flex-1 items-center px-6 py-16 sm:px-10">
        <section className="mx-auto w-full max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-emerald-700">
            Documentation
          </p>
          <h1 className="mt-5 text-4xl font-semibold tracking-[-0.045em] sm:text-6xl">
            The documentation is on the way.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-black/60">
            We are validating the starter end to end before publishing the
            setup and customization guides. This page will be available soon.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link
              href="/"
              className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-black/80"
            >
              Back to home
            </Link>
            <a
              href={TEMPLATE_REPOSITORY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-black/15 bg-white px-6 py-3 text-sm font-semibold transition hover:border-black/35"
            >
              View template
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
