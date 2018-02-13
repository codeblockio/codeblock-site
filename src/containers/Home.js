import React from 'react'
import { withSiteData } from 'react-static'
import {
  Segment,
  Container,
  Header,
  Button,
  Icon,
  Responsive
} from 'semantic-ui-react'
import { NavLink } from 'react-static'

import Layout from '../components/Layout'

const styles = {
  h1: {
    fontSize: '4em',
    fontWeight: 'normal',
    marginBottom: 0,
    marginTop: '3em',
  },
  h2: {
    fontSize: '1.7em',
    fontWeight: 'normal',
    marginTop: '1.5em',
    marginBottom: '1.5em'
  }
}

const mobileStyles = {
  h1: {
    ...styles.h1,
    fontSize: '2em',
    marginTop: '3em',
  },
  h2: {
    ...styles.h2,
    fontSize: '1.5em',
    marginTop: '0.5em',
    marginBottom: '0.5em'
  }
}

const Content = ({ mobile = false }) => (
  <div>
    <Header
      as='h1'
      content='DevSecOps Delivered'
      inverted
      style={mobile ? mobileStyles.h1 : styles.h1}
    />
    <Header
      as='h2'
      content='Flexible, consistent workflows to enable teams to train and succeed at DevSecOps'
      inverted
      style={mobile ? mobileStyles.h2 : styles.h2}
    />
  </div>
)

export default withSiteData(() => {
  return (
    <Layout inverted textAlign='center'>
      <Container text>
        <Responsive {...Responsive.onlyMobile}>
          <Content mobile/>
        </Responsive>

        <Responsive {...Responsive.onlyComputer}>
          <Content />
        </Responsive>

        <Button primary size='huge' as={NavLink} to='/journey'>
          Get Started
          <Icon name='right arrow' />
        </Button>
      </Container>
    </Layout>
  )
})
