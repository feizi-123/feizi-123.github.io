/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',        // 必需：生成静态文件
    images: {
      unoptimized: true,    // 必需：GitHub Pages 不支持图片优化
    },
    basePath: '/feizi-123.github.io', // 必需：设置基础路径
    // 添加这个配置来处理 MDX
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  }
module.exports = nextConfig