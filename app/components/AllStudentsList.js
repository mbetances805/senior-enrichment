import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import NewStudentEntry from './NewStudentEntry'
import { connect } from 'react-redux'

function AllStudentsList (props) {
  const { students } = props

  return (
    <div>
      <ul className='student-list'>
        {students.map(student => {
          return (
            <li key={student.id}>
              <NavLink to={`/students/${student.id}`}>
                <span>{student.name}</span>
              </NavLink>
            </li>
          )
        })
      }
        <NewStudentEntry />
      </ul>
    </div>
  )
}

const mapStateToProps = function (state) {
  return {
    student: state.student
  }
}

export default connect(mapStateToProps)(AllStudentsList)
