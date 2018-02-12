import axios from 'axios'
import React, { Component } from 'react'
import { ServerStyleSheet } from 'styled-components'

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
  renderToHtml: (render, Comp, meta) => {
    const sheet = new ServerStyleSheet()
    const html = render(sheet.collectStyles(<Comp />))
    meta.styleTags = sheet.getStyleElement()
    return html
  },
  Document: class CustomHtml extends Component {
    render () {
      const { Html, Head, Body, children, renderMeta } = this.props

      return (
        <Html>
          <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            {renderMeta.styleTags}
          </Head>
          <Body>
            {children}
            <div dangerouslySetInnerHTML={{__html: '<script src="https://cdn.slaask.com/chat.js"></script><script>_slaask.init("e27cbd6eb12e9064a4f4b69a156588bc");</script>'}} />
          </Body>
        </Html>
      )
    }
  },
}
