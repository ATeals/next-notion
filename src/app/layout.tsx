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
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Header />
        <main className="min-h-screen" style={GeistSans.style}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
