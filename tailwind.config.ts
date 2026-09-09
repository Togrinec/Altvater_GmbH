import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          900: "#1a1a1a",
          800: "#2C2C2C",
          700: "#404040",
        },
        accent: {
          700: "#1a3f78",
          600: "#1E4D8C",
          500: "#2563EB",
          400: "#3B82F6",
          100: "#DBEAFE",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-pattern": "linear-gradient(135deg, #1a1a1a 0%, #2C2C2C 50%, #1E4D8C 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
