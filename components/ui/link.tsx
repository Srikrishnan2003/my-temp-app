"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface LinkComponentProps {
    href?: string;
    children?: string;
    target?: "_self" | "_blank" | "_parent" | "_top";
    className?: string;
    rel?: string;
    [key: string]: any;
}

export function LinkComponent({
    href = "#",
    children = "Link",
    target = "_self",
    className = "",
    rel,
    ...props
}: LinkComponentProps) {
    // Auto-add rel="noopener noreferrer" for external links
    const finalRel = target === "_blank" && !rel ? "noopener noreferrer" : rel;

    return (
        <Link
            href={href}
            target={target}
            rel={finalRel}
            className={cn(
                "text-blue-600 hover:text-blue-800 underline hover:no-underline transition-colors",
                className
            )}
            {...props}
        >
            {children}
        </Link>
    );
}
