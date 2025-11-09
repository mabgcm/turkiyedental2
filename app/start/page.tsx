// app/start/page.tsx  (SERVER component – no "use client")
import StartForm from "@/components/StartForm";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default function StartPage() {
    return <StartForm />;
}