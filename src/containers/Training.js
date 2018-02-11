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

export default withSiteData(() => (
  <Layout>
    <Grid container stackable verticalAlign='middle'>
      <Grid.Row>
        <Grid.Column>
          <Header as='h1'>Training</Header>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Layout>
))
