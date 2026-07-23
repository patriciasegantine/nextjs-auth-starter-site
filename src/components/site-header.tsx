import Image from "next/image";
import Link from "next/link";
import { LiveDemoLink } from "@/components/live-demo-link";
import { TEMPLATE_REPOSITORY_URL } from "@/lib/links";

type SiteHeaderProps = {
  currentPage: "home" | "docs";
};

export function SiteHeader({ currentPage }: SiteHeaderProps) {
  const navLink =
    "rounded-full px-3 py-2 text-sm font-medium transition hover:bg-white hover:text-black";
  const activeNavLink = "bg-white text-black shadow-[0_1px_0_rgba(0,0,0,0.05)]";
  const inactiveNavLink = "text-black/55";

  return (
    <header className="sticky top-0 z-20 border-b border-black/[0.06] bg-[#f7f7f5]/90 px-6 backdrop-blur-xl sm:px-10">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 font-semibold tracking-tight">
          <Image
            src="/auth-starter-logo.png"
            alt=""
            width={26}
            height={26}
            priority
          />
          <span>Auth Starter</span>
        </Link>

        <nav className="flex items-center gap-1" aria-label="Main navigation">
          <Link
            href="/"
            aria-current={currentPage === "home" ? "page" : undefined}
            className={`${navLink} hidden sm:block ${
              currentPage === "home" ? activeNavLink : inactiveNavLink
            }`}
          >
            Home
          </Link>
          <Link
            href="/docs"
            aria-current={currentPage === "docs" ? "page" : undefined}
            className={`${navLink} ${
              currentPage === "docs" ? activeNavLink : inactiveNavLink
            }`}
          >
            Documentation
          </Link>
          <LiveDemoLink
            label="Live demo"
            className={`${navLink} hidden text-black/55 hover:text-black md:block`}
          />
          <a
            href={TEMPLATE_REPOSITORY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 hidden rounded-full bg-black px-4 py-2 text-sm font-semibold text-white transition hover:bg-black/80 sm:block"
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}
