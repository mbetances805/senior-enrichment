import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import Campus from './Campus'
import {fetchCampus} from './store'

function CampusList (props) {
  const {campus, campuses} = props
  console.log(campus, campuses)

  return(
    <div>
      <ul className="campus-list">
        {classes.map(clas => <Campus name={name} key={name.id}/>)}
      </ul>
    </div>
  )
}

class CampusListLoader extends Component {
  componentDidMount () {
    this.props.fetchCampus(this.props.campus.name)
  }

  componentWillReceiveProps (nextProps) {
    if(nextProps.campus.name !== this.props.campus.name) {
      this.props.fetchCampus(nextProps.campus.name)
    }
  }

  render () {
    return (
      <CampusList {...this.props}/>
    )
  }
}

const mapStateToProps = function (state, ownProps) {
  const campusId = Number(ownProps.match.params.campusId)
  return {
    campus: state.campuses.find(campus => campus.id === campusId) || {name: ''},
    campusId
  }
}

const mapDispatchToProps = function (dispatch) {
  return {
    fetchCampus(campus) {
      dispatch(fetchcampus(campus))
    }
  }
}

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(CampusListLoader)
