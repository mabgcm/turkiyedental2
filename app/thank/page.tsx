// app/thank/page.tsx  (SERVER component — no "use client" here)
import ThankView from "@/components/ThankView";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default function ThankPage() {
    return <ThankView />;
}