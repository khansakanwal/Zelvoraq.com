/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "rgb(var(--bg-base-rgb) / <alpha-value>)",
        surface: "rgb(var(--bg-surface-rgb) / <alpha-value>)",
        elevated: "rgb(var(--bg-elevated-rgb) / <alpha-value>)",
        elevated2: "rgb(var(--bg-elevated-2-rgb) / <alpha-value>)",
        primary: "rgb(var(--text-primary-rgb) / <alpha-value>)",
        secondary: "rgb(var(--text-secondary-rgb) / <alpha-value>)",
        tertiary: "rgb(var(--text-tertiary-rgb) / <alpha-value>)",
        accent: "rgb(var(--accent-primary-rgb) / <alpha-value>)",
        "accent-hover": "rgb(var(--accent-primary-hover-rgb) / <alpha-value>)",
        data: "rgb(var(--accent-data-rgb) / <alpha-value>)",
        borderc: "rgb(var(--border-subtle-rgb) / <alpha-value>)",
        "borderc-strong": "rgb(var(--border-strong-rgb) / <alpha-value>)",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      maxWidth: {
        container: "1200px",
      },
      borderRadius: {
        sm2: "6px",
        md2: "10px",
        lg2: "16px",
      },
      boxShadow: {
        soft: "0 8px 24px rgba(0,0,0,0.28)",
        card: "0 1px 0 rgba(255,255,255,0.03) inset, 0 6px 20px rgba(0,0,0,0.22)",
      },
      spacing: {
        18: "72px",
        30: "120px",
      },
      keyframes: {
        travel: {
          from: { left: "-40px" },
          to: { left: "100%" },
        },
        reveal: {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        travel: "travel 3.2s linear infinite",
        reveal: "reveal 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};
