"use client";

import { useState } from "react";
import { LIVE_DEMO_URL } from "@/lib/links";

type LiveDemoLinkProps = {
  className: string;
  label: string;
};

export function LiveDemoLink({ className, label }: LiveDemoLinkProps) {
  const [isOpening, setIsOpening] = useState(false);

  const handleClick = () => {
    setIsOpening(true);
    window.setTimeout(() => setIsOpening(false), 1800);
  };

  return (
    <a
      href={LIVE_DEMO_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={className}
      aria-label={`${label} (opens in a new tab)`}
    >
      <span aria-live="polite">
        {isOpening ? "Opening live demo…" : label}
      </span>
    </a>
  );
}
