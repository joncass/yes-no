// React library
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// Semantic library
import {
  Card,
  Statistic,
} from 'semantic-ui-react'

const Result = props => (
  <Card.Group>
    {
      props.questions.map(question => (
        <Card centered>
          <Card.Content>
            <Statistic.Group>
              <Statistic color='green' value='14' label='yes' />
              <Statistic color='red' value='27' label='no' />
            </Statistic.Group>
          </Card.Content>
          <Card.Content extra>
            {question.text}
          </Card.Content>
        </Card>
      ))
    }
  </Card.Group>
)

const mapStateToProps = state => ({
  questions: state.question.questions,
})

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Result)
