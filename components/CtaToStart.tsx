// components/CtaToStart.tsx
"use client";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

export default function CtaToStart({
    children = "Get Free Second Opinion",
    className = "inline-block px-6 py-3 bg-[#3FB8FF] text-white font-semibold rounded-full hover:bg-[#2EA3E0] transition-all shadow-md",
}) {
    const pathname = usePathname();
    const search = useSearchParams();
    const current = pathname + (search?.toString() ? `?${search}` : "");
    const href = `/start?from=${encodeURIComponent(current)}`;
    return <Link href={href} className={className}>{children}</Link>;
}