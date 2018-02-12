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
  state = { name: '', email: '', organization: '', phone: '', message: '', submitted: false }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  submitForm = () => {
    _slaask.message(`I'm ${this.state.name} from ${this.state.organization} and I'd like to reach out:\n${this.state.message}\nMy contact information is ${this.state.email} ${this.state.phone.length > 0 ? `or ${this.state.phone}` : ''}`)
    this.resetForm(true)
  }

  resetForm = (submitted) => {
    this.setState({
      name: '',
      email: '',
      organization: '',
      phone: '',
      message: '',
      submitted
    })
  }

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
              <Form onSubmit={this.submitForm}>
                <Form.Group widths='equal'>
                  <Form.Input fluid label='Name' name='name' placeholder='Joe' value={this.state.name} onChange={this.handleChange} required />
                  <Form.Input fluid label='Organization' name='organization' placeholder='Acme Inc' value={this.state.organization} onChange={this.handleChange} required />
                </Form.Group>
                <Form.Group widths='equal'>
                  <Form.Input fluid label='Email Address' name='email' placeholder='you@yourcompany.com' value={this.state.email} onChange={this.handleChange} required />
                  <Form.Input fluid label='Phone Number' name='phone' placeholder='240-123-4567' value={this.state.phone} onChange={this.handleChange} />
                </Form.Group>
                <Form.TextArea label='Message' name='message' placeholder='Tell us more about you' value={this.state.message} onChange={this.handleChange} required />
                <Form.Button>Submit</Form.Button>
              </Form>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              {
                this.state.submitted && (
                  <Label color='green'>Thank you for your inquiry! We'll be in touch shortly.</Label>
                )
              }
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Header as='h2'>Location</Header>
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
