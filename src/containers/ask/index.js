// React library
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// Semantic library
import {
  Button,
  Card,
  TextArea,
} from 'semantic-ui-react'

const Ask = props => (
  <Card centered>
    <Card.Content>
      <TextArea
        autoHeight
        placeholder='Ask your yes/no question'
      />
    </Card.Content>
    <Card.Content extra>
      <Button primary>Ask!</Button>
    </Card.Content>
  </Card>
)

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Ask)
