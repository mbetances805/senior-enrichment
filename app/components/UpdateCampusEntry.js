import React, { Component } from 'react'
import { connect } from 'react-redux'
import StudentListbyCampus from './StudentListbyCampus'
import { modifyCampus } from '../store/campuses'
import { writeCampus } from '../store/newCampusEntry'


function UpdateCampusEntry (props) {
  const { campusId, newCampus, campus, handleChange, handleSubmit } = props
  campus.name = newCampus

  return (
    <div>
      <form onSubmit={evt => handleSubmit(campus, evt)}>
        <label htmlFor="name">Campus Name</label>
        <input
          value={newCampus}
          type='text'
          name='name'
          placeholder={campus.name}
          className="form-control"
          onChange={handleChange}
          />
      </form>
    </div>
  )
}

const mapState = (state) => {
  return {
    newCampus: state.newCampus

  }
}

const mapDispatch = function (dispatch) {
  return {
    handleChange (event) {
      dispatch(writeCampus(event.target.value))
    },
    handleSubmit (input, evt) {
      console.log('evt', evt)
      evt.preventDefault()
      dispatch(modifyCampus(input))
      dispatch(writeCampus(''))
    }
  }
}

export default connect(mapState, mapDispatch)(UpdateCampusEntry)
