// React library
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// Semantic library
import {
  Button,
  Card,
  Form,
} from 'semantic-ui-react'

// My library
import {
  addQuestion,
  setNewQuestion,
} from '../../modules/question'

const Ask = props => (
  <Card centered>
    <Card.Content>
      <Form>
        <Form.TextArea
          autoHeight
          placeholder='Ask your yes/no question'
          value={props.text}
          onChange={e => props.setNewQuestion(e.target.value)}
        />
      </Form>
    </Card.Content>
    <Card.Content extra>
      <Button
        primary
        onClick={() => props.addQuestion({ text: props.text })}
      >
        Ask!
      </Button>
    </Card.Content>
  </Card>
)

const mapStateToProps = state => ({
  text: state.question.newQuestionText,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  addQuestion,
  setNewQuestion,
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Ask)
