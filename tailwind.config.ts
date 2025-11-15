import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        inferno: {
          orange: "#FF6B35",
          red: "#C92A2A",
          purple: "#5F3DC4",
          dark: "#1A1B26",
          darker: "#0F1015",
        },
        leafly: {
          green: "#5CB660",
          darkGreen: "#2C6E3D",
        }
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;