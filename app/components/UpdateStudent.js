import React, { Component } from 'react'
import { connect } from 'react-redux'

function UpdateStudent (props) {
  const { student } = props
  const { name } = student

  return (
    <div>
      <form>
        <label htmlFor='name'>Student Name</label>
        <input
          value={name}
          type='text'
          name='name'
          placeholder={name}
          className='form-control'
          />
      </form>
    </div>
  )
}


const mapState = (state) => {
  return {
    student: state.student
  }
}


export default connect(mapState)(UpdateStudent)
