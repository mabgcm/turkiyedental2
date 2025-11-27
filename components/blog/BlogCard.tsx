import Link from "next/link";

export type BlogCardProps = {
    title: string;
    description: string;
    href: string;
    date?: string;
    tag?: string;
    image: string;
};

export default function BlogCard({ title, description, href, date, tag, image }: BlogCardProps) {
    return (
        <article className="flex flex-col lg:flex-row gap-4 lg:gap-6 bg-white border border-gray-200 rounded-3xl p-4 lg:p-5 shadow-sm">
            <div className="w-full lg:w-64 h-56 rounded-2xl overflow-hidden bg-brand-surface flex-shrink-0">
                <Link href={href} className="block h-full w-full">
                    <img src={image} alt={title} className="h-full w-full object-cover" loading="lazy" />
                </Link>
            </div>
            <div className="flex-1 space-y-3 text-brand-secondary">
                <div className="flex items-center gap-3 text-xs text-gray-500">
                    {date && <span>{date}</span>}
                    {tag && (
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-brand-surface text-brand-secondary border border-gray-200">
                            {tag}
                        </span>
                    )}
                </div>
                <Link href={href} className="text-lg lg:text-xl font-semibold text-brand-secondary hover:text-teal-700 transition">
                    {title}
                </Link>
                <p className="text-sm text-gray-700 leading-relaxed">{description}</p>
            </div>
        </article>
    );
}
