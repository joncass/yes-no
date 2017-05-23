// React library
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// Semantic library
import {
  Button,
  Card,
  Header,
} from 'semantic-ui-react'

// My library
import { increment, decrement, incrementAsync } from '../../modules/counter'

const Home = props => (
  <div>
    <Header as='h1'>Home</Header>
    <Card>
      <Card.Content>
        <Card.Header>
          Count
        </Card.Header>
        <Card.Meta extra>
          {props.count}
        </Card.Meta>
      </Card.Content>
    </Card>

    <Button.Group>
      <Button
        positive
        content='Increment'
        icon='plus'
        labelPosition='left'
        onClick={props.increment}
        disabled={props.isIncrementing}
        loading={props.isIncrementing}
      />
      <Button
        negative
        content='Decrement'
        icon='minus'
        labelPosition='left'
        onClick={props.decrement}
      />
        <Button
          primary
          content='Async'
          icon='plus'
          labelPosition='left'
          onClick={props.incrementAsync}
          disabled={props.isIncrementing}
          loading={props.isIncrementing}
        />
    </Button.Group>

  </div>
)

const mapStateToProps = state => ({
  count: state.counter.count,
  isIncrementing: state.counter.isIncrementing,
  isDecrementing: state.counter.isDecrementing,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  increment,
  incrementAsync,
  decrement,
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home)
