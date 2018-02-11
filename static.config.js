import axios from 'axios'

export default {
  preact: true,
  getSiteData: () => ({
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
        is404: true,
        component: 'src/containers/404',
      },
    ]
  },
}
