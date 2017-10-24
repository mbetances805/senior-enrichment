import React, { Component } from 'react'
import { connect } from 'react-redux'
import { wroteEmail } from '../store/newStudentEmail'

function newStudentEmail (props) {

  return(
    <input
      type='text'
      name='emailAddress'
      placeholder="Enter student's email"
      />
  )
}

export default connect(newStudentEmail)
