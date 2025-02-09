import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      colors: {
        background: {
          DEFAULT: "#ededed",
          dark: "#111111"
        },
        foreground: {
          DEFAULT: "#211A1E",
          dark: "#ffffff"
        },
        primary: {
          DEFAULT: "#FFAF01",
          dark: "#FFD04D",
          foreground: "#211A1E",
        },
        secondary: {
          DEFAULT: "#7ab1b8",
          dark: "#90CAD1",
          foreground: "#211A1E",
        },
        container: {
          DEFAULT: "#ffffff",
          dark: "#1a1a1a"
        },
        focus: "#F182F6",
      },
      boxShadow: {
        'custom-inset': 'inset 20px 0 20px -20px rgba(0, 0, 0, 0.5), inset -20px 0 20px -20px rgba(0, 0, 0, 0.5)',
      },
      animation: {
        'fade-scroll': 'fade-scroll 40s linear infinite',
        'stripe-slide-slow': 'stripe-slide 3s linear infinite',
      },
      keyframes: {
        'stripe-slide': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(500%)' },
        },
        'fade-scroll': {
          '0%': { transform: 'translateX(0)', opacity: '1' },
          '85%': { transform: 'translateX(-45%)', opacity: '1' },
          '95%': { transform: 'translateX(-50%)', opacity: '0' },
          '96%': { transform: 'translateX(0)', opacity: '0' },
          '98%': { transform: 'translateX(0)', opacity: '1' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [heroui()],
  darkMode: 'false',
};