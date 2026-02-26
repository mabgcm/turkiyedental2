// app/layout.tsx
import type { Metadata } from "next";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import { Suspense } from "react";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "TürkiyeDental",
  description: "Independent guidance & second opinions",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1272255821542137');
fbq('track', 'PageView');`}
        </Script>
      </head>
      <body suppressHydrationWarning className="bg-white text-[#213360]">
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1272255821542137&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        <Suspense fallback={null}>
        </Suspense>
        <Suspense fallback={null}>
          <Navbar />
        </Suspense>
        <div className="pt-20 sm:pt-20">{children}</div>
        <Footer />
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  );
}
