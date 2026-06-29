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
        <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-KLXZNT9D');` }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <script dangerouslySetInnerHTML={{ __html: `function initApollo(){var n=Math.random().toString(36).substring(7),o=document.createElement("script");o.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+n,o.async=!0,o.defer=!0,o.onload=function(){window.trackingFunctions.onLoad({appId:"6a40a37b00cb4d0010f7f77f"})},document.head.appendChild(o)}initApollo();` }} />
      </head>
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
      <body>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KLXZNT9D" height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe></noscript>
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
