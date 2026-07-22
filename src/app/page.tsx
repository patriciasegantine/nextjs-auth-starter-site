"use client";

import Link from "next/link";
import Image from "next/image";

const features = [
  "Email and password authentication",
  "Optional Google sign-in",
  "PostgreSQL with Prisma",
  "Protected server-rendered routes",
];

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-8 sm:px-10">
      <nav className="mx-auto flex max-w-6xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <Image src="/auth-starter-logo.png" alt="" width={28} height={28} priority />
          <span>Auth Starter</span>
        </Link>
        <button
          type="button"
          onClick={() => window.alert("Documentation is coming soon.")}
          className="cursor-pointer px-2 py-2 text-sm font-medium text-black/55 transition hover:text-black"
        >
          Documentation
        </button>
      </nav>

      <section className="mx-auto grid min-h-[calc(100vh-7rem)] max-w-6xl items-center gap-16 py-20 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.22em] text-black/50">
            Build the product, not the login
          </p>
          <h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] tracking-[-0.055em] sm:text-7xl">
            A clean start for your next authenticated app.
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-black/60">
            Current stable tools, sensible security defaults, and one example
            route ready for your product code.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => window.alert("The live demo is coming soon.")}
              className="cursor-pointer rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-black/80"
            >
              Try the live demo
            </button>
            <button
              type="button"
              onClick={() => window.alert("The template repository is coming soon.")}
              className="cursor-pointer rounded-full border border-black/15 bg-white px-6 py-3 text-sm font-semibold transition hover:border-black/35"
            >
              View repository
            </button>
          </div>
        </div>

        <div className="rounded-[2rem] border border-black/10 bg-white p-7 shadow-[0_24px_80px_rgba(0,0,0,0.08)] sm:p-9">
          <p className="text-sm font-semibold">Included</p>
          <ul className="mt-6 space-y-5">
            {features.map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-sm text-black/65">
                <span className="grid size-6 place-items-center rounded-full bg-emerald-100 text-xs text-emerald-800">
                  ✓
                </span>
                {feature}
              </li>
            ))}
          </ul>
          <div className="mt-8 rounded-2xl bg-black p-5 font-mono text-xs leading-6 text-white/70">
            <p><span className="text-emerald-300">$</span> npm install</p>
            <p><span className="text-emerald-300">$</span> npm run db:migrate</p>
            <p><span className="text-emerald-300">$</span> npm run dev</p>
          </div>
        </div>
      </section>
    </main>
  );
}
