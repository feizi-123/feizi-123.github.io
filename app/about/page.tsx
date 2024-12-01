import { FadeIn } from '@/components/FadeIn'

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 h-[calc(100vh-4rem)] py-6">
      <FadeIn className="h-full">
        <div className="max-w-3xl mx-auto h-full flex flex-col">
          <h1 className="text-4xl font-bold mb-6">关于我</h1>
          
          <div className="flex-1 prose dark:prose-invert overflow-y-auto">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 theme-color">个人简介</h2>
              <p className="text-gray-600 dark:text-gray-400">
                我是一名全栈开发工程师，热爱技术，喜欢分享。在这里，我会记录自己的学习心得、技术积累和生活感悟。
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 theme-color">技术栈</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  'JavaScript / TypeScript',
                  'React / Next.js',
                  'Node.js',
                  'Python',
                  'MySQL / MongoDB',
                  'Docker'
                ].map((tech) => (
                  <div 
                    key={tech}
                    className="p-2 bg-gray-50 dark:bg-gray-800 rounded-lg text-center text-sm"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 theme-color">联系方式</h2>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Email: your.email@example.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                  <span>GitHub: github.com/yourusername</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 theme-color">关于本站</h2>
              <p className="text-gray-600 dark:text-gray-400">
                本站使用 Next.js 构建，采用 TypeScript 开发，使用 Tailwind CSS 作为样式解决方案。
                博客内容使用 Markdown 编写，支持代码高亮、数学公式等功能。
              </p>
            </div>
          </div>
        </div>
      </FadeIn>
    </main>
  )
} 