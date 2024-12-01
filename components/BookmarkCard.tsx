'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

interface BookmarkCardProps {
  title: string
  description: string
  url: string
  icon: string
  index: number
}

export function BookmarkCard({
  title,
  description,
  url,
  icon,
  index,
}: BookmarkCardProps) {
  const [imageError, setImageError] = useState(false)
  const domain = new URL(url).hostname
  const fallbackIcon = `https://www.google.com/s2/favicons?domain=${domain}&sz=128`

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="group block bg-white dark:bg-gray-800 rounded-xl p-6 shadow-[0_4px_10px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_10px_rgba(0,0,0,0.5)] transition-all duration-300 hover:shadow-[0_10px_20px_rgba(0,0,0,0.06)] dark:hover:shadow-[0_10px_20px_rgba(0,0,0,0.7)] hover:-translate-y-1"
      >
        <div className="flex items-start space-x-4">
          <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-700 flex-shrink-0 shadow-inner">
            <Image
              src={imageError ? fallbackIcon : icon}
              alt={title}
              fill
              className="object-cover"
              onError={() => setImageError(true)}
              unoptimized
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1 truncate group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
              {title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
              {description}
            </p>
          </div>
        </div>
      </a>
    </motion.div>
  )
} 