import { LiveDemoLink } from "@/components/live-demo-link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TEMPLATE_REPOSITORY_URL } from "@/lib/links";

const features = [
  "Email and password authentication",
  "Optional Google sign-in",
  "PostgreSQL with Prisma",
  "Protected server-rendered routes",
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader currentPage="home" />
      <main className="flex flex-1 px-6 sm:px-10">
        <section className="mx-auto grid w-full max-w-6xl flex-1 items-center gap-16 py-14 lg:grid-cols-[1.2fr_0.8fr] lg:py-16">
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
              <LiveDemoLink
                label="Try the live demo"
                className="cursor-pointer rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-black/80"
              />
              <a
                href={TEMPLATE_REPOSITORY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer rounded-full border border-black/15 bg-white px-6 py-3 text-sm font-semibold transition hover:border-black/35"
              >
                View repository
              </a>
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
      <SiteFooter />
    </div>
  );
}
