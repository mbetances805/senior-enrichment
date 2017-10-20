'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from './store'
import Root from './components/Root'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

render(
  <div>
    <Navbar />
    <Provider store={store}>
      <Root />
    </Provider>
    <Footer />
  </div>,
  document.getElementById('main')
)
