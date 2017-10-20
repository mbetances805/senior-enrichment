import axios from 'axios'

// ACTION TYPES
const WRITE_STUDENT = 'WRITE_STUDENT'

// ACTION CREATORS
export function writeStudent (name) {
  const action = { type: WRITE_STUDENT, name }
  return action
}

// REDUCERS
export default function reducer (state = '', action) {
  switch (action.type) {
    case WRITE_STUDENT:
      return action.name

    default:
      return state
  }
}
