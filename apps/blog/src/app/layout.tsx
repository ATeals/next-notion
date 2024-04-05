import { Footer } from "src/widgets/Layout";

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
      </head>

      <body
        className="relative bg-white dark:bg-dark-bg dark:text-gray-200"
        style={GeistMono.style}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
