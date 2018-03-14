import React from 'react'
import { withSiteData } from 'react-static'
import {
  Segment,
  Container,
  Header,
  Image,
  Grid,
  Button
} from 'semantic-ui-react'
import Layout from '../components/Layout'

import codifi from '../assets/codifi.png'

export default withSiteData(() => (
  <Layout>
    <Grid container stackable verticalAlign='middle'>
      <Grid.Row>
        <Grid.Column>
          <Header as='h1'>Open Source</Header>
          <p>
            Open Source technologies form the bedrock of software
            created at CodeBlock. We plan to publish most of our components
            to give back to the community in the effort to ship bug free
            software.
          </p>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Header as='h2'>Reference Architectures</Header>
          <p>
            This section will list reference architectures along with
            an implementation to allow anyone to experiment and understand
            how something works under the hood.
          </p>
          <p>Stay tuned!</p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Layout>
))
