import React from 'react'

function SingleStudentDetails (props) {
  const { student } = props
  console.log(props)
  return (
    <div>
      This is the SingleStudentDetails js file
      <p>{student.name}</p>
      <p>{student.id}</p>
    </div>
  )
}

export default SingleStudentDetails
