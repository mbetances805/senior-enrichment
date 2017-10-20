import React, { Component } from 'react'
import { connect } from 'react-redux'
import { writeStudent } from '../store/newStudentEntry'
import { createStudent } from '../store/students'


function newStudentEntry (props) {
  const { newStudent, handleSubmit, handleChange } = props

  return(
    <form onSubmit={evt => handleSubmit(newStudent, evt)}>
      <div className='form-group'>
        <label htmlFor='name'>Enter a New Student</label>
        <input
          value={newStudent}
          onChange={handleChange}
          type='text'
          name='studentName'
          placeholder='Enter student name'
        />
      <div className='form-group'>
        <button type='submit' className='btn btn-default'>Enter Student </button>
      </div>
    </div>
    </form>
  )
}

const mapState = (state) => {
  return {
    newStudent: state.newStudent,
  }
}

const mapDispatch = function (dispatch) {
  return {
    handleChange (event) {
      dispatch(writeStudent(event.target.value))
    },
    handleSubmit (name, evt) {
      evt.preventDefault()
      dispatch(createStudent({name}))
      dispatch(writeStudent(''))
    }
  }
}

export default connect(mapState, mapDispatch)(newStudentEntry)
