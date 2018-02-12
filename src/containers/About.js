import React from 'react'
import { withSiteData } from 'react-static'
import {
  Segment,
  Container,
  Header,
  Image,
  Grid,
  Button,
  Icon,
} from 'semantic-ui-react'
import Layout from '../components/Layout'

import abhi from '../assets/abhi.jpg'

export default withSiteData(() => (
  <Layout>
    <Grid container stackable verticalAlign='middle'>
      <Grid.Row>
        <Grid.Column>
          <Header as='h1'>About</Header>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={4}>
          <Image src={abhi} size='large' bordered />
        </Grid.Column>
        <Grid.Column width={10}>
          <p>Abhinav (Abhi) Pobbati is a Full-Stack Business Technologist who has led goal-driven, high-performance teams in organizations.</p>
          <p>He's worked in a variety of industries (Defense, Immigration, Border Security, Satellites) and verticals (Software Development, Security Consulting, DevSecOps Transformations, Strategic Advisory)
            to drive change and innovation through the relentless pursuit of efficiency and maximizing ROI for customers.</p>
          <p>
            <a href='https://www.twitter.com/apobbati'>
              <Icon name='twitter' bordered circular inverted link/>
            </a>
            <a href='https://www.github.com/apobbati'>
              <Icon name='github' bordered circular inverted link/>
            </a>
            <a href='https://www.linkedin.com/in/apobbati/'>
              <Icon name='linkedin' bordered circular inverted link/>
            </a>
            <a href='mailto:apobbati@codeblock.io'>
              <Icon name='mail' bordered circular inverted link/>
            </a>
          </p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Layout>
))
