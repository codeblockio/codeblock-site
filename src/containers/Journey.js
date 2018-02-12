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
          <Header as='h1'>Journey</Header>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <p>
            Let us take you through a short survey to determine DevSecOps
            readiness.
          </p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Layout>
))
