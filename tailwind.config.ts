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
          ink: "#111111",
          muted: "#6B7280",
          line: "#E5E7EB",
          soft: "#F9FAFB",
          gold: "#4B5563"
        }
      },
      fontFamily: {
        sans: ["Inter", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "sans-serif"]
      },
      maxWidth: {
        "8xl": "1440px",
      }
    }
  },
  plugins: []
};

export default config;
