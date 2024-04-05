import { BLOG_CONFIG, SITE_CONFIG } from "@/config";

export const metadata = {
  metadataBase: SITE_CONFIG.url,
  title: "Teals",
  description: "Teal의 개발 블로그",
  canonical: "https://www.carrotins.com",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: SITE_CONFIG.url,
    title: "Teal's Log",
    site_name: "Teal's Log",
    images: [
      {
        url: SITE_CONFIG.url + BLOG_CONFIG.MAIN_JPG,
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
