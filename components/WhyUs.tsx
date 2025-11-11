// components/WhyUs.tsx
import {
    ShieldCheck,
    SearchCheck,
    GraduationCap,
    Globe2,
    Scale,
    HeartHandshake,
    CheckCircle2,
} from "lucide-react";

type Feature = {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    text: string;
};

const FEATURES: Feature[] = [
    {
        icon: ShieldCheck,
        title: "Independent & Unbiased",
        text: "We don’t sell treatments. Our only goal is your long-term oral health.",
    },
    {
        icon: SearchCheck,
        title: "Clear, Transparent Guidance",
        text: "Options, timelines, materials, outcomes—explained without jargon.",
    },
    {
        icon: GraduationCap,
        title: "Expert Case Reviews",
        text: "Experienced clinicians review complex plans with practical insight.",
    },
    {
        icon: Globe2,
        title: "Trusted Global Network",
        text: "Referrals only to vetted clinics that meet quality and safety standards.",
    },
    {
        icon: Scale,
        title: "Cost–Risk Balance",
        text: "Fair comparisons of what’s essential vs. optional for your case.",
    },
    {
        icon: HeartHandshake,
        title: "Support at Every Step",
        text: "From first message to follow-up, we’re on your side throughout.",
    },
];

const BULLETS = [
    "Clinic-independent second opinions",
    "Clear comparisons of viable options",
    "Realistic timelines & after-care",
    "Transparent material / lab info",
    "Referrals only to verified providers",
];

export default function WhyUs() {
    return (
        <section className="relative">
            {/* section backdrop */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_50%_0%,#EAF7FF_0%,#F8FBFF_40%,white_70%)]" />

            <div className="mx-auto max-w-7xl px-4 md:px-6 py-1 md:py-2">
                {/* content */}
                <div className="mt-1 grid gap-8 lg:grid-cols-3">
                    {/* feature grid */}
                    <div className="lg:col-span-2">
                        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
                            {FEATURES.map((f, i) => {
                                const Icon = f.icon;
                                return (
                                    <article
                                        key={i}
                                        className="group rounded-2xl border border-gray-200/80 bg-white p-6 md:p-7 shadow-sm transition hover:-translate-y-0.5 hover:border-[#21CDC0]/50 hover:shadow-md"
                                    >
                                        <div className="flex items-start gap-4">
                                            <span className="grid h-12 w-12 place-content-center rounded-xl bg-[#e9f7ff] text-[#1b76d1] ring-1 ring-inset ring-white/60">
                                                <Icon className="h-6 w-6" />
                                            </span>
                                            <div>
                                                <h3 className="text-[1.25rem] md:text-[1.35rem] font-semibold leading-snug text-[#14233d]">
                                                    {f.title}
                                                </h3>
                                                <p className="mt-2 text-[0.975rem] md:text-base leading-relaxed text-gray-600">
                                                    {f.text}
                                                </p>
                                            </div>
                                        </div>
                                    </article>
                                );
                            })}
                        </div>
                    </div>

                    {/* side panel */}
                    <aside className="lg:pl-2">
                        <div className="sticky top-20 rounded-2xl border border-[#cfeef0] bg-gradient-to-b from-white to-[#f7fffe] p-7 md:p-8 shadow-sm">
                            <h4 className="text-2xl md:text-3xl font-bold text-[#14233d]">
                                What This Means for You
                            </h4>
                            <ul className="mt-5 space-y-3">
                                {BULLETS.map((b, i) => (
                                    <li key={i} className="flex items-start gap-3 text-[0.975rem] md:text-base text-slate-700">
                                        <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#21CDC0]" />
                                        <span>{b}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-6 h-[3px] w-28 rounded-full bg-gradient-to-r from-[#3FB8FF] to-[#21CDC0]" />

                            <p className="mt-4 text-sm text-slate-500">
                                We educate first—so you can choose confidently.
                            </p>

                            <a
                                href="/start?from=/#why-us"
                                className="mt-6 inline-flex items-center justify-center rounded-full bg-[#21CDC0] px-5 py-3 font-semibold text-white shadow hover:bg-[#1bb5a9] transition"
                            >
                                Get a Second Opinion
                            </a>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    );
}