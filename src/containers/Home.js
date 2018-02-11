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
import Layout from '../components/Layout'

export default withSiteData(() => {
  const { mobile } = {...Responsive.onlyMobile}

  return (
    <Layout inverted textAlign='center'>
      <Container text>
        <Header
          as='h1'
          content='Everything-as-Code'
          inverted
          style={{
            fontSize: mobile ? '2em' : '4em',
            fontWeight: 'normal',
            marginBottom: 0,
            marginTop: mobile ? '1.5em' : '3em',
          }}
        />
        <Header
          as='h2'
          content='Turbocharge your DevSecOps'
          inverted
          style={{
            fontSize: mobile ? '1.5em' : '1.7em',
            fontWeight: 'normal',
            marginTop: mobile ? '0.5em' : '1.5em',
          }}
        />
        <Button primary size='huge'>
          Get Started
          <Icon name='right arrow' />
        </Button>
      </Container>
    </Layout>
  )
})
