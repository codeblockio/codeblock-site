import axios from 'axios'
import React, { Component } from 'react'

export default {
  preact: true,
  withSiteData: () => ({
    siteTitle: 'CodeBlock | Everything-as-Code',
  }),
  siteRoot: 'https://codeblock.io',
  getRoutes: async () => {
    return [
      {
        path: '/',
        component: 'src/containers/Home',
      },
      {
        path: '/journey',
        component: 'src/containers/Journey',
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
