import { CheckDarkModeScript, Footer } from "src/widgets/Layout";

import { GeistMono } from "geist/font/mono";

import "@/styles/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <CheckDarkModeScript />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css"
          integrity="sha384-4LISF5TTJX/fLmGSxO53rV4miRxdg84mZsxmO8Rx5jGtp/LbrixFETvWa5a6sESd"
          crossOrigin="anonymous"
        />
      </head>

      <body className="relative dark:bg-dark-bg" style={GeistMono.style}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
