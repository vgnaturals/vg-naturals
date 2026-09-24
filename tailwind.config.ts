import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core palette — lifted directly from the VG Naturals label artwork,
        // not a generic "botanical brand" default.
        forest: {
          DEFAULT: "#173A2B", // primary — deep forest green from the label ring
          light: "#2F5D45",
          dark: "#0E2419",
        },
        gold: {
          DEFAULT: "#B8912E", // warm gold from the label ring / monogram
          light: "#D4B15C",
          dark: "#8F6E20",
        },
        ivory: "#FBF8F1", // page background — warm, not stark white
        cream: "#F2EBDA", // card / section background
        ink: "#211D14", // near-black body text, warm undertone not pure black
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-manrope)", "sans-serif"],
      },
      maxWidth: {
        prose: "70ch",
      },
    },
  },
  plugins: [],
};

export default config;
