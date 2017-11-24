import React from 'react'
import { Router, Link } from 'react-static'
import Routes from 'react-static-routes'
import 'semantic-ui-css/semantic.min.css'
import {
  Menu,
  Container,
  Image
} from 'semantic-ui-react'

import logo from './assets/logo.png'

export default () => (
  <Router>
    <div>
      <Menu fixed='top' inverted compact>
        <Menu.Item as='a' header>
          <Image size='mini' src={logo}
            style={{ marginRight: '1.5em' }}/>
          CodeBlock
        </Menu.Item>
        <Menu.Item as='a'>Vision</Menu.Item>
        <Menu.Item as='a'>Product</Menu.Item>
        <Menu.Item as='a'>Training</Menu.Item>
        <Menu.Item as='a'>Blog</Menu.Item>
        <Menu.Item as='a'>About</Menu.Item>
      </Menu>
      <Container text style={{ marginTop: '7em' }}>
        <Routes />
      </Container>
    </div>
  </Router>
)
