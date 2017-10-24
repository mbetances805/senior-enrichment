import axios from 'axios'

// ACTION TYPES
const WROTE_EMAIL = 'WROTE_EMAIL'

//ACTION CREATORS
export function wroteEmail (email) {
    const action = { type: WROTE_EMAIL, email }
    return action
}

//REDUCERS
export default function reducer (state = '', action) {
  switch (action.type) {
    case WROTE_EMAIL:
      return action.email

    default:
      return state
  }
}
