import BlogCard, { type BlogCardProps } from "./BlogCard";

const posts: BlogCardProps[] = [
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
        <section className="bg-brand-surface text-brand-secondary">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-8">
                <div className="space-y-2 text-center md:text-left">
                    <p className="text-xs uppercase tracking-[0.14em] text-brand-muted">Expert Insights</p>
                    <h2 className="text-3xl sm:text-4xl font-bold">Patient Information Center</h2>
                    <p className="text-gray-700">Plan your treatment, travel, healing, and rights with clear, clinic-independent guidance.</p>
                </div>
                <div className="space-y-6">
                    {posts.map((post) => (
                        <BlogCard key={post.title} {...post} />
                    ))}
                </div>
            </div>
        </section>
    );
}
