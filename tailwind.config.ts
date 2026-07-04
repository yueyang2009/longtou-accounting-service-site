import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          ink: "#0B1F3A",
          muted: "#5E6A78",
          line: "#DCE3EA",
          soft: "#F5F7FA",
          gold: "#A97836"
        }
      },
      fontFamily: {
        sans: ["Inter", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "sans-serif"]
      },
      boxShadow: {
        consult: "0 18px 50px rgba(11, 31, 58, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;

