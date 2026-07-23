export function SiteFooter() {
  return (
    <footer className="border-t border-black/[0.06] px-6 py-8 sm:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-black/45 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Auth Starter. Build the product, not the login.</p>
        <p>
          Created by{" "}
          <a
            href="https://patriciasegantine.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-black/60 transition hover:text-black"
          >
            Patricia Segantine
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
