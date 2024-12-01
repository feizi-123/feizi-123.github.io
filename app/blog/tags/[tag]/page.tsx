import { FadeIn } from '@/components/FadeIn'
import { getArticlesByTag, getAllTags } from '@/lib/mdx'
import Link from 'next/link'
import { notFound } from 'next/navigation'

interface Props {
  params: {
    tag: string
  }
}

export default function TagPage({ params }: Props) {
  const decodedTag = decodeURIComponent(params.tag)
  const articles = getArticlesByTag(decodedTag)

  if (articles.length === 0) {
    notFound()
  }

  return (
    <main className="container mx-auto px-4 py-16">
      <FadeIn>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">
            标签: <span className="theme-color">#{decodedTag}</span>
          </h1>
          
          <div className="space-y-8">
            {articles.map((article) => (
              <article 
                key={article.slug}
                className="group relative pl-8 before:absolute before:left-0 before:top-[10px] before:h-2 before:w-2 before:rounded-full before:theme-color before:bg-current"
              >
                <Link href={`/blog/${article.slug}`}>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
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
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:theme-color transition-colors">
                    {article.title}
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    {article.excerpt}
                  </p>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </FadeIn>
    </main>
  )
} 