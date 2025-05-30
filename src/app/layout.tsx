import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import { FloatingNav } from "../components/ui/FloatingNavbar";
import { navItems } from "../data";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wasel Team | Business Development Powerhouse",
  description:
    "We’re a results-driven business development team that helps companies grow, scale, and dominate through sharp strategy, bold execution, and high-impact partnerships.",
  keywords: [
    "Business development",
    "Strategic growth",
    "Partnerships",
    "Sales enablement",
    "Market expansion",
    "Growth hacking",
    "Wasel Team",
    "B2B strategy",
    "Revenue growth",
    "Startup scaling",
    "Brand positioning",
    "Deal closing",
  ],
  openGraph: {
    title: "Wasel Team | Business Development Powerhouse",
    description:
      "Bold strategy. Real growth. Serious results. We partner with companies to break ceilings and own their markets.",
    url: "https://waselteam.vercel.app/",
    siteName: "Wasel Team",
    images: [
      {
        url: "/p1.jpeg",
        width: 1200,
        height: 630,
        alt: "Wasel Team - Business Development Powerhouse",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wasel Team | Business Development Powerhouse",
    description:
      "We help companies grow fast, close better, and scale smart. No fluff. Just impact.",
    images: ["/p1.jpeg"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo.png" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <FloatingNav navItems={navItems} />

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
