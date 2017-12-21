import React from 'react'
import { Router, Link } from 'react-static'
import Routes from 'react-static-routes'
import 'semantic-ui-css/semantic.min.css'
import {
  Menu,
  Container,
  Image,
  Visibility,
  Button,
  Header,
  Icon,
  Segment
} from 'semantic-ui-react'

import image from './assets/code-wallpaper-17.jpg'
import logo from './assets/logo.png'

import './app.css'

const FixedMed = () => (
  <Menu fixed='top' inverted size='large'>
    <Container>
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
    </Container>
  </Menu>
)

export default class App extends React.Component {
  state = {}

  hideFixedMenu = () => this.setState({ visible: false })
  showFixedMenu = () => this.setState({ visible: true })

  render() {
    const { visible } = this.state
    return (
      <Router>
        <div>
          { visible ? <FixedMenu/> : null }

          <Visibility
            onBottomPassed={this.showFixedMenu}
            onBottomVisible={this.hideFixedMenu}
            once={false}
          >

            <Segment
              inverted
              textAlign='center'
              className='site-hero'
              style={{ minHeight: '100vh', padding: '1em 0em' }}
              vertical
            >
              <Container>
                <Menu inverted pointing secondary size='large'>
                  <Menu.Item as='a' header>
                    <Image
                      size='mini'
                      src={logo}
                      style={{ marginRight: '1.5em' }}
                    />
                    CodeBlock
                  </Menu.Item>
                  <Menu.Item as='a'>Vision</Menu.Item>
                  <Menu.Item as='a'>Product</Menu.Item>
                  <Menu.Item as='a'>Training</Menu.Item>
                  <Menu.Item as='a'>Blog</Menu.Item>
                  <Menu.Item as='a'>About</Menu.Item>
                  <Menu.Item position='right'>
                    <Button as='a' inverted>Log in</Button>
                    <Button as='a' inverted style={{ marginLeft: '0.5em' }}>Sign up</Button>
                  </Menu.Item>
                </Menu>
              </Container>

              <Segment style={{background: 'transparent', minHeight: '90vh', display: 'flex', justifyContent: 'center' }}>
                <Container text>
                  <Header
                    as='h1'
                    content='Everything-as-Code'
                    inverted
                    style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '3em' }}
                  />
                  <Header
                    as='h2'
                    content='Turbocharge your DevSecOps'
                    inverted
                    style={{ fontSize: '1.7em', fontWeight: 'normal' }}
                  />
                  <Button primary size='huge'>
                    Find Out How
                    <Icon name='right arrow'/>
                  </Button>
                </Container>
              </Segment>

            </Segment>
          </Visibility>

          <Container text style={{ marginTop: '7em' }}>
            <Routes />
          </Container>
        </div>
      </Router>
    )
  }
}
