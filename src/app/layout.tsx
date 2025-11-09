import type { Metadata, Viewport } from "next";
import { Inter, Outfit, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-secondary",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#f0f0f0",
  colorScheme: "dark"
};

export const metadata: Metadata = {
  metadataBase: new URL("https://nahidnasiri.com"),
  title: "Nahid Nasiri | Machine Learning Engineer & AI Systems Expert",
  description: "Machine Learning Engineer specializing in AI systems, Generative AI, and intelligent automation. PhD researcher building production-grade ML pipelines, computer vision systems, and large language models.",
  keywords: ["Machine Learning Engineer", "AI Systems", "Generative AI", "LLM", "Deep Learning", "Computer Vision", "MLOps", "Portfolio", "PhD Researcher", "Hire ML Engineer", "Hire AI Engineer"],
  creator: "Nahid Nasiri",
  authors: [{ name: "Nahid Nasiri", url: "https://nahidnasiri.com" }],
  generator: "Next.js",
  applicationName: "Nahid Nasiri Portfolio",
  referrer: "origin-when-cross-origin",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon-16x16.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nahidnasiri.com",
    title: "Nahid Nasiri | Machine Learning Engineer & AI Systems Expert",
    description: "Machine Learning Engineer and PhD researcher building production-grade AI systems across computer vision, large language models, and intelligent automation.",
    siteName: "Nahid Nasiri Portfolio",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nahid Nasiri - Machine Learning Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nahid Nasiri | Machine Learning Engineer & AI Systems Expert",
    description: "Machine Learning Engineer and PhD researcher building production-grade AI systems across computer vision, large language models, and intelligent automation.",
    creator: "@nahidnasiri",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#f0f0f0" />
      </head>
      <body className={`${inter.variable} ${outfit.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        <div className="min-h-screen flex flex-col relative">
          {/* Background effects */}
          <div className="fixed inset-0 z-[-1] bg-gradient-to-b from-background via-background to-[#111116] opacity-80"></div>
          <div className="fixed inset-0 z-[-1] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[rgba(var(--accent-rgb),0.08)] via-transparent to-transparent"></div>
          <div className="fixed inset-0 z-[-1] bg-[url('/grid.svg')] bg-repeat opacity-[0.015]"></div>
          
          {children}
        </div>
        
        {/* Analytics script - only add if needed */}
        {/* <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script> */}
      </body>
    </html>
  );
}
