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
        primary: {
          DEFAULT: '#FF4C39',
          light: '#FFB473',
        },
        secondary: {
          DEFAULT: '#053257',
          light: '#F9F9F9',
        },
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
        'dm-sans': ['var(--font-dm-sans)'],
      },
    },
  },
  plugins: [],
};

export default config;
