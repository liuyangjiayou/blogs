module.exports = {
    title: '刘大壮',
    description: 'HTML html CSS css JS js WEB web VUE vue react React',
    head: [
        ['link', { rel: 'icon', href: '/logo.png' }]
    ],
    // 主题设置
    themeConfig:{
        // logo设置
        logo: '/image/avatar.png',
        // 头部导航设置
        nav: [
            { text: '首页', link: '/' },
            {
                text: '个人介绍',
                link: '/guide/',
            },
            {
                text: '技术分类',
                link: '/classify/',
            }
            //{ text: 'External', link: 'https://google.com' },
        ],
        sidebar: [
            '/',
            '/page-a',
            ['/page-b', 'Explicit link text']
        ]
    }
}