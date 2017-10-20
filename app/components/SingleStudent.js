import React, { Component } from 'react'
import { connect } from 'react-redux'
import SingleStudentDetails from './SingleStudentDetails'
import { removeStudent } from '../store/students'

function SingleStudent (props) {
  const { student } = props
  const { studentId } = props
  console.log(studentId)
    return (
      <div>
        <SingleStudentDetails student={student} />
          &nbsp;
         <button
           className='btn btn-default btn-xs'
           onClick={removeStudent(studentId)}>
           <span className="glyphicon glyphicon-remove" /> Delete Student
         </button>
      </div>
    )
  // }
}

const mapState = (state, ownProps) => {
  const studentId = Number(ownProps.match.params.studentId)
  return {
    student: state.students.find(student => student.id === studentId) || {name: '', student: ''},
    studentId: studentId
  }
}

const mapDispatch = null


export default connect(mapState, mapDispatch)(SingleStudent)
