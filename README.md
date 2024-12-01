# 个人博客

这是一个使用 Next.js 14 构建的现代化个人博客系统。它提供了一个简洁、优雅的界面来展示文章，支持多种主题色切换，并具有完整的搜索功能。

## 主要特性

### 📝 内容管理
- Markdown 文章支持
- 按年份归档
- 标签分类
- 文章摘要
- 代码高亮

### 🎨 界面设计
- 响应式布局
- 暗色模式支持
- 三种主题色切换
- 平滑动画效果
- 无限滚动加载

### 🔍 搜索功能
- 全站搜索
- 实时搜索结果
- 键盘快捷键支持（⌘K）
- 搜索结果高亮

## 技术栈

- **框架**: Next.js 14
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **动画**: Framer Motion
- **UI组件**: Headless UI
- **Markdown**: React Markdown
- **语法高亮**: Rehype/Remark

## 目录结构

```
.
├── app/                    # Next.js 应用目录
│   ├── page.tsx           # 首页
│   ├── blog/             # 博客相关页面
│   ├── about/            # 关于页面
│   └── layout.tsx        # 全局布局
├── components/            # React 组件
│   ├── ArticleCard.tsx   # 文章卡片
│   ├── Navigation.tsx    # 导航栏
│   └── SearchDialog.tsx  # 搜索对话框
├── content/              # Markdown 文章
│   └── YYYY/            # 按年份组织的文章
├── lib/                  # 工具函数
│   └── mdx.ts           # Markdown 处理
└── public/              # 静态资源
    └── image/           # 图片资源
```

## 文章格式

文章需要包含以下 frontmatter：

```markdown
---
title: 文章标题
excerpt: 文章摘要
date: YYYY-MM-DD
category: 分类名称
tags: [标签1, 标签2]
---

文章内容...
```

## 开发指南

### 环境要求
- Node.js 18+
- npm 9+

### 安装和运行

```bash
# 克隆项目
git clone [repository-url]

# 安装依赖
npm install

# 开发环境运行
npm run dev

# 构建生产版本
npm run build

# 运行生产版本
npm run start
```

### 添加新文章

1. 在 `content/YYYY/` 目录下创建 `.md` 文件
2. 添加必要的 frontmatter
3. 编写文章内容
4. 如需添加图片，将图片放入 `public/image/posts/` 目录

### 自定义主题

主题色定义在 `app/globals.css` 中：
- 紫色主题（默认）
- 蓝色主题
- 绿色主题

## 部署

本项目可以部署在任何支持 Next.js 的平台上，推荐使用：
- Vercel
- Netlify
- Docker

## 许可证

MIT License

## 作者

[strive]

## 贡献

欢迎提交 Issue 和 Pull Request
