import React, { Component } from 'react'
import store from '../store'

export default class WriteName extends Component {
  constructor (props) {
    super(props)
      this.state = store.getState()
  }


}
