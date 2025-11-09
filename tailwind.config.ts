// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    primary: "#21CDC0",
                    primaryDark: "#1BB5A9",
                    secondary: "#213360",
                    secondaryDark: "#0E204D",
                    surface: "#F5F7FB",
                    muted: "#848E9F",
                    ring: "#BFEEEA",
                },
            },
        },
    },
    plugins: [],
};
export default config;