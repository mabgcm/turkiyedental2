// mdx-components.tsx
import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import Link from "next/link";

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        // MDX’te <img> yerine otomatik Next <Image> kullanmak için:
        img: (props) => (
            <Image
                {...props}
                alt={props.alt ?? ""}
                width={props.width ? Number(props.width) : 1200}
                height={props.height ? Number(props.height) : 675}
                style={{ height: "auto", width: "100%" }}
            />
        ),
        a: (props) => <Link {...props} />,
        ...components,
    };
}
