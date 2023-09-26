import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        ShadowBlur: "3px 3px 12px 3px rgba(255,255,255,0.075)",
      },
      colors: {
        White: "#ffffff",
        Black: "#000000",
        Orange: "#eeb844",
        WhiteGray: "#b3b2b1",
        Blur: "rgba(255,255,255,0.075)",
        Glass: "rgba(255,255,255,0.15)",
      },
    },
  },
  plugins: [],
};
export default config;
