import { Footer } from "src/widgets/Layout";
import { GeistMono } from "geist/font/mono";
import { metadata } from "./metadata";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "@/styles/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function() {
              if (localStorage.getItem('isDarkMode') === 'true' || (!('isDarkMode' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
              } else {
                  document.documentElement.classList.remove('dark');
              }
            })()`,
          }}
        ></script>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css"
          integrity="sha384-4LISF5TTJX/fLmGSxO53rV4miRxdg84mZsxmO8Rx5jGtp/LbrixFETvWa5a6sESd"
          crossOrigin="anonymous"
        />

        <meta
          name="google-site-verification"
          content="SWzdnKcr1a_u4qCWr_61fw6PxQf4NZkXWHl1aDrwaeg"
        />

        <link rel="alternate" type="application/rss+xml" href="/feed/rss" title="RSS" />
        <link rel="alternate" type="application/atom+xml" href="/feed/atom" title="RSS Atom" />
        <link rel="alternate" type="application/json" href="/feed/json" title="JSON Feed" />
      </head>

      <body
        className="h-full relative bg-white dark:bg-dark-bg dark:text-gray-200"
        style={GeistMono.style}
      >
        {children}
        <Footer />

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

export { metadata };
