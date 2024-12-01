import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDirectory = path.join(process.cwd(), 'content')

export interface ArticleFrontmatter {
  title: string
  excerpt: string
  date: string
  category: string
  tags: string[]
}

export interface Article extends ArticleFrontmatter {
  slug: string
  content: string
  year: string
}

function getMDXFiles(dir: string): string[] {
  const files: string[] = []
  const items = fs.readdirSync(dir, { withFileTypes: true })

  for (const item of items) {
    const itemPath = path.join(dir, item.name)
    if (item.isDirectory()) {
      files.push(...getMDXFiles(itemPath))
    } else if (item.name.endsWith('.md')) {
      files.push(itemPath)
    }
  }

  return files
}

export function getAllArticles(): Article[] {
  const files = getMDXFiles(contentDirectory)
  
  const articles = files.map((filePath) => {
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContents)
    const relativePath = path.relative(contentDirectory, filePath)
    const year = path.dirname(relativePath)
    
    // 从文件名生成 slug
    const fileName = path.basename(filePath, '.md')
    let slug = fileName
    
    // 如果是周刊文章，使用 weekly-数字 格式
    if (fileName.startsWith('杂货铺周刊')) {
      const match = fileName.match(/第(\d+)期/)
      if (match) {
        slug = `weekly-${match[1]}`
      }
    }
    // 对于其他文章，统一转换为小写并替换空格为连字符
    else {
      slug = fileName.toLowerCase().replace(/\s+/g, '-')
    }

    // 确保日期是字符串格式
    const date = data.date instanceof Date 
      ? data.date.toISOString().split('T')[0]
      : data.date

    // 确保 tags 是数组
    const tags = Array.isArray(data.tags) ? data.tags : []

    return {
      ...data,
      date,
      slug,
      year,
      content,
      tags,
    } as Article
  })

  return articles
}

export function getArticleBySlug(slug: string): Article | undefined {
  const articles = getAllArticles()
  const decodedSlug = decodeURIComponent(slug)
  return articles.find(article => article.slug === decodedSlug)
}

export function getYears(): string[] {
  const years = fs.readdirSync(contentDirectory, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)
    .sort((a, b) => b.localeCompare(a))
  
  return years
}

export function getAllTags(): string[] {
  const articles = getAllArticles()
  const tags = new Set<string>()
  
  articles.forEach(article => {
    article.tags.forEach(tag => tags.add(tag))
  })

  return Array.from(tags).sort()
}

export function getArticlesByTag(tag: string): Article[] {
  const articles = getAllArticles()
  const decodedTag = decodeURIComponent(tag)
  return articles.filter(article => article.tags?.includes(decodedTag))
} 