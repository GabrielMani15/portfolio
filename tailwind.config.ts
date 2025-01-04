
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mainTextColor: "#EFEFF0",
        lightsky: "#C9F0FF",
        lightgreen: "#EAFFFD",
        lightpink: "#D5CAD6",
        lightbrown: "#6B5E62",
      },
      fontWeight: {
        black: '900',
      },
      fontSize: {
        heading: "1.875rem",
        normal: "1.25rems",

      }
    },
  },
  plugins: [],
} satisfies Config;
