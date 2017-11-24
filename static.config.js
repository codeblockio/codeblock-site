import axios from 'axios'
//

export default {
  getSiteProps: () => ({
    title: 'CodeBlock | Everything-as-Code',
  }),
  siteRoot: 'https://alpha.codeblock.io',
  getRoutes: async () => {
    const { data: posts } = await axios.get('https://jsonplaceholder.typicode.com/posts')
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
