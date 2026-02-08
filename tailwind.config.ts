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
        "bg-dark": "#0a0a0a",
        "bg-board-light": "rgba(232, 220, 200, 0.06)",
        "bg-board-dark": "rgba(139, 105, 20, 0.08)",
        "accent-gold": "#d4a843",
        "accent-cream": "#f5f0e1",
        "text-muted": "#9a8e7a",
        "card-border": "rgba(212, 168, 67, 0.1)",
        "card-hover-border": "rgba(212, 168, 67, 0.3)",
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "serif"],
        mono: ["var(--font-space-mono)", "monospace"],
        sans: ["var(--font-dm-sans)", "sans-serif"],
      },
      animation: {
        float: "float 20s ease-in-out infinite",
        "pulse-border": "pulse-border 3s ease-in-out infinite",
        bob: "bob 2s ease-in-out infinite",
        "fade-up": "fadeUp 1.2s ease-out",
        "slide-in": "slideIn 0.5s ease-out",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "25%": { transform: "translateY(-30px) rotate(5deg)" },
          "50%": { transform: "translateY(-15px) rotate(-3deg)" },
          "75%": { transform: "translateY(-40px) rotate(2deg)" },
        },
        "pulse-border": {
          "0%, 100%": { borderColor: "rgba(212, 168, 67, 0.3)" },
          "50%": { borderColor: "rgba(212, 168, 67, 0.7)" },
        },
        bob: {
          "0%, 100%": { transform: "translateX(-50%) translateY(0)" },
          "50%": { transform: "translateX(-50%) translateY(8px)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(40px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          from: { opacity: "0", transform: "translateX(30px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
