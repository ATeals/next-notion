import Footer from "@/feature/common/components/Footer";
import "@/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import { Header } from "@/feature/common/components/Header/Header";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { siteConfig } from "@/config";
import { DOMAIN_URL, MAIN_JPG } from "@/constants";

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.1/font/bootstrap-icons.css"
        />

        <meta
          name="google-site-verification"
          content="SWzdnKcr1a_u4qCWr_61fw6PxQf4NZkXWHl1aDrwaeg"
        />

        <link rel="icon" href="/favicon.ico" />

        <link rel="alternate" type="application/rss+xml" href="/feed/rss" title="RSS" />
        <link rel="alternate" type="application/atom+xml" href="/feed/atom" title="RSS Atom" />
        <link rel="alternate" type="application/json" href="/feed/json" title="JSON Feed" />
      </head>
      <body className="background">
        <Header />
        <main className="min-h-screen" style={GeistSans.style}>
          {children}
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

export const metadata = {
  metadataBase: siteConfig.url,
  title: "Teals",
  description: "Teal의 개발 블로그",
  canonical: "https://www.carrotins.com",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: DOMAIN_URL,
    title: "Teal's Log",
    site_name: "Teal's Log",
    images: [
      {
        url: DOMAIN_URL + MAIN_JPG,
        width: 1200,
        height: 630,
        alt: "og: 이미지",
      },
    ],
  },
  twitter: {
    handle: "@handle",
    site: "@site",
    cardType: "summary_large_image",
  },
};
