'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Article } from '@/lib/mdx'

interface LatestArticleCardProps {
  article: Article
}

export function LatestArticleCard({ article }: LatestArticleCardProps) {
  const [imageError, setImageError] = useState(false)

  // 默认封面 SVG - 使用动态主题色
  const defaultCover = `data:image/svg+xml,${encodeURIComponent(`
    <svg width="800" height="400" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:var(--theme-color);stop-opacity:0.2" />
          <stop offset="100%" style="stop-color:var(--theme-hover);stop-opacity:0.1" />
        </linearGradient>
      </defs>
      <rect width="800" height="400" fill="url(#grad)"/>
      <rect x="200" y="150" width="400" height="30" rx="4" fill="rgba(255,255,255,0.1)"/>
      <rect x="300" y="200" width="200" height="20" rx="4" fill="rgba(255,255,255,0.1)"/>
    </svg>
  `)}`

  // 从 slug 还原原始文件名，处理周刊特殊情况
  const originalFileName = article.slug.startsWith('weekly-')
    ? `杂货铺周刊（第${article.slug.split('-')[1]}期）`
    : article.slug.split('-').join(' ')

  return (
    <Link href={`/blog/${article.slug}`} className="h-full">
      <div className="group relative h-full rounded-2xl overflow-hidden">
        <div className="absolute inset-0 theme-gradient opacity-20" />
        <Image
          src={imageError ? defaultCover : `/image/posts/${originalFileName}.jpg`}
          alt={article.title}
          fill
          className="object-cover"
          onError={() => setImageError(true)}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />
        <div className="absolute inset-x-0 bottom-0 p-8 z-20">
          <div className="flex items-center text-sm text-gray-300 mb-4">
            <time dateTime={article.date}>
              {new Date(article.date).toLocaleDateString('zh-CN', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
            <span className="mx-2">·</span>
            <span className="category-tag">
              {article.category}
            </span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4 group-hover:theme-color transition-colors">
            {article.title}
          </h1>
          <p className="text-lg text-gray-200">
            {article.excerpt}
          </p>
        </div>
      </div>
    </Link>
  )
} 