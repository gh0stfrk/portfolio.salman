/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        fadeBounce: {
          "0%": { opacity: 0, transform: "scale(0.8)" },
          "50%": { opacity: 0.5, transform: "scale(1.05)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
      },
      animation: {
        fadeBounce: "fadeBounce 0.6s ease-in-out",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
