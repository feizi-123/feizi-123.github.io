import { FadeIn } from '@/components/FadeIn'
import { getArticleBySlug } from '@/lib/mdx'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import rehypeSanitize from 'rehype-sanitize'
import Link from 'next/link'

interface Props {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = getArticleBySlug(params.slug)
  
  if (!article) {
    return {
      title: '文章未找到'
    }
  }

  return {
    title: article.title,
    description: article.excerpt,
  }
}

export default function ArticlePage({ params }: Props) {
  const article = getArticleBySlug(params.slug)

  if (!article) {
    notFound()
  }

  return (
    <main className="container mx-auto px-4 py-16">
      <FadeIn>
        <article className="max-w-3xl mx-auto prose dark:prose-invert">
          <header className="mb-8">
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
            <h1 className="text-4xl font-bold">{article.title}</h1>
            {article.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {article.tags.map(tag => (
                  <Link
                    key={tag}
                    href={`/blog/tags/${tag}`}
                    className="tag-link"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
            )}
          </header>

          <ReactMarkdown 
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw, rehypeSanitize]}
          >
            {article.content}
          </ReactMarkdown>
        </article>
      </FadeIn>
    </main>
  )
} 