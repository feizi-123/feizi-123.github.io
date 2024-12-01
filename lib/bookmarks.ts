export interface Bookmark {
  title: string
  description: string
  url: string
  type: string
  icon: string
}

export type BookmarksByCategory = Record<string, Bookmark[]>

export const bookmarks: BookmarksByCategory = {
  '常用': [
    {
      title: '知识星球',
      description: '知识变现的工具',
      url: 'https://wx.zsxq.com',
      type: '工具',
      icon: 'https://wx.zsxq.com/favicon.ico'
    },
    {
      title: '微信读书',
      description: '正版书籍小说免费阅读',
      url: 'https://weread.qq.com/',
      type: '阅读',
      icon: 'https://weread.qq.com/favicon.ico'
    },
    {
      title: '轻音乐俱乐部',
      description: '多得听不完',
      url: 'http://www.qingyinyue.club/',
      type: '音乐',
      icon: '/icons/music.svg'
    },
    {
      title: '今日热榜',
      description: '追踪全网热点',
      url: 'https://tophub.today/',
      type: '资讯',
      icon: '/icons/todayhot.png'
    },
    {
      title: '哔哩哔哩',
      description: '国内知名的视频弹幕网站',
      url: 'https://www.bilibili.com/',
      type: '视频',
      icon: '/icons/bilibili.svg'
    },
    {
      title: 'Z-Library',
      description: '全球最大的数字图书馆',
      url: 'https://search.fuyeor.com/zh-cn/zlibrary',
      type: '图书',
      icon: '/icons/z-library.svg'
    },
    {
      title: '幕布',
      description: '极简大纲笔记',
      url: 'https://mubu.com/app',
      type: '笔记',
      icon: 'https://mubu.com/favicon.ico'
    },
    {
      title: '豆瓣',
      description: '记录你的书影音生活',
      url: 'https://www.douban.com/',
      type: '社区',
      icon: 'https://www.douban.com/favicon.ico'
    },
    {
      title: '阮一峰的网络日志',
      description: '科技爱好者周刊',
      url: 'https://www.ruanyifeng.com/blog/',
      type: '博客',
      icon: 'https://www.ruanyifeng.com/favicon.ico'
    }
  ],
  '科技': [
    {
      title: '少数派',
      description: '提升工作效率和生活品质',
      url: 'https://sspai.com/',
      type: '科技',
      icon: '/icons/sspai.svg'
    }
  ],
  '科普': [
    {
      title: '医学微视',
      description: '医学科普平台',
      url: 'https://www.mvyxws.com/',
      type: '医学',
      icon: 'https://www.mvyxws.com/favicon.ico'
    },
    {
      title: 'wikiHow',
      description: '值得信赖的指南网站',
      url: 'https://zh.wikihow.com/',
      type: '指南',
      icon: 'https://zh.wikihow.com/favicon.ico'
    }
  ],
  '影音': [
    {
      title: 'MVCAT',
      description: '电影推荐站',
      url: 'https://www.mvcat.com/',
      type: '电影',
      icon: 'https://www.mvcat.com/favicon.ico'
    },
    {
      title: '低端影视',
      description: '超清在线视频站',
      url: 'https://ddys.tv/',
      type: '视频',
      icon: '/icons/ddrk.svg'
    },
    {
      title: '一百万电影',
      description: '超前点播追剧',
      url: 'https://www.ybwdy.com/',
      type: '电影',
      icon: '/icons/100W.png'
    }
  ],
  '其他': [
    {
      title: '佛系软件',
      description: '精品应用分享与下载',
      url: 'https://foxirj.com/',
      type: '软件',
      icon: 'https://foxirj.com/favicon.ico'
    }
  ]
}

export const categories = Array.from(
  new Set(Object.keys(bookmarks))
) 