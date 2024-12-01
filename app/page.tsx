import Link from 'next/link'
import { FadeIn } from '@/components/FadeIn'
import { ArticleCard } from '@/components/ArticleCard'
import { LatestArticleCard } from '@/components/LatestArticleCard'
import { articles } from '@/lib/articles'

export default function Home() {
  // 获取最新的文章
  const sortedArticles = articles
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  // 分离最新文章和其他最新文章
  const [latestArticle, ...otherArticles] = sortedArticles
  const recentArticles = otherArticles.slice(0, 3)

  return (
    <main className="container mx-auto px-4 h-[calc(100vh-4rem)] py-6">
      <FadeIn className="h-full flex flex-col gap-6">
        {/* 最新文章大卡片 */}
        <section className="max-w-6xl mx-auto w-full">
          <div className="h-[360px]">
            <LatestArticleCard article={latestArticle} />
          </div>
        </section>

        {/* 其他最新文章 */}
        <section className="max-w-6xl mx-auto w-full">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-3xl font-bold">最新文章</h2>
            <Link 
              href="/blog"
              className="text-sm text-gray-600 dark:text-gray-400 hover:theme-color transition-colors"
            >
              查看全部 →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentArticles.map((article, index) => (
              <ArticleCard key={article.slug} {...article} index={index} />
            ))}
          </div>
        </section>
      </FadeIn>
    </main>
  )
}
