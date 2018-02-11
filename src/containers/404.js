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
import { Link } from 'react-static'
import Layout from '../components/Layout'

export default withSiteData(() => (
  <Layout>
    <Grid container stackable verticalAlign='middle'>
      <Grid.Row>
        <Grid.Column>
          <Header as='h1'>Oops! That doesn't exist</Header>
          <p>
            Sorry, the page you are looking for doesn't exist!
          </p>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column textAlign='center'>
          <Link to='/'><Button size='huge'>Home</Button></Link>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Layout>
))
