import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import { Router, Link } from 'react-static'
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

import Home from './containers/Home'

class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Responsive {...Responsive.onlyComputer}>
        <Visibility once={false} onBottomPassed={this.showFixedMenu} onBottomPassedReverse={this.hideFixedMenu}>
          <Segment inverted textAlign='center' style={{ padding: '1em 0em' }} vertical>
            <Menu
              fixed={fixed ? 'top' : null}
              inverted
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container>
                <Menu.Item><Link to='/'>Home</Link></Menu.Item>
                <Menu.Item><Link to='/product'>Product</Link></Menu.Item>
                <Menu.Item><Link to='/services'>Services</Link></Menu.Item>
                <Menu.Item><Link to='/training'>Training</Link></Menu.Item>
                <Menu.Item><Link to='/about'>About</Link></Menu.Item>
              </Container>
            </Menu>
          </Segment>
        </Visibility>
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

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Responsive {...Responsive.onlyMobile}>
        <Sidebar.Pushable>
          <Sidebar as={Menu} inverted vertical visible={sidebarOpened} onClick={this.handleToggle}>
            <Menu.Item><Link to='/'>Home</Link></Menu.Item>
            <Menu.Item><Link to='/product'>Product</Link></Menu.Item>
            <Menu.Item><Link to='/services'>Services</Link></Menu.Item>
            <Menu.Item><Link to='/training'>Training</Link></Menu.Item>
            <Menu.Item><Link to='/about'>About</Link></Menu.Item>
          </Sidebar>

          <Sidebar.Pusher dimmed={sidebarOpened} onClick={this.handleToggle} style={{ minHeight: '100vh' }}>
            <Segment inverted textAlign='center' style={{ padding: '1em 0em' }} vertical>
              <Container>
                <Menu inverted pointing secondary size='large'>
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name='sidebar' />
                  </Menu.Item>
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
      <Grid divided inverted stackable>
        <Grid.Row>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='Links' />
            <List link inverted>
              <List.Item><Link to='/'>Home</Link></List.Item>
              <List.Item><Link to='/product'>Product</Link></List.Item>
              <List.Item><Link to='/services'>Services</Link></List.Item>
              <List.Item><Link to='/training'>Training</Link></List.Item>
              <List.Item><Link to='/about'>About</Link></List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={7}>
            <Header as='h4' inverted>CodeBlock | Everything-as-Code</Header>
            <p>Turbocharge your DevSecOps</p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const HomepageLayout = () => (
  <Router>
    <ResponsiveContainer>
      <Routes/>
    </ResponsiveContainer>
  </Router>
)

export default hot(module)(HomepageLayout)
