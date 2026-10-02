import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'LifeSci-Craft',
  description: 'LifeSci-Craft 服务器 Wiki — 玩法说明、服务器规则与常见问题',
  // ⚠ 部署路径，两种情况二选一，配错会导致 CSS 与图片全部 404：
  //   · 已绑自定义域名（wiki.pau1am.xyz）→ '/'   ← 当前设置
  //   · 走默认 GitHub Pages 地址（pau1am.github.io/lifescicraft-wiki/）→ 改成 '/lifescicraft-wiki/'
  base: '/',
  cleanUrls: true,
  lastUpdated: true,

  head: [
    ['link', { rel: 'icon', href: '/icons/item__knowledge_book.png' }],
    ['meta', { name: 'theme-color', content: '#2f6f4f' }],
    // 站点公开可见，但不希望被搜索引擎收录
    ['meta', { name: 'robots', content: 'noindex, nofollow' }],
  ],

  themeConfig: {
    logo: '/icons/item__knowledge_book.png',
    siteTitle: 'LifeSci-Craft Wiki',

    nav: [
      { text: '新玩家指南', link: '/guide/newbie', activeMatch: '/guide/' },
      { text: '服务器规则', link: '/guide/rules' },
      { text: '特殊功能', link: '/features/' },
      { text: '常用指令', link: '/commands' },
      { text: '常见问题', link: '/guide/faq' },
    ],

    sidebar: [
      {
        text: '开始游玩',
        items: [
          { text: 'Wiki 主页', link: '/' },
          { text: '新玩家指南', link: '/guide/newbie' },
          { text: '服务器规则', link: '/guide/rules' },
        ],
      },
      {
        text: '游戏内功能',
        items: [
          { text: '特殊功能', link: '/features/' },
          { text: '常用指令', link: '/commands' },
        ],
      },
      {
        text: '帮助与动态',
        items: [
          { text: '常见问题 FAQ', link: '/guide/faq' },
          { text: '服务器更新动态', link: '/updates/server' },
          { text: '客户端更新动态', link: '/updates/client' },
        ],
      },
      {
        text: '其他',
        items: [{ text: '相关链接', link: '/links' }],
      },
    ],

    /*
     * 本页目录只收 h2。
     *
     * ⚠ 不要改成 [2, 3]。本站的 h3 全部写在 <details class="mc-section"> 里
     * （章节标题条本身是 h2，条内的「这是什么 / 怎么用」等是 h3），
     * 而 VitePress 的目录**不过滤元素是否可见** —— h3 会被照收录进目录，
     * 但它们藏在默认收起的折叠块里：
     *   · 目录里出现一堆点不开、也滚不到的条目
     *   · 高亮计算（useActiveAnchor）用同一份标题列表，隐藏元素的
     *     offsetTop 取值异常，会让高亮/左侧指示线乱跳
     * 只收 h2 后，目录条目全部可见、点击定位准确，高亮也稳定。
     */
    outline: { level: [2, 2], label: '本页目录' },
    docFooter: { prev: '上一篇', next: '下一篇' },
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '目录',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    lastUpdated: { text: '最后更新于' },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档',
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭',
            },
          },
        },
      },
    },
  },
})
