'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { SearchDialog } from './SearchDialog'
import { Article } from '@/lib/mdx'
import { ThemeColorSwitch } from './ThemeColorSwitch'

interface NavigationProps {
  articles: Article[]
}

export function Navigation({ articles }: NavigationProps) {
  const pathname = usePathname()
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'k' && (event.metaKey || event.ctrlKey)) {
        event.preventDefault()
        setIsSearchOpen(true)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [])

  const links = [
    { href: '/', label: '首页' },
    { href: '/blog', label: '归档' },
    { href: '/bookmarks', label: '收藏' },
    { href: '/about', label: '关于' },
  ]

  return (
    <>
      <nav className="flex items-center justify-between">
        <div className="flex items-center space-x-6">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-base ${
                pathname === href
                  ? 'theme-color'
                  : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <button
            type="button"
            className="group flex items-center space-x-1 text-base text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            onClick={() => setIsSearchOpen(true)}
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span className="hidden sm:inline">搜索</span>
            <kbd className="hidden sm:block text-xs border border-gray-300 dark:border-gray-700 rounded px-1.5">
              ⌘K
            </kbd>
          </button>
          <ThemeColorSwitch />
        </div>
      </nav>
      <SearchDialog
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        articles={articles}
      />
    </>
  )
} 