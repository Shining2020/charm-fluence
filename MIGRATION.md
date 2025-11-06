# Next.js 迁移完成指南

## ✅ 迁移完成

项目已成功从 **Vite + React Router** 迁移到 **Next.js (Pages Router)**。

## 📋 需要执行的步骤

### 1. 安装依赖

```bash
npm install
```

这会安装 Next.js 及其相关依赖，并移除不再需要的 Vite 依赖。

### 2. 更新环境变量

如果你之前有 `.env` 文件，需要：

1. 将 `.env` 重命名为 `.env.local`（Next.js 推荐）
2. 更新环境变量名称：
   ```
   # 旧版本（Vite）
   VITE_OPENROUTER_API_KEY=your_api_key_here
   
   # 新版本（Next.js）
   NEXT_PUBLIC_OPENROUTER_API_KEY=your_api_key_here
   ```

   **重要：** Next.js 中，需要在浏览器中访问的环境变量必须以 `NEXT_PUBLIC_` 开头。

### 3. 启动开发服务器

```bash
npm run dev
```

Next.js 默认运行在 `http://localhost:3000`（而不是之前的 8080 端口）。

## 🔄 主要变更

### 文件结构变化

- ✅ 创建了 `pages/` 目录（Next.js 路由）
  - `pages/_app.tsx` - 全局应用配置
  - `pages/_document.tsx` - HTML 文档配置
  - `pages/index.tsx` - 首页（原 `src/pages/Index.tsx`）
  - `pages/404.tsx` - 404 页面

- ✅ 删除了 Vite 相关文件：
  - `vite.config.ts`
  - `index.html`
  - `src/main.tsx`
  - `src/App.tsx`
  - `src/vite-env.d.ts`

### 代码变更

1. **路由系统**
   - 从 React Router 的 `<BrowserRouter>` 改为 Next.js 文件系统路由
   - 不再需要 `<Route>` 组件，路由由文件系统自动生成

2. **环境变量**
   - `import.meta.env.VITE_OPENROUTER_API_KEY` → `process.env.NEXT_PUBLIC_OPENROUTER_API_KEY`

3. **客户端组件**
   - 为使用 hooks 的组件添加了 `"use client"` 标记（如 `toaster.tsx`, `sonner.tsx`）

4. **配置更新**
   - `package.json` - 更新了脚本和依赖
   - `tsconfig.json` - 更新为 Next.js 配置
   - `next.config.js` - 新增 Next.js 配置文件

## 🚀 新功能

迁移到 Next.js 后，你现在可以使用：

- **服务端渲染 (SSR)** - 如果需要，可以轻松添加
- **静态生成 (SSG)** - 优化性能
- **API Routes** - 可以在 `pages/api/` 目录下创建 API 端点
- **自动代码分割** - Next.js 自动优化
- **优化的生产构建** - 更好的性能和 SEO

## 📝 注意事项

1. **端口变化**：开发服务器现在运行在 `http://localhost:3000` 而不是 `8080`
2. **环境变量**：确保使用 `NEXT_PUBLIC_` 前缀
3. **构建输出**：Next.js 将构建到 `.next/` 目录而不是 `dist/`
4. **路由**：所有路由现在基于 `pages/` 目录结构

## 🐛 故障排除

如果遇到问题：

1. **依赖安装问题**：删除 `node_modules` 和 `package-lock.json`，然后重新运行 `npm install`
2. **环境变量不工作**：确保变量名以 `NEXT_PUBLIC_` 开头，并重启开发服务器
3. **路径别名问题**：Next.js 会自动读取 `tsconfig.json` 中的路径配置

## 📚 更多资源

- [Next.js 文档](https://nextjs.org/docs)
- [Next.js Pages Router](https://nextjs.org/docs/pages/building-your-application/routing)
- [环境变量](https://nextjs.org/docs/pages/building-your-application/configuring/environment-variables)

