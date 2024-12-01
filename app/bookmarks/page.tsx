import { FadeIn } from '@/components/FadeIn'
import { bookmarks } from '@/lib/bookmarks'

export default function BookmarksPage() {
  return (
    <main className="container mx-auto px-4 py-16">
      <FadeIn>
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">收藏</h1>
          
          <div className="space-y-16">
            {Object.entries(bookmarks).map(([category, items]) => (
              <section key={category}>
                <h2 className="text-2xl font-bold mb-6 theme-color">
                  {category}
                </h2>
                
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((item, index) => (
                    <a
                      key={index}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <img 
                            src={item.icon} 
                            alt={item.title} 
                            className="w-6 h-6 rounded-full"
                          />
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:theme-color transition-colors">
                            {item.title}
                          </h3>
                        </div>
                        <svg 
                          className="w-4 h-4 text-gray-400 group-hover:theme-color transition-colors" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                          />
                        </svg>
                      </div>
                      <p className="mt-2 text-gray-600 dark:text-gray-400 line-clamp-2">
                        {item.description}
                      </p>
                    </a>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </FadeIn>
    </main>
  )
} 