# 落地页整合指南

## 整合步骤

### 方案一：如果落地页是 React/Next.js 项目

1. **复制文件**
   ```bash
   # 将落地页文件夹中的文件复制到项目中
   # 假设落地页文件夹在 /path/to/landing-page
   cp -r /path/to/landing-page/src/pages/* pages/
   cp -r /path/to/landing-page/src/components/* src/components/
   cp -r /path/to/landing-page/public/* public/
   ```

2. **检查依赖**
   - 查看落地页的 `package.json`，确保所有依赖都已安装
   - 运行 `npm install` 安装新依赖

3. **更新路由**
   - 如果落地页是首页，可以替换 `pages/index.tsx`
   - 或者创建新路由如 `pages/landing.tsx`

### 方案二：如果落地页是 HTML/CSS/JS

1. **转换为 React 组件**
   - 将 HTML 转换为 JSX
   - 将 CSS 转换为 CSS Modules 或 Tailwind
   - 将 JS 转换为 React hooks

2. **文件位置**
   - HTML/JSX → `pages/landing.tsx` 或 `src/components/landing/`
   - CSS → `src/index.css` 或独立的 CSS 文件
   - 图片 → `public/` 目录

### 方案三：手动整合

直接将文件复制到对应位置：
- 页面文件 → `pages/landing.tsx`
- 组件 → `src/components/landing/`
- 样式 → `src/index.css` 或独立 CSS 文件
- 静态资源 → `public/`

## 需要的信息

请提供：
1. 落地页文件夹的完整路径
2. 文件夹中的主要文件类型（HTML/React/CSS等）
3. 是否需要将落地页设为首页（替换当前的 index.tsx）

