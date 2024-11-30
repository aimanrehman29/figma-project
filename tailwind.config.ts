import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        csspink:"#ff7e7e",
        recentBackground:"#f9e1e1",
        footerBackground:"#fbf5f5",
        heroBg: "#AA9F9F4F",
        cssblack:"#21243D",
        background: "#f7f1f1",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
