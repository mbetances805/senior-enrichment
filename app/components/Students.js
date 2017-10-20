import React from 'react'
import { connect } from 'react-redux'
import StudentsList from './AllStudentsList'
import NewStudentEntry from './NewStudentEntry'

function Students (props) {
  return (
    <div>
      <h2>University Student List</h2>
      <StudentsList {...props} />
    </div>
  )
}

const mapState = function (state, ownProps) {
  return {
    students: state.students
  }
}

const mapDispatch = null

export default connect(mapState, mapDispatch)(Students)
