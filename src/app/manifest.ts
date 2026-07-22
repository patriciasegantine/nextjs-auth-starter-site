import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Auth Starter",
    short_name: "Auth Starter",
    description: "A reusable Next.js authentication foundation for faster product starts.",
    start_url: "/",
    display: "standalone",
    background_color: "#f7f7f5",
    theme_color: "#171714",
    icons: [
      {
        src: "/auth-starter-logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
