import { defineConfig } from 'vitepress'
import { defineConfigWithTheme } from 'vitepress'
import type { Theme } from 'vitepress-theme-ououe'

export default defineConfigWithTheme<Theme>({
  // 标题
  title: "Games Samples",
  // 描述
  description: "UnityGamesSamples",
  // 打包文件夹
  outDir: 'dist',
  cleanUrls: true,
  // 最后编辑时间
  lastUpdated: true,
  // 默认语言
  lang: 'zn-CN',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge,chrome=1' }],
    ['meta', { name: 'renderer', content: 'webkit' }],
    ['meta', { name: 'force-rendering', content: 'webkit' }],
    ['meta', { name: 'applicable-device', content: 'pc,mobile' }],
    ['meta', { name: 'author', content: 'Emo <braveeggtart@gmail.com>' }],
  ],
  // 主题配置
  themeConfig: {
    // logo
    logo: "https://avatars.githubusercontent.com/u/92071969?v=4'",
    // 封面
    cover: {
      src: 'https://picsum.photos/1920/1080?random',
      alt: 'cover image',
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Tag', link: '/tag' },
      { text: 'Category', link: '/category' },
    ],
    tag: '/tag',
    category: '/category',
    socialLinks: [
      {
        ariaLabel: 'GitHub',
        link: 'https://github.com/BraveEggTart/SamplesGames',
        icon: 'github',
      },
    ],
    pagination: {
      prev: '<-',
      next: '->',
      // match: (path) => /^\/($|index|page-)/.test(path),
      sort: (a, b) => a.index - b.index,
      // filter: (page) => page.home,
    },
    createTime: {
      text: 'Create Time',
      format: (date) => new Date(date).toLocaleDateString(),
    },
    lastUpdated: {
      text: 'Last Updated',
      format: (date) => new Date(date).toLocaleDateString(),
    },
    // readingProgress: 'top',
    footer: {
      // nav: [
      //   { text: "Home", link: "/" },
      //   { text: "GitHub", link: "" },
      // ],
      copyright: 'Drenayo && BraveEggTart © 2024',
    },
    search: {
      provider: 'local',
    },
  },
})

