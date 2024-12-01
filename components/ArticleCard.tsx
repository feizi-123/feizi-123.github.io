'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

interface ArticleCardProps {
  title: string
  excerpt: string
  date: string
  category: string
  slug: string
  index: number
}

export function ArticleCard({
  title,
  excerpt,
  date,
  category,
  slug,
  index,
}: ArticleCardProps) {
  const [imageError, setImageError] = useState(false)
  const [imageSrc, setImageSrc] = useState<string>('')

  // 从 slug 还原原始文件名，处理周刊特殊情况
  const originalFileName = slug.startsWith('weekly-')
    ? `杂货铺周刊（第${slug.split('-')[1]}期）`
    : slug.split('-').join(' ')

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

  // 尝试加载图片
  useEffect(() => {
    const loadImage = async () => {
      try {
        const imagePaths = [
          `/image/posts/${originalFileName}.jpg`,
          `/image/posts/${originalFileName}.png`,
        ]

        for (const path of imagePaths) {
          try {
            const res = await fetch(encodeURI(path))
            if (res.ok) {
              setImageSrc(encodeURI(path))
              return
            }
          } catch {
            // 忽略单个图片加载失败
            continue
          }
        }

        // 如果所有图片都加载失败，使用默认封面
        setImageSrc(defaultCover)
      } catch {
        // 如果整个加载过程失败，使用默认封面
        setImageSrc(defaultCover)
      }
    }

    loadImage()
  }, [slug, defaultCover, originalFileName])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="h-[380px]"
    >
      <Link href={`/blog/${slug}`}>
        <div className="group h-full bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col">
          <div className="relative h-48 w-full flex-shrink-0">
            <div className="absolute inset-0 theme-gradient opacity-20" />
            {imageSrc && (
              <Image
                src={imageSrc}
                alt={title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
                priority={index < 3}
                onError={() => setImageSrc(defaultCover)}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10" />
          </div>
          <div className="flex-1 p-6 flex flex-col overflow-hidden">
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2 flex-shrink-0">
              <time dateTime={date}>
                {new Date(date).toLocaleDateString('zh-CN', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
              <span className="mx-2">·</span>
              <span className="category-tag">
                {category}
              </span>
            </div>
            <h3 className={`text-xl font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2 flex-shrink-0 hover:theme-color transition-colors`}>
              {title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 line-clamp-1 flex-1">
              {excerpt}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  )
} 