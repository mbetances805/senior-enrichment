import axios from 'axios'

// ACTION TYPES
const GOT_STUDENTS = 'GOT_STUDENTS'
const CREATE_STUDENT = 'CREATE_STUDENT'
const DELETED_STUDENT = 'DELETED_STUDENT'

// ACTION CREATORS
export function gotStudents (students) {
  const action = { type: GOT_STUDENTS, students }
  return action
}

export function createStudent (name) {
  const action = { type: CREATE_STUDENT, name }
  return action
}

export function deletedStudent (id) {
  const action = { type: DELETED_STUDENT, id }
  return action
}

// THUNK CREATORS

export function fetchStudents () {
  return function thunk (dispatch) {
    return axios.get('/api/students')
    .then(res => {
      dispatch(gotStudents(res.data))
    })
    .catch(error => console.error('Issue fetching Students array', error))
  }
}

export function postStudent (name) {
  return function thunk (dispatch) {
    return axios.post('/api/students', name)
    .then(res => dispatch(createStudent(res.data)))
    .catch(error => console.error('Issue posting Student', error))
  }
}

export function removeStudent (id) {
  return function thunk (dispatch) {
    return axios.delete(`/api/students/${id}`)
    .then(res => (deletedStudent(res.data)))
    .catch(err => console.error(`Removing student: ${id} unsuccessful`, err))
  }
}

// REDUCERS
export default function reducer (state = [], action) {
  switch (action.type) {
    case GOT_STUDENTS:
      return action.students

    case CREATE_STUDENT:
      return [...state, action.name]

    case DELETED_STUDENT:
      return action.id

    default:
      return state
  }
}
