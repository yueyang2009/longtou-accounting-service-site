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
          ink: "rgb(237 233 224 / <alpha-value>)",      // 主标题 暖白
          body: "rgb(184 178 166 / <alpha-value>)",      // 正文 浅暖灰
          muted: "rgb(140 135 124 / <alpha-value>)",     // 辅助说明
          line: "rgb(255 255 255 / 0.12)",               // 边框 白12%
          soft: "#111816",                               // 分隔区/次级背景 深墨绿
          paper: "#0f1513",                              // 全站主背景 墨绿黑底
          card: "rgb(255 255 255 / 0.045)",              // 卡片 半透深
          emerald: "#0a0f0d",                            // 品牌强调 极深墨绿
          "emerald-hover": "#111816",                    // hover 深墨绿
          gold: "rgb(217 199 165 / <alpha-value>)"       // 暖金点缀 #d9c7a5
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
