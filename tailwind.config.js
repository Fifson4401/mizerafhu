import { nextui } from '@nextui-org/theme';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      colors: {
        background: "#ededed",
        foreground: "#211A1E",
        primary: {
          DEFAULT: "#FFAF01",
          foreground: "#211A1E",
        },
        secondary: {
          DEFAULT: "#7ab1b8",
          foreground: "#211A1E",
        },
        dupanary: {
          DEFAULT: "#7ab1b8",
          foreground: "#211A1E",
        },
        focus: "#F182F6",
      },
      boxShadow: {
        'custom-inset': 'inset 20px 0 20px -20px rgba(0, 0, 0, 0.5), inset -20px 0 20px -20px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
