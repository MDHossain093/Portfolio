/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
    "./src/app/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2563EB", // blue-600
          light: "#3B82F6",   // blue-500
          dark: "#1D4ED8",    // blue-700
        },
        accent: {
          DEFAULT: "#2563EB", // blue-600 (same as primary for consistency)
          light: "#3B82F6",
          dark: "#1D4ED8",
        },
        bg: {
          light: "#F3F4F6",   // Light gray background
          dark: "#0F172A",    // Dark slate
        },
      },
    },
  },
  plugins: [],
};
