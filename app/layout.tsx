// app/layout.tsx
import type { Metadata } from "next";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import { Suspense } from "react";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next"
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "TürkiyeDental",
  description: "Independent guidance & second opinions",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className="bg-white text-[#213360]">

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
