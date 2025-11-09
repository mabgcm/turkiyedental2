// app/layout.tsx
import type { Metadata } from "next";
import "@/styles/globals.css";
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "TürkiyeDental",
  description: "Independent guidance & second opinions",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className="bg-white text-[#213360]">
        <Suspense fallback={null}>
          <Topbar />
        </Suspense>
        <Suspense fallback={null}>
          <Navbar />
        </Suspense>
        <div className="pt-16 sm:pt-28">{children}</div>
      </body>
    </html>
  );
}