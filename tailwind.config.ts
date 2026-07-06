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
          ink: "#1F1F1F",         // 主标题
          body: "#4A4A4A",         // 正文
          muted: "#555555",        // 辅助说明
          line: "#E6E1D8",         // 边框
          soft: "#F2EFE8",         // 分隔区/次级背景
          paper: "#FAF8F4",        // 全站主背景暖白
          card: "#FFFFFF",         // 卡片/内容容器纯白
          emerald: "#24352A",      // 品牌强调色深墨绿
          "emerald-hover": "#1E2D23", // hover 深墨绿
          gold: "#4B5563"
        }
      },
      borderRadius: {
        card: "16px",
        "card-lg": "20px"
      },
      boxShadow: {
        card: "0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.03)",
        "card-hover": "0 4px 12px rgba(0,0,0,0.05), 0 2px 4px rgba(0,0,0,0.03)"
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
