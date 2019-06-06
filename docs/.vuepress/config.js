module.exports = {
  title: 'Stun',
  description: 'A beautiful & simple theme for Hexo',
  base: '/openSource-test/',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: `/stun-logo.ico`
      }
    ]
  ],
  // 缓存内容
  // serviceWorker: true,
  themeConfig: {
    repo: 'liuyib/openSource-test',
    // 如果你的文档不在仓库的根部，请指定 docsRepo 元字符
    docsDir: 'docs',
    docsBranch: 'master',
    // 是否显示编辑按钮
    editLinks: true,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Dev', link: '/dev/' },
      { text: 'Use', link: '/use/' },
      {
        text: 'Languages',
        items: [
          { text: '简体中文', link: '/language/chinese' },
          { text: 'English', link: '/language/english' }
        ]
      }
    ],
    sidebar: {
      // 侧边栏在 /foo/ 上
      '/dev/': ['', 'dev1', 'dev2'],
      // 侧边栏在 /bar/ 上
      '/use/': ['', 'use1', 'use2']
    }
  }
};
