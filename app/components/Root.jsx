import React, { Component } from 'react'
import CampusList from './CampusList'
import Campus from './Campus'
import Students from './Students'
import SingleStudent from './SingleStudent'
import store from '../store'
import { fetchCampuses, postCampus } from '../store/campuses'
import { fetchStudents } from '../store/students'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

class Root extends Component {

  componentDidMount () {
    this.props.fetchCampusList()
  }

  render () {
    return (
      <Router >
        <main>
          <Switch>
            <Route exact path='/' component={CampusList} />
            <Route path='/students/:studentId' component={SingleStudent} />
            <Route exact path='/students' component={Students} />
            <Route path='/:campusId' component={Campus} />
            <Route component={CampusList} />
          </Switch>
        </main>
      </Router>
    );
  }
}

const mapState = null

const mapDispatch = dispatch => ({
  fetchCampusList: () => {
    dispatch(fetchCampuses())
    dispatch(fetchStudents())
  }
})

export default connect(mapState, mapDispatch)(Root)
