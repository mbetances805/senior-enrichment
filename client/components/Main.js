import React, {Component} from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import CampusList from './CampusList'
import store, { fetchCampus } from '../store/campuses'


export default class Main extends Component {
  componentDidMount () {
    const campusThunk = fetchCampus()
    store.dispatch(campusThunk)
  }

  render () {
    return (
      <div>
        <main>
          <Route path='/api' component={CampusList} />
        </main>
      </div>
    )
  }
}
