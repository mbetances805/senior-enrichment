import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import NewStudentEntry from './NewStudentEntry'
import { connect } from 'react-redux'
import UpdateStudent from './UpdateStudent'

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
      </ul>
      <NewStudentEntry />
      <UpdateStudent students={students} />
    </div>
  )
}

const mapStateToProps = function (state) {
  return {
    student: state.student
  }
}

export default connect(mapStateToProps)(AllStudentsList)
