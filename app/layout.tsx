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
      </head>
      <body>
        {children}
        {/* ── GHL Calendar Embed Script ── */}
        <Script
          src="https://links.axiomforgearchitects.com/js/embed.js"
          strategy="afterInteractive"
        />

        {/* ── CRM Chat Widget (GoHighLevel) ──────────────────────────────
            TODO: Replace PASTE_WIDGET_ID_HERE with the actual widget ID
            from CRM → Settings → Chat Widget → Get Code
            Then uncomment the two Script tags below.
        <Script id="crm-widget-config" strategy="afterInteractive">
          {`window.hl_chat_widget_id = "PASTE_WIDGET_ID_HERE";`}
        </Script>
        <Script
          src="https://widgets.leadconnectorhq.com/loader.js"
          strategy="afterInteractive"
        />
        ───────────────────────────────────────────────────────────────── */}
      </body>
    </html>
  );
}
