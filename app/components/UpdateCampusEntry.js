import React, { Component } from 'react'
import { connect } from 'react-redux'
import StudentListbyCampus from './StudentListbyCampus'
import { modifyCampus } from '../store/campuses'
import { writeCampus } from '../store/newCampusEntry'


function UpdateCampusEntry (props) {
  const { newCampus, campus, handleChange, handleSubmit } = props

  return (
    <div>
      <form onSubmit={evt => handleSubmit(id, newCampus)}>
        <label htmlFor="name">Campus Name</label>
        <input
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
    newCampus: state.newCampus,
  }
}

const mapDispatch = function (dispatch) {
  return {
    handleChange (event) {
      dispatch(writeCampus(event.target.value))
    },
    handleSubmit (id, name, evt) {
      evt.preventDefault()
      dispatch(modifyCampus(id, name))
      dispatch(writeCampus(''))
    }
  }
}

export default connect(mapState, mapDispatch)(UpdateCampusEntry)
