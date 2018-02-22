import React from 'react'
import { withSiteData } from 'react-static'
import {
  Segment,
  Container,
  Header,
  Button,
  Icon,
  Responsive,
  Grid,
  Input,
  Form,
  Image,
} from 'semantic-ui-react'
import { NavLink } from 'react-static'

import logo from '../assets/logo.png'
import Layout from '../components/Layout'

const styles = {
  logo: {
    marginTop: '3em',
  },
  h1: {
    fontSize: '4em',
    fontWeight: 'normal',
    marginBottom: 0,
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
    fontSize: '2.5em',
    marginTop: '0em',
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

class SignupForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      signUpEmail: ''
    }
  }

  render () {
    return (
      <Form
        method='post'
        action='https://codeblock.us9.list-manage.com/subscribe/post?u=324e1a3fe19d544c10b41d619&amp;id=ef231932eb'
        target='_blank'
      >
        <Form.Group widths='equal'>
          <Form.Field>
            <Form.Input
              name='FNAME'
              inverted
              size='big'
              placeholder='First name'
            />
          </Form.Field>
          <Form.Field>
            <Form.Input
              name='LNAME'
              inverted
              size='big'
              placeholder='Last name'
            />
          </Form.Field>
        </Form.Group>
        <Form.Field>
          <Form.Input
            name='EMAIL'
            inverted
            size='big'
            type='email'
            icon='mail'
            placeholder='Enter your email'
            required
          />
        </Form.Field>
        <Form.Group>
          <Form.Button primary size='massive' type='submit'>
            Get Early Access!
            <Icon name='right arrow' />
          </Form.Button>
        </Form.Group>
      </Form>
    )
  }
}

export default withSiteData(() => {
  return (
    <Layout inverted>
      <Container>
        <Grid inverted stackable>
          <Grid.Row>
            <Grid.Column>
              <Responsive {...Responsive.onlyMobile}>
                <Image src={logo} size='medium' centered style={styles.logo}/>
              </Responsive>
              <Responsive {...Responsive.onlyComputer}>
                <Image src={logo} size='medium' style={styles.logo}/>
              </Responsive>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={10}>
              <Responsive {...Responsive.onlyMobile}>
                <Content mobile/>
              </Responsive>

              <Responsive {...Responsive.onlyComputer}>
                <Content />
              </Responsive>

              <SignupForm />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Layout>
  )
})
