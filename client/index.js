import './index.scss'


import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter as Router } from 'react-router-dom'
import Main from './components'

ReactDOM.render(
  <Provider store={store}>
      <Main />
  </Provider>,
  document.getElementById('main')
);
