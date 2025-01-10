import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        charcoal: "#08090A",
        lightblack: "#1C1C1C",
        // secondary: "var(--secondary)",
        secondary: "#E6E6E6",
        muted: "var(--neutral-200)",
        background: "var(--background-primary)",
        backgroundSecondary: "var(--background-secondary)",
        textPrimary: "var(--text-primary)",
      },
    },
  },
  plugins: [],
} satisfies Config;
