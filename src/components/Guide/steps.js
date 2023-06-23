const steps = () => {
    return [
        {
            element: '#guide-start',
            popover: {
                title: '引导功能',
                description: '快速了解应用功能。',
                position: 'bottom-right',
            },
        },
        {
            element: '#guide-search',
            popover: {
                title: '搜索功能',
                description: '能够快速检索出应用的菜单导航页面。',
                position: 'bottom-right',
            },
        },
        {
            element: '#guide-full',
            popover: {
                title: '全屏功能',
                description:
                    '可以让应用程序的界面最大化，隐藏其他操作系统或浏览器的界面元素，以获得更宽敞、集中注意力的视觉体验。',
                position: 'bottom-right',
            },
        },
        {
            element: '#guide-dark',
            popover: {
                title: '暗黑模式',
                description:
                    '暗黑模式是一种界面设计风格，在视觉上更为柔和和舒适，能大幅减少眩光和眼睛疲劳、提高可阅读性。',
                position: 'bottom-right',
            },
        },
        {
            element: '#guide-lang',
            popover: {
                title: '语言',
                description: '目前支持中文、English。',
                position: 'bottom-right',
            },
        },
        {
            element: '#guide-fold',
            popover: {
                title: '折叠/展开菜单',
                description: '将菜单项隐藏起来，使得内容展示更为清晰和宽敞。',
                position: 'bottom-left',
            },
        },
    ]
}

export default steps
