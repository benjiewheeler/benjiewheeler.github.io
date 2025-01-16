import { type Config } from "tailwindcss";

const config: Config = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            fontFamily: {
                cairo: ["Cairo", "sans-serif"],
            },
        },
    },
    plugins: [],
};

export default config;
