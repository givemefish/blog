import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'JC Notes',
  description: '',
  base: '/blog/',
  themeConfig: {
    lang: 'zh-TW',
    logo: '/logo.jpg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首頁', link: '/' },
      { text: '程式', link: '/programming' },
      { text: '書法', link: '/calligraphy' }
    ],
    outline: {
      label: '目錄',
    },
    docFooter: {
      prev: '上一頁',
      next: '下一頁'
    },
    footer: {
      message: "Released under the MIT License.",
      copyright: `Copyright ©陳佳駿 ${new Date().getFullYear()}`,
    },
    search: {
      provider: 'local',
    },
    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium',
      },
    },
    sidebar: {
      collapsed: true,
      text: 'TGapi文档',
      items: [
        { text: 'TGapi登陆注册', link: '/item-a' },
        { text: 'Item B', link: '/item-b' },
      ]
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/givemefish' }],
  }
})
