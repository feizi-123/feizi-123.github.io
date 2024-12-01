import { Navigation } from '@/components/Navigation'
import { getAllArticles } from '@/lib/mdx'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const articles = getAllArticles()

  return (
    <html lang="zh-CN">
      <body>
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur dark:bg-gray-900/80">
          <div className="container mx-auto px-4 py-3">
            <Navigation articles={articles} />
          </div>
        </header>
        {children}
      </body>
    </html>
  )
}
