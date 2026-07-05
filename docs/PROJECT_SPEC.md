# 龙头会服官网项目说明

## 项目定位

龙头会服官网是面向企业客户的咨询型官方网站，用于展示品牌可信度、服务结构和预约咨询入口。

## 技术栈

- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui 风格组件
- 静态数据集中放在 `lib/data.ts`
- 可通过 GitHub Pages 发布静态站点

## 路由结构

- `/` 首页
- `/about` 关于我们
- `/annual-advisory` 年度顾问
- `/solutions` 解决方案
- `/team` 团队
- `/insights` 洞察
- `/contact` 联系我们

## 组件结构

- `components/Layout.tsx`
- `components/SectionHeader.tsx`
- `components/LeadForm.tsx`
- `components/TeamCard.tsx`
- `components/InsightCard.tsx`
- `components/ui/*`

## 设计方向

整体保持极简、克制、专业、咨询公司风格。优先使用大留白、清晰网格、深色文字和有限强调色，不使用花哨动画或娱乐化视觉。
