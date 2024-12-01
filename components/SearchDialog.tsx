'use client'

import { Dialog, Combobox } from '@headlessui/react'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Article } from '@/lib/mdx'
import { motion } from 'framer-motion'

interface SearchDialogProps {
  isOpen: boolean
  onClose: () => void
  articles: Article[]
}

export function SearchDialog({ isOpen, onClose, articles }: SearchDialogProps) {
  const router = useRouter()
  const [query, setQuery] = useState('')
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null)

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, onClose])

  useEffect(() => {
    if (isOpen) {
      setQuery('')
      setSelectedArticle(null)
    }
  }, [isOpen])

  const filteredArticles = query === ''
    ? []
    : articles.filter((article) => {
        const searchContent = `${article.title} ${article.excerpt} ${article.category} ${article.tags.join(' ')}`.toLowerCase()
        return searchContent.includes(query.toLowerCase())
      })

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      className="fixed inset-0 z-50 overflow-y-auto p-4 pt-[25vh]"
    >
      <Dialog.Overlay
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-slate-900/80"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative mx-auto max-w-xl rounded-xl bg-white/80 shadow-2xl ring-1 ring-black/5 backdrop-blur dark:bg-slate-800/80"
      >
        <Combobox
          value={selectedArticle}
          onChange={(article: Article) => {
            router.push(`/blog/${article.slug}`)
            onClose()
          }}
        >
          <div className="flex items-center border-b border-gray-200 dark:border-gray-700 px-4">
            <svg className="h-6 w-6 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <Combobox.Input
              className="h-12 w-full border-0 bg-transparent text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-0"
              placeholder="搜索文章..."
              onChange={(event) => setQuery(event.target.value)}
              displayValue={(article: Article) => article?.title ?? ''}
              autoComplete="off"
            />
            <kbd className="hidden sm:block text-sm text-gray-500 dark:text-gray-400">
              ESC
            </kbd>
          </div>
          {filteredArticles.length > 0 && (
            <Combobox.Options static className="max-h-[32rem] overflow-y-auto p-2">
              {filteredArticles.map((article) => (
                <Combobox.Option
                  key={article.slug}
                  value={article}
                  className={({ active }) => `
                    px-4 py-2 rounded-lg cursor-pointer
                    ${active ? '[data-theme=purple]:bg-purple-50 [data-theme=purple]:dark:bg-purple-900/20 [data-theme=blue]:bg-blue-50 [data-theme=blue]:dark:bg-blue-900/20 [data-theme=green]:bg-emerald-50 [data-theme=green]:dark:bg-emerald-900/20' : ''}
                  `}
                >
                  {({ active, selected }) => (
                    <div>
                      <h3 className={`text-sm font-semibold ${
                        active ? 'theme-color' : 'text-gray-900 dark:text-white'
                      }`}>
                        {article.title}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-1">
                        {article.excerpt}
                      </p>
                    </div>
                  )}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          )}
          {query !== '' && filteredArticles.length === 0 && (
            <div className="p-6 text-center text-gray-500 dark:text-gray-400">
              未找到相关文章
            </div>
          )}
        </Combobox>
      </motion.div>
    </Dialog>
  )
} 