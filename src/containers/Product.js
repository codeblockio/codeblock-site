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
          <Header as='h1'>Product</Header>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Header as='h2'><Image src={codifi} size='small'/>Quasar</Header>
          <p>
            A complete and opinionated DevSecOps training platform for your
            organization to quickly ideate, build, test, deploy, monitor, measure, and manage applications.
          </p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Layout>
))
