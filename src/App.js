import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import { Router, NavLink, Head, withSiteData } from 'react-static'
import Routes from 'react-static-routes'

import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'

import 'semantic-ui-css/semantic.min.css'

import './app.css'
import logo from './assets/logo.png'
import Home from './containers/Home'

const styles = {
  navLink: {
    fontSize: '1.2em',
    fontWeight: 'bold'
  }
}

class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Responsive {...Responsive.onlyComputer}>
        <Segment inverted textAlign='center' style={{ padding: '1em 0em' }} vertical>
          <Menu
            fixed={fixed ? 'top' : null}
            inverted
            pointing={!fixed}
            secondary={!fixed}
            size='large'
          >
            <Container>
              <Menu.Item as={NavLink} to='/' exact style={styles.navLink}>Home</Menu.Item>
              <Menu.Item as={NavLink} to='/about' exact style={styles.navLink}>About</Menu.Item>
            </Container>
          </Menu>
        </Segment>
        {children}
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends Component {
  state = {}

  handleToggle = () => this.setState({ sidebarOpened: !this.state.sidebarOpened })

  handleClose = () => {
    if(this.state.sidebarOpened) {
      this.setState({ sidebarOpened: false })
    }
  }

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Responsive {...Responsive.onlyMobile}>
        <Sidebar.Pushable>
          <Sidebar as={Menu} animation='overlay' direction='right' inverted
            vertical visible={sidebarOpened} onClick={this.handleClose}
          >
            <Menu.Item as={NavLink} to='/' exact>Home</Menu.Item>
            <Menu.Item as={NavLink} to='/about' exact>About</Menu.Item>
          </Sidebar>

          <Sidebar.Pusher dimmed={sidebarOpened} style={{ minHeight: '100vh' }}>
            <Segment inverted textAlign='center' style={{ padding: '1em 0em' }} vertical>
              <Container>
                <Menu inverted pointing secondary size='large'>
                  <Menu.Item as={NavLink} to='/' style={{borderBottom: 0}}>
                    <Image src={logo} size='mini' />
                  </Menu.Item>
                  <Menu inverted floated='right'>
                    <Menu.Item onClick={this.handleToggle}>
                      <Icon name='sidebar' />
                    </Menu.Item>
                  </Menu>
                </Menu>
              </Container>
            </Segment>
            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Responsive>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
    <Footer/>
  </div>
)

const Footer = () => (
  <Segment inverted vertical style={{ padding: '5em 0em' }}>
    <Container>
      <Grid inverted stackable>
        <Grid.Row>
          <Grid.Column width={10}>
            <p>Copyright &copy; {new Date().getFullYear()} CodeBlock</p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const HomepageLayout = ({ siteTitle }) => (
  <Router>
    <ResponsiveContainer>
      <Head>
        <title>{siteTitle || 'CodeBlock'}</title>
      </Head>
      <Routes/>
    </ResponsiveContainer>
  </Router>
)

export default hot(module)(withSiteData(HomepageLayout))
