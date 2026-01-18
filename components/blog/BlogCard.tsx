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
        <article className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-slate-100 shadow-sm">
            <Link href={href} className="block h-full w-full">
                <div className="relative h-72 w-full">
                    <img
                        src={image}
                        alt={title}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/10 to-transparent" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                    <div className="flex items-center gap-3 text-xs text-white/80">
                        {date && <span>{date}</span>}
                        {tag && (
                            <span className="inline-flex items-center gap-2">
                                <span className="h-1 w-1 rounded-full bg-white/70" />
                                <span>{tag}</span>
                            </span>
                        )}
                    </div>
                    <h3 className="mt-2 text-lg font-semibold leading-snug">{title}</h3>
                    <p className="sr-only">{description}</p>
                </div>
            </Link>
        </article>
    );
}
