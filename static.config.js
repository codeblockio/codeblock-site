import axios from 'axios'

export default {
  preact: true,
  withSiteData: () => ({
    title: 'CodeBlock | Everything-as-Code',
  }),
  siteRoot: 'https://alpha.codeblock.io',
  getRoutes: async () => {
    return [
      {
        path: '/',
        component: 'src/containers/Home',
      },
      {
        path: '/product',
        component: 'src/containers/Product',
      },
      {
        path: '/services',
        component: 'src/containers/Services',
      },
      {
        path: '/training',
        component: 'src/containers/Training',
      },
      {
        path: '/about',
        component: 'src/containers/About',
      },
      {
        is404: true,
        component: 'src/containers/404',
      },
    ]
  },
}
