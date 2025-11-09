"use client";

import Link from "next/link";
import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

// Renkler (arbitrary values): primary #21CDC0, hover #1BB5A9, text lacivert #213360
const base =
    "relative z-[1] inline-flex items-center justify-center rounded-full font-semibold transition " +
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";
const sizes = {
    sm: "h-9 px-4 text-sm",
    md: "h-11 px-5 text-[15px]",
    lg: "h-12 px-6 text-base",
} as const;
const variants = {
    primary:
        "bg-[#21CDC0] hover:bg-[#1BB5A9] text-white focus-visible:ring-[#BFEEEA]",
    outline:
        "bg-white text-[#213360] border border-[#BFEEEA] hover:bg-[#F5F7FB] focus-visible:ring-[#BFEEEA]",
    ghost:
        "bg-transparent text-[#213360] hover:bg-[#F5F7FB] focus-visible:ring-[#BFEEEA]",
} as const;

type SizeKey = keyof typeof sizes;
type VariantKey = keyof typeof variants;

type CommonProps = {
    size?: SizeKey;
    variant?: VariantKey;
    fullWidth?: boolean;
    className?: string;
    children: React.ReactNode;
};

// <Button> hem <button> hem de <Link> olarak çalışsın:
type ButtonAsButton = CommonProps &
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> & {
        href?: never;
    };

type ButtonAsLink = CommonProps &
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "href"> & {
        href: string;
        target?: string;
        rel?: string;
    };

export default function Button(props: ButtonAsButton | ButtonAsLink) {
    const {
        size = "md",
        variant = "primary",
        fullWidth,
        className,
        children,
        ...rest
    } = props as CommonProps;

    const cls =
        `${base} ${sizes[size]} ${variants[variant]} ${fullWidth ? "w-full" : ""} ` +
        (className ?? "");

    // Link modu
    if ("href" in props && props.href) {
        const { href, ...linkRest } = rest as ButtonAsLink;
        return (
            <Link href={href} className={cls} {...linkRest}>
                {children}
            </Link>
        );
    }

    // Button modu
    const buttonRest = rest as ButtonAsButton;
    return <button className={cls} {...buttonRest}>{children}</button>;
}