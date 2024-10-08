import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/note/',
  lang: 'zh-TW',
  title: 'JC Notes',
  description: '',
  cleanUrls: true,
  markdown: {
    lineNumbers: true,
    image: {
      lazyLoading: true
    }
  },
  themeConfig: {
    logo: '/logo.jpg',

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首頁', link: '/' },
      { text: '程式', link: '/programming' },
      { text: '書法', link: '/calligraphy' },
    ],
    outline: {
      level: [2, 6],
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
      text: '更新時間: ',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'medium',
      },
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/givemefish' }],
  }
})
