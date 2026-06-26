import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Field Force Pro — Field Service Software for the Trades",
  description: "Your data. Your server. Your business. Field service management software built for home service contractors — without the enterprise price tag.",
  icons: {
    icon: "/logo-icon.png",
    apple: "/logo-icon.png",
  },
  openGraph: {
    title: "Field Force Pro",
    description: "Field service software built for the trades.",
    url: "https://myfieldforcepro.com",
    siteName: "Field Force Pro",
    images: ["/logo-icon.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-EWNLBQSQCR"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-EWNLBQSQCR');
        `}</Script>
      </head>
      <body>
        {children}
        {/* ── GHL Calendar Embed Script ── */}
        <Script
          src="https://links.axiomforgearchitects.com/js/embed.js"
          strategy="afterInteractive"
        />

        {/* ── GHL Chat Widget ── */}
        <Script
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="6a33099b0e84ef9ef9957bfe"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
