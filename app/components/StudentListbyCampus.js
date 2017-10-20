import React from 'react'

function StudentListbyCampus (props) {
    return (
      <div>
        <p>This is StudentListbyCampus js file fetching the campusId from Campus js </p>
        <p>campusId: {props.campusId}</p>
        <ul>
          {props.students.map(student => <li key={student.id}>{student.name}</li>)}
        </ul>
      </div>
    )
}

export default StudentListbyCampus
