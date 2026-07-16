import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1240px" },
    },
    extend: {
      colors: {
        background: "#09090B",
        foreground: "#F8FAFC",
        card: {
          DEFAULT: "#111827",
          hover: "#141E33",
        },
        border: "rgba(148, 163, 184, 0.12)",
        "border-strong": "rgba(148, 163, 184, 0.24)",
        muted: {
          DEFAULT: "#94A3B8",
          foreground: "#64748B",
        },
        accent: {
          DEFAULT: "#2563EB",
          soft: "#3B82F6",
          dim: "rgba(37, 99, 235, 0.12)",
        },
        slate: {
          950: "#0B1120",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-plex-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        "display-lg": ["clamp(2.75rem, 6vw, 5rem)", { lineHeight: "1.02", letterSpacing: "-0.03em" }],
        "display-md": ["clamp(2rem, 4vw, 3.25rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, rgba(9,9,11,0) 0%, #09090B 92%), radial-gradient(60% 60% at 50% 0%, rgba(37,99,235,0.10) 0%, rgba(9,9,11,0) 60%)",
      },
      boxShadow: {
        card: "0 1px 0 0 rgba(255,255,255,0.03) inset, 0 20px 40px -24px rgba(0,0,0,0.6)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.9" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        "pulse-slow": "pulse-slow 4s ease-in-out infinite",
      },
      borderRadius: {
        xl: "0.875rem",
        "2xl": "1.25rem",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
