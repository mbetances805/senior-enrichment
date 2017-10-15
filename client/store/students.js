import axios from 'axios'

//ACTION TYPES
const GOT_STUDENTS = 'GOT_STUDENTS'
// const GOT_STUDENT = 'GOT_STUDENT'
const WROTE_STUDENT = 'WROTE_STUDENT'

//ACTION CREATORS
// export function gotStudent (student) {
//   const action = { type: GOT_STUDENT, student }
//   return action
// }

export function gotStudents (students) {
  const action = { type: GOT_STUDENTS, students }
  return action
}

export function wroteStudent (student) {
  return action = { type: WROTE_STUDENT, student }
}

//THUNK CREATORS
export function fetchStudents () {
  return axios.get('/api/students')
    .then(res => res.data)
    .then(students => {
      const action = gotStudents(students)
      dispatch(action)
    })
}

export function postStudent (student, history) {
  return axios.post('/api/students', student)
    .then(res => res.data)
    .then(newStudent => {
      dispatch(gotStudents))
      // history.push(`/students/`)
    })
}

//REDUCERS
export default function reducer (state = [], action) {
  switch (action.type){
    case GOT_STUDENTS:
      return action.students

    case WROTE_STUDENT:
      return action.students

    default:
      return state
  }
}
