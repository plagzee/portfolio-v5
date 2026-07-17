import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        marquee: "marquee 35s linear infinite",
        "marquee-reverse": "marquee-reverse 35s linear infinite",
      },
      keyframes: {
        marquee: {
          from: {
            transform: "translateX(0%)",
          },
          to: {
            transform: "translateX(-33.333%)",
          },
        },
        "marquee-reverse": {
          from: {
            transform: "translateX(-33.333%)",
          },
          to: {
            transform: "translateX(0%)",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
