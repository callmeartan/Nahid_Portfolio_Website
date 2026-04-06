import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#06b6d4",
  colorScheme: "light"
};

export const metadata: Metadata = {
  metadataBase: new URL("https://nahidnasiri.com"),
  title: "Nahid Nasiri — Machine Learning Engineer | LLMs | Multimodal AI | Autonomous Systems",
  description: "Machine Learning Engineer specializing in LLMs, multimodal AI, and computer vision for autonomous systems. Experienced in scalable ML models, RAG-based systems, and data pipelines.",
  keywords: ["Machine Learning Engineer", "LLMs", "Multimodal AI", "Autonomous Systems", "RAG", "Computer Vision", "PyTorch", "TensorFlow", "Hugging Face", "Data Pipelines"],
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
    title: "Nahid Nasiri — Machine Learning Engineer | LLMs | Multimodal AI | Autonomous Systems",
    description: "Machine Learning Engineer specializing in LLMs, multimodal AI, and computer vision for autonomous systems.",
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
    title: "Nahid Nasiri — Machine Learning Engineer | LLMs | Multimodal AI | Autonomous Systems",
    description: "Machine Learning Engineer specializing in LLMs, multimodal AI, and computer vision for autonomous systems.",
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
        <meta name="theme-color" content="#06b6d4" />
      </head>
      <body className="font-sans antialiased">
        <div className="min-h-screen flex flex-col relative">
          {/* Bright background effects with glass-morphism */}
          <div className="fixed inset-0 z-[-1] bg-gradient-to-br from-white via-cyan-50 to-blue-50"></div>
          <div className="fixed inset-0 z-[-1] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[rgba(6,182,212,0.1)] via-transparent to-transparent"></div>
          <div className="fixed inset-0 z-[-1] bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-[rgba(96,165,250,0.08)] via-transparent to-transparent"></div>
          
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
