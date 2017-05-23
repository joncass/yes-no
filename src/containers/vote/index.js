// React library
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// Semantic library
import {
  Button,
  Card,
} from 'semantic-ui-react'

const Ask = props => (
  <Card centered>
    <Card.Content>
      <Card.Header>
        Question
      </Card.Header>
      <Card.Description>
        Is this a question that you want to vote on???
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <div className='ui two buttons'>
        <Button basic color='green'>Yes</Button>
        <Button basic color='red'>No</Button>
      </div>
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
