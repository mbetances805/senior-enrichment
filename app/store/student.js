import axios from 'axios'

// ACTION TYPE
const GOT_STUDENT = 'GOT_STUDENT'

// ACTION CREATOR
export function gotStudent (student) {
  const action = { type: GOT_STUDENT, student }
  return action
}

// THUNK CREATOR
export function fetchStudent (student) {
  return function thunk (dispatch) {
    return axios.get('api/students/:studentId')
    .then(res => dispatch(gotStudent(res.data)))
    .catch(err => console.error('Issue fetching student data', err))
  }
}

// REDUCER
export default function reducer (state = '', action) {
  switch (action.type) {
    case GOT_STUDENT:
      return action.student

    default:
      return state
  }
}
