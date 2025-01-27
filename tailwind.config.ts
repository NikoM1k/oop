import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        dark: "var(--dark)",
        black: "var(--black)",
        white: "var(--white)",
        darkWhite: "var(--dark-white)",
        blue: "var(--blue)",
        grey: "var(--grey)",
        darkBlue: "var(--dark-blue)",
        darkGrey: "var(--dark-grey)",
        lightBlack: "var(--light-black)",
        lightGrey: "var(--light-grey)",
        middleGrey: "var(--middle-grey)",
        bgGrey: "var(--bg-grey)",
      },
      fontFamily: {
        'gt-eesti': ['GT Eesti Pro Display', 'sans-serif'], // добавьте ваш шрифт
      },
    },
  },
  plugins: [],
} satisfies Config;