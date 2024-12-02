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
        background: "var(--background)",
        primaryBlack: "var(--primary-black)",
        primaryBlue: "var(--primary-blue)",
        primaryGray: "var(--primary-gray)",
        secondaryGray: "var(--secondary-gray)",
        secondaryGreen: "var(--secondary-green)",
        secondaryPurple: "var(--secondary-purple)",
        secondaryWhite: "var(--secondary-white)",
        accentGreen: "var(--accent-green)",
        accentPeach: "var(--accent-peach)",
        accentViolet: "var(--accent-violet)",
        accentBorder: "var(--accent-border)",
      },
    },
  },
  plugins: [],
} satisfies Config;
