import type { Config } from "tailwindcss";

/**
 * 配色改为「CSS 变量 + Tailwind 语义类」两层（2026-11-09 用户要求换皮肤）。
 *
 * 为什么改：原来色值写死在 tailwind.config 里，换皮肤必须改配置重构全站，
 * 风险高、也没法给单个页面单独换色。现在 Tailwind 只管语义名，
 * 具体色值在 globals.css 的 :root 定义；某个页面想换皮肤，
 * 给这页的容器挂一个类（如 .theme-slate）重定义那几个变量即可，其余页面零影响。
 *
 * 透明度处理：需要 <alpha-value> 的颜色（ink/body/muted/gold）写成
 * rgb(var(--x) / <alpha-value>)，这样 bg-brand-ink/70 这类斜杠写法仍然有效；
 * 不需要透明度的（paper/soft/card/line/emerald）直接给完整值。
 * ⚠️ 变量内容必须是「R G B」空格分隔的数字，不带 rgb() 和逗号。
 */
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
          ink: "rgb(var(--brand-ink) / <alpha-value>)",          // 主标题
          body: "rgb(var(--brand-body) / <alpha-value>)",        // 正文
          muted: "rgb(var(--brand-muted) / <alpha-value>)",      // 辅助说明
          line: "var(--brand-line)",                             // 边框
          soft: "var(--brand-soft)",                             // 分隔区/次级背景
          paper: "var(--brand-paper)",                           // 全站主背景
          card: "var(--brand-card)",                             // 卡片底
          emerald: "var(--brand-emerald)",                       // 品牌强调
          "emerald-hover": "var(--brand-emerald-hover)",         // hover
          gold: "rgb(var(--brand-gold) / <alpha-value>)"         // 强调点缀
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
        sans: ["Inter", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "sans-serif"],
        serif: ['"Noto Serif SC"', '"Songti SC"', '"STSong"', '"SimSun"', "serif"]
      },
      maxWidth: {
        "8xl": "1440px",
      }
    }
  },
  plugins: []
};

export default config;
