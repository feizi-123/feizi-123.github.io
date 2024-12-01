import { getAllArticles, getYears } from './mdx'

export const articles = getAllArticles()
export const sortedArticles = articles.sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
)
export const years = getYears() 