import Footer from "@/components/Footer";
import "@/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import { Header } from "@/components/Header";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.1/font/bootstrap-icons.css"
        />

        <meta
          name="google-site-verification"
          content="SWzdnKcr1a_u4qCWr_61fw6PxQf4NZkXWHl1aDrwaeg"
        />

        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="background">
        <Header />
        <main className="min-h-screen" style={GeistSans.style}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

// if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
//   document.documentElement.classList.add('dark');
// } else {
//   document.documentElement.classList.remove('dark')
// }
