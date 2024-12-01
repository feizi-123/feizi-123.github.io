import { FadeIn } from '@/components/FadeIn'
import { articles, years } from '@/lib/articles'
import Link from 'next/link'

export default function BlogPage() {
  return (
    <main className="container mx-auto px-4 py-16">
      <FadeIn>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">文章归档</h1>
          
          {years.map((year) => (
            <section key={year} className="mb-16">
              <h2 className="text-2xl font-bold mb-8 theme-color">
                {year} 年
              </h2>
              
              <div className="space-y-8">
                {articles
                  .filter(article => article.year === year)
                  .map((article) => (
                    <article 
                      key={article.slug}
                      className="group relative flex items-start"
                    >
                      {/* 左侧日期 */}
                      <time 
                        dateTime={article.date}
                        className="min-w-[100px] text-sm text-gray-500 dark:text-gray-400"
                      >
                        {new Date(article.date).toLocaleDateString('zh-CN', {
                          month: 'long',
                          day: 'numeric'
                        })}
                      </time>

                      {/* 中间的点和线 */}
                      <div className="relative mr-6">
                        <div className="absolute left-0 top-[10px] h-2 w-2 rounded-full theme-color bg-current"></div>
                        <div className="absolute left-[3px] top-[18px] bottom-[-40px] w-[2px] bg-gray-200 dark:bg-gray-800 group-last:hidden"></div>
                      </div>

                      {/* 右侧内容 */}
                      <div className="flex-1">
                        <Link href={`/blog/${article.slug}`}>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="category-tag">
                              {article.category}
                            </span>
                          </div>
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:theme-color transition-colors">
                            {article.title}
                          </h3>
                          <p className="mt-2 text-gray-600 dark:text-gray-400">
                            {article.excerpt}
                          </p>
                        </Link>
                      </div>
                    </article>
                  ))}
              </div>
            </section>
          ))}
        </div>
      </FadeIn>
    </main>
  )
} 