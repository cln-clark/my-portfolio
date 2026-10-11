import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/content/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const themeScript = `(function(){var d=document.documentElement;try{d.dataset.theme=localStorage.getItem("theme")==="light"?"light":"dark"}catch(e){d.dataset.theme="dark"}d.classList.add("js")})();`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Clark Louise Navales — Software Engineer",
    template: "%s — Clark Louise Navales",
  },
  description: site.description,
  openGraph: {
    type: "website",
    url: "/",
    siteName: site.name,
    title: "Clark Louise Navales — Software Engineer",
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Clark Louise Navales — Software Engineer",
    description: site.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0c0e",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-accent-ink"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
