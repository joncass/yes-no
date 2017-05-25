// React library
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Route } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'

// My library
import store, { history } from './store'
import App from './containers/app'
import Ask from './containers/ask'
import Result from './containers/result'
import Vote from './containers/vote'

const target = document.querySelector('#root')

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App>
        <Route exact path="/" component={Ask} />
        <Route exact path="/vote" component={Vote} />
        <Route exact path="/result" component={Result} />
      </App>
    </ConnectedRouter>
  </Provider>,
  target
)
