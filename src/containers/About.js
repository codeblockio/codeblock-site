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
  Form,
  Label,
} from 'semantic-ui-react'
import Layout from '../components/Layout'
import { ReactTypeformEmbed } from 'react-typeform-embed'

import abhi from '../assets/abhi.jpg'

import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const Map = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBlO5HlrlZM68ym4MM-zZvz0BEMFrcxBOw&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={15}
    defaultCenter={{ lat: props.lat, lng: props.lng }}
  >
    {props.isMarkerShown && <Marker position={{ lat: props.lat, lng: props.lng }} />}
  </GoogleMap>
)

class About extends React.Component {
  render() {
    return (
      <Layout>
        <Grid container stackable verticalAlign='middle'>
          <Grid.Row>
            <Grid.Column>
              <Header as='h1'>About</Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Header as='h2'>Team</Header>
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
          <Grid.Row>
            <Grid.Column>
              <Header as='h2'>Contact</Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <p>Drop us a line at <a href="mailto:contact@codeblock.io">contact@codeblock.io</a> and see how we can work for you!</p>
              <Form method="get" action="https://codeblockio.typeform.com/to/ZXy5e4" target="_blank"> 
              <Form.Button primary size='huge' type='submit'>Contact Us</Form.Button>
              </Form>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Header as='h2'>Location</Header>
              <p>1775 Tysons Blvd Suite 500<br/>Tysons, VA 22102</p>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Map lat={38.923590} lng={-77.220486} isMarkerShown/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Layout>
    )
  }
}

export default withSiteData(About)
