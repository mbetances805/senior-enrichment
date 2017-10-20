import React, { Component } from 'react'
import { connect } from 'react-redux'
import { writeCampus } from '../store/newCampusEntry'
import { postCampus } from '../store/campuses'

function newCampusEntry (props) {
  const { newCampus, handleChange, handleSubmit } = props

  return(
    <form onSubmit={evt => handleSubmit(newCampus, evt)}>
      <div className='form-group'>
        <label htmlFor="name">Enter a New Campus</label>
        <input
          value={newCampus}
          onChange={handleChange}
          type="text"
          name="campusName"
          placeholder="Enter campus name"
        />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-default">Enter Campus</button>
      </div>
    </form>
  )
}

const mapState = (state) => {
  return {
    newCampus: state.newCampus,
  }
}

const mapDispatch = function (dispatch) {
  return {
    handleChange (event) {
      dispatch(writeCampus(event.target.value))
    },
    handleSubmit (name, evt) {
      evt.preventDefault()
      dispatch(postCampus({name}))
      dispatch(writeCampus(''))
    }
  }
}

export default connect(mapState, mapDispatch)(newCampusEntry)
