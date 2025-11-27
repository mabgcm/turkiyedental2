import BlogCard, { type BlogCardProps } from "./BlogCard";

const posts: BlogCardProps[] = [
    {
        title: "Planning your dental trip to Türkiye",
        description: "Align treatment timelines with flights, hotels, and recovery days for a smoother visit.",
        href: "/guides/travel",
        date: "Mar 16, 2024",
        tag: "Travel",
        image: "/images/istanbul-travel.jpeg",
    },
    {
        title: "Healing timelines by treatment type",
        description: "Stay lengths and healing expectations for veneers, crowns, implants, and full-mouth cases.",
        href: "/guides/timeline",
        date: "Feb 28, 2024",
        tag: "Healing",
        image: "/images/allon4.jpeg",
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
