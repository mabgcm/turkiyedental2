import Link from "next/link";
import BlogCard, { type BlogCardProps } from "./BlogCard";

const posts: BlogCardProps[] = [
    {
        title: "The 2-Visit vs 3-Visit Timelines Guide to All-on-6 Treatment Visits",
        description: "Understand All-on-6 visit timelines, healing phases, and planning considerations for international patients.",
        href: "/blog/all-on-6-visit-timelines",
        date: "Feb 24, 2026",
        tag: "Implants",
        image: "/images/allon6timeline.jpg",
    },
    {
        title: "All-On-4 vs. All-On-6: Which Full Mouth Restoration Is Right for You?",
        description: "Compare All-On-4 and All-On-6 implant restorations, including bone needs, stability, costs, and recovery.",
        href: "/blog/all-on-4-vs-all-on-6",
        date: "Feb 21, 2026",
        tag: "Implants",
        image: "/images/4vs6.png",
    },
    {
        title: "Save Your Teeth or Remove Them All?",
        description: "All-on-4 vs tooth preservation: medical reasons, costs, timelines, and how to choose the right path.",
        href: "/blog/save-your-teeth-or-remove-them-all",
        date: "Feb 19, 2026",
        tag: "Implants",
        image: "/images/saveorremove.png",
    },
    {
        title: "Dental Scams in Turkey: What Happens When You Choose the Wrong Clinic?",
        description: "Understand common scam patterns, red flags, and the real consequences of choosing the wrong dental clinic abroad.",
        href: "/blog/dental-scams-in-turkey-wrong-clinic",
        date: "Feb 01, 2026",
        tag: "Safety",
        image: "/images/scam.jpg",
    },
    {
        title: "Eating With Temporary Teeth After Dental Implants",
        description: "What you can eat, what to avoid, and how to stay comfortable while your implants heal.",
        href: "/blog/eating-with-temporary-teeth-after-dental-implants",
        date: "Jan 18, 2026",
        tag: "Implants",
        image: "/images/eatimplant.png",
    },
    {
        title: "Caught Between Dental Clinics? How to Find Clarity Before You Decide",
        description: "Compare conflicting plans, verify diagnostics, and regain confidence before committing to treatment.",
        href: "/blog/caught-between-dental-clinics",
        date: "Jan 03, 2026",
        tag: "Clarity",
        image: "/images/thornapart.png",
    },
    {
        title: "How Sleep Quality Influences Oral and Dental Health",
        description: "See how sleep affects gums, implants, crowns, and healing—plus practical steps to reduce bruxism, dry mouth, and inflammation.",
        href: "/blog/how-sleep-influences-oral-dental-health",
        date: "Dec 08, 2025",
        tag: "Wellness",
        image: "/images/sleep.jpeg",
    },
    {
        title: "The Free Hotel Dental Scam: What Patients Should Know",
        description: "Spot “free hotel + cheap dental” red flags, and learn how to verify quotes before you travel.",
        href: "/blog/free-hotel-cheap-dental-scam-guide",
        date: "Nov 20, 2025",
        tag: "Safety",
        image: "/images/scam.png",
    },
    {
        title: "Planning your dental trip to Türkiye",
        description: "Align treatment timelines with flights, hotels, and recovery days for a smoother visit.",
        href: "/guides/travel",
        date: "Sep 16, 2025",
        tag: "Travel",
        image: "/images/istanbul-travel.jpeg",
    }
];

export default function BlogSection() {
    return (
        <section className="bg-white text-brand-secondary">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-10">
                <div className="space-y-2 text-center">
                    <p className="text-xs uppercase tracking-[0.14em] text-brand-muted">From the blog</p>
                    <h2 className="text-3xl sm:text-4xl font-bold">Insights for Smarter Dental Choices</h2>
                    <p className="text-gray-700">
                        Educational articles on dental treatments, healing, and travel — grounded in real patient experience.
                    </p>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {posts.slice(0, 3).map((post) => (
                        <BlogCard key={post.title} {...post} />
                    ))}
                </div>
                <div className="flex justify-center">
                    <Link href="/blog" className="text-sm font-semibold text-teal-700 hover:text-teal-800 transition">
                        View all blog posts →
                    </Link>
                </div>
            </div>
        </section>
    );
}
