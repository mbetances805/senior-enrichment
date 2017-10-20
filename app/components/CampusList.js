import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import NewCampusEntry from './NewCampusEntry'

function CampusList (props) {
  const {campuses} = props

  return (
    <div>
      <h2>University Campuses</h2>
      <ul className='campus-list'>
        {
          campuses.map(campus => {
            return (
              <div key={campus.id}>
              <li>
                <NavLink to={`/${campus.id}`}>
                  <span>{campus.name}</span>
                </NavLink>
                </li>
              </div>
            )
          })
        }
      </ul>
      <NewCampusEntry />
    </div>
  )
}

const mapState = function (state) {
  return {
    campuses: state.campuses
  }
}

export default connect(mapState)(CampusList)
