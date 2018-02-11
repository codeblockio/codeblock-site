import React from 'react'
import {
  Segment
} from 'semantic-ui-react'

export default ({children, ...rest}) => (
  <Segment style={{ padding: '4em 0em', minHeight: '90vh' }} vertical {...rest}>
    {children}
  </Segment>
)
